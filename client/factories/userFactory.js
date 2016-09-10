angular
  .module('UserFactory', [])
  .controller('UserFactory', userFactory)

function userFactory($http) {
  let userData = [];
  let user = '1';

  userData.fetch = function () {
    return $http.get('http://localhost:3000/user/' + user);
  };

  userData.updateUser = function (data) {
    user = data;
  }
  return userData;
}
