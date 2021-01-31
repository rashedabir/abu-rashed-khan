import library from "../assets/projects_images/library.png";
import cgpa from "../assets/projects_images/cgpa.png";
import party from "../assets/projects_images/party.png";
import movieapp from "../assets/projects_images/movieapp.png";
import covid from "../assets/projects_images/covid.png";
import weshop from "../assets/projects_images/weshop.png";

const Data = [
  {
    id: 1,
    name: "Library Management System",
    image: library,
    deployed_url: "https://github.com/rashed2155/Library_management_oracle",
    github_url: "https://github.com/rashed2155/Library_management_oracle",
    category: ["java", "oracle"],
  },
  {
    id: 2,
    name: "Party Management System",
    image: party,
    deployed_url: "https://party-managed.herokuapp.com/",
    github_url: "https://github.com/rashedabir/party-managed",
    category: ["react.js", "mongodb", "express.js", "node.js"],
  },
  {
    id: 3,
    name: "CGPA Calculator",
    image: cgpa,
    deployed_url: "https://rashedabir.github.io/cgpa_calculator/",
    github_url: "https://github.com/rashedabir/cgpa_calculator/tree/master",
    category: ["html", "css", "javascript"],
  },
  {
    id: 4,
    name: "Movie Flex",
    image: movieapp,
    deployed_url: "https://rashedabir.github.io/movie-flex/",
    github_url: "https://github.com/rashedabir/movie-flex/tree/master",
    category: ["react.js", "node.js"],
  },
  {
    id: 5,
    name: "Corona Virus Report",
    image: covid,
    deployed_url: "https://rashedabir.github.io/covid19-report/",
    github_url: "https://github.com/rashedabir/covid19-report/tree/master",
    category: ["react.js", "node.js"],
  },
  {
    id: 6,
    name: "Wee Shop",
    image: weshop,
    deployed_url: "https://weeshop.netlify.app/",
    github_url: "https://github.com/rashedabir/we-shop",
    category: ["react.js", "node.js"],
  },
];

export default Data;
