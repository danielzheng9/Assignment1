import React from "react";
import { ArpaNetBlogCard } from "../arpanetBlogCard.js";
export function FeaturedBlogs() {
    return <main>
        <h1>Featured Blogs of This Year</h1>
        <div className="blogFolder">
            <ArpaNetBlogCard/>
            <ArpaNetBlogCard/>
            <ArpaNetBlogCard/>
            <ArpaNetBlogCard/>
            <ArpaNetBlogCard/>
        </div>
    </main>
}