"use client";
import { useState, useEffect } from "react";

import style from "./ToggleTheme.module.css";
import { MoonIcon, SunBrightIcon } from "../icon/Icons";

const ToggleTheme = () => {
    const [darkTheme, setdarkTheme] = useState(true);

    useEffect(() => {
        const isDarkDefautl = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        const nonThemeLocal = localStorage.getItem("darkTheme") === null;
        if (nonThemeLocal) {
            localStorage.setItem("darkTheme", isDarkDefautl);
            setdarkTheme(isDarkDefautl);
        }
    }, []);

    const toggleTheme = () => {
        setdarkTheme((prevState) => {
            localStorage.setItem("darkTheme", !prevState);
            return !prevState;
        });
    };

    useEffect(() => {
        const isDark = localStorage.getItem("darkTheme");
        if (isDark === "true") {
            setdarkTheme(true);
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            setdarkTheme(false);
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [darkTheme]);

    return (
        <button className={style.btnToggle} onClick={toggleTheme}>
            <SunBrightIcon classCustom={style.icon} styleInline={darkTheme ? { opacity: 0, transform: "rotate(0)", zIndex: 0 } : { opacity: 1, transform: "rotate(135deg)", zIndex: 10 }} />
            <MoonIcon classCustom={style.icon} styleInline={darkTheme ? { opacity: 1, transform: "rotate(0)", zIndex: 10 } : { opacity: 0, transform: "rotate(135deg)", zIndex: 0 }} />
        </button>
    );
};

export default ToggleTheme;
