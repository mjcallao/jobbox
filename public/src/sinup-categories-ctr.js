angular.module("main").controller("singUpCartegoriesCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    
    $scope.userRegistrationapp={
        stateServices: true,
        tel: $rootScope.userRegistration.tel,
        cel: $rootScope.userRegistration.cel,
        provinces : $rootScope.userRegistration.provinces,
        locality : $rootScope.userRegistration.locality,

        // categories:["Electricista","gasista","plomero","instalador de aire acondicionado","pintura","albañilería","fletes","limpieza de alfombras y tapizados","armadores de muebles","service electrodomésticos", "decoraciones"]
        categories:[]
    }

   $scope.addCategories =function(value){
        
        if(document.getElementById(value).checked){//agrega
            // $scope.animation =true;
            $scope.userRegistrationapp.categories.push(value);
        }else{
            var x = $scope.userRegistrationapp.categories.indexOf(value);//averigua la posisicon del elemento
            $scope.userRegistrationapp.categories.splice(x,1);//elimina un elemento a partir de esa posicion
        }
        console.log($scope.userRegistrationapp.categories)
    }

    $scope.saveCategories = function(){
                console.log($scope.userRegistrationapp);
                $rootScope.loading =true;
                var data = {
                    email: $rootScope.userApp.email,
                    stateServices: $scope.userRegistrationapp.stateServices,
                    tel:$scope.userRegistrationapp.tel,
                    cel:$scope.userRegistrationapp.cel,
                    province :$scope.userRegistrationapp.provinces[1],
                    locality : $scope.userRegistrationapp.locality,
                    categories:$scope.userRegistrationapp.categories
                    };
        //             		$scope.rewards = $rootScope.arrayRewards = $scope.new_invest.reward;
		// for (var i = 0; i < $scope.new_invest.gallery.length; i++) {
		// 	$scope.new_invest.currentGallery.push($scope.new_invest.gallery[i]);
		// }
                    console.log("array de categorias: ", $scope.userRegistrationapp.categories)
                    console.log(data)

                    $http.post('https://morning-meadow-35802.herokuapp.com/singUpEmployed',data )
                    // $http.post('http://localhost:5600/registration',data )
                    .then( 
                    function successCallback(data){console.log("1",data)
                        $scope.data =data.data;
                        if($scope.data =="no se encontro al usuario con ese id"){
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
    }
    
}])