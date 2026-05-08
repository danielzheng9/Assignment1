import React from "react";
import { Blogs, type BlogType } from "../blogsComponent.js";
export function BlogsPage({blogs}: {blogs: BlogType}) {
    return <>
    <h1>Definitions</h1>
    <p>Click on a definition to read and understand.</p>
    <Blogs blogs={blogs}/>
    </>
}