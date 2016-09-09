angular
  .module('UserProfileController', ['ngRoute', 'EventFactory', 'UserFactory'])
  .controller('UserProfileController', usercontroller)

function usercontroller($scope, $location, $http, EventFactory, UserFactory) {
  $scope.image = undefined;
  $scope.activities = [];
  $scope.completed = [];
  $scope.description = '';

  $scope.activityView = function () {
    EventFactory.updateEvent(this.activity);
    $location.path('activities');
  };

  $scope.addActivity = function () {
    EventFactory.updateUser(this.user);
    $location.path('addActivity');
  };

  function loadPage() {
    UserFactory.fetch().then((req, res) => {
      $scope.image = res.body[0].image;
      $scope.activities = ?;
      $scope.completed = ?;
      $scope.description = res.body[0].desc;
    })
  }
  loadPage();
}
