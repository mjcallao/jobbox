angular.module("main").controller("singUpEmployeeCtrl",["$scope","$location","$rootScope",function($scope,$location,$rootScope){
    
    $scope.userRegistration={
        name:"",
        lastName:"",
        tel:"",
        cel:"",
        email:"",
        password:"",
        provinces : "",
        locality : "",
        conditions:"",
        categories:[]
    }



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