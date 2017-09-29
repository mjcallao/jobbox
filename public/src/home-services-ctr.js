angular.module('main').controller("homeCtrl",[ "$scope","$rootScope","$location", function($scope,$rootScope,$location){
    $scope.nombre = "miApp";
    // var jobBox = new Framework7({
    //   pushState: true,
    //   swipePanel: 'left',
    //   material:true
    // });
    // var mainView2 = jobBox.addView('.view-main', {
    //     dynamicNavbar: true
    // });
    // var $$ = Dom7;
    // jobBox.smartSelectAddOption('.smart-select select', '<option value="apple">Apple</option>');

    $scope.gotoProfileUser = function(user){
       $rootScope.userSearch= user;
       $location.path( "/profile" );
    }
    $scope.user = [
        {
            _id:222222222,
            name:"Emiliano",
            lastName:"Insfran",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    tel:43641234,
                    cel:1124112845,
                    score:100,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]
        },
        {
            _id:222222222,
            name:"Jose ",
            lastName:"Arrua",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user1.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    score:68,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]
        },
        {
            _id:222222222,
            name:"Marcelo ",
            lastName:"Callao",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user2.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    score:60,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]
        },
        {
            _id:222222222,
            name:"Romina",
            lastName:"cilenci",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user3.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    score:75,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]
        },
        {
            _id:222222222,
            name:"Roman",
            lastName:"v",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user4.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    score:40,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]        
    
        },
        {
            _id:222222222,
            name:"Jimena",
            lastName:"Varon",
            email:"emilianoinsfran@gmail.com",
            disponible:true,
            photo:"user5.jpg",
            service:  [
                {
                    name:"Electricista",
                    province: "GRAN Buenos Aires",
                    locality:"Ezeiza",
                    score:90,
                    comment:[
                        {
                            UserComment:"Marcelo",
                            message:"hola que tal",
                            date:"15/9/2017"
                        }
                    ]
                }
            ]
        }
    ]

    

}]);