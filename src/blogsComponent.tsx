import React from "react";
import { BlogCard, BlogTitle, BlogDescription, MinuteToReadTime } from "./blogCard.js";
export interface Blog {
    title: string,
    minutesToRead?: number,
    description?: string,
    linkTo: string,
    image: string
}
export type BlogType = Blog[];
export function Blogs({blogs}: {blogs: BlogType}) {
    return <div className="blogFolder">
            {/* <ArpaNetBlogCard/>
            <NetworkBandwidthBlogCard/>
            <DecimalBlogCard/> */}
            {
                blogs.map((thisBlog: Blog, index: number) => {
                    return <BlogCard to={thisBlog.linkTo} key={index}>
                            <BlogTitle>{thisBlog.title}</BlogTitle>
                            {thisBlog.description ? <BlogDescription>{thisBlog.description}</BlogDescription> : <></> }
                            <div className="bottomHalf">
                                <img src={thisBlog.image}></img>
                                {thisBlog.minutesToRead ? <MinuteToReadTime mins={thisBlog.minutesToRead}/> : <></> }
                            </div>
                        </BlogCard>
                })
            }
        </div>
}