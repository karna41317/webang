/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('PersonalWebsiteAngularApp').controller('PhotoViewCtrl', function($scope, photoService) {
  $scope.doneLoading = false;
  return $scope.photos = photoService.query((function(data) {
    console.log("success");
    return $scope.doneLoading = true;
  }), function(err) {
    alert("Could not load photos");
    return $scope.doneLoading = true;
  });
}).directive('photoblock', function() {
  return {
    templateUrl: 'views/photoBlock.html',
    restrict: 'E'
  };
});
