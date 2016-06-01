/**
 * Problem : AddController
 * Author  : Almgwary
 * Date    : dd-mm-yy
 * Thin    : ddM
 **/

app.controller('AddController', function($scope ,MyStorage,$location ,$rootScope) {

    
      
      //load data from localStorage or app json
    $scope.data = $rootScope.data    ; 


    
    
    $scope.me = {};
    $scope.me.id = $rootScope.data .mobile_list.length;
    $scope.me.model; 
    $scope.me.manufacture_year; 
    $scope.me.brand; 
    $scope.me.memory; 
    $scope.me.features; 
    $scope.me.screen; 
    $scope.me.color; 


    $scope.save =   function ()  {
      console.log("Saving and going to Main" );
      $rootScope.data .mobile_list.push($scope.me) ;
      MyStorage.saveData( angular.toJson($rootScope.data  ));
      $location.path('/main');

    } ;



    $scope.back = function (){
      console.log("back to Main" );
      $location.path('/main');
    };

});







