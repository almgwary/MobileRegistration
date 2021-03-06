 /**
  * Problem : MobileApplication
  * Author  : Almgwary
  * Date    : dd-mm-yy
  * Thin    : ddM
  **/

var app = angular.module("MobileApplication", ['ui.bootstrap','app.directives' ]);

//load data from localStorage or app json rootScope
app.run(function($rootScope ,MyStorage ) {

  $rootScope.data=  MyStorage.loudDataFromLocalStorage();
});

// create new opject each time
app.factory('mainModel', function() {
    return new MainModel();
});


// create new opject each time
app.factory('addModel', [function () {
    return new AddModel();
}]);


// service is singilton per injector
// service to load Local storage data or if there is no data it will init the data .
app.service('MyStorage', function () {
       

      // To make service use it self
      var self = this ;
      // Service to load Local storage data or if there is no data it will init the data
      this.loudDataFromLocalStorage = function  () {
             if (typeof localStorage["data"] !== "undefined") {
                var data  = JSON.parse(localStorage["data"]);
                console.log("data louded form local storage ");
                return  data  ;
                
              }else{
                console.log("No data in localStorage : getting data form json file" );
                //load from  json file
                var data = this.laodDataFromJsonFile (); 
                //Save to storage
                var save  = angular.toJson(data);
                localStorage.setItem('data',save);
                return data  ;
              }
      },

      // service to load data from json file
      this.laodDataFromJsonFile = function()
      {
          
                var json_data = new MainModel().data ;
                console.log("Data louded form json file ");
                return json_data; 
      },
      // service to load data from json file
      this.clearLocalStorage = function()
      {
            localStorage.clear();
            console.log("clearLocalStorage");
             
      },
      // service to load data from json file
      this.saveData = function(data)
      {
          
          localStorage.setItem('data',data);
          console.log("Data Saved To Local Storage");   
      }

})






// This configures the routes and associates each route with a view and a controller
 
app.config(function($routeProvider) {
      $routeProvider
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'app/templates/main.html'
            })
            .when('/add', {
                controller: 'AddController',
                templateUrl: 'app/templates/add.html'
            })
            .otherwise({redirectTo: '/main'});
});






