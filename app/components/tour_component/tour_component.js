(function(){


	var tour ={

		templateUrl : '/app/components/tour_component/tour_component.html',
		controller:tourController
	}

	function tourController($scope,$http){
			$(function () {
 	 $('[data-toggle="tooltip"]').tooltip()
		});
	

	} 

	angular
	.module('brendi')
	.component('tourComponent',tour);

})();