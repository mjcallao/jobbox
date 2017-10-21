angular.module("main").controller("singUpEmployeeCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    
    angular.element(document).ready(function(){

        function llamarGPS(){
            navigator.geolocation.getCurrentPosition(onSuccess, onError, {enableHighAccuracy: true});
        }

        var onSuccess = function(position) {
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
              $rootScope.userRegistration.provinces= $rootScope.provinces[i];

              // Despues busca en la tabla de localidades cuales pertenecen a la provincia en cuestion.
              for (i=0; i< $rootScope.localidad.length ; i++){
                if ($rootScope.userRegistration.provinces[0] == $rootScope.localidad[i][1]) {
                  if (localidad == $rootScope.localidad[i][2]) {
                    $rootScope.userRegistration.locality= $rootScope.localidad[i][2];
                  }
                }
              }
            }
          }
        }

        function preguntarGPS()
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

        // Aca pongo las variables si ya las tenia cargadas
        function ponerVariables(){
          if ($rootScope.userApp.tel != undefined)
          {
          $rootScope.userRegistration.tel = $rootScope.userApp.tel;
          $rootScope.$apply();
          }
          if($rootScope.userApp.cel != undefined)
          {
          $rootScope.userRegistration.cel=$rootScope.userApp.cel;
          $rootScope.$apply();
          }
          if($rootScope.userApp.province != undefined && $rootScope.userApp.locality != undefined) {
            console.log("asdfa");
            var provincia = $rootScope.userApp.province
            var localidad = $rootScope.userApp.locality
            setearProvinciaLocalidad(provincia, localidad);
            $rootScope.$apply();
          }
          else
          {

            // Hay que testear si funciona directamente llamar el GPS en el celular y no lo tiene prendido a ver que pasa si se rompe todo o que.

            // preguntarGPS();
            llamarGPS();
            console.log("llamo");
          }

        }
         
        ponerVariables();


    });


    $rootScope.userRegistration={      
        tel:"",
        cel:"",
        provinces : "",
        locality : ""
    }

    $scope.nextPageRegistration =function (){
        console.log($rootScope.userRegistration)
        // console.log("user",$scope.userRegistration);
        // console.log("form: ",$scope.formRegistration.$valid);
        if($scope.formRegistration.$valid){
        // if(true){
          $location.path( "/categories" );
        }else{
        }
    }


}])