// ===== BOTÃO PRINCIPAL =====
const btnWrapper = document.querySelector(".btn-default")
const btn = document.querySelector(".btn-default button")
const menu = document.querySelector(".message")

btn.addEventListener("click", () => {
  menu.classList.add("active") // mostra a mensagem
  btnWrapper.style.display = "none" // some com o botão
})

// ===== CONTADOR =====
const dataInicial = new Date(2024, 0, 1, 0, 0, 0) // 01/01/2024 00:00:00

function atualizarContador() {
  const agora = new Date()

  let anos = agora.getFullYear() - dataInicial.getFullYear()
  let meses = agora.getMonth() - dataInicial.getMonth()
  let dias = agora.getDate() - dataInicial.getDate()
  let horas = agora.getHours() - dataInicial.getHours()
  let minutos = agora.getMinutes() - dataInicial.getMinutes()
  let segundos = agora.getSeconds() - dataInicial.getSeconds()

  // Ajuste de valores negativos
  if (segundos < 0) {
    segundos += 60
    minutos--
  }
  if (minutos < 0) {
    minutos += 60
    horas--
  }
  if (horas < 0) {
    horas += 24
    dias--
  }
  if (dias < 0) {
    const ultimoDiaMesAnterior = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate()
    dias += ultimoDiaMesAnterior
    meses--
  }
  if (meses < 0) {
    meses += 12
    anos--
  }

  // Contar o dia atual
  dias += 1

  document.getElementById("contador").innerText =
    `${anos} anos, ${meses} meses, ${dias} dias, ` +
    `${horas}h ${minutos}min ${segundos}s`
}

setInterval(atualizarContador, 30000)
atualizarContador()

// ===== CARROSSEL =====
const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")

let index = 0

function mostrarSlide(n) {
  slides.forEach((slide) => slide.classList.remove("active"))
  slides[n].classList.add("active")
}

function proximoSlide() {
  index++
  if (index >= slides.length) index = 0
  mostrarSlide(index)
}

function slideAnterior() {
  index--
  if (index < 0) index = slides.length - 1
  mostrarSlide(index)
}

// Botões laterais
nextBtn.addEventListener("click", () => {
  proximoSlide()
  clearInterval(autoPlay)
})

prevBtn.addEventListener("click", () => {
  slideAnterior()
  clearInterval(autoPlay)
})

// Autoplay a cada 4 segundos
let autoPlay = setInterval(() => {
  proximoSlide()
}, 4000)

// Mostrar o slide inicial
mostrarSlide(index)

