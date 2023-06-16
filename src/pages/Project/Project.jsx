import classes from "./Project.module.css";
import { projects } from "../../utils/projectData";
import { Card, Footer } from "../../components/index";
const Project = () => {
  return (
    <>
      <div className={classes.projectPage}>
        <>
          <div className={classes.ProjectContainer}>
            <div className={classes.projectList}>
              {projects.map((project) => (
                <Card project={project} key={project.id} />
              ))}
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default Project;
