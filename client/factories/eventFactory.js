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
    return $http.get(ADDURL + '?search=' + user);
  };

  return obj;
}
