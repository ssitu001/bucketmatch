angular
  .module('ActivitiesController', ['ngRoute', 'EventFactory', 'UserFactory'])
  .controller('ActivitiesController', activitiescontroller);

function activitiescontroller($scope, $location, EventFactory, UserFactory) {
  $scope.events = [];

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
