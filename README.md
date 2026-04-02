# 📊 Funciones como Ciudadanos de Primera Clase en JavaScript

---

## 🧩 Idea principal

👉 En JavaScript, las funciones son **valores**

Esto significa que:
- Se pueden guardar en variables
- Se pueden pasar como parámetros
- Se pueden retornar

💡 A esto se le llama:
**“Funciones como ciudadanos de primera clase”**

---

## ⚡ Arrow Functions (Funciones Flecha)

Las arrow functions son una forma más moderna y concisa de escribir funciones.

~~~javascript
const saludar = () => "Hola mundo";
~~~

### 🧠 Características clave:
- Sintaxis más corta
- No tienen su propio `this`
- Muy usadas en callbacks y funciones pequeñas

---

### 🔍 ¿Qué pasa con `this`?

👉 A diferencia de las funciones tradicionales, las arrow functions:

❌ **NO crean su propio `this`**  
✔ **Usan el `this` del contexto donde fueron definidas (lexical)**


---

### ✅ ¿Cuándo usar arrow functions?

- Callbacks (`map`, `filter`, etc.)
- Funciones cortas
- Cuando querés mantener el `this` del contexto externo

---

### ❌ ¿Cuándo evitarlas?

- Métodos de objetos
- Cuando necesitás un `this` dinámico

---

## 🔧 Funciones como valores

Podemos asignar funciones a variables:

~~~javascript
const saludar = () => "Hola mundo";

console.log(saludar()); // Hola mundo
~~~

👉 La función no se ejecuta automáticamente  
👉 Se comporta como cualquier otro dato

---

## 🔁 Pasar funciones como parámetro

~~~javascript
const ejecutar = (fn) => fn();

const saludar = () => "Hola!";

ejecutar(saludar);
~~~

👉 Estamos pasando una función como argumento  
👉 Esto permite código más flexible

---

## 🔙 Retornar funciones

~~~javascript
const crearSaludo = () => {
  return () => "Hola desde otra función";
};

const nuevaFuncion = crearSaludo();

nuevaFuncion();
~~~

👉 Una función puede crear y devolver otra función

---

## 📦 Funciones en estructuras

~~~javascript
const funciones = [
  () => "A",
  () => "B",
];

console.log(funciones[0]()); // A
~~~

👉 Las funciones pueden guardarse en arrays u objetos

---

## 🚀 Funciones de orden superior

Una función es de orden superior si:

✔ recibe una función  
✔ o retorna una función  

~~~javascript
const operar = (a, b, operacion) => operacion(a, b);

operar(2, 3, (x, y) => x + y); // 5
~~~

---

## 🧠 Ejemplo real (map)

~~~javascript
const numeros = [1, 2, 3];

const resultado = numeros.map(x => x * 2);

console.log(resultado); // [2, 4, 6]
~~~

👉 `map` recibe una función  
👉 Aplica esa función a cada elemento

---

## 🎯 ¿Por qué importa?

Permite:

- Reutilizar código
- Escribir funciones más genéricas
- Aplicar programación funcional
- Trabajar con callbacks y closures

---

## 🧩 Idea clave

👉 Una función en JavaScript es un valor más

💡 Igual que:
- números
- strings
- objetos

---

## 🔚 Cierre

JavaScript trata a las funciones como ciudadanos de primera clase

➡️ Por eso existen las funciones de orden superior  
➡️ Y por eso el lenguaje es tan flexible

---

## 🧪 Mini ejercicio

¿Qué imprime esto?

~~~javascript
const a = [1,2,3,4]
const b = [3,6]

const fn = (x) => (y)=> x * y
const fns = a.map( each => fn(each))

const r = fns.map( each => b.map( value => each(value)) )

console.log(r)
~~~

👉 Pensarlo antes de ejecutarlo