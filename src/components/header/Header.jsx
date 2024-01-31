"use client";

import { useState, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faHouse, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import style from "./Header.module.css";
import ToggleTheme from "../handleComponents/toggleTheme/ToggleTheme";

const Header = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    const [showToogleMenu, setShowToogleMenu] = useState(false);

    useLayoutEffect(() => {
        // Kiểm tra xem có đang chạy trên trình duyệt hay không
        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            setScreenWidth(window.innerWidth);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    const handleDropdown = () => {
        setShowToogleMenu((pre) => !pre);
    };

    return (
        <nav className={style.nav}>
            {screenWidth > 768 ? (
                <div className={style.navWrapper}>
                    <Link href={"/"} className={style.brand}>
                        <h1>
                            Jupi<span>*</span>
                        </h1>
                    </Link>
                    <div className={style.navigate}>
                        <div>
                            <a className={style.link} href="#home">
                                <FontAwesomeIcon className={style.icon} icon={faHouse} />
                                Home
                            </a>
                        </div>
                        <div>
                            <a className={style.link} href="#about">
                                <FontAwesomeIcon className={style.icon} icon={faUser} />
                                About
                            </a>
                        </div>
                        <div>
                            <a className={style.link} href="#project">
                                <FontAwesomeIcon className={style.icon} icon={faCode} />
                                Project
                            </a>
                        </div>
                        <div>
                            <a className={style.link} href="#contact">
                                <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className={style.setting}>
                        <div className={style.source}>
                            <a href="https://github.com/NVB07">
                                <FontAwesomeIcon className={style.icon} icon={faGithub} />
                            </a>
                        </div>
                        <ToggleTheme />
                    </div>
                </div>
            ) : (
                <div className={style.MobileNavWrapper}>
                    <Link href={"/"} className={style.brand}>
                        <h1>
                            Jupi<span>*</span>
                        </h1>
                    </Link>
                    <div className={style.rightWrapper}>
                        <ToggleTheme />
                        <button onClick={handleDropdown} className={style.toggleMenu}>
                            {!showToogleMenu ? (
                                <FontAwesomeIcon
                                    style={showToogleMenu ? { opacity: 0, transform: "rotate(0)", zIndex: 0 } : { opacity: 1, transform: "rotate(180deg)", zIndex: 10 }}
                                    className={style.toggleButton}
                                    icon={faBars}
                                />
                            ) : (
                                <FontAwesomeIcon
                                    style={showToogleMenu ? { opacity: 1, transform: "rotate(0)", zIndex: 10 } : { opacity: 0, transform: "rotate(135deg)", zIndex: 0 }}
                                    className={style.toggleButton}
                                    icon={faXmark}
                                />
                            )}
                        </button>
                    </div>
                    {showToogleMenu ? (
                        <div className={style.overlay}>
                            <div className={style.mobileNavigate}>
                                <div className={style.navigate}>
                                    <div>
                                        <a className={style.link} href="#home">
                                            <FontAwesomeIcon className={style.icon} icon={faHouse} />
                                            Home
                                        </a>
                                    </div>
                                    <div>
                                        <a className={style.link} href="#about">
                                            <FontAwesomeIcon className={style.icon} icon={faUser} />
                                            About
                                        </a>
                                    </div>
                                    <div>
                                        <a className={style.link} href="#project">
                                            <FontAwesomeIcon className={style.icon} icon={faCode} />
                                            Project
                                        </a>
                                    </div>
                                    <div>
                                        <a className={style.link} href="#contact">
                                            <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
                                            Contact
                                        </a>
                                    </div>
                                    <div>
                                        <a className={style.link} href="https://github.com/NVB07">
                                            <FontAwesomeIcon className={style.icon} icon={faGithub} />
                                            Github
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            )}
        </nav>
    );
};

export default Header;
