angular.module("app.controller")
    .controller("chartController", function($scope){
        $scope.polar = {
            labels: [],
            data: []
        };
        $scope.pie = {
            data: []
        };

        var groupBy = function(data, field){
            var result = [];
            var group = _.groupBy(data, field);
            for(var el in group){
                result.push({
                    name: el,
                    y: group[el].length,
                    data: group[el]
                })
            }
            return result;
        };

        $scope.$watch(function(){ return $scope.$parent.cars; }, function(){
            if($scope.cars){
                $scope.polar = {
                    labels: $scope.cars.map(function(car){ return car.model; }),
                    data: $scope.cars.map(function(car){ return car.price; })
                };
                $scope.pie = {
                    data: groupBy($scope.cars, "year")
                };
            }
        }, true);
        setTimeout(function(){
            console.log($scope.$parent.cars);
        }, 5000)
    });