import { useState } from "react";
import { useColorContext } from "./ColorProvider";

const Hero = () => {
    const [text, setText] = useState("");
    const [length, setLength] = useState(0);
    const [capital, setCapital] = useState([]);
    const [small, setSmall] = useState([]);
    const [white, setWhite] = useState(0);

    const { color } = useColorContext();

    const regexCapital = /[A-Z]/g;
    const regexSmall = /[a-z]/g;
    const regexWhite = /\s/g;

    const handleFieldValue = (e) => {
        const updatedText = e.target.value;
        setText(updatedText);
        setLength(updatedText.length);
        setCapital(updatedText.match(regexCapital) || []);
        setSmall(updatedText.match(regexSmall) || []);
        setWhite(updatedText.match(regexWhite) || 0);
    }
    
    const clipboardCall = () => {
        if (text === "") {
            alert("Please type something to copy!");
          } else {
            navigator.clipboard.writeText(text)
            .then(() => alert("Copied to Clipboard!"))
            .catch(error => console.error("Error copying to clipboard:", error));
          }
    }

    return (
        <>
            <div className="container" style={{marginBottom:"20px", backgroundColor: color, border: "1px solid grey"}}>
                <p style={{textAlign:"center", backgroundColor: "#E7B1B1"}}>Text Utility Box</p>
                <div className="fields">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={(e) => handleFieldValue(e)} id="floatingTextarea2" style={{ height: "200px", width: "450px", border:"2px solid black"}}></textarea>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" value={text} id="floatingTextarea2" style={{ height: "200px", width: "450px", border:"2px solid black"}}></textarea>
                    </div>
                </div>
                <div className="displaydiv">
                    <div className="display">
                        <p>Character Count is: {text == "" ? 0: text.trim().length}</p>
                        <p>Word Count is: {text == "" ? 0 : text.split(/\s+/).filter(word => word.trim() !== "").length} </p>
                        <p>Capital Letter Count is: {capital.length}</p>
                        <p>Small Letter Count is: {small.length}</p>
                        <p>Number of Whitespace Characters: {white.length}</p>
                    </div>

                </div>
                <button className="btn btn-primary" onClick={(e) => { clipboardCall(e) }}>Copy to Clipboard</button>
            </div>
        </>
    );
}

export default Hero;