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
