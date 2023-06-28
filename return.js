const operacion = (tipo, numero1, numero2) =>{
    if( tipo ==='suma'){
        return numero1 + numero2;
    }
    else if (tipo === 'resta') {
        return numero1 - numero2;
    }
    else if (tipo === 'multiplicacion') {
        return numero1 * numero2;
    }
};
//las funciones solo debe de hacer una cosa una tarea
const miVariable = operacion('suma', 1, 5);
console.log(miVariable);