const operaciones = require('./operaciones')
const edily = {
    nombre:'edily', peso:55
}
const {suma, resta, multiplicacion, division, modulo, imprimeObjParametro, imprimeObjDefinido} = operaciones //Desestructuracion, para evitar operaciones.suma(1,5)
console.log('Resultado de la suma '+ suma(10,20));
console.log('Resultado de la Resta '+ resta(20));
console.log('Resultado de la multiplicacion '+ multiplicacion(20, 5));
console.log('Resultado de la division '+ division(100, 5));
console.log('Resultado del modulo de 6 y 10 es = '+ modulo(10, 6));
console.log('Impresion del Objeto pasado como arametro', imprimeObjParametro(edily));
console.log('Impresion del Objeto ya definido', imprimeObjDefinido());

