const screen = document.getElementById("display");

function appendValue(val) {
    screen.value = screen.value + val;
}

function clearDisplay() {
    screen.value = "";
}

function deleteLast() {
    screen.value = screen.value.substring(0, screen.value.length - 1);
}

function calculateResult() {
    try {
        let result = eval(screen.value);
        screen.value = result;
    } catch (e) {
        screen.value = "Error";
    }
}