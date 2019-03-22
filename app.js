var x;
x = 5;
//there is a difference between not define and undefined!
//without first declaring x, the below wouldn't run at all
//once x is declared, !x is true (not defined)

if(y = 10) {
    console.log(`y = 10`);
}
//true, so console log will run and print the value
if (z = 0) {
    console.log(`z = 10`);
}
//zero, undefined, NaN(not a number), null, and and empty string
//are always false, all other values are truthy
//thus, if (z = 0 will not run)

if (!x){
    x = 10;
}

console.log(`The value of x is ${x}`);

x = 10;
y = 'a';
z = x * y;

if (!z) {
    console.log(`z = NaN`);
}
//NaN is false rendering this true
//the whole point is that boolean values are used in controlling structures

var name;

if(!(name = "")) {
    console.log("name is an empty string");
}
//name is empty string, which is fase. putting a ! in front make it true
//BUT you have to enclose the name="" expression in parentheses to separate it 
//from the evaluate operator or it'l throw an error
//anything else in the string will make it true, as it won't be empty

var array = [];

if(array) {
    console.log('empty arrays are true');
}

var obj1 = {};

if(obj1) {
console.log('empty objects are true');
}
//empty arrays and objects are true.

var n1 = 0.1;
var n2 = 0.2;

if(n1 + n2 === 0.3) {
    console.log('true');
}

console.log(0.3 - Number.EPSILON * 10);
console.log(0.3 + Number.EPSILON * 10);

if(n1 + n2 >= (0.3 - Number.EPSILON * 10) && (0.3 - Number.EPSILON * 10)) {
    console.log('true');
}

var infinite = 10 / 0;

console.log(infinite);

var maxInt = Number.MAX_SAFE_INTEGER;

console.log(maxInt);

maxInt++;

console.log(maxInt);

for(var i = 0; i < 100; i++) {
    maxInt++;
    console.log(maxInt);
}
//the classic for loop, an expressionthat will repeat as longas the conditon
//is true - the condition is the only part that is mandatory argument

var i = 0;

while(i<100) {
    maxInt++;
    console.log(maxInt);
    i++;
}
//same as above
console.log(Number.MAX_VALUE);

var y = 1;
for (;true;) {
    console.log(y);
    y++;
    if(y == 10) break;
}
//dont get too hung up on the structure of the for loop, the important part is the condition

var a, b;

a = 10;

b = a++;

//what is value of a?
console.log(`${a}>${b}`);
//notice that a is now 11, once the next expression is invoked.
//beware precedence!!!

a = 10;

b = ++a;

console.log(`${a}==${b}`);

a = 10;

b = (++a + 1) + a--;

//what is value of a?
console.log(`${a}>${b}`);



