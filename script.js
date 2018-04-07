document.addEventListener("mousemove", getMouse); 
document.addEventListener("click", toggle);
var follower = document.getElementById("cursor");

follower.style.position = "absolute"; //css	
var position = {x:0, y:0};
var mouse = {x:0, y:0};
var follow = true;

setInterval(update, 50);

function getMouse(e){
	if (follow) {
		mouse.x = e.pageX-75;
    	mouse.y = e.pageY-75;
	}
}

function toggle(e){
	follow = !follow;
	getMouse(e);
}

function update(){
    position.x += (mouse.x - position.x)/10;
    position.y += (mouse.y - position.y)/8;
    follower.style.left = position.x + "px";
    follower.style.top = position.y + "px";
}