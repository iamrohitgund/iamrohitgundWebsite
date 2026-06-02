import {
  Award,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Laptop,
  Network,
  Wrench,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/social-media", label: "Social Media" },
  { href: "/contact", label: "Contact" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iamrohitgund/",
  },
  {
    label: "GitHub",
    href: "https://github.com/iamrohitgund",
  },
];

export const skills = [
  {
    label: "Languages",
    value: "Python, Java, JavaScript",
    icon: Code2,
  },
  {
    label: "Frameworks",
    value: "Spring, Django, Flask",
    icon: Laptop,
  },
  {
    label: "Databases",
    value: "SQL, MongoDB",
    icon: Database,
  },
  {
    label: "Tools",
    value: "Git, AWS, APIs",
    icon: Wrench,
  },
];

export const timeline = [
  {
    date: "August 2021 - Present",
    title: "Software Engineer",
    organization: "Amazon Web Services",
    description: "Building software as an SDE at Amazon Web Services.",
    icon: BriefcaseBusiness,
  },
  {
    date: "August 2019 - May 2021",
    title: "Master of Science in Computer Science",
    organization: "California State University, Fullerton",
    description:
      "Refined strengths across artificial intelligence, algorithms, databases, software design, architecture, standards, requirements, and modern software management.",
    icon: GraduationCap,
  },
  {
    date: "July 2018 - July 2019",
    title: "Full Stack Developer",
    organization: "infobird.in",
    description: "Developed full-stack software solutions from scratch.",
    icon: Network,
  },
  {
    date: "August 2014 - June 2018",
    title: "Bachelor of Engineering in Computer Engineering",
    organization: "MIT, Pune",
    description:
      "Completed BE in Computer Engineering and launched a student-focused website for academic material and code snippets.",
    icon: Award,
  },
  {
    date: "July 2014",
    title: "Completed HSC",
    organization: "Early web projects",
    description: "Designed and created websites using HTML and CSS.",
    icon: Code2,
  },
];

export const projects = [
  {
    title: "eCommerce Website",
    technology: "Django, React",
    description:
      "Designed and developed a full-stack eCommerce application with product search, user sign-up, checkout, PayPal integration, and an admin control panel for products, order processing, fulfillment, and refunds.",
    link: null,
  },
  {
    title: "Recommendation System using Probabilistic Matrix Factorization",
    technology: "Python, Data Science, Machine Learning",
    description:
      "Built a recommendation system for music and movies using Constrained Kernelized Probabilistic Matrix Factorization to support new users and users with limited account history.",
    link: "https://github.com/iamrohitgund/Recommendation-System-using-PMF",
  },
  {
    title: "CoronaVirus Live Data Scraper",
    technology: "Python, Beautiful Soup",
    description:
      "Scraped live data from Worldometer, performed analysis with Python and Seaborn, and generated user-friendly reports and analytics.",
    link: "https://github.com/iamrohitgund/covid19",
  },
  {
    title: "Private Cloud Platform for Forensic Analysis",
    technology: "OpenNebula, Python, Java, MongoDB, SQL, HTML, CSS, Bootstrap, PHP",
    description:
      "Led a team of three building a cloud platform for monitoring VMs, collecting potential evidence, storing it securely, and supporting cyber forensic workflows with chain-of-custody records.",
    link: "https://github.com/iamrohitgund/Private-Cloud-Platform-for-Forensic-Analysis",
  },
  {
    title: "Chat Application",
    technology: "Python, Flask, SQLAlchemy, Pusher",
    description:
      "Implemented a chat application with Flask, SQLAlchemy-backed persistence, and Pusher for real-time message delivery.",
    link: null,
  },
  {
    title: "Weather GUI Application",
    technology: "Tkinter",
    description: "Built a desktop weather application using the OpenWeatherMap API.",
    link: "https://github.com/iamrohitgund/python/tree/master/TKinter",
  },
  {
    title: "Car Monitoring System using IBM Bluemix",
    technology: "IoT concept, OBD-II, Bluetooth, IBM Bluemix",
    description:
      "Presented an IoT system concept for collecting vehicle telemetry through OBD-II, sending it to a smartphone over Bluetooth, and uploading it to IBM Bluemix for analysis.",
    link: null,
  },
];
