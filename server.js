const express = require("express");
const app = express();
const port = 3000;

// Dados mockados de avaliações de livros
const mockReviews = [
  { id: 1, bookTitle: "Livro A", rating: 4, comment: "Gostei bastante!" },
  { id: 2, bookTitle: "Livro B", rating: 5, comment: "Excelente leitura." },
  { id: 3, bookTitle: "Livro C", rating: 3, comment: "Razoável." }
];

// Rota principal
app.get("/", (req, res) => {
  res.send("API de Avaliações de Livros - Backend Básico");
});

// Rota para obter todas as avaliações (mockadas)
app.get("/reviews", (req, res) => {
  res.json(mockReviews);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
