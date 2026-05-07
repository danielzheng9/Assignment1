import { BlogCard, BlogDescription, BlogTitle, MinuteToReadTime } from "./blogCard.js"
export function DecimalBlogCard() {
    return <BlogCard to={"/blogs/decimal"}>
                <BlogTitle>Decimal</BlogTitle>
                <BlogDescription>The underlying math of our everyday computers.</BlogDescription>
                <div className="bottomHalf">
                    <img src="https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg"></img>
                    <MinuteToReadTime mins={2}/>
                </div>
            </BlogCard>
}