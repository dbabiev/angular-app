angular.module("app.service")
    .service("chartService", function(){
        var defaultCfg = {
            colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
                return {
                    radialGradient: {
                        cx: 0.5,
                        cy: 0.3,
                        r: 0.7
                    },
                    stops: [
                        [0, color],
                        [1, Highcharts.Color(color).brighten(-0.3).get('rgb')]
                    ]
                };
            })
        };

        this.configChart = function(cfg){
            angular.extend(Highcharts.getOptions(), cfg || defaultCfg);
        };
    });
