angular.module('main').controller("searchServicesCtrl",["$http", "$scope","$rootScope","$location", function($http, $scope,$rootScope,$location){
    $scope.searchUser = {
        service : "",
        provinces: "",
        locality:""
    }
    $scope.history =[{
        service : "Electricista",
        provinces: "Buenos Aires",
        locality:"Ezeiza"   
    },{
        service : "Electricista",
        provinces: "Buenos Aires",
        locality:"Ezeiza"   
    }]

    $scope.onClick_getPosition = function(){
        function llamarGPS(){
            console.log("llamargps")
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
        }

        var onSuccess = function(position) {
            console.log("succes")
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            llamarApiGeo(latitud, longitud);
        };

        function onError(error) {
            console.log(error);
        }

        // Le paso por parametro latitud y longitud
        function llamarApiGeo(latitud,longitud){
          try{
            stringGeoCode = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitud+','+longitud+'&key=AIzaSyCimUfkmcHkggWlx2TwdZN2h367zBj0bVU';
            // stringGeoCode = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=-34.792041,-58.523894&key=AIzaSyCimUfkmcHkggWlx2TwdZN2h367zBj0bVU';

            $http.get(stringGeoCode).then(function(data) { 
                jsonLocation = data;
                // Aca parseo la informacion que devuelve el JSON y la asigno a estas dos variables.
                results = jsonLocation.data.results
                // provincia = jsonLocation.data.results[1].address_components[3].long_name;
                for (var i = 0; i<results.length; i++){
                  if (results[i].types[0] == "administrative_area_level_1") {
                    provincia = results[i].address_components[0].long_name;
                    break;
                  }
                }

                for (var i = 0; i<results.length; i++){
                  if (results[i].types[0] == "locality") {
                    localidad = results[i].address_components[0].long_name;
                    break;
                  }
                }
                setearProvinciaLocalidad(provincia, localidad);
            });

          }
          catch(err){
            console.log(err);
          }
        }

        // Funcion para seleccionar como Provincia y Localidad los valores traidos
        function setearProvinciaLocalidad(provincia,localidad){
          // Primero busca en la tabla de provincias alguno que coincida.
          for (i=0; i < $rootScope.provinces.length; i++){
            if (provincia == $rootScope.provinces[i][1]) {
              // Si lo encuentra lo setea.
              console.log($rootScope.provinces[i]);
              $scope.searchUser.provinces= $rootScope.provinces[i];

              // Despues busca en la tabla de localidades cuales pertenecen a la provincia en cuestion.
              for (i=0; i< $rootScope.localidad.length ; i++)
              {
                if ($scope.searchUser.provinces[0] == $rootScope.localidad[i][1]) {
                  if (localidad == $rootScope.localidad[i][2]) {
                    $scope.searchUser.locality= $rootScope.localidad[i][2];
                  }
                }
              }

            }
          }
        }

        function popUpGPS()
        {
          cordova.plugins.diagnostic.isLocationEnabled(function (locationEnabled)
          {
            if (locationEnabled)
            {
                console.log("tiene");

                // PARA TESTEAR POR PC NECESITO QUE LLAME A LA FUNC DIRECTAMENTE PORQUE LA PC NO LEE PLUGINS DIAGNOSTIC, LA COMENTO Y LLAMO ABAJO DIRECTAMENTE.
                llamarGPS();
            }
            else
            {
                console.log("sin gps");
                null;
            };
          }, 
          function(error)
          {
              console.log("error");
          }
          );
        }

        popUpGPS();
    }

    $scope.onClick_ShowRecord = function(){
        $scope.showRecord =true;
    }
    $rootScope.resultUser = "null"
    $scope.onClick_SearchUser =function(){
        $rootScope.resultUser ="messegeIntroSearchUser"}
           
    //                         $rootScope.loading =true;
    //                         var data = {
    //                             province :$scope.userRegistrationapp.provinces[1],
    //                             locality : $scope.userRegistrationapp.locality,
    //                             categories:$scope.userRegistrationapp.categories
    //                             };
    //                 //             		$scope.rewards = $rootScope.arrayRewards = $scope.new_invest.reward;
    //                 // for (var i = 0; i < $scope.new_invest.gallery.length; i++) {
    //                 // 	$scope.new_invest.currentGallery.push($scope.new_invest.gallery[i]);
    //                 // }
    //                             console.log("array de categorias: ", $scope.userRegistrationapp.categories)
    //                             console.log(data)

    //                             $http.post('https://morning-meadow-35802.herokuapp.com/searchServices',data )
    //                             // $http.post('http://localhost:5600/registration',data )
    //                             .then( 
    //                             function successCallback(data){console.log("1",data)
    //                                 $scope.data =data.data;
    //                                 if($scope.data =="no se encontro al usuario con ese id"){
    //                                         $rootScope.loading =false;
    //                                 }else{
    //                                     console.log("data: ",data.data)
    //                                     $rootScope.userApp = data.data
    //                                 $location.path( "/menu" );
    //                                 $rootScope.loading =false;
    //                                 }
    //                             },
                                
    //                             function errorCallback(err){
    //                                 console.log("11",err)
    //                                 $rootScope.loading =false;
    //                             }

    //                             );
    //             }



    
}]);
