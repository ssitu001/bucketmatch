angular
  .module('UserFactory', [])
  .factory('UserFactory', userFactory)


function userFactory($http) {
  let userData = [];
  let user = 'bnbjknb';

  userData.fetch = function () {
    return $http.get('http://localhost:3000/user/' + user);
  };

  userData.updateUser = function (data) {
    console.log(data)
    user = data;
  };
  return userData;
}
