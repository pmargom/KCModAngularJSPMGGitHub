// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoGenre", function() {

   return {

      restrict: "A",

      templateUrl: "views/GenreItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         genre: "="
      }
   };
});

