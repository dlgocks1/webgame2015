window.addEventListener("load",drawScreen,false);
window.addEventListener("mousemove",onMouseMove,false):
window.addEventListener("mousedown",onMouseDown,false):
window.addEventListener("mouseup",onMouseUp,false):

var imgBackground = new Image();
imgBackground.src = "Background.jpg";
imgBackground.addEventListener("load", drawScreen, false);

var imgPlayer=new Image();
imgPlayer.src="Player.png";
imgPlayer.addEventListener("load", drawScreen, false);

var bMouseClicked =false;
var intMouseX = 480;
var intMouseY = 300;


function drawScreen(){
	var theCanvas=document.getElementById("GameCanvas");
	var Context=theCanvas.getContext("2d");
	
	Context.drawImage(imgBackground,0,0);
	Context.drawImage(imgPlayer,intMouseX,intMouseY,100,100);

	// Context.drawImage(imgPlayer, intMouseX,intMouseY);
}
// function onMouseDown(e){
// 	strMouseStatus ="클릭!";
// 	var theCanvas=document.getElementById("GameCanvas");
// 	bMouseClicked =true;
// 	intMouseX = e.clientX - theCanvas.offsetLeft-42;
// 	intMouseY = e.clientY - theCanvas.offsetTop-50;
// 	drawScreen();
// }
// function onMouseMove(e){
// 	strMouseStatus ="Moving now";
// 	if(bMouseClicked){
// 		var theCanvas=document.getElementById("GameCanvas");
// 		intMouseX = e.clientX - theCanvas.offsetLeft-42;
// 		intMouseY = e.clientY - theCanvas.offsetTop-50;
// 		drawScreen();
// 	}
// }
// function onMouseUp(e){
// 	strMouseStatus ="클릭 끝!!";
// 	bMouseClicked =false;
// 	intMouseX = 480;
// 	intMouseY = 300;
// 	drawScreen();
// }

