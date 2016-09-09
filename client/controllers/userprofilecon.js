angular
  .module('UserProfileController', ['ngRoute', 'EventFactory', 'ActivityFactory'])
  .controller('UserProfileController', usercontroller)

function usercontroller($scope, $location, EventFactory, ActivityFactory) {
  $scope.image = undefined;
  $scope.activities = [];
  $scope.completed = [];
  $scope.description = '';

  $scope.activityView = function () {
    EventFactory.updateEvent(this.activity);
    $location.path('activities');
  };

  $scope.addActivity = function () {
    ActivityFactory.updateUser(this.user);
    $location.path('addActivity');
  };
}
