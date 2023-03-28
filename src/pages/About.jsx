import styles from "../styles/About.module.scss";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.About}>
      <h1>hello</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/me">Me</Link>
        </li>
        <li>
          <Link to="/activity/:id">Activity</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
