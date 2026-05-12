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

                    </p>
                    <p>

                    </p>
                    <p>
                        {"Java applets API <applet> was deprecated."}
                    </p>
                </TimelineYearCard>
                </div>
            </div>
        </div>
}