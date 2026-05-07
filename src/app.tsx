import React, { useEffect } from "react";
import { HashRouter, Routes, Route, NavLink, useLocation, Navigate  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./pages/arpanet.js";
import { NotFound } from "./notfound.js";
import { useContext, useState } from "react";
import { Home } from "./pages/home.js";
import { Blogs } from "./pages/blogs.js";
import { FeaturedBlogs } from "./pages/featured_blogs.js";
import { WhatIsNetworkBandwidth } from "./pages/bandwidth.js";
import { DecimalPage } from "./pages/decimal.js";
export interface MyAppContext {
}
import type { BlogType, Blog } from "./pages/blogs.js";
import { Login } from "./pages/login.js";
import { Signup } from "./pages/signup.js";
import { Binary } from "./pages/binary.js";
import { ASCII } from "./pages/ascii.js";
import { Scroller } from "./scroller.js";
import { UnitsOfStorage } from "./pages/unitsOfStorage.js";
export const AppContext = React.createContext<MyAppContext | undefined>(undefined);
export function App() {
    // const [isPageNotFound, setIsPageNotFound] = useState<boolean>(false);
    const [blogs, setBlogs] = useState<BlogType>([
        {
            title: "The First Computer Network",
            description: "ARPANET reveals its presence before the World Wide Web.",
            linkTo: "/blogs/arpanet",
            image: "https://pbs.twimg.com/media/GEjAfOeaAAIiShk.jpg",
            minutesToRead: 15
       },
       {
            title: "What is a Decimal?",
            description: "Explore what a decimal is.",
            linkTo: "/blogs/decimal",
            image: "https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg",
            minutesToRead: 1
       },
       {
            title: "What is Network Bandwidth",
            description: "Your network actually has a limiting speed - Which is why your Google feels so slow on PremiumX wifi as opposed to using Woolworths Everyday.",
            linkTo: "/blogs/whatisnetworkbandwidth",
            image: "https://micronovaimpex.com/wp-content/uploads/2021/02/Ethernet-cabls.png",
            minutesToRead: 2
       },
        {
            title: "Deleted Blog",
            description: "This blog is deleted. (working 404 page)",
            linkTo: "/blogs/howdoesthetheoryofrelativityrelatetothetheoryofquagerstein",
            image: "<main>",
            minutesToRead: 0.5
       },
        {
            title: "What is a \"Binary\"?",
            description: "Explore the cryptic systems of ones and zeros.",
            linkTo: "/blogs/binary",
            image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/10/Keanu-Reeves-The-Matrix-Code.jpg",
            minutesToRead: 10
       },
        {
            title: "The Encoding System of ASCII",
            description: "The standard text communication protocol invented by the americans.",
            linkTo: "/blogs/ascii",
            image: "https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg",
            minutesToRead: 2
       }
    ]);
    return <AppContext.Provider value={{
        }}>            
            <HashRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <Scroller/>
                <main>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                        <Route path="/" element={<Home/>} />
                        <Route path="/blogs/arpanet" element={<ArpanetPage/>} />
                        <Route path="/blogs/whatisnetworkbandwidth" element={<WhatIsNetworkBandwidth/>} />
                        <Route path="/blogs/decimal" element={<DecimalPage/>} />
                        <Route path="/blogs/binary" element={<Binary/>} />
                        <Route path="/blogs/ascii" element={<ASCII/>} />
                        <Route path="/blogs/unitsofstorage" element={<UnitsOfStorage/>} />
                        <Route path="/blogs" element={<Blogs blogs={blogs}/>} />
                        <Route path="/featured_blogs" element={<FeaturedBlogs/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="*" element={<NotFound />}/>
                        {/* <Route path="*" element={<Navigate to="/404_not_found" replace={false} state/>} /> */}
                </Routes>
                </main>
            </HashRouter>
        </AppContext.Provider>
}