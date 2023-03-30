import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //   const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch(
        "https://failteireland.azure-api.net/opendata-api/v1/accommodation?"
      );
      const data = await response.json();
      //   setProducts(data);
      setProducts(data.results);
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.productlist}>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
      <h1>Hotels in Irlanda</h1>
      <ul className={styles.names}>
        {products.map((product, index) => (
          //   <li key={product.id}>
          <li key={index}>
            {/* <Link to={`/products/${product.id}`}>{product.title}</Link> */}

            {/* <Link to={`/products/${product.name}`}>{product.name}</Link> */}
            <Link to={`/products/${encodeURIComponent(product.name)}`}>
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
