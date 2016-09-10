const App = angular
  .module('myApp', ['ngRoute', 'UserProfileController', 'ActivitiesController', 'LoginController', 'MatchController','EventFactory', 'UserFactory']);

App.config(configFunction);

function configFunction($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './partials/login.html',
      controller: 'LoginController',
    })
    .when('/profile', {
      templateUrl: './partials/userprofile.html',
      controller: 'UserProfileController',
    })
    .when('/activities', {
    templateUrl: './partials/activitiesusers.html',
    controller: 'MatchController',
    })
    .when('/addActivity', {
      templateUrl: './partials/addactivity.html',
      controller: 'ActivitiesController',
    });
}
