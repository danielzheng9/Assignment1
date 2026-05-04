import React from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./pages/arpanet.js";
import { NotFound } from "./notfound.js";
import { useContext, useState } from "react";
import { Home } from "./pages/home.js";
import { Blogs } from "./pages/blogs.js";
export interface MyAppContext {
}
export const AppContext = React.createContext<MyAppContext | undefined>(undefined);
export function App() {
    // const [navString, setNavString] = useState<string>({});
    
    return <AppContext.Provider value={{
        }}>            
            <BrowserRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/blogs/arpanet" element={<ArpanetPage/>} />
                    <Route path="/blogs" element={<Blogs/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
}