

 


app.controller('AddController', function($scope ,addModel,mainModel,MyStorage,$location) {

    
      
      //load data from localStorage or app json
     $scope.data =  MyStorage.loudDataFromLocalStorage();


     
    
        $scope.me = {};
        $scope.me.id = $scope.data.mobile_list.length;
        $scope.me.model; 
        $scope.me.manufacture_year; 
        $scope.me.brand; 
        $scope.me.memory; 
        $scope.me.features; 
        $scope.me.screen; 
        $scope.me.color; 


     $scope.save =   function ()  {
      console.log("Saving and going to Main" );
      $scope.data.mobile_list.push($scope.me) ;
      MyStorage.saveData( angular.toJson($scope.data ));
      $location.path('/main');

     } ;



      $scope.back = function (){
      console.log("back to Main" );
       $location.path('/main');


     };

});







