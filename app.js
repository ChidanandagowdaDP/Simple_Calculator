let display = document.querySelector("#display");

function appendData(input) {
  display.value += input;
}

function clearData() {
  display.value = "";
}

function calculateData() {
  if (display.value != "") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else {
    display.value = "";
  }
}

function deleteData() {
  display.value = display.value.slice(0, display.value.length - 1);
}
