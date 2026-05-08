import React from "react";
import { NavLink } from "react-router-dom";
export function Home() {
    return <div className="homeStripe">
            <h1 className="title">Technical Glossary Solutions and Practical Learning</h1>
            <p>Let's explore how the world wide web works!</p>
            <NavLink to="/definitions">Go to our definitions</NavLink>
        </div>
}