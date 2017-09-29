angular.module('main').controller("searchServicesCtrl",[ "$scope","$rootScope","$location", function($scope,$rootScope,$location){
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
    $rootScope.resultUser = "null"
    $scope.onClick_SearchUser =function(){
        $rootScope.resultUser ="messegeIntroSearchUser"
    }


    
}]);
