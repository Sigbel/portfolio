const nav_hamburguer = () => {
  const hamburguer = document.querySelector(".hamburguer");
  const navMenu = document.querySelector(".navbar-items");

  hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  }))
};

export {nav_hamburguer};
