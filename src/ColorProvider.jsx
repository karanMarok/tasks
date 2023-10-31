import { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export function useColorContext() {
    return useContext(ColorContext);
}

const ColorProvider = ({children}) => {

    const [color, setColor] = useState('#fff');

    return(
        <ColorContext.Provider value={{ color, setColor }}>
            {children}
        </ColorContext.Provider>
    );
}

export default ColorProvider;