//if else condition
var time = prompt("Hey Whats the time: ");
if(time>5 && time<17){
alert("Good Morning");

}else{
    alert("Good Evening");
}


//else if condition
var time = prompt("Hey Whats the time: ");
if (time > 5 && time < 12) {
alert("Good Morning");
}
else if (time >12 && time < 17) {
alert("Good Afternoon")
}
else if (time>17 && time <21) {
alert("Good Evening");
}
else {
}
alert("Good Night");

// continue condition
for(let i=0; i<5; i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

//switch condition
var fruitype = prompt("Konsa fal chaiye?");
switch (fruittype) {
case 'Narangi':
console.log('Narangi hai 60rs Kilo.');
break;
case 'Sabe':
console.log('Sabe hai 180rs Kilo');
break;
case 'Kele':
console.log('Kele are 35rs Kilo.');
break;
case 'Amrudh':
console.log('Amrudh hai 80rs Kilo.');
break;
case 'Aam':
console.log('Aam diya 300rs Dozen. ');
break;
case 'Papita':
console.log('Aam ne Papita dono 300rs Dozen. ');
break;
default:
console.log(`${fruittype} aaj khatam hogya kal ayega.`);
}
console.log("Orr Kuch chaiye hukum?");

//for loop
 for (let i = 0; i <10; i++) { console.log("Namaste World") }

 //while lo
 let i = 10;
 while(i>=0) {
    console.log("Namaste World")
    i--
 }

// do while
let j = 10;
do{
console.log("Namaste World")
j++}
while(j<10)

// For... In
let animal = {
    name: "Zebra",
leg: 4
};

for(let key in animal){
console.log(key, animal[key]);}


//for of
names=["jenish","sujal", "sajj", "aej"];
for(let name of names) {
console.log(name)}