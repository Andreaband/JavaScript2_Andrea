import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

function Shop() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Error retrieving data");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setError("Error loading products:");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#FAF5F0] min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <img
              src="http://localhost:5001/images/jocelyn-morales-85u5oGSBJ1s-unsplash.jpg"
              alt="Rustic Cup"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">Vara produkt</h2>
              <p className=" text-gray-700 font-light">
                The terra collection is a tribute to the raw beauty of the natural world, crafted to bring the essence of untouched landscapes into your dining experience.
              </p>
            </div>
            <div>
              <p className=" text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ducimus provident molestiae praesentium obcaecati assumenda doloribus perferendis quos cum suscipit numquam et odit, eius consequuntur soluta ipsa quibusdam! Non, sunt quod! Tenetur nisi repellendus ipsa qui cumque hic laudantium quas sunt quisquam? Dolores, harum molestias cumque fuga esse tempore aliquam expedita voluptate dignissimos iure magni at ratione fugit accusamus enim error quo ipsam optio ullam neque voluptatem. Aliquid quas distinctio quam atque sapiente aspernatur a! Maiores sequi quas mollitia delectus.
              </p>
            </div>
            <div>
              <p className=" text-gray-700 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi et alias totam id delectus dolore neque dolorem cum tempore omnis odio adipisci possimus commodi natus, corporis illo earum repudiandae! Corporis animi at consequatur consequuntur magnam dolorem necessitatibus, ea cum. Quod, non porro repellat perspiciatis in qui asperiores placeat. Libero repudiandae incidunt quasi! Eveniet, dolorem cumque. Fugiat quisquam error doloribus sed ab a fugit officiis. Accusamus fugiat, placeat perspiciatis corporis iure esse. Quis nihil, quam, maiores id laborum illo eveniet, at provident magnam doloribus culpa aliquam dolorem saepe expedita totam? Sint placeat error quam nihil dolorum exercitationem vitae dolores rem voluptates numquam, dolore alias et soluta? 
              </p>
            </div>
          </div>
        </div>

        {/* Sezione dei prodotti */}
        <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500">
          {loading ? (
            <p className="text-center text-red-700 font-semibold">Loading products...</p>
          ) : error ? (
            <p className="text-center text-red-700 font-semibold">{error}</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 cursor-pointer flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.image ? `http://localhost:5001/images/${product.image}` : "https://via.placeholder.com/300"}
                    alt={product.name}
                    className="w-full h-96 object-cover rounded-md"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300"; // Immagine di fallback
                    }}
                  />
                  <h2 className="text-xl font-semibold mt-2 text-red-700">{product.name}</h2>
                  <p className="text-lg font-bold text-red-600">{product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
