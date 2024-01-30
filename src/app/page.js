import styles from "./page.module.css";
import HomePart from "@/components/main/part/home/HomePart";
import { BgSVG, BgSVG2 } from "@/components/handleComponents/icon/Icons";
import AboutPart from "@/components/main/part/about/AboutPart";
import ProjectPart from "@/components/main/part/project/ProjectPart";
import Contact from "@/components/main/part/contact/Contact";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";

export default function Home() {
    return (
        <main className={styles.main}>
            <ScrollToTop />
            <HomePart />
            <BgSVG styleInline={{ marginBottom: "-4px" }} />
            <AboutPart />
            <BgSVG2 />
            <ProjectPart />
            <BgSVG styleInline={{ marginBottom: "-4px" }} />
            <Contact />
            <BgSVG2 />
        </main>
    );
}
