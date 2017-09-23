angular.module('main').controller("searchServicesCtrl",[ "$scope","$location", function($scope,$location){
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
    $scope.onClick_ShowRecord = function(){
        $scope.showRecord =true;
    }


    
}]);
