// Directiva que representa cada fila en la lista de genreas.
angular.module("jeviteca").directive("elementoFavGenre", function() {

   return {

      restrict: "A",
      templateUrl: "views/FavGenreItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         genre: "=",
         onStarChange: "&"
      },

      link: function(scope, elemento) {

         scope.starChanged = function() {

            scope.onStarChange({ idGenre: scope.genre.id });

         };

      }
   };
});

