angular
  .module('UserFactory', [])
  .factory('UserFactory', userFactory)


function userFactory($http) {
  let userData = [];
  let user = '';
  let password = '';
  let error = '';

  userData.fetch = function () {
    console.log(user, password);
    return $http.get('http://localhost:3000/user/' + user + '/' + password);
  };

  userData.updateUser = function (person, pass) {
    console.log(person, pass);
    user = person;
    password = pass;
  };

  userData.error = function (data) {
    $scope.error = data;
  };

  userData.createNew = function (data) {
    return $http.post(ADDURL + data);
  }
  return userData;
}
