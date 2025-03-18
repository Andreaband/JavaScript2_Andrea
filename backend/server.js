const express = require("express");
const betterSqlite3 = require("better-sqlite3");
const cors = require("cors");
const path = require("path");

const app = express();
const db = betterSqlite3("database.db");

// Middleware
app.use(cors());
app.use(express.json());

// Servire immagini statiche
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

// ✅ API per aggiungere un nuovo prodotto
app.post("/api/products", (req, res) => {
  const { name, price, image, dimensions, material, capacity, description } = req.body;

  if (!name || !price || !image || !description) {
    return res.status(400).json({ error: "Tutti i campi obbligatori devono essere compilati" });
  }

  try {
    const insert = db.prepare(`
      INSERT INTO products (name, price, image, dimensions, material, capacity, description)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const result = insert.run(name, price, image, dimensions, material, capacity, description);

    res.status(201).json({ id: result.lastInsertRowid, name, price, image, dimensions, material, capacity, description });
  } catch (error) {
    res.status(500).json({ error: "Errore nel salvataggio del prodotto" });
  }
});

// ✅ Avvia il server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`✅ Server in esecuzione su http://localhost:${PORT}`);
});
