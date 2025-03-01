import React from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import Navbar from "../components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BariCup from "../assets/images/Bari_Cup.png";
import CeramicMug from "../assets/images/tom-crew-oiZAQvxTcYQ-unsplash.jpg";
import HandmadeCup from "../assets/images/tazza-paula-marrone-grigio_madeindesign_415599_original.jpg";
import RusticCup from "../assets/images/jocelyn-morales-85u5oGSBJ1s-unsplash.jpg";

const products = [
  { id: 1, image: BariCup, name: "Bari Cup", price: "Kr60.00" },
  { id: 2, image: CeramicMug, name: "Ceramic Mug", price: "Kr45.00" },
  { id: 3, image: HandmadeCup, name: "Handmade Cup", price: "Kr55.00" },
  { id: 4, image: RusticCup, name: "Rustic Cup", price: "Kr50.00" },
];

function Shop() {
  const navigate = useNavigate(); 

  return (
    <div className="bg-[#FAF5F0] min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        
        <div className="flex flex-col md:flex-row gap-8 mb-12">
        
          <div className="w-full md:w-1/2">
            <img
              src={BariCup}
              alt="Bari Cup"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">Vara produkt</h2>
              <p className="text-red-600 font-light">
                The terra collection is a tribute to the raw beauty of the natural world, crafted to bring the essence of untouched landscapes into your dining experience. Each piece in the collection, from plates to bowls and cup, is glazed and textured to reflect the earthy elements of rock, moss and pristine soil.
              </p>
            </div>

            <div>
              <p className="text-red-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque exercitationem, rerum cum reprehenderit delectus mollitia deserunt perspiciatis illo ab, non doloremque accusantium consequuntur vitae suscipit explicabo nihil! Eveniet perferendis iste dolorum, exercitationem facilis deserunt ipsum pariatur libero amet dolore cupiditate temporibus nisi provident molestias. Eligendi iusto error quo iste, consectetur possimus est distinctio architecto fugiat, animi beatae explicabo similique impedit porro ullam et corporis odit amet ad officiis ducimus! Recusandae doloribus eligendi libero commodi, ipsa cum odio quia sint exercitationem architecto blanditiis excepturi labore nulla ab similique asperiores culpa quis et consectetur! Unde voluptatem accusantium est inventore id nihil earum.
              </p>
            </div>
          </div>
        </div>

        {/* Griglia dei prodotti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-lg cursor-pointer" // Aggiungi cursor-pointer
              onClick={() => navigate(`/product/${product.id}`)} // Naviga alla pagina Product con l'ID del prodotto
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-lg font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;