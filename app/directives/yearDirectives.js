angular.module("app.directive")
    .directive("yearColor", function(){
        return function(scope, element, attrs){
            scope.$watch(attrs["yearColor"], function(value){
                if(value){
                    var currentYear = new Date().getFullYear();
                    var color = "orange";
                    if(currentYear > value) color = "red";
                    else if(currentYear < value) color = "green";
                    element.css({color: color});
                }
            });
        }
    })
    .directive("yearPassed", function(){
        return function(scope, element, attrs){
            scope.$watch(attrs["yearPassed"], function(value){
                var diff = value ? new Date().getFullYear() - value : 0;
                var passed = (diff > 0) ? " (" + diff + " ago)" : '';
                element.text(passed);
            });
        };
    });