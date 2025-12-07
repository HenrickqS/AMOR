// ===== BOTÃO PRINCIPAL (mostrar mensagem e sumir botão) =====
const btnWrapper = document.querySelector(".btn-default");
const btn = document.querySelector(".btn-default button");
const menu = document.querySelector(".message");

btn.addEventListener("click", () => {
  menu.classList.add("active"); // mostra a mensagem
  btnWrapper.style.display = "none"; // some com o botão
});

// ===== CONTADOR =====
const dataInicial = new Date(2024, 0, 1, 0, 0, 0); // 1º de Janeiro de 2024

function atualizarContador() {
  const agora = new Date();
  let diferenca = agora - dataInicial;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const meses = Math.floor(dias / 30.4375);
  const anos = Math.floor(meses / 12);

  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;
  const diasRestantes = Math.floor(dias % 30.4375);
  const mesesRestantes = meses % 12;

  document.getElementById("contador").innerText =
    `${anos} anos, ${mesesRestantes} meses, ${diasRestantes} dias, ` +
    `${horasRestantes}h ${minutosRestantes}min ${segundosRestantes}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

// ===== CARROSSEL =====
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

// Mostra o slide atual
function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}

// Avança para o próximo slide
function proximoSlide() {
  index++;
  if (index >= slides.length) index = 0;
  mostrarSlide(index);
}

// Volta para o slide anterior
function slideAnterior() {
  index--;
  if (index < 0) index = slides.length - 1;
  mostrarSlide(index);
}

// Eventos dos botões
nextBtn.addEventListener("click", () => {
  proximoSlide();
  clearInterval(autoPlay); // pausa autoplay ao clicar
});

prevBtn.addEventListener("click", () => {
  slideAnterior();
  clearInterval(autoPlay); // pausa autoplay ao clicar
});

// Autoplay a cada 1 minuto (60000ms)
let autoPlay = setInterval(proximoSlide, 60000);

// Inicializa o primeiro slide
mostrarSlide(index);
