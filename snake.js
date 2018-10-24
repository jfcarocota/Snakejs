const canvas = document.getElementById('mainCanvas');
const context = canvas.getContext('2d');

const SIZE = 20;

const head = {
	x : 0,
	y : 0
};

const body = [];

let food = null;

let dx = 0;
let dy = 0;

setInterval(main, 200);

function main(){
	update();
	draw();
}

function update(){

	checkCollision();

	let prevX, prevY;

	if(body.length >= 1){
		prevX = body[body.length - 1].x;
		prevY = body[body.length - 1].y;
	}else{
		prevX = head.x;
		prevY = head.y;
	}


	for(let i = body.length - 1; i >= 1; --i){
		body[i].x = body[i - 1].x;
		body[i].y = body[i - 1].y;
	}
	if(body.length >= 1){
		body[0].x = head.x;
		body[0].y = head.y;
	}

	head.x += dx;
	head.y += dy;

	if(food && head.x === food.x && head.y === food.y){
		food = null;	
		increaseSnakeSize(prevX, prevY);	
	}

	if(!food){
		food = {
			x : getRandomX(),
			y : getRandomY()
		};
	}
}


function checkCollision(){
	for(let i = 0; i < body.length; ++i){
		if(head.x == body[i].x && head.y == body[i].y){
			alert("Has perdido");
		}
	}
}

function increaseSnakeSize(prevX, prevY){
	body.push({
		x : prevX,
		y : prevY
	});
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
	body.forEach(
		elem => drawObject(elem, 'lime')
	);
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