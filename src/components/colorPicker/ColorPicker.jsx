"use client";

import { useState, useEffect } from "react";
import { RgbaColorPicker } from "react-colorful";

import style from "./colorpicker.module.css";
import "./colorpicker.css";
const ColorPicker = () => {
    const [RgbaColor, setRgbaColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
    const [hexAlphaColor, setHexAlphaColor] = useState(RgbaColor);

    useEffect(() => {
        function rgbaToHex(r, g, b, a) {
            r = Math.round(r);
            g = Math.round(g);
            b = Math.round(b);
            a = Math.round(a * 255);
            return {
                r: r.toString(16).padStart(2, "0").toUpperCase(),
                g: g.toString(16).padStart(2, "0").toUpperCase(),
                b: b.toString(16).padStart(2, "0").toUpperCase(),
                a: a.toString(16).padStart(2, "0").toUpperCase(),
            };
        }
        setHexAlphaColor(rgbaToHex(RgbaColor.r, RgbaColor.g, RgbaColor.b, RgbaColor.a));
    }, [RgbaColor]);

    return (
        <div className={style.ColorPicker}>
            <h4>Color Picker</h4>
            <div style={{ backgroundColor: "#" + hexAlphaColor.r + hexAlphaColor.g + hexAlphaColor.g + hexAlphaColor.a }} className={style.box}>
                <div className={`${style.colorArea} colorArea`}>
                    <RgbaColorPicker color={RgbaColor} onChange={setRgbaColor} />
                </div>
                <div className={style.textColor}>
                    RGBA({RgbaColor.r}, {RgbaColor.g}, {RgbaColor.b}, {RgbaColor.a})
                </div>
                <div className={style.textColor}>
                    RGB({RgbaColor.r}, {RgbaColor.g}, {RgbaColor.b})
                </div>
                <div className={style.textColor}>
                    HEX #{hexAlphaColor.r}
                    {hexAlphaColor.g}
                    {hexAlphaColor.b}
                    {hexAlphaColor.a}
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
