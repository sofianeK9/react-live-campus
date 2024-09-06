const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Modèle d'article
const articleSchema = new mongoose.Schema({
  title: String,
  author: String,
  email: String,
  published_date: { type: Date, default: Date.now },
  content: String,
  tags: [String]
});

const Article = mongoose.model("Article", articleSchema);

// Endpoint pour récupérer tous les articles
app.get("/api/articles", async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
