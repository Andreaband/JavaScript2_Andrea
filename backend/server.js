const express = require("express");
const betterSqlite3 = require("better-sqlite3");
const cors = require("cors");


const app = express();
const db = betterSqlite3("database.db");

// Middleware
app.use(cors());
app.use(express.json());

// Servire le immagini dal backend
const path = require("path");
const imagePath = path.join(__dirname, "images");
console.log("🔹 Servendo immagini da:", imagePath);
app.use("/images", express.static(imagePath));




// ✅ Creazione tabella prodotti (se non esiste)
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    dimensions TEXT,
    material TEXT,
    capacity TEXT,
    description TEXT
  )
`).run();

// ✅ Funzione per inserire prodotti solo se non esistono
function addProductIfNotExists(name, price, image, dimensions, material, capacity, description) {
  const checkProductExists = db.prepare("SELECT id FROM products WHERE name = ?");
  const existingProduct = checkProductExists.get(name);

  if (!existingProduct) { // ✅ Controllo più efficiente
    db.prepare(`
      INSERT INTO products (name, price, image, dimensions, material, capacity, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(name, price, image, dimensions, material, capacity, description);
    console.log(`✅ Prodotto aggiunto: ${name}`);
  } else {
    console.log(`⚠️ Il prodotto "${name}" esiste già, nessuna aggiunta.`);
  }
}

// ✅ Aggiunta prodotti di esempio (solo se non esistono)
const products = [
  {
    name: "Bari Cup",
    price: "Kr60.00",
    image: "Bari_Cup.png",
    dimensions: "90H x 80W DIA.",
    material: "CERAMIC WITH GLAZE",
    capacity: "220ML",
    description: "Designed and crafted in London. Handmade organic silhouette, ensuring no two pieces are alike."
  },
  {
    name: "Ceramic Mug",
    price: "Kr45.00",
    image: "tom-crew-oiZAQvxTcYQ-unsplash.jpg",
    dimensions: "100H x 85W DIA.",
    material: "HANDCRAFTED CERAMIC",
    capacity: "250ML",
    description: "Elegant design with a smooth finish, perfect for daily use."
  },
  {
    name: "Rustic Cup",
    price: "Kr50.00",
    image: "jocelyn-morales-85u5oGSBJ1s-unsplash.jpg",
    dimensions: "95H x 75W DIA.",
    material: "STONEWARE",
    capacity: "200ML",
    description: "Rustic and earthy tones, inspired by traditional pottery."
  }
];

// ✅ Inserire i prodotti nel database se non esistono già
products.forEach((product) => {
  addProductIfNotExists(
    product.name,
    product.price,
    product.image,
    product.dimensions,
    product.material,
    product.capacity,
    product.description
  );
});

// ✅ API per ottenere tutti i prodotti
app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

// ✅ API per ottenere un prodotto specifico
app.get("/api/products/:id", (req, res) => {
  const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Prodotto non trovato" });
  }
});

// ✅ Avvia il server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Server in esecuzione su http://localhost:${PORT}`);
});
