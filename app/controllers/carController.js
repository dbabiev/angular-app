var cars = [
    { mark: 'Porsche',  model: '911',   price: 135000,  year: 2015 },
    { mark: 'Nissan',   model: 'GT-R',  price: 80000,   year: 2012 },
    { mark: 'BMW',      model: 'M3',    price: 60500,   year: 2015 },
    { mark: 'Audi',     model: 'S5',    price: 53000,   year: 2010 },
    { mark: 'Audi',     model: 'TT',    price: 40000,   year: 2015 }
];

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