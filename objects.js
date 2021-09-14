

        Number.prototype.toFixed = function(x){ return Math.round(this * Math.pow(10, x)) / Math.pow(10, x);}
// result (=)
class Result {
    constructor() {
        this.input = document.getElementById("input_obj");
        this.result = document.getElementById("result_obj");
        
    }
    calculate_obj() {
        this.result.value = (eval(this.input.value)).toFixed(10)
    }
}





if (document.getElementById("buttons_table_obj")){

    // result (=)
    let result_obj = new Result();
    document.getElementById("button_obj").addEventListener("click", result_obj.calculate_obj(), false);


    // clear_all [С]
    document.getElementById("clear_all_obj").addEventListener("click", clear_all_obj, false);
    function clear_all_obj() {
        result.value = '';
        input.value = '';
    }
    
    // clear [←]
    document.getElementById("clear_obj").addEventListener("click", clear_obj, false);
    function clear_obj() {
        input.value = input.value.slice(0, -1);
    }

    // add [numbers, +, -, /, *, ., ), (]
    var numbers = document.querySelectorAll(".add_obj");
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", function () {
            input.value = input.value + this.innerHTML;
        }, false);
    }
}
 