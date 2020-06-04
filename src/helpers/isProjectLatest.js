import projects from "./data";
const isProjectLatest = () => {
  console.log(projects);
  let filteredList = projects.filter((project) => project.latest === true);
  return filteredList;
};
export default isProjectLatest;
