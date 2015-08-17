angular.module("App")
    .service("dataService", function($http){
        return {
            jsonData: function(){
                $http.get("")
            }
        }
    });