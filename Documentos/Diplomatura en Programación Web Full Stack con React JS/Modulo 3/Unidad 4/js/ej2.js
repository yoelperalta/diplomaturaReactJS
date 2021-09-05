let areaTexto = document.getElementById('areaTexto'),
    cantCaracteres = document.getElementById('cantCaracteres');

let caracteres = areaTexto.textLength;
cantCaracteres.innerText = 'Caracteres: ' + caracteres;

areaTexto.addEventListener('keydown', function () {
    let caracteres = areaTexto.textLength;
    cantCaracteres.innerText = 'Caracteres: ' + caracteres;
});