let inputdata = "";

function display(num) {
    inputdata += num;
    document.getElementById('finalResult').value = inputdata;
}

function clr() {
    inputdata = "";
    // document.getElementById('userInput1').value = " ";
    document.getElementById('finalResult').value = " ";
}

var result = 0;
function performOperation() {
    let operators = ["+", "-", "/", "*", "%"];
    let inputvalue1 = '';
    let inputvalue2 = '';
    let splitoperator = '';
    operators.map(function (ele, index) {
        let splitvalue = inputdata.split(ele);
        if (splitvalue.length == 2) {
            splitoperator = operators[index];
            console.log(splitoperator);
            inputvalue1 = splitvalue[0];
            console.log(inputvalue1);
            inputvalue2 = splitvalue[1];
            console.log(inputvalue2);
        }
    })

    switch (splitoperator) {
        case "+":
            result = Number(inputvalue1) + Number(inputvalue2);
            break;
        case "-":
            result = Number(inputvalue1) - Number(inputvalue2);

            break;
        case "/":
            result = Number(inputvalue1) / Number(inputvalue2);
            break;
        case "%":
            result = Number(inputvalue1) % Number(inputvalue2);
            break;
        case "*":
            result = Number(inputvalue1) * Number(inputvalue2);
            break;

        default:
            console.log("Enter correct option", operation)
            break
    }
    document.getElementById("finalResult").value=result;
    // let resattr = document.getElementById("finalResult");
    // resattr.setAttribute('value', result);
    //inputdata=result;

}


