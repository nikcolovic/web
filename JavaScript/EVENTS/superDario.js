var divNode = document.querySelector('.backgr');
var imgNode = document.querySelector('img');
var xPos = 0;
var yPos = "0px";


function moveBackgroundRight(e) {
    if (e.key === "ArrowRight") {
        divNode.getElementsByClassName.backgroundPosition = xPOs + "px " + yPos + "px ";
        xPos-=20;
    }
}

function switchImgSrcRight (e) {
    if (e.key === "ArrowRight") {
        imgNode.src = "./images/mario_running.gif";
        imgNode.style.width = "120px";
        document.removeEventListener('keydown', switchImgSrcRight);
    }
}

function stopMovingForward(e) {
    if (e.key === "ArrowRight") {
        imgNode.src = "./images/mario.png";
        imgNode.style.width = "150px";
        document.addEventListener('keydown', switchImgSrcRight)
    }
}

function jump(e){
    if (e.key === "ArrowUp") {
        imgNode.src = "./images/mario_running.gif";
        imgNode.style.width = "120px";
        imgNode.style.top = "40%";
        document.removeEventListener('keyup', jump);
  }
}

function noJump(e){
    if (e.key === "ArrowUp"){
       imgNode.src = "./images/mario.png";
        imgNode.style.width = "150px";
        imgNode.style.top = "60%";
        document.addEventListener('keydown', jump);
    }
}


document.addEventListener('keydown', moveBackgroundRight);
document.addEventListener('keydown', switchImgSrcRight);
document.addEventListener('keyup', stopMovingForward);
document.addEventListener('keydown', jump);
document.addEventListener('keyup', noJump);



