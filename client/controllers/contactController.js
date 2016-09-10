angular
  .module('ContactController', ['ngRoute', 'EventFactory', 'ClickedFactory'])
  .controller('ContactController', contactController)

function contactController($scope, ClickedFactory) {
  $scope.username = '';
  $scope.desc = '';
  $scope.image = '';

  function pageLoad() {
    ClickedFactory.getInfo()
      .then((res) => {
        $scope.username = res.data.username;
        $scope.desc = res.data.bio;
        $scope.image = res.data.profilepic;
      });
  }
  pageLoad();
}
