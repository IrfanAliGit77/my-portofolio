/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Irfan's Portfolio",
  title: "Hi, I'm Muh. Irfan Ali",
  subTitle: emoji(
    "A graduate of Informatics Engineering from Politeknik Negeri Malang with expertise in Machine Learning Developer, Data Scientist, Fullstack Web Developer, and Network Administrator 🚀 Proficient in Python, SQL, and Git, with experience in ML modeling, data analysis, database management, and cloud computing. Skilled in building scalable web applications using Laravel and JavaScript, as well as network configuration and security. Adaptable, analytical, and problem-solving oriented, with strong collaboration and communication skills. Earned a 3.79 GPA with Cum Laude honors, gaining hands-on experience through full-time roles and internships."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NffUYAAeOC5Vp0jA9GE2r0HK-4kxrBKU/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/IrfanAliGit77",
  linkedin: "https://www.linkedin.com/in/muh-irfan-ali77/",
  gmail: "muhirfanali77@gmail.com",
  gitlab: "https://gitlab.com/IrfanAliGit77",
  telegram: "https://t.me/gentanali",
  discord: "https://discordapp.com/users/709762878038736998",
  //facebook: "https://www.facebook.com/profile.php?id=100006934518579",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do ?",
  subTitle: "MULTIFACETED DEVELOPER WITH EXPERTISE IN MACHINE LEARNING DEV, DATA SCIENTISTS/DATA ANALYTICS, FULL STACK WEB DEV, AND NETWORK ADMINISTRATION.",
  skills: [
    emoji(
      "⚡ Build scalable Fullstack Web Applications using Laravel and React, including database architecture, RESTful API development, and CI/CD deployment with Docker and Firebase."
    ),
    emoji(
      "⚡ Manage Big Data workflows from Data Collection and Cleaning to Data Visualization and Reporting, ensuring insightful decision-making."
    ),
    emoji(
      "⚡ Develop and deploy Machine Learning models using TensorFlow and Scikit-Learn, covering Data Preprocessing, Model Training, and API/Cloud Integration."
    ),
    emoji(
      "⚡ Perform Data Analysis and Business Intelligence using Python (Pandas, NumPy) and Power BI/Tableau, delivering actionable insights through statistical modeling and visualization."
    ),
    emoji(
      "⚡ Handle Database Management with SQL (MySQL, PostgreSQL) and NoSQL (MongoDB), optimizing performance and ensuring data consistency."
    ),
    emoji(
      "⚡ Implement Cloud Computing solutions with Google Cloud, Firebase, and Docker, ensuring scalability and efficiency."
    ),
    emoji(
      "⚡ Configure and secure network infrastructure using Router, Switch, Mikrotik, and Network Security protocols, including VPN setup and firewall management."
    ),
    emoji(
      "⚡ Utilize Agile Methodologies (Scrum, Kanban) to ensure efficient project development and team collaboration."
    ),
    emoji(
      "⚡ Maintain version control and collaborative development using Git, GitHub, and GitLab."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ML dev",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "AI",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "power BI/tableau",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "network",
      fontAwesomeClassname: "fas fa-rss"
    },
    {
      skillName: "data scientist/analyst",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "mikrotik",
      fontAwesomeClassname: "fas fa-satellite-dish"
    },
    {
      skillName: "cloud computing",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "github/gitlab",
      fontAwesomeClassname: "fab fa-github-alt"
    },
    {
      skillName: "net security",
      fontAwesomeClassname: "fas fa-user-shield"
    },
    {
      skillName: "agile method",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Politeknik Negeri Malang",
      logo: require("./assets/images/polinema.png"),
      subHeader: "Bachelor of Applied Science in Informatics Engineering",
      duration: "Sep 2020 - Feb 2025",
      desc: "Achievements :",
      descBullets: [
        "Developed Employee Performance Assessment System for PT INKA Madiun as my thesis (2025).",
        "Built an LMS for standardized employee training and compliance across the PT INKA Madiun (2023)",
        "Developed FIT (Find Indonesia Tourism), a tourism recommendation app (ML DEV) at Bangkit Academy (2023).",
        "Public Speaker/Expert Facilitator for ICT Training in 3 sub-districts of Blitar City with Diskominfotik Blitar (2023).",
        "Built a shallot price prediction model for Nganjuk (2023).",
        "Expert Facilitator for RTIK Blitar Talk on Digital Literacy (2023).",
        "Collaborated with Diskominfotik Surabaya for stunting data collection and visualization (2023).",
        "Developed SITAHIR (Sistem Informasi Tagihan Air) for Sumberarum, Kec. Wates, Kabupaten Blitar (2022).",
        "Created a Point of Sales (POS) system for Toserba, web-based with Laravel (2022).",
        "Certified Teknisi Utama Jaringan Komputer, Junior Web Developer, and Network Administrator (BNSP, 2021).",
        "National Seminar Committee on Cyber Security Strategy, Politeknik Negeri Malang (2021).",
        "Expert Facilitator for National Digital Literacy, Kominfo RI (34 provinces, 514 districts, Oct-Nov 2021).",
        "Moderator at Pekan Prestasi Mahasiswa Bidikmisi/KIP Kuliah of Politeknik Negeri Malang (2021).",
        "Soft Skills Training in Interpersonal & English, Digital Talent Scholarship, Kominfo (2021).",
        "Speaker/Tutor for IT Training at Diskominfotik Blitar (2020).",
        "Moderator for Webinar on Computational Thinking at Politeknik Negeri Malang (2020)."
      ]
    },
    {
      schoolName: "SMKN 1 Udanawu",
      logo: require("./assets/images/smk.png"),
      subHeader: "Computer Engineering and Networking",
      duration: "Sep 2017 - Aug 2020",
      desc: "Achievements :",
      descBullets: [
        "Consistently ranked 1st in class during grades 10, 11, and 12, and achieved 1st parallel ranking school-wide during USBN.",
        "Excelled in debate competitions, winning at both regional and provincial levels.",
        "Earned a Mikrotik certification through a county-wide program for vocational schools in Blitar.",
        "Gained in-depth knowledge of network operations, including configuring and troubleshooting devices such as routers, hubs/switches, and repeaters.",
        "Acquired comprehensive skills in computer hardware and software, enabling effective troubleshooting and repair of computers and laptops.",
        "Demonstrated technical proficiency in understanding and maintaining IT infrastructure, contributing to practical and theoretical expertise in networking and computer systems."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Full Stack Developer", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning Developer",
      progressPercentage: "86%"
    },
    {
      Stack: "Data Scientist/Data Analyst",
      progressPercentage: "96%"
    },
    {
      Stack: "Network Administrator/IT Staff",
      progressPercentage: "98%"
    },
    {
      Stack: "Public Speaker/Expert Facilitator",
      progressPercentage: "91%"
    }
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
  display: true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Staff RTIK Kota Blitar",
      company: "Diskominfotik Kota Blitar",
      companylogo: require("./assets/images/dinas.png"),
      date: "Mar 2019 - Present",
      desc: "Achievements on Diskominfotik Kota Blitar :",
      descBullets: [
        "Represented RTIK Kota Blitar and Diskominfotik Kota Blitar at national events in Bali (2020), Sidoarjo (2021), Surabaya (2022), and Semarang (2023), which included strategic meetings for representatives from RTIK and Diskominfotik across Indonesia.",
        "Led digital literacy workshops in Blitar, training UMKM on digital marketing, e-commerce, and cybersecurity.",
        "Progressed from support roles to leadership, driving impactful programs and strengthening community partnerships."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "PT Industri Kereta Api",
      companylogo: require("./assets/images/inka.png"),
      date: "Aug 2023 – Jan 2024",
      desc: "Achievements on PT INKA (Persero) – Madiun :",
      descBullets: [
        "Developed an Employee Performance Assessment System, reducing evaluation time by 90% and enabling data-driven salary adjustments.",
        "Built an LMS for standardized employee training and compliance across the organization. I also designed the BOD BOC INKA Group System interface, enhancing executives' access to data.",
        "Utilized PHP, Laravel, and JavaScript to create scalable, efficient web applications following Agile practices."
      ]
    },
    {
      role: "Machine Learning Developer/Data Scientist Intern",
      company: "Bangkit Academy",
      companylogo: require("./assets/images/bangkit.jpg"),
      date: "Feb 2023 – Jul 2023",
      desc: "Achievements on Bangkit Academy (Cohort IV) - Jakarta",
      descBullets: [
        "Gained hands-on experience in data extraction, preprocessing, visualization, and clustering for machine learning workflows.",
        "Developed a rating system (0-5 stars) and personalized tourism recommendations by processing thousands of data points across Indonesia.",
        "Collaborated with a multidisciplinary team to integrate ML models as backend services for mobile and cloud applications."
      ]
    },
    {
      role: "Network Administrator",
      company: "PT Data Buana Nusantara",
      companylogo: require("./assets/images/dbn.png"),
      date: "Feb 2019 – Jul 2019",
      desc: "Achievements on DBN Company - Blitar :",
      descBullets: [
        "Managed network installations and infrastructure across Tulungagung, Kediri, Blitar, and Jombang, ensuring seamless connectivity for homes, offices, and schools.",
        "Designed and implemented network architectures, including routers, switches, and LAN setups, while providing technical support and troubleshooting for clients.",
        "Oversaw transmitter tower installations, boosting connectivity in underserved areas and contributing to a 5–10% monthly revenue increase with hundreds of Wi-Fi setups."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
