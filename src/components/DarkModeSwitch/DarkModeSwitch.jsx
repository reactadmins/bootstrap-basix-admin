import darkModeSwitchStyle from "@/assets/scss/DarkModeSwitch.module.scss";
import { useDashboardDataContext } from "@/context/dashboardDataContext";

const DarkModeSwitch = () => {
    const { isDark, setIsDark } = useDashboardDataContext();

    return (
        <button
            type="button"
            className={darkModeSwitchStyle.dark_mode_switch}
            onClick={() => setIsDark(!isDark)}
            data={isDark ? "true" : "false"}
        >
            {isDark ? (
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M3.00048 14.2836C9.21459 14.2836 14.2859 9.21031 14.2859 2.99373C14.2859 2.20772 14.2144 1.42172 14.0002 0.635715C13.9287 0.206986 14.3573 -0.150289 14.7859 0.0640757C17.9286 1.9219 20 5.35174 20 9.28176C20 15.2125 15.2144 20 9.28601 20C5.35755 20 1.92907 17.9278 0.0719838 14.7838C-0.142296 14.4265 0.143409 13.9263 0.643395 13.9978C1.42909 14.2122 2.21478 14.2836 3.00048 14.2836Z" />
                </svg>
            ) : (
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 1C12 0.447715 11.5523 0 11 0C10.4477 0 10 0.447715 10 1V3C10 3.55228 10.4477 4 11 4C11.5523 4 12 3.55228 12 3V1ZM4.60701 3.1928C4.21648 2.80227 3.58332 2.80227 3.1928 3.1928C2.80227 3.58332 2.80227 4.21648 3.1928 4.60701L4.60701 6.02122C4.99753 6.41175 5.6307 6.41175 6.02122 6.02122C6.41175 5.6307 6.41175 4.99753 6.02122 4.60701L4.60701 3.1928ZM18.8072 4.60701C19.1977 4.21648 19.1977 3.58332 18.8072 3.1928C18.4167 2.80227 17.7835 2.80227 17.393 3.1928L15.9788 4.60701C15.5883 4.99753 15.5883 5.6307 15.9788 6.02122C16.3693 6.41175 17.0025 6.41175 17.393 6.02122L18.8072 4.60701ZM11 5C7.68629 5 5 7.68629 5 11C5 14.3137 7.68629 17 11 17C14.3137 17 17 14.3137 17 11C17 7.68629 14.3137 5 11 5ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H3C3.55228 12 4 11.5523 4 11C4 10.4477 3.55228 10 3 10H1ZM19 10C18.4477 10 18 10.4477 18 11C18 11.5523 18.4477 12 19 12H21C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10H19ZM6.02122 17.3971C6.41175 17.0066 6.41175 16.3734 6.02122 15.9829C5.6307 15.5924 4.99753 15.5924 4.60701 15.9829L3.1928 17.3971C2.80227 17.7876 2.80227 18.4208 3.1928 18.8113C3.58332 19.2018 4.21648 19.2018 4.60701 18.8113L6.02122 17.3971ZM17.393 15.9829C17.0025 15.5924 16.3693 15.5924 15.9788 15.9829C15.5883 16.3734 15.5883 17.0066 15.9788 17.3971L17.393 18.8113C17.7835 19.2018 18.4167 19.2018 18.8072 18.8113C19.1977 18.4208 19.1977 17.7876 18.8072 17.3971L17.393 15.9829ZM12 19C12 18.4477 11.5523 18 11 18C10.4477 18 10 18.4477 10 19V21C10 21.5523 10.4477 22 11 22C11.5523 22 12 21.5523 12 21V19Z"
                    />
                </svg>
            )}
        </button>
    );
};

export default DarkModeSwitch;

