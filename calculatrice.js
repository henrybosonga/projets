
function appendValue(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  const input = document.getElementById("display").value;
  try {
    const result = eval(input);
    document.getElementById("display").value = result;
  } catch {
    document.getElementById("display").value = "Erreur";
}
}
