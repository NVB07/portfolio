"use client";
import Image from "next/image";

import style from "./AboutPart.module.css";

const AboutPart = () => {
    return (
        <div id="about" className={style.about}>
            <div className={style.leftContent}>
                <div className={style.imageWrapper}>
                    <Image alt="Dev image" src={"/image/image2.png"} className={style.image} width={580} height={580} priority />
                </div>
            </div>
            <div className={style.rightContent}>
                <h2 className={style.title}>About Me</h2>
                <p className={style.paragraph}>
                    I live in Purwokerto, Indonesia. My full name is Jastin Linggar Tama, just call me Jastin. I'm 16 years old. A Software Engineering student, I have known Programming since 2020 and
                    am quite familiar with HTML, CSS, Javascript and several other languages ​​& frameworks.
                </p>
                <p className={style.paragraph}>
                    A Little Story, In the past, I preferred to learn about Back End but when I got to know Front End frameworks like NextJs, I think now I prefer to learn about Front End. But I'm
                    also learning New Things about Back End in PHP now. I don't know, I'm a person who likes to learn new things but rarely takes it seriously.
                </p>
                <p className={style.paragraph}>
                    One more thing, I have created 58 public repository on my Github. Various repositories such as templates or even just a package to make things easier. There are several serious
                    projects but now they are rarely developed due to conflicts with school work.{" "}
                </p>
            </div>
        </div>
    );
};

export default AboutPart;
