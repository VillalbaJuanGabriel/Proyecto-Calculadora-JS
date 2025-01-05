// Esta Función agrega los valores a la Pantalla:
function Agregar(valor){
    document.getElementById('pantalla').value += valor;
}

// Esta Función borra los valores de la Pantalla:
function Borrar(){
    document.getElementById('pantalla').value = '';
}

// Esta Función Calcula los valores de la Pantalla:
function Calcular(){
    const VALOR_PANTALLA = document.getElementById('pantalla').value;
    let resultado = eval(VALOR_PANTALLA);
    document.getElementById('pantalla').value = resultado;
}
