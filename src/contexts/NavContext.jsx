import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (
        <NavContext.Provider value={{ open, setOpen }}>
            {children}
        </NavContext.Provider>
    );
};
