// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoAlbum", function() {

   return {

      restrict: "A",

      templateUrl: "views/AlbumItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         album: "=",
         onPostClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            scope.onPostClick({ idAlbum: scope.album.id });
         });
      }
   };
});

