/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import React from 'react';

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
  lightLogo: require("./assets/images/skill-logos/pipeline_light.png"), 
  darkLogo: require("./assets/images/skill-logos/pipeline_dark.png"), 
  lightAnimatedSvg: require("./assets/lottie/pipeline_animation_light.json"), // Lottie JSON for light mode
  darkAnimatedSvg: require("./assets/lottie/pipeline_animation_dark.json"), // Lottie JSON for dark mode
  beforeDescription: (
    <>
      <p>
      Following this standard bioinformatic pipeline, we can implment downstream methods and tools to uncover a deeper understand of biology. These are just some of the many different analyses and packages I have used for analysing all types of biological data.
      </p>
    </>
  ),
  afterDescription: (
    <>
      <p>
      Often there are analyses specific to the technology type or platform being used. Some of the most common and novel techniques I have previously implment are listed below in the 'Technolgies Section'.    
      </p>
    </>
  )
};

const technologiesSection = {
  display: true, // Set to true to display this section
  title: "Technologies",
  subtitle: "Cutting-edge technologies I work with",
  technologies: [
    {
      name: "Single-cell RNA-seq",
      image: require("./assets/images/skill-logos/scRNA.png"),
      description: "Single-cell RNA sequencing allows for the profiling of gene expression at the individual cell level, revealing cellular heterogeneity and rare cell populations that would be masked in bulk sequencing approaches. This technology enables the discovery of new cell types, mapping of cellular differentiation trajectories, and understanding of complex tissue microenvironments. Data generated from this analysis is generally in the form of a large sparse counts matrix which must be heavily scrutinised to ensure all technical variation is removed. In addition to the standard bioinformatics pipeline mentioned above, some of the key analyses I always perform when analysing scRNA-seq include:",
      bulletPoints:[
        "Doublet Removal",
        "Robust Cell Tying",
        "Trajectory Analysis",
        "Pathway Enrichment Analysis",
        "Infered Copy Number Variations"
      ],
      platforms: ["10X Genomics"] // Only 10X Genomics logo
    },
    {
      name: "Whole Transcriptome Spatial Transcriptomics",
      image: require("./assets/images/skill-logos/spotST.png"),
      description: "Whole Transcriptome Spatial Transcriptomics (ST) provides comprehensive gene expression profiling while preserving spatial context within tissue samples. This technology captures the entire transcriptome at near-cellular resolution (spot level: ~2-10 cells), enabling the visualisation of complex spatial gene expression patterns and identification of region-specific molecular signatures in tissues. This data often produces a counts matrix where each barcoded spot contains spatial coordinates. Compared to scRNA-seq data, the ST data structure contains it’s own set of challenges when ensuring high quality data. With the addition of spatial coordinates there various analyses we can perform to extract deeper information about tissue microenvironments. Some of my favourites include:",
      bulletPoints:[
        "Deconvolution",
        "Cell-Cell Interaction",
        "Spatial Feature Correlation",
        "Spatial Trajectory Analysis"
      ],
      platforms: ["10X Genomics","STOmics"] // No logos (can be updated if needed)
    },
    {
      name: "Single-cell Spatial Transcriptomics",
      image: require("./assets/images/skill-logos/scST.png"),
      description: "Single-cell Spatial Transcriptomics combines the resolution of single-cell RNA sequencing with spatial information, allowing researchers to map gene expression at the individual cell level within the tissue architecture. This powerful approach bridges the gap between traditional histology and genomics, providing unprecedented insights into cellular organisation, cell-cell interactions, and tissue microenvironments. Although this data contains fewer genes compared to spot level ST datasets, they are often much larger consisting of over 100,000 cells. With this brings new methods to leverage such data including:",
      bulletPoints:[
        "Cell Label Transfer",
        "Neighbourhood Niche Analysis"
      ],
      platforms: ["10X Genomics", "NanoString","Bruker"] // 10X Genomics and NanoString logos
    },
    {
      name: "Single-Cell Spatial Proteomics",
      image: require("./assets/images/skill-logos/Codex.png"),
      description: "Spatial Proteomics technologies enable the visualisation and quantification of proteins while preserving spatial context within tissue samples. Using multiplexed immunofluorescence and advanced imaging techniques, these platforms can simultaneously detect dozens of protein markers at subcellular resolution, providing deep insights into cell phenotypes, signaling networks, and protein-protein interactions within their native tissue environment. This generated data is distinctly different from most spatial transcriptomics datasets, and with this requires optimised methods for extracting biological information. Some of these include:",
      bulletPoints:[
        "Geometric Mean Based Cell Typing",
        "Protein-Protien Interaction Analysis",
        "Differential Intensity Analysis"
      ],
      platforms: ["Akoya Biosciences"] // No logos (can be updated if needed)
    },
    {
      name: "Spatial Metabolomics",
      image: require("./assets/images/skill-logos/sm.png"),
      description: "Spatial Metabolomics combines advanced mass spectrometry with imaging techniques to map metabolites directly within tissue sections. This technology provides insights into metabolic heterogeneity across tissues, revealing how metabolic processes are spatially organized and how they relate to tissue function and disease states. Spatial metabolomics adds another critical layer to our understanding of tissue biology beyond genes and proteins.These datasets contain huge levels of data and require specialised packages to handle this. These packages contain analyses such as:",
      bulletPoints:[
        "Metabolite Annotation",
        "Shrunken Spatial Centroid Analysis",
        "Metabolic Pathway Analysis"
      ],
      platforms: ["Bruker"] // No logos (can be updated if needed)
    },
    {
      name: "Other Biological Datasets",
      image: require("./assets/images/skill-logos/other.png"),
      description: "Beyond standard omics approaches, I work with diverse biological datasets including digital pathology images, clinical data, Bulk-Omics, and other multi-modal data types. Integrating these heterogeneous data sources enables more comprehensive analysis of biological systems and disease mechanisms, leading to deeper insights and more robust predictive models for precision medicine applications.",
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
      Stack: "Clinical Pathology Laboratory",
      progressPercentage: "100%"
    },
    {
      Stack: "Project Managment",
      progressPercentage: "100%"
    },
    {
      Stack: "Machine Learnign/Digital Pathology",
      progressPercentage: "80%"
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
      role: "Senior Bioinformatician",
      company: "University of Queensland",
      companylogo: require("./assets/images/UQ.png"),
      date: "Aug 2023 – Present",
      desc: "Leveraging spatial-omic technologies and deep learning methodologies to analyse various complex diseases, including unravelling intricate biological mechanisms associated with diverse tumour micro-environments",
      descBullets: [
        "Strong background in research projects (start-to-end) involing all major spatial omics technolgies",
        "Project managment with major industry partners including Sullivan Nicolaides Pathology and Pfizer",
        "Mentoring and managing staff including PhD/Honours students and external collaborators",
        "Numerous oral and poster presentations at conferences including the Brisbane Cancer Conference, Multi-Omics and 10X User Meeting"
      ]
    },
    {
      role: "Clinical Laboratory Scientist",
      company: "Sullivan Nicolaides Pathology",
      companylogo: require("./assets/images/snp.png"),
      date: "Jan 2021 – March 2023",
      desc: "Performed routine histology on thousands of patient samples",
      descBullets: [
        "Key clinical histolgoy skills such as embedding, microtomy and H&E staining",
        "Handled a diverse range of complex human specimen",
        "Performed efficiently to produce high quality outputs in high pace work environment"
      ] 
    },
    {
      role: "Machine Learning Researcher",
      company: "Max Kelsen",
      companylogo: require("./assets/images/MK.png"),
      date: "March 2023 – May 2023",
      desc: "Implemented various machine learning techniques on cancer clinical trail datasets.",
      descBullets: [
        "Developed skills in manipulating machine learning models to apply to medical datasets",
        "Familar with cloud computing platfroms such as Google"
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
  subtitle: "Some key milestones and projects i have been involved with",
  projects: [
    {
      image: require("./assets/images/spamtp.png"),
      projectName: "SpaMTP R Package",
      projectDesc: "Learn more about our Spatial Metabolomics, Transcriptomics and Proteomics Integration Package here:",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://genomicsmachinelearning.github.io/SpaMTP/"
        }
      ]
    },
    {
      image: require("./assets/images/hnc.webp"),
      projectName: "Nature Precision Oncology",
      projectDesc: "Deep spatial-omics analysis of Head & Neck carcinomas provides alternative therapeutic targets and rationale for treatment failure.",
      footerLink: [
        {
          name: "Visit Article",
          url: "https://www.nature.com/articles/s41698-023-00444-2"
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
    "Some Cool Stuff that I have done!",

    achievementsCards: [
      {
        title: "Presenting My Work",
        subtitle:
          "I've been fortunate enough to present at various inter-institution, national and global conferences. These include the Brisbane Cancer Conference, Multi-Omics and 10X User Group Meetings.",
        image: require("./assets/images/multiomics.png"),
        imageAlt: "Multi-Omics",
        footerLink: [
          {
            name: "Multi-Omics Poster",
            url: require("./assets/documents/Poster.pdf"),
            isDownloadable: true,
            downloadName: "Andrew_Causer_Poster.pdf"
          }
        ]
      },
      {
        title: "Leading Workshops and Tutorials",
        subtitle:
        "I have had experience leading workshops and tutorials for staff and students at both the Queensland Institute of Medical Research Berghofer and the University of Queensland",
        image: require("./assets/images/brand-logos/Combined.png"),
        imageAlt: "QIMR logo",
        footerLink: [
          {
            name: "Tutorial",
            url: "/documents/Tutorial.html",
            isDownloadable: true,
            downloadName: "Andrew_Causer_Tutorial.html"
          }
        ]
      },
      {
        title: "Deep Learning Specialisation Certification",
        subtitle: "Completed certifcation from DeepLearning.AI in convolutional neural networks and deep learning",
        image: require("./assets/images/deeplearning.webp"),
        imageAlt: "DeepLearning.AI logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.linkedin.com/posts/andrewgcauser_i-just-completed-the-deep-learning-specialisation-activity-7092829776746332160-qqX5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADIdu2sBj4D0inKNirpNHO94pyD2kAW3tgc" // External link
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
  title: emoji("Get in Touch ☎️"),
  subtitle:
    "Interested in learning more? Please reach out using Linkdin or my email below",
  email_address: "cause.ag@gmail.com"
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