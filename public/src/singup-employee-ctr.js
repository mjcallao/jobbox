angular.module("main").controller("singUpEmployeeCtrl",["$scope","$location","$rootScope","$http",function($scope,$location,$rootScope,$http){
    
    angular.element(document).ready(function(){

        function popUpGPS()
        {
          cordova.plugins.diagnostic.isLocationEnabled(function (locationEnabled)
          {
            if (locationEnabled)
            {
                console.log("tiene");
                // Aca deberia buscar la ubicacion
                null
            }
            else
            {
            myApp = new Framework7();
            myApp.modal({
            title:  'Atencion!',
            text: 'Nos gustaria obtener su ubicacion',
            buttons: [
              {
                text: 'GPS',
                bold: true,
                onClick: function() {
                  cordova.plugins.diagnostic.switchToLocationSettings()
                }
              },
              {
                text: 'Salir',
                bold: true,
                onClick: function() {
                  null
                }
              },
            ]
            });
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