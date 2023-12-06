/*Desafio5: Cálculo de Tarifas
	- Crie um programa que determine o valor da tarifa
	- O preço da tarifa normal é de R$2,50
	- Tarifas:
		=> Crianças menores que 6 anos: gratis
		=> Estudantes: 50% de desconto
		=> Idosos (60 anos ou mais): 30% de desconto
		=> Regular: tarifa normal */
        
		const Idade2 = 43
		const CarteirinhaEstudante = true
		const Tarifa = 2.50

		function calculaTarifa(idade, CarteirinhaEstudante, Tarifa)
		if(idade < 6) {
			return `Tarifa Grátis`
		}else if(CarteirinhaEstudante === true)
		return `Valor da Tarifa é${Tarifa * 0.5}`
	}else if (idade >= 60){
		return`Valor da tarifa é ${Tarifa * 0.7}`
	}else{
		return `Valor da tarifa é ${Tarifa}`
	}
		console.log(calculaTarifa (Idade2, CarteirinhaEstudante, Tarifa))
