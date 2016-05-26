

// auto search
// auto sorting


app.controller('MainController', function($scope ,mainModel,$location ,MyStorage) {

    
      


    // load data form app service 
    $scope.data =  MyStorage.loudDataFromLocalStorage();
     

    // All data
    $scope.colors_list =  $scope.data.colors ;
    $scope.screens_list =  $scope.data.screens ;
    $scope.features_list =  $scope.data.features ;
    $scope.brands_list =  $scope.data.brands ;
    $scope.memory_list =  $scope.data.memory ;
    $scope.mobile_list =  $scope.data.mobile_list ;
     

    // search inputs
     $scope.selectedmodel ;
     $scope.selectedBrand ;


     // filter  for search
    $scope.myFilter = function(item) {
       // if selectedmodel and selectedBrand === undefined then show all of them
       if (($scope.selectedmodel === undefined || $scope.selectedmodel === "" )&& ($scope.selectedBrand === undefined || $scope.selectedBrand === "") ) { return true  };
       // search by brand
       if (($scope.selectedmodel === undefined || $scope.selectedmodel === "" )) {
        return item.brand === $scope.selectedBrand ;
       }
       // search by model
       if (($scope.selectedBrand === undefined || $scope.selectedBrand === "") ) {
        return item.model === $scope.selectedmodel ;
       }
       //search by model and brand
       return  (item.brand === $scope.selectedBrand  && item.model === $scope.selectedmodel );
    };


    //selected mobile item from the list
    $scope.selected_mobile_item =  null ;

    $scope.setSelected = function (mobile_item) {
       console.log("Selcting", arguments, this.id);
       $scope.selected_mobile_item = mobile_item;
    };
 
     

    $scope.search=function(){
      // there is no need for this variables are auto bibded to filters =D
    }

    // ordering
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }


    // navigate to add page
    $scope.add = function (){
      console.log("Nivgating to addPage");
      $location.path('/add');
    }

    //clear local storage clearLocalStorage
    $scope.clear = function  () {
      MyStorage.clearLocalStorage();
    }

});







