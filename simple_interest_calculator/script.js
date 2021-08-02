function updateRate() {
    let rate = document.getElementById("rate");
    let rateval = document.getElementById("rate").value;
    let output = document.getElementById("rate_val");
    output.innerHtml = rateval;

    rate.oninput = function() {
        output.innerHTML = this.value;
    }
}

function compute() {
    const princInput = document.getElementById("principal");
    const principal = document.getElementById("principal").value;
    
    if (principal <= 0 || principal == "") {
        alert("Enter a positive number");
        princInput.focus();
        return;        
    }
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const result = document.getElementById("result");
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);

    result.innerHTML = "If you deposit" + principal + ",\<br />\
    at an interest rate of " + rate + "%\<br />\
    You will receive an amount of " + interest + ",\<br />\
    in the year " + year + "\<br />\ "

}
