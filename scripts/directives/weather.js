angular.module('weatherApp')
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
  };

weatherDirController.$inject=['$http', '$scope'];
function weatherDirController($http, $scope){
  var vm = this;
  var url="http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&q=";
  console.log($scope.city);
  vm.getWeather = function(city){
    $http({
      method:'GET',
      url: url + city + key
    }).then(function(response){
      console.log(response);
      vm.weather = response.data;
    }, function(error){
      console.log(error);
    });

  };
  vm.getWeather($scope.city);
};


  return directive
}

// response is not different than data in this case, no?
