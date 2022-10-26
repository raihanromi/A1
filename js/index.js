const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

  let modifiedText = document.getElementById("modify");
      let latestDate = new Date(document.lastModified);
      let pageLocation = window.location.href;
      modifiedText.innerHTML = `Last Updated : ${latestDate} and current page location : ${pageLocation}`;
