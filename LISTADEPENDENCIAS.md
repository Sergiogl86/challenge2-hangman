# Week 4 - Challenge 2

## Ahorcado

Programa mediante React el juego del ahorcado. Aquí tienes un `svg` para el dibujo del ahorcado, cada hijo del svg es un elemento que tendrás que ir mostrando cada vez que se falle (hay que utilizar conditional rendering para ello).

Hay que incluir un archivo con la lista de componentes y sus responsabilidades.

##Documento de responsabilidades

-App
-Muestra el titular de la pagina.
-Tiene un array de palabras.
-Tiene una constante palabra escogida, (se hace de forma aleatoria).
-Tiene un array de letras falladas.
-Tiene un array de letras acertadas.

_-Le pasa el texto al boton y la funcion a ejecutar.
_-Comprueba si la letra introducida esta en la palabra.
Si no lo esta, la tiene que añadir en el array de letras falladas.
Si lo esta, la tiene que añadir en el array de letras acertadas.
\*-Cuando no quedan segmentos del ahorcado por rellenar, tiene que crear un mesaje de fin de juego.

-Renderiza todos los componentes.

-Componente: Menasje Ganado/Perdido -XXXX- - Renderiza un mensaje recibido por parametro.

-Componente: Imagen Ahorcado - Con cada fallo pinta un segmento del dibujo. ?¿ tiene algun input?¿
\*hay que usar concional rendig

-Componente: Palabra incognita
-Muestra la letra que recibe.

-Componente: Letra
-Muestra una Letra que recibe.
\*Condicional que sea texto.

-Componente: Input Letra
-Permite al usuario introducir una letra.
\*Condicional que sea texto. -X-
\*Condicional que solo sea una letra. -X-
\*Condicional que no se repitan letras.
-Almacenar una letra. -NO-

-Componente: Boton
-Muestra un texto que le llega por parametro.
-Ejecutar una función que recibe.
\*Condicional que sea función

-Contenedor Letras Fallada. -XXXXXX-
Muestra el numero de letras falladas, que le entran por parametro.
\*condicional que sea array de texto.
