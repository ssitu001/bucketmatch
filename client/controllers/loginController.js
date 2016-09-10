angular
  .module('LoginController', ['ngRoute', 'UserFactory'])
  .controller('LoginController', LoginController)

function LoginController($location, $scope, UserFactory) {
  $scope.login = function () {
    UserFactory.updateUser(this.username);
    $location.path('profile');
  };
}
