
angular.module("jeviteca").provider("Backend", function($httpProvider) {

   return {

      // Definimos el factory que se inyectará en fase de run.
      $get: ["$http", "$q", function($http, $q) {

         return {

            // obtenemos la lsita de álbumes
            getAlbums: function() {
               return $http.get("data/albums.json");
            },

            getFavAlbums: function(){

               var favAlbums = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               }
               return favAlbums;
            },

            // obtenemos la lista de bandas
            getBands: function() {
               return $http.get("data/bands.json");
            }

         };
      }]
   };


});