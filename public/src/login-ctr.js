angular.module('main').controller("loginCtrl",[ "$scope","$rootScope","$location","$http", function($scope,$rootScope,$location,$http){
    $rootScope.userStateVisit = false; 
    $scope.userLogin = {
        email: "",
        password:""
    }

    $scope.userVisitor =function(){
        $rootScope.userStateVisit = true;
    }

    // $scope.validationEmail ="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$";
    // $scope.validationEmail ="/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i";
    $scope.login = function(){
        console.log("form: ",$scope.formLogin.$valid);
        if($scope.formLogin.$valid){
                $rootScope.loading =true;
                var data = {
                    email: $scope.userLogin.email,
                    password: $scope.userLogin.password
                    };
                
                    console.log(data)

                    $http.post('https://morning-meadow-35802.herokuapp.com/login',data )
                    // $http.post('http://localhost:5600/registration',data )
                    .then( 
                    function successCallback(data){console.log("1",data)
                        $scope.data =data.data;
                        if($scope.data =="No se encontro al Usuario"){
                                $rootScope.loading =false;
                        }else{
                        console.log("data: ",data.data)
                        $rootScope.userApp = data.data
                           $location.path( "/menu" );
                           $rootScope.loading =false;
                        }
                    },
                    
                    function errorCallback(err){
                        console.log("11",err)
                        $rootScope.loading =false;
                    }

                    );

        

            // $location.path( "/menu" );
        }else{
        }
    }    
}]);
