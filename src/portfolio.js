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
      skillName: "artificial intelligence",
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
      skillName: "data scientist",
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
      companylogo: require("./assets/images/bangkit2.jpg"),
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
          url: "https://github.com/BangkitCapstoneFIT"
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
      image: require("./assets/images/bp.png"),
      projectName: "BPPTIK Web",
      projectDesc: "Developed the BPPTIK Web for KOMINFO for the Junior Web Developer certification from LSP. It featured menus like Home, Vision and Mission, Structure, Scope, About, and more, with full CRUD functionalities, demonstrating my web development and data management skills.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/IrfanAliGit77/jwd-lsp.git"
        }
      ]
    },
    {
      image: require("./assets/images/stis.png"),
      projectName: "Stisla Mobile Apk",
      projectDesc: "Transformed Stisla from Laravel into a mobile app using Flutter and integrated it with APIs. It features login, registration, profile management, dashboard, and full CRUD functionalities. The project also incorporated various components, showcasing my mobile development and API integration skills.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/IrfanAliGit77/flutter-api-stisla-apk.git"
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
      image: require("./assets/images/repair2.jpg"),
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
      image: require("./assets/images/comp2.jpg"),
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
      image: require("./assets/images/ict2.jpg"),
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
    },
    {
      image: require("./assets/images/bo.png"),
      projectName: "MC at Bogie Fest PT INKA",
      projectDesc: "Served as MC at Bogifest PT INKA, ensuring a seamless event flow by introducing speakers and distinguished guests. Maintained audience engagement and enthusiasm, contributing to the event's success and positive atmosphere.",
      footerLink: [
        {
          name: "Visit Explanation",
          url: "https://www.linkedin.com/in/muh-irfan-ali77/overlay/experience/2238203923/multiple-media-viewer/?profileId=ACoAADgndQYBqU6oi00BNc6VNsSHSJyvS_mp2lw&treasuryMediaId=1737736267728"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Recognitions, Certifications, and Notable Achievements that demonstrate my expertise and commitment to excellence. ✨",

  achievementsCards: [
    {
      title: "MSIB INKA Certificate",
      date: "Des 2023 - Present",
      subtitle:
        "Completed the MSIB Program Cohort V as a Full Stack Developer Intern at PT INKA (Persero), contributing to system analysis, UI design, feature implementation, and User Acceptance Testing, strengthening my technical skills for real-world IT projects.",
      image: require("./assets/images/ink.png"),
      imageAlt: "ink Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1CavpzMJoejIdf5K_76Zdx7DGp_LZMOj3/view?usp=sharing"
        },
      ]
    },
    {
      title: "Junior Network Administrator",
      date: "Nov 2021 - Present",
      subtitle:
        "Earned the Network Administrator Certification from DTS Kominfo, mastering network design, configuration, security, and troubleshooting. This validates my expertise in maintaining efficient and secure network systems.",
      image: require("./assets/images/jna.png"),
      imageAlt: "jna Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1hKxpbiEF30AnqFzwD2zFqiWis-HkpvLR/view?usp=sharing"
        },
      ]
    },
    {
      title: "Expert Facilitator/Public Speaker",
      date: "Okt 2021 - Present",
      subtitle:
        "As an Expert Facilitator/Public Speaker for Kominfo's Digital Literacy Program, I delivered engaging sessions on digital skills, internet safety, and technology use. I simplified complex concepts, led interactive discussions, and empowered participants to navigate the digital world confidently, supporting national digital transformation.",
      image: require("./assets/images/lit.png"),
      imageAlt: "lit Logo",
      footerLink: [
        {
          name: "Verify Nov 2021",
          url: "https://drive.google.com/file/d/1JYTawRnkideFP6LZdPyXOcgClm2oMNQF/view?usp=sharing"
        },
        {
          name: "Verify Okt 2021",
          url: "https://drive.google.com/file/d/19fenLWzcXonGMDVp4zkI3mKPhK2-PtrU/view?usp=sharing"
        }
      ]
    },
    {
      title: "Teknisi Utama Jaringan Komputer",
      date: "Apr 2021 - Present",
      subtitle: "The TUJK certification from BPPTIK Kominfo covers computer network maintenance and management, including installation, troubleshooting, and optimizing network components. It equips participants with the technical skills needed for diverse network setups and technologies.",
      image: require("./assets/images/tujk.png"),
      imageAlt: "tujk Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1l1pEZBDFOihpj_ZOxL8B6rCZ51fSLknH/view?usp=sharing"
        }
      ]
    },
    {
      title: "Junior Web Developer - BNSP",
      date: "Aug 2021 - Aug 2025",
      subtitle: "Earned the Junior Web Developer Certification from BNSP, validating my skills in HTML, CSS, JavaScript, and basic back-end development. It showcases my ability to build responsive websites, implement interactive features, and manage web servers, demonstrating readiness for professional web development roles.",
      image: require("./assets/images/jwd.png"),
      imageAlt: "tujk Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1FgKjG-2WVqxVGVZzZC2sk_pczlpQ0MIO/view?usp=sharing"
        }
      ]
    },
    {
      title: "Basic Excel",
      date: "Sep 2023 - Present",
      subtitle: "Completed the Basic Excel course from Bisa AI Academy, gaining foundational skills in data entry, formatting, and basic formulas. I also learned essential functions for data analysis and creating charts for effective data visualization, enhancing my data management and analysis abilities.",
      image: require("./assets/images/basic.png"),
      imageAlt: "basic Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/19OpKlpU5olg1hrPi5ihXHueS9Qn9D12x/view?usp=sharing"
        }
      ]
    },
    {
      title: "Structuring Machine Learning Projects",
      date: "Jun 2023 - Present",
      subtitle: "The Structuring Machine Learning Projects certification from Coursera covers best practices for organizing ML projects, including problem scoping, workflow optimization, and ensuring reproducibility and scalability, enhancing efficiency in real-world applications.",
      image: require("./assets/images/st.png"),
      imageAlt: "st Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/QUPBUSCL8SSL"
        }
      ]
    },
    {
      title: "Device-based Models with TensorFlow Lite",
      date: "Jun 2023 - Present",
      subtitle: "The Device-based Models with TensorFlow Lite certification from Coursera validates my expertise in deploying ML models on mobile and embedded devices. It covers model optimization for resource-limited environments, ensuring efficient performance and on-device inference for mobile apps, IoT, and edge computing.",
      image: require("./assets/images/dev.png"),
      imageAlt: "dev Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/JFF5KLVSSY9G"
        }
      ]
    },
    {
      title: "Data Pipelines with TensorFlow Data Service",
      date: "Jun 2023 - Present",
      subtitle: "Data Pipelines with TensorFlow Data Services certification from Coursera covers building efficient data pipelines for machine learning, optimizing data flow, and enhancing model training and deployment performance.",
      image: require("./assets/images/d.png"),
      imageAlt: "d Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/69ZCASYV2ANX"
        }
      ]
    },
    {
      title: "Browser-based Models with TensorFlow.js",
      date: "Jun 2023 - Present",
      subtitle: "Browser-based Models with TensorFlow.js certification from Coursera covers developing and deploying machine learning models in web browsers using TensorFlow.js, enabling real-time client-side applications without server dependency.",
      image: require("./assets/images/b.png"),
      imageAlt: "b Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/FJ4Y9DC6UBZM"
        }
      ]
    },
    {
      title: "Advanced Deployment Scenarios with TensorFlow",
      date: "Jun 2023 - Present",
      subtitle: "Advanced Deployment Scenarios with TensorFlow certification from Coursera covers deploying machine learning models at scale, integrating them into production systems, and managing deployment pipelines for real-world solutions.",
      image: require("./assets/images/a.png"),
      imageAlt: "a Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/TFFLPQZK3J7Y"
        }
      ]
    },
    {
      title: "Sequences, Time Series and Prediction",
      date: "Jun 2023 - Present",
      subtitle: "Sequences, Time Series, and Prediction certification from Coursera demonstrates my ability to analyze sequential data and forecast time series using deep learning techniques, including RNNs and LSTM models, for accurate time-dependent predictions.",
      image: require("./assets/images/s.png"),
      imageAlt: "s Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/ZLHBFXBPMYBM"
        }
      ]
    },
    {
      title: "Natural Language Processing in TensorFlow",
      date: "Jun 2023 - Present",
      subtitle: "Natural Language Processing in TensorFlow certification from Coursera demonstrates my skills in text classification, sentiment analysis, and language generation using TensorFlow, enabling advanced NLP applications.",
      image: require("./assets/images/n.png"),
      imageAlt: "n Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/W3UWFU52D237"
        }
      ]
    },
    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      date: "Jun 2023 - Present",
      subtitle: "The Introduction to TensorFlow for AI, ML, and Deep Learning certification from Coursera demonstrates my foundational knowledge of TensorFlow, covering neural networks, model training, and machine learning algorithms, providing a strong base for advanced AI techniques.",
      image: require("./assets/images/i.png"),
      imageAlt: "i Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/55NLX86XNRWN"
        }
      ]
    },
    {
      title: "Convolutional Neural Networks in TensorFlow",
      date: "Jun 2023 - Present",
      subtitle: "The Convolutional Neural Networks in TensorFlow certification from Coursera validates my skills in building CNNs for image classification and computer vision tasks, covering feature extraction and model fine-tuning using TensorFlow.",
      image: require("./assets/images/conv.png"),
      imageAlt: "conv Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/B9N9GPYDVKZY"
        }
      ]
    },
    {
      title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
      date: "Jun 2023 - Present",
      subtitle: "The Unsupervised Learning, Recommenders, Reinforcement Learning certification from Coursera showcases my skills in clustering, dimensionality reduction, recommender systems, and reinforcement learning for decision-making in dynamic environments.",
      image: require("./assets/images/u.png"),
      imageAlt: "u Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/PKCUEVA9KU3H"
        }
      ]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      date: "Jun 2023 - Present",
      subtitle: "The Supervised Machine Learning: Regression and Classification certification from Coursera validates my skills in building regression and classification models using algorithms like linear and logistic regression to predict values and categorize data.",
      image: require("./assets/images/su.png"),
      imageAlt: "su Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/KQ5PM67LEXE5"
        }
      ]
    },
    {
      title: "Advanced Learning Algorithms",
      date: "Jun 2023 - Present",
      subtitle: "The Advanced Learning Algorithms certification from Coursera demonstrates my expertise in deep learning, reinforcement learning, and advanced machine learning techniques for solving complex problems.",
      image: require("./assets/images/ad.png"),
      imageAlt: "ad Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/END8STVLU2JH"
        }
      ]
    },
    {
      title: "Mathematics for Machine Learning: PCA",
      date: "Jun 2023 - Present",
      subtitle: "The Mathematics for Machine Learning: PCA certification from Coursera demonstrates my understanding of Principal Component Analysis for dimensionality reduction, enabling efficient data visualization and interpretation.",
      image: require("./assets/images/m.png"),
      imageAlt: "m Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/F22DH4LGJRNZ"
        }
      ]
    },
    {
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      date: "Jun 2023 - Present",
      subtitle: "The Mathematics for Machine Learning: Multivariate Calculus certification from Coursera demonstrates my understanding of multivariate calculus, including partial derivatives and gradients, essential for optimizing machine learning models.",
      image: require("./assets/images/ma.png"),
      imageAlt: "ma Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/WLJLRYBBPR5E"
        }
      ]
    },
    {
      title: "Mathematics for Machine Learning: Linear Algebra",
      date: "Jun 2023 - Present",
      subtitle: "The Mathematics for Machine Learning: Linear Algebra certification from Coursera demonstrates my understanding of vectors, matrices, and transformations, essential for data processing and model building in machine learning.",
      image: require("./assets/images/mat.png"),
      imageAlt: "mat Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/P9ULS843TL58"
        }
      ]
    },
    {
      title: "Share Data Through the Art of Visualization",
      date: "Jun 2023 - Present",
      subtitle: "The Share Data Through the Art of Visualization certification from Coursera demonstrates my ability to create effective data visualizations, helping communicate insights clearly and make complex information more accessible.",
      image: require("./assets/images/sh.png"),
      imageAlt: "sh Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/3DECJNNEM8DB"
        }
      ]
    },
    {
      title: "Process Data from Dirty to Clean",
      date: "Jun 2023 - Present",
      subtitle: "The Process Data from Dirty to Clean certification from Coursera showcases my ability to clean and structure messy data, resolving issues like duplicates and inconsistencies to prepare it for analysis.",
      image: require("./assets/images/p.png"),
      imageAlt: "p Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/PP6FSPDP4TDB"
        }
      ]
    },
    {
      title: "Prepare Data for Exploration",
      date: "Jun 2023 - Present",
      subtitle: "The Prepare Data for Exploration certification from Coursera demonstrates my ability to clean and organize raw data for analysis, ensuring accuracy and readiness for effective exploration and decision-making.",
      image: require("./assets/images/pa.png"),
      imageAlt: "pa Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/VWWQHEYA3VLP"
        }
      ]
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      date: "Jun 2023 - Present",
      subtitle: "The Foundations: Data, Data, Everywhere certification from Coursera showcases my understanding of fundamental data concepts, data analysis processes, and the role of data in decision-making, providing a strong foundation for data analytics.",
      image: require("./assets/images/pas.png"),
      imageAlt: "pas Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/H854F5BBT5DF"
        }
      ]
    },
    {
      title: "Ask Questions to Make Data-Driven Decisions",
      date: "Jun 2023 - Present",
      subtitle: "The Ask Questions to Make Data-Driven Decisions certification from Coursera demonstrates my ability to frame questions, interpret insights, and apply analytical thinking to support data-driven decision-making.",
      image: require("./assets/images/pasa.png"),
      imageAlt: "pasa Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/XM4E7DR3CKZW"
        }
      ]
    },
    {
      title: "Analyze Data to Answer Questions",
      date: "Jun 2023 - Present",
      subtitle: "The Analyze Data to Answer Questions certification from Coursera highlights my proficiency in using Python for data analysis, including cleaning, transforming, and exploring datasets to derive meaningful insights.",
      image: require("./assets/images/pasah.png"),
      imageAlt: "pasah Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/9F73Q5Y5USJJ"
        }
      ]
    },
    {
      title: "Troubleshooting and Debugging Techniques",
      date: "Jun 2023 - Present",
      subtitle: "The Troubleshooting and Debugging Techniques certification from Coursera demonstrates my ability to identify and resolve software issues using systematic debugging and optimization techniques.",
      image: require("./assets/images/q.png"),
      imageAlt: "q Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/XJG26AMZ4RJL"
        }
      ]
    },
    {
      title: "Introduction to Git and GitHub",
      date: "Jun 2023 - Present",
      subtitle: "The Introduction to Git and GitHub certification from Coursera demonstrates my proficiency in version control, branch management, and collaboration using GitHub, enhancing teamwork and project organization.",
      image: require("./assets/images/qw.png"),
      imageAlt: "qw Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/2GGELEG82P59"
        }
      ]
    },
    {
      title: "Using Python to Interact with the Operating System",
      date: "Mei 2023 - Present",
      subtitle: "The Using Python to Interact with the Operating System certification from Coursera demonstrates my expertise in automating tasks, managing files, and executing system commands using Python.",
      image: require("./assets/images/pasaha.png"),
      imageAlt: "pasaha Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/JE9HZRYCSZW4"
        }
      ]
    },
    {
      title: "Crash Course on Python",
      date: "Mar 2023 - Present",
      subtitle: "Crash Course on Python certification from Coursera demonstrates my foundational knowledge of Python, covering variables, loops, functions, and basic data structures. It equips me with essential problem-solving skills for further exploration in programming.",
      image: require("./assets/images/qwe.png"),
      imageAlt: "qwe Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://coursera.org/verify/YKZSXAWYKGC7"
        }
      ]
    },
    {
      title: "Belajar Analisis Data dengan Python",
      date: "Okt 2023 - Okt 2026",
      subtitle: "Through the Belajar Analisis Data dengan Python course on Dicoding, I gained skills in data manipulation, visualization, and analysis using Pandas, NumPy, Matplotlib, and Seaborn. This experience enhanced my ability to perform exploratory data analysis (EDA) and make data-driven decisions.",
      image: require("./assets/images/qwer.png"),
      imageAlt: "qwer Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://dicoding.com/certificates/81P2LGDNQZOY"
        }
      ]
    },
    {
      title: "Belajar Machine Learning untuk Pemula",
      date: "Okt 2023 - Okt 2026",
      subtitle: "Completed Dicoding's Belajar Machine Learning untuk Pemula course, gaining skills in data preprocessing, model building with Python and Scikit-learn, and techniques like regression, classification, and clustering, providing a solid base for further learning.",
      image: require("./assets/images/qwert.png"),
      imageAlt: "qwert Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://dicoding.com/certificates/0LZ0QMLWRZ65"
        }
      ]
    },
    {
      title: "Memulai Pemrograman dengan Python",
      date: "Okt 2023 - Okt 2026",
      subtitle: "Completed Dicoding's Memulai Pemrograman dengan Python course, mastering variables, data types, functions, and error handling. Strengthened programming foundation and enhanced problem-solving skills.",
      image: require("./assets/images/qwerty.png"),
      imageAlt: "qwerty Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://dicoding.com/certificates/KEXLLYW84XG2"
        }
      ]
    },
    {
      title: "Belajar Dasar Structured Query Language (SQL)",
      date: "Sep 2023 - Sep 2026",
      subtitle: "Completed Dicoding's Belajar Dasar Structured Query Language (SQL) course, mastering database creation, complex queries, and data management. This experience enhanced my understanding of relational databases and data integrity.",
      image: require("./assets/images/z.png"),
      imageAlt: "z Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://dicoding.com/certificates/6RPN4YKY9X2M"
        }
      ]
    },
    {
      title: "Belajar Dasar Data Science",
      date: "Sep 2023 - Sep 2026",
      subtitle: "Completed Dicoding's Belajar Dasar Data Science course, mastering data exploration, preprocessing, visualization, and basic machine learning. I gained proficiency in Python, NumPy, and Pandas for data analysis, building a strong foundation for advanced data science challenges.",
      image: require("./assets/images/zx.png"),
      imageAlt: "zx Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://dicoding.com/certificates/07Z68W342XQR"
        }
      ]
    },
    {
      title: "Staff Ahli Divisi Kesma Formadiksi",
      date: "Okt 2022 - Present",
      subtitle: "Resolved welfare issues for 500+ scholars with 90% success. Organized 10+ programs yearly, aiding 300+ participants and 100+ underprivileged individuals. Represented 500+ students in leadership meetings.",
      image: require("./assets/images/zxc.png"),
      imageAlt: "zxc Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/19c7sDdzK9yE_IDtognVNFbfxxBvSOQc5/view?usp=sharing"
        }
      ]
    },
    {
      title: "Soft Skills Training Interpersonal Skills and English Skills",
      date: "Sep 2021 - Present",
      subtitle: "Completed Soft Skills Training on Interpersonal Skills and English Skills from the Digital Talent Scholarship by the Ministry of Communication and Information Technology in 2021, enhancing communication, teamwork, and English proficiency.",
      image: require("./assets/images/as.png"),
      imageAlt: "as Logo",
      footerLink: [
        {
          name: "Verify Certif English",
          url: "https://drive.google.com/file/d/13LOgiI6dmB9QZqLDDPQAsSxo6V6KGmEJ/view?usp=sharing"
        },
        {
          name: "Verify Certif Interpersonal",
          url: "https://drive.google.com/file/d/1Ft0HbeBIKeeQDnUO0I2N0DhbvuurCSzX/view?usp=sharing"
        }
      ]
    },
    {
      title: "Pestadiksi Committee",
      date: "Nov 2021 - Present",
      subtitle: "Served as Moderator for Pekan Prestasi Mahasiswa Bidikmisi/KIP Kuliah dan Afirmasi Pendidikan at Politeknik Negeri Malang in 2021, facilitating discussions and ensuring effective communication among participants.",
      image: require("./assets/images/asd.png"),
      imageAlt: "asd Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1IfNEmjwr_aSldJ0Hn1gNbCBr0-YFTsme/view?usp=sharing"
        }
      ]
    },
    {
      title: "Junior Web Developer - BPPTIK",
      date: "Jul 2021 - Present",
      subtitle: "Earned the Junior Web Developer certification from BPPTIK, mastering UI implementation, structured programming, and best coding practices. I also learned to use libraries, understand ICT strategies, and develop effective communication and work ethics.",
      image: require("./assets/images/ds.png"),
      imageAlt: "ds Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1wmZEsK32eDSIpMbeR_ER5MrpL0YnrlU1/view?usp=sharing"
        }
      ]
    },
    {
      title: "National Seminar Committee 2021",
      date: "Jul 2021 - Present",
      subtitle: "Received a certificate as a moderator for the National Seminar on Cyber Security Strategy and Ethical Hacking to Ensure the Security of Information Systems at Politeknik Negeri Malang in 2021, facilitating insightful discussions on cybersecurity trends and best practices.",
      image: require("./assets/images/dsd.png"),
      imageAlt: "dsd Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1v9rK3L2DLqTTN4JZ2gi247YgR2M4u4Gq/view?usp=sharing"
        }
      ]
    },
    {
      title: "ICT Training",
      date: "Okt 2020 - Present",
      subtitle: "Completed the ICT Training on IT Business Challenges in the 4.0 Era by Diskominfotik Kota Blitar, gaining insights into digital transformation, emerging technologies, and strategies to navigate competitive IT landscapes effectively.",
      image: require("./assets/images/dsa.png"),
      imageAlt: "dsa Logo",
      footerLink: [
        {
          name: "Verify Certification",
          url: "https://drive.google.com/file/d/1qKIjzT6mzFP-qoX_f-Mf4flHfKzsH1ZR/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Articles 📃",
  subtitle:
    "Passionate about creating innovative solutions, I enjoy sharing knowledge and insights gained from my development journey.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/pulse/adaptability-resilience-5-ways-muh-irfan-ali/?trackingId=YDQCPNDVl6B41Y0pQsh98w%3D%3D",
      title: "Adaptability & Resilience : The 5 Ways of Adaptability !",
      description:
        "Here are 5 Ways of Adaptation that I have experienced and continue to develop ==> "
    },
    {
      url: "https://www.rtikblitar.or.id/2023/10/suasana-festival-tik-2023-di-semarang.html",
      title: "Suasana Festival TIK 2023 di Semarang: Manunggaling Kawula Digital",
      description:
        "Tidak ada kata terlambat untuk merayakan teknologi, inovasi, dan semangat kolaborasi. Semarang, kota yang terletak di jantung Pulau Jawa, menjadi saksi bagi Festival TIK 2023 yang mengusung semangat Manunggaling Kawula Digital. Acara ini menjadi panggung bagi ratusan relawan teknologi, dan penggiat IT untuk berkumpul, berbagi ide, dan merayakan kemajuan teknologi informasi dan komunikasi."
    },
    {
      url: "https://www.rtikblitar.or.id/2023/10/menggali-ilmu-dan-pengalaman-di-festik.html",
      title: "Menggali Ilmu dan Pengalaman di FesTIK Universitas PGRI Semarang",
      description:
        "Semarang - Festival Teknologi dan Informasi Komunikasi (FesTIK) di Universitas PGRI Semarang telah sukses digelar pada Jumat dan Sabtu, 27-28 Oktober 2023. Acara ini menjadi panggung bagi berbagai workshop yang sangat informatif dan bermanfaat bagi para peserta. Salah satu workshop yang menonjol adalah yang diselenggarakan oleh PANDI dan Qwords.com, yang memberikan wawasan penting tentang branding diri dan aspek teknis dalam dunia internet."
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false// Set false to hide this section, defaults to true
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
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
