import React from "react";
// import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import Activity from "./pages/Activity";
import Town from "./pages/Town";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import ProductList from "./pages/product/Productlist";
import ProductDetail from "./pages/product/Productitem";
import "./index.css";
import Layout from "./layout/layout";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="me" element={<h1>Sono io!</h1>} />
        <Route path=":id" element={<h1>Tutti gli altri percorsi</h1>} />
      </Route>
      <Route path="activity/:id" element={<Activity />}>
        <Route path="/activity/:id/costo" element={<h1>600€</h1>} />
      </Route>
      <Route path="/products" element={<ProductList />} />
      {/* <Route path="/products/:id" element={<ProductDetail />} /> */}
      <Route path="/products/:name" element={<ProductDetail />} />
      <Route path="/town/:id" element={<Town />}>
        <Route
          path="/town/:id/roma"
          element={
            <img
              src="https://www.turismoroma.it/sites/default/files/Roma%20in%20breve.jpg"
              alt="Girl in a jacket"
              width="400"
              height="300"
            ></img>
          }
        />
        <Route
          path="/town/:id/elcotillo"
          element={
            <img
              src="https://www.unanimainviaggio.it/wp-content/uploads/2019/03/DSCN0711-Medium.jpg"
              alt="elcotillo"
              width="400"
              height="300"
            ></img>
          }
        />
      </Route>
      <Route path="something/:id" element={<h1>something</h1>} />
    </Route>
  )
);

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  // ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </React.StrictMode>
);
