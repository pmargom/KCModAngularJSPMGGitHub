angular.module("jeviteca").directive("favAlbumFav", function(Backend) {

   return {
      restrict: "E",
      templateUrl: "views/FavAlbumFav.html",
      scope: {
         album: "=",
         hideFav: "="
      },
      link: function (scope) {

         scope.markAsFav = function(evento) {

            // Paramos la propagación del evento click para evitar que se dispare el click del elemento <tr>.
            evento.stopPropagation();
//debugger;
            // marcamos el elemento como favorito y lo guardamos en el local storage.
            if (typeof(Storage) !== "undefined") {
               // primero, recupero la lista de de favoritos que ya pudiera existir
               var favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               if (favAlbums === null){
                  favAlbums = [];
               }
               var item = _.find(favAlbums, function(it){ return it.id === scope.album.id; });
               if (typeof(item) === "undefined"){
                  favAlbums.push(scope.album);
               }
               else {
                  //debugger;
                  var index = favAlbums.indexOf(item); // en teoría, item es igual que scope.album. Pero en la práctica no!!!
                  favAlbums.splice(index, 1);
               }
               localStorage.setItem("favAlbums", JSON.stringify(favAlbums));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }

         };

         // comprobar si el album está marcado como favorito o no
         scope.isFav = function() {

            debugger;
            scope.hideFav = false;
            if (typeof(Storage) !== "undefined") {

               var favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               if (favAlbums === null){
                  return false;
               }
               var item = _.where(favAlbums, {id: scope.album.id});
               return item.length !== 0;
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
               return false;
            }
         };

      }
   };

});