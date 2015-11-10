// Filtro que escribe una firma dados un album y una fecha.
angular.module("jeviteca").filter("albumFirma", function() {

   // Los filtros siempre retornes funciones.
   // Además, siempre tienen al menos un parámetro, que es el dato de entrada.
   return function(band, year) {

      return "Published by " + band.name + " in " + year;
   };
});