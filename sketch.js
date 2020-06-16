var raindrops = [];

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black");  

  if(frameCount % 1 === 0){
    var raindrop = new Raindrop(random(0,800), -10, 4, random(15,45));
    raindrops.push(raindrop);

  }

  for(var r = 0; r < raindrops.length; r++){
    raindrops[r].fall(8);
    raindrops[r].display();
  }

}