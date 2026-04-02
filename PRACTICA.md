# 🧪 Practica

# 🛒 Filtrado de Productos con Validaciones Configurables

## 📝 Consigna

Desarrollar una aplicación simple que filtre productos de un archivo **productos.json**, el cual tiene la siguiente estructura:

```json
[
    {
        "nombre": "string",
        "precio": "number",
        "categorias": "string",
        "stock": "number"
    },
    {
        ...
    }
]
```

Escribir las de validaciones todas las funciones de filtros que pueden llegar a aplicarse. Cada función debe recibir el producto y un valor de referencia, y retornar **true** si el producto **sí** cumple la regla.

Validaciones a realizar:

- Si el **stock** es mayor que el valor recibido
- Si el **precio** es menor o igual al valor recibido
- Si el **nombre** contiene menos de X caracteres
- Si la **categoría** está en un array de categorías permitidas

## 📥 Fitros :

Debemos definir un array de objetos con:

- `fn`: Nombre de la función de validación (ej: "stock").
- `values`: Valor o array de valores para la validación.

### 📌 Ejemplo 

Usando 2 funciones llamadas "stock" y "categoria":

```json
[
  {
    "fn": "stock",
    "values": 10
  },
  {
    "fn": "categoria",
    "values": ["electrodomestico", "deportivo"]
  }
]
```

## 🔍 La aplicación debe:

La aplicacion tiene la responsabilidad de filtrar aplicando todas las funciones recibidas y retornar los productos que cumplan con todas las reglas.

### ✅ Ejemplo de respuesta

Este ejemplo de respuesta se basa en la aplicación de las funciones "stock" y "categoria" aplicadas al archivo productos.json que se incluye en la carpeta data.

```json
[
  {
    "id": 1,
    "nombre": "Heladera",
    "precio": 1500000,
    "categorias": "electrodomestico",
    "stock": 15
  },
  {
    "id": 2,
    "nombre": "Pelota de Fútbol",
    "precio": 25000,
    "categorias": "deportivo",
    "stock": 12
  },
  {
    "id": 4,
    "nombre": "Zapatillas Running",
    "precio": 60000,
    "categorias": "deportivo",
    "stock": 20
  },
  {
    "id": 7,
    "nombre": "Camiseta de Fútbol",
    "precio": 30000,
    "categorias": "deportivo",
    "stock": 25
  }
]
```