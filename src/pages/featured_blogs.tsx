import React from "react";
import { Blogs } from "./blogs.js";
export function FeaturedBlogs() {
    return <>
        <Blogs blogs={[
                   {
            title: "What is Network Bandwidth",
            description: "Your network actually has a limiting speed - Which is why your Google feels so slow on PremiumX wifi as opposed to using Woolworths Everyday.",
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
        ]}></Blogs>
    </>
}