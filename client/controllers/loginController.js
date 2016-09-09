angular
  .module('LoginController', ['ngRoute', 'UserFactory'])
  .controller('LoginController', loginController)

function loginController($location, UserFactory) {
  $scope.login = function () {
    UserFactory.updateUser(this.username);
    $location.path('profile');
  };
}
