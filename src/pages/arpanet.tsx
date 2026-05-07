import React from "react";
export function ArpanetPage() {
    return <>
            <div className="flexSide">            
            <img src="https://ethw-images.s3.us-east-va.perf.cloud.ovh.us/ethw/thumb/8/89/ARPANET-Logo.png/300px-ARPANET-Logo.png" alt="A black outline globe icon with the text ARPANET on it."/>
            <div className="flexNormal">
            <h1 className="unique_stripe standard">
                What is ARPANET?
            </h1>
            <p>
                ARPANET also known as Advance Research Project Agency Network is a first wide-area packet-switched network that is distributed control of one of the first computer networks to implement the TCP/IP protocol suite.
            </p>
            <p>
                ARPANET first began in 1969; established under the Advanced Research Projects Agency, it was the first operational packet-switching network that laid the foundation for the world wide web as we know it today.
            </p>
            </div>
            </div>
            <h2>How does ARPANET work?</h2>
            <p>
                Arpanet breaks down data into small packets. Each containing a header, which were sent to their destination with Interface Message Processors that acted as the first routers.
            </p>
            <p className="ghost">Below is a guy tinkering with an Interface Message Processor used by ARPANET.</p>
            <img src="https://cdn.hswstatic.com/gif/arpanet-4.jpg" alt="A picture of a guy toggling switches on a board."/>
            <p className="ghost">Below is a visualisation of a packet.</p>
            <img src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3F1ZXN0aW9uNTI1LXBhY2tldC5naWYiLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjI5MH19fQ==" alt="An ARPANET-style 
            packet."/>
        </>
}