angular
  .module('LoginController', ['ngRoute', 'UserFactory'])
  .controller('LoginController', LoginController)

function LoginController($location, $scope, UserFactory) {
  $scope.error = UserFactory.error;

  $scope.login = function () {
    UserFactory.updateUser(this.username, this.password);
    $location.path('profile');
  };

  $scope.newUser = function () {
    UserFactory.updateUser(this.NewUsername, this.NewPassword);
    $location.path('NewProfile');
  };
}
