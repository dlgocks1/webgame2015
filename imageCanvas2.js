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

var strMouseStatus = "준비중";

function drawScreen(){
  var theCanvas=document.getElementById("GameCanvas");
  var Context = theCanvas.getContext("2d");
  Context.drawImage(imgBackground,0,0);
  Context.drawImage(imgPlayer, intMouseX, intMouseY,100,100);

  Context.drawImage(imgPlayer, intPlayerX, intPlayerY);

  Context.fillStyle = "#000000";
  Context.font = '24px Arial';
  Context.textBaseline = "top";
  Context.fillText("발생한 마우스 이벤트는 : "+strMouseStatus,5,5);
  Context.fillText("마우스 좌표는  x :"+intMouseX+" y :"+intMouseY,5,30);
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
	}
	drawScreen();
}

function onkeyUp(e){
	
	drawScreen();
}
