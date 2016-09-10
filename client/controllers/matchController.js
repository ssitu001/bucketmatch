angular
  .module('MatchController', ['ngRoute', 'EventFactory'])
  .controller('MatchController', MatchController);

  function MatchController($location, $scope, EventFactory) {
    $scope.users;
      // get's other user's profile when you click on the user
  function getOtherUsers() {
    // use userFactory updateUser to get data
    EventFactory.fetchMatches()
      .then(function(res) {
        console.log("res inside match", res)
        $scope.users = res.data.users;
      })
  };
  getOtherUsers();


  };
