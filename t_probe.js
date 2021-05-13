function tProbe(array, m) {

    Sn_2 = 0;
    n = array.length;
    Xj_2 = 0;
    Sum = 0;

    for (i = 0; i < n; i++) {
        Xj_2 += Math.pow(parseFloat(array[i]), 2);
        Sum += parseFloat(array[i]);
    };

    avg = (Sum/n);

    Sn_2 = (1/(n-1)) *(Xj_2 - n*Math.pow(avg, 2)) ;

    t = (((avg - m) / Math.sqrt(Sn_2)) * Math.sqrt(n)).toFixed(4);

    return t;
};

document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault();
    
    array = document.getElementById("array");
    m = document.getElementById("m");

    if (array.value != '' || m.value != '' || sigma.value || '') {
        if (actualArray = array.value.split(';')) {
            
            t = tProbe(actualArray, parseFloat(m.value));
            document.getElementById("result").innerText = t;
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

setInterval(function(){
    if (document.getElementById("result").innerText == 'NaN') {
        document.getElementById("result").style.color = '#e74c3c';
    } else {
        document.getElementById("result").style.color = '#212529';
    };
}, 100);