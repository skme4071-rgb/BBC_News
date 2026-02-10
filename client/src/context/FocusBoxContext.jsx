
import { createContext, useState, useContext } from "react";

const FocusBoxContext = createContext(null);

export default function FocusBoxProvider({ children }) {
    const [state, setState] = useState({
        element: null,
        isChange: false,
    });

    const setFocusBox = (element) => {
        if (element) {
            document.body.style.overflow = "hidden";
            setState({ element, isChange: true });
        }
    };

    const closeFocusBox = () => {
        document.body.style.overflow = "auto";
        setState({ element: null, isChange: false });
    };

    return (
       
        <FocusBoxContext.Provider value={{ state, setFocusBox, closeFocusBox }}>
            {children}

            {state.isChange && (
                <div
                    onClick={closeFocusBox}
                    className="fixed inset-0 z-50 bg-black/40"
                >
                    <div
                        className="flex h-full w-full items-end min-[421px]:items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="
            bg-white relative shadow-xl flex flex-col
            w-full h-[100dvh] rounded-none
            min-[441px]:w-[410px]
            min-[441px]:h-[520px]
            min-[441px]:max-h-[90vh]
            min-[441px]:rounded-xl
          "
                        >
                            {state.element}
                        </div>
                    </div>
                </div>
            )}
        </FocusBoxContext.Provider>

    );
}

export function ContextFocusBox() {
    return useContext(FocusBoxContext);
}

