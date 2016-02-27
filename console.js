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
//-------------------------------------------------
//node console.js -a beep -b boop
var argv = process.argv.slice(2);
console.log(argv);

//node console.js -x 3 -y 4 -n5 -abc --beep=boop goo bar baz
var argv = require('minimist')(process.argv.slice(2));
console.dir(argv);

var argv = process.env;
console.log(argv);