const express = require("express");
const betterSqlite3 = require("better-sqlite3"); // Usa better-sqlite3
const cors = require("cors");

const app = express();
const db = betterSqlite3("database.db"); // Crea o apri il database SQLite

// Middleware
app.use(cors());
app.use(express.json());

// Crea la tabella dei prodotti (se non esiste)
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL,
    dimensions TEXT,
    material TEXT,
    capacity TEXT,
    description TEXT
  )
`).run();

// Inserisci alcuni dati di esempio (opzionale)
const insertProduct = db.prepare(`
  INSERT INTO products (name, price, image, dimensions, material, capacity, description)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`);
insertProduct.run(
  "Bari Cup",
  "Kr60.00",
  "../assets/images/Bari_Cup.png",
  "90H x 80W DIA.",
  "CERAMIC WITH GLAZE",
  "CAPACITY: 220ML",
  "Designed and crafted in London. Features a handmade organic silhouette, ensuring no two pieces are alike."
);

// API per ottenere tutti i prodotti
app.get("/api/products", (req, res) => {
  const products = db.prepare("SELECT * FROM products").all();
  res.json(products);
});

// API per ottenere un prodotto specifico
app.get("/api/products/:id", (req, res) => {
  const product = db.prepare("SELECT * FROM products WHERE id = ?").get(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Prodotto non trovato" });
  }
});

// Avvia il server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});