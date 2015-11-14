
angular.module("jeviteca").filter("BandInfo", function(Properties) {

   return function getWikipediaLink(bandName) {
      var query = encodeURIComponent(bandName);
      return Properties.urlSearchWiki + query;
   }

});