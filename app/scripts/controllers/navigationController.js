angular.module('PersonalWebsiteAngularApp').controller('navigationCtrl', function($scope, $location) {
  return $scope.isActive = function(currentUrl) {
    return currentUrl === $location.$$path;
  };
});
