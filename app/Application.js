

var app = angular.module("MobileApplication", ['ui.bootstrap','app.directives' ]);

//root scop to load all data
app.run(function($rootScope ,MyStorage ) {
    
     //load data from localStorage or app json
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
// service to load Local storage data or if there is no data it will init the data

app.service('MyStorage', function () {
       

       // to make service use it self
       var self = this ;
        // service to load Local storage data or if there is no data it will init the data
        this.loudDataFromLocalStorage = function  () {
             if (typeof localStorage["data"] !== "undefined") {
               var data  = JSON.parse(localStorage["data"]);
                console.log("data louded form local storage ");
                return  data  ;
                
              }else {

                   console.log("No data in localStorage : getting data form json file" );
                  //load from  json file
                   var data = this.laodDataFromJsonFile (); 
                   
                   
                   //Save to storage
                   var save  = angular.toJson(data );
                   
                   localStorage.setItem('data',save );
                   return data  ;
              }
        },
        // service to load data from json file
        this.laodDataFromJsonFile = function()
         {
            // var defer = $q.defer();
            // $http.get('data/mobile_data.json').success(function(data){
                   
            //         // data = JSON.parse(data);
                    
            //         console.log("Data louded form json file " + data);
            //         defer.resolve(data);
            //     });
            //     return defer.promise;
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
         //
    
    
})


// this service prepair data for visualization 
app.service('getVisulizedData', [function ($rootScope) {
 this.geData = function ($rootScope) {

    //prepare json for collecting data
    var data = {'mobileCount_vs_brand' : {} , 'mobileCount_vs_year':{}};
    for (var i = 0 ; i< $rootScope.data.mobile_list.length ; i++) {
            var year = $rootScope.data.mobile_list[i].manufacture_year ;
            var brand = $rootScope.data.mobile_list[i].brand ;

            // alert(year);
            // var count =
            if(data['mobileCount_vs_year'][year] === undefined ){
              data['mobileCount_vs_year'][year] = 1 ;
            }else {
              data['mobileCount_vs_year'][year]++ ;
            }
            // alert(data[year]);
            if(data['mobileCount_vs_brand'][brand] === undefined ){
              data['mobileCount_vs_brand'][brand] = 1 ;
            }else {
              data['mobileCount_vs_brand'][brand]++ ;
            }
            // alert(data[year]);


    };
   // make custome json to be visulized
   var newData = {'mobileCount_vs_brand' : [] , 'mobileCount_vs_year':[]};
   for (var brand in data['mobileCount_vs_brand']) {
      newData['mobileCount_vs_brand'].push({ 'brand' : brand , 'count' :  data['mobileCount_vs_brand'][brand] } );
   };
   for (var year in data['mobileCount_vs_year']) {
      newData['mobileCount_vs_year'].push({ 'year' : year , 'count' :  data['mobileCount_vs_year'][year] } );
   };
    return newData ;
  } 
}])




/*
 * This configures the routes and associates each route with a view and a controller
 */
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






