angular
  .module('EventFactory', [])
  .controller('EventFactory', eventFActory)

function eventFactory($http) {
  let event = '';

  event.updateEvent = function (data) {
    event = data;
  };

  event.fetch = function () {
    return $http.get(ADDURL + '?activity=' + event)
  };
}
