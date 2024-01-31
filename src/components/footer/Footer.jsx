"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import { RedirectLink, socialLinks } from "../handleComponents/redirectLink/RedirectLink";
import style from "./footer.module.css";
import { faFacebook, faGithub, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.footerWrapper}>
                <div className={style.footerLeft}>
                    <div className={style.footerTag}>
                        <div className={style.footerName}>
                            <h4>
                                <FontAwesomeIcon className={style.codeIcon} icon={faCode} />
                                with
                                <FontAwesomeIcon className={style.heartIcon} icon={faHeart} />
                                by<p> Jupi</p>
                                <span>*</span>
                            </h4>
                        </div>
                        <div className={style.footerCopyright}>
                            <FontAwesomeIcon icon={faCopyright} />
                            2024 Copyright Jupi<span>*</span>
                        </div>
                    </div>
                </div>
                <div className={style.footerRight}>
                    <div className={style.footerSocial}>
                        <div className={style.footerSocialTitle}>SOCIAL</div>
                    </div>
                    <div className={style.socialLink}>
                        <RedirectLink href={"/github"} riderectLink={socialLinks.github} style={style.github}>
                            <FontAwesomeIcon className={style.icon} icon={faGithub} />
                        </RedirectLink>
                        <RedirectLink href={"/facebook"} riderectLink={socialLinks.facebook} style={style.facebook}>
                            <FontAwesomeIcon className={style.icon} icon={faFacebook} />
                        </RedirectLink>
                        <RedirectLink href={"/tiktok"} riderectLink={socialLinks.tiktok} style={style.tiktok}>
                            <FontAwesomeIcon className={style.icon} icon={faTiktok} />
                        </RedirectLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
