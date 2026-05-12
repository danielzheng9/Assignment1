export function Handshaking() {
    return <>
        <h1>Handshaking</h1>
        <p>
            Handshaking is a process where two entities establish a communication link by authenticating the signals from the other. It's a negotiation process where two devices exchange information about each other before the actual process begins.
        </p>
        <p>
            A handshake involves two entities validating each other in order.
        </p>
        <strong>Three Way Handshake</strong>
        <p>
           A three way handshake in Transmission Control Protocol (A Networking Standard) is where the first figure sends an important synchronisation packet (This synchronisation packet is used as a numeric counter to let the other side know which packet in the sequence they are at and referring to with acknowledgement packets) to the second figure first, then the second firgure sends a synchronisation packet back ALONG with an acknowledgement packet (a packet telling the other side that the request has been received) (this packet is combined, Synchronisation+Acknowledgement of that packet) back to the first figure. Then, the first figure sends an acknowledgement packet back to the second figure to acknowledge their synchronisation packet.
        </p>
        <p>
            A three way handshake can be used between two devices (frequently a server and a client, peer-to-peer behaves similarly) where they need to establish a connection between each other before data transfer begins. It allows for synchronisation to let the other side know if a connection is out of sync, in the right order—when a packet gets lost or corrupted, this side wont send an acknowledgement.
            This means, later when the other side who sent the packet waits a while then finds this side didn't send an acknowledgement, it will resend the previous packet (along with the sequence number from before) to ensure this side actually receive it. If this side did receieve it and the acknowledgement was the one that failed, then the other side sent the packet again—this side is perfectly fine because this side know this sequence number has been sent before, this side will just not store and discard with this new packet because it is the same, and instead just return an acknowledgement back to let the other side know this side has received the packet.
        </p>
    </>
}