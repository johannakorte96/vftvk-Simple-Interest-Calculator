

function compute()
{
    var principal = document.getElementById("principal").value;

    // Form validation: input principle amount must be a positive number
    if (principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    
    // Show result of calculation as text 
    document.getElementById("result").innerHTML="If you deposit <mark>" + principal + "</mark>, </br> at an interest rate of <mark>" + rate + "%</mark>. </br> You will receive an amount of <mark>" + interest + "</mark>, </br> in the year <mark>" + year + "</mark>";
}

function updateRate()
{
    // Update the rate text when the rate slider is moved 
    var rateval = document.getElementById('rate').value 
    document.getElementById('rate_val').innerText=rateval;
}
