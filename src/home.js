// src/home.js

export function loadHome() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Welcome to Gourmet Delights";
  content.appendChild(title);

  const image = document.createElement("img");
  image.src = "https://placehold.co/600x400";
  image.alt = "Restaurant placeholder image";
  content.appendChild(image);

  const paragraphs = [
    "Experience culinary excellence at Gourmet Delights, where every dish is a masterpiece crafted with passion and precision.",
    "Our award-winning chefs use only the finest, locally-sourced ingredients to create unforgettable flavors that will tantalize your taste buds and leave you craving more.",
    "Join us for an extraordinary dining experience in our elegant, warm atmosphere. Whether it's a romantic dinner for two or a celebration with friends, Gourmet Delights is the perfect destination for food lovers.",
  ];

  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    content.appendChild(p);
  });

  return content;
}
