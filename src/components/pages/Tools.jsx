"use client";

import { useSearchParams } from "next/navigation";
import ShortURL from "../shortURL/ShortURL";
import style from "./tools.module.css";
const Tools = () => {
    const params = useSearchParams().get("option");

    if (params === "qr-code") {
        return <div className={style.main}>qr code</div>;
    } else if (params === "color-picker") {
        return <div className={style.main}>color picker</div>;
    }
    return (
        <div className={style.main}>
            <ShortURL />
        </div>
    );
};

export default Tools;
