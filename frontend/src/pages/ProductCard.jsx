import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`); 
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error", error);
        setError(error.message); // Imposta il messaggio di errore
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Prodoct not found</div>;

  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row items-center justify-between bg-[#FAF5F0] min-h-screen w-full px-8 py-16">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
             src={product.image ? `http://localhost:5001/images/${product.image}` : "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-80 md:w-96 rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-semibold text-red-700">{product.name}</h2>
          <p className="text-xl text-red-700 mt-2">{product.price}</p>
          <p className="mt-4 text-red-600">
            {product.dimensions} <br />
            {product.material} <br />
            {product.capacity}
          </p>
          <p className="mt-4 text-red-600">{product.description}</p>
          <div className="mt-8">
            <Button text="ADD TO CART" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;