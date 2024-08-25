//import "./styles.css";
// src/index.js

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "./styles.css";

const contentLoaders = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function setActiveButton(button) {
  const buttons = document.querySelectorAll("nav button");
  buttons.forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");
}

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

function loadContent(contentLoader, tabName) {
  clearContent();
  const content = document.getElementById("content");
  content.appendChild(contentLoader());

  // Update URL and add to history
  history.pushState({ tab: tabName }, "", `/${tabName}`);

  // Update active button
  setActiveButton(document.getElementById(tabName));
}

// Event listeners for navigation buttons
function setupNavigation() {
  document.getElementById("home").addEventListener("click", () => loadContent(loadHome, "home"));
  document.getElementById("menu").addEventListener("click", () => loadContent(loadMenu, "menu"));
  document
    .getElementById("contact")
    .addEventListener("click", () => loadContent(loadContact, "contact"));
}

// Handle popstate (back/forward navigation)
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.tab) {
    const contentLoader = contentLoaders[event.state.tab];
    if (contentLoader) {
      loadContent(contentLoader, event.state.tab);
    }
  }
});

// Initial load based on URL
function initialLoad() {
  const path = window.location.pathname.replace(/^\//, "") || "home";
  const contentLoader = contentLoaders[path] || loadHome;
  loadContent(contentLoader, path);
}

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  initialLoad();
});
