angular
  .module('UserFactory', [])
  .factory('UserFactory', userFactory)

function userFactory($http) {
  let userData = [];
  let user = '';

  userData.fetch = function () {
    return $http.get(ADDURL + '?user=' + user);
  };

  userData.updateUser = function (data) {
    user = data;
  };
  return userData;
}
