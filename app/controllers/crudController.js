angular.module("app.controller")
    .controller("crudController", function ($scope, dataService, $document){
        var me = this;
        me.sort = {
            column: '',
            asc: false
        };

        var findCarIdx = function(id){
            return $scope.find($scope.cars, function(car){ return car.id == id; });
        };

        var randomInt = function(min, max){
            return parseInt((Math.random() * (max - min) + min).toFixed());
        };

        this.sortBy = function(field){
            this.sort.asc = !this.sort.asc;
            this.sort.asc ?
                $scope.cars = $scope.cars.sort(function(a, b){ return a[field] > b[field]; }) :
                $scope.cars = $scope.cars.sort(function(a, b){ return a[field] < b[field]; });
        };

        this.randomPrice = function(){
            $scope.cars.forEach(function(car){
                car.price = randomInt(10000, 100000)
            })
        };

        this.randomYear = function(){
            $scope.cars.forEach(function(car){
                car.year = randomInt(2010, 2020)
            })
        };

        this.save = function(){
            if($scope.form.$valid){
                var car = angular.copy($scope._car);
                if(car.id) {
                    var idx = findCarIdx(car.id);
                    (idx != -1) && angular.extend($scope.cars[idx], car);
                }
                else $scope.cars.push(angular.extend({id: $scope.randomId()}, car));
                $scope._car = {};
                $document.find("#dialog").modal("hide");
            }
        };

        this.delete = function(id){
            var idx = findCarIdx(id);
            (idx != -1) && $scope.cars.splice(idx, 1)
        };

        this.prepareEdit = function(id){
            var idx = findCarIdx(id);
            (idx != -1) && ($scope._car = angular.copy($scope.cars[idx]))
        };
    });
