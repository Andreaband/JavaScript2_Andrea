import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/background.png"
function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="flex items-center justify-center min-h-screen bg-cover bg-center cursor-pointer"
      onClick={() => navigate("/shop")}
    >
      <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
        Välkommen
      </h1>
    </div>
  );
}

export default Home;