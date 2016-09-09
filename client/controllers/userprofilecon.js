angular
  .module('UserProfileController', ['ngRoute', 'EventFactory']);

function homecontroller($scope, $location, EventFactory) {
  $scope.activityView = function () {
    EventFactory.updateEvent(this.activity);
    $location.path('activities');
  };
