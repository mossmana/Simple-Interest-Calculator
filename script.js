/**
 * compute
 * 
 * Called when the compute interest button is clicked.
 */
function compute()
{
    var principal = document.getElementById("principal").value;
    // First validate that the principal is a positive value
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    // Then show the results
    document.getElementById("result").innerHTML = 
        "If you deposit <span class=\"yellow\">" + principal + "</span><br/>" +
        "at an interest rate of <span class=\"yellow\">" + rate + "%</span>,<br/>" +
        "you will receive an amount of <span class=\"yellow\">" + interest + "</span><br/>" + 
        "in the year <span class=\"yellow\">" + year + ".</span>";
}

/**
 * updateRate
 * 
 * Called when the rate is changed.
 */
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

