let cuadradoRojo = document.getElementById('R'),
    cuadradoVerde = document.getElementById('G'),
    cuadradoAzul = document.getElementById('B');

cuadradoRojo.addEventListener('click',function(){
    document.body.style.backgroundColor = 'red';
});

cuadradoVerde.addEventListener('click',function(){
    document.body.style.backgroundColor = 'green';
});

cuadradoAzul.addEventListener('click',function(){
    document.body.style.backgroundColor = 'blue';
});