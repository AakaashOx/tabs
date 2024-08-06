function myFunction() {
  var introbox = document.getElementById('introbox');
  var mainbox = document.getElementById('box-1');
  var entertext = document.getElementById('entertext');

  var btndesbox = document.getElementById('twoboxes');
  var box2 = document.getElementById('box-2');
  var box3 = document.getElementById('box-3');

  mainbox.style.width = '57%';
  mainbox.style.marginLeft = '4%';


  btndesbox.style.display = 'block';
  box2.style.display = 'block';
  box3.style.display = 'block';

  introbox.classList.add('active');
  mainbox.classList.add('active');
  entertext.classList.add('active');


  btndesbox.classList.add('active');
  box2.classList.add('active');
  box3.classList.add('active');

  setTimeout(() => {
      introbox.style.display = 'none';

  }, 500); // Set timeout to match the animation duration  

  const text = document.getElementById("entertext").value;
  
{  
  let pattern1 = /%c/g;
let result1 = pattern1.test(text)
if (result1 == true)
  {
const btn1 = document.createElement("button");
btn1.innerHTML = "%c";
btn1.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn1).addEventListener("click", myFunction1)
function myFunction1() {
  document.getElementById("box-2").innerHTML = "  %c  It is used to a print character. To print an individual character, use %c. This causes its matching argument to be output, unmodified, to the screen. It is mostly used in printf() and scanf() function.";
}
}
}

{
  let pattern2 = /%lf/g;
let result2 = pattern2.test(text);
if (result2 == true)
  {
  const btn2 = document.createElement("button");
btn2.innerHTML = "%lf"; 
btn2.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn2).addEventListener("click", myFunction2)
function myFunction2() {
  document.getElementById("box-2").innerHTML = "  %lf  %lf is the format string for a double, the double precision floating-point type. It is an long float or double and it pass upto 64 bit. It is mostly used in printf and scanf() function.";
}
}
}
{  
  let pattern3 = /%f/g;
let result3 = pattern3.test(text)
if (result3 == true)
  {
const btn3 = document.createElement("button");
btn3.innerHTML = "%f";
btn3.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn3).addEventListener("click", myFunction3)
function myFunction3() {
  document.getElementById("box-2").innerHTML = "  %f  %f is the format string for a float, the single precision floating-point type. It is a float and it pass upto 32 bit. It is mostly used in printf and scanf() function.";
}
}
}

{  
  let pattern4 = /%d/g;
let result4 = pattern4.test(text)
if (result4 == true)
  {
const btn4 = document.createElement("button");
btn4.innerHTML = "%d";
btn4.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn4).addEventListener("click", myFunction4)
function myFunction4() {
  document.getElementById("box-2").innerHTML = "  %d  It is used to a print integer decimal number. %d specifies the type of variable as decimal.It is mostly used in printf and scanf() function.";
}
}
}

{  
  let pattern5 = /break/g;
let result5 = pattern5.test(text)
if (result5 == true)
  {
const btn5 = document.createElement("button");
btn5.innerHTML = "break";
btn5.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn5).addEventListener("click", myFunction5)
function myFunction5() {
  document.getElementById("box-2").innerHTML = "  Break  The break is a keyword in C which is used to bring the program control out of the loop. The break statement breaks the loop one by one.";
}
}
}

{  
  let pattern6 = /char/g;
let result6 = pattern6.test(text)
if (result6 == true)
  {
const btn6 = document.createElement("button");
btn6.innerHTML = "char";
btn6.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn6).addEventListener("click", myFunction6)
function myFunction6() {
  document.getElementById("box-2").innerHTML = "  Char  char type to store characters and letters. The char type is integer type because underneath C stores integer numbers instead of characters. In C, char values are stored in 1 byte in memory,and value range from -128 to 127 or 0 to 255.";
}
}
}
{
  let pattern7 = /continue/g;
let result7 = pattern7.test(text);
if (result7 == true)
  {
  const btn7 = document.createElement("button");
btn7.innerHTML = "continue";
btn7.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn7).addEventListener("click", myFunction7)
function myFunction7() {
  document.getElementById("box-2").innerHTML = "  Continue  The continue statement in C programming works somewhat like the break statement. Instead of forcing termination, it forces the next iteration of the loop to take place, skipping any code in between.continue statement causes the conditional test and increment portions of the loop to execute. For the while and do...while loops, continue statement causes the program control to pass to the conditional tests.";
}
}
}

{  
  let pattern8 = /do/g;
let result8 = pattern8.test(text)
if (result8 == true)
  {
const btn8 = document.createElement("button");
btn8.innerHTML = "do";
btn8.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn8).addEventListener("click", myFunction8)
function myFunction8() {
  document.getElementById("box-2").innerHTML = "  Do…while  The do while loop is a post tested loop. Using the do-while loop, we can repeat the execution of several parts of the statements. The do-while loop is mainly used in the case where we need to execute the loop at least once.";
}
}
}

{  
  let pattern9 = /defualt/g;
let result9 = pattern9.test(text)
if (result9 == true)
  {
const btn9 = document.createElement("button");
btn9.innerHTML = "defualt";
btn9.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn9).addEventListener("click", myFunction9)
function myFunction9() {
  document.getElementById("box-2").innerHTML = "  Default  The default statement is executed if no case constant-expression value is equal to the value of expression . If there's no default statement, and no case match is found, none of the statements in the switch body get executed. There can be at most one default statement.";
}
}
}

{  
  let pattern10 = /const/g;
let result10 = pattern10.test(text)
if (result10 == true)
  {
const btn10 = document.createElement("button");
btn10.innerHTML = "const";
btn10.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn10).addEventListener("click", myFunction10)
function myFunction10() {
  document.getElementById("box-2").innerHTML = "  Constant  Constant is a value that cannot be changed during program execution; it is fixed. In C language, a number or character or string of characters is called a constant. And it can be any data type. Constants are also called as literals. ";
}
}
}

{  
  let pattern11 = /double/g;
let result11 = pattern11.test(text)
if (result11 == true)
  {
const btn11 = document.createElement("button");
btn11.innerHTML = "double";
btn11.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn11).addEventListener("click", myFunction11)
function myFunction11() {
  document.getElementById("box-2").innerHTML = "  Double  A double is a data type in C language that stores high-precision floating-point data or numbers in computer memory. It is called double data type because it can hold the double size of data compared to the float data type.";
}
}
}
{
  let pattern12 = /else/g;
let result12 = pattern12.test(text);
if (result12 == true)
  {
  const btn12 = document.createElement("button");
btn12.innerHTML = "else";
btn12.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn12).addEventListener("click", myFunction12)
function myFunction12() {
  document.getElementById("box-2").innerHTML = "Else the else directive provides an alternate action when used with the if, #ifdef, or #ifndef directives. The preprocessor will include the C source code that follows the #else statement when the condition for the #if, #ifdef, or #ifndef directive evaluates to false.";
}
}
}

{  
  let pattern13 = /for/g;
let result13 = pattern13.test(text)
if (result13 == true)
  {
const btn13 = document.createElement("button");
btn13.innerHTML = "for";
btn13.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn13).addEventListener("click", myFunction13)
function myFunction13() {
  document.getElementById("box-2").innerHTML = "For  The for loop in C language is used to iterate the statements or a part of the program several times. It is frequently used to traverse the data structures like the array and linked list.";
}
}
}

{  
  let pattern14 = /if/g;
let result14 = pattern14.test(text)
if (result14 == true)
  {
const btn14 = document.createElement("button");
btn14.innerHTML = "if";
btn14.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn14).addEventListener("click", myFunction14)
function myFunction14() {
  document.getElementById("box-2").innerHTML = "If statement  The if statement allows you to control if a program enters a section of code or not based on whether a given condition is true or false. The statements inside the body of “if” only execute if the given condition returns true. If the condition returns false then the statements inside “if” are skipped.";
}
}
}

{  
  let pattern15 = /float/g;
let result15 = pattern15.test(text)
if (result15 == true)
  {
const btn15 = document.createElement("button");
btn15.innerHTML = "float";
btn15.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn15).addEventListener("click", myFunction15)
function myFunction15() {
  document.getElementById("box-2").innerHTML = "float Float is a shortened term for floating point. it's a fundamental data type built into the compiler that's used to define numeric values with floating decimal points.";
}
}
}

{  
  let pattern16 = /int/g;
let result16 = pattern16.test(text)
if (result16 == true)
  {
const btn16 = document.createElement("button");
btn16.innerHTML = "int";
btn16.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn16).addEventListener("click", myFunction16)
function myFunction16() {
  document.getElementById("box-2").innerHTML = "Int An int variable contains only whole numbers.Int, short for integer. It is a fundamental variable type built into the compiler and used to define numeric variables holding whole numbers.";
}
}
}
{
  let pattern17 = /long/g;
let result17 = pattern17.test(text);
if (result17 == true)
  {
  const btn17 = document.createElement("button");
btn17.innerHTML = "long";
btn17.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn17).addEventListener("click", myFunction17)
function myFunction17() {
  document.getElementById("box-2").innerHTML = "Long  Long is a data type. A constant or variable defined as long can store a single 64-bit signed integer.";
}
}
}

{  
  let pattern18 = /return/g;
let result18 = pattern18.test(text)
if (result18 == true)
  {
const btn18 = document.createElement("button");
btn18.innerHTML = "return";
btn18.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn18).addEventListener("click", myFunction18)
function myFunction18() {
  document.getElementById("box-2").innerHTML = "  Return  The return statement returns the flow of the execution to the function from where it is called. This statement does not mandatorily need any conditional statements. The flow of the program stops immediately and returns the control from where it was called. The return statement may or may not return anything for a void function, but for a non-void function, a return value must be returned.";
}
}
}

{  
  let pattern19 = /sizeof/g;
let result19 = pattern19.test(text)
if (result19 == true)
  {
const btn19 = document.createElement("button");
btn19.innerHTML = "sizeof";
btn19.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn19).addEventListener("click", myFunction19)
function myFunction19() {
  document.getElementById("box-2").innerHTML = "  Size of  Sizeof is an operator. It is a compile-time unary operator and used to compute the size of its operand. It returns the size of a variable. It can be applied to any data type, float type, pointer type variables.";
}
}
}

{  
  let pattern20 = /short/g;
let result20 = pattern20.test(text)
if (result20 == true)
  {
const btn20 = document.createElement("button");
btn20.innerHTML = "short";
btn20.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn20).addEventListener("click", myFunction20)
function myFunction20() {
  document.getElementById("box-2").innerHTML = "  Short  Short is an datatype. Short occupies 2 bytes in the memory. It value range is -32,768 to 32,767.";
}
}
}

{  
  let pattern21 = /switch/g;
let result21 = pattern21.test(text)
if (result21 == true)
  {
const btn21 = document.createElement("button");
btn21.innerHTML = "switch";
btn21.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn21).addEventListener("click", myFunction21)
function myFunction21() {
  document.getElementById("box-2").innerHTML = "  Switch  A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each switch case.";
}
}
}
{
  let pattern22 = /while/g;
let result22 = pattern22.test(text);
if (result22 == true)
  {
  const btn22 = document.createElement("button");
btn22.innerHTML = "while";
btn22.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn22).addEventListener("click", myFunction22)
function myFunction22() {
  document.getElementById("box-2").innerHTML = "  While  A while loop in C programming repeatedly executes a target statement as long as a given condition is true. The loop iterates while the condition is true. When the condition becomes false, the program control passes to the line immediately following the loop.";
}
}
}

{  
  let pattern23 = /signed/g;
let result23 = pattern23.test(text)
if (result23 == true)
  {
const btn23 = document.createElement("button");
btn23.innerHTML = "signed";
btn23.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn23).addEventListener("click", myFunction23)
function myFunction23() {
  document.getElementById("box-2").innerHTML = "  Signed  Signed is also one of the datatype in which is a variable can hold negative and positive values. The property can be applied to most of the numeric data types including int, char, short and long.";
}
}
}

{  
  let pattern24 = /unsigned/g;
let result24 = pattern24.test(text)
if (result24 == true)
  {
const btn24 = document.createElement("button");
btn24.innerHTML = "unsigned";
btn24.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn24).addEventListener("click", myFunction24)
function myFunction24() {
  document.getElementById("box-2").innerHTML = "  Unsigned  unsigned is also one of the datastype in which is a variable type of int this data type can hold zero and positive numbers. This unsigned int is data type cannot represent a negative number.";
}
}
}

{  
  let pattern25 = /printf/g;
let result25 = pattern25.test(text)
if (result25 == true)
  {
const btn25 = document.createElement("button");
btn25.innerHTML = "printf";
btn25.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn25).addEventListener("click", myFunction25)
function myFunction25() {
  document.getElementById("box-2").innerHTML = "  Print f  The printf() is a library function to send formatted output to the screen. The function prints the string inside quotations.";
}
}
}

{  
  let pattern26 = /scanf/g;
let result26 = pattern26.test(text)
if (result26 == true)
  {
const btn26 = document.createElement("button");
btn26.innerHTML = "scanf";
btn26.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn26).addEventListener("click", myFunction26)
function myFunction26() {
  document.getElementById("box-2").innerHTML = "  Scan f  scanf() is one of the commonly used function to take input from the user. The scanf() function reads formatted input from the standard input such as keyboards.";
}
}
}
{
  let pattern27 = /\+/g;
let result27 = pattern27.test(text);
if (result27 == true)
  {
  const btn27 = document.createElement("button");
btn27.innerHTML = "+";
btn27.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn27).addEventListener("click", myFunction27)
function myFunction27() {
  document.getElementById("box-2").innerHTML = "  +  addition is a arithmetic operator. Adds two operands.";
}
}
}

{  
  let pattern28 = /\-/g;
let result28 = pattern28.test(text)
if (result28 == true)
  {
const btn28 = document.createElement("button");
btn28.innerHTML = "-";
btn28.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn28).addEventListener("click", myFunction28)
function myFunction28() {
  document.getElementById("box-2").innerHTML = "  -  Subtraction is a arithmetic operator. Subtracts second operand from the first.";
}
}
}

{  
  let pattern29 = /\*/g;
let result29 = pattern29.test(text)
if (result29 == true)
  {
const btn29 = document.createElement("button");
btn29.innerHTML = "*";
btn29.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn29).addEventListener("click", myFunction29)
function myFunction29() {
  document.getElementById("box-2").innerHTML = "  *  Multiplication is a arithmetic operator. Multiplies both operands.";
}
}
}

{  
  let pattern30 = /\//g;
let result30 = pattern30.test(text)
if (result30 == true)
  {
const btn30 = document.createElement("button");
btn30.innerHTML = "/";
btn30.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn30).addEventListener("click", myFunction30)
function myFunction30() {
  document.getElementById("box-2").innerHTML = "  /  Division is a arithmetic operator. Divides numerator by de-numerator.";
}
}
}

{  
  let pattern31 = /\%/g;
let result31 = pattern31.test(text)
if (result31 == true)
  {
const btn31 = document.createElement("button");
btn31.innerHTML = "%";
btn31.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn31).addEventListener("click", myFunction31)
function myFunction31() {
  document.getElementById("box-2").innerHTML = "  %  Modulus is a arithmetic operator. Modulus Operator and remainder of after an integer division.";
}
}
}
{
  let pattern32 = /\+\+{1,1}/g;
let result32 = pattern32.test(text);
if (result32 == true)
  {
  const btn32 = document.createElement("button");
btn32.innerHTML = "++";
btn32.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn32).addEventListener("click", myFunction32)
function myFunction32() {
  document.getElementById("box-2").innerHTML = "  ++  Increment is a arithmetic operator. Increment operator increases the integer value by one.";
}
}
}

{  
  let pattern33 = /\-\-{1,1}/g;
let result33 = pattern33.test(text)
if (result33 == true)
  {
const btn33 = document.createElement("button");
btn33.innerHTML = "--";
btn33.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn33).addEventListener("click", myFunction33)
function myFunction33() {
  document.getElementById("box-2").innerHTML = "  --  Decrement is a arithmetic operator. Decrement operator decreases the integer value by one.";
}
}
}

{  
  let pattern34 = /\=/g;
let result34 = pattern34.test(text)
if (result34 == true)
  {
const btn34 = document.createElement("button");
btn34.innerHTML = "=";
btn34.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn34).addEventListener("click", myFunction34)
function myFunction34() {
  document.getElementById("box-2").innerHTML = "  =  Simple assignment operator. Assigns values from right side operands to left side operand.";
}
}
}

{  
  let pattern35 = /\+\={1,1}/g;
let result35 = pattern35.test(text)
if (result35 == true)
  {
const btn35 = document.createElement("button");
btn35.innerHTML = "+=";
btn35.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn35).addEventListener("click", myFunction35)
function myFunction35() {
  document.getElementById("box-2").innerHTML = "  +=  Add AND assignment operator. It adds the right operand to the left operand and assign the result to the left operand.";
}
}
}

{  
  let pattern36 = /\-\={1,1}/g;
let result36 = pattern36.test(text)
if (result36 == true)
  {
const btn36 = document.createElement("button");
btn36.innerHTML = "-=";
btn36.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn36).addEventListener("click", myFunction36)
function myFunction36() {
  document.getElementById("box-2").innerHTML = "  -=  Subtract AND assignment operator. It subtracts the right operand from the left operand and assigns the result to the left operand.";
}
}
}
{
  let pattern37 = /\*\={1,1}/g;
let result37 = pattern37.test(text);
if (result37 == true)
  {
  const btn37 = document.createElement("button");
btn37.innerHTML = "*=";
btn37.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn37).addEventListener("click", myFunction37)
function myFunction37() {
  document.getElementById("box-2").innerHTML = "  *=  Multiply AND assignment operator. It multiplies the right operand with the left operand and assigns the result to the left operand.";
}
}
}

{  
  let pattern38 = /\/\={1,1}/g;
let result38 = pattern38.test(text)
if (result38 == true)
  {
const btn38 = document.createElement("button");
btn38.innerHTML = "/=";
btn38.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn38).addEventListener("click", myFunction38)
function myFunction38() {
  document.getElementById("box-2").innerHTML = " /=  Divide AND assignment operator. It divides the left operand with the right operand and assigns the result to the left operand.";
}
}
}

{  
  let pattern39 = /\%\={1,1}/g;
let result39 = pattern39.test(text)
if (result39 == true)
  {
const btn39 = document.createElement("button");
btn39.innerHTML = "%=";
btn39.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn39).addEventListener("click", myFunction39)
function myFunction39() {
  document.getElementById("box-2").innerHTML = "  %=  Modulus AND assignment operator. It takes modulus using two operands and assigns the result to the left operand.";
}
}
}

{  
  let pattern40 = /\=\={1,1}/g;
let result40 = pattern40.test(text)
if (result40 == true)
  {
const btn40 = document.createElement("button");
btn40.innerHTML = "==";
btn40.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn40).addEventListener("click", myFunction40)
function myFunction40() {
  document.getElementById("box-2").innerHTML = "  ==  Double equal to is a relational operator. Checks if the values of two operands are equal or not. If yes, then the condition becomes true.";
}
}
}

{  
  let pattern41 = /\>/g;
let result41 = pattern41.test(text)
if (result41 == true)
  {
const btn41 = document.createElement("button");
btn41.innerHTML = ">";
btn41.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn41).addEventListener("click", myFunction41)
function myFunction41() {
  document.getElementById("box-2").innerHTML = "  >  Greater than is a relational operator. Checks if the value of left operand is greater than the value of right operand. If yes, then the condition becomes true.";
}
}
}
{
  let pattern42 = /\</g;
let result42 = pattern42.test(text);
if (result42 == true)
  {
  const btn42 = document.createElement("button");
btn42.innerHTML = "<";
btn42.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn42).addEventListener("click", myFunction42)
function myFunction42() {
  document.getElementById("box-2").innerHTML = "  <  Less than is a relational operator. Checks if the value of left operand is less than the value of right operand. If yes, then the condition becomes true.";
}
}
}

{  
  let pattern43 = /\!\={1,1}/g;
let result43 = pattern43.test(text)
if (result43 == true)
  {
const btn43 = document.createElement("button");
btn43.innerHTML = "!=";
btn43.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn43).addEventListener("click", myFunction43)
function myFunction43() {
  document.getElementById("box-2").innerHTML = "  !=  Not equal to is a relational operator. Checks if the values of two operands are equal or not. If the values are not equal, then the condition becomes true.";
}
}
}

{  
  let pattern44 = /\>\={1,1}/g;
let result44 = pattern44.test(text)
if (result44 == true)
  {
const btn44 = document.createElement("button");
btn44.innerHTML = ">=";
btn44.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn44).addEventListener("click", myFunction44)
function myFunction44() {
  document.getElementById("box-2").innerHTML = " >=  Greater than or equal to is a relational operator. Checks if the value of left operand is greater than or equal to the value of right operand. If yes, then the condition becomes true.";
}
}
}

{  
  let pattern45 = /\<\={1,1}/g;
let result45 = pattern45.test(text)
if (result45 == true)
  {
const btn45 = document.createElement("button");
btn45.innerHTML = "<=";
btn45.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn45).addEventListener("click", myFunction45)
function myFunction45() {
  document.getElementById("box-2").innerHTML = " <=  Less than or equal is a relational operator. Checks if the value of left operand is less than or equal to the value of right operand. If yes, then the condition becomes true.";
}
}
}

{  
  let pattern46 = /\;/g;
let result46 = pattern46.test(text)
if (result46 == true)
  {
const btn46 = document.createElement("button");
btn46.innerHTML = ";";
btn46.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn46).addEventListener("click", myFunction46)
function myFunction46() {
  document.getElementById("box-2").innerHTML = "  ;  Semicolons are end statements in C.The Semicolon tells that the current statement has been terminated and other statements following are new statements.Usage of Semicolon in C will remove ambiguity and confusion while looking at the code.They are not used in between the control flow statements but are used in separating the conditions in looping.";
}
}
}
{
  let pattern47 = /(?<=int )(.*?)(?=;)/g;
let result47 = text.match(pattern47);
if (result47 !=null)
  {
  const btn47 = document.createElement("button");
btn47.innerHTML = result47;
btn47.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn47).addEventListener("click", myFunction47)
function myFunction47() {
  document.getElementById("box-2").innerHTML = "integer variable";
}
}
}

{  
  let pattern48 = /(?<=float )(.*?)(?=;)/g;
let result48 = text.match(pattern48);
if (result48 !=null)
  {
const btn48 = document.createElement("button");
btn48.innerHTML = result48;
btn48.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn48).addEventListener("click", myFunction48)
function myFunction48() {
  document.getElementById("box-2").innerHTML = "float variable";
}
}
}

{  
  let pattern49 = /(?<=double )(.*?)(?=;)/g;
let result49 = text.match(pattern49);
if (result49 !=null)
  {
const btn49 = document.createElement("button");
btn49.innerHTML = result49;
btn49.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn49).addEventListener("click", myFunction49)
function myFunction49() {
  document.getElementById("box-2").innerHTML = "double variable";
}
}
}

{  
  let pattern50 = /(?<=char )(.*?)(?=;)/g;
let result50 = text.match(pattern50);
if (result50 !=null)
  {
const btn50 = document.createElement("button");
btn50.innerHTML = result50;
btn50.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn50).addEventListener("click", myFunction50)
function myFunction50() {
  document.getElementById("box-2").innerHTML = "character variable";
}
}
}

{  
  let pattern51 = /\{/g;
let result51 = pattern51.test(text)
if (result51 == true)
  {
const btn51 = document.createElement("button");
btn51.innerHTML = "{";
btn51.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn51).addEventListener("click", myFunction51)
function myFunction51() {
  document.getElementById("box-2").innerHTML = "  {  Open curly bracket is used to signify the start of a series of statements. Curly braces are used to group a set of statements. Often we use them along with loops and conditional statements in order to avoid confusion and to define a clear scope.";
}
}
}
{
  let pattern52 = /\}/g;
let result52 = pattern52.test(text);
if (result52 == true)
  {
  const btn52 = document.createElement("button");
btn52.innerHTML = "}";
btn52.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn52).addEventListener("click", myFunction52)
function myFunction52() {
  document.getElementById("box-2").innerHTML = "   }  Closed curly bracket is used to signify the end of a series of statements. Curly braces are used to group a set of statements. Often we use them along with loops and conditional statements in order to avoid confusion and to define a clear scope.";
}
}
}

{  
  let pattern53 = /\(/g;
let result53 = pattern53.test(text)
if (result53 == true)
  {
const btn53 = document.createElement("button");
btn53.innerHTML = "(";
btn53.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn53).addEventListener("click", myFunction53)
function myFunction53() {
  document.getElementById("box-2").innerHTML = "  Open round bracket is used to signify a  start of group of functions, conditions, operation or operands. Round brackets  is generally used with a function( User defined or library defined ) like main(), for(), strlen() etc. This parentheses helps us to pass values, initiate values, iterate values to the function’s body statements to manipulate it.";
}
}
}

{  
  let pattern54 = /\)/g;
let result54 = pattern54.test(text)
if (result54 == true)
  {
const btn54 = document.createElement("button");
btn54.innerHTML = ")";
btn54.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn54).addEventListener("click", myFunction54)
function myFunction54() {
  document.getElementById("box-2").innerHTML = " Close round bracket is used to signify the end of group of functions, conditions, operation or operands. Round brackets is generally used with a function( User defined or library defined ) like main(), for(), strlen() etc. This parentheses helps us to pass values, initiate values, iterate values to the function’s body statements to manipulate it.";
}
}
}

{  
  let pattern55 = /\,/g;
let result55 = pattern55.test(text)
if (result55 == true)
  {
const btn55 = document.createElement("button");
btn55.innerHTML = ",";
btn55.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn55).addEventListener("click", myFunction55)
function myFunction55() {
  document.getElementById("box-2").innerHTML = " Comma acts as a separator when used with function calls and definitions, function like macros, variable declarations, enum declarations, and similar constructs. The comma operator is a binary operator that evaluates its first operand and discards the result, it then evaluates the second operand and returns this value (and type).";
}
}
}

{  
  let pattern56 = /\/\/{1,1}/g;
let result56 = pattern56.test(text)
if (result56 == true)
  {
const btn56 = document.createElement("button");
btn56.innerHTML = "//";
btn56.classList.add("btn-style");
document.getElementById("box-3").appendChild(btn56).addEventListener("click", myFunction56)
function myFunction56() {
  document.getElementById("box-2").innerHTML = "Comment line. Displays description about the code.";
}
}
}



}

function resetbtn() {

  document.getElementById("entertext").value = "";
  document.getElementById("box-2").innerHTML="";
  document.getElementById("box-3").innerHTML="";

}