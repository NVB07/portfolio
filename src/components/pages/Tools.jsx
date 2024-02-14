"use client";

import { useSearchParams } from "next/navigation";
import ShortURL from "../shortURL/ShortURL";
import style from "./tools.module.css";
import QRcode from "../qrcode/QRcode";
import ColorPicker from "../colorPicker/ColorPicker";
const Tools = () => {
    const params = useSearchParams().get("option");

    if (params === "qr-code") {
        return (
            <div className={style.main}>
                <QRcode />
            </div>
        );
    } else if (params === "color-picker") {
        return (
            <div className={style.main}>
                <ColorPicker />
            </div>
        );
    }
    return (
        <div className={style.main}>
            <ShortURL />
        </div>
    );
};

export default Tools;
