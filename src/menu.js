// src/menu.js

export function loadMenu() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  content.appendChild(title);

  const menuItems = [
    {
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with lemon butter sauce",
      price: "$22",
    },
    {
      name: "Vegetarian Pasta",
      description: "Penne with roasted vegetables and pesto",
      price: "$18",
    },
    {
      name: "Beef Tenderloin",
      description: "8oz tenderloin with red wine reduction",
      price: "$28",
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with our house-made dressing",
      price: "$12",
    },
  ];

  const menuList = document.createElement("ul");
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.name}</strong> - ${item.description} <em>${item.price}</em>`;
    menuList.appendChild(li);
  });

  content.appendChild(menuList);

  return content;
}
