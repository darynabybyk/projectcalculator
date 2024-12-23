document.getElementById("operation_result").onclick = function() {
    let a = document.getElementById("first1").value;
    let b = document.getElementById("second2").value;
    let c;
    if(document.getElementById("plus").checked) {
        c = Number(a) + Number(b);
    }else if(document.getElementById("minus").checked) {
        c =Number(a)-Number(b);
    }else if(document.getElementById("mult").checked) {
        c = Number(a)*Number(b);
    }else if(document.getElementById("div").checked) {
        c =Number(a)/Number(b);
    }else {
        c = "Операцію не було вибрано";
    }
    document.getElementById("result").textContent = `Відповідь: ${c}`
}