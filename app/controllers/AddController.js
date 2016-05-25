

 


app.controller('AddController', function($scope ,addModel,mainModel,$location) {

    
      
      //load data from localStorage or app json
     $scope.data =  new function (){

      if (typeof localStorage["data"] !== "undefined") {
        $scope.data  = JSON.parse(localStorage["data"]);
        console.log("Founded Data");
        return $scope.data  ;
        
      }else {
          //load from app json
           $scope.data = mainModel.data; 
           console.log("Not Founded Data ReInit" );
           //Save to storage
           $scope.save  = angular.toJson($scope.data );
           
           localStorage.setItem('data',$scope.save );
           return $scope.data  ;
      }
        
    }


     
    
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
      $scope.save  = angular.toJson($scope.data );
      localStorage.setItem('data',$scope.save );
      $location.path('/main');

     } ;



      $scope.back = function (){
      console.log("back to Main" );
       $location.path('/main');


     };

});







