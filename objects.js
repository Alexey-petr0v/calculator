

Number.prototype.toFixed = function(x){ return Math.round(this * Math.pow(10, x)) / Math.pow(10, x);}

class ClickListener {
    constructor(calculator) {
        this.calculator = calculator;
    }
    // result (=)
    addResultListener(id) {
        document.getElementById(id).addEventListener("click", this.calculator.calculate, false);
    }
    // clear_all [С]
    addClearAllListener(id) {
        document.getElementById(id).addEventListener("click", this.calculator.clearAllObj, false);
    }
    // clear [←]
    addClearListener(id) {
        document.getElementById(id).addEventListener("click", this.calculator.clearObj, false);
    }
    // add [numbers, +, -, /, *, ., ), (]
    addOtherSymbolsListener(symbolClass) {
        var numbers = document.querySelectorAll(symbolClass);
        for (var i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener("click", this.calculator.addOtherSymbol, false);
        }
    }
    addListenes() {
        this.addResultListener("button_obj");
        this.addClearAllListener("clear_all_obj");
        this.addClearListener("clear_obj");
        this.addOtherSymbolsListener(".add_obj");
    }
}

class Calculator {
    constructor() {
        this.resultValue = "";
        this.inputValue = "";
    }
    // result (=)
    calculate() {
        this.viewer = new Viewer();
        this.resultValue = (eval(this.viewer.input.value)) ? (eval(this.viewer.input.value)).toFixed(10) : 0;
        this.viewer.viewResult(this.resultValue, null)
        this.viewer = null;
    }

    // clear_all [С]
    clearAllObj() {
        this.viewer = new Viewer();
        this.resultValue = '';
        this.inputValue = '';
        this.viewer.viewResult(this.resultValue, this.inputValue)
        this.viewer = null;
    }
    
    // clear [←]
    clearObj() {
        this.viewer = new Viewer();
        this.inputValue = this.viewer.input.value.slice(0, -1);
        this.viewer.viewResult(null, this.inputValue)
        this.viewer = null;
    }

    addOtherSymbol(event) {
        this.viewer = new Viewer();
        this.inputValue = this.viewer.input.value + event.target.innerHTML;
        this.viewer.viewResult(null, this.inputValue)
        this.viewer = null;
    }
}

class Viewer {
    constructor() {
        this.input = document.getElementById("input_obj");
        this.result = document.getElementById("result_obj");
    }
    viewResult(resultValue, inputValue) {
        this.input = document.getElementById("input_obj");
        this.result = document.getElementById("result_obj");
        this.result.value = resultValue ? resultValue : "";
        this.input.value = inputValue ? inputValue : "";
    }
}


if (document.getElementById("buttons_table_obj")){
    const calculator = new Calculator();
    const clickListener = new ClickListener(calculator);
    clickListener.addListenes();
}
 