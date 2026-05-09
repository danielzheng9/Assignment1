import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
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

                <p>In 1960, researchers developed packet switching networks. They aimed for data sharing, and communication that could survive attacks.</p>
                <p>In 1969, ARPANET was the first packet switching network developed. It was funded by the US Defense Department, who linked computers at The University of California and Stanford</p>
                <p>
                    In 1993, the Mosaic browser was created.
                </p>
                <img src="https://media.wired.com/photos/59344b215321273fc0f91cd1/3:2/w_2560%2Cc_limit/mos-10.jpg"/>
            </div>
        </div>
}