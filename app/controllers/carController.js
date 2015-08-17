angular.module("App")
    .controller("carController", function($scope){
        $scope.cars = cars;
        $scope.sort = {
            column: '',
            asc: false
        };

        $scope.sortBy = function(field){
            $scope.sort.asc = !$scope.sort.asc;
            $scope.sort.asc ?
                $scope.cars = $scope.cars.sort(function(a, b){ return a[field] > b[field]; }) :
                $scope.cars = $scope.cars.sort(function(a, b){ return a[field] < b[field]; });
        };

        $scope.randomPrice = function(){
            var max = 100000;
            var min = 10000;
            cars.forEach(function(car){
                car.price = (Math.random() * (max - min) + min).toFixed();
            })
        };

        $scope.randomYear = function(){
            var max = 2020;
            var min = 2010;
            cars.forEach(function(car){
                car.year = (Math.random() * (max - min) + min).toFixed();
            })
        };
    });