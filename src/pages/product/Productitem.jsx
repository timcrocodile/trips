import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  //   const [product, setProduct] = useState({});
  const [product, setProduct] = useState(null);
  //   const { id } = useParams();
  const { name } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      //   const response = await fetch(
      //     `https://failteireland.azure-api.net/opendata-api/v1/accommodation?$filter=name%20eq%20%27${name}`
      //   );
      const response = await fetch(
        `https://failteireland.azure-api.net/opendata-api/v1/accommodation?$filter=name%20eq%20%27${encodeURIComponent(
          name
        )}%27`
      );

      const data = await response.json();
      //   setProduct(data);
      setProduct(data.results[0]);
    };

    fetchProduct();
    //   }, [id]);
  }, [name]);

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">products</Link>
        </li>
      </ul>
      {product ? (
        <>
          <h1>{product.name || "Nome non disponibile"}</h1>
          <p>{product.url || "Descrizione non disponibile"}</p>
        </>
      ) : (
        <p>Caricamento...</p>
      )}
      {/* <h1>{product.name}</h1>
      <h1>{product.url}</h1> */}
      {/* <h1>{product.title}</h1> */}
      {/* <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Prezzo: {product.price} &euro;</p>
      <p>Categoria: {product.category}</p> */}
    </div>
  );
};

export default ProductDetail;
