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

var costo_articulos = articulos.filter(function(articulo) {
    return articulo.costo > 100;
})

var nombre_articulos = articulos.map(function(articulo) {
    return articulo.nombre
})