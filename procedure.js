

if (document.getElementById("buttons_table")) {
    Number.prototype.toFixed = function(x){ return Math.round(this * Math.pow(10, x)) / Math.pow(10, x);}
    let input = document.getElementById("input");
    let result = document.getElementById("result");

    // result (=)
    document.getElementById("button").addEventListener("click", calculate, false);
    function calculate() {
        result.value = (eval(input.value)).toFixed(10)
    }

    // clear_all [С]
    document.getElementById("clear_all").addEventListener("click", clear_all, false);
    function clear_all() {
        result.value = '';
        input.value = '';
    }
    
    // clear [←]
    document.getElementById("clear").addEventListener("click", clear, false);
    function clear() {
        input.value = input.value.slice(0, -1);
    }

    // add [numbers, +, -, /, *, ., ), (]
    var numbers = document.querySelectorAll(".add");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            input.value = input.value + this.innerHTML;
        }, false);
    }
}
 