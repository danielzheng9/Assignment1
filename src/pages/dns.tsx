import { NavLink } from "react-router-dom";

export function DomainNameSystem() {
    return <>
        <h1>Domain Name System</h1>
        <p>The Domain Name System is a translation layer that allows users to enter a human-readable and memorable domain name, and still receive a website via an <NavLink to="/definitions/transmissioncontrolprotocolandinternetprotocol">IP</NavLink> address.</p>
        <p>
            It eliminates the need to memorise numeric IP addresses for websites. It was created in 1983—when IP was established. It was designed to solve the readability issues of the early ARPANET by creating a system that allowed humans to enter readable names and get a website.
        </p>
        <p>
            {`When you enter a domain name:
            "google.com", you aren't going to Google's Com.
            Instead, you go to com > google (com stands for company, and is managed by a Top Level Domain that manages the IPs for every website registered under that Top Level Domain)
            The browser checks its cached database to find an IP for google.com. If it does not find one, the browser will then ask the Operating System to check its DNS cache to find google.com inside. If the OS does not find one, it will ask the DNS Resolver configured by the system like your ISP or a fast DNS resolver like 1.1.1.1 by Cloudflare to find that domain. If the ISP or DNS Resolver does not find the address, it will ask a Root Name Server which IP address is associated with the Top Level Domain of the requested domain (google), then it will ask the Top Level Domain server for the location of Google's name servers—which it will then contact Google's name server to provide an IP address for the Google domain.
            A top level domain is a root level domain that looks like ".com", ".net", ".org", ".au", managed by ICANN's database. It is managed by one of the 1591 root servers.
            `}
        </p>
    </>
}