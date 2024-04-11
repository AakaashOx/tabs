
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
    const patterns = [
        { pattern: /%c/g, buttonText: "%c", description: "%c is used to print a character." },
        { pattern: /%lf/g, buttonText: "%lf", description: "%lf is the format string for a double." },
        { pattern: /%d/g, buttonText: "%d", description: "%d is used to print an integer." },
        { pattern: /%s/g, buttonText: "%s", description: "%s is used to print a string." },
        { pattern: /%f/g, buttonText: "%f", description: "%f is the format string for a float." },
        { pattern: /break/g, buttonText: "break", description: "Break - The break is a keyword in C which is used to bring the program control out of the loop. The break statement breaks the loop one by one." },
        { pattern: /char/g, buttonText: "char", description: "char - char type to store characters and letters. The char type is integer type because underneath C stores integer numbers instead of characters. In C, char values are stored in 1 byte in memory,and value range from -128 to 127 or 0 to 255." },
        { pattern: /continue/g, buttonText: "continue", description: "Continue The continue statement in C programming works somewhat like the break statement. Instead of forcing termination, it forces the next iteration of the loop to take place, skipping any code in between. continue statement causes the conditional test and increment portions of the loop to execute. For the while and do...while loops, continue statement causes the program control to pass to the conditional tests." },
        { pattern: /do/g, buttonText: "do", description: "Do…while The do while loop is a post tested loop. Using the do-while loop, we can repeat the execution of several parts of the statements. The do-while loop is mainly used in the case where we need to execute the loop at least once." },
        { pattern: /default/g, buttonText: "default", description: "Default The default statement is executed if no case constant-expression value is equal to the value of expression . If there's no default statement, and no case match is found, none of the statements in the switch body get executed. There can be at most one default statement." },
        { pattern: /const/g, buttonText: "const", description: "Constant Constant is a value that cannot be changed during program execution; it is fixed. In C language, a number or character or string of characters is called a constant. And it can be any data type. Constants are also called as literals." },
        { pattern: /double/g, buttonText: "double", description: "Double A double is a data type in C language that stores high-precision floating-point data or numbers in computer memory. It is called double data type because it can hold the double size of data compared to the float data type." },
        { pattern: /else/g, buttonText: "else", description: "Else the else directive provides an alternate action when used with the if, #ifdef, or #ifndef directives. The preprocessor will include the C source code that follows the #else statement when the condition for the #if, #ifdef, or #ifndef directive evaluates to false." },
        { pattern: /for/g, buttonText: "for", description: "For The for loop in C language is used to iterate the statements or a part of the program several times. It is frequently used to traverse the data structures like the array and linked list." },
        { pattern: /if/g, buttonText: "if", description: "If statement The if statement allows you to control if a program enters a section of code or not based on whether a given condition is true or false. The statements inside the body of 'if' only execute if the given condition returns true. If the condition returns false then the statements inside 'if' are skipped." },
        { pattern: /float/g, buttonText: "float", description: "float Float is a shortened term for floating point. it's a fundamental data type built into the compiler that's used to define numeric values with floating decimal points." },
        { pattern: /int/g, buttonText: "int", description: "Int An int variable contains only whole numbers. Int, short for integer. It is a fundamental variable type built into the compiler and used to define numeric variables holding whole numbers." },
        { pattern: /long/g, buttonText: "long", description: "Long Long is a data type. A constant or variable defined as long can store a single 64-bit signed integer." },
        { pattern: /return/g, buttonText: "return", description: "Return The return statement returns the flow of the execution to the function from where it is called. This statement does not mandatorily need any conditional statements. The flow of the program stops immediately and returns the control from where it was called. The return statement may or may not return anything for a void function, but for a non-void function, a return value must be returned." },
        { pattern: /sizeof/g, buttonText: "sizeof", description: "Size of Sizeof is an operator. It is a compile-time unary operator and used to compute the size of its operand. It returns the size of a variable. It can be applied to any data type, float type, pointer type variables." },
        { pattern: /short/g, buttonText: "short", description: "Short Short is an datatype. Short occupies 2 bytes in the memory. It value range is -32,768 to 32,767." },
        { pattern: /switch/g, buttonText: "switch", description: "Switch A switch statement allows a variable to be tested for equality against a list of values. Each value is called a case, and the variable being switched on is checked for each switch case." },
        { pattern: /while/g, buttonText: "while", description: "While A while loop in C programming repeatedly executes a target statement as long as a given condition is true." },
        { pattern: /signed/g, buttonText: "signed", description: "Signed is also one of the datatype in which is a variable can hold negative and positive values. The property can be applied to most of the numeric data types including int, char, short and long." },
        { pattern: /unsigned/g, buttonText: "unsigned", description: "Unsigned is also one of the datastype in which is a variable type of int this data type can hold zero and positive numbers. This unsigned int is data type cannot represent a negative number." },
        { pattern: /printf/g, buttonText: "printf", description: "The printf() is a library function to send formatted output to the screen. The function prints the string inside quotations." },
        { pattern: /scanf/g, buttonText: "scanf", description: "scanf() is one of the commonly used function to take input from the user. The scanf() function reads formatted input from the standard input such as keyboards." },
        { pattern: /\+/g, buttonText: "+", description: "Subtraction is a arithmetic operator. Subtracts second operand from the first." },
        { pattern: /\*/g, buttonText: "*", description: "Multiplication is a arithmetic operator. Multiplies both operands." },
        { pattern: /\//g, buttonText: "/", description: "Division is a arithmetic operator. Divides numerator by de-numerator." },
        { pattern: /\%/g, buttonText: "%", description: "Modulus is a arithmetic operator. Modulus Operator and remainder of after an integer division." },
        { pattern: /\+\+{1,1}/g, buttonText: "++", description: "Increment is a arithmetic operator. Increment operator increases the integer value by one." },
        { pattern: /\-\-{1,1}/g, buttonText: "--", description: "Decrement is a arithmetic operator. Decrement operator decreases the integer value by one." },
        { pattern: /\=/g, buttonText: "=", description: "Simple assignment operator. Assigns values from right side operands to left side operand." },
        { pattern: /\+\={1,1}/g, buttonText: "+=", description: "+= Add AND assignment operator. It adds the right operand to the left operand and assign the result to the left operand." },
        { pattern: /\-\={1,1}/g, buttonText: "-=", description: "-= Subtract AND assignment operator. It subtracts the right operand from the left operand and assigns the result to the left operand." },
        { pattern: /\*\={1,1}/g, buttonText: "*=", description: "*= Multiply AND assignment operator. It multiplies the right operand with the left operand and assigns the result to the left operand." },
        { pattern: /\/\={1,1}/g, buttonText: "/=", description: "/= Divide AND assignment operator. It divides the left operand with the right operand and assigns the result to the left operand." },
        { pattern: /\%\={1,1}/g, buttonText: "%=", description: "%= Modulus AND assignment operator. It takes modulus using two operands and assigns the result to the left operand." },
        { pattern: /\=\={1,1}/g, buttonText: "==", description: "== Double equal to is a relational operator. Checks if the values of two operands are equal or not. If yes, then the condition becomes true." },
        { pattern: /\>/g, buttonText: ">", description: "> Greater than is a relational operator. Checks if the value of left operand is greater than the value of right operand. If yes, then the condition becomes true." },
        { pattern: /\<(?!=)/g, buttonText: "<", description: "< Less than is a relational operator. Checks if the value of left operand is less than the value of right operand. If yes, then the condition becomes true." },
        { pattern: /\!\={1,1}/g, buttonText: "!=", description: "!= Not equal to is a relational operator. Checks if the values of two operands are equal or not. If the values are not equal, then the condition becomes true." },
        { pattern: /\>\={1,1}/g, buttonText: ">=", description: ">= Greater than or equal to is a relational operator. Checks if the value of left operand is greater than or equal to the value of right operand. If yes, then the condition becomes true." },
        { pattern: /\<\={1,1}/g, buttonText: "<=", description: "<= Less than or equal is a relational operator. Checks if the value of left operand is less than or equal to the value of right operand. If yes, then the condition becomes true." },
        { pattern: /\;/g, buttonText: ";", description: "; Semicolons are end statements in C. The semicolon tells that the current statement has been terminated and other statements following are new statements. Usage of semicolon in C will remove ambiguity and confusion while looking at the code. They are not used in between the control flow statements but are used in separating the conditions in looping." },
        { pattern: /(?<=int )(.*?)(?=;)/g, buttonText: "int", description: "integer variable" },
        { pattern: /(?<=float )(.*?)(?=;)/g, buttonText: "float", description: "float variable" },
        { pattern: /(?<=double )(.*?)(?=;)/g, buttonText: "double", description: "double variable" },
        { pattern: /(?<=char )(.*?)(?=;)/g, buttonText: "char", description: "character variable" },
        { pattern: /\{/g, buttonText: "{", description: "{ Open curly bracket is used to signify the start of a series of statements. Curly braces are used to group a set of statements. Often we use them along with loops and conditional statements in order to avoid confusion and to define a clear scope." },
        { pattern: /\}/g, buttonText: "}", description: "} Closed curly bracket is used to signify the end of a series of statements. Curly braces are used to group a set of statements. Often we use them along with loops and conditional statements in order to avoid confusion and to define a clear scope." },
        { pattern: /\(/g, buttonText: "(", description: "( Open round bracket is used to signify a start of group of functions, conditions, operation or operands. Round brackets is generally used with a function( User defined or library defined ) like main(), for(), strlen() etc. This parentheses helps us to pass values, initiate values, iterate values to the function’s body statements to manipulate it." },
        { pattern: /\)/g, buttonText: ")", description: ") Close round bracket is used to signify the end of group of functions, conditions, operation or operands. Round brackets is generally used with a function( User defined or library defined ) like main(), for(), strlen() etc. This parentheses helps us to pass values, initiate values, iterate values to the function’s body statements to manipulate it." },
        { pattern: /\,/g, buttonText: ",", description: "Comma acts as a separator when used with function calls and definitions, function like macros, variable declarations, enum declarations, and similar constructs. The comma operator is a binary operator that evaluates its first operand and discards the result, it then evaluates the second operand and returns this value (and type)." }

    ];

    patterns.forEach(({ pattern, buttonText, description }) => {
        const result = pattern.test(text);
        if (result) {
            const btn = document.createElement("button");
            btn.innerHTML = buttonText;
            document.getElementById("box-2").appendChild(btn).addEventListener("click", () => {
                document.getElementById("box-3").innerHTML = description;
            });
        }
    });
}

function resetbtn() {

    document.getElementById("entertext").value = "";
    document.getElementById("box-2").innerHTML="";
    document.getElementById("box-3").innerHTML="";

}