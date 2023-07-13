import { data } from "autoprefixer";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unity,
    c_sharp,
    c_plus_plus,
    java,
    tensorflow,
    python,
    vega_lite,
    kotlin,
    game_development,
    data_visualisation,
    simulation,
    machine_learning,
    ray_tracing,
    swansea,
    path_tracing,
    GPU_path_tracing,
    social_networks,
    sugarscape,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
    {
      title: "Game Development",
      icon: game_development,
    },
    {
      title: "Simulation",
      icon: simulation,
    },
    {
      title: "Ray Tracing",
      icon: ray_tracing,
    },
    {
      title: "Data Visualisation",
      icon: data_visualisation,
    },
    {
      title: "Machine Learning",
      icon: machine_learning,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      name: "Unity",
      icon: unity,
    },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "C#",
      icon: c_sharp,
    },
    {
      name: "C++",
      icon: c_plus_plus,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Vega-lite",
      icon: vega_lite,
    },
    {
      name: "Kotlin",
      icon: kotlin,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Science Msci Student",
      company_name: "Swansea University",
      icon: swansea,
      iconBg: "#E6DEDD",
      date: "Sep 19 - Jun 23",
      points: [
        "Conducting research on advanced topics such as simulating global illumination via photon mapping, and simulating social network generation via agent-based city simulations.",
        "Designing data visualisation both individually and in groups, starting from analysing the problem and ending in implementing the solution.",
        "Applying machine learning to advanced areas such as identifying objects in a room through point-clouds taken using the Xbox Kinect."
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "Swansea University",
      icon: swansea,
      iconBg: "#E6DEDD",
      date: "Feb 23 - Jun 23",
      points: [
        "Lab demonstrator for a module on video games programming and a module on mobile development.",
        "Explain difficult concepts from lectures to students, and help them with coursework difficulties.",
        "Debug students' code on the fly, and give one-to-one assistance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He's okay I guess",
      name: "Stefani Dimitrova",
      designation: "Doughnut Girl",
      company: "Krispy Kreme",
      image: 'https://randomuser.me/api/portraits/lego/1.jpg',
    },
  ];
  
  const projects = [
    {
      name: "Social Network Simulation",
      description:
        "4th Year Project. Growing realistic social networks from the ground up in an agent-based city landscape.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "Agent-based",
          color: "green-text-gradient",
        },
        {
          name: "Simulation",
          color: "pink-text-gradient",
        },
      ],
      image: social_networks,
      source_code_link: "https://github.com/ymumberson/SocialNetworks",
    },
    {
      name: "Path Tracing",
      description:
        "Simple path tracer written from scratch in C++.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "RayTracing",
          color: "green-text-gradient",
        },
      ],
      image: path_tracing,
      source_code_link: "https://github.com/ymumberson/Ray-Tracing-C--",
    },
    {
      name: "GPU Path Tracing",
      description:
        "Very basic path tracer written in Unity using a Compute Shader.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "RayTracing",
          color: "green-text-gradient",
        },
        {
          name: "HLSL",
          color: "pink-text-gradient",
        },
      ],
      image: GPU_path_tracing,
      source_code_link: "https://github.com/ymumberson/GPU-Ray-Tracing-in-Unity",
    },
  ];
  
  const strings = [
    {
      id: "Name",
      text: "Yoshan",
    },
    {
      id: "Role",
      text: "Software Developer",
    },
    {
      id: "Title-text",
      text: "I'm a Graduate Computer Scientist with experience in Simulations, Video Game Development, Ray Tracing, Data Visualisation, and Machine Learning.",
    },
    {
      id: "Introduction-text",
      text: "Recent Computer Science Msci Graduate. Passionate about software development, with experience in C, C++, C#, and Java. Often push myself outside of my comfort zone, and keep trying new ideas until I solve the problem. Work great in a team, always willing to do my part and discuss the pros and cons of ideas.",
    },
    {
      id: "Projects-text",
      text: "The following projects showcase my skills and experiences through real-world examples of my work. Each project is briefly described with links to the code repositories.",
    },
  ];

  const titles = [
    {
      id: "Title",
      text: "Hi, I'm ",
    },
    {
      id: "Introduction-main",
      text: "Introduction",
    },
    {
      id: "Introduction-sub",
      text: "Overview.",
    },
    {
      id: "WorkExperience-main",
      text: "What I have done so far",
    },
    {
      id: "WorkExperience-sub",
      text: "Work Experience.",
    },
    {
      id: "Projects-main",
      text: "My Work",
    },
    {
      id: "Projects-sub",
      text: "Projects.",
    },
    {
      id: "Testimonials-main",
      text: "What others say",
    },
    {
      id: "Testimonials-sub",
      text: "Testimonials.",
    },
    {
      id: "Contact-main",
      text: "Get in touch",
    },
    {
      id: "Contact-sub",
      text: "Contact.",
    },
  ];

  export { services, technologies, experiences, testimonials, projects, strings, titles };