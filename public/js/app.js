// Funcion para cargar la pagina
var cargarPagina=function(){
  cargarPokemones();
}

// LLamar lista pokemones
var cargarPokemones=function(){
  var url="http://pokeapi.co/api/v2/pokemon/";
  $.getJSON(url, function (response) {
    // De la respuesta del servidor ocupamos los Resultados
    var pokemones=response.results;
    mostrarPokemones (pokemones);
  });
};

var mostrarPokemones=function (pokemones) {


  var $section=$("#listaPokemones");
  pokemones.forEach(function (pokemon) {
  /*var $div=$("<div />");
  $div.addClass(".pokemon");
  $div.text(pokemon.name);
  $section.append($div);*/
  $section.html(plantilla.replace("__nombre__", pokemon.name));

});
};


var plantilla= '<div>' +
'<img src="public/assets/img/"__nombre__".png">' +
'<h5>__nombre__</h5>' +
'</div>';



// Para cargar el documento
$(document).ready(cargarPagina);
