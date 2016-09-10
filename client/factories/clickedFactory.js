angular
  .module('ClickedFactory', [])
  .factory('ClickedFactory', ClickedFactory)

function ClickedFactory($location, $http) {
  const userInfo = {};
  let clicked = '';

  userInfo.setUser = function (data) {
    clicked = data;
    console.log('in setUSer', clicked)
    $location.path('contact');
  };

  userInfo.getInfo = function () {
    console.log('in clickedFactory', clicked);
    $http.get('http://localhost:3000/userinfo/' + clicked);
  };
  return userInfo;
}
