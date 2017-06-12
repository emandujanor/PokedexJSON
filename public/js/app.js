var cargarPagina = function() {
  cargarPokemon();
  //  $(document).on("click", ".pokemon", mostrarDetallePokemon);
};

var cargarPokemon = function() {
  var url = "http://pokeapi.co/api/v2/pokemon/";
  $.getJSON(url, function(response) {
    //console.log(response); nos da la lista de los primeros 20 pokemones
    var pokemones = response.results;
    mostrarPokemones(pokemones);
  });
};


var mostrarPokemones = function(pokemones) {
  var $ul = $("#listaPokemones");
  pokemones.forEach(function(pokemon) {
    var $li = $("<li />");
    $li.addClass("pokemon");
    $li.text(pokemon.name);
    $ul.append($li);

    //console.log ($li);
  });




};

$(document).ready(cargarPagina);
