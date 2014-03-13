'use strict';
angular.module('PersonalWebsiteAngularApp')
        .directive('picasa', ['picasaService', function(picasaService) {
                return {
                    //works on attribute
                    restrict: 'A',
                    replace: true,
                    scope: {
                        picasa: '@'
                    },
                    templateUrl: 'photoBlock.html',
                    link: function(scope, element, attrs) {
                        if (attrs.height !== undefined && attrs.width !== undefined) {
                            scope.size = 'both';
                        } else {
                            if (attrs.height !== undefined) {
                                scope.size = 'height';
                            }
                            if (attrs.width !== undefined) {
                                scope.size = 'width';
                            }
                        }
                        scope.height = attrs.height;
                        scope.width = attrs.width;

                        if (attrs.thumbHeight !== undefined && attrs.thumbWidth !== undefined) {
                            scope.thumbSize = 'both';
                        } else {
                            if (attrs.thumbHeight !== undefined) {
                                scope.thumbSize = 'height';
                            }
                            if (attrs.thumbWidth !== undefined) {
                                scope.thumbSize = 'width';
                            }
                        }
                        scope.hello='hello';
                        scope.thumbHeight = attrs.thumbHeight;
                        scope.thumbWidth = attrs.thumbWidth;

                        scope.$watch('picasa', function() {
                            if (scope.picasa === '') {
                                return;
                            }
                            picasaService.get(scope.picasa).then(function(data) {
                                scope.photos = data;
                                scope.current = data[0];
                                scope.ready = true;
                            })
                        });

                        scope.setCurrent = function(photo) {
                            scope.current = photo;
                        };
                        scope.move = function(event) {
                            var thumbDiv = element[0].lastElementChild;
                            var x = event.clientX - thumbDiv.offsetLeft;
                            var center = thumbDiv.offsetWidth / 2;
                            var factor = 20;

                            var delta = (x - center) / center * factor;

                            if (delta > 0 && thumbDiv.scrollLeft < (thumbDiv.scrollWidth - thumbDiv.clientWidth)) {
                                thumbDiv.scrollLeft += delta;
                            }
                            if (delta < 0 && thumbDiv.scrollLeft > 0) {
                                thumbDiv.scrollLeft += delta;
                            }

                        }
                    }
                };
            }])