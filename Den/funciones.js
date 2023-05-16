function squared() {
  num = Number(document.getElementById('n_squared').value);
  alert(Math.pow(num, 2));
}

function factorial() {
  num = Number(document.getElementById('fact_n').value);
  var result = num;

  if (num === 0 || num === 1)
    alert(1);

  while (num > 1) {
    num--;
    result = result * num;
  }
  alert(result);
}

function abs() {
  num = Number(document.getElementById('n_abs').value);
  alert(Math.abs(num));
}


