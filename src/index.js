import "./style.css";

function body() {
  document.body.appendChild(header());
  return;
}

function header() {
  const headerElement = document.createElement("header");
  // create title
  const title = document.createElement("div");

  title.innerHTML = "Daizha Espiritu";
  title.classList.add("title");
  
  // create nav
  const navElement = document.createElement("nav");
  const olElement = document.createElement("ol");

  const tabData = [
    { href: "#about-section", text: "ABOUT" },
    { href: "#work-section", text: "WORK" },
    { href: "#contact-section", text: "CONTACT" }
  ];
  
  for (let i = 0; i < tabData.length; i++) {
    const tab = tabData[i];
  
    const liElement = document.createElement("li");
    liElement.classList.add("nav-tab");
  
    const aElement = document.createElement("a");
    aElement.setAttribute("href", tab.href);
    aElement.innerText = tab.text;
  
    liElement.appendChild(aElement);
    olElement.appendChild(liElement);
  }

  navElement.appendChild(olElement);

  headerElement.appendChild(title);
  headerElement.appendChild(navElement);
  return headerElement;
}

body();

document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation links
  const navLinks = document.querySelectorAll(".nav-tab a");

  // Iterate over each navigation link
  navLinks.forEach(function (link) {
    // Add a click event listener to each link
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default link behavior

      // Get the target section ID from the link's href attribute
      const targetId = link.getAttribute("href");

      // Scroll to the target section smoothly
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
