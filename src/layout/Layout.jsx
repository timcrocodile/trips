import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
