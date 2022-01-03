function calc() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    n3 = parseFloat(document.getElementById("n3").value);
    result = document.getElementById("result").value = parseFloat(n1 * n2 * n3 / 1000).toFixed(2);
}
