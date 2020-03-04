let canvas, context, interval, height, width;
let stars = [];
let lacor;
function init() {
    canvas = document.querySelector("#can");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    height = canvas.height;
    width = canvas.width;
    canvas.getContext && (context = canvas.getContext("2d"));
    context.strokeStyle = "#fff";
    context.fillStyle = "#fff";
    lacor = [[width, height, 0.65, 0.5, .6, .6, "#35495e"], [width, height, 0.4, 0.25, 1, 1, "#112d4e"]];
    startgen();
    interval = setInterval(randr, 100);
}
var startgen = () => {
    for (let i = 0; i < 50; i++) {
        let xy = coordinateGenerator();
        stars.push([xy, Math.floor(Math.random() * 10) * 0.1, Math.round(Math.random() * 10) * 0.1]);
    }
}
async function randr() {
    await context.clearRect(0, 0, width, height)
    lacor = lacor.map((val) => {
        layer(...val);
        let val2 = (val.slice(0, 4))
        val2.push(...(() => {
            let temp = val.slice(4, 6).map(
                (val) => {
                    return val > -0.11 ? (val - 0.02).toFixed(2) : val
                }
            )
            return temp.every(val => val > -0.11) ? temp : [1, 1]
        })())
        val2.push(...val.slice(6))

        return val2
    })
    stars = await stars.map(val => {
        let size = val[1], inc = val[2];
        star(...val[0], size);
        size < 0 ? (() => { size = 0; inc = true })() : size > 15 ? (() => { size = 2; inc = false })() : "";
        return inc ? [val[0], size += 0.1] : [val[0], size -= 0.1];
    });
    moon();
}

function coordinateGenerator() {
    let coor = [];
    coor.push(Math.floor(Math.random() * width));
    coor.push(Math.floor(Math.random() * height));
    return coor;
}


var layer = (x, y, xs, xe, ys, ye, c) => {
    context.beginPath();
    context.moveTo(x * xs, 0);
    context.bezierCurveTo(x * xe, y * ys, x * xs, y * ye, x * xe, y);
    context.lineTo(0, y + 10);
    context.lineTo(0, 0)
    context.fillStyle = c
    context.fill()
}
function moon(x = 1001, y = 100, size = 300) {
    drawlight(x, y, size);
    let x1 = size / 2, y1 = size;
    context.beginPath();
    context.fillStyle = "#fff"
    context.moveTo(x, y);
    context.bezierCurveTo(x - size * 0.5, y + size * 0.5, x, y + size * 1.2, x + x1, y + y1);
    context.bezierCurveTo(x - size * 0.2, y + size * .8, x - size * .1, y + size * .2, x, y);
    context.fill();
}
const drawlight = (x, y, r) => {
    let i;
    y -= 10
    x -= 10
    r += 10
    for (i = 0; r > i; i++) {
        context.beginPath();
        context.moveTo(x, y);
        context.strokeStyle = (function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            let tempColor = letters[Math.abs(12 - Math.floor(((i + 1) / 35) % 15))];
            color += `${tempColor}${tempColor}${tempColor}${2}`;
            console.log(color)
            // debugger;
            return color;
        })()

        context.bezierCurveTo(x - r * 0.5 - i, y + r * 0.5, x, y + r * 1.2, x + r / 2 + (i / 10), y + r + (i / 30));
        context.bezierCurveTo(x - r * 0.2 + i, y + r * .8, x - r * .1, y + r * .2 + (i / 30), x + (i / 10), y - (i / 30));
        // context.moveTo(x + r / 2 + (i / 10), y + r);
        // context.bezierCurveTo(x - r * 0.2 + i, y + r * .8, x - r * .1, y + r, x + (i / 10), y);
        context.stroke()
    }


}


// star
const star = (x, y, size1 = 0) => {
    this.size = size1
    context.beginPath();
    context.fillStyle = "#fff"
    context.moveTo(x, y); // p
    context.lineTo(x + size, y);     // q
    context.lineTo(x + 3 / 2 * size, y - size);  // r
    context.lineTo(x + 2 * size, y);  // s
    context.lineTo(x + 3 * size, y);  // t
    context.lineTo(x + 2 * size, y + size / 2);  // u
    context.lineTo(x + 7 / 3 * size, y + 1.5 * size);  // v
    context.lineTo(x + 3 / 2 * size, y + size * 0.7);  // w
    context.lineTo(x + 2 / 3 * size, y + 1.5 * size);  // x
    context.lineTo(x + size, y + size / 2);  // y
    context.lineTo(x, y);  // z
    context.stroke();
}


// circle
// function draw1(x1, y1, size = 10) {
//     let r = size;
//     let y = r;
//     for (x = 0; x <= r; x += 0.1) {
//         y = (r ** 2 - x ** 2) ** 0.5//circle
//         context.rect(x1 + -x, y1 + -y, 1, 1)
//         context.rect(x1 + x, y1 + -y, 1, 1)
//         context.rect(x1 + -x, y1 + y, 1, 1)
//         context.rect(x1 + x, y1 + y, 1, 1)
//     }
//     context.stroke()
// }


