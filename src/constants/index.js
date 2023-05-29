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
    Uni_of_cali,
    brototype_icon,
    project_collage,
    soiciolog_collage,
    weatherapp,
    netflix_clone,
    todo,
    todo2,
    bank_account,
    olx_clone
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
      title: "React JS Developer",
      icon: web,
    },
    {
      title: "Node JS Developer",
      icon: mobile,
    },
    {
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "UI Designer",
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
      title: "Junior MERN stack developer",
      company_name: "Brototype",
      icon: brototype_icon,
      iconBg: "#383E56",
      date: "July 2022 - March 2023",
      points: [
        "Designed and developed dynamic and responsive websites using HTML, CSS, JavaScript, React ,MongoDB, Express and Node JS. ",
        "Worked with REST APIs to retrieve and display data from databases.",
        "Worked with MVC frameworks to develop robust and scalable backends.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];


  const education = [
    {
      title: "Bachelor Of Computer Application",
      company_name: "University Of Calicut",
      icon: Uni_of_cali,
      iconBg: "#383E56",
      date: "June 2018 - March 2021",
      points: [
        "Specialization in Programming and Mathematics.",
        "Python , PHP , JAVA , C , Data Structures.",
        
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "E-commerce App",
      description:
        "An e-commerce paper book store which consist of customized admin panel to manage products, orders, sales report, etc. In user side many features like cart, wishlist, offers, coupons and payment options. ",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        ,
        {
          name: "Razorpay",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        }
      ],
      image: project_collage,
      source_code_link: "https://github.com/saleelhisan/E-commerce.git",
    },
    {
      name: "Sociolog",
      description:
        "Sociolog is a web-based social media platform that enables users to upload posts and stories, manage their profiles, follow and unfollow other users, and connect with them through chat options",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "RestAPI",
          color: "green-text-gradient",
        },
        {
          name: "NodeJS",
          color: "pink-text-gradient",
        },
        {
          name: "Mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "Socket IO",
          color: "green-text-gradient",
        },
        {
          name: "Redux",
          color: "pink-text-gradient",
        },
        {
          name: "Material UI",
          color: "blue-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "blue-text-gradient",
        },
      ],
      image: soiciolog_collage,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather App",
      description:
        "Weather checking app using OPENWEATHERMAP API ",
      tags: [
      ],
      image: weatherapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Netflix Clone",
      description:
        "cloned application of NETFLIX  using TMDB api ",
      tags: [
      ],
      image: netflix_clone,
      source_code_link: "https://github.com/",
    },{
      name: "Todo App",
      description:
        "User can create a list of tasks and mark them as finished , pending , removed",
      tags: [
      ],
      image: todo2,
      source_code_link: "https://github.com/",
    },
    {
      name: "OLX Clone",
      description:
        "Clone application of OLX with User & Admin authentication , Image uploading Using multer , User Profile management .Build with ReactJS ,NodeJS ,MongoDB ",
      tags: [
      ],
      image: olx_clone,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Bank Account Rest API",
    //   description:
    //     "Rest API for bank account functionality which includes deposit, withdraw, updateKYC, transferMoney, print statements. ",
    //   tags: [
    //   ],
    //   image: bank_account ,
    //   source_code_link: "https://github.com/",
    // }
  ];
  
  export { services, technologies, experiences, testimonials, projects ,education};