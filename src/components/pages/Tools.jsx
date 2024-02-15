"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ShortURL from "../shortURL/ShortURL";
import style from "./tools.module.css";
import QRcode from "../qrcode/QRcode";
import ColorPicker from "../colorPicker/ColorPicker";
const Tools = () => {
    const router = useRouter();
    const params = useSearchParams();
    const param = useSearchParams().get("option");
    useEffect(() => {
        if (!params.has("option")) {
            router.push("/tools?option=shorten-url");
        }
    }, []);
    if (param === "qr-code") {
        return (
            <div className={style.main}>
                <QRcode />
            </div>
        );
    } else if (param === "color-picker") {
        return (
            <div className={style.main}>
                <ColorPicker />
            </div>
        );
    } else if (param === "shorten-url") {
        return (
            <div className={style.main}>
                <ShortURL />
            </div>
        );
    }

    return (
        <div className={style.main}>
            <div className={style.notFound}>
                <h2 style={{ paddingTop: "50px", paddingBottom: "20px" }}> NOT FOUND.</h2>
                <h4>Please check url param.</h4>
            </div>
        </div>
    );
};

export default Tools;
