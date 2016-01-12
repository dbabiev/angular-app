angular.module("app", ["app.controller", "app.factory", "app.service", "app.directive"])
    .config(function($provide){
        $provide.constant("version", "1.0");
    })
    .run(function($rootScope, dataService, chartService, version){
        $rootScope.global = {
            version: version
        };
        $rootScope.log = function(data){
            console.log(data);
        };
        $rootScope.randomId = function(){
            return Date.now();
        };
        $rootScope.find = function(arr, predicate){
            for(var i = 0; arr.length > i; i++){
                if(predicate(arr[i])) return i;
            }
            return undefined;
        };
        chartService.configChart();
    });