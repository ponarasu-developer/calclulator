// function for reload
function reload() {
  location.reload();
}

//function for addition
function add() {
  let val1 = document.getElementById("firstnumber").value;
  let val2 = document.getElementById("secondnumber").value;
  let result = parseInt(val1) + parseInt(val2);
  let newResult = (document.getElementById(
    "answer"
  ).innerText = `The added value is:  ${result}`);
}
//function for subraction
function sub() {
  let val1 = document.getElementById("firstnumber").value;
  let val2 = document.getElementById("secondnumber").value;
  let result = parseInt(val1) - parseInt(val2);
  let newResult = (document.getElementById(
    "answer"
  ).innerText = `The Subracted value is:  ${result}`);
}

//function for multiplication
function mul() {
  let val1 = document.getElementById("firstnumber").value;
  let val2 = document.getElementById("secondnumber").value;
  let result = parseInt(val1) * parseInt(val2);
  let newResult = (document.getElementById(
    "answer"
  ).innerText = ` The multiplied value is :   ${result}`);
}

//function for division
function division() {
  let val1 = document.getElementById("firstnumber").value;
  let val2 = document.getElementById("secondnumber").value;
  let result = parseInt(val1) / parseInt(val2);
  let newResult = (document.getElementById(
    "answer"
  ).innerText = `The divded value is:   ${result}`);
}

//function for reminder
function reminder() {
  let val1 = document.getElementById("firstnumber").value;
  let val2 = document.getElementById("secondnumber").value;
  let result = parseInt(val1) % parseInt(val2);
  let newResult = (document.getElementById(
    "answer"
  ).innerText = `The reminder value is:   ${result}`);
}
