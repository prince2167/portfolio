import classes from "./Card.module.css";
import { AiFillGithub, BsBoxArrowUpRight } from "../../assets/icons";
import {  Link } from "react-router-dom";
const Card = ({ project }) => {
  const {
    id,
    title,
    description,
    image,
    frameWork,
    css,
    liveLink,
    githubLink,
  } = project;
  return (
    <div className={classes.card}>
      <img src={image} />
      <div className={classes.details}>
        <strong>{title}</strong>
        <p>{description}</p>
        <div className={classes.aboutProject}>
          <span>{frameWork}</span>
          <span>{css}</span>
        </div>
        <div className={classes.linkGroup}>
          <Link to={githubLink} target="_blank">
            Code <AiFillGithub size="18" />
          </Link>
          <Link to={liveLink} target="_blank">
            Live Demo
            <BsBoxArrowUpRight size="15" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
