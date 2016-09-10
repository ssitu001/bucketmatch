angular
  .module('ClickedFactory', [])
  .factory('ClickedFactory', ClickedFactory)

function ClickedFactory($location, $http) {
  const userInfo = {};
  let clicked = '';

  userInfo.setUser = function (data) {
    clicked = data;
    $location.path('contact');
  };

  userInfo.getInfo = function () {
    return $http.get('http://localhost:3000/userinfo/' + clicked);
  };
  return userInfo;
}
