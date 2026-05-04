import React from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./arpanet.js";
import { NotFound } from "./notfound.js";
import { useContext, useState } from "react";
export interface MyAppContext {
    navigation: [string, React.Dispatch<React.SetStateAction<string>>]
}
const AppContext = React.createContext<MyAppContext | undefined>(undefined);
export function App() {
    const [navString, setNavString] = useState("/");
    
    return <AppContext.Provider value={{
            navigation: [
                navString, setNavString
            ]
        }}>            
            <BrowserRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" replace />} />
                    <Route path="/home" element={<ArpanetPage/>} />
                    <Route path="/about" element={<></>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
}