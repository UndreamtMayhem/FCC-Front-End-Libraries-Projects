// do more complex operations and validate
// need equals button
// operation check doesnt need to update entry box

//entry box is the problem.

//var finalResult = 0.0
var currentResult = 0.0;
var entryBox = '';
var entryValue = '';
var isAddition = false;
var isSubtract = false;
var isDivide = false;
var isMutliply = false;
var isEqual = false;

// connect to operator buttons
function operationClicked(value) {
    //Where we display the result
    var entryBoxx = document.getElementById('entry-box');
    if (value === '+') {
        if (isAddition === true) {
            //get the current value from the box add to the result 
            var sum = result + parseFloat(entryBoxx.textContent);
            console.log("entryBox: " + entryBox);
            //var sum = result + parseFloat(entryBox);

            console.log("sum: " + sum);

            // swap the result of sum into result
            result = sum;
            entryBoxx.textContent = result;
            console.log("result end: " + sum);
            //clear entry box 
            entryBoxx.textContent = '';
        }
        else {
            //result = parseFloat(entryBoxx.textContent);
            result = parseFloat(entryBox);
            
            //finalResult += result;
            
            //console.log("Final Result : " + finalResult);
            entryBoxx.textContent = '';
           // console.log(entryBoxx.textContent);
            //console.log(result + " result from adding");
            isAddition = true;
            isSubtract = false;
            isDivide = false;
            isMutliply = false;
            isEqual = false;
            return ' + ';

        }

    }
    /// dont worry about other operations for now
    if (value === '-') {
        result = parseFloat(entryBox);
        //console.log(result + " result from subtract");
        isSubtract = true;
        return ' - ';
    }
    if (value === '/') {
        result = parseFloat(entryBox);
        // console.log(result + " result from divide");
        isDivide = true;
        return ' / ';
    }
    if (value === '*') {
        result = parseFloat(entryBox);
        //console.log(result + " result from multiple");
        isMutliply = true;
        return ' * ';
    }
    if (value === '=') {
        console.log(entryBox + "display score to screen");
        //result = parseFloat(entryBox);
        //displasy result box
        //entryBox = result;
        result = 0.0;
        isEqual = true;
    }
    return;
}



// value of buttons
function numberClicked(value) {
    var entryBoxx = document.getElementById('entry-box');
    var output = parseFloat(value)

    //condense one line
    function operationCheck() {
        if (isAddition === true) {
            return true;
        }
        if (isSubtract === true) {
            return true;
        }
        if (isDivide === true) {
            return true;
        }
        if (isMutliply === true) {
            return true;
        }
        if (isEqual === true) {
            return true;
        }
        return false;
    }

    if (isNaN(output)) {
        return null;
    }
    if (operationCheck()) {
        // what operation to perform
        if (isEqual) {
            console.log("in is equal");
            isEqual = false;
            entryBox = '';
            //entryBoxx.textContent = '0';
            entryBox = value;
        }
        if (isAddition) {
            //need to stack numbers
            //console.log("result: " + result);
            entryBoxx.textContent += value;
            entryBox += value;
            //console.log("result: " + result);
            //console.log(entryBoxx.textContent);


            ////////////// here

            //entryBox = result + output;
            //result += output;
            //entryBoxx.textContent = entryBox;
            //console.log(entryBoxx.textContent);
            //isAddition = false;
        }
        if (isSubtract) {
            entryBox = result -= output;
            //result -= output;
            isSubtract = false;
        }
        if (isMutliply) {
            entryBox = result * output;
            console.log(result);
            isMutliply = false;
        }
        if (isDivide) {
            entryBox = result / output;
            console.log(result);
            isDivide = false;
        }

    }
    else {
        //OKAY
        entryBox += value;
        entryBoxx.textContent  += value;

    }
}

// Test case

function complexOperation() {
    // 33 + 2 + 1 + 1 = 7
    numberClicked('33');
    operationClicked('+');
    numberClicked('2');
    operationClicked('+');
    numberClicked('1');
    operationClicked('+');
    numberClicked('1');
    document.write(" 33 + 2 + 1 + 1 =  7 ");
    document.write(entryBox);
}
//complexOperation();


//operations back to back doesnt work
function multipleOperations() {
    numberClicked('2');
    operationClicked('+');
    numberClicked('2');
    operationClicked('=');
    document.write("<br> " + entryBox);
    console.log(entryBox);
    numberClicked('2');
    operationClicked('+');
    numberClicked('2');
    operationClicked('=');
    document.write("<br> " + entryBox);
    numberClicked('2');
    operationClicked('*');
    numberClicked('2');
    operationClicked('=');
    document.write("<br> " + entryBox);
    numberClicked('2');
    operationClicked('-');
    numberClicked('2');
    operationClicked('=');
    document.write("<br> " + entryBox);
    numberClicked('2');
    operationClicked('/');
    numberClicked('2');
    operationClicked('=');
    document.write("<br> " + entryBox);



}




// operation check
/*
document.write(operationClicked('+'));
document.write(isAddition);
document.write(operationClicked('-'));
document.write(isSubtract);
document.write(operationClicked('/'));
document.write(isDivide);
document.write(operationClicked('*'));
document.write(isMultiply);
*/


function intCheck() {
    // 1 + 1 = 2
    function test1() {

        numberClicked('1');
        operationClicked('+');
        numberClicked('1');
        document.write("1 + 1 = ");
        document.write(entryBox);

    }

    test1();
    document.write('<br/>' + entryBox);
    // 10 + 1 = 12
    function test2() {
        numberClicked('10');
        operationClicked('+');
        numberClicked('1');
        document.write("\n 10 + 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = 0;
    }
    test2();


    // 99 + 1 = 100
    function test3() {
        numberClicked('99');
        operationClicked('+');
        numberClicked('1');
        document.write("<br/> 99 + 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = 0;
    }
    test3();
}

function intCheckSub() {
    // 1 + 1 = 2

    function test1Sub() {
        numberClicked('1');
        operationClicked('-');
        numberClicked('1');
        document.write("1 - 1 = ");
        document.write(entryBox);
        result = 0;
        entryBox = 0;
        //  isSubtract = false;
    }
    test1Sub();

    //document.write('<br/>' + entryBox);
    // 10 - 1 = 9
    function test2Sub() {
        numberClicked('10');
        operationClicked('-');
        numberClicked('1');
        document.write("<br> 10 - 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test2Sub();

    // 99 + 1 = 98
    function test3Sub() {
        // problem is here 
        numberClicked('99');
        operationClicked('-');
        numberClicked('1');
        document.write("<br/> 99 - 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test3Sub();
}
//intCheckSub();

function intCheckMul() {
    // 1 + 1 = 2

    function test1Mul() {
        numberClicked('1');
        operationClicked('*');
        numberClicked('2');
        document.write("1 * 2 = ");
        document.write(entryBox);
        result = 0;
        entryBox = 0;
        //  isSubtract = false;
    }
    test1Mul();

    //document.write('<br/>' + entryBox);
    // 10 - 1 = 9
    function test2Mul() {
        numberClicked('10');
        operationClicked('*');
        numberClicked('1');
        document.write("<br> 10 * 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test2Mul();

    // 99 + 1 = 98
    function test3Mul() {
        // problem is here 
        numberClicked('99');
        operationClicked('*');
        numberClicked('1');
        document.write("<br/> 99 * 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test3Mul();
}
//intCheckMul();

function intCheckDiv() {
    // 1 + 1 = 2

    function test1Div() {
        numberClicked('2');
        operationClicked('/');
        numberClicked('1');
        document.write("2 / 1 = ");
        document.write(entryBox);
        result = 0;
        entryBox = 0;
        //  isSubtract = false;
    }
    test1Div();

    //document.write('<br/>' + entryBox);
    // 10 - 1 = 9
    function test2Div() {
        numberClicked('10');
        operationClicked('/');
        numberClicked('1');
        document.write("<br> 10 / 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test2Div();

    // 99 + 1 = 98
    function test3Div() {
        // problem is here 
        numberClicked('99');
        operationClicked('/');
        numberClicked('1');
        document.write("<br/> 99 / 1 = ")
        document.write(entryBox);
        result = 0;
        entryBox = '';
        //isSubtract = false;
    }
    test3Div();
}
//intCheckDiv();