// all the properties are optional - can be left empty or deleted
const header = {
  homepage: "https://github.com/Devsquality",
  title: "Omotayo",
};

const about = {
  name: "Omotayo Ibrahim",
  role: ["Frontend Developer", "AI Chatbot Developer"],
  description: [
    "As a Frontend Developer, I excel at crafting visually stunning and highly functional web applications, utilizing HTML, CSS, and JavaScript to add interactivity and dynamic features. My expertise extends to React,Vue.js and next.js for building robust single-page applications and focusing on UX/UI design principles to ensure intuitive user interfaces.",
    "In the realm of AI, I specialize in creating intelligent chatbots that enhance user interaction and automate support processes. My skills include Natural Language Processing (NLP), machine learning, and proficiency in JavaScript . I utilize frameworks like Langchain, and Dialogflow to build effective chatbot solutions.",
  ],
  resume:
    "https://drive.google.com/file/d/1Y-nsNZqMfPFQtkcfWPJn6mjEyYMwv3Aa/view?usp=drive_link",
  social: {
    linkedin: "https://www.linkedin.com/in/omotayo-ibrahim0804/",
    github: "https://github.com/Devsquality",
  },
  image: "/images/dp.jpeg",
};

const projects = [
  {
    name: "SeamSushi Restaurant Website",
    description:
      "In this project, I utilized CSS variables to maintain consistent and easily adjustable styling, imported CSS files to promote modularity and organization, and applied flex and position properties to create responsive and well-structured layouts. I rendered HTML through JavaScript using reusable functions to enhance code efficiency and incorporated smooth and subtle animations.",
    stack: [
      "HTML5",
      "React",
      "CSS3",
      "Vite",
      "Git",
    ],
    sourceCode: "https://github.com/Devsquality/Seam-Sushi",
  },
  {
    name: "Hosting Static Website on AWS using S3 and CloudFront",
    description:
      "Hosted a static website using Amazon S3 for storage and CloudFront for global content delivery, enabling low latency and fast load times. Configured S3 for website hosting and used AWS CLI for streamlined setup.",
    stack: ["AWS S3", "CloudFront", "AWS CLI"],
    sourceCode: "https://github.com/Devsquality/Deploy-Static-Website-on-AWS",
  },
  {
    name: "Emotion Detector Web App",
    description:
      "The Emotion Detector project leverages AI and machine learning to analyze and interpret human emotions based on input data. Using advanced algorithms and natural language processing techniques, the system can identify various emotional states such as happiness, sadness, anger, and surprise from text.",
    stack: [
      "Python 3.x",
      "API Gateway",
      "IBM Watson NLU",
      "HTML & CSS",
      "JavaScript",
      "Flask",
    ],
    sourceCode: "https://github.com/Devsquality/emotion-detector",
  },
  {
    name: "Ionic-Chat App",
    description:
      "The Chat App project is a dynamic and interactive application designed to facilitate real-time communication between users. Built using modern web technologies, this app ensures a seamless and engaging chat experience.",
    stack: [
      "JavaScript",
      "HTML",
      "React",
      "Git",
      "Animations"],
    sourceCode: "https://github.com/Devsquality/",
  },
];

const skills = [
  // Devops
  "React",
  "HTML5",
  "CSS3",
  "Git Version Control",
  "JavaScript",
  "AWS",
  "LangChain",
  "Dialogflow",
  "Python",
  "Natural Language Processing",
  "API Integration",
  "WordPress",

  // Backend
  "Web Development",
  "Node.js",
];

const contact = {
  email: "Devsquality@gmail.com",
};

const certifications = [
  {
    title: "IBM AI Developer Professional Certificate",
    provider: "Coursera",
    year: "",
    link: "https://www.credly.com/badges/26e6f6e1-92fc-441c-9c82-40905523619b/public_url",
  },
  {
    title: "Building Generative AI-Powered Applications with Python",
    provider: "Coursera",
    year: "",
    link: "https://www.credly.com/badges/454feab2-d7f0-4374-915e-fb6ea9166bfe/public_url",
  },
  // {
  //   title: "Oracle Cloud Infrastructure Certified Foundations Associate",
  //   provider: "Google Cloud",
  //   year: "2023",
  //   link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5C444A1B762BFF98856A3125DE4268059C980D372607D86340FB4DCA867FE769",
  // },
];

const workExperience = [
  {
    jobTitle: "Frontend Developer",
    company: "FBV Inc",
    duration: "2022 - 2024",
    description: [
      "Collaborated with a team to deploy HTML, CSS, and JS for web development at FBV.",
      "Conducted thorough program checks to identify and resolve errors, ensuring an interactive interface.",
      "Streamlined system operations by automating repetitive tasks using JavaScript and Bash, saving significant manual effort and improving reliability across critical systems.",
      "Designed and implemented scalable, high-availability website infrastructures.",
      "Implemented responsive design principles to optimize user experience and engagement..",
      "Developed strong problem-solving skills and attention to detail in a fast-paced environment..",
      "Built custom widgets to enhance user engagement on webpages..",
      "Assisted in the development of new features and enhancements for the company's web application, ensuring a smooth and user-friendly experience for users.",
      "Implemented responsive design principles to optimize user experience and engagement.",
    ],
  },
  {
    jobTitle: "AI Chatbot Developer",
    company: "Swiver",
    duration: "2023 - 2024",
    description: [
      "Developed responsive virtual chatbots for customer service inquiries, enhancing customer relations.",
      "Implemented innovative solutions to improve customer engagement and satisfaction.",
      " Utilized skills in AI, NLP, and machine learning to create efficient chatbot systems.",
      "Designed and implemented chatbot systems to automate customer service inquiries, reducing response times and improving customer satisfaction.",
      "Developed and maintained chatbot systems, ensuring optimal performance and reliability.",
      "Collaborated with cross-functional teams to develop and deploy chatbot systems.",

      "Implemented responsive design principles to optimize user experience and engagement.",
      "Developed strong problem-solving skills and attention to detail in a fast-paced environment.",
      "Built custom widgets to enhance user engagement on webpages.",
      "Assisted in the development of new features and enhancements for the company's web application, ensuring a smooth and user-friendly experience for users.",
      "Implemented responsive design principles to optimize user experience and engagement.",
    ],
  },

];

export {
  header,
  about,
  projects,
  skills,
  contact,
  certifications,
  workExperience,
};
