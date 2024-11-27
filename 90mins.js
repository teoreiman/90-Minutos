function mostrarPantalla(seccion) {
  var pantallas = document.getElementsByClassName("pantalla");
  for (var i = 0; i < pantallas.length; i++) {
    pantallas[i].style.display;
    scrollToTopBtn();
  }
  var pantallaSeleccionada = document.getElementById(seccion);
  if (pantallaSeleccionada) {
    scrollToTop();
    pantallaSeleccionada.style.display = "block";
  } else {
    console.error("Sección no encontrada: " + seccion);
  }
}

document.getElementById('loader').addEventListener('animationend', function() {
  this.classList.add('hidden');
});


window.onscroll = function () {
  toggleStickyNavbar();
  mostrarBotonScroll();
};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function toggleStickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
}

let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollToTopBtn > 20 ||
    document.documentElement.scrollToTopBtn > 20
  ) {
    scrollToTopBtn.style.display = "block";
  }
};

let main = document.getElementById("jugadoresInfo");
scrollToTopBtn.addEventListener("click", () => {
  main.scrollTo({ top: 0, behavior: "smooth" });
});

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

document.querySelectorAll("button[data-target]").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function showPlayerInfo(playerName) {
  const playerInfo = {}

  window.onload = () => {
    document.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const modal = document.getElementById("playerModal");
  const modalContent = document.getElementById("playerInfo");

  console.log(playerInfo[playerName.trim()]);

  modalContent.innerHTML = `<h4>${playerName}</h4><p>${
    playerInfo[playerName.trim()]
  }</p>`;

  modal.style.display = "grid";
}

function closeModal() {
  const modal = document.getElementById("playerModal");
  document.querySelectorAll("button").forEach((button) => {
    button.disabled = false;
  });
}

document.querySelectorAll(".content div").forEach((player) => {
  player.addEventListener("click", () => {
    showPlayerInfo(player.textContent);
  });
});

window.onclick = function (event) {
  const modal = document.getElementById("playerModal");
  if ((event.target = modal)) {
  }
};

function ocultarPantallas() {
  const pantallas = document.getElementsByClassName("pantalla");
  for (let i = 0; i < pantallas.length; i++) {
    pantallas[i].style.display = "none";
  }
}

function mostrarPantalla(id) {
  ocultarPantallas();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const pantalla = document.getElementById(id);
  if (pantalla) {
    if (id === "jugadoresInfo") {
      pantalla.style.display = "flex";
    } else {
      pantalla.style.display = "block";
    }
  }
}

document.getElementById("jugadoresInfo").addEventListener("click", function () {
  mostrarPantalla("jugadoresInfo");
});
