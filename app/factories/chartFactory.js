angular.module("app.factory")   // not used
    .factory("chartFactory", function(){
        var chartCfg = {
            radar: {
                clazz: "Radar",
                dataTemplate: {
                    labels: [],
                    datasets: [{
                        fillColor: "rgba(151,187,205,0.2)",
                        strokeColor: "rgba(151,187,205,1)",
                        pointColor: "rgba(151,187,205,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: []
                    }]
                },
                compileData: function(labels, datasets){
                    var me = this;
                    var m1 = {
                        labels: labels,
                        datasets: datasets.forEach(function(data, idx){
                            return me.radar.stylies[idx].forEach(function(style){
                                return angular.extend(style, { data: data});
                            })
                        })
                    };
                    return m1;
                }
            },
            polarArea: {
                clazz: "PolarArea",
                options: []
            }
        };

        return {
            instantiate: function(type, context){
                var cfg = chartCfg[type];
                return new Chart(context)[cfg.clazz](cfg.dataTemplate);
            },

            dataSetFormatCfg: function(type, labels){
                var cfg = chartCfg[type];
                return function(datasets){
                    return cfg.compileData(labels, datasets);
                }
            }
        }
    });