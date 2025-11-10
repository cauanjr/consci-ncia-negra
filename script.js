// Alternar tema claro/escuro
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Modo Claro";
  } else {
    themeToggle.textContent = "🌙 Modo Escuro";
  }
});

// Mensagens aleatórias para reflexão
const quotes = [
  "O racismo não é uma opinião, é uma violência.",
  "A cor da pele nunca definiu o caráter de ninguém.",
  "A igualdade começa com respeito.",
  "O silêncio diante do racismo também é cumplicidade.",
  "Esporte é união, não divisão."
];

const quoteButton = document.getElementById("quoteButton");
const quoteDisplay = document.getElementById("quoteDisplay");

quoteButton.addEventListener("click", () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteDisplay.textContent = randomQuote;
});
