import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [material, setMaterial] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name, price, image, dimensions, material, capacity, description };

    try {
      const response = await fetch("http://localhost:5001/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        setMessage("✅ Product added successfully!");
        setName("");
        setPrice("");
        setImage("");
        setDimensions("");
        setMaterial("");
        setCapacity("");
        setDescription("");
      } else {
        setMessage("❌ Error adding product.");
      }
    } catch (error) {
      setMessage("❌ Network error, please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a new product</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Dimensions" value={dimensions} onChange={(e) => setDimensions(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Material" value={material} onChange={(e) => setMaterial(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required className="w-full mb-2 p-2 border rounded"></textarea>
        <button type="submit" className="w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition">Add product</button>
      </form>
    </div>
  );
}

export default AddProduct;
