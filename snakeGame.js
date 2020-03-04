var init = (color = "#000") => {
    var a = x + 100; var b = y;
    var c = x;
    context.strokeStyle = color
    context.beginPath();
    context.moveTo(x, y)
    for (; a < x + size; a += 110) {
        context.bezierCurveTo(c + n, y - n, a - n, b + n, a, b)
        c = a;
    }
    context.bezierCurveTo(c + n, y - n, a - n, b + n, a, b)
    a = x + 110;
    c = x;
    b = y + 10
    context.moveTo(x, y)
    for (; a < x + size; a += 110) {
        context.bezierCurveTo(c + n, b - n, a - n, b + n, a, b)
        c = a;
    }
    context.bezierCurveTo(c + n, b - n, a - n, b + n, a - 10, b - 10);
    context.rect(canvas.width - 450, canvas.height - 150, 450, 150);
    context.stroke()
}




var moveRight = async () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    x += 10
}

var moveLeft = async () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    x -= 10
}


var moveTop = async () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    y -= 10
}

var moveBottom = async () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    y += 10
}

var checkWon = () => {
    
    return (x > canvas.width - 460 - size && y > canvas.height - 160) ? endGame() : null;
}

var endGame = async () => {
    console.log([x, y])
    await clearInterval(interval)
    won = true
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.font = "100px  Verdana";
    context.strokeText("You Won!!", (canvas.width / 2) - 200, (canvas.height / 2) + 75);
    context.rect((canvas.width / 2) - 210, (canvas.height / 2) - 100, 450, 250);
    context.stroke()
}

let x = 300, y = 300;
var n = 25
let canvas = null;
let context = null;
let won = false;
let size;
var interval;
var dir = true;
document.onkeydown = checkKey;

function initCanvas() {
    canvas = document.getElementById("sky");
    if (canvas.getContext) {
        context = canvas.getContext('2d')
    }
    init();
    canvas.height = screen.height - 110
    canvas.width = screen.width - 30
    size = 200
    interval = setInterval(() => {
        !won && !checkWon() && init()
    }, 10)
}


const increaseSize = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    size += 50
}

const decreaseSize = () => {
    context.clearRect(0, 0, canvas.width, canvas.height)
    size -= 50
}



function checkKey(e) {

    e = e || window.event;
    if (won) {
        return;
    }
    if (e.keyCode == '38') {
        moveTop()
    }
    else if (e.keyCode == '40') {
        moveBottom()
    }
    else if (e.keyCode == '37') {
        moveLeft()
    }
    else if (e.keyCode == '39') {
        moveRight()
    }
    else if (e.keyCode == '187') {
        increaseSize();
    }
    else if (e.keyCode == '189') {
        decreaseSize();
    }
}
