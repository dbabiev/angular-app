angular.module("app.service")
    .service("dataService", function($http, $q){
        return {
            jsonCars: function(){
                var deferred = $q.defer();
                $http.get("/assets/data/cars.json")
                    .success(function(cars){
                        deferred.resolve(cars)
                    })
                    .error(function(cars, status){
                        deferred.reject(status);
                    });
                return deferred;
            }
        }
    });