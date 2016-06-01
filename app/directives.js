/**
 * Problem : App.directives
 * Author  : Almgwary
 * Date    : dd-mm-yy
 * Thin    : ddM
 **/

angular.module('app.directives', []).
directive('barsChart', function ($parse) {

 var directiveDefinitionObject = {
         //We restrict its use to an element
         restrict: 'E',
         //we don't want to overwrite our directive declaration in the HTML mark-up
         replace: false,
         //our data source would be an array passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {


            scope.$watch('data', function(data){
                 console.log("barsChart$watch:"  );
                 var ChartBarsYearVsCount  =  dc.barChart(element[0].childNodes.item(3));
                 var ndx = crossfilter(scope.data); 
                 var minYear= 5000000 , maxYear = 1  , count = 0 ; 
                 // barchart input 
                var yearDim = ndx.dimension(function(d) {
                      
                      // calculate lenght
                      var y  =Number(d.year); 
                      if(y > maxYear) maxYear = y ; 
                      if (y < minYear) minYear = y ;
                      count ++ ;
                      return  y ; 
                });
                var count = yearDim.group().reduceSum(function(d) {return d.count;}); 
                ChartBarsYearVsCount
                .width(620)
                .height(250)
                .dimension(yearDim)
                .group(count)
                .elasticY(true)
                .centerBar(true)
                .gap(1)
                .round(dc.round.floor)
                .alwaysUseRounding(true)
                .x(d3.scale.linear() 
                .domain([minYear -2, maxYear +2]))
                .yAxisLabel("Count")
                .xAxisLabel("Year")
                .renderHorizontalGridLines(true)
                .xAxis().ticks(10)
                dc.renderAll();
            });


         
    } 
  };
return directiveDefinitionObject;
})


.directive('biChart', function ($parse) {

 var directiveDefinitionObject = {
         //We restrict its use to an element
         restrict: 'E',
         //we don't want to overwrite our directive declaration in the HTML mark-up
         replace: false,
         //our data source would be an array passed thru chart-data attribute
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {



            scope.$watch('data', function(data){
                  console.log("biChart$watch:"  );
                 
                  var ndx = crossfilter(data);
                  var ChartPieBrandVsCount   = dc.pieChart(element[0].childNodes.item(3));

                  var brand  = ndx.dimension(function(d) {return d.brand;});
                  var count = brand.group().reduceSum(function(d) {return d.count;});

                   ChartPieBrandVsCount
                  .width(250).height(200)
                  .dimension(brand)
                  .group(count)
                  .innerRadius(50);

                  dc.renderAll();

            });



          
        } 
      };
      return directiveDefinitionObject;
    });;




