angular
  .module('EventFactory', [])
  .controller('EventFactory', eventFactory)

function eventFactory($http) {
  let event = '';
  let user = '';

  event.updateEvent = function (data) {
    event = data;
  };
  event.updateUser = function (data) {
    user = data;
  };

  event.fetchUsers = function () {
    return $http.get(ADDURL + '?activity=' + event)
  };

  event.fetchActivities = function () {
    return $http.get(ADDURL + '?search=' + user);
  };

  return event;
}
