"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import Notification from "../notification/Notification";

import style from "./shortUrl.module.css";

const ShortURL = () => {
    const [buttonStatus, setButtonStatus] = useState("Get URL");
    const [showNotification, setShowNotification] = useState({
        state: false,
        title: "",
        message: "",
        type: "primary",
    });
    const shortURLRef = useRef();
    const longURLRef = useRef();

    const getShortURL = useCallback((URL) => {
        setButtonStatus("Getting ...");
        fetch("https://api.tinyurl.com/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.NEXT_PUBLIC_AUTH_TOKEN_SHORT_LINK,
            },
            body: JSON.stringify({
                url: URL,
                domain: "tinyurl.com",
                alias: "",
                tags: "",
                expires_at: "",
                description: "string",
            }),
        })
            .then((response) => response.text())
            .then((data) => {
                let obj = JSON.parse(data);
                setButtonStatus("Get URL");
                setShowNotification((prevState) => ({
                    state: true,
                    title: "success",
                    message: "Successfully",
                    type: "success",
                }));
                shortURLRef.current.value = obj.data.tiny_url || "";
            })
            .catch((error) => {
                setShowNotification((prevState) => ({
                    state: true,
                    title: "error",
                    message: "Cannot get short link",
                    type: "error",
                }));
            });
    }, []);

    useEffect(() => {
        let timeoutId;

        const handleTimeout = () => {
            timeoutId = setTimeout(() => {
                setShowNotification((prevState) => ({
                    ...prevState,
                    state: false,
                }));
            }, 3500);
        };

        if (showNotification.state) {
            handleTimeout();
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showNotification.state]);

    const handleRequestURL = () => {
        const URLString = longURLRef.current.value;
        if (URLString.trim() === "" || !/^((https?|ftp):\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}([/][^\s]*)?$/.test(URLString.trim())) {
            setShowNotification((prevState) => ({
                state: true,
                title: "Error",
                message: "Please enter a URL",
                type: "error",
            }));
            longURLRef.current.focus();
            return;
        }

        getShortURL(URLString);
    };

    const copyToClipboard = useCallback(() => {
        const text = shortURLRef.current.value;
        if (text.trim() === "") {
            setShowNotification((prevState) => ({
                state: true,
                title: "no value",
                message: "No value",
                type: "warning",
            }));
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            setShowNotification((prevState) => ({
                state: true,
                title: "copied",
                message: "Copy was successful",
                type: "success",
            }));
        });
    }, []);

    return (
        <div className={style.shortUrl}>
            <h4>The Original URL Shortener</h4>
            <div className={style.wrapper}>
                <div className={style.longURLArea}>
                    <textarea ref={longURLRef} placeholder="Enter a URL" className={style.longURLTextArea} />
                    <button onClick={handleRequestURL} className={style.buttonGetLink}>
                        {buttonStatus}
                    </button>
                </div>
                <div className={style.shortURLArea}>
                    <input ref={shortURLRef} type="text" />
                    <button onClick={copyToClipboard} className={style.buttoncopy}>
                        copy
                    </button>
                </div>
            </div>
            {showNotification.state && <Notification state={showNotification.type} title={showNotification.title} message={showNotification.message} close={setShowNotification} />}
        </div>
    );
};

export default ShortURL;
