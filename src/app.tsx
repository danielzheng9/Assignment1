import React, { useEffect } from "react";
import { HashRouter, Routes, Route, NavLink, useLocation, Navigate  } from "react-router-dom";
import { MenuBar } from "./menu_bar.js";
import { MenuNavLinkDisplay } from "./menu_bar.js";
import { ArpanetPage } from "./pages/arpanet.js";
import { NotFound } from "./notfound.js";
import { useContext, useState } from "react";
import { Home } from "./pages/home.js";
import { BlogsPage } from "./pages/blogs.js";
import { FeaturedBlogs } from "./pages/featured_blogs.js";
import { WhatIsNetworkBandwidth } from "./pages/bandwidth.js";
import { DecimalPage } from "./pages/decimal.js";
export interface MyAppContext {
    isLoggedIn: boolean, setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}
import type { BlogType, Blog } from "./blogsComponent.js";
import { Login } from "./pages/login.js";
import { Signup } from "./pages/signup.js";
import { Binary } from "./pages/binary.js";
import { ASCII } from "./pages/ascii.js";
import { Scroller } from "./scroller.js";
import { UnitsOfStorage } from "./pages/unitsOfStorage.js";
import { WhatIsCloudBasedStorage } from "./pages/cloudBasedStorage.js";
import { MenuOfLinks } from "./menuOfLinks.js";
import { WhatIsInformation } from "./pages/whatIsInformation.js";
import { InternetOfMe } from "./pages/internetOfMe.js";
import { WhatIsASocialNetwork } from "./pages/socialNetwork.js";
import { WhatIsAnEntity } from "./pages/entity.js";
import { WhatIsARelationship } from "./pages/relationship.js";
import { Sociogram } from "./pages/sociogram.js";
import { DigitalCitizenship } from "./pages/digitalCitizenship.js";
import { Hardware } from "./pages/hardware.js";
import { Cybersecurity } from "./pages/cybersecurity.js";
import { Logo, LogoFull } from "./logo.js";
import { useGlobalOverflow } from "./hooks/useDisplayToggle.js";
import { WiredTransmission } from "./pages/wiredTransmission.js";
import { Topology } from "./pages/topology.js";
import { LocalAreaNetworkAndWideAreaNetwork } from "./pages/localAreaNetworkAndWideAreaNetwork.js";
import { ClientAndServerModel } from "./pages/clientAndServerModel.js";
import { CommunicationProtocols } from "./pages/communicationprotocol.js";
import { Handshaking } from "./pages/handshaking.js";
import { TransmissionControlProtocolSlashInternetProtocol } from "./pages/tcpip.js";
import { DomainNameSystem } from "./pages/dns.js";
import { HyperTextTransferProtocol } from "./pages/http.js";
import { HypertextMarkupLanguage } from "./pages/html.js";
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
            minutesToRead: 5
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
       },
        {
            title: "Internet of Me and Internet of Things",
            description: "How you are connected to the rest of the world",
            linkTo: "/definitions/internetofme",
            image: "https://bluzinc.co/wp-content/uploads/2015/07/145062127.jpg",
            minutesToRead: 5
       }, 
       {
            title: "Social Networks",
            description: "Understand connections between you and others",
            linkTo: "/definitions/socialnetworks",
            image: "https://tco.am/blog/wp-content/uploads/2017/12/socialnetworking.jpg",
            minutesToRead: 1
       },
       {
            title: "Entities.",
            description: "Explore what it means to be a thing online, with a digital prescence.",
            linkTo: "/definitions/entity",
            image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24805888/STK160_X_Twitter_006.jpg?quality=90&strip=all&crop=0%2C0.0083291687489577%2C100%2C99.983341662502&w=2400",
            minutesToRead: 1
       },
       {
            title: "Relationships",
            description: "",
            linkTo: "/definitions/relationship",
            image: "https://miro.medium.com/v2/resize:fit:1400/0*pXXo6ATmarrxUkVh",
            minutesToRead: 1
       },
       {
            title: "Sociogram",
            description: "A graphic representation of a group.",
            linkTo: "/definitions/sociogram",
            image: "https://thumbs.dreamstime.com/b/two-d-man-joining-together-puzzle-pieces-render-35185862.jpg",
            minutesToRead: 1
       },
       {
            title: "Digital Citizenship & Digital Footprint",
            description: "You are a digital citizen in a digital society. The internet remembers more about you than you expect.",
            linkTo: "/definitions/digitalcitizenship",
            image: "https://defradigital.blog.gov.uk/wp-content/uploads/sites/136/2020/01/digital-footprint.jpg",
            minutesToRead: 1
       }, 
       {
            title: "Cybersecurity",
            description: "Practices businesses or professionals use to stay safe from attacks",
            linkTo: "/definitions/cybersecurity",
            image: "https://miro.medium.com/v2/resize:fit:1400/1*K4sPMOP5AdezW6fMvEtIew@2x.jpeg",
            minutesToRead: 1
     }, 
     {
          title: "Hardware",
          description: "Understand networking utilities",
          linkTo: "/definitions/hardware",
          image: "https://projectcpim2017.wordpress.com/wp-content/uploads/2017/10/software-hardware-5-638ceo-strickler-on-success-beyond-successful-crowdfunding-1.jpg?w=825",
          minutesToRead: 3
     }, 
     {
          title: "Wired Transmission & Transmission Media",
          description: "Connecting devices together for communication.",
          linkTo: "/definitions/wired_transmission",
          image: "https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/Unshielded-Twisted-Pair-Cable.png",
          minutesToRead: 5
     },
     {
          title: "Topology",
          description: "The arrangement of your devices",
          linkTo: "/definitions/topology",
          image: "https://automationcommunity.com/wp-content/uploads/2023/01/Network-Topology-scaled-3.jpg",
          minutesToRead: 1
     },
     {
          title: "LAN and WAN",
          description: "Different network capabilities",
          linkTo: "/definitions/lanandwan",
          image: "https://static.linuxblog.io/wp-content/uploads/2025/07/Network_Rack_for_Small_Office__article_footer-868x1019.png",
          minutesToRead: 1
     },
     {
          title: "Client and Server Model",
          description: "Understand the separation between you and the service",
          linkTo: "/definitions/clientandservermodel",
          image: "https://i.sstatic.net/jyync.jpg",
          minutesToRead: 1
     },
     {
          title: "Communication Protocols",
          description: "Unified systems meet collaboration and higher efficiency from labour additions",
          linkTo: "/definitions/communicationprotocols",
          image: "https://miro.medium.com/v2/1*KfPYDz61kR1_rd1woOoALg.png",
          minutesToRead: 1
     },
     {
          title: "Handshaking",
          description: "An elegant way of showing respect. Or actually, it is a redundancy system—this is how your network never loses data sent from the other side.",
          linkTo: "/definitions/handshaking",
          image: "https://www.aristocracy.london/wp-content/uploads/2019/08/the-81-rules-of-handshake-etiquette.jpg",
          minutesToRead: 2
     },
     {
          title: "TCP/IP",
          description: "The way your website requests are established",
          linkTo: "/definitions/transmissioncontrolprotocolandinternetprotocol",
          image: "https://cdn.kastatic.org/ka-perseus-images/55020ff0c8a236c7bc95847d2a132ce4a60331f8.png",
          minutesToRead: 5
     },
     {
          title: "Domain Name System",
          description: "google.com isn't actually google. it's 172.217.25.174",
          linkTo: "/definitions/domainnamesystem",
          image: "https://cdn.arstechnica.net/wp-content/uploads/2013/12/server-racks.jpg",
          minutesToRead: 2
     },
     {
          title: "HTTP",
          description: "Explore the logic and ways of data transfer",
          linkTo: "/definitions/hypertexttransferprotocol",
          image: "https://substackcdn.com/image/fetch/$s_!2s7A!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7140c6e1-4315-45cf-8648-d7685219bc6b_1938x1116.png",
          minutesToRead: 1
     },
     {
          title: "HTML",
          description: "Your webpage is represented through text—every button, every link",
          linkTo: "/definitions/hypertextmarkuplanguage",
          image: "https://cdn.britannica.com/94/123894-050-53EC378E/Tim-Berners-Lee-2005.jpg",
          minutesToRead: 1
     }
    ]);
    const [miniNavOpen, setMiniNavOpen] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    // This file uses HashRouter because I do not have a backend to run this in, and avoids empty pages with BrowserRouter.
    // The routing system uses /# to route, which is ignored by the browser and still redirects to whatever is before it.
    return <AppContext.Provider value={{
            isLoggedIn: loggedIn, setIsLoggedIn: setLoggedIn
        }}>            
            <HashRouter>
                <header>
                <MenuBar toggleMiniNav={(toggled: boolean) => {
                    setMiniNavOpen(toggled);
                }}/>
                {miniNavOpen ? <MenuOfLinks/> : <></>}
                </header>
                {!miniNavOpen && <MenuNavLinkDisplay className="toggle_small_screen"/>}
                <div className="toggle_desktop">
                <MenuNavLinkDisplay className="toggle_desktop"/>
                </div>
                <Scroller/>
                <main>
                <Routes>
                    {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/timeline" element={<Home scrollToBottom={true}/>} />
                    <Route path="/definitions/arpanet" element={<ArpanetPage/>} />
                    <Route path="/definitions/whatisnetworkbandwidth" element={<WhatIsNetworkBandwidth/>} />
                    <Route path="/definitions/decimal" element={<DecimalPage/>} />
                    <Route path="/definitions/binary" element={<Binary/>} />
                    <Route path="/definitions/ascii" element={<ASCII/>} />
                    <Route path="/definitions/datavsinformation" element={<WhatIsInformation/>} />
                    <Route path="/definitions/unitsofstorage" element={<UnitsOfStorage/>} />
                    <Route path="/definitions/cloudbasedstorage" element={<WhatIsCloudBasedStorage/>} />
                    <Route path="/definitions/internetofme" element={<InternetOfMe/>} />
                    <Route path="/definitions/socialnetworks" element={<WhatIsASocialNetwork/>} />
                    <Route path="/definitions/relationship" element={<WhatIsARelationship/>} />
                    <Route path="/definitions/entity" element={<WhatIsAnEntity/>} />
                    <Route path="/definitions/sociogram" element={<Sociogram/>} />
                    <Route path="/definitions/hardware" element={<Hardware/>} />
                    <Route path="/definitions/cybersecurity" element={<Cybersecurity/>} />
                    <Route path="/definitions/digitalcitizenship" element={<DigitalCitizenship/>} />
                    <Route path="/definitions/wired_transmission" element={<WiredTransmission/>} />
                    <Route path="/definitions/topology" element={<Topology/>} />
                    <Route path="/definitions/lanandwan" element={<LocalAreaNetworkAndWideAreaNetwork/>} />
                    <Route path="/definitions/clientandservermodel" element={<ClientAndServerModel/>} />
                    <Route path="/definitions/communicationprotocols" element={<CommunicationProtocols/>} />
                    <Route path="/definitions/handshaking" element={<Handshaking/>} />
                    <Route path="/definitions/transmissioncontrolprotocolandinternetprotocol" element={<TransmissionControlProtocolSlashInternetProtocol/>} />
                    <Route path="/definitions/domainnamesystem" element={<DomainNameSystem/>} />
                    <Route path="/definitions/hypertexttransferprotocol" element={<HyperTextTransferProtocol/>} />
                    <Route path="/definitions/hypertextmarkuplanguage" element={<HypertextMarkupLanguage/>} />
                    <Route path="/definitions" element={<BlogsPage blogs={blogs}/>} />
                    <Route path="/featured_definitions" element={<FeaturedBlogs/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="*" element={<NotFound />}/>
                        {/* <Route path="*" element={<Navigate to="/404_not_found" replace={false} state/>} /> */}
                </Routes>
                </main>
                <footer>
                    <div className="flexSide centerDog">
                         <LogoFull className={"grayscale"}/>
                         <p className="ghost">Exploring how the web, computers and your hardware works. One definition at a time.</p>
                    </div>
                    <p>Copyright 2026 Daniel, and Ethan. Licensed under the Apache License, Version 2.0</p>
                </footer>
            </HashRouter>
        </AppContext.Provider>
}    