import styles from "../styles/Activity.module.scss";
import { Link, Outlet } from "react-router-dom";

const Activity = () => {
  return (
    <div className={styles.Activity}>
      <h1>activity</h1>
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
          <Link to="/activity/:id/costo">
            QUANTO COSTA FARE UN ATTTIVITà??{" "}
          </Link>
        </li>
        <li>
          <Link to="/activity/:id">CHIUDI LA TENDIDA DEL PREZZO!</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Activity;
