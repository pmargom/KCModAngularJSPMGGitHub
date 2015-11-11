// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoFavAlbum", function() {

   return {

      restrict: "A",

      templateUrl: "views/FavAlbumItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         album: "=",
         onFavItemClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            scope.onFavItemClick({ idAlbum: scope.album.id });
         });
      }
   };
});

