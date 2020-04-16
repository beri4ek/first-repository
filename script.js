'use strct';



var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

if (1) {
    console.log('right');
} else {
    console.log("don't right");
}

let num = 50;

if (num < 49) {
    console.log("don't right");
}else if (num > 100) {
    console.log('mnogo');
}else {
    console.log('right');
};

(num == 50) ? console.log('right') : console.log('not right');

switch(num) {
    case num < 49:
        console.log('not right');
        break;
    case num > 100: 
        console.log('mnogo');
        break;
    case num > 80:
        console.log('vse ewe mnogo');
        break;
    case 50:
        console.log('right');
        break;
    default:
        console.log('4to to powlo ne tak');
        break;             
}


let num = 50;
// while(num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1;);
