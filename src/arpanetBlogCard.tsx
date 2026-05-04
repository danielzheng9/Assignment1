import { BlogCard, BlogDescription, BlogTitle, MinuteToReadTime } from "./blogCard.js"
export function ArpaNetBlogCard() {
    return <BlogCard to={"/blogs/arpanet"}>
                <BlogTitle>ARPANET</BlogTitle>
                <BlogDescription>Explore the origins of ARPANET</BlogDescription>
                <img src="https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg"></img>
                <MinuteToReadTime mins={2}/>
            </BlogCard>
}