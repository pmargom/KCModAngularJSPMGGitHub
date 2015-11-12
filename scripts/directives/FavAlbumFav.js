angular.module("jeviteca").directive("favAlbumFav", function(Backend, $timeout) {

   return {
      restrict: "E",
      templateUrl: "views/FavAlbumFav.html",
      scope: {
         album: "=",
         albums: "="

      },
      link: function (scope) {

         scope.starChanged = function(evento) {

            evento.stopPropagation();

            debugger;
            if (typeof(Storage) !== "undefined") {

               // first, load from the fav list from localstorage
               scope.albums = JSON.parse(localStorage.getItem("favAlbums"));
               if (scope.albums === null){
                  scope.albums = [];
               }

               // second, get the item that will be unmarked as fav
               var item = _.find(scope.albums, function(it){ return it.id === scope.album.id; });
               if (typeof(item) !== "undefined"){

                  debugger;
                  var index = scope.albums.indexOf(item); // en teoría, item es igual que scope.album. Pero en la práctica no!!!
                  $timeout(function() {
                     scope.albums.splice(index, 1);
                     localStorage.setItem("favAlbums", JSON.stringify(scope.albums));
                  }, 1);
                  //scope.albums.splice(index, 1);
                  // hide the row
                  //angular.element("#album" + scope.album.id).fadeOut('slow');
               }
               //localStorage.setItem("favAlbums", JSON.stringify(scope.albums));
            }
            else {
               alert("Atención!: Su navegador no permite web storage.");
            }

         };
      }
   };

});