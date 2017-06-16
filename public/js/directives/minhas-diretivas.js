angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){ // aqui é camelCase lá é hiphen

	var ddo = {}; //data object

	ddo.restric = "AE"; //atribute and element

	ddo.scope = {
		titulo: '@' //o atributo titulo está no escopo dessa directive | interface de comunicação
	};

	ddo.transclude = true; //manter os elementos filhos da directive
						   //ex.:  <img  class="img-responsive center-block"  src="{{foto.url}}" alt="{{foto.titulo}}">

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;

})
.directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url : '@'
        }
        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;
        
})
.directive('meuBotaoPerigo', function() {
	
        var ddo = {};
        ddo.restrict = "E";
        ddo.scope = {
            nome: '@',
            acao : '@'
        }
        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
})
.directive('meuFocus', function() {

	var ddo = {}

	ddo.restrict = "A";
	/*
	ddo.scope = {
		focado : '=' // comunicação bidirecional | o que o controller alterar a diretiva fica sabendo e o contrario tbm 
	};
	*/


	// alterar o DOM
	//depois da fase de compilação o angular tem a fase de linking
	// nessa fase pode-se colocar watcher (escutadores/observadores de propriedades)

	ddo.link = function(scope, element){ //esse scope da diretiva e não $scope

		scope.$on('fotoCadastrada', function(){// se o elemento fotoCadastrada foi disparado então o on captura esse elemento
			element[0].focus();
		}); 

		/*scope.$watch('focado', function(){ // nao abusar no uso de warch [ pagina pode vir a ficar lenta ] 
			if(scope.focado)
				element[0].focus();
				scope.focado = false;
		});*/
	}

	return ddo;

});