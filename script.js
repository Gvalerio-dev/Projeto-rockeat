function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
// essa funcao basicamente faz tudo que foi explicado na anterior diminuindo a quantidade de codigo escrito, entao aqui temos duas formas de fazer a interacao do switch da pagina

  // se na lista de classe conter o 'light' o if entra no codigo, basicamente o if e uma condicional que se for verdadeira sera executada
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // aqui o codigo basicamente ira verificar se ha a classe 'light' na class.list e se caso conter ela removera, se caso 'else' (senao) ela ira adicionar a classe light, apartir do clique do botao que ativara essa funcao

// pegar a tag img
  const img = document.querySelector('#profile img')

// substituicao da imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/fotor_2023-7-4_20_28_12-fotor-2023071218659.png')
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/fotor_2023-7-4_20_27_41-fotor-20230704202756.png')
  }
}