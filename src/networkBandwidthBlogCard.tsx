import { BlogCard, BlogDescription, BlogTitle, MinuteToReadTime } from "./blogCard.js"
export function NetworkBandwidthBlogCard() {
    return <BlogCard to={"/blogs/whatisnetworkbandwidth"}>
                <BlogTitle>What is Network Bandwidth?</BlogTitle>
                <BlogDescription>Your network has a set amount of data it can transmit at a time.</BlogDescription>
                <div className="bottomHalf">
                    <img src="https://thumbs.dreamstime.com/b/serious-self-employed-working-consulting-paper-agenda-home-445069973.jpg"></img>
                    <MinuteToReadTime mins={2}/>
                </div>
            </BlogCard>
}