"use client";
import { useEffect, useState } from "react";
import { faFacebook, faGithub, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCode, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { socialLinks, RedirectLink } from "@/components/handleComponents/redirectLink/RedirectLink";
import style from "./HomePart.module.css";

const HomePart = () => {
    const state = [" gaming ", " coding ", " sleeping "];

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const [character, setCharacter] = useState("");

    const printState = async () => {
        let item = 0;
        let newString = "";
        for (item; item <= state.length; item++) {
            if (item === state.length) item = 0;
            let tempChar = "";
            for (let char = 0; char < state[item].length; char++) {
                tempChar += state[item][char];
                setCharacter(tempChar);
                await delay(200);
            }
            await delay(1400);
            for (let char = 0; char < state[item].length; char++) {
                newString = tempChar.slice(0, -1);
                tempChar = newString;
                setCharacter(tempChar);
                await delay(200);
            }

            await delay(1000);
        }
    };
    useEffect(() => {
        printState();
    }, []);

    return (
        <div id="home" className={style.home}>
            <div className={style.leftContent}>
                <div className={style.title}>
                    <h1 className={style.greeting}>
                        Hi <span>👋🏼</span>, I&apos;m NV.BINH.
                    </h1>
                    <div className={style.descript}>
                        Someone who likes to
                        <div className={style.typing}>{character}</div>
                    </div>
                </div>

                <div className={style.social}>
                    <RedirectLink href={"/github"} riderectLink={socialLinks.github} style={style.github} children={<FontAwesomeIcon className={style.icon} icon={faGithub} />} />
                    <RedirectLink href={"/facebook"} riderectLink={socialLinks.facebook} style={style.facebook} children={<FontAwesomeIcon className={style.icon} icon={faFacebook} />} />
                    <RedirectLink href={"/tiktok"} riderectLink={socialLinks.tiktok} style={style.tiktok} children={<FontAwesomeIcon className={style.icon} icon={faTiktok} />} />
                </div>
                <div className={style.linkLanding}>
                    <a href="#about" className={style.linkAbout}>
                        <FontAwesomeIcon className={style.icon} icon={faUser} />
                        About me
                    </a>
                    <a href="#" className={style.linkProject}>
                        <FontAwesomeIcon className={style.icon} icon={faCode} />
                        some of my projects
                    </a>
                </div>
            </div>
            <div className={style.rightContent}>
                <div className={style.imageWrapper}>
                    <Image alt="Dev image" src={"/image/developer-pic-1.webp"} className={style.image} width={580} height={580} priority />
                </div>
            </div>
        </div>
    );
};

export default HomePart;
