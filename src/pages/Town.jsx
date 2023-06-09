import styles from "../styles/Town.module.scss";
import { Link, Outlet } from "react-router-dom";
// import ProductDetail from "../pages/product/Productitem";
// import ProductList from "../pages/product/Productlist";

const Town = () => {
  return (
    <div className={styles.About}>
      <h1>town</h1>
      {/* <ProductDetail />
      <ProductList /> */}
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
        <li>
          <Link to="/town/:id/roma">roma</Link>
        </li>
        <li>
          <Link to="/town/:id/elcotillo">EL COTILLO</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Town;
