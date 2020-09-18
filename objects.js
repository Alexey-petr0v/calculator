



// result (=)
class Result {
    constructor(doc) {
        Number.prototype.toFixed = function(x){ return Math.round(this * Math.pow(10, x)) / Math.pow(10, x);}
        this.input = doc.getElementById("input_obj");
        this.result = doc.getElementById("result_obj");
        this.button = doc.getElementById("button_obj");
        let that = this;
        this.button.addEventListener("click", function(){that.calculate_obj()}, false);
    }
    calculate_obj() {
        this.result.value = (eval(this.input.value)).toFixed(20)
    }
}

// clear_all [С]
class ClearAll {
    constructor(doc) {
        this.input = doc.getElementById("input_obj");
        this.result = doc.getElementById("result_obj");
        this.clear_all = doc.getElementById("clear_all_obj");
        let that = this;
        this.clear_all.addEventListener("click", function(){that.clear_all_obj()}, false);
    }
    clear_all_obj() {    
        this.input.value = '';
        this.result.value = '';
    }
}

// clear [←]
class Clear {
    constructor(doc) {
        this.input = doc.getElementById("input_obj");
        this.clear = doc.getElementById("clear_obj");
        let that = this;
        this.clear.addEventListener("click", function(){that.clear_obj()}, false);
    }
    clear_obj() {
        this.input.value = this.input.value.slice(0, -1);
    }
}

// add [numbers, +, -, /, *, ., ), (]
class Add {
    constructor(doc) {
        this.input = doc.getElementById("input_obj");
        this.adding_elements = document.querySelectorAll(".add_obj");
        let that = this;
        for (var i = 0; i < that.adding_elements.length; i++) {
            that.adding_elements[i].addEventListener("click", function(){that.add_obj(this)}, false);
        }
    }
    add_obj(that) {
        this.input.value = this.input.value + that.innerHTML;
    }
}


if (document.getElementById("buttons_table_obj")){
    // result (=)
    let result_obj = new Result(document);

    // clear_all [С]
    let clear_all_obj = new ClearAll(document);

    // clear [←]
    let clear_obj = new Clear(document);
    
    // add [numbers, +, -, /, *, ., ), (]
    let add = new Add(document);    
}
 