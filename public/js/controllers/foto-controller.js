angular.module('alurapic').controller('FotoController', function($scope, recursoFoto,  $routeParams, cadastroDeFotos){

	$scope.foto = {};
	$scope.mensagem = '';

	/*
	var recursoFoto = $resource('v1/fotos/:fotoId', null, {
		update:{
			method: 'PUT'
		}
	});
	*/

	
	if($routeParams.fotoId){

            recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
                $scope.foto = foto; 
            }, function(erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            }); 

	}

		/*
		$http.get('v1/fotos/'+$routeParams.fotoId)
		.success(function(foto){
			 $scope.foto = foto;
		})
		.error(function(erro){
			$scope.mensagem = 'Não foi posivel obeter a foto';
		});
		*/


	$scope.submeter = function(){
		

			if ($scope.formulario.$valid) {
                cadastroDeFotos.cadastrar($scope.foto)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) $scope.foto = {};
                    //$scope.focado = true;


                })
                .catch(function(erro) {
                    $scope.mensagem = erro.mensagem;
                });
            }
			
	};	
});

			/*


			if($scope.foto._id){


				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = ' Foto alterada com sucesso ';
				}, function(erro){
					console.log(erro);
					$scope.mensagem = ' Não foi possivel alterar ';
				});


				
					$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
					.success(function(){
						 $scope.mensagem = ' A foto ' + $scope.foto.titulo + ' foi alterada com sucesso ';
					})
					.error(function(erro){
						console.log(erro);
						$scope.mensagem = 'Não foi posivel alterar a foto ' + $scope.foto.titulo;
					});
				


			} else {


				recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                });

				

				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					 $scope.foto = {};
					 $scope.mensagem = 'Foto incluida com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'Não foi posivel incluir a foto';
				});
				*/

		
