import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sandy Jacobson', // e.g: 'Name | Developer'
  lang: 'En', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  // title: 'Hi, my name is ',
  name: 'Sandy Jacobson',
  subtitle: 'Full Stack Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'ProfilePic.jpeg',
  paragraphOne:
    "When I began my career as a technical recruiter, that was my first real taste of engineering. Not many other recuiters wanted to touch the 'smart' roles as they were referred to. But I was drawn to them. I wanted the challenge and though my knowledge started with buzz words, I quickly picked up concepts that would ultimately lead me to where I am today, a Software Engineer.",
  paragraphTwo:
    "Thanks to General Assembly, I was able to find my true calling as a Developer. I am finally passionate about what I'm doing, I am challenging myself everyday, and finally feel fulfilled.",
  paragraphThree:
    'My goal is to keep growing as a developer, keep developing my skills, and work on meaningful projects that help make people happier.',
  resume: 'https://docs.google.com/document/d/1PpFk00qp6A6Hc9lmSAtpuud09yJwd5LwdaR8TNbXF5U/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Beergle.jpg',
    title: 'Beergle',
    info:
      'My first project as a Software Engineer, built using Javascript, HTML5, CSS and styled with Flexbox.',
    info2:
      "I incorporated BrewDog Brewery's third-party API - PunkApi to build a search engine for BrewDog's Beers.",
    url: 'https://sandyjacobson.github.io/Beergle/',
    repo: 'https://github.com/SandyJacobson/Beergle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ManyThanks.jpg',
    title: 'Many Thanks',
    info:
      'Built with React, Javascript and CSS. Deployed via Netlify and integrated with Airtable, I created a Full Stack Gratitude Journal with the ability to create, render, edit and delete entries.',
    info2:
      'In a world where everything we could ever want it only one click away, I thought it would be nice to have an app where people can take a step back and think about those in their lives who deserve a thanks!',
    url: 'https://many-thanks.netlify.app',
    repo: 'https://github.com/SandyJacobson/Many-Thanks', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Sportikus.jpg',
    title: 'Sportikus',
    info:
      'A joint project between Software Engineering Immersive students and UXDI students, of which I was team lead. We built a Full Stack Sports Apparel Ecommerce store using React frontend with Express framework for the backend and MongoDB. ',
    info2: '',
    url: 'sportikus.netlify.app/',
    repo: 'https://github.com/SandyJacobson/sportikus', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'footballbros.jpg',
    title: 'Football Bros',
    info: 'My final project. A Full Stack Fantasy Football deticated to my league of 15 years.',
    info2:
      "Built with React frontend as well as CSS. This app used Ruby on Rails as it's backend framework.",
    url: 'https://footballbros.netlify.app/',
    repo: 'https://github.com/SandyJacobson/footballbros', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sandy.david.jacobson@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sandy-jacobson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SandyJacobson',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
