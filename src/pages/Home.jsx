import styles from "../styles/Home.module.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.Home}>
      <h1>ciao baby, sono la home!</h1>
      <p>
        <Link to="/about">about</Link>
      </p>
      <p>
        <Link to="/activity/:id">activity</Link>
      </p>
      <p>
        <Link to="/town/:id">town</Link>
      </p>
      <ul>
        <li>
          <Link to="/town/id:/roma">ROMA</Link>
        </li>
        <li>
          <Link to="/town/id:/elcotillo">ELCOTILLO</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
      </ul>
    </div>
  );
}
