onload = () =>{
        document.body.classList.remove("container");
};
const contador = document.getElementById("contador");

// 👉 Cambia el año si es necesario
const fechaObjetivo = new Date("February 15, 2026 00:00:00").getTime();

function actualizarContador() {

  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  if (diferencia <= 0) {
    contador.innerHTML = "💖 ¡Ya es 15 de Febrero! 💖";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  contador.innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(actualizarContador, 1000);
actualizarContador();
