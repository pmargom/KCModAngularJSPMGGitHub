
// Definición de la aplicación.
angular.module("jeviteca", ["ngRoute", "angular-loading-bar", "ui.bootstrap"]);

// En fase de config, inyectamos $httpProvider para configurar las cabeceras
// por defecto de los distintos métodos HTTP del servicio $http, que usamos
// para pedir los datos al servidor.
angular.module("jeviteca").config(function(BackendProvider, Properties) {

   //BackendProvider.establecerApiKey(Properties.apiKey);
   //BackendProvider.habilitarPeticionesCors();
   //BackendProvider.setUrlBackend(Properties.backendUrl);
});

// En fase de config, inyectamos cfpLoadingBarProvider para configurar
// la barra de progreso que se muestra con las peticiones HTTP.
angular.module("jeviteca").config(function(cfpLoadingBarProvider) {

   cfpLoadingBarProvider.includeSpinner = false
});

// En fase de config inyectamos $routeProvider para configurar las rutas de la aplicación.
angular.module("jeviteca").config(function($routeProvider) {

   // Definir la ruta de "Albums".
   $routeProvider.when("/albums", {
      controller: "AlbumListCtrl",
      templateUrl: "views/AlbumList.html",
      // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
      // Tenemos que usar la anotación de array en línea.
      resolve: {
         Albums: ["Backend", function(Backend) {
            return Backend.getAlbums();
         }]
      }
   });

   $routeProvider.when("/albums/favourites", {
      controller: "FavAlbumListCtrl",
      templateUrl: "views/FavAlbumList.html",
      resolve: {
         Albums: ["Backend", function(Backend) {
            return Backend.getFavAlbums();
         }]
      }
   });

   // Definir la ruta de "Bands".
   $routeProvider.when("/bands", {
      controller: "BandListCtrl",
      templateUrl: "views/BandList.html",
      // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
      // Tenemos que usar la anotación de array en línea.
      resolve: {
         Bands: ["Backend", function(Backend) {
            return Backend.getBands();
         }]
      }
   });

   $routeProvider.when("/bands/favourites", {
      controller: "FavBandListCtrl",
      templateUrl: "views/FavBandList.html",
      resolve: {
         Bands: ["Backend", function(Backend) {
            return Backend.getFavBands();
         }]
      }
   });

   /*
   // Difinir la ruta de "Nuevo Post".
   $routeProvider.when("/nuevo", {
      controller: "NuevoPostCtrl",
      templateUrl: "views/NuevoPost.html"
   });

   // Definir la ruta de "Detalle de Post".
   $routeProvider.when("/detalle/:idPost", {
      controller: "DetallePostCtrl",
      templateUrl: "views/DetallePost.html",
      // En "resolve" establecemos todas aquellas dependencias que tenga el controlador.
      // Tenemos que usar la anotación de array en línea.
      resolve: {
         Post: ["Backend", "$route", function(Backend, $route) {
            return Backend.obtenerPost($route.current.params.idPost);
         }]
      }
   });
*/
   // Configuramos una ruta por defecto.
   $routeProvider.otherwise({
      redirectTo: "/albums"
   });

});