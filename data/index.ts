export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        title: "CAIES Foundation Website",
        src: "/images/1.jpg",
        description: "The Center for Artificial Intelligence and Environmental Sustainability (CAIES) Foundation, is a niche Section (8) non-profit organization that focuses on trans-disciplinary challenges, which require sustainable outcomes that are implementable and operational in the areas of environment, economics, and society through extensive research and development using cutting edge data science, machine learning, artificial intelligence, and geospatial tools and technologies.",
        link: "https://caienvsus.org"
    },
    {
        title: "Garud",
        src: "/images/2.jpg",
        description: "An automation tool that scans sub-domains, sub-domain takeover, then filters out XSS, SSTI, SSRF, and more injection point parameters and scans for some low hanging vulnerabilities automatically.",
        link: "https://github.com/R0X4R/Garud"
    },
    {
        title: "Bhedak",
        src: "/images/3.jpg",
        description: "A replacement of qsreplace, accepts URLs as standard input, replaces all query string values with user-supplied values and stdout. Works on every OS. Made with python",
        link:"https://github.com/R0X4R/bhedak"
    },
    {
        title: "Snetra",
        src: "/images/4.jpg",
        description: "A Python based scanner uses shodan-internetdb to scan the IP.",
        link: "https://github.com/R0X4R/snetra"
    },
    {
        title: "Agnee",
        src: "/images/5.jpg",
        description: "Find sensitive information using dorks from different search-engines.",
        link: "https://github.com/R0X4R/Agnee"
    },
    {
        title: "Parshu",
        src: "/images/6.jpg",
        description: "Filter URLs to save your time using regex",
        link: "https://github.com/R0X4R/Parshu"
    }
];

export const companies = [
    { name: "Apple logo", img: "/companies/apple.png" },
    { name: "BehindTheName logo", img: "/companies/behind.png" },
    { name: "Crowdin logo", img: "/companies/crowdin.png" },
    { name: "Dell logo", img: "/companies/dell.png" },
    { name: "Google logo", img: "/companies/google.png" },
    { name: "Mastercard logo", img: "/companies/mastercard.png" },
    { name: "Netflix logo", img: "/companies/netflix.png" },
    { name: "Netgear logo", img: "/companies/netgear.png" },
    { name: "Nokia logo", img: "/companies/nokia.png" },
    { name: "Pinterest logo", img: "/companies/pinterest.png" },
    { name: "SAP logo", img: "/companies/sap.png" },
    { name: "Seagate logo", img: "/companies/seagate.png" },
    { name: "Unilever logo", img: "/companies/unilever.png" },
    { name: "UN Women logo", img: "/companies/unwomen.png" },
    { name: "Upwork logo", img: "/companies/upwork.png" },
    { name: "Vonage logo", img: "/companies/vonage.png" },
    { name: "Western Union logo", img: "/companies/westernu.png" }
];

export const blogs = [
    {
        "title": "GraphQL IDOR leads to information disclosure",
        "description": "While doing recon for redacted.com (A private program and as per their privacy policies, I cannot disclose their name), I found that the web app is using GraphQL for their API Management. So, I firstly tried Introspection Query to extract sensitive information.After passing the query I saw a field called Users, so I pass",
        "link": "https://medium.com/bugbountywriteup/graphql-idor-leads-to-information-disclosure-175eb560170d",
        "type": "blog"
    },
    {
        "title": "GraphQL introspection leads to sensitive data disclosure",
        "description": "For Discovering this bug, I learned the fundamentals of GraphQL for at least 5–6 hours and read all other relevant bug reports, especially Namhamsec’s GraphQL CTF Challenge. After that, I saw a new program on Bugcrowd, so I participated in it.They gave me a domain [let’s take the domain as example.com because the vulnerability hasn’t fixed yet], i.e.example.com.",
        "link": "https://medium.com/bugbountywriteup/graphql-introspection-leads-to-sensitive-data-disclosure-714f1d9d9d4a",
        "type": "blog"
    },
    {
        "title": "Introduction to Blind XSS",
        "description": "Last year I was scrolling my LinkedIn Profile feeds suddenly a post came in front of me. In that post, a Bug Hunter posted his PoC about how he found Blind-XSS in Spotify. I was surprised after hearing about BXSS. I was surprised at that moment after watching that there is another category of XSS which is known as BLIND XSS. ",
        "link": "https://medium.com/@R0X4R/introduction-to-blind-xss-417dcf9c842c",
        "type": "blog"
    },
    {
        "title": "Learn with @R0X4R: Recon Automation & How To Approach For Help",
        "description": "In this video, Eshan Singh (@r0x4r) has shown his way of recon and which tool he uses to automate the process also he has explained how to approach another researcher for help.",
        "link": "https://youtu.be/AMj91azYUmE",
        "type": "video"
    },
    {
        "title": "Master FFUF for Bug Bounty",
        "description": "FFUF is a great tool for fuzzing. It is a fast web fuzzer written in Go. It is used to fuzz parameters, headers, and other parts of a web application. It is a great tool for bug bounty hunters and penetration testers. It is a very fast fuzzer. It is used to find hidden files and directories on a web server. It is a very powerful tool.",
        "link": "https://www.youtube.com/watch?v=e65H7QGJmc0",
        "type": "video"
    },
    {
        "title": "Bug Bounty POC: Oneplus",
        "description": "This video demonstrates a proof of concept (POC) for an XSS vulnerability found on the OnePlus website. It details the steps taken to discover and exploit the vulnerability, providing valuable insights for security enthusiasts.",
        "link": "https://www.youtube.com/watch?v=h9ZVke2b2Es",
        "type": "video"
    },
    {
        "title": "Escalate Open-redirection into XSS",
        "description": "This video shows how an open-redirection vulnerability can be escalated into an XSS attack. It provides a step-by-step guide on finding the open-redirection issue and exploiting it for XSS, offering useful information for security researchers.",
        "link": "https://www.youtube.com/watch?v=n5WA9r1j_ZI",
        "type": "video"
    }
];

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    }
};

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
};

export const education = [
    {
        icon: "IoSchool",
        title: "Bachelor of Technology",
        year: "2023-27",
        description:
            "B.Tech in CSE, Gurukul Kangri (Deemed to be University), FET, Haridwar",
    },
    {
        icon: "GrYoga",
        title: "500H Registered Yoga Teacher",
        year: "2021",
        description: "Yoga Instructor Certification - Level II (Yoga Alliance)",
    },
    {
        icon: "AiTwotoneSafetyCertificate",
        title: "Junior Penetration Tester",
        year: "2021",
        description:
            "eLearnSecurity (INE Security) Certified Junior Penetration Tester (eJPT)",
    },
    {
        icon: "FaSchoolFlag",
        title: "Senior Secondary (Class XII)",
        year: "2021",
        description: "SG Uchh Vidyalaya, Bhojpur",
    },
    {
        icon: "PiCertificateFill",
        title: "CybHER",
        year: "2020",
        description: "Telangana State Police Department",
    },
    {
        icon: "PiCertificateFill",
        title: "NSE Level 1: Certified Associate",
        year: "2020",
        description: "Fortinet",
    },
    {
        icon: "PiCertificateFill",
        title: "101 Coding",
        year: "2020",
        description: "Fortinet",
    },
    {
        icon: "PiCertificateFill",
        title: "Linux Administration 101",
        year: "2020",
        description: "LetsUpgrade",
    },
    {
        icon: "PiCertificateFill",
        title: "Cryptocurrency for Law Enforcement",
        year: "2020",
        description: "FedVTE",
    },
    {
        icon: "PiCertificateFill",
        title: "CyberZone Certified Ethical Hacker",
        year: "2018",
        description: "Cyber Zone Technologies (P) Ltd.",
    },
    {
        icon: "PiCertificateFill",
        title: "CyberZone Certified Network Administration (CZCNA)",
        year: "2018",
        description: "Cyber Zone Technologies (P) Ltd.",
    },
]