{//ECMAScript
let nombre='franco';

};


var ecmascript=[
    '<h1> ECMAscript sin taxis </h1>',
    'ofrece variables let ej: let nombre;',
    '<h3>Concatenar</h3>',
    'para reemplazar (nombre+apellido) podemos usar',
    '`nombre ${apellido}`  era más fácil poner el + ,pero bueno.',
    '<h3>ofrece el (for of)</h3>',
    'for (let i of list){',
    'console.log(i);',
    '}',
    'tambien se puede iterar con strings:',
    'for(let ch of "hello"){',
    '    document.write("-");',
    '    document.write(ch);',
    '  }',
    'salida: h-e-l-l-o',
    '<h3>Funciones</h3>',
    'const add=(x,y) =>{ código }',
    'sirve para cuando se necesita algo simple:',
    'const nom= x => "hola"+ x;',
    'si no hay parametros se dejan los parentesis vacíos',
    'const x = () => alert("hi");',
    '<h4> una función para cada elemento del array con la sintaxis</h4>',
    'const arr=[2,3,4,5];',
    'arr.forEach(v => {',
        ' console.log(v*2);',
    '});',
    '<h3>Objetos personalizados</h3>',
    'var i=0;',
    'var a={',
    '["foo"+ ++i]: i,',
    '["foo"+ ++i]: i,',
    '["foo"+ ++i]: i,',
    '};',
    'cambia el nombre de la variable',
    '<h3>destructuración</h3>',
    'let arr=[1,2,3];',
    'let[one,two,three];',
    'salida: one=1 y así...',
    '<h3>Spread</h3>',
    'var fecha=["h","o","l","a"]',
    'var date=new Date(...fecha);',
    'console.log(date);',
    'CLASES',
    'var Square=class{',
    'constructor(height,width){',
    'this.height=height;',
    'this.width=width;',
    ' }',
    '};',
    '<h3>HERENCIA</h3>',
    'class Dog extends animal{ codigo, se usa "super"',
    'para referirse a variables del padre }',
    '<h1>variables  map </h1>',
    'let map= new Map(["k1","v1"],["k2","v2"]);',
    'console.log(map.size); // 2',
    '----',
    'para modificar: map.set(key,value);',
    'para obtener:   map.get(key);',
    'borrar   :      map.delete(key);',
    '<h1>Promises</h1>',
    'new Promise(function(resolve,',
    'reject){',
    '  if(success)',
    '     resolve(result);',
    '  else',
    '     reject(Error("failure));',
    '});',
    '<h2>generador</h2>',
    'function* idMaker(){',
    'let index=0;',
    ' while(index<5)',
        'yield index++;',
    'var gen= idMaker();',
    'conspñe.log(gen.next().value)',
    '<h1>MODULOS</h1>',
    '//archivo:  lib/math.js',
    'export let sum=(x,y)=>{return x+y;}',
    'export let pi=3.14;',
    '//archivo: app.js',
    'import * as math from "lib/math"',
    'console.log(`2p=+${math.sum(math.pi,math.pi)}`)',
    '<h1>metodos integrados</h1>',
    'encontrar indice:',
    'array.findIndex(x => x>3);',
    'repetir strings:',
    'console.log("foo".repeat(3));',
    '<h1>Busqueda en Strings</h1>',
    '"soloLearn".startsWith("solo",0);//true' ,
    '"soloLearn".endsWith("solo",4);//true' ,
    '"soloLearn".includes("loLe");//true' ,
    '"soloLearn".includes("olo",1);//true' ,
    '"soloLearn".includes("olo",2);//true' ,





];