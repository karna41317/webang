/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('PersonalWebsiteAngularApp')
.factory('photoService', function($resource) {
  return $resource("https://picasaweb.google.com/data/feed/api/user/117003610218296462827/albumid/5989210984621611985?alt=json");
})

.module('PersonalWebsiteAngularApp')
.config([
  '$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    return delete $httpProvider.defaults.headers.common["X-Requested-With"];
  }
]);
