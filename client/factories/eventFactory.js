angular
  .module('EventFactory', [])
  .factory('EventFactory', eventFactory)

function eventFactory($http) {
  let obj = {};
  let event = '';
  let user = '';

  obj.updateEvent = function (data) {
    event = data;
  };
  obj.updateUser = function (data) {
    user = data;
  };

  obj.fetchUsers = function () {
    return $http.get(ADDURL + '?activity=' + event)
  };

  obj.fetchActivities = function () {
    return $http.get('http://localhost:3000/activities');
  };

  obj.addUserToEvent = function (data) {
    data.userid = user;
    console.log(data);
    return $http.post('localhost:3000/useractivity/add', data);
  };
  return obj;
}
