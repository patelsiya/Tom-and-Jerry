var bgImg,cat1,mouse1;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    cat = loadImage("images/cat1.png");
    mouse = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat1 = createSprite(800,650);
cat1.addImage(cat);
mouse1= createSprite(200,650);
mouse1.addImage(mouse);
cat1.scale = 0.2
mouse1.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode==RIGHT_ARROW){
    mouse1.x = mouse1.x + 3;
}

}
