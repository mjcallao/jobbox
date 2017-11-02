angular.module('main').controller("myProfileCtrl",[ "$scope", function($scope){
    $scope.profile="profile" 


    angular.element(document).ready(function(){

	    $scope.cambiarImagen = function(user){

	    	navigator.camera.getPicture(function(url){

	    		console.log(url);

	            cortarImagen(imageUrl);

	          }, function() {
	          	console.log("error");
	              // handle error
	          },
	          {  //camera options
	              quality: 50,
	              destinationType: Camera.DestinationType.FILE_URI,
	              sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	              encodingType: Camera.EncodingType.JPEG
	          });
	    }

	    $scope.cortarImagen = function(imageUrl)
    	{	
	    	var options = 
	    	{
		        url: imageUrl,              // required.
		        ratio: "6/4",               // optional. (here you can define your custom ration) default: 1:1
		        title: "perfil",       // optional. android only. (here you can put title of image cropper activity) default: Image Cropper
		        autoZoomEnabled: false      // optional. android only. for iOS its always true (if it is true then cropper will automatically adjust the view) default: true
	    	}
	    	window.plugins.k.imagecropper.open(options, function(data) 
	    	{
		        // its return an object with the cropped image cached url, cropped width & height, you need to manually delete the image from the application cache.
		        console.log(data);          
		        $scope.croppedImage = data;
	    	}, 
	    	function(error) 
	    	{
	        	console.log(error);
    		}
			)
	    }

    });







   		









}]);