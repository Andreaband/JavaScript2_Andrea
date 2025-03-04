import React from "react";
import NavBar from "../components/NavBar";
// import Bild3 from "backend/images/Bild3.jpg";
// import CeramicMug from "backend/images/tom-crew-oiZAQvxTcYQ-unsplash.jpg";

function About() {
  return (
    <div className="bg-[#FAF5F0] min-h-screen">
      <NavBar />

      {/* Contenitore principale */}
      <div className="container mx-auto px-4 py-8">
        {/* Sezione immagini */}
        <div className="flex gap-4 mb-12 h-96"> 
          {/* Prima immagine */}
          <div className="w-1/2 h-full overflow-hidden rounded-lg shadow-lg">
          <img
              src="http://localhost:5001/images/NapoliCup.jpg"
              alt="Rustic Cup"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Seconda immagine */}
          <div className="w-1/2 h-full overflow-hidden rounded-lg shadow-lg">
          <img
              src="http://localhost:5001/images/tom-crew-oiZAQvxTcYQ-unsplash.jpg"
              alt="Rustic Cup"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Sezione testo */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-red-700 mb-6">ABOUT THE STUDIO</h2>
          <p className="text-red-600 text-lg">
           A.Otis, a studio at the forefront of artisan craftsmanship, is trasforming the way we perceive everyday objects. Specializing in ceramics, wood, and glass, their hand-made creations are more than functional pieces-they are invitations to reflect on the history and significance of the items we use and display in our homes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;