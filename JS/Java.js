const carousel = document.querySelector('.carousel');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const Sim = document.getElementById('sim');
const larguraImagem = carousel.clientWidth;

anteriorBtn.addEventListener('click', () => {
  carousel.scrollBy(-larguraImagem, 0);
});

proximoBtn.addEventListener('click', () => {
  carousel.scrollBy(larguraImagem, 0);
});
Sim.addEventListener('click', () => {
  alert("Sim");
});