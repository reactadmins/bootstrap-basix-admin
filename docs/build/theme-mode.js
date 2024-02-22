import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { waitForElm } from "../utils/waitForElm";

const LOCAL_STORAGE_KEY = "ra-theme";

if (ExecutionEnvironment.canUseDOM) {

    waitForElm(".light-dark-wrapper").then((elm) => {
        const lightBtn = document.querySelector(".light-dark-dropdown .light");
        const darkBtn = document.querySelector(".light-dark-dropdown .dark");
        const systemBtn = document.querySelector(".light-dark-dropdown .system");

        const dropdown = document.querySelector(".light-dark-dropdown");
        const modeIcon = document.querySelector(".mode-icon");

        document.addEventListener('click', (event) => {  
            const isVisible  = getComputedStyle(dropdown).visibility === "visible";       

            if (!dropdown.contains(event.target)) {
                if(!!isVisible){
                    dropdown.style.visibility = 'hidden';
                }
            }
        });

        handleClick(modeIcon, () => {
            setTimeout(() => {
                dropdown.style.visibility = "visible";
            }, 10)
        })

        const mode = localStorage.getItem(LOCAL_STORAGE_KEY);

        if(mode === "dark"){
            handleMode("dark")
            setTimeout(() => {
                localStorage.setItem("theme", "dark");
            }, 10)
        }else{
            handleMode("light")
            setTimeout(() => {
                localStorage.setItem("theme", "light");
            }, 10)
        }

        handleClick(lightBtn, () => {
            handleMode("light")
        })
        
        handleClick(darkBtn, () => {
            handleMode("dark")
        })

        handleClick(systemBtn, () => {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if(isDark){
                handleMode("dark")
            }else{
                handleMode("light")
            }
        })
    });
}

/**
 * Handle click
 * @param {css selector} el 
 * @param {function} callback 
 * @returns 
 */
function handleClick(el, callback ){
    return el.addEventListener("click", callback)
}

function handleMode(mode){
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
    localStorage.setItem("theme", mode);
    document.documentElement.setAttribute('data-theme', mode);
    document.documentElement.setAttribute('data-bs-theme', mode);

    const savedMode =  localStorage.getItem(LOCAL_STORAGE_KEY);

    if(mode === "light" || savedMode === "light"){
        const lightIcon = document.querySelector(".lightIcon");
        const darkIcon = document.querySelector(".darkIcon");
        lightIcon.style.display = "block"
        darkIcon.style.display = "none"
    }else{
        const lightIcon = document.querySelector(".lightIcon");
        const darkIcon = document.querySelector(".darkIcon");
        lightIcon.style.display = "none"
        darkIcon.style.display = "block"
    }

    const dropdown = document.querySelector(".light-dark-dropdown");

    dropdown.style.visibility = "hidden";
}

