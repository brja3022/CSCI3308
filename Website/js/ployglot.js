function myFunction() {
  var x = document.getElementById("cCode");
  var y = document.getElementById("pCode");
  if (x.innerHTML === "C CODE INPUT") {
    x.innerHTML = "PYTHON CODE INPUT";
    y.innerHTML = "C CODE OUTPUT";
  } else {
    x.innerHTML = "C CODE INPUT";
    y.innerHTML = "PYTHON CODE OUTPUT";
  }
}