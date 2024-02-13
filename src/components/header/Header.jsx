"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode, faHouse, faLink, faPalette, faQrcode, faUser, faWrench, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import style from "./Header.module.css";
import ToggleTheme from "../handleComponents/toggleTheme/ToggleTheme";

const Header = ({ scrolltoView, anotherPage = false }) => {
    const [screenWidth, setScreenWidth] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [showToogleMenu, setShowToogleMenu] = useState(false);
    const [currentHash, setCurrentHash] = useState(useSearchParams().get("option"));

    const params = useSearchParams().get("option");
    useEffect(() => {
        setCurrentHash(params);
    }, [params]);

    const handleDropdown = (number) => {
        if (number === 1) {
            scrolltoView(1);
        } else if (number === 2) {
            scrolltoView(2);
        } else if (number === 3) {
            scrolltoView(3);
        } else if (number === 4) {
            scrolltoView(4);
        }
        setShowToogleMenu((pre) => !pre);
    };

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        if (typeof window !== "undefined") {
            window.addEventListener("resize", handleResize);
            setScreenWidth(window.innerWidth);
            setIsLoaded(true);
            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, []);

    if (!isLoaded)
        return (
            <nav className={style.nav}>
                <div className={style.navWrapper}>
                    <Link href={"/"} className={style.brand}>
                        <h1>
                            Jupi<span>*</span>
                        </h1>
                    </Link>
                </div>
            </nav>
        );
    else if (anotherPage) {
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
                                <Link className={`${style.link} ${currentHash === "shorten-url" ? style.linkActive : ""}`} href="?option=shorten-url">
                                    <FontAwesomeIcon className={style.icon} icon={faLink} />
                                    Shorten URL
                                </Link>
                            </div>
                            <div>
                                <Link className={`${style.link} ${currentHash === "qr-code" ? style.linkActive : ""}`} href="?option=qr-code">
                                    <FontAwesomeIcon className={style.icon} icon={faQrcode} />
                                    QR code
                                </Link>
                            </div>
                            <div>
                                <Link className={`${style.link} ${currentHash === "color-picker" ? style.linkActive : ""}`} href="?option=color-picker">
                                    <FontAwesomeIcon className={style.icon} icon={faPalette} />
                                    Color picker
                                </Link>
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
                                            <Link onClick={handleDropdown} className={`${style.link} ${currentHash === "shorten-url" ? style.linkActive : ""}`} href="?option=shorten-url">
                                                <FontAwesomeIcon className={style.icon} icon={faLink} />
                                                Shorten URL
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={handleDropdown} className={`${style.link} ${currentHash === "qr-code" ? style.linkActive : ""}`} href="?option=qr-code">
                                                <FontAwesomeIcon className={style.icon} icon={faQrcode} />
                                                QR code
                                            </Link>
                                        </div>
                                        <div>
                                            <Link onClick={handleDropdown} className={`${style.link} ${currentHash === "color-picker" ? style.linkActive : ""}`} href="?option=color-picker">
                                                <FontAwesomeIcon className={style.icon} icon={faPalette} />
                                                Color picker
                                            </Link>
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
    }
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
                            <button className={style.link} onClick={() => scrolltoView(1)}>
                                <FontAwesomeIcon className={style.icon} icon={faHouse} />
                                Home
                            </button>
                        </div>
                        <div>
                            <button className={style.link} onClick={() => scrolltoView(2)}>
                                <FontAwesomeIcon className={style.icon} icon={faUser} />
                                About
                            </button>
                        </div>
                        <div>
                            <button className={style.link} onClick={() => scrolltoView(3)}>
                                <FontAwesomeIcon className={style.icon} icon={faCode} />
                                Project
                            </button>
                        </div>
                        <div>
                            <button className={style.link} onClick={() => scrolltoView(4)}>
                                <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
                                Contact
                            </button>
                        </div>
                        <div>
                            <Link className={style.link} href={"/tools?option=shorten-url"}>
                                <FontAwesomeIcon className={style.icon} icon={faWrench} />
                                Tools
                            </Link>
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
                                        <button className={style.link} onClick={() => handleDropdown(1)}>
                                            <FontAwesomeIcon className={style.icon} icon={faHouse} />
                                            Home
                                        </button>
                                    </div>
                                    <div>
                                        <button className={style.link} onClick={() => handleDropdown(2)}>
                                            <FontAwesomeIcon className={style.icon} icon={faUser} />
                                            About
                                        </button>
                                    </div>
                                    <div>
                                        <button className={style.link} onClick={() => handleDropdown(3)}>
                                            <FontAwesomeIcon className={style.icon} icon={faCode} />
                                            Project
                                        </button>
                                    </div>
                                    <div>
                                        <button className={style.link} onClick={() => handleDropdown(4)}>
                                            <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
                                            Contact
                                        </button>
                                    </div>
                                    <div>
                                        <Link className={style.link} href={"/tools?option=shorten-url"}>
                                            <FontAwesomeIcon className={style.icon} icon={faWrench} />
                                            Tools
                                        </Link>
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
