import React from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation, Navigate  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./pages/arpanet.js";
import { NotFound } from "./notfound.js";
import { useContext, useState } from "react";
import { Home } from "./pages/home.js";
import { Blogs } from "./pages/blogs.js";
import { FeaturedBlogs } from "./pages/featured_blogs.js";
import { WhatIsNetworkBandwidth } from "./pages/bandwidth.js";
export interface MyAppContext {
}
export const AppContext = React.createContext<MyAppContext | undefined>(undefined);
export function App() {
    // const [isPageNotFound, setIsPageNotFound] = useState<boolean>(false);
    
    return <AppContext.Provider value={{
        }}>            
            <BrowserRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/blogs/arpanet" element={<ArpanetPage/>} />
                    <Route path="/blogs/whatisnetworkbandwidth" element={<WhatIsNetworkBandwidth/>} />
                    <Route path="/blogs" element={<Blogs/>} />
                    <Route path="/featured_blogs" element={<FeaturedBlogs/>} />
                    <Route path="/404_not_found" element={<NotFound />}/>
                    <Route path="*" element={<Navigate to="/404_not_found"/>} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
}