window.addEventListener("load", drawScreen, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);
window.addEventListener("keydown", onkeyDown,false);
window.addEventListener("keyup", onkeyUp,false);


var imgPlayer = new Image();
imgPlayer.src = "Player.png";
imgPlayer.addEventListener("load", drawScreen, false);

var imgBackground = new Image();
imgBackground.src = "Background.jpg";
imgBackground.addEventListener("load", drawScreen, false);

var bMouseClicked = false;
intMouseX = 480;
intMouseY = 300;
intPlayerX =480;
intPlayerY = 300;
var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;
var GameState = Game_STATE_READY;


var ball = new Image();
ball.src = "ball.png";

var intervalID;

var tempBall1 = {x:0, y:0, go_x:1, go_y:1};
var tempBall2 = {x:800, y:0, go_x:-1, go_y:1};
var tempBall3 = {x:800, y:600, go_x:-1, go_y:-1};
var tempBall4 = {x:0, y:600, go_x:1, go_y:-1};



var strMouseStatus = "준비중";



function drawScreen(){

  var theCanvas=document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.drawImage(imgBackground,0,0);
  //Context.drawImage(imgPlayer, intMouseX, intMouseY,100,100);
  Context.drawImage(imgPlayer, intPlayerX, intPlayerY);
  Context.fillStyle = "#000000";
  Context.font = '24px Arial';
  Context.textBaseline = "top";
  Context.fillText("발생한 마우스 이벤트는 : "+strMouseStatus,5,5);
  Context.fillText("마우스 좌표는  x :"+intMouseX+" y :"+intMouseY,5,30);


	if(GameState==Game_STATE_READY){
		Context.fillStyle = "#fff";
		Context.font = '34px Arial';
		Context.fillText("READY",470,250);
	}
	else if(GameState==Game_STATE_GAME){
		Context.drawImage(ball, tempBall1.x, tempBall1.y);
		Context.drawImage(ball, tempBall2.x, tempBall2.y);
		Context.drawImage(ball, tempBall3.x, tempBall3.y);
		Context.drawImage(ball, tempBall4.x, tempBall4.y);
	}
	else if(GameState==Game_STATE_OVER){
		Context.fillStyle = "#fff";
		Context.font = '60px NanumGothic';
		Context.fillText("GAME OVER", 470,250);		
}

}

function onMouseDown(e){
 strMouseStatus = "클릭!";
 var theCanvas = document.getElementById("GameCanvas");
 bMouseClicked = true;
 intMouseX = e.clientX - theCanvas.offsetLeft-42;
 intMouseY = e.clientY - theCanvas.offsetTop-50;
 drawScreen();
}

function onMouseMove(e){
  strMouseStatus = "Moving now";
  if(bMouseClicked){
    var theCanvas = document.getElementById("GameCanvas");
    intMouseX = e.clientX-theCanvas.offsetLeft-42;
    intMouseY = e.clientY-theCanvas.offsetTop-50;
    drawScreen();
  }
}

function onMouseUp(e){
  strMouseStatus = "클릭 끝!";
  bMouseClicked = false;
  intMouseX = 480;
  intMouseY = 300;
  drawScreen();
}

function onkeyDown(e){
	if(GameState==Game_STATE_READY){
		if(e.keyCode==13){
			GameState=Game_STATE_GAME;
			onGameStart();
		}
	}
	else if(GameState==Game_STATE_GAME){
	switch(e.keyCode){
		case 37 : intPlayerX-=10; 
			if(intPlayerX<=50) intPlayerX=50;
		break;
		case 39 : intPlayerX+=10; 
			if(intPlayerX>=800) intPlayerX=800;
		break;
		case 38 : intPlayerY-=10;
			if(intPlayerY<0) intPlayerY=0;
		break;
		case 40 : intPlayerY+=10;	
			if(intPlayerY>=600) intPlayerY=600;
		break;
		case 13 : GameState=Game_STATE_OVER;
		break;	
		}
	}
	else if(GameState==Game_STATE_OVER){
		if(e.keyCode ==13){
			GameState=Game_STATE_READY;
		}
	}

	drawScreen();
}

function onkeyUp(e){
	
	drawScreen();
}

function onGameStart(){
	intervalID = setInterval(MoveBall,100);
}

function MoveBall(){
	tempBall1.x+=tempBall1.go_x*10;
	tempBall1.y+=tempBall1.go_y*10;

	tempBall2.x+=tempBall2.go_x*10;
	tempBall2.y+=tempBall2.go_y*10;

	tempBall3.x+=tempBall3.go_x*20;
	tempBall3.y+=tempBall3.go_y*20;

	tempBall4.x+=tempBall4.go_x*10;
	tempBall4.y+=tempBall4.go_y*10;
	drawScreen();
}