import projects from "./data";
const isProjectLatest = () => {
  let filteredList = projects.filter((project) => project.latest === true);
  return filteredList;
};
export default isProjectLatest;
