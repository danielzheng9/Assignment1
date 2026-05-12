import { NavLink } from "react-router-dom";

export function TransmissionControlProtocolSlashInternetProtocol() {
    return <>
        <h1>Transmission Control Protocol/Internet Protocol</h1>
        <p>
            TCP/IP protocol is a collection of communication protocols used to connect network devices on a network.
        </p>
        <p>
            TCP defines how your data is processed before and after sending it somewhere on the internet. TCP provides reliable, and ordered data delivery. UDP is a different protocol not to be confused with TCP—unlike TCP, it sends data immediately, often ignoring order and prioritising speed for realtime applications.
        </p>
        <p>
            TCP ensures data is received through processes like TCP <NavLink to="/definitions/handshaking">handshakes</NavLink>.
            TCP communicates with other side to ensure they are using the same technology and processes, and is the stack layer of which technologies are used.
            TCP isn't fixed to a single definition—it uses those definitions and tries to coordinate everyone with them—but it still follows strict Request for Comments standards to ensure global compatibility and that you're not using some foreign unsupported technology like Dog Text Transfer Protocol instead of HTTPS.
        </p>
        <img className="behaveImage" src="https://www.techtarget.com/rms/onlineimages/tcp_ip_model_with_protocols_and_addresses-h_half_column_mobile.png" alt="The Transmission Control Protocol stack"/>
        <p>
            The Internet Protocol is the address system of the internet with the purpose of delivering data to a target device based on an address. Internet Protocol addresses are managed by the Internet Assigned Numbers Authority (part of ICANN) which allocate mass amounts of IPs to five Regional Internet Registries (Asia-Pacific, Europe-Middle East-Central Asia, Canada-USA, Latin America-Carribean, and Africa), then the regional internet registries distribute these to local registries like your Internet Service Provider.
        </p>
        <p>
            An Internet Protocol address is a unique identifier that is assigned to devices on a network (Can be public or private—the public ones are assigned by mass authorities, while private addresses are for use on your local network and you can't distinguish them from outside because they are the same address range with everyone's network.)
            A heavily utilised version of the Internet Protocol is an IPv4 address—which uses 32 bit numbers, with dots between numbers.
            Example of a private IPv4: 192.168.000.001 (shortened, common version written as 192.168.0.1, removing any non-significant digits), 
            Loopback IPv4: 127.000.000.001 (127.0.0.1)
            Private IPv4s start with: 10., 172.16, 172.31, 192.168. They are unable to be used on the public internet.
        </p>
        <p>
            The Internet Protocol was developed within the late 1970s, and adopted in 01/01/1983 as part of TCP/IP. It was designed to connect different packet switching networks (ARPANET, radio, etc) and unify them. It replaced the Network Control Program used by APRPANET.
            In 1981, the RFC 790 and 791 was released, providing the specification for IPv4.
        </p>
        <p>
            A dynamic IP address is assigned by the router changing IP addresses by requesting new ones from the ISP. The router will request for the ISP to provide them a public IP address via DHCP, which the ISP will provide a DHCP lease to prevent stale public IP addresses not being used.
            In homes or small offices, they would instead use a dynamic IP to rotate the IP every now and then.
        </p>
        <p>
            A static IP address is assigned by the router by the router not changing IP addresses every now and then. The router will attempt to renew the license every now and then to keep it being used. This is useful for applications where you are providing a service to consumers or other businesses and need to keep the same IP—a permanent, unchanging identifier—while a dynamic IP works, it might break connections within business systems whenever an address changes, and is unreliable for large scale extended computing tasks.
        </p>
    </>
}