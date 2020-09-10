

window.onload = function() {

    let input = document.getElementById("input");
    
    // result (=)
    document.getElementById("button").addEventListener("click", calculate, false);
    function calculate() {
        Number.prototype.toFixed = function(x){ return Math.round(this * Math.pow(10, x)) / Math.pow(10, x);}
        document.getElementById("result").value = (eval(input.value)).toFixed(20)
    }

    // clear_all [С]
    document.getElementById("clear_all").addEventListener("click", clear_all, false);
    function clear_all() {
        document.getElementById("result").value = '';
        input.value = '';
    }
    
    // clear [←]
    document.getElementById("clear").addEventListener("click", clear, false);
    function clear() {
        input.value = input.value.slice(0, -1);
    }
    
    // decimal [.]
    document.getElementById("decimal").addEventListener("click", decimal, false);
    function decimal() {
        input.value = input.value + document.getElementById("decimal").innerHTML;
    }
    
    // division [/]
    document.getElementById("division").addEventListener("click", division, false);
    function division() {
        input.value = input.value + document.getElementById("division").innerHTML;
    }
    
    // multiplication [*]
    document.getElementById("multiplication").addEventListener("click", multiplication, false);
    function multiplication() {
        input.value = input.value + document.getElementById("multiplication").innerHTML;
    }
    
    // addition [+]
    document.getElementById("addition").addEventListener("click", addition, false);
    function addition() {
        input.value = input.value + document.getElementById("addition").innerHTML;
    }
    
    // subtraction [-]
    document.getElementById("subtraction").addEventListener("click", subtraction, false);
    function subtraction() {
        input.value = input.value + document.getElementById("subtraction").innerHTML;
    }
    
    // left_parenthesis [(]
    document.getElementById("left_parenthesis").addEventListener("click", left_parenthesis, false);
    function left_parenthesis() {
        input.value = input.value + document.getElementById("left_parenthesis").innerHTML;
    }
    
    // right_parenthesis [)]
    document.getElementById("right_parenthesis").addEventListener("click", right_parenthesis, false);
    function right_parenthesis() {
        input.value = input.value + document.getElementById("right_parenthesis").innerHTML;
    }

    var numbers = document.querySelectorAll(".number");

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            input.value = input.value + this.innerHTML;
        }, false);
    }
 }