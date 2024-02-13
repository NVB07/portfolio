"use client";
import Image from "next/image";

import style from "./AboutPart.module.css";

const AboutPart = ({ currentRef }) => {
    return (
        <div ref={currentRef} id="about" className={style.about}>
            <div className={style.leftContent}>
                <div className={style.imageWrapper}>
                    <Image alt="Dev image" src={"/image/image2.png"} className={style.image} width={580} height={580} priority />
                </div>
            </div>
            <div className={style.rightContent}>
                <h2 className={style.title}>About Me</h2>
                <p className={style.paragraph}>Name: Binh.</p>
                <p className={style.paragraph}>From: Phu Tho</p>
                <p className={style.paragraph}>Study at : Academy of Cryptography Techniques.</p>
            </div>
        </div>
    );
};

export default AboutPart;
