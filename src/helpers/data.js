import elaskitchen from "../images/elaskitchen.png";
import wildams from "../images/bookies.png";
import elascasino from "../images/bookies.png";
import oneliner from "../images/oneliner.png";
import codewomen from "../images/bookies.png";
import bookies from "../images/bookies.png";
import coolwall from "../images/bookies.png";
let pink = "#cc6666";
let mustard = "#ffb000";
let blue = "#004fe7";
let blue_green = "#00b3b3";
let red = "#ff0013";
const projects = [
  {
    title: "Cool Wall",
    specs: "lorem Ipsum",
    url: "https://github.com/software-bastards/charlies-bastards-cool-wall",
    date: "31-1-2020",
    client: "Software Bastards",
    product: "Web App",
    usedTechnologies: "React HTML CSS Redux thunk Nodejs mySQL",
    latest: true,
    image: coolwall,
    left: mustard,
    right: blue_green,
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
    left: blue,
    right: red,
  },
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
    left: mustard,
    right: pink,
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
    left: blue,
    right: red,
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
    left: blue,
    right: blue_green,
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
    left: red,
    right: blue,
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
    left: blue,
    right: pink,
  },
];

export default projects;
