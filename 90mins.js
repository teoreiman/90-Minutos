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
  const playerInfo = {
    "Manuel Neuer": `<h2>Manuel Neuer: El Guardián del Bayern Múnich y de Alemania</h2>
<p>
  Manuel Neuer es considerado uno de los mejores porteros de la historia del fútbol, reconocido por su estilo de juego moderno como "portero-líbero". No solo se destaca por sus habilidades bajo los palos, sino también por su capacidad para influir en la construcción de jugadas desde el fondo.
</p> <br>

<h3>Características Destacadas:</h3>

<ul>
  <li><strong>Habilidad con los pies:</strong> Neuer es conocido por su capacidad para jugar con los pies y realizar pases precisos bajo presión, ayudando a su equipo a mantener la posesión. 
    <a href="https://www.youtube.com/watch?v=cdRXrfzsFNw" target="_blank">Ver video</a>
  </li>

  </li>
  <li><strong>Reflejos rápidos:</strong> Es famoso por sus atajadas en situaciones de mano a mano y sus reflejos ágiles en el arco.
    <a href="https://www.youtube.com/watch?v=MGIZKXmrk6M" target="_blank">Mira sus mejores atajadas</a>
  </li>
</ul>

<h3>Logros mas relevantes:</h3>

<ul>
  <li>Campeón del Mundial 2014 con Alemania</li>
  <li>Múltiples títulos de la Bundesliga con el Bayern Múnich</li>
  <li>Premios a mejor portero del mundo por la FIFA y la IFFHS</li>
</ul>`,

    "Franco Baresi": `<h2>Franco Baresi: El Pilar de la Defensa Italiana</h2>
<p>
  Franco Baresi es una leyenda del fútbol italiano, reconocido por su liderazgo en la defensa y su capacidad para leer el juego con anticipación. Fue el capitán y símbolo del AC Milan durante más de dos décadas.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Anticipación y lectura del juego:</strong> Baresi era un maestro en posicionarse y anticipar los movimientos del rival.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores defensas</a>
  </li>
  <li><strong>Liderazgo en la defensa:</strong> Como capitán, organizaba la defensa con maestría y transmitía seguridad a sus compañeros.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver su liderazgo en acción</a>
  </li>
</ul>
<h3>Logros más relevantes:</h3>
<ul>
  <li>Campeón de la Serie A en múltiples ocasiones con el AC Milan</li>
  <li>Campeón de la Copa del Mundo 1982 con Italia</li>
  <li>Figura icónica y número retirado en el AC Milan</li>
</ul>`,

    "Vini. Jr": `<h2>Vinícius Jr: La Joya Brasileña del Real Madrid</h2>
<p>
  Vinícius Jr es una de las estrellas emergentes más electrizantes del fútbol mundial, conocido por su velocidad y habilidad para desbordar a defensores con facilidad. Su estilo ofensivo lo convierte en una amenaza constante para sus oponentes.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad y regate:</strong> Vinícius es imparable en el uno contra uno, capaz de superar defensas con su rapidez y destreza.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores jugadas</a>
  </li>
  <li><strong>Gol y definición:</strong> Ha mejorado notablemente su capacidad para finalizar jugadas y ser decisivo en momentos clave.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros más relevantes:</h3>
<ul>
  <li>Ganador de la Champions League 2022 con el Real Madrid</li>
  <li>Múltiples títulos de La Liga con el Real Madrid</li>
  <li>Figura clave en la selección de Brasil</li>
</ul>`,

    "Iker Casillas": `<h2>Iker Casillas: El Santo del Real Madrid</h2>
<p>
  Iker Casillas es conocido por sus increíbles reflejos y su serenidad bajo presión, siendo uno de los porteros más emblemáticos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos rápidos:</strong> Capaz de detener disparos cercanos con facilidad. 
    <a href="https://www.youtube.com/watch?v=nbvjS8fo0K4" target="_blank">Ver sus mejores atajadas</a>
  </li>
  <li><strong>Serenidad bajo presión:</strong> Mantiene la calma en momentos decisivos.
    <a href="https://www.youtube.com/watch?v=XWODREtmiCw" target="_blank">Ver su serenidad en la portería</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Campeón del Mundial 2010 con España</li>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
</ul>`,

    "Gianluigi Buffon": `<h2>Gianluigi Buffon: El Muro Italiano</h2>
<p>
  Buffon es uno de los mejores porteros de la historia, reconocido por su longevidad y capacidad para hacer paradas decisivas.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos rápidos:</strong> Atajadas milagrosas durante toda su carrera. 
    <a href="https://www.youtube.com/watch?v=sLuf56pQFRQ" target="_blank">Ver sus mejores paradas</a>
  </li>
  <li><strong>Liderazgo:</strong> Capitán indiscutible en la defensa.
    <a href="https://www.youtube.com/watch?v=49GRkRBAbu8" target="_blank">Ver su liderazgo en acción</a>
  </li>
</ul>
<h3>Logro mas relevante:</h3>
<ul>
  <li>Campeón del Mundial 2006 con Italia</li>
</ul>`,

    "Petr Cech": "Ex-portero del Chelsea y del Arsenal, estrella checa.",

    "Lev Yashin":
      "Considerado el mejor portero de todos los tiempos, conocido como la 'Araña Negra'.",

    "Thiabut Courtois": "Portero belga del Real Madrid.",

    "Victor Valdes":
      "Ex-portero del Barcelona, pieza clave en la era dorada del club.",

    "Emiliano Martinez": `<h2>Emiliano Martínez: El Dibu de Argentina</h2>
<p>
  Emiliano Martínez se ha destacado por su capacidad para detener penales y su seguridad bajo los tres palos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Penales decisivos:</strong> Martínez es un especialista en detener penales.
    <a href="https://www.youtube.com/watch?v=nV89ZJZTg-Q" target="_blank">Ver sus mejores paradas en penales</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Campeón de la Copa América 2021 con Argentina</li>
  <li>Campeón de la Copa del mundo 2022 con Argentina</li>
</ul>`,

    "Franz Beckenbauer":
      "Leyenda alemana, defensor del Bayern Múnich y de la selección.",

    "Lionel Messi": `<h2>Lionel Messi: El Genio del Fútbol Mundial</h2>
<p>
  Lionel Messi es considerado uno de los mejores jugadores de la historia, famoso por su capacidad para desequilibrar en el campo y su visión única del juego.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Regate y control:</strong> Su capacidad para superar rivales con facilidad es legendaria. 
    <a href="https://www.youtube.com/watch?v=Hajg8c1dM-k" target="_blank">Ver video</a>
  </li>
  <li><strong>Visión de juego:</strong> Messi tiene una capacidad única para encontrar espacios y asistir a sus compañeros. 
    <a href="https://www.youtube.com/watch?v=eDC9EUwgsT0" target="_blank">Ver sus mejores asistencias</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Campeón de la Copa del Mundo 2022 con Argentina</li>
  <li>Ganador de 8 Balones de Oro</li>
  <li>Múltiples títulos de la Champions League con el Barcelona</li>
</ul>`,

    "Juan Román Riquelme": `<h2>Juan Román Riquelme: El Cerebro del Fútbol Argentino</h2>
<p>
  Riquelme es uno de los jugadores más talentosos y creativos de Argentina, famoso por su capacidad de controlar el ritmo del partido y sus pases precisos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Control del balón:</strong> Riquelme destacaba por su habilidad para mantener la posesión bajo presión. 
    <a href="https://www.youtube.com/watch?v=tefdNFcoDlA" target="_blank">Ver su dominio del balón</a>
  </li>
  <li><strong>Pases precisos:</strong> Su visión y precisión en los pases lo convirtieron en un excelente organizador de juego.
    <a href="https://www.youtube.com/watch?v=gztdDWLTBdA" target="_blank">Ver sus mejores asistencias</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Campeón de la Copa Libertadores con Boca Juniors</li>
  <li>Finalista de la Champions League con el Villarreal</li>
</ul>`,

    "Marco Van Basten": `<h2>Marco van Basten: El Elegante Goleador</h2>
<p>
  Marco van Basten es uno de los mejores delanteros de todos los tiempos, conocido por su elegancia, técnica y capacidad goleadora. Su combinación de habilidad técnica y poder físico lo convirtió en una amenaza constante para los defensores.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Finalización impecable:</strong> Van Basten tenía una capacidad extraordinaria para marcar goles desde cualquier posición, ya sea con disparos potentes o toques sutiles. 
    <a href="https://www.youtube.com/watch?v=SL9aBgoVlHo" target="_blank">Ver sus mejores goles</a>
  </li>
  <li><strong>Juego aéreo:</strong> Su altura y precisión en el cabezazo lo hacían letal en balones aéreos. 
    <a href="https://www.youtube.com/watch?v=Xpj4KzqslF4" target="_blank">Ver sus cabezazos</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón de la Eurocopa 1988 con los Países Bajos</li>
  <li>3 veces ganador del Balón de Oro</li>
  <li>Múltiples títulos con el AC Milan, incluyendo la Champions League</li>
</ul>
`,

    "Cristiano Ronaldo": `<h2>Cristiano Ronaldo: El Goleador Implacable</h2>
<p>
  Cristiano Ronaldo es uno de los máximos goleadores de todos los tiempos, famoso por su velocidad, fuerza física y precisión en los disparos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Potencia y precisión:</strong> Su habilidad para disparar desde cualquier posición y su capacidad en el juego aéreo son inigualables. 
    <a href="https://www.youtube.com/watch?v=_VIRoFczhXY" target="_blank">Ver sus mejores goles</a>
  </li>
  <li><strong>Velocidad:</strong> Cristiano es conocido por su rapidez, incluso a avanzada edad. 
    <a href="https://www.youtube.com/watch?v=dytSyjskMR4" target="_blank">Ver sus mejores carreras</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Campeón de la Eurocopa 2016 con Portugal</li>
  <li>Ganador de 5 Balones de Oro</li>
  <li>5 Champions Leagues con el Real Madrid</li>
  <li>Maximo goleador de la historia del futbol (910 goles, aprox)</li>
</ul>`,

    "Sergio Ramos": `<h2>Sergio Ramos: El Defensor Goleador</h2>
<p>
  Sergio Ramos es conocido por ser uno de los mejores defensores centrales del mundo, además de ser una amenaza ofensiva en los balones parados.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Defensa férrea:</strong> Su capacidad para anticipar y ganar duelos aéreos lo convierte en un defensor dominante. 
    <a href="https://www.youtube.com/watch?v=_mCqBR1VrlI" target="_blank">Ver sus mejores defensas</a>
  </li>
  <li><strong>Poder ofensivo:</strong> Ramos es un experto en marcar goles decisivos en los partidos importantes. 
    <a href="https://www.youtube.com/watch?v=Pvtn9TYuBOc" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
  <li>Campeón del Mundial 2010 con España</li>
</ul>`,

    "Ronaldo Nazario": `<h2>Ronaldo Nazario (R9): El Fenómeno</h2>
<p>
  Ronaldo, conocido como "El Fenómeno", es uno de los delanteros más talentosos y letales de la historia del fútbol.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad y control:</strong> Ronaldo combinaba su velocidad con una técnica asombrosa para superar a los defensores.
    <a href="https://www.youtube.com/watch?v=p2JW5EnMkvk" target="_blank">Ver su mejor jugada</a>
  </li>
  <li><strong>Finalización implacable:</strong> Su capacidad para definir en cualquier situación lo convirtió en un goleador temido. 
    <a href="https://www.youtube.com/watch?v=6kKr8leGzKc" target="_blank">Ver sus goles más icónicos</a>
  </li>
</ul>
<h3>Logros:</h3>
<ul>
  <li>Campeón del Mundial 2002 con Brasil</li>
  <li>Balón de Oro en dos ocasiones</li>
</ul>`,

    "Pelé": `<h2>Pelé: El Rey del Fútbol</h2>
<p>
  Pelé es ampliamente considerado como uno de los mejores jugadores de todos los tiempos, destacando por su habilidad técnica y su capacidad goleadora.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Creatividad y agilidad:</strong> Pelé fue un jugador extremadamente ágil con una visión para crear oportunidades. 
    <a href="https://www.youtube.com/watch?v=T7HFqgA0t_A" target="_blank">Ver video de sus jugadas</a>
  </li>
  <li><strong>Finalización en el área:</strong> Su capacidad para marcar desde cualquier ángulo lo convirtió en un goleador excepcional.
    <a href="https://www.youtube.com/watch?v=gKs7uQbI8iY" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Tres veces campeón del Mundial con Brasil</li>
  <li>Más de 1000 goles en su carrera</li>
</ul>`,

    "Ronaldinho": `<h2>Ronaldinho: El Mago del Fútbol</h2>
<p>
  Ronaldinho es uno de los jugadores más creativos y carismáticos que el fútbol haya visto, conocido por su estilo alegre y su increíble técnica.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Técnica asombrosa:</strong> Ronaldinho es famoso por sus trucos y su habilidad para hacer jugadas impredecibles. 
    <a href="https://www.youtube.com/watch?v=ZNaybZvHdWs" target="_blank">Ver sus mejores jugadas</a>
  </li>
  <li><strong>Fútbol alegre:</strong> Su estilo de juego siempre transmitía diversión, y a menudo dejaba a la defensa rival sin respuestas. 
    <a href="https://www.youtube.com/watch?v=p7B3PccAe6g" target="_blank">Ver su magia en el campo</a>
  </li>
</ul>
<h3>Logros:</h3>
<ul>
  <li>Campeón del Mundial 2002 con Brasil</li>
  <li>Balón de Oro en 2005</li>
</ul>`,

    "Neymar Jr": `<h2>Neymar Jr: La Magia Brasileña</h2>
<p>
  Neymar es famoso por sus habilidades para el regate y su creatividad en el campo.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Regate y flair:</strong> Neymar es conocido por superar a defensores con facilidad.
    <a href="https://www.youtube.com/watch?v=qAORoEvIt54" target="_blank">Ver sus mejores jugadas</a>
  </li>
</ul>
<h3>Logros mas relevantes:</h3>
<ul>
  <li>Medalla de Oro en los Juegos Olímpicos de Río 2016 con Brasil</li>
  <li>UEFA Champions League con el FC Barcelona en 2015</li>
</ul>`,

"Edwin Van der Sar": `<h2>Edwin Van der Sar: El Guardián Holandés de la Historia</h2>
<p>
  Edwin Van der Sar es ampliamente reconocido como uno de los mejores porteros de su generación y una leyenda en el fútbol europeo, especialmente famoso por su tiempo en el Manchester United y el Ajax.
</p> <br>

<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos impresionantes:</strong> Van der Sar tenía una gran habilidad para reaccionar rápidamente ante disparos a corta distancia, convirtiéndose en un seguro de vida para su equipo. 
    <a href="https://www.youtube.com/watch?v=link1" target="_blank">Ver sus mejores atajadas</a>
  </li>
  <li><strong>Experiencia y liderazgo:</strong> Su presencia en el campo inspiraba confianza, y fue un líder natural tanto en el Ajax como en el Manchester United.
    <a href="https://www.youtube.com/watch?v=link2" target="_blank">Ver su liderazgo en acción</a>
  </li>
</ul> <br>

<h3>Logros más relevantes:</h3>
<ul>
  <li>Campeón de la Champions League con el Ajax y el Manchester United</li>
  <li>Múltiples títulos de liga en la Premier League y la Eredivisie</li>
  <li>Record de más minutos sin recibir goles en la Premier League</li>
</ul>`,


    "Kylian Mbappé": `<h2>Kylian Mbappé: La Joya del Fútbol Francés</h2>
<p>
  Mbappé es una de las jóvenes estrellas más brillantes del fútbol mundial, destacando por su velocidad y capacidad de definición.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad:</strong> Mbappé es conocido por su increíble velocidad y capacidad de finalizar en el área.
    <a href="https://www.youtube.com/watch?v=FkGZmL1rGwg" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logro mas relevante:</h3>
<ul>
  <li>Campeón del Mundo 2018 con Francia con 18 años</li>
</ul>`,

    "Zinedine Zidane": `<h2>Zinedine Zidane: El Mago Francés</h2>
<p>
  Zidane es uno de los jugadores más elegantes que el fútbol haya visto, conocido por su control del balón y su visión del juego.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Control y técnica:</strong> Zidane tenía un control único del balón. 
    <a href="https://www.youtube.com/watch?v=HRTZLzVJ9jI" target="_blank">Ver su técnica en acción</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón del Mundial 1998 con Francia</li>
</ul>`,

    "Paolo Maldini": `<h2>Paolo Maldini: El Defensor Legendario</h2>
<p>
  Maldini es conocido como uno de los mejores defensores de todos los tiempos, famoso por su inteligencia táctica y capacidad de anticipación.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Defensa sólida:</strong> Su habilidad para anticipar jugadas era inigualable.
    <a href="https://www.youtube.com/watch?v=dEXHe6YxhbI" target="_blank">Ver sus mejores intervenciones</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Múltiples títulos de la Serie A con el AC Milan</li>
</ul>`,

    "Michel Platini": `<h2>Michel Platini: El Arquitecto del Fútbol Francés</h2>
<p>
  Platini es famoso por su precisión en los pases y su capacidad para marcar goles importantes.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Pases precisos:</strong> Platini era un maestro en asistencias. 
    <a href="https://www.youtube.com/watch?v=vKT6WSybELU" target="_blank">Ver sus mejores asistencias</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón de la Eurocopa 1984 con Francia</li>
</ul>`,

    "Diego Maradona": `<h2>Diego Maradona: El Pibe de Oro</h2>
<p>
  Diego Maradona es ampliamente considerado uno de los mejores jugadores en la historia del fútbol, famoso por su habilidad extraordinaria y su impacto en el Mundial de 1986.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Dribbling increíble:</strong> Maradona podía superar a varios jugadores con su increíble control del balón. 
    <a href="https://www.youtube.com/watch?v=1wVho3I0NtU" target="_blank">Ver su famoso gol contra Inglaterra</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón del Mundial 1986 con Argentina</li>
  <li>Ícono del Napoli, ganando múltiples títulos de la Serie A</li>
</ul>`,

    "Thiabut Courtois": `<h2>Thibaut Courtois: El Gigante Belga</h2>
<p>
  Courtois es uno de los mejores porteros del fútbol actual, conocido por su envergadura y reflejos rápidos bajo los tres palos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos y alcance:</strong> Su altura y rapidez le permiten hacer paradas difíciles. 
    <a href="https://www.youtube.com/watch?v=cdhuHa3T43A" target="_blank">Ver sus mejores paradas</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
  <li>Guante de Oro en la Copa del Mundo 2018</li>
</ul>`,

    "Victor Valdes": `<h2>Víctor Valdés: El Guardián de la Era Dorada del Barcelona</h2>
<p>
  Víctor Valdés fue el portero del legendario Barcelona de Guardiola, conocido por su consistencia y seguridad en la portería.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Distribución precisa:</strong> Valdés jugaba un papel clave en la salida con el balón desde el fondo. 
    <a href="https://www.youtube.com/watch?v=qKVLX-m1CpE" target="_blank">Ver su técnica</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>3 veces campeón de la Champions League con el Barcelona</li>
</ul>`,

    "Lev Yashin": `<h2>Lev Yashin: La Araña Negra</h2>
<p>
  Yashin es considerado uno de los mejores porteros de todos los tiempos y es el único guardameta en ganar el Balón de Oro.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos y liderazgo:</strong> Era famoso por su capacidad para detener penales y comandar su defensa. 
    <a href="https://www.youtube.com/watch?v=5yoTKT0XcU0" target="_blank">Ver sus mejores atajadas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Balón de Oro en 1963</li>
</ul>`,

    "Petr Cech": `<h2>Petr Čech: El Muro Checo</h2>
<p>
  Petr Čech es conocido por su consistencia y longevidad en el fútbol de élite, particularmente con el Chelsea.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Reflejos rápidos:</strong> Famoso por sus salvadas cruciales en momentos decisivos. 
    <a href="https://www.youtube.com/watch?v=f7Kh9hYFdK4" target="_blank">Ver sus mejores paradas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón de la Champions League con el Chelsea en 2012</li>
</ul>`,

    "Carles Puyol": `<h2>Carles Puyol: El Guerrero del Barcelona</h2>
<p>
  Puyol es conocido por su liderazgo y entrega total en cada partido, siendo un defensor central clave en la historia del Barcelona.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Marcaje fuerte:</strong> Puyol era implacable en sus entradas y su capacidad para leer el juego. 
    <a href="https://www.youtube.com/watch?v=lyFyQ9Ddpu4" target="_blank">Ver sus mejores defensas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón del Mundial 2010 con España</li>
  <li>3 veces campeón de la Champions League con el Barcelona</li>
</ul>`,

    "Roberto Carlos": `<h2>Roberto Carlos: El Lateral de los Misiles</h2>
<p>
  Roberto Carlos es recordado por sus potentes tiros libres y su velocidad jugando como lateral izquierdo.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Disparos potentes:</strong> Roberto Carlos era capaz de anotar desde grandes distancias con increíble potencia. 
    <a href="https://www.youtube.com/watch?v=3ECoR__tJNQ" target="_blank">Ver su famoso gol de tiro libre</a>
  </li>
</ul>
<h3>Logros:</h3>
<ul>
  <li>Campeón del Mundial 2002 con Brasil</li>
  <li>Múltiples títulos con el Real Madrid</li>
</ul>`,

    "Johan Cruyff": `<h2>Johan Cruyff: El Arquitecto del Fútbol Total</h2>
<p>
  Cruyff revolucionó el fútbol con su concepto de "fútbol total", tanto como jugador como entrenador, influyendo profundamente en el juego moderno.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Creatividad y visión:</strong> Cruyff era famoso por su capacidad para organizar jugadas ofensivas. 
    <a href="https://www.youtube.com/watch?v=5MtVTETNm0s" target="_blank">Ver sus mejores jugadas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>3 veces ganador del Balón de Oro</li>
</ul>`,

    "Dani Alves": `<h2>Dani Alves: El Lateral Más Laureado</h2>
<p>
  Dani Alves es el jugador más laureado de la historia del fútbol, famoso por su habilidad ofensiva y su capacidad de asistir desde el lateral derecho.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Asistencias desde la banda:</strong> Su capacidad para crear oportunidades de gol era inigualable. 
    <a href="https://www.youtube.com/watch?v=RIFDH2R_y3M" target="_blank">Ver sus asistencias</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Múltiples títulos de la Champions League con el Barcelona</li>
</ul>`,

    "Cafú": `<h2>Cafu: El Rey de los Laterales</h2>
<p>
  Cafu es uno de los mejores laterales derechos de todos los tiempos, conocido por su incansable energía y su capacidad tanto ofensiva como defensiva.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad y resistencia:</strong> Cafu dominaba toda la banda derecha con su velocidad y resistencia física. 
    <a href="https://www.youtube.com/watch?v=rmAG6hJHJpU" target="_blank">Ver su juego</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Dos veces campeón del Mundial con Brasil (1994, 2002)</li>
</ul>`,

    "Virgil Van Dijk": `<h2>Virgil Van Dijk: El Roca de Anfield</h2>
<p>
  Van Dijk es uno de los defensores centrales más dominantes del fútbol moderno, conocido por su físico imponente y su lectura del juego.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Fuerza y liderazgo:</strong> Van Dijk es una roca en la defensa y un líder natural. 
    <a href="https://www.youtube.com/watch?v=GxRzlBPQ6ls" target="_blank">Ver sus mejores jugadas defensivas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón de la Champions League con el Liverpool</li>
</ul>`,

    "Gerard Piqué": `<h2>Gerard Piqué: El Defensor Catalán</h2>
<p>
  Piqué ha sido una figura clave en la defensa del Barcelona durante más de una década, combinando su inteligencia defensiva con una gran habilidad para jugar el balón.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Juego aéreo:</strong> Piqué es excelente en los balones aéreos tanto en defensa como en ataque. 
    <a href="https://www.youtube.com/watch?v=8UyHCIRNoFg" target="_blank">Ver su juego aéreo</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón del Mundial 2010 con España</li>
  <li>Multiples titulos con el Barcelona</li>
</ul>`,

    "Fabio Cannavaro": `<h2>Fabio Cannavaro: El General Italiano</h2>
<p>
  Cannavaro es uno de los defensores más grandes de la historia, siendo uno de los pocos en ganar el Balón de Oro por su actuación defensiva.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Anticipación y liderazgo:</strong> Su capacidad para leer el juego y anticiparse a las jugadas era excepcional. 
    <a href="https://www.youtube.com/watch?v=_U_kvjZGbHE" target="_blank">Ver sus mejores intervenciones</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón del Mundial 2006 con Italia</li>
  <li>Balón de Oro en 2006</li>
</ul>`,

    "Philipp Lahm": `<h2>Philipp Lahm: El Capitán Silencioso</h2>
<p>
  Lahm fue uno de los jugadores más inteligentes del fútbol, destacando tanto como lateral derecho como centrocampista defensivo.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Inteligencia táctica:</strong> Lahm era capaz de jugar en múltiples posiciones gracias a su gran conocimiento del juego. 
    <a href="https://www.youtube.com/watch?v=ON_OHDZPb-Q" target="_blank">Ver su juego</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón del Mundial 2014 con Alemania</li>
</ul>`,

    Marcelo: `<h2>Marcelo: El Lateral Ofensivo</h2>
<p>
  Marcelo es conocido por su habilidad técnica y su capacidad para crear oportunidades ofensivas desde el lateral izquierdo.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Regate y ataque:</strong> Marcelo es excepcional en el uno contra uno y en su capacidad para asistir. 
    <a href="https://www.youtube.com/watch?v=23ihVkSYPXk" target="_blank">Ver sus mejores jugadas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
</ul>`,

    "Franz Beckenbauer": `<h2>Franz Beckenbauer: El Kaiser</h2>
<p>
  Beckenbauer es uno de los mejores defensores de la historia, conocido por inventar el rol de "líbero", controlando tanto la defensa como el ataque.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Visión y liderazgo:</strong> Beckenbauer era un maestro en organizar el juego desde la defensa. 
    <a href="https://www.youtube.com/watch?v=r-BjK-p8deI" target="_blank">Ver su estilo de juego</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón del Mundo 1974 con Alemania</li>
</ul>`,

    "Thierry Herny": `<h2>Thierry Henry: El Rey de Arsenal</h2>
<p>
  Henry es uno de los mejores delanteros de la historia, famoso por su velocidad, regate y capacidad para definir en cualquier situación.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad y definición:</strong> Henry era letal en contraataques, combinando velocidad y técnica. 
    <a href="https://www.youtube.com/watch?v=lbgp20sRlYo" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón del Mundial 1998 con Francia</li>
</ul>`,

    "Alfredo Di Stefano": `<h2>Alfredo Di Stéfano: La Saeta Rubia</h2>
<p>
  Di Stéfano es una de las leyendas más grandes del fútbol, destacando por su versatilidad, liderazgo y habilidad goleadora.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Versatilidad:</strong> Di Stéfano podía jugar en cualquier posición ofensiva con éxito. 
    <a href="https://www.youtube.com/watch?v=RLhLqTpJ5Fo" target="_blank">Ver sus mejores jugadas</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>5 veces campeón de la Copa de Europa con el Real Madrid</li>
</ul>`,

    "Luis Suarez": `<h2>Luis Suárez: El Pistolero</h2>
<p>
  Luis Suárez es uno de los delanteros más prolíficos del fútbol moderno, conocido por su instinto goleador y su capacidad para crear jugadas.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Finalización clínica:</strong> Suárez es letal dentro del área, capaz de marcar desde cualquier ángulo. 
    <a href="https://www.youtube.com/watch?v=edXLkxHkbBY" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros mas relevante</h3>
<ul>
  <li>Campeón de la Champions League con el Barcelona</li>
  <li>Campeón de la Copa America con Uruguay</li>
</ul>`,

    "Karim Benzema": `<h2>Karim Benzema: El Líder del Real Madrid</h2>
<p>
  Benzema es conocido por su inteligencia táctica, su capacidad para asistir y su habilidad goleadora.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Visión y definición:</strong> Benzema es un delantero completo que puede tanto crear como finalizar jugadas. 
    <a href="https://www.youtube.com/watch?v=27vwxWc5YQU" target="_blank">Ver sus mejores goles y asistencias</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
</ul>`,

    "Samuel Eto'o": `<h2>Samuel Eto'o: El León Indomable</h2>
<p>
  Eto'o es uno de los mejores delanteros africanos de todos los tiempos, conocido por su velocidad, poder físico y capacidad goleadora.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Velocidad y fuerza:</strong> Eto'o era temido por su capacidad para romper defensas con su velocidad y potencia. 
    <a href="https://www.youtube.com/watch?v=w_Ncb_6w0ls" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón de la Champions League con el Barcelona e Inter de Milán</li>
</ul>`,

    "Ruud Gullit": `<h2>Ruud Gullit: El Líder Holandés</h2>
<p>
  Gullit es conocido por su versatilidad, liderazgo y capacidad técnica, siendo uno de los jugadores más completos de su generación.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Versatilidad:</strong> Gullit podía jugar en varias posiciones, siempre aportando calidad y presencia física. 
    <a href="https://www.youtube.com/watch?v=FDQlsrJ77Fo" target="_blank">Ver su estilo de juego</a>
  </li>
</ul>
<h3>Logro mas relevante</h3>
<ul>
  <li>Campeón de la Eurocopa 1988 con Holanda</li>
</ul>`,

    "Luka Modric": `<h2>Luka Modrić: El Mago Croata</h2>
<p>
  Luka Modrić es uno de los mejores centrocampistas del fútbol moderno, conocido por su capacidad de pase, visión de juego y control del ritmo del partido.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Visión y distribución:</strong> Modrić destaca por su precisión en los pases largos y cortos, y su capacidad para controlar el ritmo del partido. 
    <a href="https://www.youtube.com/watch?v=htWxYlUZ6fA" target="_blank">Ver sus mejores asistencias</a>
  </li>
  <li><strong>Capacidad defensiva:</strong> A pesar de su estatura, Modrić tiene una gran capacidad para recuperar balones en el medio campo. 
    <a href="https://www.youtube.com/watch?v=zmlExZt_jMk" target="_blank">Ver sus recuperaciones y jugadas defensivas</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Balón de Oro en 2018</li>
  <li>Campeón de la Champions League con el Real Madrid en varias ocasiones</li>
  <li>Subcampeón del Mundial 2018 con Croacia</li>
</ul>`,

    "Xavi Hernandez": `<h2>Xavi Hernández: El Cerebro del Barcelona</h2>
<p>
  Xavi Hernández es uno de los mejores centrocampistas de todos los tiempos, conocido por su precisión en los pases y su capacidad para controlar el juego desde el medio campo.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Pases precisos:</strong> Xavi es famoso por su capacidad para mantener la posesión y realizar pases precisos en cualquier situación. 
    <a href="https://www.youtube.com/watch?v=qQtFbbVAbJY" target="_blank">Ver sus mejores pases</a>
  </li>
  <li><strong>Control del juego:</strong> Xavi es un maestro en la organización del juego, manteniendo el equipo siempre en movimiento. 
    <a href="https://www.youtube.com/watch?v=XMhlfQ2zQ9A" target="_blank">Ver su control en el medio campo</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón del Mundo 2010 con España</li>
  <li>4 veces campeón de la Champions League con el Barcelona</li>
</ul>`,

    "Andrés Iniesta": `<h2>Andrés Iniesta: El Artista del Fútbol</h2>
<p>
  Andrés Iniesta es conocido por su habilidad para driblar en espacios reducidos y su capacidad para marcar goles importantes, como el de la final del Mundial 2010.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Regate y control:</strong> Iniesta es famoso por su capacidad para moverse con el balón en situaciones de presión. 
    <a href="https://www.youtube.com/watch?v=Tc8YASf7yXo" target="_blank">Ver sus mejores jugadas</a>
  </li>
  <li><strong>Visión de juego:</strong> Su capacidad para crear oportunidades y asistir a sus compañeros es única. 
    <a href="https://www.youtube.com/watch?v=Hwwg1xV5YJg" target="_blank">Ver sus asistencias</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón del Mundo 2010 con España</li>
  <li>Campeón de la Eurocopa 2008 y 2012</li>
  <li>4 veces campeón de la Champions League con el Barcelona</li>
</ul>`,

    "Kevin De Bruyne": `<h2>Kevin De Bruyne: El Motor del Manchester City</h2>
<p>
  De Bruyne es uno de los mejores centrocampistas ofensivos del mundo, conocido por su capacidad para realizar pases filtrados, disparos de larga distancia y su visión de juego.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Pases precisos:</strong> De Bruyne es conocido por sus asistencias largas y sus pases filtrados, que rompen las defensas rivales. 
    <a href="https://www.youtube.com/watch?v=VeXzmC9CWhU" target="_blank">Ver sus mejores asistencias</a>
  </li>
  <li><strong>Disparo de larga distancia:</strong> Su capacidad para disparar desde fuera del área es temida por los rivales. 
    <a href="https://www.youtube.com/watch?v=qPmZhRNMzhU" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros mas relevantes</h3>
<ul>
  <li>Campeón de la Premier League con el Manchester City en varias ocasiones</li>
  <li>Jugador del Año de la Premier League</li>
</ul>`,

    "Toni Kroos": `<h2>Toni Kroos: El Maestro del Medio Campo</h2>
<p>
  Kroos es uno de los centrocampistas más técnicos del fútbol actual, conocido por su precisión en los pases y su capacidad para controlar el ritmo de los partidos.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Pases precisos:</strong> Kroos tiene una de las tasas de precisión en pases más altas del fútbol moderno, lo que le permite dictar el ritmo del juego. 
    <a href="https://www.youtube.com/watch?v=IcCp1JmNkLw" target="_blank">Ver sus mejores pases</a>
  </li>
  <li><strong>Disparos de larga distancia:</strong> Su precisión en tiros lejanos, tanto en juego abierto como en tiros libres, es excelente. 
    <a href="https://www.youtube.com/watch?v=YjsJxxbXbFk" target="_blank">Ver sus mejores goles</a>
  </li>
</ul>
<h3>Logros mas relevantes </h3>
<ul>
  <li>Campeón del Mundial 2014 con Alemania</li>
  <li>Múltiples títulos de la Champions League con el Real Madrid</li>
</ul>`,

    "Frank Lampard": `<h2>Frank Lampard: El Cerebro del Chelsea y de Inglaterra</h2>
<p>
  Frank Lampard es considerado uno de los mediocampistas más destacados de la Premier League, conocido por su inteligencia en el campo y su impresionante habilidad para marcar goles desde media distancia.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Llegada al área y disparo:</strong> Lampard era experto en unirse al ataque y convertir desde afuera del área. 
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores goles</a>
  </li>
  <li><strong>Visión de juego:</strong> Sus pases precisos lo hacían un maestro en la distribución. 
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver su visión en acción</a>
  </li>
</ul>
<h3>Logros más relevantes:</h3>
<ul>
  <li>Múltiples títulos de la Premier League con el Chelsea</li>
  <li>Ganador de la Champions League en 2012</li>
  <li>Mediocampista con más goles en la historia de la Premier League</li>
</ul>`,

    "David Beckham": `<h2>David Beckham: El Maestro de los Tiros Libres</h2>
<p>
  David Beckham es uno de los futbolistas ingleses más icónicos, conocido por su precisión en los tiros libres y su capacidad para generar jugadas ofensivas desde las bandas.
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Precisión en los tiros libres:</strong> Beckham tenía una técnica impecable para colocar el balón en la red desde larga distancia.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores tiros libres</a>
  </li>
  <li><strong>Visión y centros precisos:</strong> Su capacidad para asistir con centros milimétricos lo hacía un arma letal.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores asistencias</a>
  </li>
</ul>
<h3>Logros más relevantes:</h3>
<ul>
  <li>Campeón de la Premier League con el Manchester United</li>
  <li>Ganador de la Champions League en 1999</li>
  <li>Figura destacada del Real Madrid y la selección inglesa</li>
</ul>
`,

    "René Higuita": `<h2>René Higuita: El Loco de la Portería</h2>
<p>
  René Higuita, apodado "El Loco", es uno de los porteros más carismáticos e innovadores del fútbol, famoso por sus arriesgadas jugadas y el estilo único del "Escorpión".
</p>
<h3>Características Destacadas:</h3>
<ul>
  <li><strong>Estilo del "Escorpión":</strong> Higuita hizo famosa esta técnica al rechazar el balón con los talones.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver el famoso escorpión</a>
  </li>
  <li><strong>Juego fuera del área:</strong> Su habilidad para salir y participar en jugadas ofensivas lo hizo un portero único.
    <a href="https://www.youtube.com/watch?v=XYZ" target="_blank">Ver sus mejores jugadas</a>
  </li>
</ul>
<h3>Logros más relevantes:</h3>
<ul>
  <li>Campeón de la Copa Libertadores con Atlético Nacional</li>
  <li>Participación en múltiples Copas del Mundo con Colombia</li>
  <li>Figura icónica del fútbol sudamericano</li>
</ul>`,
  };

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
