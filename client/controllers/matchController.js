angular
  .module('MatchController', ['ngRoute', 'EventFactory', 'ClickedFactory'])
  .controller('MatchController', MatchController);

function MatchController($location, $scope, EventFactory, ClickedFactory) {
  $scope.users;
  function getOtherUsers() { // get's other user's for clicked event
    EventFactory.fetchMatches()
    .then((res) => {
      $scope.users = res.data.users;
    });
  }
  getOtherUsers();

  $scope.GetClickedUser = function () {
    ClickedFactory.setUser(this.user.username);
  };
}

