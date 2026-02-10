import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [disableScroll, setDisableScroll] = useState(false);

    return (
        <ScrollContext.Provider value={{ disableScroll, setDisableScroll }}>
            {children}
        </ScrollContext.Provider>
    );
};

// Custom hook (Best practice)
export const UseScroll = () => useContext(ScrollContext);
