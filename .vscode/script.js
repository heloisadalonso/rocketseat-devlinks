function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }

  //trocar imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-lightmode.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.querySelector("alt")
  if (html.classList.contains("light")) {
    alt.setAttribute(
      "alt",
      "Foto de Heloísa Dalonso usando óculos escuros em um fundo branco"
    )
  } else {
    alt.setAttribute(
      "alt",
      "Foto de Heloísa Dalonso usando óculos de grau em fundo branco"
    )
  }
}
