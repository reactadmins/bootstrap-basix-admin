import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { createRoot } from "react-dom/client";
import App from "../src/components/Notice/App";
import { waitForElm } from "../utils/waitForElm";


// /**
//  * Finding DOM css selector when selector is available than working.
//  * @param {css selector} selector 
//  * @returns 
//  */
// function waitForElm(selector) {
//     return new Promise((resolve) => {
//         if (document.querySelector(selector)) {
//             return resolve(document.querySelector(selector));
//         }

//         const observer = new MutationObserver((mutations) => {
//             if (document.querySelector(selector)) {
//                 observer.disconnect();
//                 resolve(document.querySelector(selector));
//             }
//         });

//         // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
//         observer.observe(document.body, {
//             childList: true,
//             subtree: true,
//         });
//     });
// }

// waitForElm("#notice-root").then((elm) => {
//     createRoot(elm).render(<App />);
// });

if (ExecutionEnvironment.canUseDOM) {
    // As soon as the site loads in the browser, register a global event listener
    waitForElm("#notice-root").then((elm) => {
        /**
         * React App Setup
         */
        const root = createRoot(elm);
        root.render(<App />);


        /**
         * Light or Dark mode for Bootstrap.
         */
        const lightDarkBtn = document.querySelector(".navbar__items--right > div > .clean-btn");


        /**
         * Check light or dark mode set on html tag then bootstrap attributes set html tag
         */
        const lightOrDark = document.documentElement.getAttribute("data-theme");
        
        if(lightOrDark === "dark") {
            document.documentElement.setAttribute('data-bs-theme', "dark");
        }
        
        if(lightOrDark === "light") {
            document.documentElement.setAttribute('data-bs-theme', "light");
        }

        /**
         * Toggle button click to set bootstrap attributes
         */
        lightDarkBtn.addEventListener("click", (e) => {
            const mode = document.documentElement.getAttribute("data-theme");

            if(mode === "light") {
                document.documentElement.setAttribute('data-bs-theme', "dark");
            }

            if(mode === "dark") {
                document.documentElement.setAttribute('data-bs-theme', "light");
            }
        })
    });

   
}