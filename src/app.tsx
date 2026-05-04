import React from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./arpanet.js";
import { useContext } from "react";
export interface myAppContext {
    
}
const AppContext = React.createContext({});
export function App() {
    return <BrowserRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <Routes>
                    <Route path="/" element={<ArpanetPage/>} />
                    <Route path="/about" element={<></>} />
                </Routes>
            </BrowserRouter>
}