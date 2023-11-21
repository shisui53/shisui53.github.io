// *=============================== toggle icon navbar ==================================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".header");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// *=============================== github calender ==================================
GitHubCalendar(".calendar", "shisui53");

// or enable responsive functionality:
GitHubCalendar(".calendar", "shisui53", { responsive: true });

// *=============================== resume opening in a new tab ==================================

function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1dS82bx7pu_STR236_C74fybEXqqJln6p/view?usp=sharing",
    "_blank"
  );
}

// =========================== Resume Button =====================================================
function downloadAndOpen() {
  const resumeURL =
    "https://drive.google.com/file/d/1xRaBE1IVLQPEWdfeWw9CgLs5tVE2OLQr/view?usp=drive_link";
  const downloadURL =
    "https://drive.google.com/uc?export=download&id=1xRaBE1IVLQPEWdfeWw9CgLs5tVE2OLQr";

  // Open the link in a new tab
  window.open(resumeURL, "_blank");

  // Trigger the download
  const link = document.createElement("a");
  link.href = downloadURL;
  link.download = "/Users/rajvardhansunilnaik/Documents/portfolio/Rajvardhan Naik Resume .pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// *=============================== scroll sections active link ==================================
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // *=============================== sticky navbar ==================================

  // let header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 100);

  // *=============================== remove toggle icon and navbar when click navbar link(scroll) ==================================

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// *=============================== scroll reveal ==================================

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .project-card, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "left" });

let stats = document
  .getElementById("github-top-langs")
  .addEventListener("click", statsfun);

function statsfun() {
  window.open("https://github.com/shisui53", "_blank");
}


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionID = this.getAttribute("href");
    const section = document.querySelector(sectionID);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 160,
        behavior: "smooth",
      });
    }
  });
});
