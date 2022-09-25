export const productive = [
  {
    id: 1,
    status: "active",
    title: "Productive",
    img: "./assets/portfolio-images/productive-img.PNG",
    githubLink: "https://github.com/ashtagging/productive",
    websiteLink: "https://productive-react-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Productivity-App-f2de6b0493f844edabee398555cdebd1",
    about:
      "This application takes 3 commonly built  applications a Calculator, Pomodoro Timer and To do list and combines them all into one application. React was predominately used along with React Router DOM to navigate through the pages with Sass (scss) styling the application",
    challenges:
      "The main challanges from this project came from the pomodoro timer notably getting the sound to work when the timer reached 00:00 and letting the user to set  different break and start times",
    languages1: "React",
    languages2: "Sass",
    languages3: "HTML",
    packages1: "react-router-dom",
    packages2: "uniqid",
    packages3: "react-circular-progressbar",
  },
];

export const weatherApp = [
  {
    id: 2,
    status: "active",
    title: "Weather App",
    img: "./assets/portfolio-images/weather-app-img.PNG",
    githubLink: "https://github.com/ashtagging/weather-app",
    websiteLink: "https://weatherdata-react-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Weather-API-c84d5037abb347d58628a8ff58d098e6",
    about:
      "This application uses axios to make an API call to the open weather API in order to retrieve information regarding the weather of a specified location. The unsplashed API is aditionally used in order to generate a background image related to this location.",
    challenges:
      "The main issue for myself when producing this project was trying to get the backend server to work so the API keys were not displayed on the front end. This was eventually achieved using express, dotenv, cors, axios and then searching on stack overflow when stuck.",
    languages1: "React",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "express",
    packages2: "axios",
    packages3: "dotenv",
  },
];

export const wardle = [
  {
    id: 3,
    status: "active",
    title: "Wardle",
    img: "./assets/portfolio-images/wardle-img.PNG",
    githubLink: "https://github.com/ashtagging/wardle",
    websiteLink: "https://wardle-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/WARDLE-0fbfc20d0e704686a0e9d46a1badd942",
    about:
      "Inspired by the viral game Wordle, this application is a coded clone that utilises a dictionary API and a random word API in order to generate a random word and check that the guessed words are valid words.",
    challenges:
      "The hardest parts to code were the wordGuess function which checks the word against the randomly generated word from the API and displays the tiles colours corresponding to their positions and alters the colours on the keyboard.",
    languages1: "Javascript",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "express",
    packages2: "axios",
    packages3: "dotenv",
  },
];

export const feedbackRating = [
  {
    id: 4,
    status: "active",
    title: "Feedback Rating",
    img: "./assets/portfolio-images/rating-app-img.PNG",
    githubLink: "https://github.com/ashtagging/interactive-rating-component",
    websiteLink: "https://interactive-rating-react-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Interactive-Rating-Component-8eb345c92bb04c82bb65de916b7e0226",
    about:
      "After learning about the frontend mentor coding challenges (https://www.frontendmentor.io/), I decided to attempt one of them from scratch.I opted to use React and react-router-dom to navigate between the pages which also allowed me to use state so that only one of each of the rating numbers could be selected at any given time.",
    challenges:
      "The main issue I had with this project was coding the project so that only one of the numbers could be selected and highlighted at any given time. I fixed this by using an object instead of a variable for the state with a variable inside that changed based on which number had been selected.",
    languages1: "React",
    languages2: "CSS",
    languages3: "HTML",
    packages1: "react-router-dom",
  },
];

export const readBay = [
  {
    id: 5,
    status: "inactive",
    title: "ReadBay",
    img: "https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900",
    githubLink: "https://github.com/ashtagging/Productivity",
    websiteLink: "https://productive-react-app.herokuapp.com/",
    notionLink:
      "https://stealth-pawpaw-91a.notion.site/Productivity-App-f2de6b0493f844edabee398555cdebd1",
    about:
      "This application takes 3 commonly built  applications a Calculator, Pomodoro Timer and To do list and combines them all into one application. Reaact was predominately used along with React Router DOM to navigate through the pages with Sass (scss) styling the application",
    challenges:
      "The main challanges from this project came from the pomodoro timer notably getting the sound to work when the timer reached 00:00 and letting the user to set  different break and start times",
    languages1: "C#",
    languages2: ".NET",
    languages3: "SQL",
    packages1: "react-router-dom",
    packages2: "uniqid",
    packages3: "react-circular-progressbar",
  },
];
