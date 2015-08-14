angular.module("App")
    .filter("formatYear", function(){
        return function(year){
            var diff = year ? new Date().getFullYear() - year : 0;
            return (diff > 0) ? year + " (" + diff + " ago)" : year;
        }
    });