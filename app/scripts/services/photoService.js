/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('PersonalWebsiteAngularApp')
  .factory('picasaService', ['$http', '$q', function($http, $q) {
    // Service logic

    $http.defaults.useXDomain = true;
    
    function parsePhoto(entry) {
      var lastThumb = entry.media$group.media$thumbnail.length - 1
      var photo = {
        thumb: entry.media$group.media$thumbnail[lastThumb].url,
        thumbHeight: entry.media$group.media$thumbnail[lastThumb].height,
        thumbWidth: entry.media$group.media$thumbnail[lastThumb].width,
        url: entry.media$group.media$content[0].url
      };
      return photo;
    }
    
    function parsePhotos(url) {
      var d = $q.defer();
      var photo;
      var photos = [];
      loadPhotos(url).then(function(data) {
        if (!data.feed) {
          photos.push(parsePhoto(data.entry));
        } else {
          var entries = data.feed.entry;
          for (var i = 0; i < entries.length; i++) {
            photos.push(parsePhoto(entries[i]));
          }
        }
        d.resolve(photos);
        
      });
      return d.promise;
    }

    function loadPhotos(url) {
      var d = $q.defer();
      $http.jsonp(url + '?alt=json&kind=photo&hl=pl&imgmax=912&callback=JSON_CALLBACK').success(function(data, status) {
        d.resolve(data);
      });
      return d.promise;
    }

    // Public API here
    return {
      get : function (url) {
        return parsePhotos(url);
      }
    };
  }]);


//.factory('photoService', function($resource) {
//     var url=$resource("https://picasaweb.google.com/data/feed/api/user/117003610218296462827/albumid/5989210984621611985?alt=json");
//   
//    $(document).ready(function(){
//        var json_Album_URI = "https://picasaweb.google.com/data/feed/base/"
//            + "user/"       +   "117003610218296462827"
//            + "?alt="       +   "json"
//            + "&kind="      +   "album"
//            + "&hl="        +   "en_US"
//            + "&fields="    +   "entry(media:group,id)"
//            + "&thumbsize=" +   104;
//    }
//  return 
//  
//})
//
//.module('PersonalWebsiteAngularApp')
//.config([
//  '$httpProvider', function($httpProvider) {
//    $httpProvider.defaults.useXDomain = true;
//    return delete $httpProvider.defaults.headers.common["X-Requested-With"];
//  }
//]);
//
//
