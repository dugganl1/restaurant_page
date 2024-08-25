/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\n// src/contact.js\r\n\r\nfunction loadContact() {\r\n  const content = document.createElement(\"div\");\r\n  content.classList.add(\"tab-content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Contact Us\";\r\n  content.appendChild(title);\r\n\r\n  const contactInfo = document.createElement(\"div\");\r\n  contactInfo.innerHTML = `\r\n      <p><strong>Address:</strong> 123 Gourmet Street, Foodville, FC 12345</p>\r\n      <p><strong>Phone:</strong> (555) 123-4567</p>\r\n      <p><strong>Email:</strong> info@gourmetdelights.com</p>\r\n      <p><strong>Hours:</strong><br>\r\n      Monday - Thursday: 11am - 9pm<br>\r\n      Friday - Saturday: 11am - 11pm<br>\r\n      Sunday: 10am - 8pm</p>\r\n    `;\r\n\r\n  content.appendChild(contactInfo);\r\n\r\n  return content;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n// src/home.js\r\n\r\nfunction loadHome() {\r\n  const content = document.createElement(\"div\");\r\n  content.classList.add(\"tab-content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Welcome to Gourmet Delights\";\r\n  content.appendChild(title);\r\n\r\n  const image = document.createElement(\"img\");\r\n  image.src = \"https://placehold.co/600x400\";\r\n  image.alt = \"Restaurant placeholder image\";\r\n  content.appendChild(image);\r\n\r\n  const paragraphs = [\r\n    \"Experience culinary excellence at Gourmet Delights, where every dish is a masterpiece crafted with passion and precision.\",\r\n    \"Our award-winning chefs use only the finest, locally-sourced ingredients to create unforgettable flavors that will tantalize your taste buds and leave you craving more.\",\r\n    \"Join us for an extraordinary dining experience in our elegant, warm atmosphere. Whether it's a romantic dinner for two or a celebration with friends, Gourmet Delights is the perfect destination for food lovers.\",\r\n  ];\r\n\r\n  paragraphs.forEach((text) => {\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = text;\r\n    content.appendChild(p);\r\n  });\r\n\r\n  return content;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n//import \"./styles.css\";\r\n// src/index.js\r\n\r\n\r\n\r\n\r\n\r\nfunction setActiveButton(button) {\r\n  const buttons = document.querySelectorAll(\"nav button\");\r\n  buttons.forEach((btn) => btn.classList.remove(\"active\"));\r\n  button.classList.add(\"active\");\r\n}\r\n\r\nfunction clearContent() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = \"\";\r\n}\r\n\r\nfunction loadContent(contentLoader) {\r\n  clearContent();\r\n  const content = document.getElementById(\"content\");\r\n  content.appendChild(contentLoader());\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  // Load home page by default\r\n  loadContent(_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\r\n  setActiveButton(document.getElementById(\"home\"));\r\n\r\n  // Add event listeners to buttons\r\n  document.getElementById(\"home\").addEventListener(\"click\", (e) => {\r\n    loadContent(_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome);\r\n    setActiveButton(e.target);\r\n  });\r\n\r\n  document.getElementById(\"menu\").addEventListener(\"click\", (e) => {\r\n    loadContent(_menu_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu);\r\n    setActiveButton(e.target);\r\n  });\r\n\r\n  document.getElementById(\"contact\").addEventListener(\"click\", (e) => {\r\n    loadContent(_contact_js__WEBPACK_IMPORTED_MODULE_2__.loadContact);\r\n    setActiveButton(e.target);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n// src/menu.js\r\n\r\nfunction loadMenu() {\r\n  const content = document.createElement(\"div\");\r\n  content.classList.add(\"tab-content\");\r\n\r\n  const title = document.createElement(\"h1\");\r\n  title.textContent = \"Our Menu\";\r\n  content.appendChild(title);\r\n\r\n  const menuItems = [\r\n    {\r\n      name: \"Grilled Salmon\",\r\n      description: \"Fresh Atlantic salmon with lemon butter sauce\",\r\n      price: \"$22\",\r\n    },\r\n    {\r\n      name: \"Vegetarian Pasta\",\r\n      description: \"Penne with roasted vegetables and pesto\",\r\n      price: \"$18\",\r\n    },\r\n    {\r\n      name: \"Beef Tenderloin\",\r\n      description: \"8oz tenderloin with red wine reduction\",\r\n      price: \"$28\",\r\n    },\r\n    {\r\n      name: \"Caesar Salad\",\r\n      description: \"Crisp romaine lettuce with our house-made dressing\",\r\n      price: \"$12\",\r\n    },\r\n  ];\r\n\r\n  const menuList = document.createElement(\"ul\");\r\n  menuItems.forEach((item) => {\r\n    const li = document.createElement(\"li\");\r\n    li.innerHTML = `<strong>${item.name}</strong> - ${item.description} <em>${item.price}</em>`;\r\n    menuList.appendChild(li);\r\n  });\r\n\r\n  content.appendChild(menuList);\r\n\r\n  return content;\r\n}\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;