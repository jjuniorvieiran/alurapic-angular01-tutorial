angular.module('meusServicos',  ['ngResource'])
.factory('recursoFoto', function($resource){


	return $resource('v1/fotos/:fotoId', null, {
		update:{
			method: 'PUT'
		}
	});


})
.factory('cadastroDeFotos', function(recursoFoto, $q, $rootScope){ 
	// $q permite cadastrar promessas de serviços
	//$rootScope pai de todos os $scopes

	var service = {};

	var evento = 'fotoCadastrada';

	service.cadastrar = function(foto){

		return $q(function(resolve, reject){
				//resolve é o then. resolve é o caso de sucesso
				//reject é o caso de insucesso

			if(foto._id){

				recursoFoto.update({fotoId: foto._id}, foto, function(){
					$rootScope.$broadcast(evento); // isso faz o angular disparar um evento
					resolve({
						mensagem: 'Foto ' + foto.titulo + 'atualizada com sucesso!',
						inclusao: false

					});

				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possivel incluir a foto ' + foto.titulo
					});
				});

			} else {

				recursoFoto.save(foto, function(){
					$rootScope.$broadcast(evento); // isso faz o angular disparar um evento
					resolve({
						mensagem: 'Foto ' + foto.titulo + 'atualizada com sucesso!',
						inclusao: true

					});

				}, function(erro){
					console.log(erro);
					reject({
						mensagem: 'Não foi possivel incluir a foto ' + foto.titulo
					});
				});
			}
			
		});	


	};

	return service;
});





