import "./style.css";
import YelpLogo from "./img/yelp.png";
import StarbucksLogo from "./img/starbucks-logo.png";

function body() {
  document.body.appendChild(header());
  document.body.appendChild(main());
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
    { href: "#contact-section", text: "CONTACT" },
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

function about() {
  const aboutContainerElement = document.createElement("div");
  aboutContainerElement.classList.add("about-container");
  aboutContainerElement.setAttribute("id", "about-section");
  const aboutTextContainerElement = document.createElement("div");
  aboutTextContainerElement.classList.add("about-text-container");

  const aboutH2Element = document.createElement("h2");
  aboutH2Element.innerText = "About Daizha";

  const p1Element = document.createElement("p");
  const p1Text = `
    It’s nice to meet you! My name is Daizha and I graduated from the University of Washington Bothell 
    in June of 2022 as a first generation student. I received my BA in Media and Communications with a 
    minor in Diversity. I am currently employed as Yelp Seattle’s Community Intern as well as a barista at 
    Starbucks. `;
  p1Element.innerText = p1Text.replace(/\n/g, " ");

  const p2Element = document.createElement("p");
  const p2Text = `
    Other than that, I was born and raised in Seattle, WA. I enjoy trying new foodie spots around my city,
    spending time with my loved ones and going on adventures with my dog. I would love to tell you more about
    me and my work!`;
  p2Element.innerText = p2Text.replace(/\n/g, " ");

  const coverPhotoElement = document.createElement("div");
  coverPhotoElement.classList.add("cover-photo");

  aboutTextContainerElement.appendChild(aboutH2Element);
  aboutTextContainerElement.appendChild(p1Element);
  aboutTextContainerElement.appendChild(document.createElement("br"));
  aboutTextContainerElement.appendChild(p2Element);

  aboutContainerElement.appendChild(aboutTextContainerElement);
  aboutContainerElement.appendChild(coverPhotoElement);
  return aboutContainerElement;
}

function yelp() {
  // yelp section
  const workElement = document.createElement("div");
  workElement.classList.add("work");

  const workTitleElement = document.createElement("div");
  workTitleElement.classList.add("work-title");

  const h3TitleElement = document.createElement("h3");
  h3TitleElement.innerText = "Yelp";
  workTitleElement.appendChild(h3TitleElement);

  const yelpLogoElement = new Image();
  yelpLogoElement.setAttribute("id", "yelp-logo");
  yelpLogoElement.src = YelpLogo;
  workTitleElement.appendChild(yelpLogoElement);

  workElement.appendChild(workTitleElement);

  // work content
  const workContentElement = document.createElement("div");
  workContentElement.classList.add("work-content");

  // yelp photo
  const yelpPhotoElement = document.createElement("div");
  yelpPhotoElement.classList.add("yelp-photo");

  workContentElement.appendChild(yelpPhotoElement);

  // work-text-container right-text #highlight that this is yelp
  const workTextContainerElement = document.createElement("div");
  workTextContainerElement.classList.add("work-text-container");
  workTextContainerElement.classList.add("right-text");

  const h2YelpElement = document.createElement("h2");
  h2YelpElement.classList.add("work-title");
  h2YelpElement.textContent = "Seattle Community Intern";
  workTextContainerElement.appendChild(h2YelpElement);

  const p1YelpElement = document.createElement("p");
  const text = `
        In January of 2023, I started my role with Yelp as their Seattle Community Intern. This experience has 
        allowed me to shadow Seattle’s Community Manager to learn more about marketing, event planning and social 
        media management. Each week, I am consistently writing blogs, in Yelps formatting, familiarizing myself with 
        new local businesses in Seattle, as well as creating social media content.`;
  p1YelpElement.innerText = text.replace(/\n/g, " ");
  workTextContainerElement.appendChild(p1YelpElement);

  workTextContainerElement.appendChild(document.createElement("br"));
  workTextContainerElement.appendChild(document.createElement("br"));

  const yelpLinks = [
    {
      text: "My most viewed Reel on Instagram - @YelpWashington",
      href: "https://www.instagram.com/reel/Co7sTjQJ13F/?igshid=MmJiY2I4NDBkZg==",
    },
    {
      text: "Eat like an Elite Reel on Instagram - @YelpWashington",
      href: "https://www.instagram.com/reel/CpGKw0EOOn_/?igshid=MmJiY2I4NDBkZg==",
    },
    {
      text: "My most followed blog of local Seattle businesses",
      href: "https://www.yelp.com/collection/NCplv2tsmi6sVGs-DGsL5w?utm_content=Collections&utm_source=ishare",
    },
  ];

  for (let i = 0; i < yelpLinks.length; i++) {
    const pYelpLinkElement = document.createElement("p");
    const aYelpLinkElement = document.createElement("a");
    aYelpLinkElement.innerText = yelpLinks[i].text;
    aYelpLinkElement.href = yelpLinks[i].href;
    pYelpLinkElement.appendChild(aYelpLinkElement);
    workTextContainerElement.appendChild(pYelpLinkElement);
    workTextContainerElement.appendChild(document.createElement("br"));
  }

  const h3YelpElement = document.createElement("h3");
  h3YelpElement.innerText = "Links to my content created for Yelp!";
  workTextContainerElement.prepend(h3YelpElement);

  workContentElement.appendChild(workTextContainerElement);

  workElement.appendChild(workContentElement);
  return workElement;
}

function starbucks() {
  // yelp section
  const workElement = document.createElement("div");
  workElement.classList.add("work");

  const workTitleElement = document.createElement("div");
  workTitleElement.classList.add("work-title");

  const h3TitleElement = document.createElement("h3");
  h3TitleElement.innerText = "Starbucks";
  workTitleElement.appendChild(h3TitleElement);

  const starbucksLogoElement = new Image();
  starbucksLogoElement.setAttribute("id", "starbucks-logo");
  starbucksLogoElement.src = StarbucksLogo;
  workTitleElement.appendChild(starbucksLogoElement);

  workElement.appendChild(workTitleElement);

  // // work content
  // const workContentElement = document.createElement("div");
  // workContentElement.classList.add("work-content");

  return workElement;
}

function work() {
  // work section
  // work text
  const workContainerElement = document.createElement("div");
  workContainerElement.classList.add("work-container");
  workContainerElement.setAttribute("id", "work-section");

  const workTextElement = document.createElement("div");
  workTextElement.classList.add("work-text");
  const h3WorkTitleElement = document.createElement("h3");
  h3WorkTitleElement.innerText = "Work";
  workTextElement.appendChild(h3WorkTitleElement);

  workContainerElement.appendChild(workTextElement);

  // add yelp
  workContainerElement.appendChild(yelp());

  // add starbucks
  workContainerElement.appendChild(starbucks());
  // workContainerElement.appendChild(starbucks());
  return workContainerElement;
}

function main() {
  const mainElement = document.createElement("main");
  mainElement.appendChild(about());
  mainElement.appendChild(work());
  return mainElement;
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
