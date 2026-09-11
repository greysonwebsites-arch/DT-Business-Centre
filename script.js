const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });
}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".navigation a").forEach((link) => {

  link.addEventListener("click", () => {

    navigation.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* Current year */

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


/* Simple scroll reveal */

const revealElements = document.querySelectorAll(
  ".business-card, .gallery-grid img, .feature-grid, .two-column"
);

const revealObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach((element) => {

  element.classList.add("reveal");

  revealObserver.observe(element);

});
