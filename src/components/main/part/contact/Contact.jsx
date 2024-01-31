"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { RedirectLink } from "@/components/handleComponents/redirectLink/RedirectLink";
import Notification from "@/components/notification/Notification";

import style from "./contact.module.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const mesageRef = useRef();

    const [showSuccessNotification, setShowSuccessNotification] = useState({
        state: false,
        title: "",
        message: "",
        type: "primary",
    });

    useEffect(() => {
        let timeoutId;

        const handleTimeout = () => {
            timeoutId = setTimeout(() => {
                setShowSuccessNotification((prevState) => ({
                    ...prevState,
                    state: false,
                }));
            }, 3500);
        };

        if (showSuccessNotification.state) {
            handleTimeout();
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [showSuccessNotification.state]);

    const handleSubmit = async () => {
        if (name.trim() === "") {
            setShowSuccessNotification((prevState) => ({
                state: true,
                title: "warning",
                message: "Please enter a name",
                type: "warning",
            }));

            return;
        } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email.trim())) {
            setShowSuccessNotification((prevState) => ({
                state: true,
                title: "warning",
                message: "Please enter a email address",
                type: "warning",
            }));

            return;
        } else if (message.trim() === "") {
            setShowSuccessNotification((prevState) => ({
                state: true,
                title: "warning",
                message: "Please enter a message",
                type: "warning",
            }));

            return;
        }
        try {
            setSending(true);
            const response = await fetch("/api/sendEmail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setShowSuccessNotification((prevState) => ({
                    state: true,
                    title: "success",
                    message: "Email sent successfully",
                    type: "success",
                }));
                setName("");
                setEmail("");
                setMessage("");
                nameRef.current.value = "";
                emailRef.current.value = "";
                mesageRef.current.value = "";
            } else {
                setShowSuccessNotification((prevState) => ({
                    state: true,
                    title: "error",
                    message: "Failed to send email",
                    type: "error",
                }));
            }

            setSending(false);
        } catch (error) {
            setShowSuccessNotification((prevState) => ({
                state: true,
                title: "Error sending email",
                message: "Please check console",
                type: "error",
            }));

            console.error("Error sending email:", error);
        }
    };
    return (
        <div id="contact" className={style.contact}>
            <h3 className={style.title}>Get in Touch</h3>
            <div className={style.main}>
                <div className={style.left}>
                    <div className={style.FBContact}>
                        <div className={style.titleFbContact}>
                            <FontAwesomeIcon icon={faFacebook} />
                            <h4>Facebook</h4>
                        </div>
                        <ul>
                            <li className={style.LiLink}>
                                <RedirectLink style={style.link} href={"/facebook"} riderectLink={"https://www.facebook.com/binh.jupiter"} children={"binh.jupiter"} />
                            </li>
                        </ul>
                    </div>
                    <div className={style.EmailContact}>
                        <div className={style.titleFbContact}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <h4>Email</h4>
                        </div>
                        <ul>
                            <li className={style.LiLink}>
                                <a className={style.link} href={"mailto:nvbinh.zzz@gmail.com"}>
                                    nvbinh.zzz@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.information}>
                        <div className={style.name}>
                            <h3>NAME</h3>
                            <input ref={nameRef} required onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
                        </div>
                        <div className={style.email}>
                            <h3>EMAIL</h3>
                            <input ref={emailRef} onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Example@gmail.com" />
                        </div>
                    </div>
                    <div className={style.message}>
                        <h3>MESSAGE</h3>
                        <textarea ref={mesageRef} required onChange={(e) => setMessage(e.target.value)} maxLength="1024" placeholder="Type messasge (1024 character)" />
                    </div>
                    <div className={style.sendButton}>
                        <button type="button" disabled={sending} style={sending ? { backgroundColor: "#ffc107" } : null} onClick={handleSubmit}>
                            {sending ? (
                                <>
                                    <FontAwesomeIcon style={{ marginRight: 8 + "px" }} icon={faSpinner} spinPulse />
                                    SENDING
                                </>
                            ) : (
                                <>SEND MESSAGE</>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {showSuccessNotification.state && (
                <Notification state={showSuccessNotification.type} title={showSuccessNotification.title} message={showSuccessNotification.message} close={setShowSuccessNotification} />
            )}
        </div>
    );
};

export default Contact;
