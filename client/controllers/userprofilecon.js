angular
  .module('UserProfileController', ['ngRoute', 'EventFactory', 'UserFactory'])
  .controller('UserProfileController', usercontroller)

function usercontroller($scope, $location, $http, EventFactory, UserFactory) {
  $scope.image = undefined;
  $scope.activities = [];
  $scope.completed = [];
  $scope.description = '';
  $scope.username = '';

  $scope.activityView = function () {
    EventFactory.updateEvent(this.activity);
    $location.path('activities');
  };

  $scope.addActivity = function () {
    EventFactory.updateUser(this.user);
    $location.path('addActivity');
  };

  function loadPage() {
    UserFactory.fetch().then((data) => {
      console.log(data);
      $scope.image = data.data.profilepic;
      $scope.activities = '';
      $scope.completed = '';
      $scope.description = data.data.bio;
    })
  }
  loadPage();
}
