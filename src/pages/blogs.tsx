import React from "react";
import { ArpaNetBlogCard } from "../arpanetBlogCard.js";
import { WhatIsNetworkBandwidth } from "./bandwidth.js";
import { NetworkBandwidthBlogCard } from "../networkBandwidthBlogCard.js";
import { DecimalBlogCard } from "../decimalBlogCard.js";
export function Blogs() {
    return <main>
        <div className="blogFolder">
            <ArpaNetBlogCard/>
            <NetworkBandwidthBlogCard/>
            <DecimalBlogCard/>
        </div>
    </main>
}