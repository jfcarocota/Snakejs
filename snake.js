const canvas = document.getElementById('mainCanvas');
const context = canvas.getContext('2d');

const SIZE = 20;

const square = {
	x : 0,
	y : 0
};

setInterval(main, 1000);

function main(){
	update();
	draw();
}

function update(){
	
}

function draw(){
	drawObject(square);
	square.x += SIZE;
}

function drawObject(obj){
	context.fillRect(square.x, square.y, SIZE, SIZE);
}

function moveSnake(event){
	switch(event.key){
		case 'ArrowUp':
			console.log('move up');
		break;
		case 'ArrowDown':
			console.log('move down');
		break;
		case 'ArrowLeft':
			console.log('move left');
		break;
		case 'ArrowRight':
			console.log('move right');
		break;
	}
}