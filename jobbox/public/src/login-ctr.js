angular.module('main').controller("loginCtrl",[ "$scope","$location", function($scope,$location){
    $scope.userLogin = {
        categories : "",
        email: "",
        password:""
    }
    $scope.login = function(){
        console.log("form: ",$scope.userLogin.categories);
        if($scope.formLogin.$valid){
            $location.path( "/home" );
        }else{
        }
    }
    
}]);
