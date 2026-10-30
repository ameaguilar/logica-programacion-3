# Programa para calcular el factorial

Este proyecto solicita al usuario un número mediante un campo de entrada y calcula el factorial del número recibido. El resultado se muestra en la página y también se imprime en la consola.

## Índice

- [Instrucciones de ejecución](#instrucciones-de-ejecución)
- [Funcionamiento](#funcionamiento)
- [Archivos](#archivos)`r`n`r`n## Instrucciones de ejecución 

Abre `index.html` en un navegador, ingresa un entero no negativo y selecciona **Enviar**. Si el dato está vacío o no cumple con el formato esperado, corrígelo y envíalo nuevamente.

## Funcionamiento

1. El usuario escribe un valor en el campo y presiona **Enviar**.
2. El programa comprueba que el campo no esté vacío y convierte el valor a tipo `number`.
3. Si el valor no es un entero no negativo, muestra un mensaje de error en la página. El usuario puede corregir el dato y volver a presionar **Enviar**.
4. Si el dato es válido, calcula el factorial y presenta el resultado en el DOM y en la consola.

El factorial de un entero no negativo `n` es el producto de todos los enteros positivos desde `n` hasta `1`. Por definición, `0!` es `1`.

## Archivos

- `index.html`: contiene el campo de entrada, el botón y el área donde se presenta el resultado.
- `js/main.js`: procesa el envío, valida el valor ingresado y muestra el resultado.
- `js/formula.js`: implementa la función recursiva para calcular el factorial.




