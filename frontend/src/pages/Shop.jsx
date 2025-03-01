import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import BariCup from "../assets/images/Bari_Cup.png";
import CeramicMug from "../assets/images/tom-crew-oiZAQvxTcYQ-unsplash.jpg";
import HandmadeCup from "../assets/images/tazza-paula-marrone-grigio_madeindesign_415599_original.jpg";
import RusticCup from "../assets/images/jocelyn-morales-85u5oGSBJ1s-unsplash.jpg";
import NapoliCup from "../assets/images/Napolicup.jpg";
import MilanoCup from "../assets/images/Milanocup.jpg";


const products = [
  { id: 1, image: BariCup, name: "Bari Cup", price: "Kr60.00" },
  { id: 2, image: CeramicMug, name: "Ceramic Mug", price: "Kr45.00" },
  { id: 3, image: HandmadeCup, name: "Handmade Cup", price: "Kr55.00" },
  { id: 4, image: RusticCup, name: "Rustic Cup", price: "Kr50.00" },
  { id: 5, image: NapoliCup, name: "NapoliCup", price: "Kr70.00" },
  { id: 6, image: MilanoCup, name: "MilanoCup", price: "Kr80.00" },
];


function Shop() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF5F0] min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <img src={BariCup} alt="Bari Cup" className="w-full h-auto rounded-lg" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-12">
            <div>
              <h2 className="text-2xl font-bold text-red-700 mb-4 text-center">Vara produkt</h2>
              <p className="text-red-600 font-light">
                The terra collection is a tribute to the raw beauty of the natural world, crafted to bring the essence of untouched landscapes into your dining experience. Each piece in the collection, from plates to bowls and cups, is glazed and textured to reflect the earthy elements of rock, moss, and pristine soil.
              </p>
            </div>

            <div>
              <p className="text-red-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem, rerum cum reprehenderit delectus mollitia deserunt perspiciatis illo ab, non doloremque accusantium consequuntur vitae suscipit explicabo nihil! Eveniet perferendis iste dolorum, exercitationem facilis deserunt ipsum pariatur libero amet dolore cupiditate temporibus nisi provident molestias.
              </p>
            </div>
          </div>
        </div>

        {/* Sezione dei prodotti SCORREVOLE IN VERTICALE */}
        <div className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
            {products.map((product) => (
              <div
              key={product.id}
              className="p-4 cursor-pointer flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold mt-2 text-red-700">{product.name}</h2>
              <p className="text-lg font-bold text-red-600">{product.price}</p>
            </div>
            
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Shop;
