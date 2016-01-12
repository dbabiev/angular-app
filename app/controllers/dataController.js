angular.module("app.controller")
    .controller("dataController", function($scope, dataService){
        $scope.cars = [];
        dataService.jsonCars().promise.then(function(cars){
            $scope.cars = cars;
        });
    });