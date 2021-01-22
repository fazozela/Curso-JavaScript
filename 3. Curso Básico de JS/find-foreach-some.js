var articulos = [{
        nombre: "Bici",
        costo: 200
    },
    {
        nombre: "Auto",
        costo: 500
    },
    {
        nombre: "Triciclo",
        costo: 100
    },
    {
        nombre: "Camioneta",
        costo: 10000
    }
];

var object_by_name_articulos = articulos.find(function(articulo) {
    return articulo.nombre == "Auto";
})

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
})

var articulos_baratos = articulos.some(function(articulo) {
    return articulo.costo <= 500
})