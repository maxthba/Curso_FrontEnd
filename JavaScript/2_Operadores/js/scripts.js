// 1 number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -128);

// 2 ops.aritimetica
console.log(2+5);
console.log(10-5);
console.log(10/5);
console.log(10*5);

console.log(5 + 4 * 2);

// 3 special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "asd");

console.log(typeof NaN);

// 4 strings
console.log("teste");
console.log(`mais um teste`);
console.log(`13`);

console.log(typeof "teste");
console.log(typeof 'mais um teste');
console.log(typeof '13');

//5 símbolos especiais para string
console.log("testando a\nquebra de linha");
console.log("espaçamento de\t tab");

//6 concatenação
console.log("oi," + " tudo" + " bem?");
console.log(`oi,' + ' tudo' + ' bem?`);

// 7 template strings
console.log(`A soma de 2 + 2 é:  ${2+2}`);
console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 booleanos
console.log(true);

console.log(5>20);

console.log(30>20);

console.log(typeof false);

// 9 comparações
console.log(5<=5);

console.log(5<5);

console.log(10==10);

console.log(10!=5);

//10 idêntico
console.log(9 == "9");

console.log(9==="9");

console.log(9!=="9");

// 11 operadores lógicos
console.log(true && true);

console.log(true && false);

console.log(5>2 && 2<10);

console.log(5<2 && 2<10);

console.log(5<2 || 2<10);

console.log(!true);

//12 empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

// 13 mudanças de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10"+ 1);

console.log("10" - 1);
