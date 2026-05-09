export function Hardware() {
    return <>
        <h1>Hardware</h1>
        <p>A node is a joint or connection on a network of interconnected stems that allows connections to other parts of the network. It can send, receive and process data</p>
        <img className="behaveImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eJEzKfGJ9-1EotA97-B7GdmLAZx_wVP2vA&s" alt="A diagram of nodes connected with links."/>
        <p>A smart hub connects different smart devices together from different manufacturers</p>
        <p>
            Using a smart hub eliminates the need for downloading separate applications for each brand of product. It unifies the approach into a single device that controls them all.
        </p>
        <p>
            An example can include: A doorbell camera, a water purifier, an air purifier, a television and a security camera connected to a smart hub.
        </p>
        <img className="behaveImage" src="https://raw.githubusercontent.com/DOGNET-SUPERB-TECHNOLOGIES/cdn/main/smartHubDiagram.png" alt="A diagram of a smarthub linking devices together" width="350px" height="350px"/>
        <p>
            A router is a packet transmission device that allows two or more networks to connect within each other. It forwards packets received from devices and other networks to an intended IP address
        </p>
        <p>
            There are different types of routers. Most routers pass data through LANs (Local Area Network) and WANs (Wide Area Network)
        </p>
        <p>
            A WAN is a large network spread over a large intercontinental area. This is for large organisations that operate across large areas who need to share a network. An example of a WAN can be individual LANs for each location, which connect to others to form a WAN.
        </p>
        <p>
            A LAN is a network concentrated a small area used for household internet access or small organisations.
        </p>
        <p>
            Routers store a table of addresses/IPs to route data to. When it receives a packet, it will read where the device intended to send the packet, then read the table to figure out the most optimal path. It forwards the packet to the next network in the path.
        </p>
        <img className="behaveImage" src="https://cdn.shopify.com/s/files/1/0613/4041/8306/files/LO-Connection_of_networks_through_Router.png?v=1659944198" alt="A diagram of routers connected to switches connected to computers"/>
    </>
}