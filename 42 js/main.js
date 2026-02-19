window.onload = function() {
    // 1
    let canvas = document.querySelector('canvas').getContext('2d');
    canvas.globalAlpha = '1';
    canvas.fillStyle = 'red';
    canvas.fillRect(10,10,150,100);
    canvas.fillStyle = 'blue';
    canvas.fillRect(110,30,150,100);
    canvas.fillStyle = 'green';
    canvas.fillRect(210,50,150,100);

    // 2

    function gradientCanvas() {
        let canvas = document.querySelector('#secondCanvas').getContext('2d');
        let gradient = canvas.createLinearGradient(0, 0, 500, 0);
        gradient.addColorStop(0, 'red');
        gradient.addColorStop(0.5, 'green');
        gradient.addColorStop(1, 'blue');
        canvas.fillStyle = gradient;
        canvas.fillRect(0,0,500,200);
    }

    gradientCanvas();

    // 3

    let thirdCanvas = document.querySelector('#thirdCanvas').getContext('2d');
    thirdCanvas.moveTo(0, 100);
    thirdCanvas.lineTo(500, 100);
    thirdCanvas.strokeStyle = 'red';
    thirdCanvas.lineWidth = 2;
    thirdCanvas.stroke();

    // 4

    let svgLine = document.querySelector('.svgContent');
    let svgNS = "http://www.w3.org/2000/svg";
    function createLine(color, width, x1, y1, x2, y2) {
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', '500');
        svg.setAttribute('height', '200');
        svg.style.display = 'block';

        let line = document.createElementNS(svgNS, 'line');
        line.setAttribute('x1', x1);
        line.setAttribute('y1', y1);
        line.setAttribute('x2', x2);
        line.setAttribute('y2', y2);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', width);

        svg.appendChild(line);
        svgLine.appendChild(svg);
    }

    createLine('blue', 3, 0, 100, 500, 100);

    // 5

    function drawRect(fillcolor, x, y, width, height, strokeColor, strokeWidth) {
        const svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', width+strokeWidth*2);
        svg.setAttribute('height', height+strokeWidth*2);
        svg.style.display = 'block';

        let rect = document.createElementNS(svgNS, 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fillcolor);
        rect.setAttribute('stroke', strokeColor);
        rect.setAttribute('stroke-width', strokeWidth);

        svg.appendChild(rect);
        svgLine.appendChild(svg);
    }

    drawRect('green', 5, 5, 400, 250, 'black', 5);
}