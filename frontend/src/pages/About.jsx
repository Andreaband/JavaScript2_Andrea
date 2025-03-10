import React from "react";
import NavBar from "../components/NavBar";

function About() {
  return (
    <div className="bg-[#FAF5F0] min-h-screen">
      <NavBar />

      {/* Contenitore principale */}
      <div className="container mx-auto px-6 py-16">

        {/* Sezione immagini e introduzione */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <img
            src="http://localhost:5001/images/NapoliCup.jpg"
            alt="Rustic Cup"
            className="w-full md:w-1/2 h-96 rounded-xl shadow-xl object-cover"
          />
          <div className="flex flex-col justify-center md:w-1/2 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-extrabold text-red-700 tracking-wide">About A.Otis</h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At A.Otis, we craft stories through ceramics, wood, and glass. Each piece is not just an object, 
              but a reflection of artistry, history, and timeless craftsmanship.
            </p>
          </div>
        </div>

        {/* Filosofia del Brand */}
        <div className="relative bg-gradient-to-r from-red-100 to-red-50 p-10 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-red-700 mb-4 uppercase tracking-wide">Our Philosophy</h3>
          <p className="text-gray-800 text-lg leading-relaxed">
            Each creation is a **celebration of imperfection**, a tribute to traditional craftsmanship where the 
            hand’s touch is evident in every curve and texture. We believe in **slow design, sustainability**, and 
            meaningful connections between objects and their owners.
          </p>
          <div className="absolute -top-8 right-8 text-6xl text-red-300 opacity-30 font-serif">“</div>
        </div>

        {/* Materiali Usati */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-red-700 mb-2">Ceramics</h4>
            <p className="text-gray-700">
              Hand-molded and kiln-fired, each piece carries the marks of its maker, blending raw elegance with durability.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-red-700 mb-2">Wood</h4>
            <p className="text-gray-700">
              Sustainably sourced and expertly carved, every wooden piece reveals unique grain patterns and warmth.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition">
            <h4 className="text-xl font-semibold text-red-700 mb-2">Glass</h4>
            <p className="text-gray-700">
              Blown and shaped with precision, our glassware combines delicate aesthetics with timeless functionality.
            </p>
          </div>
        </div>

        {/* Testimonianze Clienti */}
        <div className="mt-16 bg-white p-10 rounded-lg shadow-xl text-center">
          <h3 className="text-2xl font-bold text-red-700 mb-4">What Our Customers Say</h3>
          <p className="text-gray-800 text-lg italic"> 
            "Every piece feels personal and tells a story. The craftsmanship is beyond stunning."
          </p>
          <p className="text-red-600 font-semibold mt-2">- Emily R.</p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-red-700 mb-4">Discover Our Collection</h3>
          <p className="text-gray-700 text-lg mb-6">
            Explore our hand-crafted creations and find a piece that speaks to you.
          </p>
          <a href="/shop" className="px-8 py-3 bg-red-700 text-white font-semibold rounded-full shadow-md hover:bg-red-800 transition">
            Visit Our Shop
          </a>
        </div>

      </div>
    </div>
  );
}

export default About;
