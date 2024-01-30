"use client";
import style from "./notification.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTriangleExclamation, faXmark, faExclamation } from "@fortawesome/free-solid-svg-icons";

const Notification = ({ state = "primary", message = "", title = "Notification", close }) => {
    let color = "#fff";
    let icon = faExclamation;

    if (state === "primary") {
        color = "#007bff";
        icon = faExclamation;
    } else if (state === "warning") {
        color = "#ffc107";
        icon = faTriangleExclamation;
    } else if (state === "error") {
        color = "#dc3545";
        icon = faXmark;
    } else if (state === "success") {
        color = "#28a745";
        icon = faCheck;
    }
    const handleClose = () => {
        close((prevState) => ({
            ...prevState,
            state: false,
        }));
    };

    return (
        <div className={style.notification}>
            <div style={{ backgroundColor: color }} className={style.icon}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className={style.content}>
                <div style={{ color: color }} className={style.title}>
                    {title}
                </div>
                <div className={style.message}>{message}</div>
            </div>
            <div className={style.close}>
                <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>
        </div>
    );
};

export default Notification;
