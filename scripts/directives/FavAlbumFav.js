angular.module("jeviteca").directive("favAlbumFav", function(Backend) {

   return {
      restrict: "E",
      templateUrl: "views/FavAlbumFav.html",
      scope: {
         album: "=",
         numItems: "=",
         onStarChange: "&"

      },
      link: function (scope, elemento) {

         elemento.bind("click", function() {

            debugger;
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
                  debugger;
                  var index = favAlbums.indexOf(item); // en teoría, item es igual que scope.album. Pero en la práctica no!!!
                  favAlbums.splice(index, 1);
                  // hide the row
                  angular.element("#album" + scope.album.id).fadeOut('slow');
                  // update the rows counter
                  //angular.element("#nRowsFav").html(favAlbums.length)
                  scope.numItems = favAlbums.length;
               }
               localStorage.setItem("favAlbums", JSON.stringify(favAlbums));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }

            // configuro la llamada al evetno y los parámetros que serán pasados
            scope.onFavStarClick({ newNumberOfItems: scope.numItems });

         });

      }
   };

});