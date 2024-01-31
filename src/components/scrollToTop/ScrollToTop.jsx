"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./scrollToTop.module.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState(false);
    const checkScrollTop = () => {
        if (window.scrollY > window.innerHeight) {
            setShowScroll(true);
        } else if (window.scrollY <= window.innerHeight) {
            setShowScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", checkScrollTop);
        return () => {
            window.removeEventListener("scroll", checkScrollTop);
        };
    });

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className={`${style.scrollToTop} ${!showScroll ? style.hidden : null}`}>
            <button onClick={handleScroll}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    );
};

export default ScrollToTop;
