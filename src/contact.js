// src/contact.js

export function loadContact() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  content.appendChild(title);

  const contactInfo = document.createElement("div");
  contactInfo.innerHTML = `
      <p><strong>Address:</strong> 123 Gourmet Street, Foodville, FC 12345</p>
      <p><strong>Phone:</strong> (555) 123-4567</p>
      <p><strong>Email:</strong> info@gourmetdelights.com</p>
      <p><strong>Hours:</strong><br>
      Monday - Thursday: 11am - 9pm<br>
      Friday - Saturday: 11am - 11pm<br>
      Sunday: 10am - 8pm</p>
    `;

  content.appendChild(contactInfo);

  return content;
}
