let distancia = prompt('Ingrese distancia en metros');

if (distancia < 0 || isNaN(distancia))
    document.write("Distancia no válida");
else if (distancia < 1000)
    document.write("Pie");
else if (distancia < 10000)
    document.write("Bicicleta");
else if (distancia < 30000)
    document.write("Colectivo");
else if (distancia < 100000)
    document.write("Auto")
else
    document.write("Avion");