

var app = angular.module("MobileApplication", ['ui.bootstrap','app.directives']);

/* The factory creates the various models for the application */
app.factory('reportingModel', function() {
    return new ReportingModel();
});


app.factory('mainModel', function() {
    return new MainModel();
});

app.factory('addModel', [function () {
	

	return new AddModel();
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






