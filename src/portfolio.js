/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 3000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: (
    <>
      <span className="bold-text">OspreyAI: </span><span className="bold-text">O</span>mic & <span className="bold-text">S</span>patial <span className="bold-text">P</span>athology <span className="bold-text">R</span>esearch <span className="bold-text">E</span>mpowered b<span className="bold-text">y AI</span>
    </>
  ),
  subTitle: (
    <>
    <span className="bold-text">Welcome to OspreyAI </span>— a portfolio and innovation hub that highlights my journey and expertise in the fields of spatial omics and computational biology. With a strong foundation in clinical pathology and a deep passion for advancing the intersection of artificial intelligence and spatial technologies, OspreyAI reflects my dedication to transforming how we understand and treat diseases. From decoding intricate tissue architecture to developing integrative models that merge spatial, molecular and histological imaging data, my goal is to push the frontiers of precision medicine and contribute to a future where diagnostic and therapeutic strategies are increasingly precise, data-driven, and tailored to individual patient needs. A key aspect of my journey is my passion for knowledge-sharing, teaching, and learning from others who are equally enthusiastic about this rapidly evolving field. I encourage you to reach out and share your insights — <span className="bold-text"> together, we can drive the future of healthcare innovation.</span>
    </>
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/agc888",
  linkedin: "https://www.linkedin.com/in/andrewgcauser/",
  gmail: "causer.ag@gmail.com",
  orcid: "https://orcid.org/0009-0001-7341-8366",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const partnersSection = {
  display: true, // Set to true to display this section
  title: "Trusted By",
  subtitle: "Organizations I've worked for and collaborated with",
  partners: [
    {
      name: "Sullivan Nicolaides Pathology",
      logo: require("./assets/images/brand-logos/snp.png"),
    },
    {
      name: "Pfizer",
      logo: require("./assets/images/brand-logos/Pfizer.png"),
    },
    {
      name: "10x Genomics",
      logo: require("./assets/images/brand-logos/10x_logo.png"),
    },
    {
      name: "Max Kelsen",
      lightLogo: require("./assets/images/brand-logos/MK.png"),
      darkLogo: require("./assets/images/brand-logos/MK_dark.png")
    },
    {
      name: "University of Queensland",
      logo: require("./assets/images/brand-logos/UQ.png"),
    },
    {
      name: "QIMR Berghofer",
      lightLogo: require("./assets/images/brand-logos/QIMRB.png"),
      darkLogo: require("./assets/images/brand-logos/QIMRB_dark.png")
    },
    {
      name: "Genomics Machine Learning Group",
      lightLogo: require("./assets/images/brand-logos/GML_light.png"),
      darkLogo: require("./assets/images/brand-logos/GML_dark.png")
    }
  ]
};

const pipelineSection = {   
  title: "The Pipeline",   
  display: true,
  subtitle: "From sample to insights: How I transform spatial and other Omics data into actionable knowledge",   
  image: require("./assets/images/skill-logos/tools.png"), 
  description: ( "test" )   
};



const technologiesSection = {
  display: true, // Set to true to display this section
  title: "Technologies",
  subtitle: "Cutting-edge technologies I work with",
  technologies: [
    {
      name: "Single-cell RNA-seq",
      image: require("./assets/images/skill-logos/scRNA.png"),
      description: "Single-cell RNA sequencing allows for the profiling of gene expression at the individual cell level, revealing cellular heterogeneity and rare cell populations that would be masked in bulk sequencing approaches. This technology enables the discovery of new cell types, mapping of cellular differentiation trajectories, and understanding of complex tissue microenvironments.",
      platforms: ["10X Genomics"] // Only 10X Genomics logo
    },
    {
      name: "Whole Transcriptome Spatial Transcriptomics",
      image: require("./assets/images/skill-logos/spotST.png"),
      description: "Whole Transcriptome Spatial Transcriptomics (ST) provides comprehensive gene expression profiling while preserving spatial context within tissue samples. This technology captures the entire transcriptome at near-cellular resolution, enabling the visualization of complex spatial gene expression patterns and identification of region-specific molecular signatures in tissues.",
      platforms: ["10X Genomics","STOmics"] // No logos (can be updated if needed)
    },
    {
      name: "Single-cell Spatial Transcriptomics",
      image: require("./assets/images/skill-logos/scST.png"),
      description: "Single-cell Spatial Transcriptomics combines the resolution of single-cell RNA sequencing with spatial information, allowing researchers to map gene expression at the individual cell level within the tissue architecture. This powerful approach bridges the gap between traditional histology and genomics, providing unprecedented insights into cellular organization, cell-cell interactions, and tissue microenvironments.",
      platforms: ["10X Genomics", "NanoString","Bruker"] // 10X Genomics and NanoString logos
    },
    {
      name: "Single-Cell Spatial Proteomics",
      image: require("./assets/images/skill-logos/Codex.png"),
      description: "Spatial Proteomics technologies enable the visualization and quantification of proteins while preserving spatial context within tissue samples. Using multiplexed immunofluorescence and advanced imaging techniques, these platforms can simultaneously detect dozens of protein markers at subcellular resolution, providing deep insights into cell phenotypes, signaling networks, and protein-protein interactions within their native tissue environment.",
      platforms: ["Akoya Biosciences"] // No logos (can be updated if needed)
    },
    {
      name: "Spatial Metabolomics",
      image: require("./assets/images/skill-logos/sm.png"),
      description: "Spatial Metabolomics combines advanced mass spectrometry with imaging techniques to map metabolites directly within tissue sections. This technology provides insights into metabolic heterogeneity across tissues, revealing how metabolic processes are spatially organized and how they relate to tissue function and disease states. Spatial metabolomics adds another critical layer to our understanding of tissue biology beyond genes and proteins.",
      platforms: ["Bruker"] // No logos (can be updated if needed)
    },
    {
      name: "Other Biological Datasets",
      image: require("./assets/images/skill-logos/other.png"),
      description: "Beyond standard omics approaches, I work with diverse biological datasets including digital pathology images, clinical data, electronic health records, and other multi-modal data types. Integrating these heterogeneous data sources enables more comprehensive analysis of biological systems and disease mechanisms, leading to deeper insights and more robust predictive models for precision medicine applications.",
      platforms: ["Illumina","Oxford Nanopore"] // No logos (can be updated if needed)
    }
  ],
  platformsSection: {
    title: "Spatial Biology Platforms",
    platforms: [
      {
        name: "10X Genomics",
        lightLogo: require("./assets/images/brand-logos/10x_logo.png"),
        darkLogo: require("./assets/images/brand-logos/10x_logo.png")
      },
      {
        name: "Akoya Biosciences",
        lightLogo: require("./assets/images/brand-logos/Akoya.png"),
        darkLogo: require("./assets/images/brand-logos/Akoya_dark.png")
      },
      {
        name: "NanoString",
        lightLogo: require("./assets/images/brand-logos/nanostring.png"),
        darkLogo: require("./assets/images/brand-logos/nanostring.png")
      },
      {
        name: "STOmics",
        lightLogo: require("./assets/images/brand-logos/stomics.png"),
        darkLogo: require("./assets/images/brand-logos/stomics.png")
      },
      {
        name: "Bruker",
        lightLogo: require("./assets/images/brand-logos/bruker_light.png"),
        darkLogo: require("./assets/images/brand-logos/bruker_dark.png")
      },
      {
        name: "Illumina",
        lightLogo: require("./assets/images/brand-logos/Illumina_light.png"),
        darkLogo: require("./assets/images/brand-logos/Illumina_dark.png")
      },
      {
        name: "Oxford Nanopore",
        lightLogo: require("./assets/images/brand-logos/oxford_light.png"),
        darkLogo: require("./assets/images/brand-logos/oxford_dark.png")
      }
    ]
  }
};

// Skills Section

const skillsSection = {
  title: "Key Skills and Expertise",
  subTitle: "In addition to almost 10 years experience within the biomedical science field, I have a strong background in bioinformatic analyses, software development and other data science tools such as:",
  skills: [
    emoji(
      "⚡ Develop novel and innovative algorithms/software for spatial omics and digital pathology"
    ),
    emoji("⚡ Implement and deploy machine learning models for integrating and analysing spatial omics and biological imaging datasets"),
    emoji(
      "⚡ Proficient in repository management and version control, highperformance computing, and cloud computing"
    )
  ],
  softwareSkills: [
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Adobe Creative Suite",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "google cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "ML Models",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "far fa-chart-bar"
    },
    {
      skillName: "Digital Pathology",
      fontAwesomeClassname: "fas fa-microscope"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Queensland ",
      logo: require("./assets/images/UQ.png"),
      subHeader: "Master of Bioinfomatics (Research Extensive)",
      duration: "Jan 2021 - Nov 2022",
      desc: "Developed computational skills and critical biological data analysis skiils.",
      descBullets: [
        "GPA: 6.94/7.0",
        "Publication in Nature Precision Oncology IF: 7.9 (2022)",
        "Thesis project involves the integration of multiomics datasets (Spatial Transcriptomics, Spatial Proteomics) from human head and neck cancer patients in-order to distinguish heterogeneity between patients to assess statistical performance of multiomics integration, and identify drug targets for immunotherapies",
        "Presented at the CellOmics Innovation Forum and the MultiOmics 2022 Conference"
      ]
    },
    {
      schoolName: "University of Queensland ",
      logo: require("./assets/images/UQ.png"),
      subHeader: "Bachelor of Science (First Class Honours)",
      duration: "Jan 2016 - Nov 2019",
      desc: "Specialised in Biomedical Science specifically in the fields of Pathophysiology, Neuroscience, Developmental Biology.",
      descBullets: [
        "GPA: 6.33/7.0",
        "Honours Project: Developing a clinically relevant mouse model of high-level spinal cord injury to study circadian metabolism and immune dysfunction",
        "Third year developmental biology prize (2019)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Spatial Omics/Biological 'Big' Data analysis",
      progressPercentage: "100%"
    },
    {
      Stack: "Machine Learnign/Digital Pathology",
      progressPercentage: "80%"
    },
    {
      Stack: "Clinical Pathology Laboratory",
      progressPercentage: "100%"
    },
    {
      Stack: "Project Managment",
      progressPercentage: "100%"
    },
    {
      Stack: "Publication/Grant Submissions",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
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

// Don't forget to add the new section to your export
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
  resumeSection,
  partnersSection,
  technologiesSection,
  pipelineSection
};