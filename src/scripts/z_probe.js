function zProbe(array, m, sigma)
{
    n = array.length;
    sum = 0;
    for (i = 0; i < n; i++)
    {
        sum += parseInt(array[i]);
    };

    avg = sum / array.length;

    z = (((avg - m)/sigma) * Math.sqrt(n)).toFixed(4);

    return z;
};

document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault();
    
    array = document.getElementById("array");
    m = document.getElementById("m");
    sigma = document.getElementById("sigma");

    if (array.value != '' || m.value != '' || sigma.value || '') {
        if (actualArray = array.value.split(';')) {
            
            z = zProbe(actualArray, parseFloat(m.value), parseFloat(sigma.value));
            document.getElementById("result").innerText = z;
        };
    };
});

document.getElementById("array").addEventListener('change', function() {
    arrayText = document.getElementById("array").value;
    if (arrayText.substr(arrayText.length -1) == ';' || arrayText.substr(arrayText.length -1) == ' ' || arrayText == "") {
        document.getElementById("array").className = 'form-control is-invalid';
    } else {
        document.getElementById("array").className = 'form-control is-valid';
    };
});

document.getElementById("m").addEventListener('change', function() {
    if (document.getElementById("m").value != '' && isNaN(document.getElementById("m").value) == false) {
        document.getElementById("m").className = 'form-control is-valid';
    } else {
        document.getElementById("m").className = 'form-control is-invalid';
    };
});

document.getElementById("sigma").addEventListener('change', function() {
    if (document.getElementById("sigma").value != '' && isNaN(document.getElementById("m").value) == false) {
        document.getElementById("sigma").className = 'form-control is-valid';
    } else {
        document.getElementById("sigma").className = 'form-control is-invalid';
    };
});

setInterval(function(){
    if (document.getElementById("result").innerText == 'NaN') {
        document.getElementById("result").style.color = '#e74c3c';
    } else {
        document.getElementById("result").style.color = '#212529';
    };
}, 100);