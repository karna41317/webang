/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('PersonalWebsiteAngularApp').factory('blogService', function($resource) {
  return $resource("http://zhihaomai.herokuapp.com/blogs/:id", {
    id: "@id",
    likes: "@likes",
    dislikes: "@dislikes"
  }, {
    list: {
      method: "GET",
      isArray: true
    },
    update: {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      }
    }
  });
});

angular.module('PersonalWebsiteAngularApp').config([
  '$httpProvider', function(provider) {
    provider.defaults.useXDomain = true;
    provider.defaults.headers.common["X-CSRF-Token"] = $("meta[name=csrf-token]").attr("content");
    return delete provider.defaults.headers.common["X-Requested-With"];
  }
]);
