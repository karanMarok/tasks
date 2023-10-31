import React, { createContext, useState } from "react";
import { SketchPicker } from "react-color";
import { useColorContext } from "./ColorProvider";

const Color = () => {

    const { color, setColor } = useColorContext();

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
    }

    return (
        <>
            <div className="container" style={{border: "1px solid grey", marginBottom:"20px"}}>
                <p style={{textAlign:"center", backgroundColor: "#E7B1B1"}}>Color Picker</p>
                <div className="completeBackground" style={{ backgroundColor: color }}>
                    <div className="color">
                        <SketchPicker color={color} onChange={handleColorChange}></SketchPicker>
                    </div>
                    <div className="hex">
                        <p>Selected Hex Value is: {color}</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Color;