let datos = [];
let valor = 0;

while(!isNaN(valor)){
    valor = prompt("Ingrese un número entero, para finalizar ingrese un valor no numérico");
    datos.push(parseInt(valor));
}
datos.pop();
document.write(mayor(datos));

function mayor(array){
    let may = 0;
    for (let i = 0; i < array.length; i++){
        console.log(may, i, array[i], array.length);
        if (array[i] > may)
            may = array[i];
    }
    return may;
}

console.log(datos)