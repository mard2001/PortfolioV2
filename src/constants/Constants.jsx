import { Code2, CodeSquare, Facebook, FacebookIcon, Github, HandFist, Handshake, Linkedin, Mail, MonitorSmartphone, Users } from "lucide-react";
import { mdiGithub, mdiFacebook, mdiLinkedin } from '@mdi/js';


export const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Experience", label: "Experience" },
    { href: "#Projects", label: "Projects" },
    { href: "#Testimony", label: "Testimonials" },
];

export const shortAboutSelf = `A software engineer specializing in front-end and back-end web development. I build accessible, well-designed, and high-performance websites using modern web technologies.`;

export const socMedLinks = [
    {icon: mdiGithub, href:"https://github.com/mard2001"},
    {icon: mdiLinkedin, href:"https://www.linkedin.com/in/marvin-navarro-01/"},
    {icon: mdiFacebook, href:"https://www.facebook.com/Marvin.Navarro.01/"},
    // {icon: Mail, href:"https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsTQNsBgCljnKFGGKHtmLJkrpcmrwBCqmqdBmMClddWXGHpvlWkkPsbnNxFbKVwhwbfmfCFV"},
];


export const highlights = [
    {
        icon: MonitorSmartphone, 
        title: "Responsiveness & User Experience",
        description: "Builds websites that are easy to use and look good on all devices, from phones to desktops."
    },
    {
        icon: Code2, 
        title: "Performance & Optimization",
        description: "Improves website speed and performance so pages load fast and feel responsive."
    },
    {
        icon: Users, 
        title: "Clear Communication",
        description: "Explains technical ideas in simple language so teammates and clients stay on the same page."
    },
    {
        icon: Handshake, 
        title: "Teamwork & Collaboration",
        description: "Works well in a team, values feedback, and communicates openly to get things done."
    },
    {
        icon: HandFist, 
        title: "Resilience & Problem-Solving",
        description: "Solves problems calmly, learns from mistakes, and keeps projects moving forward."
    },
    {
        icon: CodeSquare, 
        title: "Code Quality & Maintainability",
        description: "Writes clean, readable code that’s easy to maintain and scale."
    },
];

export const AboutSelfData  =  () => (
    <>
        <p>
            I started my career in software development before finishing my degree in Information Technology. Since then, I’ve gained hands-on experience working with fast-paced teams and building practical software for real-world use.
        </p>
        <p>
            I work on both front-end and back-end development, helping create systems that are reliable, scalable, and easy to maintain. I enjoy learning new tools, working with teams, and turning complex ideas into simple, useful solutions.
            I’m always learning and open to improving my skills. I can quickly adapt to new tools and technologies, and I’m comfortable working with guidance when needed. I enjoy working with teams and care a lot about writing clean, easy-to-maintain code.
        </p>
        <p>
            My focus is on building reliable and scalable systems—whether it’s web applications, tracking systems, or other digital solutions. I enjoy turning complex ideas into simple, useful products that make a real impact.
        </p>
    </>
);


export const experiences = [
    {
        period: "Feb 2025 - Mar 2026",
        role: "Software Engineer - Full Time",
        company: "Fast Distribution Corp.",
        description: [
                        `As a full-time full-stack developer, I work on a Sales Force Automation web dashboard that provides real-time tracking and monitoring of sales teams using the Google Maps API. I manage the front-end, prepare APIs on the back-end, and ensure smooth data flow between systems.`,
                        `I execute and optimize stored procedures to transform raw data into structured datasets for analytical reporting. Using Metabase to create sales and customer analytics that support data-driven decision-making.`
                    ],
        technologies: ["Laravel", "SQL", "Google Maps API", "Metabase", "JQuery"],
        current: true,
    },
    {
        period: "Feb 2024 - Jan 2025",
        role: "Software Engineer - Contractual",
        company: "Fast Distribution Corp.",
        description: [`Worked as a frontend developer, improving the website’s UI and adding Google Maps features to enhance usability. Built responsive components, collaborated with teams to integrate APIs, and helped improve performance and scalability.`],
        technologies: ["Bootstrap", "Google Maps API", "JQuery", "PHP", "Laravel"],
        current: false,
    },
    {
        period: "Sept 2023 - Jan 2024",
        role: "Web Developer Intern",
        company: "Fast Distribution Corp.",
        description: [`Improved the company website by building a modern, user-friendly interface. Gained experience in Business Intelligence by using Metabase for data visualization and basic analysis.`],
        technologies: ["Metabase", "HTML", "CSS", "JavaScript", "Bootstrap"],
        current: false,
    },
    {
        period: "May 2021",
        role: "Freelance Web Developer",
        company: "Freelance",
        description: [`Built and maintained websites using JavaScript, HTML, and Bootstrap. Worked directly with clients to plan and develop custom blogs and online stores using WordPress, focusing on usability and clean design.`],
        technologies: [ "Wordpress", "HTML", "CSS", "JavaScript"],
        current: false,
    },
];


export const technologies = [
    { id: 'html', iconName: 'HTML', link: '/images/techStacks/html.png' },
    { id: 'css', iconName: 'CSS', link: '/images/techStacks/css.png' },
    { id: 'js', iconName: 'JavaScript', link: '/images/techStacks/javascript.png' },
    { id: 'react', iconName: 'React', link: '/images/techStacks/reactjs.png' },
    { id: 'node', iconName: 'Node.js', link: '/images/techStacks/nodejs.png' },
    { id: 'laravel', iconName: 'Laravel', link: '/images/techStacks/laravel.png' },
    { id: 'bootstrap', iconName: 'Bootstrap', link: '/images/techStacks/bstrap.png' },
    { id: 'tailwind', iconName: 'Tailwind CSS', link: '/images/techStacks/tailwind.png' },
    { id: 'mongodb', iconName: 'MongoDB', link: '/images/techStacks/mongodb.png' },
    { id: 'mysql', iconName: 'MySQL', link: '/images/techStacks/mysql.png' },
    { id: 'Docker', iconName: 'Docker', link: '/images/techStacks/docker.png' },
    { id: 'github', iconName: 'GitHub', link: '/images/techStacks/git.png' },
    { id: 'figma', iconName: 'Figma', link: '/images/techStacks/figma.png' },
]

export const projects = [
    {
        title: "Talamban Health Connect",
        description: "A capstone project was created to replace the health center’s old pen-and-paper process in Cebu. The system includes a queue management feature and a secure, centralized database to store records of all registered patients.",
        tech: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
        github: "https://github.com/MarvinNavarro01/Deployment",
        demo: "",
        images: ["THC.jpg"],
        fullDescription: [
            'A capstone project was developed to replace the Talamban Health Center’s traditional pen-and-paper process in Cebu. The system was designed to support daily operations by organizing patient flow through a queue management feature, helping reduce long waiting times and improve overall service efficiency.',
            'The system also includes a secure, centralized database hosted in the cloud, where records of all registered patients are stored and managed. This allows health workers to easily access patient information anytime, as long as they are authorized and registered in the system. By digitizing patient records, the system minimizes errors, prevents data loss, and improves record accuracy.',
            'With faster access to information and a more organized workflow, health workers can focus more on patient care rather than manual paperwork.'
        ],
        techChallenges: [
            'The website needed to work properly on different screen sizes such as mobile phones, tablets, desktops, and even televisions. I carefully adjusted the layout, images, and text to make sure the design remains clean and easy to use on any device.',
            'Ensuring data privacy and security was critical because the system handles sensitive patient information. I implemented authentication, role-based access, and encryption for data in transit and at rest.',
            'Optimizing performance and responsiveness by lazy-loading React components, splitting code, and caching API responses to make the system fast for all users.',
            'Implementing complex user roles and permissions (doctor, nurse, admin, patient) so each user only sees and interacts with what they are authorized to.',
            'Designing intuitive UI/UX for complex workflows to reduce errors and make it easy for healthcare staff to navigate dashboards, forms, and alerts.',
            'Handling challenges with version control and collaborative coding in GitHub, which is essential when working in a team environment.'
        ],
        impact:[
            { value: '100%', title: 'Accessibility' }, 
            { value: '100%', title: 'Data Accuracy' },   
        ],
        duration: '5 Months (2023)',
        role: 'Project Manager / Developer',
        client: 'Brgy. Talamban Health Center',
        link:''
    },
    {
        title: "MyBuddy SFA",
        description: "Updated the company’s old Sales Force Automation system by building a new version with a modern and easy-to-use interface using the latest technologies. Added improved features to make the system easier to use and help users work more efficiently.",
        tech: ["JQuery", "Bootstrap", "Google Maps API", "PHP", "SQL"],
        github: "https://github.com/mard2001/SFA_MyBuddy",
        demo: "https://mybuddysfa.com/",
        images: ["myBuddy.jpg", "myBuddy2.jpg", "myBuddy3.jpg", "myBuddy4.jpg", "myBuddy5.jpg", "myBuddy6.jpg", "myBuddy7.jpg", "myBuddy8.jpg"],
        fullDescription: [
            'I led the revamp of the legacy Sales Force Automation (SFA) system, transforming it into Version 2 with a modernized UI/UX design and enhanced functionality. The upgraded platform introduced new features that help management efficiently track and monitor their salesmen’s daily activities. Used by different Nestlé distributors across the Philippines, the system enables real-time visibility of current and recent transactions for each salesman. It also allows users to generate detailed transaction reports in just a few clicks through automated processes, significantly improving operational efficiency and decision-making.',
        ],
        techChallenges: [
            'The website needed to work properly on different screen sizes such as mobile phones, tablets, desktops, and even televisions. I carefully adjusted the layout, images, and text to make sure the design remains clean and easy to use on any device.',
            'One of the challenges I encountered was working with the Google API and DataTables, which play a crucial role in the web app, especially since it was my first time using these libraries.',
            'Part of the challenge in revamping the system was getting familiar with the codebase left by the previous developer.',
            
        ],
        impact:[
            {value:'24/7',title:'Real-Time Visibility & Monitoring'},
            {value:'90%',title:'Reduction in Manual Report'},
            {value:'100%',title:'Record Keeping'},
            {value:'Improved',title:'UI/UX'},
        ],
        duration: '5 Months (2023)',
        role: 'Team Lead • Project Manager • Developer',
        client: 'Brgy. Talamban Health Center',
        link:'https://mybuddysfa.com/'
    },
    {
        title: "RAVAMate SFA",
        description: "A web-based sales force automation dashboard for back-office use that tracks nationwide daily sales and transaction volumes, generates reports, and displays real-time transaction locations using Google Maps with accurate latitude and longitude data.",
        tech: ["JQuery", "Bootstrap", "Google Maps API", "PHP", "SQL"],
        github: "https://github.com/mard2001/SFA_RAVAMate.git",
        demo: "https://ravamate.com/",
        images: ["RAVAMate.jpg", "RAVAMate2.jpg", "RAVAMate3.jpg", "RAVAMate4.jpg", "RAVAMate5.jpg", "RAVAMate6.jpg", "RAVAMate7.jpg", "RAVAMate8.jpg" ],
        fullDescription: [
            'A web-based Sales Force Automation (SFA) system deployed nationwide and used by all Monde Nissin distributors across the Philippines. The system is accompanied by a mobile SFA application used by all salesmen to create customer orders and record sales transactions in the field.',
            'The web-based platform serves as a centralized back-office dashboard used by management and office staff to monitor and manage sales activities. It tracks nationwide daily and monthly sales performance, generates detailed reports, and displays real-time transaction locations using Google Maps with accurate latitude and longitude data. This setup allows management to effectively monitor sales operations, evaluate performance, and make informed business decisions.'
        ],
        techChallenges: [
            'Handling different screen resolutions and aspect ratios. Some devices have very small screens, while others are very wide. I needed to carefully adjust font sizes, spacing, and image scaling so the website remains readable and balanced.',
            'I made the website dynamic even without using any framework by separating reusable parts like the header, footer, and navigation into single files and linking them to all pages. This way, whenever there are updates or changes, I only need to modify one file instead of editing every page individually.',
            'Since the project was built without a framework, I had to carefully structure the folders and files to make sure everything was readable and manageable. Debugging issues was also challenging, especially when tracking errors in JavaScript and PHP',
            'I made sure the website loads efficiently by optimizing images and minimizing unnecessary code to improve performance. This helped the website run smoothly even on slower internet connections.'
        ],
        impact:[
            {value:'25+',title:'Automated Reports'},
            {value:'Real Time',title:'Data Uploads'},
            {value:'95%',title:'Resource Optimization'},
            {value:'24/7',title:'Monitoring Coverage'},
        ],
        duration: '9 Months (2025 - 2026)',
        role: 'Web Developer',
        client: 'Monde Nissin Corp.',
        link:'https://ravamate.com/'
    },
    {
        title: "Project RoMM Business Analytics",
        description: "Using SQL to transform raw sales and sell-out data into meaningful business analytics for reporting and decision-making, with Metabase as the business intelligence tool to convert data into clear graphical visualizations that help audiences quickly understand insights.",
        tech: ["SQL", "SQL Server", "Metabase",],
        github: "",
        demo: "https://mncanalytics.dynns.com",
        images: ["MNCAnalytics.jpg", "MNCAnalytics2.jpg", "MNCAnalytics3.jpg", "MNCAnalytics4.jpg", "MNCAnalytics5.jpg"],
        fullDescription: [
            'This project was a special project requested by the Monde Nissin Commercial Department, with the goal of converting large volumes of unprocessed data into reliable analytical insights that could be used for future planning and strategic improvements.',
            'Using SQL, raw sales and sell-out data were cleaned, transformed, and structured into meaningful business analytics to support reporting and decision-making.',
            'The analytics focused on identifying sales trends, performance gaps, and opportunities across products, distributors, and time periods. These insights help the commercial team better understand market behavior, improve operational efficiency, and support data-driven decisions for product distribution and development. Metabase was used as the business intelligence tool to present the transformed data through clear dashboards and graphical visualizations, enabling management to quickly interpret results and communicate insights effectively across teams.'
        ],
        techChallenges: [
            'Certain raw data provided were inconsistent, limiting the system’s ability to process them correctly and causing null values or inaccurate results.',
            'Raw data needed to be mapped using the provided mapper data, but since the mapper data contained missing values, the mapping produced null results.',
            'Restructured the tables so that the source data for Metabase reports is already organized, reducing query execution time.',
            'Optimized stored procedures that run whenever new raw data is uploaded, ensuring the data is properly aligned with the mapper data.'
        ],
        impact:[
            {value:'100%',title:'Data Accuracy & Integrity'},
            {value:'< 60s',title:'Rendering Optimization'},
            {value:'20+',title:' Active Dashboards'},
        ],
        duration: '7 Months (2025 - 2026)',
        role: 'Project Manager • Analytics Engineer',
        client: 'Monde Sales Accountant Planners - Commercial Team',
        link:'https://mncanalytics.dynns.com'
    },
    {
        title: "SFAPlus SFA",
        description: "A web-based dashboard for back-office sales management that helps track daily sales and transaction with real-time locations on Google Maps with accurate latitude and longitude. Currently, the system is used by two distributors of CDO Foodsphere, and it is planned to be rolled out to all distributors across the Philippines.",
        tech: ["JQuery", "Bootstrap", "Google Maps API", "PHP", "SQL"],
        github: "https://github.com/mard2001/SFA_SFAPlus.git",
        demo: "https://cdo.sfa-plus.com/",
        images: ["CDO_SFAPlus6.jpg", "CDO_SFAPlus.jpg", "CDO_SFAPlus2.jpg", "CDO_SFAPlus3.jpg", "CDO_SFAPlus4.jpg", "CDO_SFAPlus5.jpg"],
        fullDescription: [
           'SFA Plus is a web-based Sales Force Automation system currently used by CDO Foodsphere distributors across the Philippines. It is paired with a mobile application used by sales representatives to record sales transactions and create customer orders directly from the field.',
            'The web platform acts as a centralized back-office dashboard for management and office staff, enabling them to monitor and manage nationwide sales activities. It tracks daily and monthly sales performance, generates detailed reports, and shows real-time transaction locations on Google Maps with precise latitude and longitude data. This setup allows management to oversee operations effectively, evaluate performance, and make timely, data-driven business decisions.'
        ],
        techChallenges: [
            'Handling different screen resolutions and aspect ratios. Some devices have very small screens, while others are very wide. I needed to carefully adjust font sizes, spacing, and image scaling so the website remains readable and balanced.',
            'I made the website dynamic even without using any framework by separating reusable parts like the header, footer, and navigation into single files and linking them to all pages. This way, whenever there are updates or changes, I only need to modify one file instead of editing every page individually.',
            'Since the project was built without a framework, I had to carefully structure the folders and files to make sure everything was readable and manageable. Debugging issues was also challenging, especially when tracking errors in JavaScript and PHP',
            'I made sure the website loads efficiently by optimizing images and minimizing unnecessary code to improve performance. This helped the website run smoothly even on slower internet connections.'
        ],
        impact:[
            {value:'25+',title:'Automated Reports'},
            {value:'Real Time',title:'Data Uploads'},
            {value:'95%',title:'Resource Optimization'},
            {value:'24/7',title:'Monitoring Coverage'},
        ],
        duration: '9 Months (2025 - 2026)',
        role: 'Web Developer',
        client: 'CDO Foodsphere',
        link:'https://cdo.sfa-plus.com/'
    },
    {
        title: "Web-Based ERP",
        description: "Initiated and developed the foundational architecture of a web-based ERP system, establishing core modules and system workflows.",
        tech: ["Laravel", "Bootstrap", "JQuery",],
        github: "https://github.com/mard2001/FASTWEB_ERP.git",
        demo: "",
        images: ["ERP5.jpg", "ERP1.jpg", "ERP2.jpg", "ERP3.jpg", "ERP4.jpg", "ERP6.jpg", "ERP7.jpg", "ERP7.jpg", "ERP8.jpg", "ERP9.jpg",],
        fullDescription: [
            "Together with a co-web developer, we started building a web-based Enterprise Resource Planning (ERP) system designed to manage and organize business operations in one platform. The system stores maintenance records, processes transactions from purchase orders to sales orders, and tracks the movement of stocks within the warehouse. It helps ensure that inventory is accurate, transactions are recorded properly, and daily operations run more smoothly and efficiently.",
            "This system will soon be further developed and integrated with the Sales Force Automation (SFA) platform. It will be offered to principals who do not have their own backend system for recording transactions. By connecting it to the SFA, they will be able to automatically capture sales data, monitor transactions in real time, and manage their records more efficiently in one centralized system."
        ],
        techChallenges: [
        ],
        impact:[
        ],
        duration: '9 Months (2025 - 2025)',
        role: 'Full Stack Web Developer',
        client: 'N/A',
        link:''
    },

]

export const testimonies = [
    // {
    //     name: "Jhunrey Lucero",
    //     relation: "Senior Software Eng. at FDC",
    //     content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    //     link: "",
    // },
    {
        name: "Kyle James Mantua",
        relation: "Digital Sales & Marketing · Pinnacle",
        content: "Marvin has consistently delivered all necessary components for our website. His exceptional responsiveness and communication skills are highly valued. I confidently recommend collaborating with his team for efficient and effective website development.",
        link: "",
    },
    {
        name: "Daven Reez Nemenzo",
        relation: "UI/UX Designer at FDC",
        content: "As a colleague, he is polite, approachable, and dependable. He is highly committed to his work and is even willing to sacrifice his personal time to complete his tasks ahead of schedule. As a UI/UX Designer, I am always amazed at how quickly he brings my designs to life. He collaborates closely with me to ensure we deliver the best possible output. He is also open to feedback and willing to listen to younger colleagues. Additionally, he is always eager to learn new things. Boss Marvs, as a friend, is someone you can truly rely on. He is like a big brother to me. He has taught me how to be wise and consistently encourages me to take risks if it helps me learn and grow. He constantly reminds me to know my worth and to value myself. Overall, Boss Marvs is one of the best colleagues I have ever had the privilege of working with.",
        link: "",
    },
    {
        name: "Roe Ann Kim Codoy",
        relation: "Capstone Project Co-Developer",
        content: "Working with Marvin during our capstone project made a huge difference in how our team functioned. He naturally stepped up as a leader, in a way that kept everyone grounded and focused. He was the one constantly checking progress, making sure we weren’t falling behind, and pushing us to actually deliver. When things got messy, he figured things out, found solutions, and kept the team moving forward. Marvin carries a strong sense of responsibility. If something needed to be done, he’d make sure it gets done, even if it meant doing extra work. He led by example, actively contributing to the work instead of just distributing it. That’s what made him the core strength of our team. More than skills, what stood out was his consistency and reliability. You could count on him. And in a big project like capstone, that’s everything. Any team he joins will definitely gain someone who leads with both competence and accountability.",
        link: "",
    },
    // {
    //     name: "Bryll Andales",
    //     relation: "Colleague from USC",
    //     content: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    //     link: "",
    // },
    {
        name: "Trisha Kate Lawas",
        relation: "Human Resource Manager",
        content: "He’s incredibly easy to work with, reliable, and someone you can fully trust. As a web developer, he delivers clean, high-quality work and always meets deadlines. His communication is clear, and he makes the entire process smooth and stress-free. I would gladly work with him again.",
        link: "",
    },

    
]

export const contactInfo = [
    { icon: mdiGithub, title: 'GitHub', link: 'https://github.com/mard2001'},
    { icon: mdiLinkedin, title: 'LinkedIn', link: 'https://www.linkedin.com/in/marvin-navarro-01'},
    { icon: mdiFacebook, title: 'Facebook', link: 'https://www.facebook.com/Marvin.Navarro.01/'},
]




