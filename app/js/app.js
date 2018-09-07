
var testApp = angular.module('testingApp', []);

testApp.controller('testController', function ($scope){
    $scope.title = "Testing Billbong application";

    $scope.destinations = [];
    $scope.newDestination = {
        city: undefined,
        country: undefined
    };

    $scope.addDestination = function(){
        $scope.destinations.push({
            city: $scope.newDestination.city,
            country: $scope.newDestination.country
        });
    }
});