angular.module("jeviteca").directive("albumFav", function(Backend) {

   return {
      restrict: "E",
      templateUrl: "views/AlbumFav.html",
      scope: {
         album: "="
      },
      link: function (scope) {

         scope.markAsFav = function(evento) {

            // Paramos la propagación del evento click para evitar que se dispare el click del elemento <tr>.
            evento.stopPropagation();

            // marcamos el elemento como favorito y lo guardamos en el local storage.
            alert('Marked as fav: ' + scope.album.id);
         };


      }
   };

});