"use client";

import { Fragment, useRef } from "react";

import styles from "./page.module.css";
import HomePart from "@/components/main/part/home/HomePart";
import { BgSVG, BgSVG2 } from "@/components/handleComponents/icon/Icons";
import AboutPart from "@/components/main/part/about/AboutPart";
import ProjectPart from "@/components/main/part/project/ProjectPart";
import Contact from "@/components/main/part/contact/Contact";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Header from "@/components/header/Header";

export default function Home() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = (idNumber) => {
        if (idNumber === 2) {
            aboutRef.current.scrollIntoView();
        } else if (idNumber === 3) {
            projectRef.current.scrollIntoView();
        } else if (idNumber === 4) {
            contactRef.current.scrollIntoView();
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };
    return (
        <Fragment>
            <header>
                <Header scrolltoView={handleScroll} />
            </header>
            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <ScrollToTop />
                    <HomePart currentRef={homeRef} />
                    <BgSVG styleInline={{ marginBottom: "-4px" }} />
                    <AboutPart currentRef={aboutRef} />
                    <BgSVG2 />
                    <ProjectPart currentRef={projectRef} />
                    <BgSVG styleInline={{ marginBottom: "-4px" }} />
                    <Contact currentRef={contactRef} />
                    <BgSVG2 />
                </div>
            </main>
        </Fragment>
    );
}
