var ansi = require('ansi');
var cursor = ansi(process.stdout);
cursor.beep();

var greeting = 'hello';
greeting += ' world!';
console.log(greeting);

var a = [1, 2, 3].reduce(function(sum, item){return sum + item}, 0);
console.log(a);

var colors = require('colors');
 
console.log('hello'.green); // outputs green text 
console.log('i like cake and pies'.underline.red) // outputs red underlined text 
console.log('inverse the color'.inverse); // inverses the color 
console.log('OMG Rainbows!'.rainbow); // rainbow 
console.log('Run the trap'.trap); // Drops the bass 