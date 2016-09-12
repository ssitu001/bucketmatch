angular
  .module('UserProfileController', ['ngRoute', 'EventFactory', 'UserFactory'])
  .controller('UserProfileController', usercontroller)

function usercontroller($scope, $location, $http, EventFactory, UserFactory) {
  $scope.image = undefined;
  $scope.activities = [];
  $scope.completed = [];
  $scope.description = '';
  $scope.userid = '';
  $scope.username = '';

  $scope.activityView = function () {
    console.log("inside usercontroler", this.activity.actname)
    EventFactory.updateEvent(this.activity.actname);
  };

  $scope.addActivity = function () {
    EventFactory.updateUser($scope.userid);
    $location.path('addActivity');
  };

  function loadPage() {
    UserFactory.fetch().then((data) => {
      if (data === null) {
        UserFactory.error('Sorry incorrect username or password.  Please try again')
        $location.path('/');
      }
      $scope.image = data.data.user.profilepic;
      $scope.activities = data.data.activities;
      $scope.completed = '';
      $scope.description = data.data.user.bio;
      $scope.userid= data.data.user._id;
      $scope.username = data.data.user.username;
    });
  }
  loadPage();
}
