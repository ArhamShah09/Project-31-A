var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
  createCanvas(480,800);

  ground = new Ground(240, 375, 480, 10);
  
	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

for(var k = 0; k <= 480; k = k+80) {
  divisions.push(new Division(k,800-divisionHeight/2,10,divisionHeight));
}

for(var j = 40; j <= 480; j = j+50){
  plinkos.push(new Plinko(j,75));
}

for(var j = 15; j <= 480-10; j = j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j = 40; j <= 480; j = j+50){
  plinkos.push(new Plinko(j,275));
}

for(var j = 15; j <= 480-10; j = j+50){
  plinkos.push(new Plinko(j,375));
}

if(frameCount%60 === 0){
  particles.push(new Particle(random(480/2-10,480/2+10),10,10));
}

for(var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for(var k = 0; k < divisions.length; k++) {
  divisions[k].display();
}

for(var l = 0; l < plinkos.length; l++) {
  plinkos[l].display();
}