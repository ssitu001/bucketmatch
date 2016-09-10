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
      $scope.image = res.body[0].image;
      $scope.activities = ?;
      $scope.completed = ?;
      $scope.description = res.body[0].desc;
      $scope.username = res.body[0].username;
    })
  }
  loadPage();
}
