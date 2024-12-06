function suma (num1, num2) {
    return num1 + num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}

//La función flecha puede tener un solo parámetro y no necesita paréntesis cuando el parámetro solo contiene un nombre.
//Si la función flecha contiene una única expresión, 
//el valor de esa expresión se devuelve automáticamente, sin necesidad de usar la palabra clave return.
const resta = a => a - 10; 

//Si el cuerpo de la función usa llaves {} para definir varias instrucciones, entonces el return debe ser explícito.
const modulo = (a, b) => {
    const result = a % b;
    return result; // Return explícito necesario
};


/*
Si necesitas devolver un objeto con un retorno implícito, debes usar paréntesis alrededor del objeto, 
para que JavaScript no lo confunda con el bloque de código {}.
!const getUser = () => { id: 1, name: "Alice" }; // Error, lo interpreta como un bloque
*/
const imprimeObjDefinido = (obj) => ({id: 1, name: "Alice" })
const imprimeObjParametro = (obj) => (obj)


/*
En JavaScript, el objeto arguments permite acceder a todos los argumentos pasados a una función, 
incluso si no se han definido parámetros explícitamente en la declaración de la función. 
Aquí tienes una explicación más detallada:
*/
function multiplicacion () {
    if (arguments.length < 2) { //Opcional.
        throw new Error("Debes proporcionar al menos dos argumentos.");
    }
    return arguments[0] * arguments[1];
}


module.exports = {suma, resta, multiplicacion, division, modulo, imprimeObjParametro, imprimeObjDefinido}