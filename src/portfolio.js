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
  whatsapp: "https://wa.me/+6281555923886",
  telegram: "https://t.me/gentanali",
  instagram: "https://www.instagram.com/gentans_77/",
  discord: "https://discordapp.com/users/709762878038736998",
  microsite: "https://s.id/muhirfanali77",
  //facebook: "https://www.facebook.com/profile.php?id=100006934518579",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do❓",
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
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning Developer",
      progressPercentage: "96%"
    },
    {
      Stack: "Data Scientist/Data Analyst",
      progressPercentage: "96%"
    },
    {
      Stack: "Network Administrator/IT Staff",
      progressPercentage: "95%"
    },
    {
      Stack: "Public Speaker/Expert Facilitator",
      progressPercentage: "94%"
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
      desc: "Achievements at Diskominfotik Kota Blitar :",
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
      desc: "Achievements at PT INKA (Persero) – Madiun :",
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
      desc: "Achievements at Bangkit Academy (Cohort IV) - Jakarta",
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
      desc: "Achievements at DBN Company - Blitar :",
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
  title: "My Projects 💻",
  subtitle: "I HAVE CONTRIBUTED TO THE SUCCESS OF SEVERAL STARTUPS AND MAJOR COMPANIES BY BUILDING IMPACTFUL TECH SOLUTIONS. ✅ I AM EXCITED TO BRING MY SKILLS AND EXPERIENCE TO NEW CHALLENGES, AND I LOOK FORWARD TO THE OPPORTUNITY TO GROW WITH YOUR TEAM. 🚁",
  projects: [
    {
      image: require("./assets/images/iknows.png"),
      projectName: "I-KNOWS PT INKA",
      projectDesc: "I-KNOWS is a Laravel-based web app for PT INKA's employee performance assessment. It provides role-specific interfaces for reporting and evaluation. Monthly performance reviews impact promotions and salary increases.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://gitlab.com/IrfanAliGit77/ta-inka-lms.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/lms.png"),
      projectName: "INKA-LMS PT INKA",
      projectDesc: "INKA-LMS is a web-based system designed to enhance human resources at PT INKA across all employee levels. It streamlines learning delivery, skill assessment, and development of both hard and soft skills, including material distribution and final evaluations.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://gitlab.com/agriirga/inka-lms.git"
        }
      ]
    },
    {
      image: require("./assets/images/fit.png"),
      projectName: "FIT (Find Indonesia Tourism)",
      projectDesc: "FIT is a mobile app that recommends tourist spots in Indonesia using mobile development, machine learning, and cloud computing. It helps tourists find nearby attractions with user ratings and reviews, and suggests the best routes to their destinations.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/nafiulirsad/findindonesiatourism.git"
        }
      ]
    },
    {
      image: require("./assets/images/sitahir.png"),
      projectName: "SITAHIR (Sistem Informasi Tagihan Air)",
      projectDesc: "SITAHIR is an information system for water billing in Sumberarum, Wates, Blitar. It streamlines billing processes, offers online payment options, and provides relevant information. Users can also report issues, ensuring quick response and repairs.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/IrfanAliGit77/sitahir.git"
        }
      ]
    },
    {
      image: require("./assets/images/pos.png"),
      projectName: "Point of Sales Toserba",
      projectDesc: "POS Toserba is an application designed to simplify cashier transactions in minimarkets. It manages products, sales, stock purchases, and supplier data. It supports barcode scanning and can print customer receipts, ensuring fast and efficient transactions.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/IrfanAliGit77/toserba.git"
        }
      ]
    },
    {
      image: require("./assets/images/talk.png"),
      projectName: "Talk Programmer",
      projectDesc: "Talk Programmer is an information system that connects programmers worldwide to share knowledge, collaborate, and explore business ideas like make projects together. Similar to LinkedIn, it also facilitates job searches for programmers and recruitment for companies.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://www.figma.com/design/isMy6ywRhdyKriUEBJO08t/Untitled?node-id=10-83&t=bHEARQ80D6LGN5mn-1"
        }
      ]
    },
    {
      image: require("./assets/images/pyt.png"),
      projectName: "NLP + CNN - Machine Learning",
      projectDesc: "This Machine Learning project powers a tourism search engine using NLP, sentiment analysis, and CNN. It filters results by category, location, ratings, and user reviews, with personalized recommendations and a ranking algorithm for relevance.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://colab.research.google.com/drive/1ZWYDFsc5vC6zm08HCpvbF4F95newoBJK?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/pyth.png"),
      projectName: "Publication of Scientific Papers - ML",
      projectDesc: "This project analyzes a humanitarian organization's dataset using classification and regression models to predict team outcomes and volunteer impact. It includes data visualization, model evaluation with Confusion Matrix and ROC, and hyperparameter tuning for optimization.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://colab.research.google.com/drive/17p11aEjvaztCE9ZxVmIZmjRkE5-idVG7?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/vidio.png"),
      projectName: "Management Dataset for Vidio.com",
      projectDesc: "I conducted exploratory data analysis using Google Colab for its cloud-based Jupyter environment with pre-installed data science libraries. The analysis revealed that 58% of users prefer the web-mobile platform for watching Vidio.com. This insight was visualized using a pie chart created with Pandas and Matplotlib in Colab.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://colab.research.google.com/drive/17XS4yy4sz3YLYQky6xTDzSyjCv-0C8xq?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/bawang.png"),
      projectName: "Prediction for Shallot Prices in Nganjuk",
      projectDesc: "Predicted the selling price of shallots in Nganjuk using Linear Regression and classified price conditions using Decision Tree and SVM. Achieved R² of 0.846 (training) and 0.930 (testing), indicating model stability. Both classifiers reached perfect accuracy (1.0), proving high suitability for the dataset.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://colab.research.google.com/drive/1VnmNxS8DkwaAyCNWMoBVh7Vt--gjScW8?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/sby.png"),
      projectName: "Surabaya Stunting Cases",
      projectDesc: "I collaborated with Diskominfotik Kota Surabaya to analyze and visualize stunting cases across Surabaya. Using comprehensive datasets, I conducted data cleaning, analysis, and visualization with Tableau. The insights identified high-risk areas, supporting strategic public health interventions and policy planning.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://docs.google.com/spreadsheets/d/1akkvYkmduKBt9HD9-Zeb043zhhh-Fk_1/edit?usp=sharing&ouid=118328961484458204393&rtpof=true&sd=true"
        }
      ]
    },
    {
      image: require("./assets/images/bike.png"),
      projectName: "Bike Stores - Power BI",
      projectDesc: "I conducted end-to-end data analysis on bike store sales, from data cleaning to visualization using Power BI. Comprehensive insights were derived on sales trends, customer demographics, and product performance, aiding strategic business decisions and growth planning.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://drive.google.com/file/d/1bF28RjuZI0Rbsx_MmFqrxQVjTAsaPVDt/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/sko.png"),
      projectName: "Data Management BOS - DBMS",
      projectDesc: "Managed BOS fund distribution and utilization using DBMS. Developed procedures for posting plans, transfer receipts, acceptance confirmations, and verification by school committees and the public. Integrated data from schools, banks, BOS components, and fund receipts, ensuring transparency and accountability in educational fund distribution.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://drive.google.com/file/d/1LkTamOtgStaua4_1NJkccrhivXKSaa4L/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/mikro.png"),
      projectName: "Setting Mikrotik",
      projectDesc: "Configured and integrated MikroTik infrastructure to establish an interconnected network with internet access. Managed comprehensive setup, including basic configurations, hotspot creation, loop prevention, queue management, and more, ensuring seamless connectivity and efficient network performance.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192627136/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1739468903602"
        }
      ]
    },
    {
      image: require("./assets/images/ap.png"),
      projectName: "Setting Access Point",
      projectDesc: "Configured and deployed access points to optimize wireless network coverage and connectivity. Managed end-to-end setup, including SSID configuration, security settings, channel optimization, and seamless integration with existing network infrastructure, ensuring reliable and high-performance Wi-Fi access.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192627136/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1739469096627"
        }
      ]
    },
    {
      image: require("./assets/images/repair.jpg"),
      projectName: "Troubleshooting Network",
      projectDesc: "Diagnosed and resolved network issues to ensure optimal performance and minimal downtime. Utilized advanced troubleshooting techniques to identify connectivity problems, latency, and hardware failures. Implemented effective solutions, including reconfiguring network devices, updating firmware, and optimizing routing protocols.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192627136/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1738763099383"
        }
      ]
    },
    {
      image: require("./assets/images/comp.jpg"),
      projectName: "Troubleshooting Hardware Software",
      projectDesc: "Diagnosed and resolved hardware and software issues for networks, computers, and electronic devices, including printers and speakers. Ensured optimal performance through effective troubleshooting and configuration adjustments.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192627136/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1739469322945"
        }
      ]
    },
    {
      image: require("./assets/images/ict.jpg"),
      projectName: "ICT Training",
      projectDesc: "Delivered ICT training in 3 sub-districts of Blitar City, empowering UMKM with social media marketing and photo/video editing skills. Enhanced digital literacy to help entrepreneurs attract customers and grow their businesses.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192623800/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1738762086095"
        }
      ]
    },
    {
      image: require("./assets/images/litdig.png"),
      projectName: "National Digital Literacy",
      projectDesc: "Spoke at Kominfo's National Digital Literacy event to over 300 online participants, focusing on shifting from consumerism to productivity. Shared strategies for leveraging social media and e-commerce for digital marketing, online sales, and affiliate marketing, empowering effective technology use.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2192623800/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1738018391855"
        }
      ]
    },
    {
      image: require("./assets/images/blt.jpg"),
      projectName: "RTIK Blitar Talk",
      projectDesc: "Spoke at RTIK Blitar Talk in the Blitar Makin Cakap Digital webinar series, sharing tips for productivity in the digital era. Covered digital tools, time management, and leveraging technology for growth, empowering participants to enhance their digital literacy and productivity.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2563566810/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1738762417593"
        }
      ]
    },
    {
      image: require("./assets/images/RTIK.jpg"),
      projectName: "RTIK Nasional Meeting",
      projectDesc: "Joined the RTIK Nasional development forum at Hotel Aston Sidoarjo, collaborating with representatives nationwide to address regional challenges. Focused on enhancing tech literacy, improving human resources, and sharing initiatives to foster digital awareness and community empowerment.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2563566810/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1738016937087"
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
    "I am eager to contribute my skills to your team and grow professionally. Feel free to reach out 👋 \n I look forward to the opportunity of joining your company. 🏢",
    // (
    //   <>
    //     I am eager to contribute my skills to your team and grow professionally. Feel free to reach out 👋
    //     <br />
    //     I look forward to the opportunity of joining your company. 🏢
    //   </>
    // ),
  number: " 📞 +62 81555923886",
  email_address: "📩 muhirfanali77@gmail.com"
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
