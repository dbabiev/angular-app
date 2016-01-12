angular.module("app.directive")
    .directive("polar", function(){
        return {
            restrict: "E",
            link: function($scope, element, attrs){
                element.highcharts({
                    chart: {
                        polar: true,
                        type: 'line'
                    },

                    title: {
                        text: attrs["title"]
                    },

                    pane: {
                        size: '80%'
                    },

                    xAxis: {
                        categories: [],
                        tickmarkPlacement: 'on',
                        lineWidth: 0
                    },

                    yAxis: {
                        gridLineInterpolation: 'polygon',
                        lineWidth: 0,
                        min: 0
                    },

                    tooltip: {
                        shared: true,
                        pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
                    },
                    series: [{
                        name: attrs["seriesName"],
                        data: [],
                        pointPlacement: 'on',
                        showInLegend: false
                    }]
                });

                $scope.$watch(function(){ return $scope.polar; }, function(){
                    var chart = element.highcharts();
                    var source = this.get();
                    chart.xAxis[0].setCategories(source.labels || [], true);
                    chart.series[0].setData(source.data || [], true);
                }, true)
            }
        }
    })
    .directive("pie", function(){
        return {
            restrict: "E",
            link: function($scope, element, attrs){
                element.highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: attrs["title"]
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                },
                                connectorColor: 'silver'
                            }
                        }
                    }
                });

                $scope.$watch(function(){ return $scope.pie; }, function(){
                    var chart = element.highcharts();
                    var source = this.get();
                    chart.series[0] && chart.series[0].remove();
                    chart.addSeries({
                        name: attrs["seriesName"],
                        data:  source.data || []
                    });
                }, true)
            }
        }
    });