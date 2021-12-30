function calc() {
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    result = document.getElementById("result").value = parseFloat(n1 * n2 / 1000).toFixed(2);
}
