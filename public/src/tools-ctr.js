angular.module("main").controller("toolsCtrl",["$scope","$location","$rootScope",function($scope,$location,$rootScope){
    $scope.validationEmailRegistration ="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"
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

    $scope.addCategories =function(value){
        if(document.getElementById(value).checked){//agrega
            // $scope.animation =true;
            $scope.userRegistration.categories.push(value);
        }else{
            var x = $scope.userRegistration.categories.indexOf(value);//averigua la posisicon del elemento
            $scope.userRegistration.categories.splice(x,1);//alimina un elemento a partir de esa posicion
        }
    }

    $scope.nextPageRegistration =function (){
        // console.log("user",$scope.userRegistration);
        // console.log("form: ",$scope.formRegistration.$valid);
        if($scope.formRegistration.$valid){
        // if(true){
          $location.path( "/home" );
        }else{
        }
    }
    $scope.registration = function(){
        console.log($scope.userRegistration);
    }
}])