import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import {
  SiGmail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
} from "../../assets/icons";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.contacts}>
        <Link>
          <SiGmail size="25" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/prince-kumar-singh-6893a41a1/"
          target="_blank"
        >
          <AiFillLinkedin size="25" />
        </Link>
        <Link to="https://github.com/prince2167" target="_blank">
          <AiFillGithub size="25" />
        </Link>
        <Link to="https://twitter.com/me_princesingh" target="_blank">
          <AiFillTwitterSquare size="25" />
        </Link>
      </div>
      <div>
        <h4>Prince@2023,All right reserved </h4>
      </div>
    </div>
  );
};

export default Footer;
