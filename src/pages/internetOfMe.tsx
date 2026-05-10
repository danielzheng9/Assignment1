export function InternetOfMe() {
    return <>
        <h1>Internet of Me and Internet of Things</h1>
        <p>The Internet of Me (IoMe) loosely refers to technology which connects our minds and bodies with the online world. It transforms our biological and cognitive life into streams of data which can be monitored, shared and shaped.</p>
        <p>
            Internet of me refers to personalised online services where your device, things you do online, websites, apps all collect individual user data to tailor things like experiences and services.
        </p>
        <p>
            It moves beyond simply being service — It's a personalised service, a service tailored to you — A digital twin of yourself.
        </p>
        <p>
            A primary form of the Internet of Me can include personalised advertising by harvesting your data and selling it. This is highly controversial as some businesses/websites can take this a long way with extensive data harvesting and monetising off that.
        </p>
        <p>
            Legally in Australia (Part of the Privacy Act 1988), opting-out is a required feature.
        </p>
        <p>
            While you can do this, it is not a simple process. It involves many steps.
        </p>
        <p>
            You can instead head for alternative tools like using Firefox, adding extensions to your browser like uBlock Origin, tracker blocking extensions, etc.
        </p>
        <p>
            Some tools can distrupt the Internet of Me. For example:
        </p>
        <ul>
            <li>VPNs & Tor - As long as you trust the VPN more than your ISP, or you choose one for no-logs and for some reason you really want to hide your online presence, it can work. Tor is the backend of the dark web — It works by protecting your anonymity through routing your internet traffic through a network that encrypts your data in multiple layers. This is called onion routing, a practice that refers to data being wrapped in many layers of encryption and routed through relays. Each node decrypts one layer and sends it to the next. No node knows who sent the original packet or the final destination. Tor ensures your IP is hidden, prevents ISPs from tracking you and conceals your traffic through layered encryption.</li>
            <li>Another tool that allows you to bypass the bad side of the Internet of Me is using ad blockers/tracking blockers like uBlock origin. These stop trackers from running, and they prevent data being sent to the harvesting server for personalised advertisements.</li>
            <li>You can use services like DeleteMe to send legal notices to Data Brokers emphatically demending they delete your profile. Although this service is paid, it does offer a nice benefit for privacy oriented users.</li>
        </ul>
        <p>
            On social media content consumption platforms like YouTube or TikTok - Internet of Me is used to maximise engagement by studying what you watch, personalising your feed. These platforms are designed as addiction machines that leverage your emotions to keep you enagaged.
        </p>
        <p>
            While they offer personalised experiences, because of how the algorithm promotes content - over time, it leads to more extremist, fast paced, controversial content that leads the boundaries of what content is because it generates higher enagement. This leads to the mass spread of dangerous challenges such as the "tide pod challenge", or misinformation.
        </p>
        <p>
            Prolonged exposure to algorithmic feeds, can cause anxiety, depression, withdrawal symptoms, the need to "stay updated".
        </p>
        <p>A significant offender of Internet of Me is LinkedIn, which engages in behaviours people criticise for being invasive. LinkedIn is the largest professional network on the internet. You can use LinkedIn to find jobs, internship, connect and strengthen professional relationships. It operates with you having a profile employers can look at and hire you. You can set your profile to Open to Work. But, LinkedIn uses a system where all your browser extensions are sent to their servers. In 2024, LinkedIn added an AI feature you will need to opt out of manually. It trains on what you do within the service. LinkedIn also tracks all actions you do on their site. It tracks your messages, your hardware information, your CPU core count, RAM usage, the list goes on.</p>
        <p>As of 2026, BrowserGate has ongoing investigations with LinkedIn — The most popular professional job listing website since 2003.</p>
        <h2>Internet of Things</h2>
        <p>
            Internet of Me and Internet of Things are completely different things.
            Internet of Things (IoT) encompasses smart devices and smart objects that send and receive information using the internet and communication infrastructure.
        </p>
        <p>
            Internet of things refers to a vast network of physical devices (things) - Devices embedded with sensors, software, hardware, cameras and thermostats that exchange data with other devices and systems over the internet.
        </p>
        <p>
            Internet of things can include smart factories who use predictive maintenance to preventmachine failure, supply chain tracking and also leverege the trend of AI to make manufacturing an environment where the factory makes its own decisions without waiting for a human to spot a problem.
        </p>
        <p>
            Smart homes rely on the Internet of Things, which connects hardware like sensors, your devices and heaters to automate and optimise home functions.
        </p>
        <img className="behaveImage" src="https://www.tdk.com/en/tech-mag/sites/default/files/2024-05/Iot%20System%20Infographic.png" alt="Internet of things visualisation with clouds showcasing each component."/>
        <p>
            Sensors collect environmental data, actuators perform actions based on the data. Devices are connected via Wi-Fi, Bluetooth or other wireless technologies — allowing them to communicate and share data.
        </p>
        <p>
            Users interact with their smart home through apps or voice commands. A central server coordinates the system — processing data and sending commands.
        </p>
        <p>
            Internet of Things can include severe privacy risks with devices like smart cameras, smart watches can collect data on your daily life such as your habits, where you go, what you say, what you do and can be sold to entities like data brokers or used to create more detailed profiles about you.
        </p>
        <p>
            Connected devices can become surveillance tools or botnet participants. Hackers can take control of your smart home camera due to the way that many IoT devices are designed — weak security, lacking encryption, default passwords — allowing a hacker to easily take control of your device to compromise your network.
        </p>
        <p>
            When a hacker uses your device for a bot net, they are remote controlling your device externally to achieve a nefarious or malicious goal the hacker might have in mind. They compromise many networks, and when the time is ready — they do things like launching massive Distributed Denial of Service attacks to shut down a service, mine crypto currency on your device for their personal gain, or mass spreading spam emails.
        </p>
        <p>
            IoT devices can be forced to become bots that blindly follow commands from a remote server. They can be used to commit illegal actions as part of a botnet. Any device with internet capability can be infected to a botnet.
            Botnets aren't just limited to mining crypto currency, DDOS attacks or spam emails — they can do much more. They can act as large power farms across the world to compute something, an infected device can send malicious links as part of a botnet in mass quantities, they can be used to brute force hash check a high value target's passwords, activating schemes like gambling campaigns or convince people through social engineering to make them think that engaging in this campaign will make you rich! They can also infect other IoT devices.
        </p>
    </>;
}