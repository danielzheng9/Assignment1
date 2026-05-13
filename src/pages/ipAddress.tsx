export function IPAddressAndMACAddress() {
    return <>
        <h1>Internet Port Address and Media Access Control Address</h1>
        <strong>IP Address</strong>
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
        <strong>MAC Address</strong>
        <p>
            A Media Access Control is a network protocol sublayer of the Open Systems Interconnection networking model. It is a set of rules built into your computer's hardware. The purpose is to resolve the problem of multi-access medium contention—a problem where multiple devices have to share a single communication channel and compete to transmit data at the same time. This can lead to collisions and data corruption from partial data joining together—this is the problem Media Access Control solves. It provides algorithmic control mechanisms, and it is within the IEEE 802 reference model.
        </p>
        <p>
            A Media Access Control address is used to uniquely identify a device within a network. It is self claimed by the device. It consists of 48 bits, displayed as six groups of 255 size hexadecimal numbers separated by a separator character. The first 24 bits are the Organisationally Unique Identifier. It is a hardware-level identifier for a Network Interface Controller—the Media Access Control Address is a physical identifier used by the Data Link Layer to direct frames between adjacent network nodes—without this, networking hosts cannot differentiate between different devices sending data on a shared local medium. A MAC Address conforms to the IEEE Extended Unique Identifier-48 standard.
            An example address: 95:E9:9D:12:8A;9E
        </p>
    </>
}