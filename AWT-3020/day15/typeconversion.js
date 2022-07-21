//type conversion
let x = 10
x = true
x = "new string"

//NUMBER -> STRING
var str = "JavaScript";
console.log(typeof str);
str = Number("Javascript");
console.log(typeof str);

//EXAMPLE
const valuel = '5';
const value2 = 9;
let sum = valuel + value2;
console.log(sum);


//implicit
true + false                 //1
12 / "6"                     //2
"number" + 15 + 3            //number153
15+ 3+ "number"              //18number
[1] > null                  //true
'true' == true              //false 


//explicit //string conversion
String(123)         //'123'
String(-12.3)       //'-12.3'
String(null)        //'null'
String (undefined)  //'undefined'
String(true)        //'true'
String(false)       //'false'



//boolean conversion
Boolean (1)          // false
Boolean (0)          // false
Boolean(-0)          // false
Boolean (NaN)          // false
Boolean (null)          // false
Boolean (undefined)     // false
Boolean (false)          // false


//number conversion
Number(null)            // 0
Number (undefined)      // NaN
Number(true)            // 1
Number(false)            // 0
Number(" 12 ")           // 12
Number("-12.34")         // -12.34
Number("\n")             // 0
Number(" 12s ")          // NaN
Number (123)            // 123
