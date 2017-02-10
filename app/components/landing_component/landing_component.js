(function(){


	var landing ={

		templateUrl : 'app/components/landing_component/landing_component.html',
		controller:landingController
	}

	function landingController($scope,$http){
		$('.botoncin').click(function(){
			
		})

	} //controller

	angular
	.module('brendi')
	.component('landingComponent',landing);

})();
