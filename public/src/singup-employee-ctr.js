angular.module("main").controller("singUpEmployeeCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    
    angular.element(document).ready(function(){

        function llamarGPS(){
          navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
        }

        var onSuccess = function(position) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            console.log(latitud);
            console.log(longitud);
            llamarApiGeo(latitud, longitud);
        };

        function onError(error) {
            console.log(error);
        }

        // Le paso por parametro latitud y longitud
        function llamarApiGeo(latitud,longitud){
          console.log("latitud",latitud)
          console.log("longitud",longitud)
          try{
            stringGeoCode = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitud+','+longitud+'&key=AIzaSyCimUfkmcHkggWlx2TwdZN2h367zBj0bVU';

            $http.get(stringGeoCode).then(function(data) { 
              console.log("informacion",data)   
              jsonLocation = data;


              // Aca parseo la informacion que devuelve el JSON y la asigno a estas dos variables.
                provincia = jsonLocation.data.results[1].address_components[2].long_name;
                localidad = jsonLocation.data.results[1].address_components[0].long_name;
                setearProvinciaLocalidad(provincia, localidad);
            });

          }
          catch(err){
            console.log(err);
          }
        }

        function setearProvinciaLocalidad(provincia,localidad){
          console.log(provincia);
          console.log(localidad);
        }

        function popUpGPS()
        {
          cordova.plugins.diagnostic.isLocationEnabled(function (locationEnabled)
          {
            if (locationEnabled)
            {
                console.log("tiene");
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

    });



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