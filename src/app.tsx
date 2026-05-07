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
import { WhatIsCloudBasedStorage } from "./pages/cloudBasedStorage.js";
import { MenuOfLinks } from "./menuOfLinks.js";
import { WhatIsInformation } from "./pages/whatIsInformation.js";
export const AppContext = React.createContext<MyAppContext | undefined>(undefined);
export function App() {
    // const [isPageNotFound, setIsPageNotFound] = useState<boolean>(false);
    const [blogs, setBlogs] = useState<BlogType>([
        {
            title: "The First Computer Network",
            description: "ARPANET reveals its presence before the World Wide Web.",
            linkTo: "/definitions/arpanet",
            image: "https://pbs.twimg.com/media/GEjAfOeaAAIiShk.jpg",
            minutesToRead: 1
       },
       {
            title: "What is a Decimal?",
            description: "Explore what a decimal is.",
            linkTo: "/definitions/decimal",
            image: "https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg",
            minutesToRead: 1
       },
       {
            title: "What is Network Bandwidth",
            description: "Understand the throttle of your network — Why your internet can feel slow at times",
            linkTo: "/definitions/whatisnetworkbandwidth",
            image: "https://micronovaimpex.com/wp-content/uploads/2021/02/Ethernet-cabls.png",
            minutesToRead: 2
       },
        {
            title: "What is a \"Binary\"?",
            description: "Explore the cryptic systems of ones and zeros.",
            linkTo: "/definitions/binary",
            image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2017/10/Keanu-Reeves-The-Matrix-Code.jpg",
            minutesToRead: 10
       },
        {
            title: "The Encoding System of ASCII",
            description: "The standard text communication protocol invented by the americans.",
            linkTo: "/definitions/ascii",
            image: "https://cdn.britannica.com/76/4476-050-E643DD49/Betsy-Ross-legend-flag-united-states.jpg",
            minutesToRead: 2
       },
        {
            title: "Units of Storage",
            description: "Understand the scale of your computer storage.",
            linkTo: "/definitions/unitsofstorage",
            image: "https://sm.pcmag.com/pcmag_au/how-to/h/how-to-cop/how-to-copy-your-windows-installation-to-an-ssd_bzyt.jpg",
            minutesToRead: 1
       },
        {
            title: "Cloud Based Storage",
            description: "Dive into what Cloud Based Storage means",
            linkTo: "/definitions/cloudbasedstorage",
            image: "https://static-cdn.techvify.com/strapi-uploads/uploads/online_data_storage_services_c353b2cace.webp",
            minutesToRead: 1
       },
        {
            title: "Data versus Information",
            description: "The two are often used interchangeably. They're not the same.",
            linkTo: "/definitions/datavsinformation",
            image: "https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?s=612x612&w=0&k=20&c=Keax_Or9RivnYV_9VoOLjknWQP8iaxYXc4jS9rwBmcc=",
            minutesToRead: 1
       }
    ]);
    const [miniNavOpen, setMiniNavOpen] = useState<boolean>(false);
    return <AppContext.Provider value={{
        }}>            
            <HashRouter>
                <MenuBar toggleMiniNav={(toggled: boolean) => {
                    setMiniNavOpen(toggled);
                }}/>
                <div className="toggle_desktop">
                <MenuNavLinkDisplay className="toggle_desktop"/>
                </div>
                {miniNavOpen ? <MenuOfLinks/> : <MenuNavLinkDisplay className="toggle_small_screen"/>}
                <Scroller/>
                <main>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                        <Route path="/" element={<Home/>} />
                        <Route path="/definitions/arpanet" element={<ArpanetPage/>} />
                        <Route path="/definitions/whatisnetworkbandwidth" element={<WhatIsNetworkBandwidth/>} />
                        <Route path="/definitions/decimal" element={<DecimalPage/>} />
                        <Route path="/definitions/binary" element={<Binary/>} />
                        <Route path="/definitions/ascii" element={<ASCII/>} />
                        <Route path="/definitions/datavsinformation" element={<WhatIsInformation/>} />
                        <Route path="/definitions/unitsofstorage" element={<UnitsOfStorage/>} />
                        <Route path="/definitions/cloudbasedstorage" element={<WhatIsCloudBasedStorage/>} />
                        <Route path="/definitions" element={<Blogs blogs={blogs}/>} />
                        <Route path="/featured_definitions" element={<FeaturedBlogs/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<Signup/>} />
                        <Route path="*" element={<NotFound />}/>
                        {/* <Route path="*" element={<Navigate to="/404_not_found" replace={false} state/>} /> */}
                </Routes>
                </main>
                <footer>
                    <p className="ghost">Copyright 2026 Daniel Zheng, Ethan Skeues. Licensed under the Apache License, Version 2.0</p>
                </footer>
            </HashRouter>
        </AppContext.Provider>
}