miapp.controller('a', function($scope, $http) {

  $scope.hola = "hola";
    $http.post("/session")
  .then(function(response) {
      $scope.myWelcome = response.data;
  });
  $scope.hola = "hola";
});