var textArea = document.getElementsByTagName('textarea')[0];

function changeFontColor() {
    var fontColor = document.getElementById('fontColor').value;

    textArea.style.color = fontColor;
}

function changeBackgroundColor() {
    var background = document.getElementById('backgroundColor').value;

    textArea.style.backgroundColor = background;
}