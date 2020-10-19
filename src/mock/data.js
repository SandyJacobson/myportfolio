import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sandy Jacobson', // e.g: 'Name | Developer'
  lang: 'En', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Sandy Jacobson',
  subtitle: 'I am a Full Stack Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'ProfilePic.jpeg',
  paragraphOne:
    "When I lost my job in March of 2020 due to Covid-19, I knew something had to change. I had been complacent for far too long and hadn't really challenged myself in a very long time.",
  paragraphTwo:
    "I'm not the type to stay stagnent and thanks to General Assembley, I was able to find my true calling as a Developer. I am finally passionate about what I'm doing, I am challenging myself everyday finally feel fulfilled.",
  paragraphThree:
    'My goal is to keep growing as a developer, keep developing my skills and work on meaningful projects that help make people happier.',
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
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
