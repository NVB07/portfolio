"use client";
import { useState, useRef } from "react";
import QRCode from "react-qr-code";
import style from "./qrcode.module.css";
const QRcode = () => {
    const [qrValue, setQrValue] = useState("");
    const [bgColor, setBgcolor] = useState("#ffffff");
    const [fgColor, setFgcolor] = useState("#000000");
    const [level, setLevel] = useState("L");

    const QRRef = useRef();

    const handleDownload = () => {
        const svg = QRRef.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = "QRCode.png";
            downloadLink.href = pngFile;
            downloadLink.click();
        };

        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };

    return (
        <div className={style.main}>
            <h4>Create QR code</h4>
            <div className={style.box}>
                <div style={{ backgroundColor: bgColor }} className={style.QRcode}>
                    <QRCode level={level} className={style.qrcodesvg} bgColor={bgColor} fgColor={fgColor} ref={QRRef} value={qrValue} />
                </div>
                <div className={style.optionsQR}>
                    <div className={style.ColorArea}>
                        <p> Backgound</p>
                        <input value={bgColor} onChange={(e) => setBgcolor(e.target.value)} type="color" name="backgound" />
                    </div>
                    <div className={style.ColorArea}>
                        <p>Foreground</p>
                        <input value={fgColor} onChange={(e) => setFgcolor(e.target.value)} type="color" name="foreground" />
                    </div>
                    <div className={style.ColorArea}>
                        <p> Level</p>
                        <div className={style.customSelect}>
                            <select onChange={(e) => setLevel(e.target.value)} className={style.selectLevel} name="level">
                                <option value="L">L</option>
                                <option value="M">M</option>
                                <option value="Q">Q</option>
                                <option value="H">H</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={style.textInput}>
                    <textarea placeholder="Type a text" type="text" onChange={(e) => setQrValue(e.target.value)} />
                </div>
                <button className={style.buttonDownload} onClick={handleDownload}>
                    Download
                </button>
            </div>
        </div>
    );
};

export default QRcode;
