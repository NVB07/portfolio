import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import style from "./Header.module.css";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import ToggleTheme from "../handleComponents/toggleTheme/ToggleTheme";

const Header = () => {
    return (
        <nav className={style.nav}>
            <div className={style.navWrapper}>
                <Link href={"/"} className={style.brand}>
                    <h1>
                        Jupi<span>*</span>
                    </h1>
                </Link>
                <div className={style.navigate}>
                    <div>
                        <a className={style.link} href="#">
                            <FontAwesomeIcon className={style.icon} icon={faHouse} />
                            Home
                        </a>
                    </div>
                    <div>
                        <a className={style.link} href="#">
                            <FontAwesomeIcon className={style.icon} icon={faUser} />
                            About
                        </a>
                    </div>
                    <div>
                        <a className={style.link} href="#">
                            <FontAwesomeIcon className={style.icon} icon={faCode} />
                            Project
                        </a>
                    </div>
                    <div>
                        <a className={style.link} href="#">
                            <FontAwesomeIcon className={style.icon} icon={faPaperPlane} />
                            Contact
                        </a>
                    </div>
                </div>
                <div className={style.setting}>
                    <div className={style.source}>
                        <a href="#">
                            <FontAwesomeIcon className={style.icon} icon={faGithub} />
                        </a>
                    </div>
                    <ToggleTheme />
                </div>
            </div>
        </nav>
    );
};

export default Header;
