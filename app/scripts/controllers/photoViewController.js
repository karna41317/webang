/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
angular.module('PersonalWebsiteAngularApp').controller('PhotoViewCtrl', function($scope,photoService) {
  $scope.doneLoading = false;

  console.log(photoService.feed);
//  $scope.photoService.feed.0.content.src = image;
/*$scope.photos = [
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/1.jpg'},
                  {title:'glass-1',subtitle:'lokeshhouse',url:'/images/albums/2.jpg'},
                  {title:'glass-1',subtitle:'lokeshhouse',url:'/images/albums/2.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/4.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/5.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/6.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/7.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/8.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/9.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/10.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/11.jpg'},
                  {title:'glass',subtitle:'lokesh_house',url:'/images/albums/12.jpg'}
                ];*/
return $scope.photos=photoService.query(

/*  function(data) {

                 var feed = data.feed;
                 var entries = feed.entry || [];

                for(var i=0;i<feed.entries.length;++i)
                  {

                    var entry = entries[i];
                    url=entry.content.src;
                    summary=entry.summary.$t;
                  }
                }
*/
  function(data){

$.each(data.entry, function (index, value) {

        // Get the items


        var data_obj = [];
        var el = {'title': entries[i].summary['$t'], 'url': 'href='+entries[i].content[src]+''};
        data_obj.push(el);
        // Iterate through items.

    });
            /*  var data_obj = [];
              var feed = data.feed;
              var entries = feed.entry || [];
              for (var i=0; i<entries.length; i++){
                  var el = {'title': entries[i].summary['$t'], 'url': 'href='+entries[i].content[src]+''};
                  data_obj.push(el)};
              return data_obj;
          */  }
/*return $scope.photos = photoService.query((function(data) {
    console.log("success");
    return $scope.doneLoading = true;
  }), function(err) {
    alert("Could not load photos");
    return $scope.doneLoading = true;
  });*/
);})
.directive('photoblock', function() {
  return {
    templateUrl: 'views/photoBlock.html',
    restrict: 'E'
  };
});
