
// Controlador encargado de la lógica correspondiente con vista de la lista de álbumes.
angular.module("jeviteca").controller("AlbumListCtrl", function($scope, Albums, $location, $timeout) {

   // Almacenamos en local la lista de álbumes para que no se muestren
   // todos directamente en la vista.
   var albums = Albums.data;

   // Establecemos las propiedades del paginador.
   $scope.paginador = {

      // Cambiamos de página.
      cambioDePagina: function() {
         // Obtenemos el primer y último elemento de la página a mostrar.
         var primero = ($scope.paginador.paginaActual - 1) * $scope.paginador.elementosPorPagina;
         var ultimo = primero + $scope.paginador.elementosPorPagina;
         // Establecemos en la vista la página seleccionada.
         $scope.albums = albums.slice(primero, ultimo);
      },

      // Página actual.
      paginaActual: 1,

      // Total de elementos -albums-.
      totalElementos: albums.length,

      // Tamaño de página.
      elementosPorPagina: 4
   };

   // Forzamos el cambio de página para que traiga la primera al entrar a la vista.
   $scope.paginador.cambioDePagina();

   // Redirigir el navegador al detalle del post indicado.
   $scope.navegar = function(idPost) {

      // Forzamos el ciclo digest con ejecutando la redirección dentro de un $timeout.
      $timeout(function() { $location.path("/detalle/" + idPost); }, 100);
   };

});