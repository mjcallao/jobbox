angular.module("main").controller("registrationCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    $scope.validationEmailRegistration ="^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$"
    $scope.userRegistration={
        name:"",
        lastName:"",
        email:"",
        password:"",
        stateServices: false,
        stateTool: false
    }



    // $scope.addCategories =function(value){
    //     if(document.getElementById(value).checked){//agrega
    //         // $scope.animation =true;
    //         $scope.userRegistration.categories.push(value);
    //     }else{
    //         var x = $scope.userRegistration.categories.indexOf(value);//averigua la posisicon del elemento
    //         $scope.userRegistration.categories.splice(x,1);//alimina un elemento a partir de esa posicion
    //     }
    // }
    $scope.data = false;

    $scope.registrationUserApp =function (){
        // console.log("user",$scope.userRegistration);
        // console.log("form: ",$scope.formRegistration.$valid);
        if($scope.formRegistration.$valid){
        // if(true){
        //   $location.path( "/home" );
             $rootScope.loading =true;
            var data = {
                name: $scope.userRegistration.name,
                lastName: $scope.userRegistration.lastName,
                email: $scope.userRegistration.email,
                password: $scope.userRegistration.password,
                stateServices: $scope.userRegistration.stateServices,
                stateTool: $scope.userRegistration.stateTool
                };
            
                console.log(data)

                $http.post('https://morning-meadow-35802.herokuapp.com/registrationAppUser',data )
                // $http.post('http://localhost:5600/registration',data )
                .then( 
                    function successCallback(data){console.log("1",data)
                        $rootScope.loading =false;
                        $scope.data = data.data;
                        if($scope.data =="Usted ya Tiene una cuenta en TrabajoYa"){

                        }else{
                            $rootScope.userApp = data.data
                            console.log($rootScope.userApp)
                            
                            $location.path( "/menu" );
                            alert("Usuario registrado con éxito!");
                        }
                        
                    },
                    
                    function errorCallback(err){
                        console.log("11",err)
                    }

                );

       
        }else{
        }
    }
    $scope.registration = function(){
        console.log($scope.userRegistration);
    }
}])