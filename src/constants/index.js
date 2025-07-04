export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Achievements',
    href: '#achievements',
  },
  {
    id: 6,
    name: 'Work',
    href: '#work',
  },
  {
    id: 7,
    name: 'Contact',
    href: '#contact',
  },
  {
    id: 8,
    name: 'Resume',
    href: '/src/resume/NamrataSinghResume.pdf',
    download: true,
  },
  {
    id: 9,
    name: 'Music',
    href: '/src/music/music.mp3',
    play: true,
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Sahil Prasad',
    position: 'Student at NIT DGP, Developer',
    img: 'assets/image1.jpeg',
    review:
      'Working with Namrata was a fantastic experience. She transformed our outdated website into a modern, user-friendly platform. Her attention to detail and commitment to quality are unmatched. Highly recommend her for any web dev projects.',
  },
  {
    id: 2,
    name: 'Priya  Shaw',
    position: 'Student, Developer',
    img: 'assets/image2.jpeg',
    review:
      'Namrata\'s expertise in web development is truly impressive. She delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. She\'s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'Pratik Singh',
    position: 'Student at HIT,Developer ',
    img: 'assets/review3.png',
    review:
      'I can\'t say enough good things about Namrata. She was able to take our complex project requirements and turn them into a seamless, functional website. Her problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Rupak Das',
    position: 'Student at GNIT, Developer',
    img: 'assets/review4.png',
    review:
      'Namrata was a pleasure to work with. She understood our requirements perfectly and delivered a website that exceeded our expectations. Her skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: ' RecipeApp',
    desc: ' This application allows users to search for a wide range of recipes for different dishes. There are default recipes displayed to the user when the user visits the application for the first time. Once the User enters the dish name, the recipes are fetched from an Edamam API. ',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, JavaScript, react.js ,BootStrap, React-Router.  that enhance operational workflows.',
    href: 'https://recipe-app-mocha-xi.vercel.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/recipe.jpeg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
    ],
  },
  {
    title: 'Myntra Clone',
    desc: '❖ This includes the core features and functionalities that the Myntra clone will have, such as user registration, product browsing, search functionality, product details display, add to cart functionality and user profile management. Users can sign-up and login to perform. ',
    subdesc:
      'Built as a unique Clone with HTML, Typecript,JavaScript, Tailwind CSS, React-Router-dom. Podcastr is designed for optimal performance and scalability.',
    // href: 'https://11-template-myntra-functional-clone-2ljq.vercel.app/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/myntra.jpeg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/html.png',
      },
    ],
  },
  {
    title: 'WeatherApp',
    desc: '❖ A web application which will tell the users about the weather details of any particular city. The easy and Interactive user interface will help our users to easily know about the temp, wind speed, humidity and description about the weather. .',
    subdesc: 'With WeatherApp, users can know about weather, by using  Tailwind CSS, JavaScript, HTML newest features.',
    href: 'https://weather-dashboard-eight-wine.vercel.app/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/whether.jpeg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'javascript',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'html',
        path: '/assets/html.png',
      },
    ],
  },

  {
    title: 'GEPO-Website',
    desc: '❖	Developed an admin portal for managing programs, events, and partnerships. Added features like event tracking, inquiry forms, and downloadable resources. Ensured a responsive and easy-to-use interface for better accessibility.',
    subdesc:
      '❖	Created a website for Global Engagement & Partnerships Office to manage international collaborations. Built using JavaScript, PHP, and MySQL with a secure login system.',
    // href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'javascript',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'PHP',
        path: '/assets/php.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/mysql.png',
      },
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    developerPosition: isMobile ? [0, -1, 0] : [0, -2, 0],
    developerScale: isMobile ? 0.8 : 1,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Frosthacks',
    pos: '1st Runner Up',
    duration: 'Feb 7-9, 2024',
    title:
      'Won 1st Runner Up prize at Frosthacks Hackathon held at AOT College. Developed innovative solutions using cutting-edge technologies and collaborated with a talented team.',
    icon: '/assets/star.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SBH',
    pos: 'Finalist',
    duration: 'April, 2024',
    title:
      'Finalist of SMART BENGAL HACKATHON(SBH) 2024. Collaborated with a multidisciplinary team to develop innovative solutions using frontend technologies.',
    icon: '/assets/sbh.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Code',
    pos: 'Winner',
    duration: 'March, 2023',
    title: 'Winner in Code Combat',
    icon: '/assets/code.png',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'BCT',
    pos: 'Trainee',
    duration: '2023- 2024',
    title:
      'DJANGO with Python, Project: Online Book Store certificate, AI/ML, Project: Credit Card Fraud Detection using Machine Learning',
    icon: '/assets/bct.png',
    animation: 'idle',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'Frosthacks Hackathon',
    position: '1st Runner Up',
    date: 'February 7-9, 2024',
    location: 'AOT College',
    description: 'Achieved 1st Runner Up position in the prestigious Frosthacks Hackathon, showcasing innovative problem-solving skills and technical expertise.',
    icon: '/assets/star.png',
    category: 'Competition',
  },
  {
    id: 2,
    title: 'Smart Bengal Hackathon',
    position: 'Finalist',
    date: 'April 2024',
    location: 'West Bengal',
    description: 'Reached the finals of SBH 2024, demonstrating exceptional teamwork and technical capabilities in developing innovative solutions.',
    icon: '/assets/sbh.png',
    category: 'Competition',
  },
  {
    id: 3,
    title: 'Code Combat',
    position: 'Winner',
    date: 'March 2023',
    location: 'GNIT',
    description: 'Secured first place in Code Combat competition, showcasing strong programming fundamentals and problem-solving abilities.',
    icon: '/assets/code.png',
    category: 'Competition',
  },
  {
    id: 4,
    title: 'Django & AI/ML Certification',
    position: 'Trainee',
    date: '2023-2024',
    location: 'BCT',
    description: 'Completed comprehensive training in Django with Python and AI/ML, including projects on Online Book Store and Credit Card Fraud Detection.',
    icon: '/assets/bct.png',
    category: 'Education',
  },
];

export const skills = [
  {
    name: 'React.js',
    level: 90,
    icon: '/assets/react.svg',
    category: 'Frontend',
  },
  {
    name: 'JavaScript',
    level: 85,
    icon: '/assets/javascript.png',
    category: 'Frontend',
  },
  {
    name: 'TypeScript',
    level: 80,
    icon: '/assets/typescript.png',
    category: 'Frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 88,
    icon: '/assets/tailwindcss.png',
    category: 'Frontend',
  },
  {
    name: 'HTML/CSS',
    level: 92,
    icon: '/assets/html.png',
    category: 'Frontend',
  },
  {
    name: 'Node.js',
    level: 75,
    icon: '/assets/react.svg',
    category: 'Backend',
  },
  {
    name: 'Python',
    level: 70,
    icon: '/assets/react.svg',
    category: 'Backend',
  },
  {
    name: 'PHP',
    level: 65,
    icon: '/assets/php.png',
    category: 'Backend',
  },
  {
    name: 'MySQL',
    level: 70,
    icon: '/assets/mysql.png',
    category: 'Database',
  },
  {
    name: 'Three.js',
    level: 75,
    icon: '/assets/react.svg',
    category: '3D Graphics',
  },
];
