import React, {useState} from "react";
import { SketchPicker } from "react-color";

const Color = () => {

    const [color, setColor] = useState("#fff");

    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
    }
    const[backgroundColor,setbackgroundColor] = useState();
 
    return (
        <>
        <p>Task 2</p>
        <div className="completeBackground" style={{background:color}}>
            <div className="color">
                <SketchPicker color={color} onChange={handleColorChange}></SketchPicker>
            </div>
            <div className="hex">
                <p>Selected Hex Value is: {color}</p>
            </div>
            {/* <button className="btn" onClick={()=>setbackgroundColor(color)} >Set Color</button> */}
            </div>
        </>
    );
}

export default Color;