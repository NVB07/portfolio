import styles from "./page.module.css";
import HomePart from "@/components/main/part/home/HomePart";
import { BgSVG, BgSVG2 } from "@/components/handleComponents/icon/Icons";
import AboutPart from "@/components/main/part/about/AboutPart";
import ProjectPart from "@/components/main/part/project/ProjectPart";

export default function Home() {
    return (
        <main className={styles.main}>
            <HomePart />
            <BgSVG styleInline={{ marginBottom: "-4px" }} />
            <AboutPart />
            <BgSVG2 />
            <ProjectPart />
        </main>
    );
}
