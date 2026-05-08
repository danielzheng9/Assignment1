import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
export function Home() {
    const beginningsOfInternet = useRef<HTMLHeadingElement | null>(null);
    return <div className="homeStripe">
            <h1 className="title">Me and You on the Web</h1>
            <p>Let's explore how the world wide web works!</p>
            <NavLink to="/definitions">Go to our definitions</NavLink>
            <button className="linkButton" onClick={() => {
                beginningsOfInternet.current?.scrollIntoView();
            }}>Go to timeline</button>
            
            <div className="FullHeightSpacer"/>
            <div className="flexNormal timelessPage">
                <h1 ref={beginningsOfInternet}>The Beginnings of the Internet</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Internet_map_1024_-_transparent%2C_inverted.png/330px-Internet_map_1024_-_transparent%2C_inverted.png"/>
                <p className="ghost">an image of a portion of the internet connections [Source: <NavLink to="https://en.wikipedia.org/wiki/History_of_the_Internet">https://en.wikipedia.org/wiki/History_of_the_Internet</NavLink>]</p>
            </div>
        </div>
}