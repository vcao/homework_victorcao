document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('reset').onclick = reset;

function switchBlue() {
    document.body.style.backgroundColor = '#337ab7';
    document.body.style.color = 'white';
    console.log("Switched to blue");
}

function switchYellow() {
    document.body.style.backgroundColor = '#f0ad4e';
    document.body.style.color = 'black';
    console.log("Switched to yellow");
}

function reset() {
    //get the reset button working
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = 'black';
    console.log("Reset to white");
}