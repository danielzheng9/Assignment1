import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { TimelineYearCard } from "../timelineYearCard.js";
export function Home() {
    const beginningsOfInternet = useRef<HTMLHeadingElement | null>(null);
    return <div className="homeStripe">
            <h1></h1>
            <h1 className="title">Connecting Me and You</h1>
            <p>Let's explore how your computer works!</p>
            <NavLink to="/definitions">Go to our definitions</NavLink>
            <button className="linkButton" onClick={() => {
                beginningsOfInternet.current?.scrollIntoView();
            }}>Explore the timeline</button>
            
            <div className="FullHeightSpacer"/>
            <div className="flexNormal timelessPage">
                <h1 ref={beginningsOfInternet}></h1>
                <h1>The Beginnings of the Internet</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Internet_map_1024_-_transparent%2C_inverted.png/330px-Internet_map_1024_-_transparent%2C_inverted.png"/>
                <p className="ghost">an image of a portion of the internet connections [Source: <NavLink to="https://en.wikipedia.org/wiki/History_of_the_Internet">https://en.wikipedia.org/wiki/History_of_the_Internet</NavLink>]</p>

                <div className="timeline">
                <TimelineYearCard yearDate="1960">Researchers developed packet switching networks. They aimed for data sharing, and communication that could survive attacks.</TimelineYearCard>
                <TimelineYearCard yearDate="1965">Lawrence Roberts and Thomas Merril communicate with computers connected via a dial-up telephone in Massachusetts and California.</TimelineYearCard>
                <TimelineYearCard yearDate="1969">ARPANET was the first packet switching network developed. It was funded by the US Defense Department, who linked computers at The University of California and Stanford</TimelineYearCard>
                <TimelineYearCard yearDate="1970">Unix time was established—it served as a live counter from the epoch: 01/01/1970 at 00:00:00 UTC. This laid the backbone for things like authentication and synchronisation. The date was chosen for the convenience of the engineers.</TimelineYearCard>
                <TimelineYearCard yearDate="1993">
                    The Mosaic browser was created to make the World Wide Web accessible, user-friendly, and moving it beyond the text-only academic use.
                <img src="https://media.wired.com/photos/59344b215321273fc0f91cd1/3:2/w_2560%2Cc_limit/mos-10.jpg" className="behaveImage" width="250px"/>
                </TimelineYearCard>
                <TimelineYearCard yearDate="1994">
                    The Netscape browser was launched—and dominated the market from there.
                </TimelineYearCard>
                <TimelineYearCard yearDate="1995">
                    Netscape Navigator reached a 70% marketshare. Microsoft would soon release Internet Explorer.
                    Amazon, and eBay were launched.
                    <p>JavaScript was introduced on December 4. It allowed for more reactive and interactive webpages. JavaScript was named that way to ride the hype of Java. It was created by Brendan Eich, where he wanted to embed the Scheme programming language in the web—a Lisp-like functional language—but, his managers insisted him to create a syntax similar to Java.</p>
                    <p>Basically, it was made to confuse developers and regular people because of marketing.</p>
                    <p>
                        Java Applets were introduced.
                    </p>
                </TimelineYearCard>
                <TimelineYearCard yearDate="1996-1999">
                    <p>
                        Web safe design was an emerging trend, the Internet Archive was born, Hotmail was released, CSS was introduced.
                    </p>
                    <p>
                        Websites often featured badges saying they were best experienced in a specific browser because the developers did not want to spend time trying to make a website that works on both browsers—as they diverged in functionality significantly. Java Applets were introduced. DHTML (Dynamic Hypertext Markup Language) was introduced with Microsoft Internet Explorer 4 defining the stack of HTML, JavaScript, CSS for marketing—to show the features of Internet Explorer 4. Netflix was founded. Microsoft bought Hotmail. IEEE 802.11 was created for consumers to use. The WoRld Wide Web Consortium published the HTML 4 standard.
                    </p>
                    <p>
                        Google was incorporated into a commercial company for searching queries on the web. Amazon became an online retail store rather than only selling books to create a limitless, centralised marketplace. Many search engines were released, and marketed as portals. Web standards were finalised (CSS2, XML, DOM) to unify how the web looks. Microsoft saw the threat of antitrust laws developing at this time.
                    </p>
                    <p>
                        {"Java applets API <applet> was deprecated."}
                    </p>
                </TimelineYearCard>
                <TimelineYearCard yearDate="2000">
                    <p>The Y2K bug, a flaw where computer dates at the time were interpreted as two digits. This would mean, when the year 2000 was reached—the year would display as 1900. This bug was present in vital systems and security systems. People were fearing that society would collapse—people stockpiled on food and water.</p>
                    <p>
                        Governments and businesses spent billions of dollars to fix faulty code.
                    </p>
                    <p>
                        The reason why digits were interpreted as two digits was because in 1960 and 1970, computer memory costed $100 per kilobyte. Programmers used two digit codes for the year to save space. Developers did not expect this software would be used many years later—they assumed the software would be replaced before 2000.
                    </p>
                    <p>
                        Peer to peer file sharing filled the media, Neopets was popularised.
                    </p>
                </TimelineYearCard>
                <TimelineYearCard yearDate="2001-2010">
                    <p>Wikipedia launched. Apple iTunes launched. Broadband 3G was adopted over dial-up. Linkedn was launched.</p>
                    <p>Facebook was launched, YouTube was launched, Web 2.0 was launched, Google was launched, Twitter was launched.</p>
                    <p>The iPhone was launched, the Apple App Store was launched, the Android Market was launched. Instagram was launched, cleaner corporate web design was launched.</p>
                </TimelineYearCard>
                <TimelineYearCard yearDate="2011-2015">
                    The internet shifted from desktop focused development to mobile phone development. In 2012, Vine was created.
                    <p>HTML5 was standardised, HTTP/2 was standardised. 4G LTE rolled out. IPv6 was launched to fix the issue of IPv4 addresses running out. Cloud infrastructure was hyped (SaaS)</p>
                    <p>React was created in 2013. Google created AngularJS in 2010. Docker was created. HTTPS was the default standard due to the inherit vulnerable nature of HTTP</p>
                </TimelineYearCard>
                <TimelineYearCard yearDate="2015-2026">
                    <p>The European Union's General Data Protection Regulation described the necessity for cookie banners that ask what cookies to store on your device.</p>
                    <p>During the pandemic, COVID-19 sparked the internet even more—Zoom became a well known name. TikTok was fueled because of this.</p>
                    <p>HTTP/3 replaced TCP with a UDP system (Quick User Datagram Protocol Internet Connection)</p>
                    <p>ChatGPT was originally for enterprise work, and they released a demo with Google's Attention Neural Network being used in an LLM. People thought it was sentient, people were intrigued by the ability of a foreign piece of tech that could talk and feel alive. It made gathering info easier. Google's AI Overview recommended people to eat rocks, and put glue on cheese pizza.</p>
                    <p>
                        5G was developed. 6G was standardised in 2026.
                    </p>
                </TimelineYearCard>
                </div>
            </div>
        </div>
}