import React from "react";
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
            title: "Decimals",
            description: "Explore decimals like 67. Discover misconceptions, and enlighten your knowledge!",
            linkTo: "/blogs/decimal",
            image: "https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg",
            minutesToRead: 1
       },
       {
            title: "What is Network Bandwidth",
            description: "Your network actually has a limiting speed - Which is why your Google feels so slow on Premium Real UltraX wifi compared to Woolworths Everyday.",
            linkTo: "/blogs/whatisnetworkbandwidth",
            image: "https://micronovaimpex.com/wp-content/uploads/2021/02/Ethernet-cabls.png",
            minutesToRead: 2
       },
        {
            title: "Deleted Blog",
            description: "This blog is deleted.",
            linkTo: "/blogs/howdoesthetheoryofrelativityrelatetothetheoryofquagerstein",
            image: "<main>",
            minutesToRead: 0.5
       }
    ]);
    return <AppContext.Provider value={{
        }}>            
            <HashRouter>
                <MenuBar/>
                <MenuNavLinkDisplay/>
                <main>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                        <Route path="/" element={<Home/>} />
                        <Route path="/blogs/arpanet" element={<ArpanetPage/>} />
                        <Route path="/blogs/whatisnetworkbandwidth" element={<WhatIsNetworkBandwidth/>} />
                        <Route path="/blogs/decimal" element={<DecimalPage/>} />
                        <Route path="/blogs/binary" element={<Binary/>} />
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