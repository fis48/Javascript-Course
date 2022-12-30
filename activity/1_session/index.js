// Ejercicio 1
import "./aboutme.js";  
console.log("Ejercicio 1");

// Ejercicio 2
console.log("Ejercicio 2")
const respuesta = `Respuesta: Se ejecuta primero el código en el archivo aboutme.js que el 
  console log de 'Ejecicio 1' de este archivo index.
  Porque javascript es un lenguaje mono-hilo y ejecuta las tareas una a una. De manera que, si el 
  archivo aboutme.js está importado antes, pues se ejecuta primero su contenido y luego, el console.log 
  que sigue en el archivo index.js.`;
console.log(respuesta);

// Ejercicio 3
console.log("Ejercicio 3")
const tool1 = `CONSOLE: Es clave para mejorar el desarrollo porque allí se puede imprimir valores para revisar.
  También en Console se pueden ver los errores en la ejecución de las apps.`
const tool2 = `ELEMENTS: En Elements se puede ver todo el html de la app que se está ejectuado así como 
  los estilos asignados a cada elemento. Es clave para el desarrollo front, ya que se pueden hacer pruebas 
  a los cambios de estilo que se pueden ver sin la necesidad de guardar cambios en el archivo y recargar.`;
const tool3 = `NETWORK: Esta herramienta tiene la infomación de solicitudes y respuestas. Es muy importante 
  para hacer seguimiento a los archivos que se suben y/o se descargan en las solicitudes. 
  También se puede hacer seguimiento de la velocidad de las operaciones.`;
console.log(`1. ${tool1}`);
console.log(`2. ${tool2}`);
console.log(`3. ${tool3}`);

// Ejercicio 4
console.log("Ejercicio 4")
for (let i = 1; i <= 100; i++) {
  if ((i % 7) === 0) {
    console.log(i);
  }
}

// Ejercicio 5
console.log("Ejercicio 5");
const item1 = "Con type module se pueden importar y exportar.";
const item2 = "En type module el scope es local al módulo.";
const item3 = "Con type='module', se usa es6 modules, sin type='module' se usa commonJs modules";
const item4 = "Con modules se usan las palabras import y export para trabajar, en commonJs modules se usa require().";
const item5 = "CommonJS sólo permite cargar módulos de forma síncrona, mientras que ESM permite carga síncrona y asíncrona.";
const item6 = "CommonJS no permite cargar directamente desde una URL o CDN un módulo, mientras que con ESM puedes hacerlo sin problemas y funciona directamente desde un navegador.";
const item7 = "CommonJS se utiliza en sistemas que generan bundles y utilizan técnicas de preprocesado o transpilado para generar builds. Por otro lado, ESM puede utilizarse tanto en entornos de procesados/transpilado o directamente desde el navegador, sin necesidad de transpilar.";

// Ejercicio 6
console.log("Ejercicio 6")
const formatter = {
  prefix: "Hello",
  append: (arg) => {
    const result = `${formatter.prefix} ${arg}`;
    return result;
  }
}
const prot = Object.getPrototypeOf(formatter);
prot.toLower = (text) => {
  return text.toLowerCase();
}
const response = formatter.append("World");
console.log(response);
console.log(formatter.__proto__.toLower(response));

const format = Object.create(formatter);
console.log(format.__proto__.toLower(response));