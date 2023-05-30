import "./style.css";
import YelpLogo from "./img/yelp.png";
import StarbucksLogo from "./img/starbucks-logo.png";
import emailIcon from "./img/email.svg";
import instagramIcon from "./img/instagram.svg";
import linkedinIcon from "./img/linkedin.svg";

function body() {
  document.body.appendChild(header());
  document.body.appendChild(main());
  return;
}

function header() {
  const headerElement = document.createElement("header");
  const title = document.createElement("div");

  title.innerHTML = "Daizha Espiritu";
  title.classList.add("title");

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

  const workContentElement = document.createElement("div");
  workContentElement.classList.add("work-content");

  const yelpPhotoElement = document.createElement("div");
  yelpPhotoElement.classList.add("yelp-photo");

  workContentElement.appendChild(yelpPhotoElement);

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

  const h3YelpElement = document.createElement("h3");
  h3YelpElement.innerText = "Links to my content created for Yelp!";
  workTextContainerElement.appendChild(h3YelpElement);

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

  workContentElement.appendChild(workTextContainerElement);

  workElement.appendChild(workContentElement);
  return workElement;
}

function starbucks() {
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

  const workContentElement = document.createElement("div");
  workContentElement.classList.add("work-content");

  const workTextContainerElement = document.createElement("div");
  workTextContainerElement.classList.add("work-text-container");

  const h2YelpElement = document.createElement("h2");
  h2YelpElement.classList.add("work-title");
  h2YelpElement.textContent = "Barista and Social Media Work";
  workTextContainerElement.appendChild(h2YelpElement);

  const p1StarbucksElement = document.createElement("p");
  const text = `
    When I am not interning, I am a barista at Starbucks. I started here in July of 2019 and have 
    enjoyed preparing my customers’ morning cup of coffee for the past four years. Other than being a 
    barista, I have managed my store’s Instagram account but as of recently, I worked with their Marketing 
    Department and Social Media Creative Team and have been featured on Instagram, Tiktok, Snapchat and Youtube Shorts.`;
  p1StarbucksElement.innerText = text.replace(/\n/g, " ");
  workTextContainerElement.appendChild(p1StarbucksElement);

  workTextContainerElement.appendChild(document.createElement("br"));
  workTextContainerElement.appendChild(document.createElement("br"));

  const h3StarbucksElement = document.createElement("h3");
  h3StarbucksElement.innerText = "Content created for Starbucks!";
  workTextContainerElement.appendChild(h3StarbucksElement);

  const starbucksLinks = [
    {
      text: "My feature on Instagram - @Starbucks",
      href: "https://www.instagram.com/reel/Cqs2Hq0vbn9/?igshid=MmJiY2I4NDBkZg==",
    },
    {
      text: "My feature on Snapchat - @Starbucks",
      href: "https://www.instagram.com/reel/CpGKw0EOOn_/?igshid=MmJiY2I4NDBkZg==",
    },
    {
      text: "My feature on Youtube Shorts @Starbucks",
      href: "https://youtube.com/shorts/XhQS06Utv9o?feature=share",
    },
  ];

  for (let i = 0; i < starbucksLinks.length; i++) {
    const pStarbucksLinkElement = document.createElement("p");
    const aStarbucksLinkElement = document.createElement("a");
    aStarbucksLinkElement.innerText = starbucksLinks[i].text;
    aStarbucksLinkElement.href = starbucksLinks[i].href;
    pStarbucksLinkElement.appendChild(aStarbucksLinkElement);
    workTextContainerElement.appendChild(pStarbucksLinkElement);
    workTextContainerElement.appendChild(document.createElement("br"));
  }

  workContentElement.appendChild(workTextContainerElement);

  const instagramEmbedElement = document.createElement("div");
  instagramEmbedElement.classList.add("instagram-embed");

  const blockquoteElement = document.createElement("blockquote");
  blockquoteElement.classList.add("instagram-media");
  blockquoteElement.setAttribute("data-instgrm-captioned", "");
  blockquoteElement.setAttribute(
    "data-instgrm-permalink",
    "https://www.instagram.com/reel/CqtbYQQJZAW/?utm_source=ig_embed&amp;utm_campaign=loading"
  );
  blockquoteElement.setAttribute("data-instgrm-version", "14");
  blockquoteElement.setAttribute(
    "style",
    "background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
  );

  // Set the blockquote's inner HTML
  blockquoteElement.innerHTML = `
  <div style="padding:16px;">
    <a href="https://www.instagram.com/reel/CqtbYQQJZAW/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
      <div style="display: flex; flex-direction: row; align-items: center;">
        <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
        <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
          <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
          <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
        </div>
      </div>
      <div style="padding: 19% 0;"></div>
      <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
        <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
              <g>
                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M556.869,39.287 C553.084,39.287 550,36.203 550,32.418 C550,28.633 553.084,25.549 556.869,25.549 C560.654,25.549 563.738,28.633 563.738,32.418 C563.738,36.203 560.654,39.287 556.869,39.287 M556.869,41.703 C561.49,41.703 565,38.193 565,33.572 C565,28.951 561.49,25.441 556.869,25.441 C552.248,25.441 548.738,28.951 548.738,33.572 C548.738,38.193 552.248,41.703 556.869,41.703 M562.397,33.297 C562.125,36.994 559.292,39.683 555.595,39.411 C551.898,39.138 549.209,36.305 549.481,32.608 C549.754,28.911 552.587,26.222 556.284,26.495 C559.981,26.768 562.67,29.601 562.397,33.297 M556.869,27.589 C553.548,27.589 550.908,30.23 550.908,33.552 C550.908,36.873 553.548,39.513 556.869,39.513 C560.19,39.513 562.83,36.873 562.83,33.552 C562.83,30.23 560.19,27.589 556.869,27.589"></path>
                <path d="M556.869,28.301 C553.758,28.301 551.151,30.907 551.151,34.018 C551.151,37.129 553.758,39.735 556.869,39.735 C559.98,39.735 562.586,37.129 562.586,34.018 C562.586,30.907 559.98,28.301 556.869,28.301 M556.869,40.457 C553.243,40.457 550.132,37.346 550.132,33.72 C550.132,30.095 553.243,26.984 556.869,26.984 C560.494,26.984 563.605,30.095 563.605,33.72 C563.605,37.346 560.494,40.457 556.869,40.457 M556.869,25.049 C552.213,25.049 548.738,28.523 548.738,33.18 C548.738,37.836 552.213,41.311 556.869,41.311 C561.525,41.311 565,37.836 565,33.18 C565,28.523 561.525,25.049 556.869,25.049"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div style="display: flex; justify-content: center;">
        <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 10px; width: 60px;"></div>
      </div>
    </a>
    <p style="margin:8px 0 0 0; padding:0 4px;">
      <a href="https://www.instagram.com/p/CqtbYQQJZAW/?utm_source=ig_embed&amp;utm_campaign=loading" style="color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Instagram Post Caption Goes Here</a>
    </p>
    <p style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
      A post shared by <a href="https://www.instagram.com/username/" style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px;" target="_blank">Username</a> on <time style="font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2023-05-28T00:00:00+00:00">May 28, 2023</time>
    </p>
  </div>
`;

  instagramEmbedElement.appendChild(blockquoteElement);


  workContentElement.appendChild(instagramEmbedElement);

  workElement.appendChild(workContentElement);
  return workElement;
}

function work() {

  const workContainerElement = document.createElement("div");
  workContainerElement.classList.add("work-container");
  workContainerElement.setAttribute("id", "work-section");

  const workTextElement = document.createElement("div");
  workTextElement.classList.add("work-text");
  const h3WorkTitleElement = document.createElement("h3");
  h3WorkTitleElement.innerText = "Work";
  workTextElement.appendChild(h3WorkTitleElement);

  workContainerElement.appendChild(workTextElement);

  workContainerElement.appendChild(yelp());
  workContainerElement.appendChild(starbucks());

  return workContainerElement;
}

function contact() {
  const contactContainerElement = document.createElement("div");
  contactContainerElement.classList.add("contact-container");
  contactContainerElement.setAttribute("id", "contact-section");

  const workTextElement = document.createElement("div");
  workTextElement.classList.add("work-text");

  const h3TitleElement = document.createElement("h3");
  h3TitleElement.innerText = "Contact";
  workTextElement.appendChild(h3TitleElement);
  contactContainerElement.appendChild(workTextElement);

  const contactContentElement = document.createElement("div");
  contactContentElement.classList.add("contact-content");

  const contactLinks = [
    {
      title: "Connect with me via email!",
      text: "daizha.nadine@gmail.com",
      href: "mailto:daizha.nadine@gmail.com",
      img: emailIcon,
    },
    {
      title: "Follow me around my Seattle foodie adventures!",
      text: "eatingfordaiz",
      href: "https://instagram.com/eatingfordaiz?igshid=NTc4MTIwNjQ2YQ==",
      img: instagramIcon,
    },
    {
      title: "Connect with me on LinkedIn!",
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/daizha-espiritu",
      img: linkedinIcon,
    },
  ];

  for (let i = 0; i < contactLinks.length; i++) {
    const h4Element = document.createElement("h4");
    const contactLinksElement = document.createElement("div");
    contactLinksElement.classList.add("contact-links");
    const h5LinkElement = document.createElement("h5");
    const aLinkElement = document.createElement("a");
    const imgElement = new Image();
    const spanElement = document.createElement("span");

    h4Element.innerText = contactLinks[i].title;
    aLinkElement.href = contactLinks[i].href;
    imgElement.src = contactLinks[i].img;

    spanElement.innerText = contactLinks[i].text;

    aLinkElement.appendChild(imgElement);
    aLinkElement.appendChild(spanElement);

    h5LinkElement.appendChild(aLinkElement);

    contactContentElement.appendChild(h4Element);
    contactContentElement.appendChild(h5LinkElement);
  }

  contactContainerElement.appendChild(contactContentElement);
  return contactContainerElement;
}

function footer() {
  const footerElement = document.createElement("footer");
  const footerContentElement = document.createElement("div");
  footerContentElement.classList.add("footer-content");

  const iconElement = document.createElement("div");
  iconElement.classList.add("icon");

  const linkedInIconElement = new Image();
  linkedInIconElement.src = linkedinIcon;
  iconElement.appendChild(linkedInIconElement);

  const instagramIconElement = new Image();
  instagramIconElement.src = instagramIcon;
  iconElement.appendChild(instagramIconElement);

  footerContentElement.appendChild(iconElement);

  const span1Element = document.createElement("span");
  span1Element.textContent = "Icons by ";

  const firstAElement = document.createElement("a");
  firstAElement.href = "https://www.freebie.com";
  firstAElement.textContent = "freebie.com";

  const secondAElement = document.createElement("a");
  secondAElement.href = "https://www.flaticon.com";
  secondAElement.textContent = "flaticon.com";
  span1Element.appendChild(firstAElement);
  span1Element.appendChild(document.createTextNode(" and "));
  span1Element.appendChild(secondAElement);

  footerContentElement.appendChild(span1Element);

  const divElement = document.createElement("div");
  divElement.className = "created-by";

  const spanElement = document.createElement("span");
  spanElement.textContent = "Created by ";

  const aElement = document.createElement("a");
  aElement.href = "https://euan-canoy-portfolio.onrender.com/";
  aElement.target = "_blank";
  aElement.textContent = "Euan Canoy";

  spanElement.appendChild(aElement);

  divElement.appendChild(spanElement);

  footerContentElement.appendChild(divElement);

  footerElement.appendChild(footerContentElement);
  return footerElement;
}

function main() {
  const mainElement = document.createElement("main");
  mainElement.appendChild(about());
  mainElement.appendChild(work());
  mainElement.appendChild(contact());
  mainElement.appendChild(footer());
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
