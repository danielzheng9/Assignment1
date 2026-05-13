import { NavLink } from "react-router-dom";

export function Trojan() {
    return <>
        <h1>Trojan</h1>
        <p>The name Trojan comes from an ancient Greek myth of the Trojan horse. It was a giant wooden horse used by Greeks to infiltrate the city of Troy during the Trojan War. The Greek soldiers pretended the horse was a gift, gave it to the city of Troy and hid inside the horse to enter the city. Later, they attacked.</p>
        <p>The same concept applies in computing—a trojan virus is a type of malicious software that is designed to <NavLink to="/definitions/socialengineering">social engineer</NavLink> users into downloading this software, believing it is a harmless piece of utility. They disguise themselves as common needed software—then when the user downloads them, it can perform various nefarious or malicious actions—such as deploying ransomware, RATs, and other types of malware.</p>
    </>
}