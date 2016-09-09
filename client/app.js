var app = angular
  .module('myApp', [
    'ngRoute'
  ]);

app.config(configFunction);

function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/userprofile.html',
      controller: ''
    })
    .when('/activities', {
    	templateUrl: './partials/activitieslist.html',
    	controller: 'activitiesController'
    });

}
