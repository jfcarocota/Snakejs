const canvas = document.getElementById('mainCanvas');
const context = canvas.getContext('2d');

const SIZE = 20;

const head = {
	x : 0,
	y : 0
};

let food = null;

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

	if(food && head.x === food.x && head.y === food.y){
		food = null;		
	}

	if(!food){
		food = {
			x : getRandomX(),
			y : getRandomY()
		};
	}
}

function getRandomX(){
	return (parseInt(Math.random() * 20)) * 20;
}

function getRandomY(){
	return parseInt(Math.random() * 23) * 20;
}

function draw(){
	context.fillStyle = 'black';
	context.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
	drawObject(head, 'lime');
	drawObject(food, 'white');
}

function drawObject(obj, color){
	context.fillStyle = color;
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