angular
  .module('UserFactory', [])
  .controller('UserFactory', userFactory)

function userFactory($http) {
  let userData = [];

  userData.fetch = function (data) {
    return $http.get(ADDURL + '?user=' + data);
  };
}
