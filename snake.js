const canvas = document.getElementById('mainCanvas');
const context = canvas.getContext('2d');

const SIZE = 20;

const head = {
	x : 0,
	y : 0
};

let dx = 0;
let dy = 0;

setInterval(main, 1000);

function main(){
	update();
	draw();
}

function update(){
	head.x += dx;
	head.y += dy;
}

function draw(){
	context.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
	drawObject(head);
}

function drawObject(obj){
	context.fillRect(obj.x, obj.y, SIZE, SIZE);
}

document.addEventListener('keydown', moveSnake);

function moveSnake(event){
	switch(event.key){
		case 'ArrowUp':
			dx = 0;
			dy = -SIZE;
			console.log('move up');
		break;
		case 'ArrowDown':
			dx = 0;
			dy = SIZE;
			console.log('move down');
		break;
		case 'ArrowLeft':
			dx = -SIZE;
			dy = 0;
			console.log('move left');
		break;
		case 'ArrowRight':
			dx = SIZE;
			dy = 0;
			console.log('move right');
		break;
	}
}