//delay del scroll
ScrollReveal().reveal('inicio');
ScrollReveal().reveal('.conocimientos', {delay: 700});
ScrollReveal().reveal('.experiencias', {delay: 700});
ScrollReveal().reveal('.contacto', {delay: 700});

//scroll de header
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >0);
})

// fuincion de escritura
const yo = document.getElementById('yo')
const conocimientos = document.getElementById('conocer')
const experiencias = document.getElementById('misExperiencias')
const contacto = document.getElementById('miContacto')


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
escritura('Conocimientos  ',150, conocimientos)
escritura('Experiencias  ',150, experiencias)
escritura('Contacto  ',150, contacto)

function nombre(){
  alert("Ese es mi nombre ;) ;) ;)")
}