(function(){


	var inscripcion ={

		templateUrl : 'app/components/inscripcion_component/inscripcion_component.html',
		controller:inscripcionController
	}

	function inscripcionController($scope,$http){
		// $('option.si').click(function(){
		// 	$('div.si').toggle();
		// 	$('div.no').hide();
		// });
		// $('option.no').click(function(){
		// 	$('div.no').toggle();
		// 	$('div.si').hide();
		// });
		
		console.log('ulis')

		$('.si').hide();
		$('#select').change(function(){
			var option = $(this).val();
			console.log(option)
			if (option == 'no'){
				$('.si').slideToggle();
			}
			else if (option == 'si'){
				$('.si').slideToggle();
			}
			
		});
	} //controller

	angular
	.module('brendi')
	.component('inscripcionComponent',inscripcion);

})();
