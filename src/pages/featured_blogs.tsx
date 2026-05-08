import React from "react";
import { Blogs } from "../blogsComponent.js";
export function FeaturedBlogs() {
    return <>
        <h1>Featured Definitions</h1>
        <Blogs blogs={[
                   {
            title: "What is Network Bandwidth",
            description: "Understand the throttle of your network — Why your internet can feel slow at times",
            linkTo: "/definitions/whatisnetworkbandwidth",
            image: "https://micronovaimpex.com/wp-content/uploads/2021/02/Ethernet-cabls.png",
            minutesToRead: 2
       }
        ]}></Blogs>
    </>
}