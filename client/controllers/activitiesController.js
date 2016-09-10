angular
  .module('ActivitiesController', ['ngRoute', 'EventFactory', 'UserFactory'])
  .controller('ActivitiesController', activitiescontroller);

function activitiescontroller($scope, $location, EventFactory, UserFactory) {
  $scope.events = [];
  // use fetch from eventFactory that gets all users info.
  // function getUsers() {
  //   EventFactory.fetchUsers()
  //     .then(function (res) {
  //       $scope.users = res.data[0].username;
  //       $scope.userimage = res.data[0].profilepic;
  //     });
  // }
  // $scope.users = getUsers();

  // get's other user's profile when you click on the user
  $scope.getOtherUserProfile = function () {
    // use userFactory updateUser to get data
    UserFactory.updateUser(this.user);
    // relocate to profile page
    $location.path('profile');
  };

  function loadActivities() {
    EventFactory.fetchActivities().then((data) => {
      $scope.events = data.data;
    });
  }

  $scope.addMeToEvent = function () {
    EventFactory.addUserToEvent({ "activityId": this.activity._id });
  };
  loadActivities();
}
