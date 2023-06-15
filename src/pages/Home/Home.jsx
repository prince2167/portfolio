import classes from "./Home.module.css";
import { AiFillLinkedin, AiFillGithub } from "../../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { portfolio, project, blog } from "../../assets/images/index";
import { BsBoxArrowUpRight } from "../../assets/icons";
import { Footer } from "../../components/index";
import {
  html,
  css,
  javascript,
  react,
  git,
  tailwind,
} from "../../assets/svg/index";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.detailsWrapper}>
          <div className={classes.detailsContainer}>
            <div className={classes.details}>
              <h1>Front-End React Developer 👋🏻</h1>
              <p>
                Hi, I'm Prince Kumar Singh. A passionate Front-end React
                Developer based in New Delhi, India.📍
              </p>
              <div className={classes.contactLinks}>
                <Link
                  to="https://www.linkedin.com/in/prince-kumar-singh-6893a41a1/"
                  target="_blank"
                >
                  <AiFillLinkedin size="25" />
                </Link>
                <Link to="https://github.com/prince2167" target="_blank">
                  <AiFillGithub size="25" />
                </Link>
              </div>
            </div>
            <img src={portfolio} alt="" />
          </div>

          <div className={classes.stackContainer}>
            <p>Tech Stack</p>
            <div className={classes.techStack}>
              <img src={html} alt="" />
              <img src={css} alt="" />
              <img src={tailwind} alt="" />
              <img src={javascript} alt="" />
              <img src={react} alt="" />
              <img src={git} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.projectCard}>
        <>
          <div className={classes.projectContainer}>
            <img src={project} alt="" />
            <div className={classes.projectDetails}>
              <strong>PROJECT</strong>
              <p>
                Each project is a unique piece of development. All this projects
                are fullstack and fully functional. These projects are
                maintaining responsiveness which provides a smooth user
                experience.
              </p>
              <button onClick={() => navigate("/project")}>
                Project <BsBoxArrowUpRight />
              </button>
            </div>
          </div>
        </>
      </div>

      <div className={classes.blogCard}>
        <>
          <div className={classes.blogContainer}>
            <img src={blog} alt="" />
            <div className={classes.blogDetails}>
              <strong>BLOG</strong>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
                quasi, inventore exercitationem dicta est, ut iusto minima
                voluptatum nobis dolore ullam repellendus nulla quod odio? Quos
                eveniet asperiores ut omnis?
              </p>
              <button onClick={() => navigate("/blog")}>
                Blog <BsBoxArrowUpRight />
              </button>
            </div>
          </div>
        </>
      </div>

      <Footer />
    </>
  );
};

export default Home;
