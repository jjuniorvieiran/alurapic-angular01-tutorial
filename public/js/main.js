angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
.config(function($routeProvider, $locationProvider){

	$locationProvider.html5Mode(true); // para nao precisar de /#/

	$routeProvider.when('/fotos',{
		templateUrl: 'partials/principal.html',
		controller : 'FotosController' // só pode definir um controler aqui
	});

	$routeProvider.when('/fotos/new',{ 
		templateUrl: 'partials/fotos.html',
		controller : 'FotoController'
	});

	$routeProvider.when('/fotos/edit/:fotoId',{ 
		templateUrl: 'partials/fotos.html',
		controller : 'FotoController'
	});

	$routeProvider.otherwise({ redirectTo: '/fotos'}); //monta um redirecionamento padrão
	
});