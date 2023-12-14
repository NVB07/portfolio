"use client";
import { useEffect, useState } from "react";
import { faFacebook, faGithub, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs/lib/anime.es";
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
        const animation = anime({
            targets: `.${style.title}`,
            translateX: [-60, 0],
            duration: 500,
            opacity: [0, 1],
            easing: "easeInOutSine",
        });
        animation.finished.then(() => {
            printState();
        });

        return () => {
            animation.pause();
        };
    }, []);

    return (
        <div className={style.home}>
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
                    <a href="#" className={style.github}>
                        <FontAwesomeIcon className={style.icon} icon={faGithub} />
                    </a>
                    <a href="#" className={style.facebook}>
                        <FontAwesomeIcon className={style.icon} icon={faFacebook} />
                    </a>
                    <a href="#" className={style.tiktok}>
                        <FontAwesomeIcon className={style.icon} icon={faTiktok} />
                    </a>
                </div>
            </div>
            <div className={style.rightContent}></div>
        </div>
    );
};

export default HomePart;
