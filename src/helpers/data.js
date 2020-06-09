import elaskitchen from "../images/elaskitchen.png";
import wildams from "../images/wildamsterdam.png";
import elascasino from "../images/elascasino.png";
import oneliner from "../images/oneliner.png";
import codewomen from "../images/codewoman.png";
import bookies from "../images/bookies.png";
import coolwall from "../images/coolwall.png";
let pink = "#cc6666";
let lightpink = " #e6b3b3";
let mustard = "#ffb000";
let lightmustard = " #ffe7b3";
let blue = "#004fe7";
let lightblue = "#669cff";
let blue_green = "#00b3b3";
let lightblue_green = "#80ffff";
let red = "#ff0013";
let lightred = "#ff8088";
const projects = [
  {
    title: "One Liners",
    specs:
      "Oneliners is a full stack app where users can submit oneliners. Users can also vote for their favourite vote. Oneliners is deployed using Heroku.",
    url: " https://oneliners-fullstack.herokuapp.com/",
    date: "31-1-2020",
    client: "Personal",
    product: "Web App",
    usedTechnologies: "React HTML CSS Javascript",
    latest: true,
    image: oneliner,
    left_light: mustard,
    right_light: pink,
    left_dark: lightmustard,
    right_dark: lightpink,
  },
  {
    title: "Cool Wall",
    specs:
      "Coolwall is a WebApp built for Software Bastards. It is a voting web app where users can vote for technologies to be cool, uncool or subzero. Coolwall also has an admin dashbord page which can be accessed using a secured login. This app is in its final stages of completion and is yet to be deployed.",
    url: "https://github.com/software-bastards/charlies-bastards-cool-wall",
    date: "31-1-2020",
    client: "Software Bastards",
    product: "Web App",
    usedTechnologies: "React HTML CSS Redux thunk Nodejs mySQL",
    latest: true,
    image: coolwall,
    left_light: blue,
    right_light: red,
    left_dark: lightblue,
    right_dark: lightred,
  },
  {
    title: "Code Women",
    specs:
      "Code Women was built for WCS Amsterdam Hackathon. It uses the super hero API. Users get to choose their super hero to play the game. Each correct answer fetches an ally. ",
    url: "https://hackathon-codewoman.netlify.app",
    date: "31-1-2020",
    client: "Hackathon",
    product: "Web App",
    usedTechnologies: "React HTML CSS Javascript",
    latest: false,
    image: codewomen,
    left_light: mustard,
    right_light: blue_green,
    left_dark: lightmustard,
    right_dark: lightblue_green,
  },
  {
    title: "Ela's Kitchen",
    specs:
      "Ela's Kitchen is a recipe finder. The user can select the ingredients through a series of questions and is given a recipe link at the end. Ela's Kitchen uses an API to find the recipe.",
    url: "https://elas-kitchen.netlify.app",
    date: "31-1-2020",
    client: "Personal",
    product: "Web App",
    usedTechnologies: "React HTML CSS Javascript",
    latest: true,
    image: elaskitchen,
    left_light: blue,
    right_light: blue_green,
    left_dark: lightblue,
    right_dark: lightblue_green,
  },
  {
    title: "Ela's Casino",
    specs:
      "Ela's Casino is a cards game called snap. User can choose the difficulty level and the size of the deck in settings. Ela's Casino is built using a cards API.",
    url: "https://elas-casino.netlify.app",
    date: "31-1-2020",
    client: "Personal",
    product: "Web App",
    usedTechnologies: "React HTML CSS Javascript",
    latest: true,
    image: elascasino,
    left_light: red,
    right_light: blue,
    left_dark: lightred,
    right_dark: lightblue,
  },
  {
    title: "Bookies",
    specs:
      "Bookies is an e-commerce web app built for a Hackathon with WCS Amsterdam and Dublin in collaboration with Ask Phill (Amsterdam based ecommerce agency). It is built using React and Redux.",
    url: "https://dubsterdam-hackathon-bookies.netlify.app",
    date: "31-1-2020",
    client: "Hackathon",
    product: "Web App",
    usedTechnologies: "React Redux thunk HTML CSS Javascript",
    latest: true,
    image: bookies,
    left_light: blue,
    right_light: pink,
    left_dark: lightblue,
    right_dark: lightpink,
  },
  {
    title: "Wild Amsterdam",
    specs:
      "Wild Amsterdam is a static HTML page travel photo blog. It is built using HTML and bootstrap.",
    url: "https://anuradhasivasubramanian.github.io/Wild-Amsterdam/index.html",
    date: "31-1-2020",
    client: "Personal",
    product: "Static HTML Page",
    usedTechnologies: "HTML CSS Javascript Bootstrap",
    latest: true,
    image: wildams,
    left_light: blue,
    right_light: red,
    left_dark: lightblue,
    right_dark: lightred,
  },
];

export default projects;
