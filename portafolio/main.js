ScrollReveal().reveal('inicio');
ScrollReveal().reveal('.conocimientos', {delay: 700});
ScrollReveal().reveal('.experiencias', {delay: 700});
ScrollReveal().reveal('.contacto', {delay: 700});

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >0);
})

const yo = document.getElementById('yo')

const escritura = (text = '',tiempo = 200, etiqueta = '') => {
  let arrayCaracteres = text.split('')
  etiqueta.innerHTML = ''
  let i = 0
  let j = text.length
  let escribir = setInterval(function(){
    if (i === arrayCaracteres.length) {
      etiqueta.innerHTML = text.substring(0,j)
      j--
      if (j === 0) {
        etiqueta.innerHTML = ''
        i = 0
        j = text.length
      }
    } else {
      etiqueta.innerHTML += arrayCaracteres[i]
      i++
    }
  }, tiempo)
}

escritura("Sobre mi  ",150, yo)