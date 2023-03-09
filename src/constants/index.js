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
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Hielite technologies",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2021 - till date",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Teaching new members interested in getting into the field of web development",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Coding Teacher",
      company_name: "Sow Academy",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - September 2021",
      points: [
        "Teaching young teenagers concepts in programming ranging from 2D game development using scratch",
        "Organizing various competitions and exhibits to put thei skills to test",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to the school's management",
      ],
    },
    {
      title: "Front-end Web Developer(Freelancer)",
      company_name: "Upwork",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jan 2022 - till date",
      points: [
        "Developing and maintaining web applications and web pages using javascript frameworks and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Community Leader",
      company_name: "Dev League",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Abdul-Qawi's devotion to his work is astounding. He still remains one of the most brilliant developer i have worked with",
      name: "Fatai Hammed",
      designation: "CEO",
      company: "Hielite Technologies",
      image: "https://media.licdn.com/dms/image/C4D03AQGq_65FzQcOuA/profile-displayphoto-shrink_800_800/0/1659178704786?e=2147483647&v=beta&t=iQiGzxfToV6w_teTo6juZmaE7vU2HhA8hhLrYJNCFaQ",
    },
    {
      testimonial:
      "I have never come across a developer as talented as Abdul-Qawi. he is very hardworking and consistent.",
      name: "Omoniyi Victor",
      designation: "Front-End Developer",
      company: "Hielite Technologies",
      image: "https://media.licdn.com/dms/image/D4E35AQEoT6QKLLjCKw/profile-framedphoto-shrink_400_400/0/1660159271581?e=1678874400&v=beta&t=3yepSV_0c3hGb85OUMNY3is5bKMj_ospLw-Zt2f2veU",
    },
    {
      testimonial:
        "Abdul-Qawi is one of the uncommon web developers i have met. His teamwork spirit is also one that is worth mentioning. Great team player and always ready to learn and improve.",
      name: "Nurudeen Okikiola",
      designation: "CEO",
      company: "Muse Peace Foundation",
      image: 'https://media.licdn.com/dms/image/D4D35AQFqjGmVEQquwA/profile-framedphoto-shrink_100_100/0/1663834078760?e=1678874400&v=beta&t=BCbzdmtDnfehsw6nXFuUVZ31Q14mJp-_C9qFS1Z7FgA',
    },
  ];
  
  const projects = [
    {
      name: "Portofolio Website",
      description:
        "A perfect portfolio website to display your expertise in your various field, developed with the use of React.js. The design of the website and the resources i used where all inspired from Egator on Youtube",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "sass",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Oladotunlaniyan/React-portfolio-1",
    },
    {
      name: "Youtube Clone",
      description:
        "A simple Clone of the popular social media platform Youtube. Making use of Vanilla Javascript, CSS and Html. The website has no database, hence its not functional only the UI and Ux was replicated",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Oladotunlaniyan/Youtube-Clone",
    },
    {
      name: "Resto",
      description:
        "A comprehensive Restaurant website platform that allows users to order food, snacks, and other varieties of options, and offers seamless user experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vanilla javascript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Oladotunlaniyan/RESTO",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };