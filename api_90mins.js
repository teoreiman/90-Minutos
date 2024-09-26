//API de INSTAGRAM del FEED de los jugadores:
const galery = document.querySelector(".galery");
const feed = document.querySelector(".contenedor-galery");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

const token = "";
const url =
  `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=80&access_token=${token}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => CrearHtml(data.data));

function crearGaleria( jugador ) {
  for (const img of data) {
    galery.innerHTML +=
      '${img.caption.slice(0,100)}';
  }
}
next.addEventListener("click", moveGalery);
prev.addEventListener("click", moveGalery);
function moveGalery(e) {
  if (e.target.id   == "next" || e.target.partentElement.id == "next")
    feed.scrollLeft += feed.offsetWidth;
  else {
    feed.scrollLeft -= feed.offsetWidth;
  }
}