angular.module('Weather')
  .directive('weather', weather);

var key = '&appid=5f4af2500f000a00c37ee341963dfc14';

function weather(){
  var directive = {
    scope: {
      city: '@'
    },
    restrict: 'E',
    templateUrl: './templates/weatherDirective.html',
    replace: true,
    controller: weatherDirController,
    controllerAs: 'weatherDirCtrl'
  }
  return directive;
}

weatherDirController.$inject=['$http', '$scope'];
function weatherDirController($http, $scope){
  var vm = this;
  console.log($scope.city);
  vm.getWeather = function(city){
    var query = '?q=' + city + key + '&units=imperial';
    $http({
      method:'GET',
      url:'http://api.openweathermap.org/data/2.5/weather'+query
    }).success(function(data){
      console.log(data);
      vm.weather=data
    }).error(function(error){
      console.log(error);
    });

  }
  vm.getWeather($scope.city);
}
