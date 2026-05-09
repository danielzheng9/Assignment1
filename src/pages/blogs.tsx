import React, { useState } from "react";
import { Blogs, type Blog, type BlogType } from "../blogsComponent.js";
export function BlogsPage({blogs}: {blogs: BlogType}) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredBlogs: BlogType = [...blogs].filter((thisBlog: Blog, index: number) => {
        for (const [key, value] of Object.entries(thisBlog)) {
            const stringifiedValue: string = value.toString();
            if (!stringifiedValue.toLowerCase().includes(searchTerm.toLowerCase())) continue;
            return true;
        }
        return false;
    })
    return <>
    <h1 className="searchBarAndTitle">Definitions <input className="search" type="text" placeholder="Search" onChange={(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        const target = event.target;
        setSearchTerm(target.value);
    }}/></h1>
    <p>Click on a definition to read and understand.</p>
    <Blogs blogs={filteredBlogs}/>
    </>
}