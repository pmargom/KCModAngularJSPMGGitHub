// Directiva que representa cada fila en la lista de álbumes.
angular.module("jeviteca").directive("elementoFavAlbum", function() {

   return {

      restrict: "A",
      templateUrl: "views/FavAlbumItem.html",

      // Con scope establecemos la interfaz de comunicación.
      scope: {
         album: "=",
         albums: "=",
         onAlbumClick: "&"
      },

      link: function(scope, elemento) {

         elemento.bind("click", function() {

            //debugger;
            // configuro la llamada al evetno y los parámetros que serán pasados
            scope.onAlbumClick({ idAlbum: scope.album.id });

         });


         //scope.starChanged = function() {
         //
         //   debugger;
         //   scope.onStarChange({ nIt: scope.nItems });
         //
         //};

      }
   };
});

