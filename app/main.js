angular.module("App", [])
    .run(function($rootScope){
        $rootScope.global = {
            version: "1.0"
        };
        $rootScope.log = function(data){
            console.log(data);
        }
    });