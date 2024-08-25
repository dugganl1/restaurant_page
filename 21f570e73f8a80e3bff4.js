//import "./styles.css";
// src/index.js

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";

function setActiveButton(button) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadContent(contentLoader) {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(contentLoader());
}

document.addEventListener("DOMContentLoaded", () => {
  // Load home page by default
  loadContent(loadHome);
  setActiveButton(document.getElementById("home"));

  // Add event listeners to buttons
  document.getElementById("home").addEventListener("click", (e) => {
    loadContent(loadHome);
    setActiveButton(e.target);
  });

  document.getElementById("menu").addEventListener("click", (e) => {
    loadContent(loadMenu);
    setActiveButton(e.target);
  });

  document.getElementById("contact").addEventListener("click", (e) => {
    loadContent(loadContact);
    setActiveButton(e.target);
  });
});
