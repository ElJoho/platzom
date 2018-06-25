const expect = require('chai').expect;
const platzom = require('..').default

const regla1 = 'Si la palabra termina con \"ar\", se le quitan esas dos letras'
const regla2 = 'Si la palabra inicia con Z, se le añade "pe" al final'
const regla3 = 'Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio'
const regla4 = 'Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas'

describe('#platzom', function(){
	it(regla1,function(){
		const translation = platzom("Programar");
		expect(translation).to.equal("Program")
	})
	it(regla2,function(){
		const translation1 = platzom("Zorro");
		expect(translation1).to.equal("Zorrope")
		const translation2 = platzom("Zarpar");
		expect(translation2).to.equal("Zarppe")
	})
	it(regla3,function(){
		const translation1 = platzom("abecedario");
		expect(translation1).to.equal("abece-dario")
	})
	it(regla4,function(){
		const translation1 = platzom("ana");
		expect(translation1).to.equal("AnA")
	})
})
