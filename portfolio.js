import emoji from 'react-easy-emoji'

export const greetings = {
  name: 'Daniel Jin',
  title: "Hi, I'm Daniel, full stack JS developer.",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with React.js, Next.js, Redux, Node.js, MongoDB, GraphQL, and Blockchain development on Ethereum and Web3.js. Especially I have professional experience in building frontend using React.js, Next.js, Redux, GraphQL, Tailwind CSS, Bootstrap and HTML5/CSS3. And I have good experience in Typescript and ES6. While working for several companies, I got the experience in Teamwork, several coding styles, structure, business and team management.",
  resumeLink:
    'https://docs.google.com/document/d/14XHHAYi6A8kkn7FqiBhll0McCX5FIT1hLZf87_KXWig',
}

export const openSource = {
  githubUserName: 'greencodedev',
}

export const contact = {}

export const socialLinks = {
  url: 'https://www.linkedin.com/in/daniel-jindev/',
  linkedin: 'https://www.linkedin.com/in/daniel-jindev/',
  github: 'https://github.com/greencodedev',
}

export const skillsSection = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js, Redux, GraphQL, Tailwind CSS.',
        ),
        emoji(
          '⚡ Building responsive SSR (server side rendering) websites using Next.js.',
        ),
        emoji(
          '⚡ Building RESTful APIs in Node.js, Express.js, MongoDB, Apollo/GraphQL.',
        ),
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          fontAwesomeClassname: 'vscode-icons:file-type-typescript-official',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassname: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Nodejs',
          fontAwesomeClassname: 'vscode-icons:file-type-node',
        },
        {
          skillName: 'GraphQL',
          fontAwesomeClassname: 'vscode-icons:file-type-graphql',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'TailwindCSS',
          fontAwesomeClassname: 'vscode-icons:file-type-tailwind',
        },
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'Webpack',
          fontAwesomeClassname: 'vscode-icons:file-type-webpack',
        },
        {
          skillName: 'Vite',
          fontAwesomeClassname: 'vscode-icons:file-type-vite',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases',
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions',
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'logos:aws',
        },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'logos:firebase',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassname: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassname: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassname: 'logos:docker-icon',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassname: 'logos:nginx',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Ethereum and Metamask',
        ),
        emoji('⚡ Building Dapps with React.js & Solidity using Web3.js'),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassname: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassname: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassname: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassname: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassname: 'logos:ganache-icon',
        },
      ],
    },
  ],
}

export const SkillBars = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '95', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '80',
  },
]

export const educationInfo = [
  {
    schoolName: 'Northeastern University',
    subHeader: 'Bachelor of Science in Computer Science',
    duration: 'September 2007 - July 2013',
    grade: 'Grade A',
    descBullets: [
      'Professional development completed in Web development',
      'Majored in Computer science and Programming',
    ],
  },
]

export const experience = [
  {
    role: 'Full-Stack developer ',
    company: 'Self-employed',
    companylogo: '',
    date: 'Sep 2022 – Present',
    desc: 'I am working as a freelancer',
    descBullets: [
      'Work on front-end projects using React.js, React Hooks, Redux, Angular, Bootstrap, jQuery, HTML5, CSS3, chart.js, highcharts.js and etc',
      'Work on back-end projects using Node.js, Express, GraphQL, MySQL, Mongodb, postgreSQL, Laravel php framework, CodeIgniter framework',
      'Work on mobile hybrid apps using React Native, Redux/Mobx, React Hooks, Java, Swift',
    ],
  },
  {
    role: 'Angular developer',
    company: 'Electrobuzz',
    companylogo:
      'https://www.electrobuzz.pro/storage/branding_media/GOsUCvVYVFuS0XuywOjyoooGhpxqEqJFe1bdCMmf.png',
    date: 'Feb 2022 – Aug 2022',
    desc:
      'I worked as an Angular frontend developer. I completed the responsive UI using Angular v12.',
    descBullets: [
      'Completed the responsive UI using Angular v12',
      'Integrated the APIs based on Laravel PHP framework',
    ],
  },
  {
    role: 'React Native developer',
    company: 'Makrverse',
    companylogo: '/img/makrverse.png',
    date: 'May 2021 - Mar 2022',
    desc:
      'I worked as a React Native developer and leader. I completed this app v2 and deployed it on Apple and Google stores',
    descBullets: [
      'Completed this app using Expo.cli, React Native, Redux, and Tailwind CSS',
      'Deployed app to Apple and Google stores',
    ],
  },
  {
    role: 'Full-Stack developer',
    company: 'Shoclef Corporation Limited',
    companylogo:
      'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/yt0mtfqcftf4fu6xqto3',
    date: 'May 2020 - Oct 2021',
    desc:
      'I worked as a Full stack developer. I completed the e-commerce web app and backend APIs.',
    descBullets: [
      'Developed the backend APIs using Node.js, Express.js, GraphQL and MongoDB',
      'Developed e-commerce web app using React, Next.js, Redux and Tailwind CSS',
      'Managed CI/CD',
    ],
  },
  {
    role: 'Full-Stack developer',
    company: 'Dirox – IT & Digital Solutions Maker',
    companylogo:
      'https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeWpoSEE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--85deb4661c693bf4c09c9da19b9c3f322e106826/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/LogoDirox_new.png',
    date: 'Jun 2014 - Jan 2020',
    desc:
      'I worked as a Full stack developer. I completed several projects at this company.',
    descBullets: [
      'Learned the programming and teamwork',
      'Developed many projects using Javascript, PHP, HTML, CSS, MySQL and etc',
      'Started my developer’s life',
    ],
  },
]

export const projects = [
  {
    name: 'Electrobuzz web app',
    desc: 'This web app is based on Angular v12 and Laravel.',
    // github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://www.electrobuzz.pro/',
    img: '/img/portfolio/electrobuzz.png',
  },
  {
    name: 'Makrverse mobile app',
    desc:
      'This mobile app is based on React Native, Expo Cli, Redux. It was deployed on Apple and Google stores.',
    link: 'https://apps.apple.com/my/app/makrverse/id1593041971',
    img: '/img/portfolio/makrverse.png',
  },
  {
    name: 'Shoclef e-commerce web app',
    desc:
      'This e-commerce web app is based on React.js, Next.js, Redux, Tailwind CSS, and HTML5/CSS3. And backend API is based on Node.js, Express.js, GraphQL and MongoDB.',
    link: 'http://shoclef.com/',
    img: '/img/portfolio/shoclef.png',
  },
]

export const feedbacks = [
  //   {
  //     name: 'John Smith',
  //     feedback:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  //   },
  //   {
  //     name: 'John Smith',
  //     feedback:
  //       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  //   },
]

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Daniel Jin',
  description:
    'A passionate Full Stack Web Developer with experience in Blockchain.',
  author: 'Daniel Jin',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-greencodedev.vercel.app',
  keywords: [
    'Daniel',
    'Daniel Jin',
    '@greencodedev',
    'greencodedev',
    'Portfolio',
    'Daniel Portfolio ',
    'Daniel Jin Portfolio',
  ],
}
