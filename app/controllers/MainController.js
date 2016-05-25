app.controller('MainController', function($scope ,mainModel) {

    $scope.data = mainModel.data ;
    $scope.colors_list = mainModel.data.colors ;
    $scope.screens_list = mainModel.data.screens ;
    $scope.features_list = mainModel.data.features ;
    $scope.brands_list = mainModel.data.brands ;
    $scope.memory_list = mainModel.data.memory ;
    $scope.mobile_list = mainModel.data.mobile_list ;
     


    //selected mobile item from the list
    $scope.selected_mobile_item =  null ;

    $scope.setSelected = function (mobile_item) {
       console.log("Selcting", arguments, this.id);
       $scope.selected_mobile_item = mobile_item;
    };
 
     

    // var updateItems = function() {
    //     $scope.pagedItems = reportingModel.countries.slice($scope.itemsPerPage * ($scope.currentPage - 1), $scope.itemsPerPage * $scope.currentPage);
    // };

    // $scope.currentPage = 1;
    // $scope.totalItems = reportingModel.countries.length;
    // $scope.itemsPerPage = 10;
    // $scope.numPages = 0;
    // $scope.hello = 'Today Report';

    // $scope.selectItemsPerPage = function(itemNo) {
    //     $scope.itemsPerPage = itemNo;
    //     updateItems();
    // };

    // $scope.setPage = function(pageNo) {
    //     $scope.currentPage = (pageNo === -1) ? $scope.numPages : pageNo;
    //     updateItems();
    // };

    // $scope.$watch('currentPage', function() {
    //     updateItems();
    // });

    // $scope.pagedItems = [];

    // $scope.myData = reportingModel.today;

});







