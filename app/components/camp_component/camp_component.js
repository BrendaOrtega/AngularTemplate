(function(){


	var camp ={

		templateUrl : 'app/components/camp_component/camp_component.html',
		controller:campController
	}

	function campController($scope,$http){
		$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});
	
	

	} //controller

	angular
	.module('brendi')
	.component('campComponent',camp);

})();