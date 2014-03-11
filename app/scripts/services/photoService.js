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

'use strict';
angular.module('PersonalWebsiteAngularApp', ['ngResource']).config(function($routeProvider) {
  return $routeProvider.when('/photo', {
    templateUrl: 'views/photoView.html',
    controller: 'PhotoViewCtrl'
    });});


   connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
    livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              proxySnippet,
              mountFolder(connect, '.tmp'),
              mountFolder(connect, yeomanConfig.app),
              function(req, res, next) {
                res.setHeader('Access-Control-Allow-Origin', '*');
                res.setHeader('Access-Control-Allow-Methods', '*');
                next();
              } 
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    }

//
//   connect: {
//      options: {
//        port: 9000,
//        // Change this to '0.0.0.0' to access the server from outside.
//        hostname: 'localhost',
//        livereload: 35729
//      },
//    livereload: {
//        options: {
//          open: true,
//          base: [
//            '.tmp',
//            '<%= yeoman.app %>'
//          ]
//              } 
//      },
//      test: {
//        options: {
//          port: 9001,
//          base: [
//            '.tmp',
//            'test',
//            '<%= yeoman.app %>'
//          ]
//        }
//      },
//      dist: {
//        options: {
//          base: '<%= yeoman.dist %>'
//        }
//      }
//    }