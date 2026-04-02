const productos = require('./productos');

const validaciones = {
    stock : (p, valor)=> p.stock > valor,
    precio : (p, valor) => p.precio <= valor,
    nombre: (p, valor) => p.nombre.length < valor,
    categoria: (p, valor) => valor.includes(p.categorias)
}

const filtros = [
  {
    fn: "stock",
    values: 11
  },
  {
    fn: "precio",
    values: 100000
  },
]

const makeFilter = (p) => ({fn,values}) => validaciones[fn](p, values)

const r = productos.filter( prod => filtros.every( filtro => makeFilter(prod)(filtro)))

console.log(r)