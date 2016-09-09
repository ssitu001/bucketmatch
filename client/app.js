const App = angular
  .module('myApp', ['ngRoute', 'UserProfileController', 'ActivitiesController']);

App.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/userprofile.html',
      controller: 'UserProfileController',
    })
    .when('/activities', {
    templateUrl: './partials/activitiesusers.html',
    controller: 'ActivitiesController',
    })
    .when('/addActivity', {
      templateUrl: './partials/addactivity.html',
      controller: 'ActivitiesController',
    });
}
