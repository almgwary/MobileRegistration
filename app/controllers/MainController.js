 /**
  * Problem : MainController
  * Author  : Almgwary
  * Date    : dd-mm-yy
  * Thin    : ddM
  **/

app.controller('MainController', function($scope ,$location ,MyStorage , $rootScope) {






// All data
$scope.colors_list =  $rootScope.data.colors ;
$scope.screens_list =  $rootScope.data.screens ;
$scope.features_list =  $rootScope.data.features ;
$scope.brands_list =  $rootScope.data.brands ;
$scope.memory_list =  $rootScope.data.memory ;
$scope.mobile_list =  $rootScope.data.mobile_list ;


// search inputs
$scope.selectedmodel ;
$scope.selectedBrand  ;


// filter  for search
$scope.myFilter = function(item) {

// if selectedmodel and selectedBrand === undefined then show all of them
if (($scope.selectedmodel === undefined || $scope.selectedmodel === "" )
  && ($scope.selectedBrand === undefined || $scope.selectedBrand === "") ) { return true  };
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







//watch input and updata opjects
$scope.$watch('selectedmodel +selectedBrand', function(data) {


  if(data) { 
          // prepair visual data
          var newData = [];
          var mobile_list =  $rootScope.data.mobile_list ;
          
          // collect data form custom filter
          angular.forEach( mobile_list , function (value) {
            if ($scope.myFilter(value) === true ){
              newData.push(value);
             }
          });

          $scope.mobile_list  =  newData ; 
          // prepair custome opject of visual data
          $scope.visulData =  $scope.geData(newData ) ;

 

}}) ; 


// prepair custome opject of visual data for charts
$scope.geData = function (mobile_list) {

  //prepare json for collecting data
  var data = {'mobileCount_vs_brand' : {} , 'mobileCount_vs_year':{}};
  for (var i = 0 ; i< mobile_list.length ; i++) {
    var year = mobile_list[i].manufacture_year ;
    var brand = mobile_list[i].brand ;
    if(data['mobileCount_vs_year'][year] === undefined ){
      data['mobileCount_vs_year'][year] = 1 ;
    }else {
      data['mobileCount_vs_year'][year]++ ;
    }
     
    if(data['mobileCount_vs_brand'][brand] === undefined ){
      data['mobileCount_vs_brand'][brand] = 1 ;
    }else {
      data['mobileCount_vs_brand'][brand]++ ;
    }};

  // make custome json to be visulized
  var newData = {'mobileCount_vs_brand' : [] , 'mobileCount_vs_year':[]};
  for (var brand in data['mobileCount_vs_brand']) {
    newData['mobileCount_vs_brand'].push({ 'brand' : brand , 'count' :  data['mobileCount_vs_brand'][brand] } );
  };

  var i = 0  ; // =D 
  for (var year in data['mobileCount_vs_year']) {

    newData['mobileCount_vs_year'].push({ 'year' : year  , 'count' :  data['mobileCount_vs_year'][year] } );

  };
  return newData ;
} ;





// prepair visal data
$scope.visulData = $scope.geData($scope.mobile_list);

});







