'use strict';

angular.module('pammSkeleton.controllers', []).
controller('HomeController', [ '$http', '$log', '$scope', 'helloWorldService',
    function($http, $log, $scope, helloWorldService) {

        // Example of calling a service on controller load. Loads data from a service into scope for use in html.
        helloWorldService.success(function(data) {
            $scope.hello = data;
        });
    }]);