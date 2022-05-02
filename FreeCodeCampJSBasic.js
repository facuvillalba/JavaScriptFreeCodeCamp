/*1-----------------------------------------------------------------------------------------------------------------
      Comenta tu código de JavaScript
      Los comentarios son líneas de código que JavaScript ignorará intencionalmente. 
      Los comentarios son una gran manera de dejar notas para ti mismo y a otras personas que más tarde tengan que 
      averiguar qué hace ese código.
      Hay dos maneras de escribir comentarios en JavaScript:
      Usar // le dirá a JavaScript que ignore el resto del texto en la línea actual. 
      Este es un comentario en línea:
      // This is an in-line comment.
      Puedes hacer un comentario multilínea comenzando con /* y terminando con */
      //Este es un comentario multilínea:
      /* This is a
      multi-line comment */
/*Intenta crear un comentario de cada tipo.
-----------------------------------------------------------------------------------------------------------------*/
// This is an in-line comment.
/* This is a
multi-line comment */
/*2-----------------------------------------------------------------------------------------------------------------
      Declara variables de JavaScript
      En informática, los datos son cualquier cosa que tenga sentido para la computadora. JavaScript proporciona 
      ocho tipos de datos diferentes, los cuales son: 
      undefined, null, boolean, string, symbol, bigint, number, y object.
      Por ejemplo, las computadoras distinguen entre números, como el número 12 y cadenas (strings), 
      tales como "12", "dog", o "123 cats", que son colecciones de caracteres.
      Las computadoras pueden realizar operaciones matemáticas en un número, pero no en una cadena.
      Las variables permiten a los ordenadores almacenar y manipular datos de forma dinámica. 
      Hacen esto usando una "etiqueta" para apuntar a los datos en lugar de usar los datos en sí. 
      Cualquiera de los ocho tipos de datos puede almacenarse en una variable.
      Las variables son similares a las variables x, e y que usan en matemáticas, lo que significa que son un nombre 
      simple para representar los datos a los que queremos hacer referencia. 
      Las variables de computadora difieren de las variables matemáticas en que pueden almacenar diferentes 
      valores en diferentes momentos.
      Le decimos a JavaScript que cree o declare una variable poniendo la palabra clave var delante de ella, así:
      var ourName;
      crea una variable llamada ourName. En JavaScript terminamos las sentencias con punto y coma. 
      Los nombres de las variables pueden estar formados por números, letras y $ o _, pero no pueden contener 
      espacios ni empezar con un número.

***Utiliza la palabra clave var para crear una variable llamada myName.
-----------------------------------------------------------------------------------------------------------------*/
/*
var myName;
*/
/*3-----------------------------------------------------------------------------------------------------------------
      Almacenar valores con el operador de precisin
      En JavaScript, puedes almacenar un valor en una variable con el operador de prescripción (=).
      myVariable = 5;
      Esto asigna el valor numérico ( Number) 5a myVariable.
      Si hay algunos cálculos a la derecha del operador =, se realizan antes de que el valor se asigne a la variable 
      a la izquierda del operador.
      var myVar;
      myVar = 5;
      Primero, este código crea una llamada variable myVar. Luego, el código asigna 5a myVar. Ahora, si myVar aparece 
      de nuevo en el código, el programa lo tratará como si fuera 5.
***Asigna el valor 7a la variable a.
-----------------------------------------------------------------------------------------------------------------*/
/*
// Setup
var a;
// Only change code below this line
a = 7;
*/
/*4-----------------------------------------------------------------------------------------------------------------
      Asigna el valor de una variable a otra variable
      Después de asignar un valor a una variable usando el operador de disparar , puede asignar el valor de esa 
      variable a otra variable usando el mismo operador de disparar .
      var myVar;
      myVar = 5;
      var myNum;
      myNum = myVar;
      Lo anterior declara una variable myVarsin valor, y luego le asigna el valor 5. A continuación, una variable 
      llamada myNumes declarada, también sin valor. Luego, el contenido de myVar(que es 5) se asigna a la 
      variable myNum. 
      Ahora, myNumtambién tiene el valor de 5.
***Asigna el contenido de a la variable b.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
var a;
a = 7;
var b;
// Only change code below this line
b = a;
*/
/*5-----------------------------------------------------------------------------------------------------------------
      Inicializa variables con el operador de asignación
      Es común inicializar una variable a un valor inicial en la misma línea que está declarada.
      var myVar = 0;
      Crea una nueva variable llamada myVary le asigna un valor inicial de 0.
***Definir una variable a con var e inicialízala con un valor de 9.
------------------------------------------------------------------------------------------------------------------*/
/*
var a = 9;
*/
/*6-----------------------------------------------------------------------------------------------------------------
      Declara variables de cadena
      Anteriormente utilizaste el siguiente código para declarar una variable:
      var myName;
      Pero también puedes declarar una variable de cadena como esta:
      var myName = "your name";
      "your name" es llamada una cadena literal. Una cadena literal o cadena es una serie de ceros o más caracteres 
      encerrados en comillas simples o dobles.
***Crea dos nuevas variables de cadena: myFirstName y myLastName y asígnales los valores de tu nombre y apellido, 
respectivamente.
------------------------------------------------------------------------------------------------------------------*/
/*
var myFirstName = "Facundo";
var myLastName = "Villalba";
*/
/*7-----------------------------------------------------------------------------------------------------------------
      Comprendiendo las variables no inicializadas
      Cuando las variables de JavaScript son declaradas, tienen un valor inicial de undefined (indefinido). 
      Si haces una operación matemática en una variable undefined, tu resultado será NaN lo que significa "Not a Number" 
      (no es un número). 
      Si concatenas una cadena con una variable undefined, obtendrás una cadena literal con valor undefined.
***Inicializa las tres variables a, b, y c con 5, 10 y "I am a" respectivamente para que no sean undefined.
------------------------------------------------------------------------------------------------------------------*/
/*
// Only change code below this line
var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";
*/
/*8-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Comprendiendo la sensibilidad de mayúsculas en las variables
      En JavaScript todas las variables y nombres de función son sensibles a mayúsculas y minúsculas. 
      Esto significa que la capitalización importa.
      MYVAR no es lo mismo que MyVar ni myvar. Es posible tener múltiples variables distintas con el mismo nombre pero 
      diferente capitalización. 
      Se recomienda encarecidamente que por el bien de la claridad, no utilices esta funcionalidad del lenguaje.
      Buena Práctica
      Escribe los nombres de las variables en JavaScript en camelCase. En camelCase, los nombres de variables de 
      múltiples palabras tienen la primera palabra en minúsculas y la primera letra de cada palabra posterior en mayúsculas.
      Ejemplos:
      var someVariable;
      var anotherVariableName;
      var thisVariableNameIsSoLong;
***Modifica las declaraciones y asignaciones existentes para que sus nombres usen camelCase.
   No crees ninguna variable nueva.
------------------------------------------------------------------------------------------------------------------*/
/*
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
*/
/*9-----------------------------------------------------------------------------------------------------------------
      Explora las diferencias entre las palabras claves var y let
      Uno de los mayores problemas con la declaración de variables utilizando la palabra clave var es que tú puedes 
      fácilmente sobrescribir declaraciones de variables:
      var camper = "James";
      var camper = "David";
      console.log(camper);
      En el código anterior, la variable camper se declara originalmente como James, y se anula para ser David. 
      La consola después muestra la cadena de texto David.
      En una aplicación pequeña, tal vez no te encuentres con este tipo de problema. Pero a medida que tu código 
      base se hace más grande, puedes ser que accidentalmente sobrescribas una variable que no tenías la intención 
      de hacer. 
      Debido a que este comportamiento no causa un error, la búsqueda y corrección de errores se vuelve más difícil.
      Una palabra clave llamada let fue introducida en ES6, una actualización importante para JavaScript, para resolver este 
      problema potencial con la palabra clave var.
      Si reemplazas var por let en el código anterior, resultará en un error:
      let camper = "James";
      let camper = "David";
      El error se puede ver en tu consola de tu navegador.
      Así que a diferencia de var, al usar let, una variable con el mismo nombre solo puede declararse una vez.
***Actualiza el código para que solo utilice la palabra clave let.
------------------------------------------------------------------------------------------------------------------*/
/*
let catName = "Oliver";
let catSound = "Meow!";
*/
/*10-----------------------------------------------------------------------------------------------------------------
      Declara una variable de solo lectura con la palabra clave const
      La palabra clave let no es la única manera nueva de declarar variables. En ES6, tú también puedes declarar 
      variables usando la palabra clave const.
      const tiene todas las características increíbles que tiene let, con el bono añadido de que las variables 
      declaradas usando const son de solo lectura. Son un valor constante, lo que significa que una vez que una 
      variable es asignada con const, no se puede reasignar:
      const FAV_PET = "Cats";
      FAV_PET = "Dogs";
      La consola mostrará un error debido a la reasignación del valor de FAV_PET.
      Siempre debes nombrar variables que no quieras reasignar usando la palabra clave const. Esto ayuda cuando intentas 
      reasignar accidentalmente una variable que está destinada a permanecer constante.
      Nota: Es común que los desarrolladores usen identificadores de variables en mayúsculas para valores inmutables y 
      minúsculas o camelCase para valores mutables (objetos y arreglos). 
      Aprenderás más sobre objetos, arreglos y valores inmutables y mutables en desafíos posteriores. 
      También en desafíos posteriores, verás ejemplos de identificadores de variables mayúsculas, minúsculas o camelCase.
***Cambia el código para que todas las variables se declaren con let o const. Usa let cuando quieras que la variable 
cambie y const cuando quieras que la variable permanezca constante. Además, renombra variables declaradas con 
const para adaptarse a las prácticas comunes.
------------------------------------------------------------------------------------------------------------------*/
/*
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line
*/
/*11-----------------------------------------------------------------------------------------------------------------
      Suma dos números con JavaScript
      Number (número) es un tipo de datos en JavaScript que representa datos numéricos.
      Ahora intentemos sumar dos números usando JavaScript.
      JavaScript utiliza el símbolo + como un operador de adición cuando se coloca entre dos números.
      Ejemplo:
      const myVar = 5 + 10;
      myVar ahora tiene el valor 15.
***Cambia el 0 para que la suma sea igual a 20.
------------------------------------------------------------------------------------------------------------------*/
/*
const sum = 10 + 10;
*/
/*12-----------------------------------------------------------------------------------------------------------------
      Resta un número de otro con JavaScript
      También podemos restar un número de otro.
      JavaScript utiliza el símbolo - para restar.
      Ejemplo
      const myVar = 12 - 6;
      myVar tendrá el valor 6.
***Cambia el 0 para que la diferencia sea 12.
------------------------------------------------------------------------------------------------------------------*/
/*
const difference = 45 - 33;
*/
/*13-----------------------------------------------------------------------------------------------------------------
      Multiplica dos números con JavaScript
      También podemos multiplicar un número por otro.
      JavaScript utiliza el símbolo * para multiplicar dos números.
      Ejemplo
      const myVar = 13 * 13;
      myVar ahora tendrá el valor 169.
***Cambia el 0 para que el producto sea igual a 80.
------------------------------------------------------------------------------------------------------------------*/
/*
const product = 8 * 10;
*/
/*14-----------------------------------------------------------------------------------------------------------------
      Divide un número entre otro con JavaScript
      También podemos dividir un número entre otro.
      JavaScript utiliza el símbolo / para la división.
      Ejemplo
      const myVar = 16 / 2;
      myVar ahora tiene el valor 8.
***Cambia el 0 para que el quotient (cociente) sea igual a 2.
------------------------------------------------------------------------------------------------------------------*/
/*
const quotient = 66 / 33;
*/
/*15-----------------------------------------------------------------------------------------------------------------
      Incrementa un número con JavaScript
      Puedes fácilmente incrementar o sumar uno a una variable con el operador ++.
      i++;
      es equivalente a
      i = i + 1;
      Nota: Toda la línea se convierte en i++;, eliminando la necesidad del signo de igualdad.
***Cambia el código para usar el operador ++ en myVar.
------------------------------------------------------------------------------------------------------------------*/
/*
let myVar = 87;
// Only change code below this line
myVar++;
*/
/*16-----------------------------------------------------------------------------------------------------------------
      Decrementa un número con JavaScript
      Puedes fácilmente decrementar o disminuir una variable por uno utilizando el operador --.
      i--;
      es el equivalente de
      i = i - 1;
      Nota: La linea se convierte en i--;, eliminando la necesidad del signo igual.
***Cambia el código para usar el operador -- en myVar.
------------------------------------------------------------------------------------------------------------------*/
/*
let myVar = 11;
// Only change code below this line
myVar--;
*/
/*17-----------------------------------------------------------------------------------------------------------------
      Crea números decimales con JavaScript
      También podemos almacenar números decimales en variables. Los números decimales a veces se denominan números de 
      coma flotante o flotantes.
      Nota: No todos los números reales pueden representarse con precisión en coma flotante. Esto puede llevar a errores de 
      redondeo. Detalles aquí. https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems
***Crea una variable myDecimal y dale un valor decimal con una parte fraccional (por ejemplo, 5.7).
------------------------------------------------------------------------------------------------------------------*/
/*
const ourDecimal = 5.7;
// Only change code below this line
const myDecimal = 7.3;
/*/
/*18-----------------------------------------------------------------------------------------------------------------
      Multiplica dos números decimales con JavaScript
      En JavaScript, también puedes realizar cálculos con números decimales, al igual que con números enteros.
      Multipliquemos dos números decimales para obtener su producto.
***Cambia el 0.0 para que el producto sea igual a 5.0.
------------------------------------------------------------------------------------------------------------------*/
/*
const product = 2.0 * 2.5;
*/
/*19-----------------------------------------------------------------------------------------------------------------
      Divide un decimal entre otro con JavaScript
      Ahora dividamos un decimal entre otro.
***Cambia el 0.0 para que el cociente (quotient) sea igual a 2.2.
------------------------------------------------------------------------------------------------------------------*/
/*
const quotient = 4.4 / 2.0; // Change this line
*/
/*20-----------------------------------------------------------------------------------------------------------------
      Encuentra un resto en JavaScript
      El operador de resto % entrega el resto de la división entre dos números.
      Ejemplo
      5 % 2 = 1 porque
      Math.floor(5 / 2) = 2 (Cociente)
      2 * 2 = 4
      5 - 4 = 1 (Resto)
      Uso
      En matemáticas, un número se puede comprobar para saber si es par o impar revisando el resto de la división del 
      número por 2.
      17 % 2 = 1 (17 es impar)
      48 % 2 = 0 (48 es par)
      Nota: El operador de resto es a veces incorrectamente referido como el operador módulo. Es muy similar al 
      módulo, pero no funciona adecuadamente con números negativos.
***Establece remainder igual al resto de 11 dividido entre 3 usando el operador de resto (%).
------------------------------------------------------------------------------------------------------------------*/
/*
const remainder = 11 % 3;
*/
/*21-----------------------------------------------------------------------------------------------------------------
      Asignación compuesta con adición aumentada
      En la programación, es común utilizar asignaciones para modificar el contenido de una variable. Recuerda que 
      todo lo que está a la derecha del signo de igualdad se evalúa primero, así que podemos decir:
      myVar = myVar + 5;
      para sumar 5 a myVar. Dado que se trata de un patrón tan común, hay operadores que hacen tanto la operación 
      matemática como la asignación en un solo paso.
      Uno de estos operadores es el operador +=.
      let myVar = 1;
      myVar += 5;
      console.log(myVar);
      Se mostrará un 6 en la consola.
***Convierte las asignaciones de a, b y c para que utilicen el operador +=.
------------------------------------------------------------------------------------------------------------------*/
/*
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a += 12;
b = b += 9;
c = c += 7;
*/
/*22-----------------------------------------------------------------------------------------------------------------
Asignación compuesta con resta aumentada
      Al igual que el operador +=, -= resta un número de una variable.
      myVar = myVar - 5;
      le restara 5 de myVar. Esto se puede reescribir como:
      myVar -= 5;
***Convierte las tareas de a, b, y c para utilizar el operador -=.
------------------------------------------------------------------------------------------------------------------*/
/*
let a = 11;
let b = 9;
let c = 3;
// Only change code below this line
a = a -= 6;
b = b -= 15;
c = c -= 1;
*/
/*23-----------------------------------------------------------------------------------------------------------------
      Asignación compuesta con multiplicación aumentada
      El operador *= multiplica una variable por un número.
      myVar = myVar * 5;
      se multiplicará myVar por 5. Esto se puede reescribir como:
      myVar *= 5;
***Convierte las tareas de a, b, y c para utilizar el operador *=.
------------------------------------------------------------------------------------------------------------------*/
/*
let a = 5;
let b = 12;
let c = 4.6;
// Only change code below this line
a = a *= 5;
b = b *= 3 ;
c = c *= 10;
*/
/*24-----------------------------------------------------------------------------------------------------------------
      Asignación compuesta con división aumentada
      El operador /= divide una variable entre otro número.
      myVar = myVar / 5;
      Dividirá myVar por 5. Esto se puede reescribir como:
      myVar /= 5;
***Convierte las tareas de a, b, y c para utilizar el operador /=.
------------------------------------------------------------------------------------------------------------------*/
/*
let a = 48;
let b = 108;
let c = 33;
// Only change code below this line
a = a /= 12;
b = b /= 4;
c = c /= 11;
*/
/*25-----------------------------------------------------------------------------------------------------------------
      Escapa comillas literales en cadenas
      Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando
      necesitas una comilla literal: " o ' dentro de tu cadena?
      En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\) 
      delante de la comilla.
      const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
      Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer 
      dentro de la cadena. Así que si imprimieras esto en la consola, obtendrías:
      Alan said, "Peter is learning JavaScript".
***Usa barras invertidas para asignar una cadena a la variable myStr de modo que si lo imprimieras en la 
consola, verías:
I am a "double quoted" string inside "double quotes".
------------------------------------------------------------------------------------------------------------------*/
/*
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line
*/
/*26-----------------------------------------------------------------------------------------------------------------
      Cita cadenas con comillas simples
      Los valores de cadena en JavaScript pueden escribirse con comillas simples o dobles, siempre y cuando comiencen y 
      terminen con el mismo tipo de comillas. A diferencia de otros lenguajes de programación, las comillas simples y 
      dobles funcionan igual en JavaScript.
      const doubleQuoteStr = "This is a string"; 
      const singleQuoteStr = 'This is also a string';
      La razón por la que puedes querer usar un tipo de comilla sobre otro es si quieres usar ambos en una cadena. 
      Esto puede suceder si quieres guardar una conversación en una cadena y tener la conversación entre comillas. 
      Otro uso sería guardar una etiqueta <a> con varios atributos entre comillas, todo dentro de una cadena.
      const conversation = 'Finn exclaims to Jake, "Algebraic!"';
      Sin embargo, esto se convierte en un problema cuando es necesario utilizar las comillas externas dentro de ella. 
      Recuerda, una cadena tiene el mismo tipo de comillas al principio y al final. Pero si tienes esa misma comilla en 
      algún lugar del medio, la cadena se detendrá antes de tiempo y arrojará un error.
      const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
      const badStr = 'Finn responds, "Let's go!"';
      Aquí badStr arrojará un error.
      En la cadena goodStr anterior, puedes usar ambas comillas de forma segura usando la barra invertida \ como un 
      carácter de escape.
      Nota: La barra invertida \ no debe confundirse con la barra diagonal /. No hacen lo mismo.
***Cambia la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de 
escape.
Ahora mismo, la etiqueta <a> en la cadena usa comillas dobles en todas partes. Necesitarás cambiar las comillas 
externas a comillas simples para poder eliminar los caracteres de escape.
------------------------------------------------------------------------------------------------------------------*/
/*
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
*/
/*27-----------------------------------------------------------------------------------------------------------------
      Escapa secuencias en cadenas
      Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Hay dos razones para 
      usar caracteres de escape:
      Para permitir el uso de caracteres que de otra manera no te sería posible escribir, como un retorno de carro.
      Para permitirte representar múltiples comillas en una cadena sin que JavaScript malinterprete lo que 
      quieres decir.
      Esto lo aprendimos en el desafío anterior.
      Código	Resultado
      \'	comilla simple
      \"	comilla doble
      \\	barra invertida
      \n	línea nueva
      \r	retorno de carro
      \t	tabulación
      \b	límite de palabra
      \f	fuente de formulario
      Ten en cuenta que la barra invertida en sí debe ser escapada para poder mostrarla como una barra invertida.
***Asigna las siguientes tres líneas de texto en la variable única myStr usando secuencias de escape.
FirstLine
   \SecondLine
ThirdLine
Necesitarás usar secuencias de escape para insertar correctamente los caracteres especiales. También necesitarás 
seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras.
Nota: La sangría para la segunda línea (SecondLine) se consigue con el carácter de escape de tabulación, no con 
espacios.
------------------------------------------------------------------------------------------------------------------*/
/*
const myStr = "FirstLine\n\t\\SecondLine\n\ThirdLine"; // Change this line
*/
/*28-----------------------------------------------------------------------------------------------------------------
      Concatena cadenas con el operador "más"
      En JavaScript, cuando el operador + se utiliza con un valor de cadena (String), se le llama operador de concatenación. Puedes construir una nueva cadena a partir de otras cadenas concatenándolas juntas.
      Ejemplo
      'My name is Alan,' + ' I concatenate.'
      Nota: Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que tendrás que añadirlos por tu cuenta.
      Ejemplo:
      const ourStr = "I come first. " + "I come second.";
      La cadena I come first. I come second. se mostrará en la consola.
***Construye myStr a partir de las cadenas This is the start. y This is the end. utilizando el operador +. 
Asegúrate de incluir un espacio entre las dos cadenas.
------------------------------------------------------------------------------------------------------------------*/
/*
const myStr = "This is the start. " + "This is the end."; // Change this line
*/
/*29-----------------------------------------------------------------------------------------------------------------
      Concatena cadenas con el operador "más igual"
      También podemos utilizar el operador += para concatenar una cadena al final de una variable de cadena existente.
      Esto puede ser muy útil para romper una cadena larga en varias líneas.
      Nota: Ten cuidado con los espacios. La concatenación no añade espacios entre las cadenas concatenadas, así que 
      tendrás que añadirlos por tu cuenta.
      Ejemplo:
      let ourStr = "I come first. ";
      ourStr += "I come second.";
      ourStr ahora tiene un valor de la cadena I come first. I come second..
***Construye myStr en varias líneas concatenando estas dos cadenas: This is the first sentence. y This is the second 
sentence. usando el operador +=. Utiliza el operador += similar a como se muestra en el ejemplo y asegúrate de 
incluir un espacio entre las dos cadenas. Comienza asignando la primera cadena a myStr, luego añade la segunda cadena.
------------------------------------------------------------------------------------------------------------------*/
/*
let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
*/
/*30-----------------------------------------------------------------------------------------------------------------
      Construye cadenas con variables
      A veces necesitarás construir una cadena, al estilo Mad Libs. Al usar el operador de concatenación (+), puedes 
      insertar una o más variables en una cadena que estés construyendo.
      Ejemplo:
      const ourName = "freeCodeCamp";
      const ourStr = "Hello, our name is " + ourName + ", how are you?";
      ourStr tendrá como valor la cadena Hello, our name is freeCodeCamp, how are you?.
***Establece myName en una cadena igual a tu nombre y construye myStr con myName entre las cadenas 
My name is y and I am well!
------------------------------------------------------------------------------------------------------------------*/
/*
// Only change code below this line
const myName = "Facundo Villalba";
const myStr = "My name is " + myName + " and I am well!";
*/
/*31-----------------------------------------------------------------------------------------------------------------
      Agrega variables a cadenas
      Al igual que podemos construir una cadena sobre múltiples líneas a partir de las cadenas literales, también 
      podemos añadir variables a una cadena usando el operador "más igual" (+=).
      Ejemplo:
      const anAdjective = "awesome!";
      let ourStr = "freeCodeCamp is ";
      ourStr += anAdjective;
      ourStr tendrá el valor de freeCodeCamp is awesome!.
***Establece someAdjective a una cadena de al menos 3 caracteres y añádelo a myStr usando el operador +=.
------------------------------------------------------------------------------------------------------------------*/
/*
// Change code below this line
const someAdjective = "awesome!";
let myStr = "Learning to code is ";
myStr += someAdjective;
*/
/*32-----------------------------------------------------------------------------------------------------------------
      Encuentra la longitud de una cadena
      Puedes encontrar la longitud de un valor de cadena (String) escribiendo .length después de la variable de 
      cadena o literal de cadena.
      console.log("Alan Peter".length);
      El valor 10 se mostrará en la consola.
      Por ejemplo, si creamos una variable const firstName = "Ada", podríamos averiguar la longitud de la 
      cadena Ada usando la propiedad firstName.length.
***Usa la propiedad .length para contar el número de caracteres en la variable lastName y asignarla a lastNameLength.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";
// Only change code below this line
lastNameLength = lastName.length;
*/
/*33-----------------------------------------------------------------------------------------------------------------
      Utiliza la notación de corchetes para encontrar el primer carácter en una cadena
      La notación de corchetes es una forma de obtener un carácter en un índice (index) específico dentro de una
      cadena.
      La mayoría de lenguajes de programación modernos, como JavaScript, no empiezan a contar desde 1 como lo 
      hacen los humanos. Empiezan desde 0. Esto se conoce como indexación basada en cero.
      Por ejemplo, el carácter en el índice 0 de la palabra Charles es C. Así que si declaramos 
      const firstName = "Charles", puedes obtener el valor de la primera letra de la cadena usando firstName[0].
      Ejemplo:
      const firstName = "Charles";
      const firstLetter = firstName[0];
      firstLetter tendrá una cadena con valor C.
***Utiliza notación de corchetes para encontrar el primer carácter en la variable 
lastName y asígnalo a firstLetterOfLastName.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line
*/
/*34-----------------------------------------------------------------------------------------------------------------
      Comprende la inmutabilidad de las cadenas
      En JavaScript, los valores de cadena (String) son inmutables, lo que significa que no pueden ser alterados una 
      vez creados.
      Por ejemplo, el siguiente código:
      let myStr = "Bob";
      myStr[0] = "J";
      no puede cambiar el valor de myStr a Job, porque el contenido de myStr no puede ser alterado. Ten en cuenta que
      esto no significa que myStr no puede cambiarse, solo que los caracteres individuales de una cadena literal 
      no pueden ser cambiados. La única forma de cambiar myStr sería asignarla con una nueva cadena, como esta:
      let myStr = "Bob";
      myStr = "Job";
***Corrige la asignación de myStr para que contenga el valor de cadena Hello World usando el método mostrado en el 
ejemplo anterior.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
let myStr = "Jello World";
// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line
*/
/*35-----------------------------------------------------------------------------------------------------------------
      Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena
      También puedes usar notación de corchetes para obtener el carácter en otras posiciones dentro de una cadena.
      Recuerda que las computadoras empiezan a contar desde 0, así que el primer carácter es en realidad el 
      carácter cero.
      Ejemplo:
      const firstName = "Ada";
      const secondLetterOfFirstName = firstName[1];
      secondLetterOfFirstName tendrá una cadena con valor d.
***Intentemos establecer thirdLetterOfLastName (tercera letra del apellido) para que sea igual a la tercera letra 
de la variable lastName usando notación de corchetes.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line
*/
/*36-----------------------------------------------------------------------------------------------------------------
      Utiliza la notación de corchetes para encontrar el último carácter en una cadena
      Con el fin de obtener la última letra de una cadena, puedes restar uno a la longitud del texto.
      Por ejemplo, sí const firstName = "Ada", puedes obtener el valor de la última letra de la cadena usando 
      firstName[firstName.length - 1].
      Ejemplo:
      const firstName = "Ada";
      const lastLetter = firstName[firstName.length - 1];
      lastLetter tendrá una cadena con valor a.
***Usa notación de corchetes para encontrar el último carácter en la variable lastName.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line
*/
/*37-----------------------------------------------------------------------------------------------------------------
      Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena
      Puedes usar el mismo principio que acabamos de usar para recuperar el último carácter de una cadena para 
      recuperar el carácter enésimo final.
      Por ejemplo, puedes obtener el valor de la antepenúltima letra de la cadena const firstName = "Augusta" usando
      firstName[firstName.length - 3]
      Ejemplo:
      const firstName = "Augusta";
      const thirdToLastLetter = firstName[firstName.length - 3];
      thirdToLastLetter tendrá una cadena con valor s.
***Usa notación de corchetes para encontrar el penúltimo carácter en la cadena lastName.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line
*/
/*38-----------------------------------------------------------------------------------------------------------------
      Palabra en blanco
      Ahora usaremos nuestros conocimientos de cadenas para construir un juego de palabras estilo "Mad Libs" que 
      llamamos "Palabra en blanco". Crearás una frase (opcionalmente humorística) del estilo: Rellena los 
      espacios vacíos.
      En un juego de "Mad Libs", se te proporcionan oraciones con algunas palabras faltantes, como sustantivos, 
      verbos, adjetivos y adverbios. Luego, rellenas las piezas que faltan con palabras de tu elección de una 
      manera que la frase completa tenga sentido.
      Considera esta oración: It was really ____, and we ____ ourselves ____. Esta oración tiene tres piezas 
      faltantes: un adjetivo, un verbo y un adverbio, y podemos añadir palabras de nuestra elección para completarla.
      A continuación, podemos asignar la oración completa a una variable de la siguiente manera:
      const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
***En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Necesita formar una 
oración completa usando palabras de tu elección, junto con las palabras que te proporcionamos.
Necesitarás usar el operador de concatenación de cadenas + para construir una nueva cadena, usando las variables
proporcionadas: myNoun, myAdjective, myVerb, y myAdverb. Luego asignarás la cadena formada a la variable wordBlanks. 
No debes cambiar las palabras asignadas a las variables.
También tendrás que tener en cuenta los espacios en tu cadena, para que la frase final tenga espacios entre todas las
palabras. El resultado debe ser una oración completa.
------------------------------------------------------------------------------------------------------------------*/
/*
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = "My " + myNoun + " is " + myAdjective + " and "+ myVerb + " and " + myAdverb + "."; // Change this line
// Only change code above this line
*/
/*39-----------------------------------------------------------------------------------------------------------------
      Almacena múltiples valores en una variable utilizando los arreglos de JavaScript
      Con las variables de arreglos (array) de JavaScript, podemos almacenar varios datos en un solo lugar.
      Inicias una declaración de arreglo con un corchete de apertura, lo terminas con un corchete de cierre, y pones 
      una coma entre cada entrada, de esta forma:
      const sandwich = ["peanut butter", "jelly", "bread"];
***Modifica el nuevo arreglo myArray para que contenga tanto una cadena como un número (en ese orden).
------------------------------------------------------------------------------------------------------------------*/
/*
// Only change code below this line
const myArray = ["Hello", 1];
*/
/*40-----------------------------------------------------------------------------------------------------------------
      Anida un arreglo dentro de otro arreglo
      También puedes anidar arreglos dentro de otros arreglos, como a continuación:
      const teams = [["Bulls", 23], ["White Sox", 45]];
      Esto también es conocido como arreglo multidimensional.
***Crea un arreglo anidado llamado myArray.
------------------------------------------------------------------------------------------------------------------*/
/*
// Only change code below this line
const myArray = [["Tomba", 1], ["Boca Juniors", 2]];
*/
/*41-----------------------------------------------------------------------------------------------------------------
      Accede a los datos de un arreglo con índices
      Podemos acceder a los datos dentro de un arreglo usando índices.
      Los índices de los arreglos se escriben en la misma notación de corchetes que usan las cadenas de texto, con la 
      excepción que en vez de especificar un carácter, se especifica una entrada en el arreglo. Así como las cadenas de
      texto, los arreglos usan indexación empezando desde cero, en donde el primer elemento de un arreglo tiene como 
      índice 0.
      Ejemplo
      const array = [50, 60, 70];
      array[0];
      const data = array[1];
      array[0] ahora es 50 y data tiene el valor 60.
      Nota: No debe haber espacios entre el nombre del arreglo y los corchetes, como array [0]. Aunque JavaScript pueda
      procesar esto correctamente, puedes confundir a otros programadores al leer tu código.
***Crea una variable llamada myData e iguálala al primer valor de myArray usando notación de corchetes.
------------------------------------------------------------------------------------------------------------------*/
/*
const myArray = [50, 60, 70];
const myData = myArray[0];
*/
/*42-----------------------------------------------------------------------------------------------------------------
      Modifica los datos de un arreglo con índices
      A diferencia de las cadenas, las entradas de los arreglos son mutables y pueden cambiarse libremente, incluso si
      el arreglo fue declarado con const.
      Ejemplo
      const ourArray = [50, 40, 30];
      ourArray[0] = 15;
      ourArray ahora tiene el valor [15, 40, 30].
      Nota: No debe haber espacios entre el nombre del arreglo y los corchetes, como array [0]. Aunque JavaScript pueda
      procesar esto correctamente, puedes confundir a otros programadores al leer tu código.
***Modifica los datos almacenados en el índice 0 de myArray a un valor de 45.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45;
*/
/*43-----------------------------------------------------------------------------------------------------------------
      Accede a arreglos multidimensionales con índices
      Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para 
      acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo 
      (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.
      Ejemplo
      const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [[10, 11, 12], 13, 14]
      ];
      arr[3];
      arr[3][0];
      arr[3][0][1];
      arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.
      Nota: No debe haber ningún espacio entre el nombre del arreglo y los corchetes, ni array [0][0] o array [0] [0] 
      están permitidos. 
***Usa la notación de corchetes para seleccionar un elemento de myArray de tal manera que myData sea igual a 8.
------------------------------------------------------------------------------------------------------------------*/
/*
const myArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
 const myData = myArray[2][1];
*/
/*43-----------------------------------------------------------------------------------------------------------------
      Accede a arreglos multidimensionales con índices
      Se puede pensar que un arreglo multidimensional es como un arreglo de arreglos. Cuando usas corchetes para 
      acceder a tu arreglo, el primer par de corchetes se refiere a las entradas en el arreglo externo 
      (el primer nivel) y cada par adicional de corchetes se refiere al siguiente nivel de entradas.
      Ejemplo
      const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [[10, 11, 12], 13, 14]
      ];
      arr[3];
      arr[3][0];
      arr[3][0][1];
      arr[3] es [[10, 11, 12], 13, 14], arr[3][0] es [10, 11, 12] y arr[3][0][1] es 11.
      Nota: No debe haber ningún espacio entre el nombre del arreglo y los corchetes, ni array [0][0] o array [0] [0] 
      están permitidos. 
***Usa la notación de corchetes para seleccionar un elemento de myArray de tal manera que myData sea igual a 8.
------------------------------------------------------------------------------------------------------------------*/
/*
const myArray = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [[10, 11, 12], 13, 14],
 ];
 
 const myData = myArray[2][1];
*/
/*44-----------------------------------------------------------------------------------------------------------------
      Manipula arreglos con push()
      Una forma fácil de añadir datos al final de un arreglo es a través de la función push().
      .push() toma uno o más parámetros y los "empuja" al final del arreglo.
      Ejemplos:
      const arr1 = [1, 2, 3];
      arr1.push(4);
      const arr2 = ["Stimpson", "J", "cat"];
      arr2.push(["happy", "joy"]);
      arr1 ahora tiene el valor [1, 2, 3, 4] y arr2 tiene el valor ["Stimpson", "J", "cat", ["happy", "joy"]].
***Empuja ["dog", 3] al final de la variable myArray.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3]);
*/
/*45-----------------------------------------------------------------------------------------------------------------
      Manipula arreglos con pop()
      Otra manera de cambiar los datos en un arreglo es con la función .pop().
      .pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a
      una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.
      Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.
      const threeArr = [1, 4, 6];
      const oneDown = threeArr.pop();
      console.log(oneDown);
      console.log(threeArr);
      El primer console.log mostrará el valor 6 y el segundo mostrará el valor [1, 4].
***Utiliza la función .pop() para eliminar el último elemento de myArray, y asigna el valor sacado a un variable nuevo removedFromMyArray.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
const removedFromMyArray = myArray.pop();
*/
/*46-----------------------------------------------------------------------------------------------------------------
      Manipula arreglos con shift()
      pop() siempre elimina el último elemento de un arreglo. ¿Qué tal si quieres eliminar el primero?
      Ahí es donde entra .shift(). Funciona igual que .pop(), excepto que elimina el primer elemento en lugar 
      del último.
      Ejemplo:
      const ourArray = ["Stimpson", "J", ["cat"]];
      const removedFromOurArray = ourArray.shift();
      removedFromOurArray tendrá una cadena con valor Stimpson y ourArray tendrá ["J", ["cat"]].
***Utiliza la función .shift() para eliminar el primer elemento de myArray, y asigna el valor "desplazado" a un 
variable nuevo removedFromMyArray.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
const removedFromMyArray = myArray.shift();
*/
/*47-----------------------------------------------------------------------------------------------------------------
      Manipula arreglos con unshift()
      No solo puedes desplazar (shift) elementos del comienzo de un arreglo, también puedes des-desplazar (unshift) 
      elementos al comienzo de un arreglo. Por ejemplo añadir elementos delante del arreglo.
      .unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del
      arreglo, unshift() añade el elemento al principio del arreglo.
      Ejemplo:
      const ourArray = ["Stimpson", "J", "cat"];
      ourArray.shift();
      ourArray.unshift("Happy");
      Después del shift, ourArray tendrá el valor ["J", "cat"]. Después del unshift, ourArray tendrá 
      el valor ["Happy", "J", "cat"].
***Agrega ["Paul", 35] al principio de la variable myArray usando unshift().
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);
*/
/*48-----------------------------------------------------------------------------------------------------------------
      Lista de compras
***Crea una lista de compras en la variable myList. La lista debe ser un arreglo multidimensional que contenga 
varios sub-arreglos.
El primer elemento de cada sub-arreglo debe contener una cadena con el nombre del artículo. El segundo elemento 
debe ser un número que represente la cantidad, por ejemplo.
["Chocolate Bar", 15]
Debe haber al menos 5 sub-arreglos en la lista.
------------------------------------------------------------------------------------------------------------------*/
/*
const myList = [["Pencil", 20], ["Eraser", 5], ["Ruler", 55], ["Pen", 30], ["Bag", 200]];
*/
/*49-----------------------------------------------------------------------------------------------------------------
      Escribe JavaScript reutilizable utilizando funciones
      En JavaScript, podemos dividir nuestro código en partes reutilizables llamadas funciones.
      Este es un ejemplo de una función:
      function functionName() {
      console.log("Hello World");
      }
      Puedes llamar o invocar esta función usando su nombre seguido por paréntesis, así: functionName(); Cada vez que
      se llame la función se imprimirá el mensaje Hello World en la consola de desarrollo. Todo el código entre las
      llaves se ejecutará cada vez que se llame la función.
***Crea una función llamada reusableFunction que imprima la cadena Hi World en la consola de desarrollo.
Llama a la función.
------------------------------------------------------------------------------------------------------------------*/
/*
function reusableFunction() {
   console.log("Hi World");
}
reusableFunction();
*/
/*50-----------------------------------------------------------------------------------------------------------------
      Pasa valores a las funciones utilizando argumentos
      Los parámetros son variables que actúan como marcadores de posición para los valores que deben ser introducidos 
      en una función cuando se llama. Cuando se define una función, se define típicamente junto con uno o más 
      parámetros. Los valores reales que son introducidos (o "pasados") a una función cuando se llama son conocidos 
      como argumentos.
      Esta es una función con dos parámetros, param1 y param2:
      function testFun(param1, param2) {
      console.log(param1, param2);
      }
      Entonces podemos llamar a testFun así: testFun("Hello", "World");. Hemos pasado dos argumentos de cadena,
      Hello y World. Dentro de la función, param1 será igual a la cadena Hello y param2 será igual a la cadena World.
      Ten en cuenta que podrías llamar a testFun otra vez con diferentes argumentos y los parámetros tomarían el valor
      de los nuevos argumentos.
***Crea una función llamada functionWithArgs que acepte dos argumentos y muestre la suma de ellos en la consola de desarrollador.
Llama a la función con dos números como argumentos.
------------------------------------------------------------------------------------------------------------------*/
/*
function functionWithArgs(param1, param2) {
   console.log(param1 + param2);
 }
 functionWithArgs(5, 4);
*/
/*50-----------------------------------------------------------------------------------------------------------------
      Devuelve un valor de una función utilizando "Return"
      Podemos pasar valores a una función con argumentos. Puedes utilizar una declaración de devolución (return) para
      enviar un valor fuera de una función.
      Ejemplo
      function plusThree(num) {
      return num + 3;
      }
      const answer = plusThree(5);
      answer tiene el valor 8.
      plusThree toma un argumento para num y devuelve un valor igual a num + 3.
***Crea una función timesFive que acepte un argumento, lo multiplique por 5 y devuelva el nuevo valor.
------------------------------------------------------------------------------------------------------------------*/
/*
function timesFive(num) {
   return num * 5;
 }
 timesFive(5);
*/
/*51-----------------------------------------------------------------------------------------------------------------
      En JavaScript, el ámbito se refiere a la visibilidad de las variables. Las variables definidas fuera de un 
      bloque de función tienen un ámbito Global. Esto significa que pueden ser observadas desde cualquier lugar en tu
      código JavaScript.
      Las variables que se declaran sin las palabras clave let o const se crean automáticamente en el ámbito global. 
      Esto puede crear consecuencias no intencionadas en cualquier lugar de tu código o al volver a ejecutar una 
      función. Siempre debes declarar tus variables con let o const.
***Usando let o const, declara una variable global llamada myGlobal fuera de cualquier función. Inicialízala con un
valor de 10.
Dentro de la función fun1, asigna 5 a oopsGlobal sin usar las palabras clave let o const.
------------------------------------------------------------------------------------------------------------------*/
/*
// Declare the myGlobal variable below this line
const myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
*/
/*52-----------------------------------------------------------------------------------------------------------------
      Ámbito local y funciones
      Las variables que se declaran dentro de una función, así como los parámetros de la función tienen un ámbito 
      local. Esto significa que sólo son visibles dentro de esa función.
      Esta es una función myTest con una variable local llamada loc.
      function myTest() {
      const loc = "foo";
      console.log(loc);
      }
      myTest();
      console.log(loc);
      La llamada a la función myTest() mostrará la cadena foo en la consola. La línea console.log(loc) (fuera de la
      función myTest) lanzará un error, ya que loc no está definido fuera de la función.
      El editor tiene dos console.logs para ayudarte a ver lo que está sucediendo. Revisa la consola a medida que 
      programas para ver cómo cambia. 
***Declara una variable local myVar dentro de myLocalScope y ejecuta las pruebas.
Nota: La consola todavía mostrará el error ReferenceError: myVar is not defined, pero esto no causará que las 
pruebas fallen.
------------------------------------------------------------------------------------------------------------------*/
/*
function myLocalScope() {
   // Only change code below this line
 const myVar = 5;
   console.log('inside myLocalScope', myVar);
 }
 myLocalScope();
 // Run and check the console
 // myVar is not defined outside of myLocalScope
 console.log('outside myLocalScope', myVar);
*/
/*53-----------------------------------------------------------------------------------------------------------------
      Ámbito global vs. local en funciones
      Es posible tener variables locales y globales con el mismo nombre. Cuando haces esto, la variable local tiene 
      precedencia sobre la variable global.
      En este ejemplo:
      const someVar = "Hat";
      function myFun() {
      const someVar = "Head";
      return someVar;
      }
      La función myFun devolverá la cadena Head porque está presente la versión local de la variable.
***Añade una variable local a la función myOutfit para sobrescribir el valor de outerWear con la cadena sweater.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();
*/
/*54-----------------------------------------------------------------------------------------------------------------
      Comprendiendo el valor indefinido devuelto por una función
      Una función puede incluir la declaración de devolución (return) pero no tiene por qué hacerlo. En el caso de 
      que la función no tenga una declaración de devolución (return), cuando la llames, la función procesa el código 
      interno, pero el valor devuelto es undefined (indefinido).
      Ejemplo
      let sum = 0;
      function addSum(num) {
      sum = sum + num;
      }
      addSum(3);
      addSum es una función sin una declaración de devolución (return). La función cambiará la variable global sum 
      pero el valor devuelto de la función es undefined.
***Crea una función addFive sin ningún argumento. Esta función suma 5 a la variable sum, pero su valor devuelto 
es undefined.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive(){
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();
*/
/*55-----------------------------------------------------------------------------------------------------------------
      Asignación con un valor devuelto
      Si recuerdas de nuestra discusión sobre almacenar valores con el operador de asignación, todo a la derecha del
      signo de igualdad se resuelve antes de asignar el valor. Esto significa que podemos tomar el valor devuelto de
      una función y asignarlo a una variable.
      Supongamos que hemos predefinido una función sum que suma dos números juntos, entonces:
      ourSum = sum(5, 12);
      llamará a la función sum, que devuelve un valor de 17 y lo asigna a la variable ourSum.
***Llama la función processArg con un argumento de 7 y asigna su valor de retorno a la variable processed.
------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);
*/
/*56-----------------------------------------------------------------------------------------------------------------
      Permanece en línea
      En Informática una cola (queue) es una estructura de datos abstracta donde los elementos se mantienen en orden. 
      Los nuevos elementos se pueden añadir en la parte posterior de la cola y los elementos antiguos se retiran de la
      parte delantera de la cola.
      Escribe una función nextInLine que tome un arreglo (arr) y un número (item) como argumentos.
***Agrega el número al final del arreglo, luego elimina el primer elemento del arreglo.
La función nextInLine debe entonces devolver el elemento que fue removido.
---------------------------------------------------------------------------------------------------------------------*/
/*
function nextInLine(arr, item) {
   // Only change code below this line
     arr.push(item);
   return arr.shift(); 
   // Only change code above this line
 }
 // Setup
 const testArr = [1, 2, 3, 4, 5];
 // Display code
 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));
*/
/*57-----------------------------------------------------------------------------------------------------------------
      Comprende los valores booleanos
      Otro tipo de datos es el Booleano. Los booleanos solo pueden ser uno de dos valores:
      true (verdadero) o false (falso). Básicamente son pequeños interruptores de encendido, donde true es encendido y
      false es apagado. Estos dos estados se excluyen mutuamente.
      Nota Los valores del tipo booleano nunca se escriben con comillas. Las cadenas "true" y "false" no son 
      booleanos y no tienen ningún significado especial en JavaScript.
***Modifica la función welcomeToBooleans para que devuelva true en lugar de false cuando se haga clic en el botón de
ejecución.
---------------------------------------------------------------------------------------------------------------------*/
/*
function welcomeToBooleans() {
   // Only change code below this line
 
   return true; // Change this line
 
   // Only change code above this line
 }
*/
/*58-----------------------------------------------------------------------------------------------------------------
      Usa lógica condicional con las sentencias "If"
      Las sentencias if son utilizadas para tomar decisiones en el código. La palabra clave if le dice a JavaScript que
      ejecute el código entre llaves bajo ciertas condiciones, definidas en los paréntesis. Estas condiciones son 
      conocidas como condiciones booleanas (Boolean) y sólo pueden ser true o false.
      Cuando la condición se evalúa como true, el programa ejecuta el comando dentro de las llaves. Cuando la condición
      booleana se evalúa como false, la sentencia dentro de las llaves no se ejecutará.
      Pseudocódigo
      si (la condición es verdadera) {
      la sentencia es ejecutada
      }
      Ejemplo
      function test (myCondition) {
      if (myCondition) {
         return "It was true";
      }
      return "It was false";
      }
      test(true);
      test(false);
      test(true) devuelve la cadena It was true y test(false) devuelve la cadena It was false.
      Cuando test es llamada con un valor de true, la sentencia if evalúa myCondition (mi condición) para ver si es 
      true o no. Puesto que es true, la función devuelve It was true. Cuando llamamos a test con un valor de 
      false, myCondition no es true, la sentencia dentro de las llaves no se ejecuta y la función devuelve It was false.
***Crea una sentencia if dentro de la función que devuelva Yes, that was true si el parámetro wasThatTrue es true y 
devuelva No, that was false en caso contrario.
---------------------------------------------------------------------------------------------------------------------*/
/*
function trueOrFalse(wasThatTrue) {
   // Only change code below this line
 if (wasThatTrue) {
   return "Yes, that was true";
 }
 return "No, that was false";
   // Only change code above this line
 }
*/
/*58-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador de igualdad
      Hay muchos operadores de comparación en JavaScript. Todos estos operadores devuelven un valor booleano
      true o false.
      El operador más básico es el de igualdad ==. El operador de igualdad compara dos valores y devuelve true si son
      equivalentes o false si no lo son. Ten en cuenta que una igualdad es diferente a una asignación (=), la cual 
      asigna el valor a la derecha del operador a la variable de la izquierda.
      function equalityTest(myVal) {
      if (myVal == 10) {
         return "Equal";
      }
      return "Not Equal";
      }
      Si myVal es igual a 10, el operador de igualdad devuelve true, así que el código dentro de los corchetes se 
      ejecutará y la función devolverá Equal. De lo contrario, la función devolverá Not Equal. Para que JavaScript 
      compare dos tipos de datos diferentes (por ejemplo, numbers y strings), tiene que convertir un tipo a otro. 
      Esto se conoce como coerción de Tipo. Sin embargo, una vez lo hace, puede comparar términos como se ve 
      a continuación:
      1   ==  1  // true
      1   ==  2  // false
      1   == '1' // true
      "3" ==  3  // true
***Agrega el operador de igualdad a la línea indicada para que la función devuelva la cadena Equal cuando val sea 
equivalente a 12.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function testEqual(val) {
   if (val == 12) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 testEqual(10);
*/
/*59-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador de estricta igualdad
      La estricta igualdad (===) es la contraparte del operador de igualdad (==). Sin embargo, a diferencia del 
      operador de igualdad, el cual intenta convertir ambos valores comparados a un tipo común, el operador de 
      estricta igualdad no realiza una conversión de tipo.
      Si los valores que se comparan tienen diferentes tipos, se consideran desiguales, y el operador de estricta 
      igualdad devolverá falso.
      Ejemplos
      3 ===  3  // true
      3 === '3' // false
      En el segundo ejemplo, 3 es de tipo Number (número) y '3' es de tipo String (cadena).
***Usa el operador de estricta igualdad en la sentencia if para que la función devuelva la cadena Equal cuando val sea
estrictamente igual a 7.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function testStrict(val) {
   if (val === 7) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 testStrict(10);
*/
/*59-----------------------------------------------------------------------------------------------------------------
      Practica comparando diferentes valores
      En los dos últimos desafíos, aprendimos sobre el operador de igualdad (==) y el operador de estricta 
      igualdad (===). Vamos a hacer una rápida revisión y práctica utilizando estos operadores un poco más.
      Si los valores que se comparan no son del mismo tipo, el operador de igualdad realizará una conversión de tipo y
      luego evaluará los valores. Sin embargo, el operador de estricta igualdad comparará tanto el tipo de datos como 
      el valor tal como es, sin convertir un tipo a otro.
      Ejemplos
      3 == '3' devuelve true porque JavaScript realiza la conversión de tipo de cadena a número. 3 === '3' devuelve 
      false porque los tipos son diferentes y la conversión de tipo no se realiza.
      Nota: En JavaScript, puedes determinar el tipo de una variable o un valor con el operador typeof, de la 
      siguiente manera:
      typeof 3
      typeof '3'
      typeof 3 devuelve la cadena number y typeof '3' devuelve la cadena string.
      La función compareEquality en el editor compara dos valores usando el operador de igualdad. 
***Modifica la función para que devuelva la cadena Equal sólo cuando los valores son estrictamente iguales.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function compareEquality(a, b) {
   if (a === b) { // Change this line
     return "Equal";
   }
   return "Not Equal";
 }
 
 compareEquality(10, "10");
*/
/*60-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador de desigualdad
      El operador de desigualdad (!=) es lo opuesto al operador de igualdad. Esto quiere decir que no es igual, y 
      devuelve false cuando la comparación de igualdad devuelva true y vice versa. Al igual que el operador de 
      igualdad, el operador de desigualdad convertirá los tipos de datos mientras los compara.
      Ejemplos
      1 !=  2    // true
      1 != "1"   // false
      1 != '1'   // false
      1 != true  // false
      0 != false // false
***Agrega el operador de desigualdad != en la sentencia if para que la función devuelva la cadena Not Equal cuando 
val no sea equivalente a 99.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function testNotEqual(val) {
   if (val != 99) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
 testNotEqual(10);
 */
/*61-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Comparación con el operador de estricta desigualdad
      El operador de estricta desigualdad !== es el opuesto lógico del operador de estricta igualdad. Esto significa 
      "Estrictamente Desigual", y devuelve false cuando la comparación de estricta igualdad devolvería true y vice 
      versa. El operador de estricta desigualdad no convertirá los tipos de datos.
      Ejemplos
      3 !==  3  // false
      3 !== '3' // true
      4 !==  3  // true
***Agrega el operador de estricta desigualdad a la sentencia if para que la función devuelva la cadena Not Equal 
cuando val no sea estrictamente igual a 17
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function testStrictNotEqual(val) {
   if (val !== 17) { // Change this line
     return "Not Equal";
   }
   return "Equal";
 }
 
 testStrictNotEqual(10);
 */
/*61-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador "mayor que"
      El operador mayor que (>) compara los valores de dos números. Si el número a la izquierda es mayor que el 
      número a la derecha, devuelve true. De lo contrario, devuelve false.
      Al igual que el operador de igualdad, el operador mayor que convertirá los tipos de datos de valores mientras 
      los compara.
      Ejemplos
      5   >  3  // true
      7   > '3' // true
      2   >  3  // false
      '1' >  9  // false
***Agrega el operador mayor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testGreaterThan(val) {
   if (val > 100) {  // Change this line
     return "Over 100";
   }
 
   if (val > 10) {  // Change this line
     return "Over 10";
   }
 
   return "10 or Under";
 }
 
 testGreaterThan(10);
 */
/*61-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador "mayor o igual que"
      El operador mayor o igual que (>=) compara el valor de dos números. Si el número de la izquierda es mayor o 
      igual que el número de la derecha, devuelve true. De lo contrario, devuelve false.
      Al igual que el operador de igualdad, el operador mayor o igual que convertirá los tipos de datos mientras 
      los compara.
      Ejemplos
      6   >=  6  // true
      7   >= '3' // true
      2   >=  3  // false
      '7' >=  9  // false
***Agrega el operador mayor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testGreaterOrEqual(val) {
   if (val >= 20) {  // Change this line
     return "20 or Over";
   }
 
   if (val >= 10 ) {  // Change this line
     return "10 or Over";
   }
 
   return "Less than 10";
 }
 
 testGreaterOrEqual(10);
*/
/*61-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador "menor que"
      El operador menor que (<) compara los valores de dos números. Si el número a la izquierda es menor que el 
      número a la derecha, devuelve true. De lo contrario, devuelve false. Al igual que el operador de igualdad, el 
      operador menor que convertirá los tipos de datos mientras los compara.
      Ejemplos
      2   < 5 // true
      '3' < 7 // true
      5   < 5 // false
      3   < 2 // false
      '8' < 4 // false
***Agrega el operador menor que a las líneas indicadas para que las declaraciones de devolución tengan sentido.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testLessThan(val) {
   if (val < 25) {  // Change this line
     return "Under 25";
   }
 
   if (val < 55) {  // Change this line
     return "Under 55";
   }
 
   return "55 or Over";
 }
 
 testLessThan(10);
*/
/*62-----------------------------------------------------------------------------------------------------------------
      Comparación con el operador "menor o igual que"
      El operador menor o igual que (<=) compara el valor de dos números. Si el número de la izquierda es menor o 
      igual que el número de la derecha, devuelve true. Si el número a la izquierda es mayor que el número a la 
      derecha, devuelve false. Al igual que el operador de igualdad, el operador menor o igual que convertirá los 
      tipos de datos mientras los compara.
      Ejemplos
      4   <= 5 // true
      '7' <= 7 // true
      5   <= 5 // true
      3   <= 2 // false
      '8' <= 4 // false
***Agrega el operador menor o igual que a las líneas indicadas para que el valor devuelto tenga sentido.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testLessOrEqual(val) {
   if (val <= 12) {  // Change this line
     return "Smaller Than or Equal to 12";
   }
 
   if (val <= 24) {  // Change this line
     return "Smaller Than or Equal to 24";
   }
 
   return "More Than 24";
 }
 
 testLessOrEqual(10);
*/
/*63-----------------------------------------------------------------------------------------------------------------
      Comparaciones con el operador lógico "and"
      A veces tendrás que probar más de una cosa a la vez. El operador lógico and (&&) devuelve true si y solo si los 
      operandos a la izquierda y a la derecha son verdaderos.
      El mismo efecto se podría lograr anidando una sentencia if dentro de otra sentencia if:
      if (num > 5) {
      if (num < 10) {
         return "Yes";
      }
      }
      return "No";
      solo devolverá Yes si num es mayor que 5 y menor que 10. La misma lógica se puede escribir como:

      if (num > 5 && num < 10) {
      return "Yes";
      }
      return "No";
***Reemplaza las dos sentencias if por una sola, usando el operador &&, el cual devolverá la cadena Yes si val es 
menor o igual a 50 y mayor o igual a 25. De lo contrario, devolverá la cadena No.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testLogicalAnd(val) {
   // Only change code below this line
 
   if (val >= 25 && val <= 50) {
       return "Yes";
   }
   // Only change code above this line
   return "No";
 }
 
 testLogicalAnd(10);
*/
/*64-----------------------------------------------------------------------------------------------------------------
      Comparaciones con el operador lógico "or"
      El operador lógico or (||) devuelve true si cualquiera de los operandos es true. 
      De lo contrario, devuelve false.
      El operador lógico or se compone de dos símbolos de barra vertical: (||). Este se puede encontrar normalmente 
      entre las teclas de tabulación y escape.
      El patrón de abajo debería parecer familiar desde los puntos de referencia anteriores:
      if (num > 10) {
      return "No";
      }
      if (num < 5) {
      return "No";
      }
      return "Yes";
      devolverá Yes sólo si num está entre 5 y 10 (5 y 10 incluidos). La misma lógica se puede escribir como:
      if (num > 10 || num < 5) {
      return "No";
      }
      return "Yes";
***Combina las dos sentencias if en una sola sentencia que devuelva la cadena Outside si val no está entre 10 y 20, 
inclusivo. De lo contrario, devuelve la cadena Inside.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testLogicalOr(val) {
   // Only change code below this line
 
   if (val > 20 || val < 10) {
     return "Outside";
   }
   // Only change code above this line
   return "Inside";
 }
 
 testLogicalOr(15);
*/
/*65-----------------------------------------------------------------------------------------------------------------
      Introducción a las sentencias "Else"
      Cuando la condición en una sentencia if es verdadera, se ejecutará el bloque de código que va a continuación. 
      ¿Qué sucede cuando la condición es falsa? Normalmente no debería ocurrir nada. Con la sentencia else, se puede 
      ejecutar un bloque alternativo de código.
      if (num > 10) {
      return "Bigger than 10";
      } else {
      return "10 or Less";
      }
***Combina la sentencia if en una sola sentencia if/else.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testElse(val) {
   let result = "";
   // Only change code below this line
 
   if (val > 5) {
     result = "Bigger than 5";
   }else{
     result = "5 or Smaller";
   }
 
   // Only change code above this line
   return result;
 }
 
 testElse(4);
*/
/*66-----------------------------------------------------------------------------------------------------------------
      Introducción a las sentencias "Else If"
      Si tienes múltiples condiciones que necesitan ser resueltas, puedes encadenar sentencias if junto con 
      sentencias else if.
      if (num > 15) {
      return "Bigger than 15";
      } else if (num < 5) {
      return "Smaller than 5";
      } else {
      return "Between 5 and 15";
      }
***Transforma la lógica para utilizar la sentencia else if.
---------------------------------------------------------------------------------------------------------------------*/
/*
function testElseIf(val) {
      if (val > 10) {
        return "Greater than 10";
      } else if (val < 5) {
        return "Smaller than 5";
      } else {
      return "Between 5 and 10";
    }
}
testElseIf(7);
*/
/*67-----------------------------------------------------------------------------------------------------------------
      Orden lógico de las sentencias "if else"
      El orden es importante en las sentencias if, else if.
      La función se ejecuta de arriba a abajo, por lo que habrá que tener cuidado con qué sentencia va primero.
      Tomemos como ejemplo estas dos funciones.
      Aquí está la primera:
      function foo(x) {
      if (x < 1) {
      return "Less than one";
      } else if (x < 2) {
      return "Less than two";
      } else {
      return "Greater than or equal to two";
      }
      }
      Y la segunda, simplemente cambia el orden de las sentencias:
      function bar(x) {
      if (x < 2) {
      return "Less than two";
      } else if (x < 1) {
      return "Less than one";
      } else {
      return "Greater than or equal to two";
      }
      }
      Mientras que estas dos funciones parecen casi idénticas, si pasamos un número a ambas, obtenemos 
      diferentes salidas.
      foo(0)
      bar(0)
      foo(0) devolverá la cadena Less than one, y bar(0) devolverá la cadena Less than two.
***Cambia el orden lógico en la función para que devuelva el resultado correcto en todos los casos.
---------------------------------------------------------------------------------------------------------------------*/
/*
function orderMyLogic(val) {
      if (val < 5) {  
        return "Less than 5";
      } else if (val < 10) { 
        return "Less than 10";
      } else {
        return "Greater than or equal to 10";
      }
    }
    orderMyLogic(7);
*/
/*68-----------------------------------------------------------------------------------------------------------------
      Encadena sentencias if else
      Las sentencias if/else pueden ser encadenadas para crear una lógica compleja. Aquí hay pseudocódigo de 
      múltiples declaraciones if / else if encadenadas:
      if (condition1) {
      statement1
      } else if (condition2) {
      statement2
      } else if (condition3) {
      statement3
      . . .
      } else {
      statementN
      }
***Escribe sentencias if / else if encadenadas para cumplir con las siguientes condiciones:
num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
---------------------------------------------------------------------------------------------------------------------*/
/*
function testSize(num) {
      // Only change code below this line
    if (num < 5 ){
      return "Tiny";
    } else if (num < 10){
      return "Small";
    } else if (num < 15){
      return "Medium";
    } else if (num < 20){
      return "Large";
    } else if (num >= 20){
      return "Huge";
    } else{
      return "Change Me";
      // Only change code above this line
    }
    }
    testSize(7);
*/
/*69-----------------------------------------------------------------------------------------------------------------
      Código de golf
      En el juego de golf cada hoyo tiene un par que significa el número promedio de strokes (golpes) que se espera 
      que haga un golfista para introducir la pelota en un hoyo para completar la jugada. Dependiendo de qué tan por 
      encima o por debajo del par estén tus strokes, hay un nombre diferente.
      Tu función recibirá los argumentos par y strokes. Devuelve la cadena correcta según esta tabla que muestra los 
      golpes en orden de prioridad; superior (más alto) a inferior (más bajo):
      Strokes (golpes)	Devuelve
      1	"Hole-in-one!"
      <= par - 2	"Eagle"
      par - 1	"Birdie"
      par	"Par"
      par + 1	"Bogey"
      par + 2	"Double Bogey"
      >= par + 3	"Go Home!"
      par y strokes siempre serán numéricos y positivos. Hemos añadido un arreglo de todos los nombres para tu 
      conveniencia.
---------------------------------------------------------------------------------------------------------------------*/
/*
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1){
    return names[0];
    } else if (strokes <= par -2){
      return names[1];
    } else if (strokes == par - 1){
      return names[2];
    } else if (strokes == par){
      return names[3];    
    } else if (strokes == par + 1){
      return names[4];
    } else if (strokes == par + 2){
      return names[5];
    } else if (strokes >= par + 3){
      return names[6];
    }
  return "Change Me";
  // Only change code above this line
}
golfScore(5, 4);
*/
/*70-----------------------------------------------------------------------------------------------------------------
      Seleccionando entre muchas opciones con declaración switch
      Si tienes muchas opciones para elegir, usa una declaración switch. Una sentencia switch prueba un valor y puede
      tener muchas sentencias case que definen varios valores posibles. Las sentencias se ejecutan desde el primer 
      valor case coincidente hasta que se encuentra un break.
      Aquí hay un ejemplo de una declaración switch:
      switch(lowercaseLetter) {
      case "a":
      console.log("A");
      break;
      case "b":
      console.log("B");
      break;
      }
      Los valores en las sentencias case se prueban con igualdad estricta (===). El break le dice a JavaScript que 
      deje de ejecutar declaraciones. Si se omite break, se ejecutara la siguiente sentencia.
***Escribe una declaración switch que pruebe val y establezca answer con las siguientes condiciones:
1 - alpha
2 - beta
3 - gamma
4 - delta
---------------------------------------------------------------------------------------------------------------------*/
/*
function caseInSwitch(val) {
      let answer = "";
      // Only change code below this line
    switch(val){
      case 1:
      answer = "alpha";
      break;
      case 2:
      answer = "beta";
      break;
      case 3:
      answer = "gamma";
      break;
      case 4:
      answer = "delta";
      break;
    }
      // Only change code above this line
      return answer;
    }
    
    caseInSwitch(1);
*/
/*71-----------------------------------------------------------------------------------------------------------------
      Agrega una opción predeterminada en las declaraciones switch
      En una declaración switch puede que no seas capaz de especificar todos los valores posibles como declaraciones 
      de case (caso). En su lugar, se puede añadir la declaración default, la cual se ejecutará si no se encuentran 
      declaraciones case. Piensa en ella como la última sentencia else en una cadena if/else.
      Una declaración default debe ser el último caso.
      switch (num) {
      case value1:
      statement1;
      break;
      case value2:
      statement2;
      break;
      ...
      default:
      defaultStatement;
      break;
      }
Escribe una declaración switch para establecer answer con las siguientes condiciones:
a - apple
b - bird
c - cat
default - stuff
---------------------------------------------------------------------------------------------------------------------*/
/*
function switchOfStuff(val) {
      let answer = "";
      // Only change code below this line
      switch (val) {
        case "a":
          answer = "apple";
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break; 
          
        default:
          answer = "stuff";
          break;
      }
      // Only change code above this line
      return answer;
    }  
    switchOfStuff(1);
*/
/*72-----------------------------------------------------------------------------------------------------------------
      Múltiples opciones idénticas en las declaraciones "switch"
      Si la sentencia break es omitida en un caso (case) de una sentencia switch, las siguientes sentencias case 
      serán ejecutadas hasta encontrar un break. Si tienes múltiples entradas con la misma salida, puedes 
      representarlas en una sentencia switch como esta:
      let result = "";
      switch(val) {
      case 1:
      case 2:
      case 3:
      result = "1, 2, or 3";
      break;
      case 4:
      result = "4 alone";
      }
      Los casos 1, 2 y 3 producirán el mismo resultado.

***Escribe una declaración switch para establecer answer con los siguientes rangos:
1-3 - Low
4-6 - Mid
7-9 - High

Nota: Necesitarás tener un case para cada número dentro del rango.
---------------------------------------------------------------------------------------------------------------------*/
/*
function sequentialSizes(val) {
      let answer = "";
      // Only change code below this line
      switch(val){
        case 1:
        case 2:
        case 3:
        answer = "Low";
        break;
        case 4:
        case 5:
        case 6:
        answer = "Mid";
        break
        case 7:
        case 8:
        case 9:
        answer = "High";
      }
      // Only change code above this line
      return answer;
    }
*/
/*73-----------------------------------------------------------------------------------------------------------------
      Reemplazando cadenas de "If Else" por "Switch"
      Si tienes muchas opciones entre las que elegir, una sentencia switch puede ser más fácil de escribir que muchas
      sentencias if/else if encadenadas. Lo siguiente:
      if (val === 1) {
      answer = "a";
      } else if (val === 2) {
      answer = "b";
      } else {
      answer = "c";
      }
      puede reemplazarse por:
      switch(val) {
      case 1:
      answer = "a";
      break;
      case 2:
      answer = "b";
      break;
      default:
      answer = "c";
      }
***Cambia la cadena de sentencias if/else if por una sentencia switch.
---------------------------------------------------------------------------------------------------------------------*/
/*
function chainToSwitch(val) {
      let answer = "";
      // Only change code below this line
    
      switch(val) {
        case "bob":
        answer = "Marley";
        break;
        case 42:
        answer = "The Answer";
        break;
        case 1:
        answer = "There is no #1";
        break;
        case 99:
        answer = "Missed me by this much!";
        break;
        case 7:
        answer = "Ate Nine";
        break;
      }
      
      // Only change code above this line
      return answer;
    }
    
    chainToSwitch(7);
*/
/*74-----------------------------------------------------------------------------------------------------------------
      Devuelve valores booleanos desde funciones
      Podrás recordar que en Comparación con el operador de igualdad todos los operadores de comparación devuelven un 
      valor booleano true, o false.
      A veces la gente usa una sentencia if/else para hacer una comparación, como esta:
      function isEqual(a, b) {
      if (a === b) {
      return true;
      } else {
      return false;
      }
      }
      Pero hay una mejor manera de hacer esto. Puesto que === devuelve true o false, podemos devolver el resultado de
      la comparación:
      function isEqual(a, b) {
      return a === b;
      }
***Corrige la función isLess para eliminar las sentencias if/else.
---------------------------------------------------------------------------------------------------------------------*/
/*
function isLess(a, b) {
      // Only change code below this line
      return  a < b;
      // Only change code above this line
    }  
    isLess(10, 15);
*/
/*75-----------------------------------------------------------------------------------------------------------------
      Patrón de devolución anticipado para funciones
      Cuando se alcanza una sentencia return, la ejecución de la función actual se detiene y el control se devuelve a 
      la ubicación de la llamada.
      Ejemplo
      function myFun() {
      console.log("Hello");
      return "World";
      console.log("byebye")
      }
      myFun();
      Lo anterior mostrará la cadena Hello en la consola y devolverá la cadena World. La cadena byebye nunca se 
      mostrará en la consola, porque la función termina en la sentencia return.
***Modifica la función abTest para que cuando a o b sean menores que 0 la función salga inmediatamente 
con un valor undefined.
Sugerencia
Recuerda que undefined es una palabra clave, no una cadena.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function abTest(a, b) {
      // Only change code below this line
      if (a< 0 || b < 0){
        return undefined;
    
      }
      // Only change code above this line 
      return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
    }  
    abTest(2,2);
*/
/*76-----------------------------------------------------------------------------------------------------------------
Conteo de cartas
En el juego de casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del numero relativo 
de cartas altas y bajas que quedan en la baraja. Esto es llamado conteo de cartas.
Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a 
la siguiente tabla. Cuando el conteo es positivo, el jugador debería apostar alto. Cuando el conteo da 0 o negativo, 
el jugador debería apostar bajo.

Cambios del conteo	Cartas
      +1	            2, 3, 4, 5, 6
      0	            7, 8, 9
      -1	            10, 'J', 'Q', 'K', 'A'
Escribirás una función para contar cartas. Recibirá un parámetro card (carta) que puede ser un número o una cadena y 
aumentar o reducir la variable global count (conteo) de acuerdo al valor de la carta (observa la tabla). 
La función devolverá una cadena con el conteo actual y la cadena Bet (Apuesta) si el conteo es positivo, o Hold 
(Espera) si el conteo es cero o negativo. 
El conteo actual y la decisión del jugador (Bet o Hold) deben estar separados por un solo espacio.
Resultados de ejemplo: -3 Hold o 5 Bet
Sugerencia
NO reinicies count a 0 cuando el valor sea 7, 8 o 9. 
NO devuelvas un arreglo.
NO incluyas comillas (individuales o dobles) en el resultado.
---------------------------------------------------------------------------------------------------------------------*/
/*
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;   
  }
  var decide = 'Hold'
  if (count > 0){
        decide = 'Bet'
  }
  return count + " " + decide
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
*/
/*77-----------------------------------------------------------------------------------------------------------------
      Construye objetos en JavaScript
      Es posible que hayas escuchado el término objeto (object) antes.
      Los objetos son similares a los arreglos (arrays), excepto que en lugar de usar índices para acceder y 
      modificar sus datos, accedes a los datos en objetos a través de propiedades (properties).
      Los objetos son útiles para almacenar datos de forma estructurada y pueden representar objetos del mundo 
      real, como un gato.
      Por ejemplo, aquí hay un objeto de gato:
      const cat = {
      "name": "Whiskers",
      "legs": 4,
      "tails": 1,
      "enemies": ["Water", "Dogs"]
      };
      En este ejemplo, todas las propiedades se almacenan como cadenas, como name, legs y tails. Sin embargo, también 
      puedes utilizar números como propiedades. Incluso puedes omitir las comillas para las propiedades de cadenas de 
      una sola palabra, de la siguiente manera:
      const anotherObject = {
      make: "Ford",
      5: "five",
      "model": "focus"
      };
      Sin embargo, si tu objeto tiene propiedades que no son cadenas, JavaScript las convertirá automáticamente en 
      cadenas.
***Crea un objeto que represente a un perro llamado myDog que contenga las propiedades name (una cadena), legs, 
tails y friends.
Puedes establecer estas propiedades del objeto a los valores que quieras, siempre y cuando name sea una cadena, 
legs y tails sean números, y friends sea un arreglo.
---------------------------------------------------------------------------------------------------------------------*/
/*
const myDog = {
      // Only change code below this line
          "name": "Berta",
          "legs": 4,
          "tails": 1,
          "friends": ["Inca", "Pancho", "Bruma"]
      // Only change code above this line
    };
*/
/*78-----------------------------------------------------------------------------------------------------------------
      Accede a propiedades de objetos con notación de puntos
      Hay dos maneras de acceder a las propiedades de un objeto: notación de puntos (.) y notación de corchetes ([]), 
      similar a un arreglo.
      La notación de puntos es lo que se usa cuando conoces el nombre de la propiedad a la que intentas acceder con 
      antelación.
      Aquí hay un ejemplo de cómo usar la notación de puntos (.) para leer la propiedad de un objeto:
      const myObj = {
      prop1: "val1",
      prop2: "val2"
      };
      const prop1val = myObj.prop1;
      const prop2val = myObj.prop2;
      prop1val tendrá una cadena con valor val1 y prop2val tendrá una cadena con valor val2.
***Lee los valores de las propiedades de testObj utilizando la notación de puntos. Asigna la variable hatValue igual a 
la propiedad hat del objeto y asigna la variable shirtValue igual a la propiedad shirt del objeto.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const testObj = {
      "hat": "ballcap",
      "shirt": "jersey",
      "shoes": "cleats"
    };
    
    // Only change code below this line
    const hatValue = testObj.hat;      // Change this line
    const shirtValue = testObj.shirt;    // Change this line
*/
/*79-----------------------------------------------------------------------------------------------------------------
      Accede a propiedades de objetos con notación de corchete
      La segunda manera de acceder a las propiedades de un objeto es con la notación de corchetes ([]). Si la 
      propiedad del objeto al que intentas acceder tiene un espacio en el nombre, necesitarás usar 
      notación de corchetes.
      Sin embargo, también puedes utilizar la notación de corchetes en las propiedades de objeto sin espacios.
      Aquí hay un ejemplo de cómo usar la notación de corchetes para leer la propiedad de un objeto:
      const myObj = {
      "Space Name": "Kirk",
      "More Space": "Spock",
      "NoSpace": "USS Enterprise"
      };
      myObj["Space Name"];
      myObj['More Space'];
      myObj["NoSpace"];
      myObj["Space Name"] sería la cadena Kirk, myObj['More Space'] sería la cadena Spock, y myObj["NoSpace"] sería 
      la cadena USS Enterprise.
      Ten en cuenta que los nombres de las propiedades con espacios deben estar entre comillas (simples o dobles).
***Lee los valores de las propiedades an entree y the drink de testObj usando la notación de corchetes y asígnalos a 
entreeValue y drinkValue respectivamente.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const testObj = {
      "an entree": "hamburger",
      "my side": "veggies",
      "the drink": "water"
    };
    
    // Only change code below this line
    const entreeValue = testObj["an entree"];   // Change this line
    const drinkValue = testObj["the drink"];    // Change this line
*/
/*80-----------------------------------------------------------------------------------------------------------------
      Accede a propiedades de objetos con variables
      Otro uso de la notación de corchetes en objetos es acceder a una propiedad que está almacenada como el valor 
      de una variable. Esto puede ser muy útil para iterar a través de las propiedades de un objeto o para acceder a 
      una tabla de búsqueda.
      Aquí hay un ejemplo del uso de una variable para acceder a una propiedad:
      const dogs = {
      Fido: "Mutt",
      Hunter: "Doberman",
      Snoopie: "Beagle"
      };
      const myDog = "Hunter";
      const myBreed = dogs[myDog];
      console.log(myBreed);
      La cadena Doberman se mostrará en la consola.
      Otra forma de usar este concepto es cuando el nombre de la propiedad se recoge dinámicamente durante la 
      ejecución del programa, de la siguiente manera:
      const someObj = {
      propName: "John"
      };

      function propPrefix(str) {
      const s = "prop";
      return s + str;
      }
      const someProp = propPrefix("Name");
      console.log(someObj[someProp]);
      someProp tendrá una cadena con un valor propName y la cadena John se mostrará en la consola.
      Ten en cuenta que no usamos comillas alrededor del nombre de la variable cuando la usamos para acceder a la 
      propiedad porque utilizamos el valor de la variable, no el nombre.
***Establece la variable playerNumber a 16. Luego, usa la variable para buscar el nombre del jugador y asignarlo 
a player.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const testObj = {
      12: "Namath",
      16: "Montana",
      19: "Unitas"
    };
    
    // Only change code below this line
    const playerNumber = 16;  // Change this line
    const player = testObj[playerNumber];   // Change this line
*/
/*81-----------------------------------------------------------------------------------------------------------------
Actualizando las propiedades de un objeto
Después de haber creado un objeto de JavaScript, puedes actualizar sus propiedades en cualquier momento tal y como 
actualizarías cualquier otra variable. Puedes utilizar tanto la notación de puntos como la notación de corchetes para 
actualizar.
Por ejemplo, veamos ourDog:
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
Puesto que es un perro particularmente feliz, vamos a cambiar su nombre por la cadena Happy Camper. Así es como 
actualizamos la propiedad del nombre del objeto: ourDog.name = "Happy Camper"; o ourDog["name"] = "Happy Camper";. 
Ahora cuando evaluamos ourDog.name, en lugar de obtener Camper, vamos a obtener su nuevo nombre, Happy Camper.
Actualiza la propiedad nombre del objeto myDog. Cambiemos su nombre de Coder a Happy Coder. Puedes utilizar tanto la 
notación de puntos como la notación de corchetes
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myDog = {
      "name": "Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
    
    // Only change code below this line
    myDog["name"] = "Happy Coder";
*/
/*82-----------------------------------------------------------------------------------------------------------------
      Añade nuevas propiedades a un objeto de JavaScript
      Puedes añadir nuevas propiedades a los objetos de JavaScript existentes de la misma manera que los modificarías.
      Así es como podríamos agregar una propiedad bark a nuestro objeto ourDog:
      ourDog.bark = "bow-wow";
      o
      ourDog["bark"] = "bow-wow";
      Ahora cuando evaluemos ourDog.bark, obtendremos su ladrido, bow-wow.
      Por ejemplo:
      const ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
      };
      ourDog.bark = "bow-wow";
***Añade una propiedad bark a myDog y establécela a un sonido de perro, como "woof". Puedes usar tanto la notación de 
puntos como la notación de corchetes.
---------------------------------------------------------------------------------------------------------------------*/
/*
const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"]
    };
    myDog.bark = "woof";
*/
/*83-----------------------------------------------------------------------------------------------------------------
      Elimina propiedades en un objeto de JavaScript
      También podemos eliminar propiedades de objetos de esta forma:
      delete ourDog.bark;
      Ejemplo:
      const ourDog = {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"],
      "bark": "bow-wow"
      };
      delete ourDog.bark;
      Después de la última línea mostrada anteriormente, ourDog se ve así:
      {
      "name": "Camper",
      "legs": 4,
      "tails": 1,
      "friends": ["everything!"]
}
***Elimina la propiedad tails de myDog. Puedes usar tanto la notación de puntos como la notación de corchetes.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myDog = {
      "name": "Happy Coder",
      "legs": 4,
      "tails": 1,
      "friends": ["freeCodeCamp Campers"],
      "bark": "woof"
    };
    
    // Only change code below this line
    delete myDog.tails;
*/
/*84-----------------------------------------------------------------------------------------------------------------
      Usa objetos para hacer búsquedas
      Los objetos pueden ser considerados como un almacenamiento clave/valor, como un diccionario. Si tienes datos 
      tabulares, puedes utilizar un objeto para hacer una búsqueda de valores en lugar de una declaración 
      switch o encadenar if/else. Esto es de mucha utilidad cuando se sabe que los datos de entrada están limitados 
      a un cierto rango.
      Aquí hay un ejemplo de una simple búsqueda de alfabeto inverso:
      const alpha = {
      1:"Z",
      2:"Y",
      3:"X",
      4:"W",
      ...
      24:"C",
      25:"B",
      26:"A"
      };
      alpha[2];
      alpha[24];
      const value = 2;
      alpha[value];
      alpha[2] es la cadena Y, alpha[24] es la cadena C, y alpha[value] es la cadena Y.
***Convierte la declaración switch en un objeto llamado lookup. Úsalo para buscar val y asignar la cadena asociada 
a la variable result.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
function phoneticLookup(val) {
      let result = "";
      // Only change code below this line
      const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
      };
      result = lookup[val]
      // Only change code above this line
      return result;
    } 
    phoneticLookup("charlie");
*/
/*85-----------------------------------------------------------------------------------------------------------------
      Verifica las propiedades de un objeto
      A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el 
      método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con 
      ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.
      Por ejemplo
      const myObj = {
      top: "hat",
      bottom: "pants"
      };
      myObj.hasOwnProperty("top");
      myObj.hasOwnProperty("middle");
      El primer hasOwnProperty devuelve true, mientras que el segundo devuelve false.

***Modifica la función checkObj para verificar si el objeto obj pasado a la función contiene la propiedad checkProp. 
Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no, devuelve "Not Found".
---------------------------------------------------------------------------------------------------------------------*/
/*
function checkObj(obj, checkProp) {
      // Only change code below this line
      if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
      } else {
        return "Not Found";
      }
      // Only change code above this line
    }
*/
/*86-----------------------------------------------------------------------------------------------------------------
      Manipulando objectos complejos
      A veces, es posible que desees almacenar datos en una estructura de datos flexible. Un objeto de JavaScript es 
      una forma de manejar datos flexibles. Permiten combinaciones arbitrarias de cadenas, números, booleanos, 
      arreglos, funciones, y objetos.
      Este es un ejemplo de una estructura de datos compleja:
      const ourMusic = [
      {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
            "CD", 
            "Cassette", 
            "LP"
      ],
      "gold": true
      }
      ];
      Esto es una arreglo que contiene un objeto en su interior. El objeto tiene varias piezas de metadatos sobre 
      un álbum. También tiene un arreglo anidado de formats. Si desea añadir más registros de álbumes, puede hacerlo 
      añadiendo registros a la parte superior del arreglo. Los objetos almacenan datos en una propiedad, con formato 
      clave-valor. En el ejemplo anterior, "artist": "Daft Punk" es una propiedad que tiene como clave artist y su 
      valor es Daft Punk. JavaScript Object Notation o JSON es un formato de intercambio de datos relacionado 
      utilizado para almacenar información.
      {
      "artist": "Daft Punk",
      "title": "Homework",
      "release_year": 1997,
      "formats": [ 
      "CD",
      "Cassette",
      "LP"
      ],
      "gold": true
      }
      Nota: Deberás colocar una coma después de cada objeto en el arreglo, a menos que sea el último objeto.
***Añade un nuevo álbum al arreglo myMusic. Añade las cadenas artist y title, el número release_year, y un 
arreglo de cadenas formats.
---------------------------------------------------------------------------------------------------------------------*/
/*
const myMusic = [
      {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
          "CD",
          "8T",
          "LP"
        ],
        "gold": true
      },
      {
        "artist": "ACDC",
        "title": "Black in Black",
        "release_year": 1980,
        "formats": [
          "CD",
          "Casette"
        ]
      }
    ];
*/
/*87-----------------------------------------------------------------------------------------------------------------
      Accede a objetos anidados
      Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes.
      Aquí hay un objeto anidado:
      const ourStorage = {
      "desk": {
      "drawer": "stapler"
      },
      "cabinet": {
      "top drawer": { 
            "folder1": "a file",
            "folder2": "secrets"
      },
      "bottom drawer": "soda"
      }
      };
      ourStorage.cabinet["top drawer"].folder2;
      ourStorage.desk.drawer;
      ourStorage.cabinet["top drawer"].folder2 sería la cadena secrets y ourStorage.desk.drawer sería la 
      cadena stapler.
***Accede al objeto myStorage y asigna el contenido de la propiedad glove box a la variable gloveBoxContents. 
Utiliza la notación de puntos para todas las propiedades cuando sea posible, de lo contrario utiliza la notación de 
corchetes.
---------------------------------------------------------------------------------------------------------------------*/
/*
const myStorage = {
      "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
         },
        "outside": {
          "trunk": "jack"
        }
      }
    };
    
    const gloveBoxContents = myStorage.car.inside["glove box"];
*/
/*88-----------------------------------------------------------------------------------------------------------------
      Accede a arreglos anidados
      Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también 
      arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de 
      arreglos puede ser encadenada para acceder a arreglos anidados.
      En el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:
      const ourPets = [
      {
      animalType: "cat",
      names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
      ]
      },
      {
      animalType: "dog",
      names: [
            "Spot",
            "Bowser",
            "Frankie"
      ]
      }
      ];
      ourPets[0].names[1];
      ourPets[1].names[0];
      ourPets[0].names[1] sería la cadena Fluffy, y ourPets[1].names[0] sería la cadena Spot.
***Utilizando la notación de puntos y corchetes, establezca la variable secondTree en el segundo elemento de la 
lista trees del objeto myPlants.
---------------------------------------------------------------------------------------------------------------------*/
/*
const myPlants = [
      {
        type: "flowers",
        list: [
          "rose",
          "tulip",
          "dandelion"
        ]
      },
      {
        type: "trees",
        list: [
          "fir",
          "pine",
          "birch"
        ]
      }
    ];
    
    const secondTree = myPlants[1].list[1];
*/
/*89-----------------------------------------------------------------------------------------------------------------
      Colección de discos
***Se te da un objeto literal que representa una parte de tu colección de álbumes musicales. Cada álbum tiene un 
número de id único como clave y varias otras propiedades. No todos los álbumes tienen una información completa.
Empiezas con una función updateRecords la cual toma un objeto literal, records, que contiene el álbum musical de la 
colección, un id, prop (como artist o tracks), y value. Completa la función usando las reglas siguientes para 
modificar el objeto pasado a la función.
Tu función siempre debe devolver el objeto de colección de registros completo.
Si prop no es tracks y value no es una cadena vacía, actualiza o establece la propiedad prop del album a value.
Si prop es tracks pero el álbum no tiene una propiedad tracks, crea un arreglo vacío y agrégale value a él.
Si prop es tracks y value no es una cadena vacía, agrega value al final del arreglo de tracks existentes del álbum.
Si value es una cadena vacía, elimina esa propiedad prop del álbum.
Nota: Se usa una copia del objeto recordCollection para las pruebas.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const recordCollection = {
      2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
      },
      2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
      },
      1245: {
        artist: 'Robert Palmer',
        tracks: []
      },
      5439: {
        albumTitle: 'ABBA Gold'
      }
    };
    // Only change code below this line
    function updateRecords(records, id, prop, value) {
      if (prop != 'tracks' && value != "") {
        records[id][prop] = value;
      } else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == false) {
        records[id][prop] = [value];
      } else if (prop == "tracks" && value != "") {
        records[id][prop].push(value);
      } else if (value == "") {
        delete records[id][prop];
      }
      return records;
    } 
    updateRecords(recordCollection, 5439, 'artist', 'ABBA');
*/
/*90-----------------------------------------------------------------------------------------------------------------
      Itera con el bucle "while" de JavaScript
      Puedes ejecutar el mismo código múltiples veces usando un bucle.
      El primer tipo de bucle que aprenderemos se llama bucle while porque ejecuta una condición específica mientras 
      esta sea verdadera, y se detiene una vez que esa condición ya no sea verdadera.
      const ourArray = [];
      let i = 0;
      while (i < 5) {
      ourArray.push(i);
      i++;
      }
      En el ejemplo de código anterior, el bucle while se ejecutará 5 veces y añadirá los números de 0 a 4 a ourArray.
***Intentemos construir un bucle while para que funcione empujando valores a un arreglo.
Agrega los números de 5 a 0 (inclusivo) en orden descendente a myArray usando un bucle while.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [];
// Only change code below this line
      let i = 5;
      while (i >= 0) {
      myArray.push(i);
      i--;
      }
*/
/*91-----------------------------------------------------------------------------------------------------------------
      Itera con los bucles "for" de JavaScript
      Puedes ejecutar el mismo código múltiples veces usando un bucle.
      El tipo más común de bucle de JavaScript se llama bucle for porque se ejecuta "por" un número específico de 
      veces. 
      Los bucles for se declaran con tres expresiones opcionales separadas por punto y coma:
      for (a; b; c), donde a es la sentencia de inicialización, b es la sentencia condicional, y c es la 
      expresión final.
      La sentencia de inicialización se ejecuta una sola vez antes de que el bucle comience. Normalmente se utiliza 
      para definir y configurar tu variable de bucle.
      La sentencia condicional es evaluada al principio de cada iteración del bucle y continuará siempre y cuando sea 
      true. Cuando la condición sea false al inicio de la iteración, el bucle dejará de ejecutarse. 
      Esto significa que si la condición comienza como falso, tu bucle nunca se ejecutará.
      La expresión final se ejecuta al final de cada iteración del bucle, antes de la siguiente comprobación de 
      condición y se utiliza normalmente para incrementar o disminuir tu contador de bucle.
      En el siguiente ejemplo inicializamos con i = 0 e iteramos mientras nuestra condición i < 5 es verdadera. 
      Incrementaremos i por 1 en cada iteración de bucle con i++ como nuestra expresión final.
      const ourArray = [];
      for (let i = 0; i < 5; i++) {
      ourArray.push(i);
      }
      ourArray ahora tendrá el valor [0, 1, 2, 3, 4].
***Usa un bucle for para empujar los valores desde el 1 al 5 en myArray.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i < 6; i++){
  myArray.push(i);
}
*/
/*92-----------------------------------------------------------------------------------------------------------------
      Itera números impares con un bucle "for"
      Los bucles "for" no tienen que iterar de uno en uno a la vez. Al cambiar nuestra final-expression 
      (expresión final), podemos contar con números pares.
      Empezaremos en i = 0 y realizaremos el bucle mientras i < 10. Incrementaremos i en 2 cada bucle 
      utilizando i += 2.
      const ourArray = [];
      for (let i = 0; i < 10; i += 2) {
      ourArray.push(i);
      }
      ourArray ahora contendrá [0, 2, 4, 6, 8]. 
***Cambiemos nuestra initialization (inicialización) para que podamos contar por números impares.
Inserta los números impares desde 1 hasta 9 en myArray utilizando un bucle for.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [];
// Only change code below this line
for (let i = 1; i < 10; i+= 2){
  myArray.push(i);
}
*/
/*93-----------------------------------------------------------------------------------------------------------------
      Cuenta hacia atrás con un bucle "for"
      Un bucle for también puede contar hacia atrás, siempre que definamos las condiciones adecuadas.
      Para poder disminuirle dos cada iteración, necesitaremos cambiar nuestra inicialización, condición, y 
      expresión final.
      Empezaremos en i = 10 e iteraremos mientras i > 0. Disminuiremos i en 2 por cada bucle con i -= 2.
      const ourArray = [];
      for (let i = 10; i > 0; i -= 2) {
      ourArray.push(i);
      }
      ourArray ahora contendrá [10, 8, 6, 4, 2]. 
***Ahora cambiemos el valor de inicialización y la expresión final de nuestro bucle para que podamos contar hacia 
atrás de dos en dos y así crear un arreglo descendente de números impares.
Inserta los números impares desde el 9 hasta el 1 en myArray utilizando un bucle for.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [];
// Only change code below this line
for (let i = 9; i > 0; i -=2){
  myArray.push(i);
}
*/
/*94-----------------------------------------------------------------------------------------------------------------
      Itera a través de un arreglo con un bucle "for"
      Una tarea común en JavaScript es iterar a través del contenido de un arreglo. Una forma de hacerlo es con un 
      bucle for.
      Este código mostrará cada elemento del arreglo arr en la consola:
      const arr = [10, 9, 8, 7, 6];
      for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      }
      Recuerda que los arreglos tienen una indexación basada en cero, lo que significa que el último índice del 
      arreglo es igual a su longitud menos uno (length - 1). Nuestra condición para este bucle es i < arr.length, que 
      detiene el bucle cuando i es igual a length. En este caso, la última iteración es i === 4, es decir, cuando i se 
      convierte en igual a arr.length - 1 y resultados 6 a la consola. Entonces i aumenta a 5, y el bucle 
      termina i < arr.length es false.
***Declara e inicializa una variable total a 0. Usa un bucle for para sumar el valor de cada elemento del 
arreglo myArr al total.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total= 0;
for (let i = 0; i < myArr.length; i++){
  total = total + myArr[i];  
}
console.log(total);
*/
/*95-----------------------------------------------------------------------------------------------------------------
      Anida bucles "for"
      Si tienes un arreglo multidimensional, puedes utilizar la misma lógica que aprendimos anteriormente para 
      recorrer tanto el arreglo como cualquier sub-arreglo. Aquí hay un ejemplo:
      const arr = [
      [1, 2], [3, 4], [5, 6]
      ];

      for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
      }
      }
      Esto imprime cada sub-elemento dentro de arr uno a la vez. Ten en cuenta que para el bucle interior, estamos 
      comprobando el .length de arr[i], ya que arr[i] es en sí mismo es un arreglo.
***Modifica la función multiplyAll para que devuelva el producto de todos los números dentro de los 
sub-arreglos de arr.
---------------------------------------------------------------------------------------------------------------------*/
/*
function multiplyAll(arr) {
      let product = 1;
      // Only change code below this line  
    for (let i = 0; i < arr.length; i++) { 
      for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }   
    }
      // Only change code above this line
      return product;
    }  
    multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
*/
/*96-----------------------------------------------------------------------------------------------------------------
      Itera con el bucle "do...while" de JavaScript
      El siguiente tipo de bucle que aprenderás se llama bucle do...while. Se llama bucle do...while porque primero 
      hace (do) una pasada por el código dentro del bucle sin importar qué, y luego continua ejecutando el bucle 
      mientras (while) la condición especificada sea verdadera (true).
      const ourArray = [];
      let i = 0;
      do {
      ourArray.push(i);
      i++;
      } while (i < 5);
      El ejemplo anterior se comporta de forma similar a otros tipos de bucles, siendo el arreglo 
      resultante [0, 1, 2, 3, 4]. Sin embargo, lo que hace que el bucle do...while sea diferente a otros bucles es 
      cómo se comporta cuando la condición falla en la primera verificación. Veamos esto en acción: Aquí puedes ver 
      un bucle while que ejecutará el código una y otra vez siempre que i < 5:
      const ourArray = []; 
      let i = 5;
      while (i < 5) {
      ourArray.push(i);
      i++;
      }
      En este ejemplo, inicializamos el valor de ourArray a un arreglo vacío y el valor de i a 5. Cuando ejecutamos 
      el bucle while, la condición se evalúa como false porque i no es inferior a 5, así que no ejecutamos el código 
      dentro del bucle. El resultado es que ourArray terminará sin valores añadidos, y todavía se verá como [] una 
      vez el código del ejemplo anterior haya terminado de ejecutarse. Ahora, dale un vistazo a un bucle do...while:
      const ourArray = []; 
      let i = 5;
      do {
      ourArray.push(i);
      i++;
      } while (i < 5);
      En este caso, inicializamos el valor de i a 5, tal como lo hicimos en el bucle while. Cuando lleguemos a la 
      siguiente línea, no hay ninguna condición para evaluar, así que entramos al código dentro de las llaves y se 
      ejecuta. Añadiremos un único elemento al arreglo y luego incrementaremos i antes de llegar a la verificación 
      de la condición. Cuando finalmente evaluamos la condición i < 5 en la última línea, vemos que el valor de i es 
      ahora 6, por lo que falla la comprobación condicional. Salimos del bucle y hemos terminado. Al final del 
      ejemplo anterior, el valor de ourArray es [5]. Esencialmente, un bucle do...while asegura que el código dentro 
      del bucle se ejecute al menos una vez. Intentemos construir un bucle do...while para que funcione empujando 
      valores a un arreglo.
***Cambia el bucle while en el código por un bucle do...while. El bucle solo enviará el número 10 a myArray, e i será 
igual a 11 cuando tu código haya terminado de ejecutarse.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Setup
const myArray = [];
let i = 10;
// Only change code below this line
do{
    myArray.push(i);
  i++;
}
while (i < 5) {
}
*/
/*97-----------------------------------------------------------------------------------------------------------------
      Reemplaza bucles usando recursión
      La recursión es el concepto que una función puede expresarse en términos de sí misma. Para ayudar a 
      comprender esto, comienza pensando en la siguiente tarea: multiplica los primeros n elementos de un arreglo 
      para crear el producto de esos elementos. Usando un bucle for, puedes hacer esto:
      function multiply(arr, n) {
      let product = 1;
      for (let i = 0; i < n; i++) {
            product *= arr[i];
      }
      return product;
      }
      Sin embargo, nota que multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]. Esto significa que puedes 
      reescribir multiply en términos de sí misma y que nunca necesites hacer uso de un bucle.
      function multiply(arr, n) {
      if (n <= 0) {
            return 1;
      } else {
            return multiply(arr, n - 1) * arr[n - 1];
      }
      }
      La versión recursiva de multiply se desglosa así. En el caso base, donde n <= 0, devuelve 1. Para valores más 
      grandes de n, se llama a sí misma, pero con n - 1. Esa llamada de función se evalúa de la misma manera, llamando 
      a multiply otra vez hasta que n <= 0. En este punto, todas las funciones pueden devolver y la multiply original 
      devuelve la respuesta.
      Nota: Las funciones recursivas deben tener un caso base cuando devuelven sin tener que llamar a la función de 
      nuevo (en este ejemplo, cuando n <= 0), de lo contrario nunca podrán terminar de ejecutarse.
***Escribe una función recursiva, sum(arr, n), que devuelve la suma de los primeros elementos n de un arreglo arr.
---------------------------------------------------------------------------------------------------------------------*/
/*
function sum(arr, n) {
      // Only change code below this line
      if(n <= 0) {
      return 0;
      } else {
      return sum(arr, n - 1) + arr[n - 1];
      }
      // Only change code above this line
    }
*/
/*98-----------------------------------------------------------------------------------------------------------------
      Búsqueda de perfiles
      Tenemos un arreglo de objetos que representan a diferentes personas en nuestras listas de contactos.
      Una función lookUpProfile que recibe nombre (name) y una propiedad (prop) como argumentos preescritos para ti.
      La función debe verificar si el nombre (name) es el nombre de pila del contacto (firstName) y 
      la propiedad (prop) dada es una propiedad de ese contacto.
      Si ambos son verdaderos, entonces devolver el "valor" de esa propiedad.
      Si name no corresponde a ningún contacto, entonces devuelve la cadena No such contact.
      Si prop no corresponde a ninguna propiedad válida de un contacto encontrado que coincida con name entonces 
      devuelve la cadena No such property.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Configuración
const contacts = [
      {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
      },
      {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
      },
      {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
      },
      {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
      },
    ];
    
    function lookUpProfile(name, prop) {
      // Only change code below this line
      for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
          if (prop in contacts[i]) {
            return contacts[i][prop];
          } else {
            return "No such property";
          }
        }
      }
      return "No such contact";
      // Only change code above this line
    }
    
    lookUpProfile("Akira", "likes");
*/
/*99-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Genera fracciones aleatorias con JavaScript
      Los números aleatorios son útiles para crear comportamientos aleatorios.
      JavaScript tiene una función Math.random() que genera un número decimal aleatorio 
      entre 0 (inclusivo) y 1 (exclusivo). Así que Math.random() puede devolver un 0 pero nunca devuelve un 1.
      Nota: Así como aprendimos en almacenando valores con el operador de igualdad, todas las llamadas de 
      funciones se resolverán antes de que el return se ejecute, así que podemos devolver (return) el valor de 
      la función Math.random().
***Cambia randomFraction para que devuelva un número aleatorio en lugar de devolver 0.
---------------------------------------------------------------------------------------------------------------------*/
/*
function randomFraction() {

      // Only change code below this line
    
      return Math.random();
    
      // Only change code above this line
    }
*/
/*100-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Genera números enteros aleatorios con JavaScript
      Es genial que podamos generar números decimales aleatorios, pero es incluso más útil si lo usamos para 
      generar números enteros aleatorios.
      Usa Math.random() para generar un decimal aleatorio.
      Multiplica ese decimal aleatorio por 20.
      Utiliza otra función, Math.floor() para redondear el número hacia abajo a su número entero más cercano.
      Recuerda que Math.random() nunca devolverá un 1 y porque estamos redondeando hacia abajo, es imposible 
      obtener 20. Esta técnica nos dará un número entero entre 0 y 19.
      Poniendo todo junto, así es como se ve nuestro código:
      Math.floor(Math.random() * 20);
      Estamos llamando a Math.random(), multiplicando el resultado por 20 y pasando el valor a la 
      función Math.floor() para redondear el valor hacia abajo al número entero más cercano.
***Utiliza esta técnica para generar y devolver un número entero aleatorio entre 0 y 9.
---------------------------------------------------------------------------------------------------------------------*/
/*
function randomWholeNum() {

      // Only change code below this line
    
      return Math.floor(Math.random() * 10);
}
*/
/*101-----------------------------------------------------------------------------------------------------------------
      Genera números enteros aleatorios dentro de un rango
      En lugar de generar un número entero aleatorio entre cero y un número dado como lo hicimos anteriormente, 
      podemos generar un número entero aleatorio que se encuentre dentro de un rango de dos números específicos.
      Para ello, definiremos un número mínimo min y un número máximo max.
      Esta es la fórmula que utilizaremos. Tómate un momento para leerla e intenta entender lo que este código 
      está haciendo:
      Math.floor(Math.random() * (max - min + 1)) + min
***Crea una función llamada randomRange que tenga un rango myMin y myMax y devuelva un número entero aleatorio 
mayor o igual a myMin, y es menor o igual a myMax, inclusivo.
---------------------------------------------------------------------------------------------------------------------*/
/*
function randomRange(myMin, myMax) {
      // Only change code below this line
      return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
      // Only change code above this line
}
*/
/*102-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Utiliza la función "parseInt"
      La función parseInt() analiza una cadena y devuelve un entero. A continuación, te presentamos un ejemplo:
      const a = parseInt("007");
      La función anterior convierte la cadena 007 al entero 7. Si el primer carácter de la cadena no puede ser 
      convertido en un número, entonces devuelve NaN.
***Utiliza parseInt() en la función convertToInteger para convertir la cadena de entrada str a un número 
entero, y devuélvelo.
---------------------------------------------------------------------------------------------------------------------*/
/*
function convertToInteger(str) {

      return parseInt(str)
}
      
convertToInteger("56");
*/
/*103-----------------------------------------------------------------------------------------------------------------
      Utiliza la función "parseInt" con Radix (Base)
      La función parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), 
      que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero 
      entre 2 y 36.
      La llamada a la función se realiza de la siguiente manera:
      parseInt(string, radix);
      Y aquí hay un ejemplo:
      const a = parseInt("11", 2);
      La variable radix indica que 11 está en el sistema binario, o base 2. Este ejemplo convierte la 
      cadena 11 a un entero 3.
***Utiliza parseInt() en la función convertToInteger para convertir un número binario en un número 
entero, y devolverlo.
---------------------------------------------------------------------------------------------------------------------*/
/*
function convertToInteger(str) {

      return parseInt(str, 2);
}
      
convertToInteger("10011");
*/
/*104-----------------------------------------------------------------------------------------------------------------
      Usa el operador condicional (ternario)
      El operador condicional, también llamado el operador ternario, puede utilizarse como una expresión if-else de 
      una sola línea.
      La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar cuando la condición devuelve true, 
      y c es el código a ejecutar cuando la condición devuelve false.
      La siguiente función utiliza una sentencia if/else para comprobar una condición:
      function findGreater(a, b) {
      if(a > b) {
      return "a is greater";
      }
      else {
      return "b is greater or equal";
      }
      }
      Esto puede reescribirse usando el operador condicional:
      function findGreater(a, b) {
      return a > b ? "a is greater" : "b is greater or equal";
      }
***Utiliza el operador condicional en la función checkEqual para comprobar si dos números son iguales o no. 
La función debe devolver la cadena Equal o la cadena Not Equal.
---------------------------------------------------------------------------------------------------------------------*/
/*
function checkEqual(a, b) {
      return a == b ? "Equal" : "Not Equal";
}
     
checkEqual(1, 2);
*/
/*105-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Usa múltiples operadores condicionales (ternarios)
      En el desafío anterior, usaste un único operador condicional. También puedes encadenarlos para comprobar 
      múltiples condiciones.
      La siguiente función utiliza sentencias if, else if, y else para comprobar múltiples condiciones:
      function findGreaterOrEqual(a, b) {
      if (a === b) {
      return "a and b are equal";
      }
      else if (a > b) {
      return "a is greater";
      }
      else {
      return "b is greater";
      }
      }
      La función anterior puede ser reescrita utilizando múltiples operadores condicionales:
      function findGreaterOrEqual(a, b) {
      return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
      }
      Se considera buena práctica dar formato a múltiples operadores condicionales de forma que cada condición 
      esté en una línea separada, como se muestra arriba. Usar múltiples operadores condicionales sin una 
      indentación adecuada puede hacer tu código difícil de leer. Por ejemplo:
      function findGreaterOrEqual(a, b) {
      return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
      }
***En la función checkSign, usa múltiples operadores condicionales (siguiendo el formato recomendado usado en 
findGreaterOrEqual) para comprobar si un número es positivo, negativo o cero. La función debe 
devolver positive, negative o zero.
---------------------------------------------------------------------------------------------------------------------*/
/*
function checkSign(num) {
      return (num === 0) ? "zero" 
      : (num < 0) ? "negative" 
      : "positive";
    }
    
    checkSign(10);
*/
/*106-----------------------------------------------------------------------------------------------------------------
      Utiliza recursión para crear una cuenta regresiva
      En el desafío anterior, aprendiste como usar la recursión para reemplazar un bucle for. Ahora, echemos un 
      vistazo a una función más compleja que devuelve un arreglo de enteros consecutivos empezando con 1 hasta el 
      número pasado a la función.
      Como se menciona en el desafío anterior, habrá un caso base. El caso base le dice a la función recursiva 
      cuando no necesita llamarse a sí misma. Es un caso simple donde el valor de retorno ya se conoce. También 
      habrá una llamada recursiva la cual ejecuta la función original con argumentos diferentes. Si la función se 
      escribe correctamente, eventualmente el caso base será alcanzado.
      Por ejemplo, digamos que quieres escribir una función recursiva que devuelva un arreglo conteniendo los 
      números 1 hasta n. Esta función necesitará aceptar un argumento, n que representa el número final. Entonces 
      necesitará llamarse a sí misma con valores progresivamente más pequeños de n hasta que alcance 1. 
      Podrías escribir la función de la siguiente manera:
      function countup(n) {
      if (n < 1) {
      return [];
      } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
      }
      }
      console.log(countup(5));
      El valor [1, 2, 3, 4, 5] se mostrará en la consola.
      Al principio, esto parece contraintuitivo ya que el valor de n disminuye, pero los valores en el arreglo final 
      se están incrementando. Esto sucede porque la inserción ocurre al último, después de la llamada recursiva. 
      En el punto donde n es empujado en el arreglo, countup(n - 1) ya ha sido evaluada y devuelto [1, 2, ..., n - 1].
***Hemos definido una función llamada countdown con un parámetro (n). La función debe usar recursión para devolver 
un arreglo conteniendo los n enteros hasta 1 basado en el parámetro n. Si la función es llamada con un número 
menor a 1, la función debe devolver un arreglo vacío. Por ejemplo, llamar esta función con n = 5 debe devolver 
el arreglo [5, 4, 3, 2, 1]. Tu función debe usar recursión llamándose a sí misma y no debe usar bucles de ningún tipo.
---------------------------------------------------------------------------------------------------------------------*/
/*
// Only change code below this line
function countdown(n){
      if (n < 1) {
        return [];
      } else {
        const array = countdown(n - 1);
        array.unshift(n);
        return array;
      }
}
    // Only change code above this line
*/
/*107-----------------------------------------------------------------------------------------------------------------
      Algoritmos de JavaScript y Estructuras de Datos
      JavaScript básico
      Usa recursión para crear un rango de números
      Continuando con el desafío anterior, te ofrecemos otra oportunidad de crear una función recursiva para resolver 
      un problema.
***Hemos definido una función llamada rangeOfNumbers con dos parámetros. La función debe devolver un arreglo de 
enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por 
el parámetro endNum. El número inicial será siempre menor o igual que el número final. Tu función debe utilizar 
recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. También debe funcionar en el caso que 
startNum y endNum sean iguales.
---------------------------------------------------------------------------------------------------------------------*/
/*
function rangeOfNumbers(startNum, endNum) {
      if (endNum - startNum === 0) {
       return [startNum];
     } else {
       var numbers = rangeOfNumbers(startNum, endNum - 1);
       numbers.push(endNum);
       return numbers;
     }
};
*/
