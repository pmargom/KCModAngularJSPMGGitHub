
angular.module("jeviteca").provider("Backend", function($httpProvider) {

   return {

      // Definimos el factory que se inyectará en fase de run.
      $get: ["$http", "$q", function($http, $q) {

         return {

            // get the list of albums
            getAlbums: function() {
               return $http.get("data/albums.json");
            },

            // get the list of albums marked as favourite
            getFavAlbums: function(){

               //debugger;
               var favAlbums = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favAlbums = JSON.parse(localStorage.getItem("favAlbums"));
               }
               return favAlbums;
            },

            // get the list of bands
            getBands: function() {
               return $http.get("data/bands.json");
            },

            // get the list of bands marked as favourite
            getFavBands: function(){

               //debugger;
               var favBands = [];
               //debugger;
               if (typeof(Storage) !== "undefined") {

                  favBands = JSON.parse(localStorage.getItem("favBands"));
               }
               return favBands;
            },

         };
      }]
   };


});