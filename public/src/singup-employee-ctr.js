angular.module("main").controller("singUpEmployeeCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    
    $rootScope.userRegistration={
      
        tel:"",
        cel:"",
        provinces : "",
        locality : ""
    }

   $scope.validationTelFijo =/^\d{2,5}\s\d{6,8}$/;

   $scope.validationCelular =/^\d{2,5}\s\d{6,8}$/;

    $scope.nextPageRegistration =function (){
        // console.log("user",$scope.userRegistration);
        // console.log("form: ",$scope.formRegistration.$valid);
        if($scope.formRegistration.$valid){
        // if(true){
          $location.path( "/categories" );
        }else{
        }
    }


}])