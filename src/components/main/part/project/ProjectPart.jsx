"use client";
import { faCode, faHouse, faUser, faSun } from "@fortawesome/free-solid-svg-icons";

import style from "./ProjectPart.module.css";
import CardProject from "./cardProjects/CardProject";
import { RedirectLink } from "@/components/handleComponents/redirectLink/RedirectLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projects = [
    {
        href: "Portfolio",
        title: "Portfolio",
        icon: faHouse,
        descript: "Is this project.",
        imageSrc: "/image/image_projects/portfolio.png",
        riderect: "https://github.com/NVB07/portfolio",
    },
    {
        href: "real-thime-weather",
        title: "real Time Weather",
        icon: faSun,
        descript: "Real-time weather refers to the current and up-to-date atmospheric conditions and meteorological information at a specific location.",
        imageSrc: "/image/image_projects/real-time-weather.png",
        riderect: "https://github.com/NVB07/real-time-weather",
    },
    {
        href: "UserProfile",
        title: "User profile",
        icon: faUser,
        descript: "A card containing basic contact information",
        imageSrc: "/image/image_projects/userprofile.png",
        riderect: "https://github.com/NVB07/UserProfile",
    },
];
const ProjectPart = () => {
    return (
        <div id="project" className={style.project}>
            <div className={style.title}>
                <h1>Some of My Projects</h1>
            </div>
            <div className={style.mainProject}>
                <div className={style.blockProject}>
                    {projects.map((item, index) => {
                        return (
                            <CardProject
                                key={index}
                                left={index % 2 === 0}
                                href={item.href}
                                title={item.title}
                                icon={item.icon}
                                descript={item.descript}
                                imageSrc={item.imageSrc}
                                riderect={item.riderect}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={style.butonViewGithub}>
                <RedirectLink
                    href={"/github"}
                    riderectLink={"https://github.com/NVB07?tab=repositories"}
                    style={style.button}
                    children={
                        <>
                            <FontAwesomeIcon icon={faGithub} /> <p>View all my projects &gt;</p>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default ProjectPart;
