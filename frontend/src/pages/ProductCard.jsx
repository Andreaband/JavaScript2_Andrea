import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

function ProductCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadingRelated, setLoadingRelated] = useState(true);
  const [errorRelated, setErrorRelated] = useState(null);

  // Carica il prodotto selezionato
  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  // Carica altri prodotti correlati
  useEffect(() => {
    fetch(`http://localhost:5001/api/products`)
      .then((response) => response.json())
      .then((data) => {
        // Filtra i prodotti per non includere quello attuale
        const filteredProducts = data.filter((item) => item.id !== id);
        setRelatedProducts(filteredProducts);
        setLoadingRelated(false);
      })
      .catch((error) => {
        setErrorRelated(error.message);
        setLoadingRelated(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

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
            <Button text="ADD TO CART" onClick={() => console.log("Aggiunto al carrello:", product)} />
          </div>
        </div>
      </div>

      {/* Sezione prodotti correlati */}
      <div className="container mx-auto px-8 py-12 bg-[#FAF5F0]">
        <h3 className="text-2xl font-semibold text-red-700 mb-6">You may also like</h3>
        <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500">
          {loadingRelated ? (
            <p className="text-center text-red-700 font-semibold">Loading products...</p>
          ) : errorRelated ? (
            <p className="text-center text-red-700 font-semibold">{errorRelated}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="p-4 cursor-pointer flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  <img
                    src={relatedProduct.image ? `http://localhost:5001/images/${relatedProduct.image}` : "https://via.placeholder.com/300"}
                    alt={relatedProduct.name}
                    className="w-full h-96 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300";
                    }}
                  />
                  <h2 className="text-xl font-semibold mt-2 text-red-700">{relatedProduct.name}</h2>
                  <p className="text-lg font-bold text-red-600">{relatedProduct.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
