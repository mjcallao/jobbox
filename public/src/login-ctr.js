angular.module('main').controller("loginCtrl",[ "$scope","$rootScope","$location", function($scope,$rootScope,$location){
    $rootScope.userStateVisit = false; 
    $scope.userLogin = {
        categories : "",
        email: "",
        password:""
    }
    $scope.userVisitor =function(){
        $rootScope.userStateVisit = true;
    }

    $scope.validationEmail ="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";
    // $scope.validationEmail ="/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i";
    $scope.login = function(){
        console.log("form: ",$scope.formLogin.$valid);
        if($scope.formLogin.$valid){
            $location.path( "/menu" );
        }else{
        }
    }
    
}]);
