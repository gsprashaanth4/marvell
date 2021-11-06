

// This is G.S.Prashaanth's self designed game - namely: MAR-VELL.
// All ideas of this game is indegeniously developed, obtaining some of them with collaboration with my teacher - nithya kumaraguru ma'am
// this game is structurally based on the Matter.js 2d rigid body physics engine. 

var INTRO1 = 0;
var INTRO2 = 1;
var START = 2;
var PLAY = 3;
var END = 4;
var RULES = 5;
var STORY1 = 11;
var STORY2 = 22;
var SETTINGSS = 2002;
var DIFFISELECT = 2005;
var JUMPTOO = 2008;
var ASKK = 2010;

var gameState = PLAY;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;

var canvas;

var engine;
var world;

var database;
var gameState = 0;
var playerCount = 0;
var allPlayers;

var player;
var form;
var game;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;

var sprHerRunLeft;
var sprHerRunRight;
var sprHerStillLeft;
var sprHerStillRight;
var sprHerJumpLeft;
var sprHerJumpRight;
var sprHerPunchRight;
var sprHerPunchLeft;

var spr1;

var dsjrd = 1;
var dpoo = 0;

var bomB;
var bomB2;

var bombs;
var bombs2;

var rlls;
var dfoo = 0;

var yeser = 0;
var noer = 0;

var detw;

var ddx;
var ddy;

var jOffx = 0;
var jOffy = 0;

var prizX = 200;
var prizY = 200;

var yes1 = 0;
var yes2 = 0;
var yes3 = 0;
var yes4 = 0;
var yes5 = 0;
var yes6 = 0;
var yes7 = 0;
var yes8 = 0;
var yes9 = 0;
var yes10 = 0;
var yes11 = 0;
var yes12 = 0;
var yes13 = 0;
var yes14 = 0;
var yes15 = 0;
var yes16 = 0;
var yes17 = 0;
var yes18 = 0;
var yes19 = 0;
var yes20 = 0;

var yesS1 = 0;
var yesS2 = 0;
var yesS3 = 0;
var yesS4 = 0;
var yesS5 = 0;

var x1 = 0;
var y1 = 0;

var x2 = 0;
var y2 = 0;

var secoonds = 120;
var minutees = 2;

var minutesOnes = 1;
var minutesTens = 0;

var secondsOnes = 0;
var secondsTens = 0;

var NOYes = "no";

var bgC = "black";

var rL;

var x1x = 0;
var y1y = 0;

var rlimage;

var introtime = 0;

var syes = 0;

var i1Sound;
var i2Sound;

var running;

var title;
var enter;
var nameInput;
var startNext;
var restartt;

var playerName;

var timeer;

var clicker = 0;

var vDemo;
var vDemoImg;

var svDemo;
var svDemoImg;

var rLDemo;
var rLDemoImg;

var b1Demo;
var b1DemoImg;

var b2Demo;
var b2DemoImg;

var sDemo;
var sDemoImg;

var intBeepr;

var intime = 0;

var soundYes = 0;

var bgImg;

var bgg;

var playerLives = 4;

var centTimerr = 20;

var timerr = 0;

var obHImg;
var obVImg;

var oo1;
var oo2;
var oo3;

var moo;

var difficulty = "easy";

var cliick;

var wol = "no";

var door;
var doorImg;

var finale = 0;

var lettC = 0;
var winn = 0;

var p1d = 0;

var vReturn = 0;

var lastExplode;
var lastExplodeImg;

var jumpTo

var sto;
var rul;
var pla;

var pTouch;

var score = 0;
var scoreReduce = 0;

var baack;
var playy;

var winImg;

var mennu;
var windo;

function preload()
{
  sprHerRunRight = loadAnimation("sprHeroRun1right.png", "sprHeroRun2right.png", "sprHeroRun3right.png", "sprHeroRun4right.png", "sprHeroRun5right.png", "sprHeroRun6right.png");
  sprHerRunLeft = loadAnimation("sprHeroRun1left.png", "sprHeroRun2left.png", "sprHeroRun3left.png", "sprHeroRun4left.png", "sprHeroRun5left.png", "sprHeroRun6left.png");
  sprHerJumpRight = loadImage("sprHeroJumpRight.png");
  sprHerJumpLeft = loadImage("sprHeroJumpLeft.png");
  rlimage = loadImage("opp11.png");
  swimage = loadImage("MAR-VELL.png");
  introimage = loadImage("intro.png");
  logoimage = loadImage("logo.png");
  vBurst = loadSound("roboblast2.mp3");
  svBurst = loadSound("roboblast1.mp3");
  running = loadSound("footstep3.mp3");
  bombThrow = loadSound("laserh1.mp3");
  bomb2Throw = loadSound("pinPull.mp3");
  bomb1Blast = loadSound("bomb4.mp3");
  vDemoImg = loadImage("spaceProbe11real.png");
  svDemoImg = loadImage("robot3real.png");
  b1DemoImg = loadImage("coin.png");
  b2DemoImg = loadImage("coin2.png");
  rLDemoImg = loadImage("opp11.png");
  intBeepr = loadSound("beep1.mp3");
  bgImg = loadImage("Sbgr2.jpg");
  obHImg = loadAnimation("bg111rr11.png", "bg111rr22.png", "bg111rr33.png", "bg111rr44.png", "bg111rr55.png","bg111rr66.png","bg111rr77.png");
  obVImg = loadAnimation("bg111rr11v.png", "bg111rr22v.png", "bg111rr33v.png", "bg111rr44v.png", "bg111rr55v.png","bg111rr66v.png","bg111rr77v.png");
  cliick = loadSound("touch.wav");
  doorImg = loadImage("sdw1r.png");
  cut = loadSound("laserh2.mp3");
  pTouch = loadSound("ptouch.mp3");
  pdimg = loadImage("lander111r.png");
  winImg = loadImage("bgwrWrr.png");
  lastExplodeImg = loadAnimation("burst11r.png", "burst12r.png", "burst13r.png", "burst14r.png", "burst15r.png");
}

function setup()
{
  canvas = createCanvas(1114,650);

  engine = Engine.create();
  world = engine.world;  

  bgg = createSprite(714/2,714/2);
  bgg.addImage(bgImg);
  bgg.visible = false;

  jS = createButton('jss');
  jS.position(width/2-405, height/2-290);
  jS.show();

  finale = 0;
  p1d = 0;

  door = createSprite(200,200);
  door.addImage(doorImg);
  door.setCollider("rectangle", 0,0,42,39);
  door.debug = false;
  door.visible = false;

  moo = "on";

  spr1 = new sprite(500,100,13);

  //arrays for all the created objects that are unlimited.....

  bombs = [];
  bombs2 = [];
  bombsSense = [];
  bombs2Sense = [];
  rlls = [];

  //gameState defining.......
  gameState = PLAY;  

  //demo pieces for gameState- RULES.......
  sDemo = createSprite(600,70*1);
  sDemo.addAnimation('run',sprHerRunRight);
  sDemo.frameDelay = 2;
  sDemo.scale = 1;

  vDemo = createSprite(600,70*2);
  vDemo.addImage(vDemoImg);
  vDemo.scale = 0.4;
  
  svDemo = createSprite(600,70*3);
  svDemo.addImage(svDemoImg);

  rLDemo = createSprite(600,70*4);
  rLDemo.addImage(rLDemoImg);
  rLDemo.scale = 0.02;

  b1Demo = createSprite(600,70*5);
  b1Demo.addImage(b1DemoImg);
  b1Demo.scale = 0.05;

  b2Demo = createSprite(600,70*6);
  b2Demo.addImage(b2DemoImg);
  b2Demo.scale = 0.02;

  teleDemo = createSprite(600,70*7);
  teleDemo.addImage(doorImg);
  teleDemo.scale = 1;

  shockDemo = createSprite(600,70*8);
  shockDemo.addAnimation('shock', obHImg);
  shockDemo.scale = 1;

  PDdemo = createSprite(600,70*9);
  PDdemo.addImage(pdimg);
  PDdemo.scale = 1;

  //vertical mark-up lines:

  vml1 = new sprBorder(51,76,6,52);
  vml2 = new sprBorder(51,178,6,52);
  vml3 = new sprBorder(51,280,6,52);
  vml4 = new sprBorder(51,408+25,6,52);
  vml5 = new sprBorder(51,535,6,52);
  vml6 = new sprBorder(102,51+25,6,52);
  vml7 = new sprBorder(102,255+25,6,52*5);
  vml8 = new sprBorder(102,459+25,6,52);
  vml9 = new sprBorder(102,612,6,52*2);
  vml10 = new sprBorder(153,153,6,52*2);
  vml11 = new sprBorder(153,306+25,6,52);
  vml12 = new sprBorder(153,561,6,52*2);
  vml13 = new sprBorder(204,51,6,52*2);
  vml14 = new sprBorder(204,255+25,6,52);
  vml15 = new sprBorder(204,459,6,52*2);
  vml16 = new sprBorder(204,612+25,6,52);
  vml17 = new sprBorder(255,102+25,6,52);
  vml18 = new sprBorder(255,408+25,6,51*7);
  vml19 = new sprBorder(306,306+25,6,52);
  vml20 = new sprBorder(306,408+25,6,52);
  vml21 = new sprBorder(306,561+25,6,52*3);
  vml22 = new sprBorder(357,102,6,52*2);
  vml23 = new sprBorder(357,357+25,6,52);
  vml24 = new sprBorder(357,510,6,52*2);
  vml25 = new sprBorder(357,663,6,52*2);
  vml26 = new sprBorder(408,153,6,52*2);
  vml27 = new sprBorder(408,408+25,6,52);
  vml28 = new sprBorder(408,612,6,51*4);
  vml29 = new sprBorder(459,0+25,6,52);
  vml30 = new sprBorder(459,204,6,51*4);
  vml31 = new sprBorder(459,357+25,6,52);
  vml32 = new sprBorder(459,561,6,51*4);
  vml33 = new sprBorder(510,102,6,52*2);
  vml34 = new sprBorder(510,306+25,6,52);
  vml35 = new sprBorder(510,408+25,6,52);
  vml36 = new sprBorder(510,561+25,6,52);
  vml37 = new sprBorder(561,51+25,6,52);
  vml38 = new sprBorder(561,153+25,6,52);
  vml39 = new sprBorder(561,306,6,52*2);
  vml40 = new sprBorder(561,408+25,6,52);
  vml41 = new sprBorder(561,612+25,6,52);
  vml42 = new sprBorder(612,0+25,6,52);
  vml43 = new sprBorder(612,102+25,6,52);
  vml44 = new sprBorder(612,408+25,6,52*3);
  vml45 = new sprBorder(612,612+25,6,52*3);
  vml46 = new sprBorder(663,51+25,6,52);
  vml47 = new sprBorder(663,153+25,6,52);
  vml48 = new sprBorder(663,306+25,6,52);
  vml49 = new sprBorder(663,459+25,6,52*3);
  vml50 = new sprBorder(663,612+25,6,52);
  vml51 = new sprBorder(0,height/2+31,6,718);
  vml52 = new sprBorder(714,height/2+31,6,718);

  //horizontal mark-up lines:

  hml1 = new sprBorder1(102+24,51,53,6);
  hml2 = new sprBorder1(306,51,52*4,6);
  hml3 = new sprBorder1(510+25.1,51,56.1,6);
  hml4 = new sprBorder1(0+27,102,53,6);
  hml5 = new sprBorder1(153,102,54*2,6);
  hml6 = new sprBorder1(255+24,102,53,6);
  hml7 = new sprBorder1(459+24,102,53,6);
  hml8 = new sprBorder1(612,102,54*2,6);
  hml9 = new sprBorder1(51+24,153,52.1,6);
  hml10 = new sprBorder1(306,153,52*4,6);
  hml11 = new sprBorder1(510+25,153,56,6);
  hml12 = new sprBorder1(255,204,52*4,6);
  hml13 = new sprBorder1(459+25,204,52,6);
  hml14 = new sprBorder1(612,204,54*2,6);
  hml15 = new sprBorder1(0+27,255,54,6);
  hml16 = new sprBorder1(153,255,54*2,6);
  hml17 = new sprBorder1(356,255,52*4,6);
  hml18 = new sprBorder1(612,255,52*4,6);
  hml19 = new sprBorder1(410,306,52*2,6);
  hml20 = new sprBorder1(612+28,306,52,6);
  hml21 = new sprBorder1(0+25,357,52,6);
  hml22 = new sprBorder1(306+25.4,357,51.8*7,6);
  hml23 = new sprBorder1(561+25,357,56,6);
  hml24 = new sprBorder1(663+25,357,56,6);
  hml25 = new sprBorder1(153,408,54*2,6);
  hml26 = new sprBorder1(510,408,54*2,6);
  hml27 = new sprBorder1(51+25,459,52*3,6);
  hml28 = new sprBorder1(306+27,459,52*3,6);
  hml29 = new sprBorder1(51+25,510,56,6);
  hml30 = new sprBorder1(153+25.5,510,57,6);
  hml31 = new sprBorder1(561,510,52*4,6);
  hml32 = new sprBorder1(204+25,561,52,6);
  hml33 = new sprBorder1(357+23,561,52,6);
  hml34 = new sprBorder1(561,561,54*2,6);
  hml35 = new sprBorder1(0+25,612,54,6);
  hml36 = new sprBorder1(153+25,612,56,6);
  hml37 = new sprBorder1(306+26,612,54,6);    
  hml38 = new sprBorder1(663+24,612,54,6);
  hml39 = new sprBorder1(153+27,663,51.5*5,6);
  hml40 = new sprBorder1(510,663,54*2,6);
  hml41 = new sprBorder1(width/2-200,0,718,6);
  hml42 = new sprBorder1(width/2-200,714,718,6);

  //major barriers:

  hhml41 = new sprBorder(width/2-200,-71,1000,150);
  hhml42 = new sprBorder(width/2-200,785,1000,150);

  vvml51 = new sprBorder(-71,height/2+30,150,1000);
  vvml52 = new sprBorder(785,height/2+30,150,1000);

  p1 = new Prize(382, 690, 17);

  v1 = new Villain(p1.body.position.x, p1.body.position.y-50, 14);
  v2 = new Villain(p1.body.position.x, p1.body.position.y-50, 14);
  v3 = new Villain(p1.body.position.x, p1.body.position.y-50, 14);
  v4 = new Villain(p1.body.position.x, p1.body.position.y-50, 14);
  v5 = new Villain(p1.body.position.x, p1.body.position.y-80, 14);
  v6 = new Villain(p1.body.position.x, p1.body.position.y-80, 14);
  v7 = new Villain(p1.body.position.x, p1.body.position.y-80, 14);
  v8 = new Villain(p1.body.position.x, p1.body.position.y-80, 14);
  v9 = new Villain(p1.body.position.x, p1.body.position.y-100, 14);
  v10 = new Villain(p1.body.position.x, p1.body.position.y-100, 14);
  v11 = new Villain(p1.body.position.x, p1.body.position.y-100, 14);
  v12 = new Villain(p1.body.position.x, p1.body.position.y-100, 14);
  v13 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v14 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v15 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v16 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v17 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v18 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);
  v19 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);  
  v20 = new Villain(p1.body.position.x, p1.body.position.y-120, 14);

  timeer = new Timer();

  intro = createSprite(width/2,height/2,20,20);
  intro.addImage(introimage); 
  intro.rotation = intro.rotation+90;
  intro.scale = 2;
 
  logo = createSprite(width/2,(height/2)-80,20,20);
  logo.addImage(logoimage); 
  logo.rotation = logo.rotation+90;
  logo.scale = 2;  
   
  sw = createSprite(width/2, height/2, 20, 20);
  sw.addImage(swimage); 
  sw.scale = 0.7;  

  //all created buttons for various functions.......
  nameInput = createInput('');
  enter = createButton('NEXT');
  skip = createButton('SKIP');
  settingsss = createButton("Settings");
  startNext = createButton('NEXT');
  EEasy = createButton('Easy');
  MMedium = createButton('Medium');
  HHard = createButton('Hard');
  SSoundOOn = createButton('Turn On Sounds');
  SSoundOOff = createButton('Turn Off Sounds');
  resumee = createButton('Resume');
  jumpTo = createButton('Jump to...');
  sto = createButton('story');
  rul = createButton('rules');
  pla = createButton('play');
  baack = createButton('Back');
  playy = createButton('Play');
  restartt = createButton('restart');
  mennu = createButton('menu');
  nooo = createButton('No');
  yesss = createButton('Yes');

  //shock-plates...........
  o1 = createSprite(200,305, 77, 10);
  o1.addAnimation('hh',obHImg);
  o1.setCollider("rectangle",0,0,75,10);
  o1.visible = false;
  o1.debug = false;
  o1.frameDelay = 1;

  o2 = createSprite(400,305, 77, 10);
  o2.addAnimation('hhh',obHImg);
  o2.setCollider("rectangle",0,0,75,10);
  o2.visible = false;
  o2.debug = false;
  o2.frameDelay = 1;

  o3 = createSprite(400,407, 77, 10);
  o3.addAnimation('hhhh',obHImg);
  o3.setCollider("rectangle",0,0,75,10);
  o3.visible = false;
  o3.debug = false;
  o3.frameDelay = 1;

  o4 = createSprite(400,561, 77, 10);
  o4.addAnimation('hhhhh',obHImg);
  o4.setCollider("rectangle",0,0,75,10);
  o4.visible = false;
  o4.debug = false;
  o4.frameDelay = 1;

  o1v = createSprite(300,300,10, 77);
  o1v.addAnimation('vvv',obVImg);
  o1v.setCollider("rectangle",0,0,9,75);
  o1v.visible = false;
  o1v.debug = false;
  o1v.frameDelay = 1;

  o2v = createSprite(612,315,10, 77);
  o2v.addAnimation('vv',obVImg);
  o2v.setCollider("rectangle",0,0,9,75);
  o2v.visible = false;
  o2v.debug = false;
  o2v.frameDelay = 1;

  oo1 = createSprite(spr1.body.position.x, spr1.body.position.y, 26, 26);
  oo1.setCollider("rectangle",0,0,20,26);
  oo1.debug = false;
  oo1.visible = false;

  //generating select-random positions for the teleporter.....
  var switchh = Math.round(random(1, 6));

  switch(switchh)
  {
    case 1 :door.x = 690;           
            door.y = 635;
    break;

    case 2 :door.x = 485;
            door.y = 125;
    break;

    case 3 :door.x = 536;
            door.y = 431;
    break;

    case 4 :door.x = 332;
            door.y = 635;
    break;

    case 5 :door.x = 77;
            door.y = 175;
    break;

    case 6 :door.x = 685;
            door.y = 24;
    break;

    default : break;
  }
  
  //droids' creation.........
  sv1 = new sVillain(door.x, door.y-30, 14);
  sv2 = new sVillain(door.x, door.y-30, 14);
  sv3 = new sVillain(door.x, door.y-30, 14);
  sv4 = new sVillain(door.x, door.y-30, 14);
  sv5 = new sVillain(door.x, door.y-30, 14);

  Matter.Body.setPosition(sv1.body, {x: door.x, y: door.y});
  Matter.Body.setPosition(sv2.body, {x: door.x, y: door.y});
  Matter.Body.setPosition(sv3.body, {x: door.x, y: door.y});
  Matter.Body.setPosition(sv4.body, {x: door.x, y: door.y});
  Matter.Body.setPosition(sv5.body, {x: door.x, y: door.y});

  //initial select-random position for PD210.....
  var command = Math.round(random(1,10));

  switch(command)
  {
    case 1 :if(p1.body.position.x !== 382)
            {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
            }
    break;
  
    case 2 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
            }
    break;
  
    case 3 :if(p1.body.position.x !== 689)
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
            }
    break;
  
    case 4 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
            }-30
    break;
  
    case 5 :if(p1.body.position.x !== 180)
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
            }
    break;
  
    case 6 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
          }
    break;
  
    case 7 :if(p1.body.position.x !== 281)
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }
    break;
  
    case 8 :if(p1.body.position.x !== 638)
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});            
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              
            }
    break;
  
    case 9 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:383, y:535});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
            }
    break;
  
    case 10 :if(p1.body.position.x !== 383)
             {
               Matter.Body.setPosition(p1.body, {x:383, y:535});
               Matter.Body.setPosition(v1.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v2.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v3.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v4.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v5.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v6.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v7.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v8.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v9.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v10.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v11.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v12.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v13.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v14.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v15.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v16.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v17.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v18.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v19.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v20.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
             }else
             {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
             }
    break;
   }

   lastExplode = createSprite(width/2, height/2);
   lastExplode.addAnimation('blast', lastExplodeImg);
   lastExplode.visible = false;
   lastExplode.frameDelay = 2;
   lastExplode.scale = 1;

   dialogB = createSprite(width/2, height/2 - 100, 400,250);

    windo = new Windo();
    Matter.World.remove(world, windo.body);

    joi = new Joyy();
    Matter.World.remove(world, joi.body);
}

function draw()
{
  background(bgC)
  Engine.update(engine);
  drawSprites();

  //jOffx = 500 + spr1.body.position.x;
  //jOffy = 100 + spr1.body.position.y;

  //jOff = Math.sqrt(((500-spr1.body.position.x)*(500-spr1.body.position.x))+((100-spr1.body.position.y)*(100-spr1.body.position.y)))
  jOffx = 500 - spr1.body.position.x;
  jOffy = 100 - spr1.body.position.y;

  //Matter.Body.setPosition(windo.body ,{x: spr1.body.position.x , y: spr1.body.position.y});
  

  //positions for all buttons...
  skip.position(975,700);

  if(gameState === INTRO1)
  {
    skip.show();
  }else if(gameState !== INTRO1)
  {
    skip.hide();
  }
  
  nameInput.position(width/2-90, height/2);
  enter.position(width/2-30, height/2+ 50);

  startNext.position(920,700);
  settingsss.position(900, 60);

  if(gameState === START)
  {
    startNext.show();
  }else if(gameState !== START)
  {
    startNext.hide();
  }

  if(gameState === PLAY)
  {
    settingsss.show();
    timeer.display();
  }else if(gameState !== PLAY)
  {
    settingsss.hide();
    timeer.hiide();
    timeer.hideer();
  }

  if(gameState === PLAY || gameState === SETTINGSS || gameState === ASKK)
  {
    bgg.visible = true;
  }else
  {
    bgg.visible = false;
  }

  if(gameState === PLAY && finale === 0)
  {
    timeer.hiide();
    timeer.showw();
  }else if(gameState === PLAY && finale === 1)
  {
    timeer.hideer();
    timeer.shoow();
    timeer.showw();
  }

  if(gameState === SETTINGSS || gameState === DIFFISELECT)
  {
    SSoundOOff.show();
    SSoundOOn.show();
  }else if(gameState !== SETTINGSS || gameState !== DIFFISELECT)
  {
    SSoundOOff.hide();
    SSoundOOn.hide();
  }

  if(gameState === RULES)
  {
    playy.show();
  }else if(gameState !== RULES)
  {
    playy.hide();
  }

  if(gameState === JUMPTOO)
  {
    pla.show();
    sto.show();
    rul.show();
    baack.show();
  }else if(gameState !== JUMPTOO)
  {
    pla.hide();
    sto.hide();
    rul.hide();
    baack.hide();
  }

  if(gameState === INTRO2)
  {
    enter.show();
    jumpTo.show();
    nameInput.show();
  }else if(gameState !== INTRO2)
  {
    enter.hide();
    jumpTo.hide();
    nameInput.hide();
  }

  MMedium.position(width/2+50, height/2);
  EEasy.position(width/2+60, height/2-40);
  HHard.position(width/2+60, height/2+40);

  if(gameState === SETTINGSS)
  {
    SSoundOOn.position(width/2-65, height/2);
    SSoundOOff.position(width/2-65, height/2);
    resumee.show();
  }else if(gameState !== SETTINGSS)
  {
    SSoundOOn.position(width/2-65, height/2);
    SSoundOOff.position(width/2-65, height/2);
    resumee.hide();
  }

  if(gameState === DIFFISELECT)
  {
    SSoundOOn.position(width/2-65, height/2);
    SSoundOOff.position(width/2-65, height/2);

    MMedium.show();
    EEasy.show();
    HHard.show();

  }else if(gameState !== DIFFISELECT)
  {
    SSoundOOn.position(width/2-65, height/2);
    SSoundOOff.position(width/2-65, height/2);

    MMedium.hide();
    EEasy.hide();
    HHard.hide();

  }

  if(gameState === ASKK)
  {
    dialogB.visible = true;
    yesss.show();
    nooo.show();
  }else if(gameState !== ASKK)
  {
    dialogB.visible = false;
    yesss.hide();
    nooo.hide();
  }

  if(gameState === SETTINGSS || gameState === END)
  {
    mennu.show();
    restartt.show();
  }else if(gameState !== SETTINGSS || gameState !== END)
  {
    mennu.hide();
    restartt.hide();
  }

  resumee.position(width/2-40, height/2-30);
  jumpTo.position(width/2-40, height/2+ 90);

  rul.position(width/2-20, height/2);
  sto.position(width/2-20, height/2-40);
  pla.position(width/2-20, height/2+40);

  baack.position(920,700);
  playy.position(920,700);


  if(gameState === END)
  {
    restartt.position(width/2-45, height/2+30);
    mennu.position(width/2-45, height/2+30);
  }else if(gameState !== END)
  {
    restartt.position(width/2-45, height/2+60);
    mennu.position(width/2-45, height/2+30);
  }

  if(gameState === RULES)
  {
    vDemo.visible = true;
    svDemo.visible = true;
    sDemo.visible = true;
    rLDemo.visible = true;
    b1Demo.visible = true;
    b2Demo.visible = true;
    teleDemo.visible = true;
    shockDemo.visible = true;
    PDdemo.visible = true;
    sw.visible = true;
  }else if(gameState !== RULES)
  {
    vDemo.visible = false;
    svDemo.visible = false;
    sDemo.visible = false;
    rLDemo.visible = false;
    b1Demo.visible = false;
    b2Demo.visible = false;
    teleDemo.visible = false;
    shockDemo.visible = false;
    PDdemo.visible = false;
    sw.visible = false;
  }

  if(gameState !== INTRO1)
  {
    logo.visible = false;
    intro.visible = false;
    sw.visible = false;
  }

  v1.body.position.x = v1.body.position.x;
  v2.body.position.x = v2.body.position.x;
  v3.body.position.x = v3.body.position.x;
  v4.body.position.x = v4.body.position.x;
  v5.body.position.x = v5.body.position.x;
  v6.body.position.x = v6.body.position.x;
  v7.body.position.x = v7.body.position.x;
  v8.body.position.x = v8.body.position.x;
  v9.body.position.x = v9.body.position.x;
  v10.body.position.x = v10.body.position.x;
  v11.body.position.x = v11.body.position.x;
  v12.body.position.x = v12.body.position.x;
  v13.body.position.x = v13.body.position.x;
  v14.body.position.x = v14.body.position.x;
  v15.body.position.x = v15.body.position.x;
  v16.body.position.x = v16.body.position.x;
  v17.body.position.x = v17.body.position.x;
  v18.body.position.x = v18.body.position.x;
  v19.body.position.x = v19.body.position.x;  
  v20.body.position.x = v20.body.position.x;

  v1.body.position.y = v1.body.position.y;
  v2.body.position.y = v2.body.position.y;
  v3.body.position.y = v3.body.position.y;
  v4.body.position.y = v4.body.position.y;
  v5.body.position.y = v5.body.position.y;
  v6.body.position.y = v6.body.position.y;
  v7.body.position.y = v7.body.position.y;
  v8.body.position.y = v8.body.position.y;
  v9.body.position.y = v9.body.position.y;
  v10.body.position.y = v10.body.position.y;
  v11.body.position.y = v11.body.position.y;
  v12.body.position.y = v12.body.position.y;
  v13.body.position.y = v13.body.position.y;
  v14.body.position.y = v14.body.position.y;
  v15.body.position.y = v15.body.position.y;
  v16.body.position.y = v16.body.position.y;
  v17.body.position.y = v17.body.position.y;
  v18.body.position.y = v18.body.position.y;
  v19.body.position.y = v19.body.position.y;  
  v20.body.position.y = v20.body.position.y;


  sv1.body.position.x = sv1.body.position.x;
  sv2.body.position.x = sv2.body.position.x;
  sv3.body.position.x = sv3.body.position.x;
  sv4.body.position.x = sv4.body.position.x;
  sv5.body.position.x = sv5.body.position.x;

  sv1.body.position.y = sv1.body.position.y;
  sv2.body.position.y = sv2.body.position.y;
  sv3.body.position.y = sv3.body.position.y;
  sv4.body.position.y = sv4.body.position.y;
  sv5.body.position.y = sv5.body.position.y;

  p1.body.position.x = p1.body.position.x;
  p1.body.position.y = p1.body.position.y;

/*
  px1 = p1.body.position.x - v1.body.position.x;
  py1 = p1.body.position.y - v1.body.position.y;
  
  px2 = p1.body.position.x - v2.body.position.x;
  py2 = p1.body.position.y - v2.body.position.y;
  
  px3 = p1.body.position.x - v3.body.position.x;
  py3 = p1.body.position.y - v3.body.position.y;
  
  px4 = p1.body.position.x - v4.body.position.x;
  py4 = p1.body.position.y - v4.body.position.y;
  
  px5 = p1.body.position.x - v5.body.position.x;
  py5 = p1.body.position.y - v5.body.position.y;
  
  px6 = p1.body.position.x - v6.body.position.x;
  py6 = p1.body.position.y - v6.body.position.y;
  
  px7 = p1.body.position.x - v7.body.position.x;
  py7 = p1.body.position.y - v7.body.position.y;
  
  px8 = p1.body.position.x - v8.body.position.x;
  py8 = p1.body.position.y - v8.body.position.y;
  
  px9 = p1.body.position.x - v9.body.position.x;
  py9 = p1.body.position.y - v9.body.position.y;
  
  px10 = p1.body.position.x - v10.body.position.x;
  py10 = p1.body.position.y - v10.body.position.y;
  
  px11 = p1.body.position.x - v11.body.position.x;
  py11 = p1.body.position.y - v11.body.position.y;
  
  px12 = p1.body.position.x - v12.body.position.x;
  py12 = p1.body.position.y - v12.body.position.y;
  
  px13 = p1.body.position.x - v13.body.position.x;
  py13 = p1.body.position.y - v13.body.position.y;
  
  px14 = p1.body.position.x - v14.body.position.x;
  py14 = p1.body.position.y - v14.body.position.y;
  
  px15 = p1.body.position.x - v15.body.position.x;
  py15 = p1.body.position.y - v15.body.position.y;
  
  px16 = p1.body.position.x - v16.body.position.x;
  py16 = p1.body.position.y - v16.body.position.y;
  
  px17 = p1.body.position.x - v17.body.position.x;
  py17 = p1.body.position.y - v17.body.position.y;
  
  px18 = p1.body.position.x - v18.body.position.x;
  py18 = p1.body.position.y - v18.body.position.y;
  
  px19 = p1.body.position.x - v19.body.position.x;
  py19 = p1.body.position.y - v19.body.position.y;
  
  px20 = p1.body.position.x - v20.body.position.x;
  py20 = p1.body.position.y - v20.body.position.y;


  Matter.Body.applyForce(v1.body, p1.body.position, {x: px1/8000 , y: py1/8000});
  Matter.Body.applyForce(v2.body, p1.body.position, {x: px2/8000 , y: py2/8000});
  Matter.Body.applyForce(v3.body, p1.body.position, {x: px3/8000 , y: py3/8000});
  Matter.Body.applyForce(v4.body, p1.body.position, {x: px4/8000 , y: py4/8000});
  Matter.Body.applyForce(v5.body, p1.body.position, {x: px5/8000 , y: py5/8000});
  Matter.Body.applyForce(v6.body, p1.body.position, {x: px6/8000 , y: py6/8000});
  Matter.Body.applyForce(v7.body, p1.body.position, {x: px7/8000 , y: py7/8000});
  Matter.Body.applyForce(v8.body, p1.body.position, {x: px8/8000 , y: py8/8000});
  Matter.Body.applyForce(v9.body, p1.body.position, {x: px9/8000 , y: py9/8000});
  Matter.Body.applyForce(v10.body, p1.body.position, {x: px10/8000 , y: py10/8000});
  Matter.Body.applyForce(v11.body, p1.body.position, {x: px11/8000 , y: py11/8000});
  Matter.Body.applyForce(v12.body, p1.body.position, {x: px12/8000 , y: py12/8000});
  Matter.Body.applyForce(v13.body, p1.body.position, {x: px13/8000 , y: py13/8000});
  Matter.Body.applyForce(v14.body, p1.body.position, {x: px14/8000 , y: py14/8000});
  Matter.Body.applyForce(v15.body, p1.body.position, {x: px15/8000 , y: py15/8000});
  Matter.Body.applyForce(v16.body, p1.body.position, {x: px16/8000 , y: py16/8000});
  Matter.Body.applyForce(v17.body, p1.body.position, {x: px17/8000 , y: py17/8000});
  Matter.Body.applyForce(v18.body, p1.body.position, {x: px18/8000 , y: py18/8000});
  Matter.Body.applyForce(v19.body, p1.body.position, {x: px19/8000 , y: py19/8000});
  Matter.Body.applyForce(v20.body, p1.body.position, {x: px20/8000 , y: py20/8000});
 */ 

  
  if(gameState === INTRO1)
  {
    push();
    textSize(16);
    textFont("Courier new");
    fill("#02F702");
    text("Please be in fullscreen for better experience, press F11", 90, 80);
    pop();

    if(frameCount % 0.5 === 0 && intro.rotation > 0)
    {
      intro.scale = intro.scale-0.02;
      logo.scale = logo.scale-0.02;
      intro.rotation = intro.rotation-1;
      logo.rotation = logo.rotation-1; 
    }
     
    if(intro.rotation < 1 && intro.scale < 0.7)
    {
      intro.scale = intro.scale+0.002;
      logo.scale = logo.scale+0.002;
    }
     
    if(frameCount % 18 === 0 && introtime < 42) 
    {
      introtime++;
    }
    
    if(introtime > 13)
    {
      logo.visible = false
      intro.visible = false;
      bgC = "white";
      sw.visible = true;
      
    
      if(frameCount % 0.5 === 0)
      {
        sw.scale = sw.scale+0.0005;
      }
    }

    if(introtime > 20)
    {
      gameState = INTRO2;
      sw.visible = false;
      logo.visible = false;
      intro.visible = false;
    }  

    skip.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = INTRO2;
    });
  }


  if(gameState === INTRO2)
  {

    textSize(20);
    textFont("Courier new");
    fill("#02F702");
    text("enter you're name here_", width/2-410, height/2-60);

    bgC = rgb(0,0,0);

    enter.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = START;
    });


    jumpTo.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = JUMPTOO;
    });
  }

  if(gameState === JUMPTOO)
  {
  
    push();
    textSize(16);
    textFont("Courier new");
    fill("#02F702");
    text("jump to selective sections in the game", 190, 300);
    pop();

    baack.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = INTRO2;
      rul.hide();
    });

    rul.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = RULES;
      rul.hide();
    });

    sto.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = START;
      sto.hide();
    });

    pla.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = DIFFISELECT;
      pla.hide();
    });
  }

  if(gameState === START)
  {

    if(frameCount % 15 === 0 && clicker !== 10)
    {
      clicker++;
      if(moo === "on" && moo !== "off")
      {
        intBeepr.play();
      }  
    }

    if(clicker > 0)
    {
      push();
      textSize(16);
      fill("#02F702");
      textFont("Courier new");
      text("Hello " + nameInput.value() + "_", 10, 60);
      pop();
    }

    if(clicker > 1)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");                                                              //
      text("Welcome to 2099, when AI takes' over the world, destroying it's creators_", 10, 120);
      pop();
    }

    if(clicker > 2)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("You're one of the IHCH prototypes(Intelligent Human-Compatible Humanoid)_", 10, 180);
      pop();
    }

    if(clicker > 3)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("Save last human life out there, and destroy the evil AI_", 10, 240);
      pop();     
    } 

    if(clicker > 4)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("You're task for now is to steal a Android- the PD210 from the robots_", 10, 300);
      pop();
    }

    if(clicker > 5)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("The robots will be shifting the location of the PD210 every minute_", 10, 360);
      pop();
    }

    if(clicker > 6)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("Use the blasters to destroy the robots, avoid contact of shock-plates_", 10, 420);
      pop();
    }

    if(clicker > 7)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("You'll be having only 1 life to finish the task_", 10, 480);
      pop();
    }

    if(clicker > 8)
    {
      push();
      textSize(16);
      textFont("Courier new");
      fill("#02F702");
      text("Exit the base with the teleporter after taking PD210...the base explodes_", 10, 540);
      pop();
    }

    if(clicker > 9)
    {
      startNext.show();
    }
 
    startNext.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = RULES;
      startNext.hide();
      enter.hide();
    });
  }

  if(gameState === RULES)
  {
    
    if(frameCount % 15 === 0 && intime !== 10)
    {
      intime++
      if(moo === "on" && moo !== "off")
      {
      intBeepr.play();
      }
    }
    
    if(intime < 10)
    {
      playy.hide();
    }

    vDemo.visible = false;
    svDemo.visible = false;
    sDemo.visible = false;
    rLDemo.visible = false;
    b1Demo.visible = false;
    b2Demo.visible = false;
    teleDemo.visible = false;
    shockDemo.visible = false;
    PDdemo.visible = false;
    
    sw.visible = false;
    logo.visible = false;
    intro.visible = false;
    
    textFont("Courier new");
    fill("#02F702");
    
    if(intime > 0)
    {
     text("The humanoid, you", 440, 60);
     text("Controls: UP, LEFT, RIGHT, Arrow Keys", 300, 80);
     sDemo.visible = true;
    }
    
    if(intime > 1)
    {
     text("Drone", 530, 140);
     text("Chases you, strong enough to supress you when grouped", 190, 160);
     vDemo.visible = true;
    }
    
    if(intime > 2)
    {
     text("Droid", 530, 205);
     text("Launches smaller drones- Carriers, disperses you away from the PD210", 75, 225);
     svDemo.visible = true;
    }
    
    if(intime > 3)
    {
     text("Carriers",510, 270);
     text("These are small drones-disperses you away from the PD210",163, 290);
     rLDemo.visible = true;
    }
    
    if(intime > 4)
    {    
      text("Grenade- DDB1000 : Falls on the same place, destroys only Drones", 103, 340);
      text("Controls: DOWN Arrow key", 390, 360);
      b1Demo.visible = true;
    }

    if(intime > 5)
    {  
      text("Grenade- TDB1000 : Launches to the facing-side, destroys both Drone and Droid", 10, 413);
      text("Controls: SPACE bar", 430,433);
      b2Demo.visible = true;
    }

    if(intime > 6)
    {  
      text("the Teleporter", 460, 480);
      text("escape with this before the base explodes", 265,500);
      teleDemo.visible = true;
    }

    if(intime > 7)
    {  
      text("  Shock-plate", 460, 550);
      text("never touch them..costs you a life", 310,570);
      shockDemo.visible = true;
    }

    if(intime > 8)
    {  
      text("       PD210", 460, 620);
      text("                eyes on the prize", 310,640);
      PDdemo.visible = true;
    }

    if(intime > 9)
    {
      playy.show();
    }

    playy.mousePressed(()=>{
      if(moo === "on" && moo !== "off")
      {
          cliick.play();
      }
      gameState = DIFFISELECT;
      playy.hide();
    });
  }

  if(gameState === ASKK)
  {
    yesss.mousePressed(()=>{
      gameState = DIFFISELECT;
    });

    nooo.mousePressed(()=>{
      gameState = SETTINGSS;
    });
  }

  if(gameState === DIFFISELECT)
  {
    push();
    textSize(16);
    textFont("Courier new");
    fill("#02F702");
    text("select game difficulty", 183, 373);
    pop();

    EEasy.mousePressed(()=>{
      difficulty = "easy";
      reset();
    });

    HHard.mousePressed(()=>{
      difficulty = "hard";
      reset();
    });

    MMedium.mousePressed(()=>{
      difficulty = "medium";
      reset();
    });

    if(moo === "on")
    {
      SSoundOOff.show();
      SSoundOOn.hide();
    }else if(moo === "off")
    {
      SSoundOOff.hide();
      SSoundOOn.show();
    }

    SSoundOOff.mousePressed(()=>{
      moo = "off";
    });

    SSoundOOn.mousePressed(()=>{
      moo = "on";
      cliick.play();
    });
  }

  if(gameState === PLAY)
  {
   oo1.position.x = spr1.body.position.x;
   oo1.position.y = spr1.body.position.y;


   bgg.visible = true;

   //function to display all the objects:
   
   bgC = rgb(0,0,0);
   x1 = spr1.body.position.x;
   x2 = spr1.body.position.x;
  
   y1 = spr1.body.position.y;
   y2 = spr1.body.position.y;
  
   //to reset the timer....
   if(secondsOnes > 0 && frameCount % 30 === 0)
   {
     secondsOnes--;
   }
  
   if(minutesOnes === 1 && secondsOnes === 0 && secondsTens === 0)
   {
     setTimeout(()=>{minutesOnes = 0;},1000);
   }

   if(minutesOnes === 2 && secondsOnes === 0 && secondsTens === 0)
   {
     setTimeout(()=>{minutesOnes = 1;},1000);
   }
  
   if(secondsOnes === 0 && secondsTens === 0 && finale !== 1)
   {
     setTimeout(()=>{
       secondsTens = 5;
       secondsOnes = 9;
     },10);
   }

   if(secondsTens === 6 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 5;
       secondsOnes = 9;
     },1000);
   }
   
   if(secondsTens === 5 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 4;
       secondsOnes = 9;
     },1000);
   }
  
   if(secondsTens === 4 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 3;
       secondsOnes = 9;
     },1000);
   }
  
   if(secondsTens === 3 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 2;
       secondsOnes = 9;
     },1000);
   }
  
   if(secondsTens === 2 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 1;
       secondsOnes = 9;
     },1000);
   }
  
   if(secondsTens === 1 && secondsOnes === 0)
   {
     setTimeout(()=>{
       secondsTens = 0;
       secondsOnes = 9;
     },1000);
   }

  
  //displayin all the slabs.....

   vml1.display();
   vml2.display();
   vml3.display();
   vml4.display();
   vml5.display();
   vml6.display();
   vml7.display(); 
   vml8.display();
   vml9.display();
   vml10.display();
   vml11.display();
   vml12.display();
   vml13.display();
   vml14.display();
   vml15.display();
   vml16.display();
   vml17.display();
   vml18.display();
   vml19.display();
   vml20.display();
   vml21.display();
   vml22.display();
   vml23.display();
   vml24.display();
   vml25.display();
   vml26.display();
   vml27.display();
   vml28.display();
   vml29.display();
   vml30.display();
   vml31.display();
   vml32.display();
   vml33.display();
   vml34.display();
   vml35.display();
   vml36.display();
   vml37.display();
   vml38.display();
   vml39.display();
   vml40.display();
   vml41.display();
   vml42.display();
   vml43.display();
   vml44.display();
   vml45.display();
   vml46.display();
   vml47.display();
   vml48.display();
   vml49.display();
   vml50.display();
   vml51.display();
   vml52.display();
  
   hml1.display(); 
   hml2.display(); 
   hml3.display(); 
   hml4.display();
   hml5.display();
   hml6.display();
   hml7.display();
   hml8.display();
   hml9.display(); 
   hml10.display(); 
   hml11.display();
   hml12.display(); 
   hml13.display();
   hml14.display(); 
   hml15.display(); 
   hml16.display(); 
   hml17.display(); 
   hml18.display(); 
   hml19.display(); 
   hml20.display();
   hml21.display(); 
   hml22.display(); 
   hml23.display();
   hml24.display();
   hml25.display(); 
   hml26.display(); 
   hml27.display(); 
   hml28.display(); 
   hml29.display(); 
   hml30.display();
   hml31.display(); 
   hml32.display();
   hml33.display();
   hml34.display();
   hml35.display(); 
   hml36.display();
   hml37.display();
   hml38.display();
   hml39.display(); 
   hml40.display(); 
   hml41.display();
   hml42.display();
  
   v1.display();
   v2.display();
   v3.display();
   v4.display();
   v5.display();
   v6.display();
   v7.display();
   v8.display();
   v9.display();
   v10.display();
   v11.display();
   v12.display();
   v13.display();
   v14.display();
   v15.display();

   windo.display();   

   //joi.display();

   windo.body.position.x = spr1.body.position.x;
   windo.body.position.y = spr1.body.position.y;

   if(mouseIsPressed && (mouseX-70)>joi.body.position.x-10 && (mouseX-70)<joi.body.position.x+10)
   {
      joi.body.position.x = mouseX-70 - jOffx*0.2;
      joi.body.position.y = mouseY-260 - jOffy*0.3;
   }else{
      joi.body.position.x = windo.body.position.x-350;
      joi.body.position.y = windo.body.position.y+300;
   }

  //joi.display();

  push();
  textSize(20);
  strokeWeight(2);
  fill("white");
  text(Math.round(jOffx),200,200);
  text(Math.round(jOffy),200,300);
  pop();
   
  //if(mouseIsPressed && (mouseX-70)>windo.body.position.x-10 && (mouseX-70)<windo.body.position.x+10)
  //{
    //Matter.Body.applyForce(spr1.body, spr1.body.position, {x:-0.0005,y:0});
  //}


  var jox = mouseX-70 - jOffx+9//mouseX-70 - jOffx*0.2;
  var joy = mouseY-240 - jOffy+10;
  var disst = (Math.sqrt(((jox-spr1.body.position.x)*(jox-spr1.body.position.x))+((joy-spr1.body.position.y)*(joy-spr1.body.position.y))))

  if(mouseIsPressed &&  disst < 200 && (mouseX-70 - jOffx+9)<spr1.body.position.x)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:-0.0008,y:0});
  }

  if(mouseIsPressed &&  disst < 200 && (mouseX-70 - jOffx+9)>spr1.body.position.x)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:0.0008,y:0});
  }

  if(mouseIsPressed &&  disst < 200 && (mouseY-240 - jOffy+10)<spr1.body.position.y)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:0,y:-0.003});
  }

  if(mouseIsPressed &&  disst < 200 && (mouseY-240 - jOffy+10)>spr1.body.position.y)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:0,y:0.00006});
  }
   

   push();
   strokeWeight(10);
   if(disst > 200)
   {
      stroke("white");
   }else
   {
      stroke("green");
    }
   line(mouseX-70 - jOffx+9 , mouseY-240 - jOffy+10, spr1.body.position.x, spr1.body.position.y);
   //line(spr1.body.position.x,spr1.body.position.y, windo.body.position.x+100,windo.body.position.y);
   //rect(windo.body.position.x, windo.body.position.y,20,20)
   //line(spr1.body.position.x,spr1.body.position.y, windo.body.position.x,windo.body.position.y);
   //line(spr1.body.position.x,spr1.body.position.y, windo.body.position.x,windo.body.position.y);
   pop();

   

   if(difficulty !== "easy")
   {
      v16.display();
   }

   if(difficulty !== "easy")
   {
      v17.display();
   }

   if(difficulty !== "easy")
   {
      v18.display();
   }

   if(difficulty !== "easy")
   {
      v19.display();
   }

   if(difficulty !== "easy")
   {
      v20.display();
   }
  
   v1.hover();
   v2.hover();
   v3.hover();
   v4.hover();
   v5.hover();
   v6.hover();
   v7.hover();
   v8.hover();
   v9.hover();
   v10.hover();
   v11.hover();
   v12.hover();
   v13.hover();
   v14.hover();
   v15.hover();
   
   if(difficulty !== "easy")
   {
      v16.hover();
   }
   if(difficulty !== "easy")
   {
      v17.hover();
   }
   if(difficulty !== "easy")
   {
      v18.hover();
   }
   if(difficulty !== "easy")
   {
      v19.hover();
   }
   if(difficulty !== "easy")
   {
      v20.hover();
   }
  
   
   World.remove(world, sv1.body);
   World.remove(world, sv2.body);
   World.remove(world, sv3.body);
   World.remove(world, sv4.body);
   World.remove(world, sv5.body);
   

  //stating works for the game according to the difficulty level selected.....

   if(difficulty === "easy")
   {  
    World.remove(world, v16.body);
    World.remove(world, v17.body);
    World.remove(world, v18.body);
    World.remove(world, v19.body);
    World.remove(world, v20.body);
   }else if(difficulty === "hard" || difficulty === "medium")
   {}
  
   if(p1d !== 1)
   {
      p1.display();
   }else if(p1d === 1){}
  
   spr1.display();
  
  //code for the visibility of the shockplates and its functioning.....

   o2.visible = true;
   o1.visible = true;
   o3.visible = true;
   o4.visible = true;
   o1v.visible = true;
   o2v.visible = true;
   
   if(o1.velocityX === 0)
   {
     o2.velocity.x = -5;
     o1.velocity.x = -5;
     o3.velocity.x = -15;
     o4.velocity.x = -5
     o1v.velocity.y = -6;
     o2v.velocity.y = -14;
   }

  
   if(o1.x < 40)
   {
     o1.velocityX = 5;
   }
  
   if(o1.x > 210)
   {
     o1.velocityX = -5;
   }
  
   if(o2.x < 300)
   {
     o2.velocityX = 5;
   }
  
   if(o2.x > 520)
   {
     o2.velocityX = -5;
   }
  
  
   if(o3.x < 45)
   {
     o3.velocityX = 15;
   }
  
   if(o3.x > 680)
   {
     o3.velocityX = -15;
   }
  
  
   if(o4.x < 45)
   {
     o4.velocityX = 15;
   }
  
   if(o4.x > 680)
   {
     o4.velocityX = -15;
   }
  
   
   if(o1v.y < 40)
   {
     o1v.velocityY = 6;
   }
  
   if(o1v.y > 210)
   {
     o1v.velocityY = -6;
   }
  
  
   if(o2v.y < 40)
   {
     o2v.velocityY = 14;
   }
  
   if(o2v.y > 510)
   {
     o2v.velocityY = -14;
   }

   //changing the gameState if the player touches the shock-plates..... 

   /*
   if(oo1.isTouching(o1))
   {
     cut.play();
     gameState = END;
   }

   if(oo1.isTouching(o2))
   {
     cut.play();
     gameState = END;
   }

   if(oo1.isTouching(o3))
   {
     cut.play();
     gameState = END;
   }

   if(oo1.isTouching(o4))
   {
     cut.play();
     gameState = END;
   }


   if(oo1.isTouching(o1v))
   {
     cut.play();
     gameState = END;
   }

   if(oo1.isTouching(o2v))
   {
     cut.play();
     gameState = END;
   }
   */

  
  //code for changing the place of PD210 for every minute......

  var command = Math.round(random(1,10));
  
  if(secondsOnes === 0 && secondsTens === 0 && minutesOnes === 0 && minutesTens === 0)
  {
      scoreReduce += 1;
  switch(command)
  {
    case 1 :if(p1.body.position.x !== 382)
            {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
            }
    break;
  
    case 2 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+20 , y:p1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-20 , y:p1.body.position.y+50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
            }
    break;
  
    case 3 :if(p1.body.position.x !== 689)
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-20 , y:p1.body.position.y-50});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
            }
    break;
  
    case 4 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+40 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+50 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+60 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+70 , y:p1.body.position.y-20});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-40 , y:p1.body.position.y-120});
            }
    break;
  
    case 5 :if(p1.body.position.x !== 180)
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-30 , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-30 , y:p1.body.position.y-120});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
            }
    break;
  
    case 6 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x-0 , y:p1.body.position.y-10});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
          }
    break;
  
    case 7 :if(p1.body.position.x !== 281)
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x+30 , y:p1.body.position.y-10});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }
    break;
  
    case 8 :if(p1.body.position.x !== 638)
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});            
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              
            }
    break;
  
    case 9 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:383, y:535});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
            }
    break;
  
    case 10 :if(p1.body.position.x !== 383)
             {
               Matter.Body.setPosition(p1.body, {x:383, y:535});
               Matter.Body.setPosition(v1.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v2.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v3.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v4.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v5.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v6.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v7.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v8.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v9.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v10.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v11.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v12.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v13.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v14.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v15.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-90});
               Matter.Body.setPosition(v16.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v17.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v18.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v19.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
               Matter.Body.setPosition(v20.body, {x:p1.body.position.x + 120 , y:p1.body.position.y-50});
             }else
             {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v2.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v3.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v4.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v5.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v6.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v7.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v8.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v9.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v10.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v11.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v12.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v13.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v14.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v15.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v16.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v17.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v18.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v19.body, {x:p1.body.position.x , y:p1.body.position.y-90});
              Matter.Body.setPosition(v20.body, {x:p1.body.position.x , y:p1.body.position.y-90});
             }
    break;
   }
  }

  //settings gameStates' button.....

  settingsss.mousePressed(()=>{
    if(moo === "on" && moo !== "off")
    {
        cliick.play();
    }
    gameState = SETTINGSS;
  });
  
  //all the key-inputs to move the main player sprites:
  
  if(keyDown(UP_ARROW) && spr1.body.velocity.y > -16)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:0, y:-0.001});
  }
  
  if(keyDown(LEFT_ARROW) && spr1.body.velocity.x > -16)
  {      
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:-0.0007, y:0});
  }
  
  if(keyDown(RIGHT_ARROW) && spr1.body.velocity.x < 16)
  {
    Matter.Body.applyForce(spr1.body, spr1.body.position, {x:0.0007, y:0});
  }
  
  if(frameCount % 20 === 0 && dpoo > 0)
  {
    dpoo--
  }
  
  //camera positions to focus the main player:
  
  camera.x = spr1.body.position.x;
  camera.y = spr1.body.position.y;

  //camera.x = windo.body.position.x;
  //camera.y = windo.body.position.y;
  
  //to decide if to display either left or right facing charecters for the main player sprite: 
  // dsjrd = Decide Still Jump Run Direction.
  // 1 === right ; 2 === left.
  
  if(spr1.body.velocity.x > 0)
  {
    dsjrd = 1;
  }
  
  if(spr1.body.velocity.x < 0)
  {
    dsjrd = 2;
  }
  
  //code for key-events..

  if(keyWentDown(32))
  {
    var bomB = new bomb(spr1.body.position.x, spr1.body.position.y, 5);
    
    if(dsjrd === 1)
    {
      bomB.throw(10,-3);
    }
   
    if(dsjrd === 2)
    {
      bomB.throw(-10,-3);
    } 
  
    bombs.push(bomB);
    //setTimeout(() => {bombs.pop(bomB);},1500);
    if(moo === "on" && moo !== "off")
    {
      bombThrow.play();
    }
    dpoo = 1;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    var bomB2 = new bomBS(spr1.body.position.x, spr1.body.position.y, 5);
    bombs2.push(bomB2);
    //setTimeout(() => {bombs2.pop(bomB2);},1500);
    dpoo = 1;
    if(moo === "on" && moo !== "off")
    {
      bomb2Throw.play();
    }
  }
    
  //bomb detection code..

  for(var i = 0; i < bombs.length ; i++)
  {
    bombs[i].blastFlameOn();
  
    if(detectNear(bombs[i], v1) && heroNearV(spr1, v1) && yes1 !== 1)
    {
      yes1 = 1;
      v1.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v2) && heroNearV(spr1, v2) && yes2 !== 1)
    {
      yes2 = 1;
      v2.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v3) && heroNearV(spr1, v3) && yes3 !== 1)
    {
      yes3 = 1;
      v3.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v4) && heroNearV(spr1, v4) && yes4 !== 1)
    {
      yes4 = 1;
      v4.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v5) && heroNearV(spr1, v5) && yes5 !== 1)
    {
      yes5 = 1;
      v5.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v6) && heroNearV(spr1, v6) && yes6 !== 1)
    {
      yes6 = 1;
      v6.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v7) && heroNearV(spr1, v7) && yes7 !== 1)
    {
      yes7 = 1;
      v7.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v8) && heroNearV(spr1, v8) && yes8 !== 1)
    {
      v8.over();
      yes8 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v9) && heroNearV(spr1, v9) && yes9 !== 1)
    {
      yes9 = 1;
      v9.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }  
    }
  
    if(detectNear(bombs[i], v10) && heroNearV(spr1, v10) && yes10 !== 1)
    {
      yes10 = 1;
      v10.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v11) && heroNearV(spr1, v11) && yes11 !== 1)
    {
      yes11 = 1;
      v11.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v12) && heroNearV(spr1, v12) && yes12 !== 1)
    {
      yes12 = 1;
      v12.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v13) && heroNearV(spr1, v13) && yes13 !== 1)
    {
      yes13 = 1;
      v13.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v14) && heroNearV(spr1, v14) && yes14 !== 1)
    {
      yes14 = 1;
      v14.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v15) && heroNearV(spr1, v15) && yes15 !== 1)
    {
      yes15 = 1;
      v15.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v16) && heroNearV(spr1, v16) && yes16 !== 1)
    {
      yes16 = 1;
      v16.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v17) && heroNearV(spr1, v17) && yes17 !== 1)
    {
      yes17 = 1;
      v17.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v18) && heroNearV(spr1, v18) && yes18 !== 1)
    {
      yes18 = 1;
      v18.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs[i], v19) && heroNearV(spr1, v19) && yes19 !== 1)
    {
      yes19 = 1;
      v19.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }  
    }
  
    if(detectNear(bombs[i], v20) && heroNearV(spr1, v20) && yes20 !== 1)
    {
      yes20 = 1;
      v20.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  }
  
  //bomb detection code..

  for(var i = 0; i < bombs2.length ; i++)
  {
    bombs2[i].blastFlameOn();
  
    if(detectNear(bombs2[i], v1) && heroNearV(spr1, v1) && yes1 !== 1)
    {
      v1.over();
      yes1 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v2) && heroNearV(spr1, v2) && yes2 !== 1)
    {
      v2.over();
      yes2 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v3) && heroNearV(spr1, v3) && yes3 !== 1)
    {
      v3.over();
      yes3 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v4) && heroNearV(spr1, v4) && yes4 !== 1)
    {
      v4.over();
      yes4 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v5) && heroNearV(spr1, v5) && yes5 !== 1)
    {
      v5.over();
      yes5 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v6) && heroNearV(spr1, v6) && yes6 !== 1)
    {
      v6.over();
      yes6 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v7) && heroNearV(spr1, v7) && yes7 !== 1)
    {
      v7.over();
      yes7 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v8) && heroNearV(spr1, v8) && yes8 !== 1)
    {
      v8.over();
      yes8 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v9) && heroNearV(spr1, v9) && yes9 !== 1)
    {
      v9.over();
      yes9 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v10) && heroNearV(spr1, v10) && yes10 !== 1)
    {
      v10.over();
      yes10 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v11) && heroNearV(spr1, v11) && yes11 !== 1)
    {
      v11.over();
      yes11 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v12) && heroNearV(spr1, v12) && yes12 !== 1)
    {
      v12.over();
      yes12 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v13) && heroNearV(spr1, v13) && yes13 !== 1)
    {
      v13.over();
      yes13 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v14) && heroNearV(spr1, v14) && yes14 !== 1)
    {
      v14.over();
      yes14 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v15) && heroNearV(spr1, v15) && yes15 !== 1)
    {
      v15.over();
      yes15 = 1;
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v16) && heroNearV(spr1, v16) && yes16 !== 1)
    {
      yes16 = 1;
      v16.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v17) && heroNearV(spr1, v17) && yes17 !== 1)
    {
      yes17 = 1;
      v17.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v18) && heroNearV(spr1, v18) && yes18 !== 1)
    {
      yes18 = 1;
      v18.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v19) && heroNearV(spr1, v19) && yes19 !== 1)
    {
      yes19 = 1;
      v19.over();
        if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(detectNear(bombs2[i], v20) && heroNearV(spr1, v20) && yes20 !== 1)
    {
      yes20 = 1;
      v20.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  }
  
  //local variables for the position tracking of player by the robots.......

  ddx1 = spr1.body.position.x - v1.body.position.x;
  ddy1 = spr1.body.position.y - v1.body.position.y;
  
  ddx2 = spr1.body.position.x - v2.body.position.x;
  ddy2 = spr1.body.position.y - v2.body.position.y;
  
  ddx3 = spr1.body.position.x - v3.body.position.x;
  ddy3 = spr1.body.position.y - v3.body.position.y;
  
  ddx4 = spr1.body.position.x - v4.body.position.x;
  ddy4 = spr1.body.position.y - v4.body.position.y;
  
  ddx5 = spr1.body.position.x - v5.body.position.x;
  ddy5 = spr1.body.position.y - v5.body.position.y;
  
  ddx6 = spr1.body.position.x - v6.body.position.x;
  ddy6 = spr1.body.position.y - v6.body.position.y;
  
  ddx7 = spr1.body.position.x - v7.body.position.x;
  ddy7 = spr1.body.position.y - v7.body.position.y;
  
  ddx8 = spr1.body.position.x - v8.body.position.x;
  ddy8 = spr1.body.position.y - v8.body.position.y;
  
  ddx9 = spr1.body.position.x - v9.body.position.x;
  ddy9 = spr1.body.position.y - v9.body.position.y;
  
  ddx10 = spr1.body.position.x - v10.body.position.x;
  ddy10 = spr1.body.position.y - v10.body.position.y;
  
  ddx11 = spr1.body.position.x - v11.body.position.x;
  ddy11 = spr1.body.position.y - v11.body.position.y;
  
  ddx12 = spr1.body.position.x - v12.body.position.x;
  ddy12 = spr1.body.position.y - v12.body.position.y;
  
  ddx13 = spr1.body.position.x - v13.body.position.x;
  ddy13 = spr1.body.position.y - v13.body.position.y;
  
  ddx14 = spr1.body.position.x - v14.body.position.x;
  ddy14 = spr1.body.position.y - v14.body.position.y;
  
  ddx15 = spr1.body.position.x - v15.body.position.x;
  ddy15 = spr1.body.position.y - v15.body.position.y;
  
  ddx16 = spr1.body.position.x - v16.body.position.x;
  ddy16 = spr1.body.position.y - v16.body.position.y;
  
  ddx17 = spr1.body.position.x - v17.body.position.x;
  ddy17 = spr1.body.position.y - v17.body.position.y;
  
  ddx18 = spr1.body.position.x - v18.body.position.x;
  ddy18 = spr1.body.position.y - v18.body.position.y;
  
  ddx19 = spr1.body.position.x - v19.body.position.x;
  ddy19 = spr1.body.position.y - v19.body.position.y;
  
  ddx20 = spr1.body.position.x - v20.body.position.x;
  ddy20 = spr1.body.position.y - v20.body.position.y;
  
  //code for the robot chasing the main player..
  
  if(heroNearV(spr1, v1))
  {
    Matter.Body.applyForce(v1.body, spr1.body.position, {x: ddx1/6500 , y: ddy1/6500});
  }else{}
      
  
  if(heroNearV(spr1, v2))
  {
    Matter.Body.applyForce(v2.body, spr1.body.position, {x: ddx2/6500 , y: ddy2/6500});
  }else{}
  
  
  if(heroNearV(spr1, v3))
  {
    Matter.Body.applyForce(v3.body, spr1.body.position, {x: ddx3/6500 , y: ddy3/6500});
  }else{}
  
  
  if(heroNearV(spr1, v4))
  {
    Matter.Body.applyForce(v4.body, spr1.body.position, {x: ddx4/6500 , y: ddy4/6500});
  }else{}
  
  
  if(heroNearV(spr1, v5))
  {
    Matter.Body.applyForce(v5.body, spr1.body.position, {x: ddx5/6500 , y: ddy5/6500});
  }else{}
  
  
  if(heroNearV(spr1, v6))
  {
    Matter.Body.applyForce(v6.body, spr1.body.position, {x: ddx6/6500 , y: ddy6/6500});
  }else{}
  
  
  if(heroNearV(spr1, v7))
  {
    Matter.Body.applyForce(v7.body, spr1.body.position, {x: ddx7/6500 , y: ddy7/6500});
  }else{}
  
  
  if(heroNearV(spr1, v8))
  {
    Matter.Body.applyForce(v8.body, spr1.body.position, {x: ddx8/6500 , y: ddy8/6500});
  }else{}
  
  
  if(heroNearV(spr1, v9))
  {
    Matter.Body.applyForce(v9.body, spr1.body.position, {x: ddx9/6500 , y: ddy9/6500});
  }else{}
  
  
  if(heroNearV(spr1, v10))
  {
    Matter.Body.applyForce(v10.body, spr1.body.position, {x: ddx10/6500 , y: ddy10/6500});
  }else{}
  
  
  if(heroNearV(spr1, v11))
  {
    Matter.Body.applyForce(v11.body, spr1.body.position, {x: ddx11/6500 , y: ddy11/6500});
  }else{}
  
  
  if(heroNearV(spr1, v12))
  {
    Matter.Body.applyForce(v12.body, spr1.body.position, {x: ddx12/6500 , y: ddy12/6500});
  }else{}
  
  
  if(heroNearV(spr1, v13))
  {
    Matter.Body.applyForce(v13.body, spr1.body.position, {x: ddx13/6500 , y: ddy13/6500});
  }else{}
  
  
  if(heroNearV(spr1, v14))
  {
    Matter.Body.applyForce(v14.body, spr1.body.position, {x: ddx14/6500 , y: ddy14/6500});
  }else{}
  
  
  if(heroNearV(spr1, v15))
  {
    Matter.Body.applyForce(v15.body, spr1.body.position, {x: ddx15/6500 , y: ddy15/6500});
  }else{}
  
  if(heroNearV(spr1, v16))
  {
    Matter.Body.applyForce(v16.body, spr1.body.position, {x: ddx16/6500 , y: ddy16/6500});
  }else{}
  
  
  if(heroNearV(spr1, v17))
  {
    Matter.Body.applyForce(v17.body, spr1.body.position, {x: ddx17/6500 , y: ddy17/6500});
  }else{}
  
  
  if(heroNearV(spr1, v18))
  {
    Matter.Body.applyForce(v18.body, spr1.body.position, {x: ddx18/6500 , y: ddy18/6500});
  }else{}
  
  
  if(heroNearV(spr1, v19))
  {
    Matter.Body.applyForce(v19.body, spr1.body.position, {x: ddx19/6500 , y: ddy19/6500});
  }else{}
  
  
  if(heroNearV(spr1, v20))
  {
    Matter.Body.applyForce(v20.body, spr1.body.position, {x: ddx20/6500 , y: ddy20/6500});
  }else{}
  
  for(var i = 0; i < rlls.length; i++)
  {
    x1x = spr1.body.position.x - rlls[i].body.position.x; 
    y1y = spr1.body.position.y - rlls[i].body.position.y;
    Matter.Body.applyForce(rlls[i].body, spr1.body.position, {x : x1x/14000, y : y1y/14000});
    rlls[i].display();
  }
  
  //code for collision detection of prize and player....

  if(heroWin(p1, spr1))
  {
    setTimeout(()=>{ Matter.Body.setPosition(p1.body, {x: 1000 , y: 1000}) }, 100);

    if(scoreReduce === 0)
    {
      score = score + ( (secondsTens+1)*200 )
    }else if(scoreReduce === 1)
    {
      score = score + ( ((secondsTens+1)*200)/0.5 )
    }else
    {
      score = score + ( ((secondsTens+1)*200)/scoreReduce )
    }

    if(moo === "on" && moo !== "off")
    {
      pTouch.play();
    }

    if(difficulty === "easy")
    {
      minutesOnes = 0;
      secondsOnes = 0;
      secondsTens = 6;
    }

    if(difficulty === "medium")  
    {
      minutesOnes = 0;
      secondsOnes = 0;
      secondsTens = 5;
    }

    if(difficulty === "hard")
    {
      minutesOnes = 0;
      secondsOnes = 0;
      secondsTens = 4;
    }
    p1d = 1;
    finale = 1;
  }
  
  
  if(finale === 1)
  { 
    
    if(yesS1 === 0)
    {
      World.add(world, sv1.body);
    }
    
    if(yesS2 === 0)
    {
      World.add(world, sv2.body);
    }
    
    if(yesS3 === 0)
    {
      World.add(world, sv3.body);
    }
    
    if(yesS4 === 0)
    {
      World.add(world, sv4.body);
    }

    if(yesS5 === 0 && difficulty !== "easy")
    {
      World.add(world, sv5.body);
    }

    if(difficulty === "easy")
    {
       yesS5 = 1;
    }
  
    sv1.display();
    sv2.display();
    sv3.display();
    sv4.display();

    if(difficulty !== "easy")
    {
      sv5.display();
    }
  
    sv1.hover();
    sv2.hover();
    sv3.hover();
    sv4.hover();

    if(difficulty !== "easy")
    {
      sv5.hover();
    } 

    for(var i = 0 ; i<bombs.length ; i++)
    {
      if(detectNearS(bombs[i], sv1) && yesS1 !== 1)
      {
        sv1.over();
        yesS1 = 1;
        if(moo === "on" && moo !== "off")
        {
            svBurst.play();
        }
      }
    
      if(detectNearS(bombs[i], sv2) && yesS2 !== 1)
      {
        sv2.over();
        yesS2 = 1;
        if(moo === "on" && moo !== "off")
        {
            svBurst.play();
        }
      }
    
      if(detectNearS(bombs[i], sv3) && yesS3 !== 1)
      {
        sv3.over();
        yesS3 = 1;
        if(moo === "on" && moo !== "off")
        {
            svBurst.play();
        }
      }
    
      if(detectNearS(bombs[i], sv4) && yesS4 !== 1)
      {
        sv4.over();
        yesS4 = 1;
        if(moo === "on" && moo !== "off")
        {
            svBurst.play();
        }
      }
  
      if(detectNearS(bombs[i], sv5) && yesS5 !== 1)
      {
        sv5.over();
        yesS5 = 1;
        if(moo === "on" && moo !== "off")
        {
            svBurst.play();
        }
      }
    }

    door.visible = true; 

    //removing undestroyed robots when the player touches the prize....

    if(yes1 === 0)
    {
      yes1 = 1;
      v1.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes2 === 0)
    {
      yes2 = 1;
      v2.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes3 === 0)
    {
      yes3 = 1;
      v3.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes4 === 0)
    {
      yes4 = 1;
      v4.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes5 === 0)
    {
      yes5 = 1;
      v5.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes6 === 0)
    {
      yes6 = 1;
      v6.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes7 === 0)
    {
      yes7 = 1;
      v7.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes8 === 0)
    {
      yes8 = 1;
      v8.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes9 === 0)
    {
      yes9 = 1;
      v9.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes10 === 0)
    {
      yes10 = 1;
      v10.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes11 === 0)
    {
      yes11 = 1;
      v11.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes12 === 0)
    {
      yes12 = 1;
      v12.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes13 === 0)
    {
      yes13 = 1;
      v13.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes14 === 0)
    {
      yes14 = 1;
      v14.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes15 === 0)
    {
      yes15 = 1;
      v15.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes16 === 0)
    {
      yes16 = 1;
      v16.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes17 === 0)
    {
      yes17 = 1;
      v17.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes18 === 0)
    {
      yes18 = 1;
      v18.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes19 === 0)
    {
      yes19 = 1;
      v19.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
  
    if(yes20 === 0)
    {
      yes20 = 1;
      v20.over();
      if(moo === "on" && moo !== "off")
      {
        vBurst.play();
      }
    }
    
  sddx1 = spr1.body.position.x - sv1.body.position.x;
  sddy1 = spr1.body.position.y - sv1.body.position.y;
  
  sddx2 = spr1.body.position.x - sv2.body.position.x;
  sddy2 = spr1.body.position.y - sv2.body.position.y;
  
  sddx3 = spr1.body.position.x - sv3.body.position.x;
  sddy3 = spr1.body.position.y - sv3.body.position.y;
  
  sddx4 = spr1.body.position.x - sv4.body.position.x;
  sddy4 = spr1.body.position.y - sv4.body.position.y;
  
  sddx5 = spr1.body.position.x - sv5.body.position.x;
  sddy5 = spr1.body.position.y - sv5.body.position.y;
  
  if(heroNearsV(spr1, sv1) && yesS1 !== 1)
  {
    Matter.Body.applyForce(sv1.body, spr1.body.position, {x: sddx1/9000 , y: sddy1/9000});
    rL = new roboLaser(sv1.body.position.x, sv1.body.position.y, 6);
    rlls.push(rL);
    /*if(rL.display())
    {
      setTimeout(()=>{rlls.pop(rL);}, 2000);
    }*/  
  }
  
  if(heroNearsV(spr1, sv2) && yesS2 !== 1)
  {
    Matter.Body.applyForce(sv2.body, spr1.body.position, {x: sddx2/9000 , y: sddy2/9000});
    rL = new roboLaser(sv2.body.position.x, sv2.body.position.y, 6);
    rlls.push(rL);
    /*if(rL.display())
    {
      setTimeout(()=>{rlls.pop(rL);}, 2000);
    }*/  
  }
  
  if(heroNearsV(spr1, sv3) && yesS3 !== 1)
  {
    Matter.Body.applyForce(sv3.body, spr1.body.position, {x: sddx3/9000 , y: sddy3/9000});
    rL = new roboLaser(sv3.body.position.x, sv3.body.position.y, 6);
    rlls.push(rL);
    /*if(rL.display())
    {
      setTimeout(()=>{rlls.pop(rL);}, 2000);
    }*/  
  }
  
  if(heroNearsV(spr1, sv4) && yesS4 !== 1)
  {
    Matter.Body.applyForce(sv4.body, spr1.body.position, {x: sddx4/9000 , y: sddy4/9000});
    rL = new roboLaser(sv4.body.position.x, sv4.body.position.y, 6);
    rlls.push(rL);
    /*if(rL.display())
    {
      setTimeout(()=>{rlls.pop(rL);}, 2000);
    }*/  
  }
  
  if(heroNearsV(spr1, sv5) && yesS5 !== 1)
  {
    Matter.Body.applyForce(sv5.body, spr1.body.position, {x: sddx5/9000 , y: sddy5/9000});
    rL = new roboLaser(sv4.body.position.x, sv4.body.position.y, 6);
    rlls.push(rL);
    /*if(rL.display())
    {
      setTimeout(()=>{rlls.pop(rL);}, 2000);
    }*/  
  }
  
  if(secondsOnes === 0 && secondsTens === 0)
  {
    lastExplode.visible = true;
    if(frameCount % 10 === 0 && lastExplode.scale < 30)
    {
      lastExplode.scale += 10;
    }
    
    setTimeout(()=>{gameState = END},350);
  }

  if(oo1.isTouching(door))
  {
    winn = 1;
    score = score +  (secondsTens+1)*150
    gameState = END;
  }
  }
  
    
  }

  if(gameState === END)
  {
    timeer.hideer();
    timeer.hiide();
    door.visible = false;
    lastExplode.visible = false;
     
    baack.hide();
    logo.visible = false;
    intro.visible = false;
    bgg.visible = false;
    o1.visible = false;
    o2.visible = false;
    o3.visible = false;
    o4.visible = false;
    o1v.visible = false;
    o2v.visible = false;
    o1.velocityX = 0;
    o2.velocityX = 0;
    o3.velocityX = 0;
    o4.velocityX = 0;
    o1v.velocityY = 0;
    o2v.velocityY = 0;
    bgC = rgb(0,0,0);
    SSoundOOff.hide();
    SSoundOOn.hide();
    textFont('Courier new');
    textSize(20);
    fill("#02F702");

    if(winn === 0)
    {
      if(frameCount % 10 === 0 && lettC < 19)
      {
        lettC++;
        if(moo === "on" && lettC > 2)
        {
          intBeepr.play();
        }
      }
  
      if(lettC > 2)
      {
          text("y",50, 50);
      }
  
      if(lettC > 3)
      {
          text("o",60, 50);
      }
  
      if(lettC > 4)
      {
          text("u",70, 50);
      }
  
      if(lettC > 5)
      {
          text("l",90, 50);
      }
  
      if(lettC > 6)
      {
          text("o",100, 50);
      }
  
      if(lettC > 7)
      {
          text("s",110, 50);
      }
  
      if(lettC > 8)
      {
          text("e",120, 50);
      }
  
      if(lettC > 9)
      {
          text("_",130, 50);
      }

      if(lettC > 10)
      {
          text("s",50, 100);
      }

      if(lettC > 11)
      {
          text("c",60, 100);
      }

      if(lettC > 12)
      {
          text("o",70, 100);
      }

      if(lettC > 13)
      {
          text("r",80.6, 100);
      }

      if(lettC > 14)
      {
          text("e",90, 100);
      }

      if(lettC > 15)
      {
          text(":",100, 100);
      }

      if(lettC > 16)
      {
          text(score, 120, 100);
      }

      if(lettC > 17)
      {
          restartt.show();
          mennu.show();
      }

      if(lettC < 17)
      {
          restartt.hide();
          mennu.hide();
      }

      camera.x = 714/2;
      camera.y = 714/2;
    }
  
  
    if(winn === 1)
    {
      if(frameCount % 15 === 0 && lettC < 18)
      {
        lettC++;
        if(moo === "on" && lettC > 2)
        {
          intBeepr.play();
        }
      }
  
      if(lettC > 2)
      {
          text("y",50, 50);
      }
  
      if(lettC > 3)
      {
          text("o",60, 50);
      }
  
      if(lettC > 4)
      {
          text("u",70, 50);
      }
  
      if(lettC > 5)
      {
          text("w",90, 50);
      }
  
      if(lettC > 6)
      {
          text("i",105, 50);
      }
  
      if(lettC > 7)
      {
          text("n",110, 50);
      }
  
      if(lettC > 8)
      {
          text("_",120, 50);
      }

      if(lettC > 9)
      {
          text("s",50, 100);
      }

      if(lettC > 10)
      {
          text("c",60, 100);
      }

      if(lettC > 11)
      {
          text("o",70, 100);
      }

      if(lettC > 12)
      {
          text("r",80.6, 100);
      }

      if(lettC > 13)
      {
          text("e",90, 100);
      }

      if(lettC > 14)
      {
          text(":",100, 100);
      }

      if(lettC > 15)
      {
          text(score,120, 100);
      }

      if(lettC > 16)
      {
          restartt.show();
          mennu.show();
      }

      if(lettC < 16)
      {
          restartt.hide();
          mennu.hide();
      }

      camera.x = 714/2;
      camera.y = 714/2;
    }

    restartt.mousePressed(()=>{
      reset();
    });

    mennu.mousePressed(()=>{
      gameState = DIFFISELECT;
    });
  
  }
  
  if(gameState === SETTINGSS)
  {
    resumee.show();
    settingsss.hide();
    nameInput.hide();
    enter.hide();
    mennu.show();
    restartt.show();
    o1.visible = false;
    o2.visible = false;
    o3.visible = false;
    o4.visible = false;
    o1v.visible = false;
    o2v.visible = false;
    EEasy.hide();
    MMedium.hide();
    HHard.hide();

    if(door.visible === true)
    {
      door.visible = false;
    }
  
    if(moo === "on")
    {
      SSoundOOff.hide();
      SSoundOOn.show();
    }else if(moo === "off")
    {
      SSoundOOn.hide();
      SSoundOOff.show();
    }
  
    SSoundOOff.mousePressed(()=>{
      moo = "on";
      gameState = PLAY;
    });
  
    SSoundOOn.mousePressed(()=>{
      moo = "off";
      gameState = PLAY;
    });
  
    o1.velocityX = 0;
    o2.velocityX = 0;
    o3.velocityX = 0;
    o4.velocityX = 0;
    o1v.velocityY = 0;
    o2v.velocityY = 0;
  
    camera.x = 714/2;
    camera.y = 714/2;
  
    resumee.mousePressed(()=>{
      gameState = PLAY;
    });

    restartt.mousePressed(()=>{
       reset();
    });

    mennu.mousePressed(()=>{
      gameState = ASKK;
    });
  }
}


function detectNear(ob1, ob2)
{
  //increasing the minus value will reduce the possibility of the detection between bombs and the villian robot.
  if( (Math.sqrt( 
    ( (ob1.body.position.x-ob2.body.position.x)*(ob1.body.position.x-ob2.body.position.x) )
    +  
    ( (ob1.body.position.y-ob2.body.position.y)*(ob1.body.position.y-ob2.body.position.y) )
    ) ) < ( (ob1.radius + ob2.radius)+ 10)
    )
  {
    return true;
  }else
  {
    return false;
  }
}

function detectNearS(obs1, obs2)
{
  //increasing the minus value will reduce the possibility of the detection between bombs and the villian robot.
  if( (Math.sqrt( 
    ( (obs1.body.position.x-obs2.body.position.x)*(obs1.body.position.x-obs2.body.position.x) )
    +  
    ( (obs1.body.position.y-obs2.body.position.y)*(obs1.body.position.y-obs2.body.position.y) )
    ) ) < ( (obs1.radius + obs2.radius)-1 )
    ) 
  {
    return true;
  }else
  {
    return false;
  }
}

function heroNearV(ob11, ob22)
{
  //increasing the plus value will lead to expansion of the triggering radius for the villain robot to follow the main hero.
  if((Math.sqrt(((ob11.body.position.x - ob22.body.position.x)*(ob11.body.position.x - ob22.body.position.x)) + ((ob11.body.position.y - ob22.body.position.y)*(ob11.body.position.y - ob22.body.position.y)))) < ((ob11.radius + ob22.radius)+30))
  {
    return true;
  }else
  {
    return false;
  }
}

function heroNearsV(ob111, ob222)
{
  //increasing the plus value will lead to expansion of the triggering radius for the villain robot to follow the main hero.
  if((Math.sqrt(((ob111.body.position.x - ob222.body.position.x)*(ob111.body.position.x - ob222.body.position.x)) + ((ob111.body.position.y - ob222.body.position.y)*(ob111.body.position.y - ob222.body.position.y)))) < ((ob111.radius + ob222.radius)+60))
  {
    return true;
  }else
  {
    return false;
  }
}

function heroWin(ob11, ob22)
{
  //increasing the plus value will lead to expansion of the triggering radius for the villain robot to follow the main hero.
  if((Math.sqrt(((ob11.body.position.x - ob22.body.position.x)*(ob11.body.position.x - ob22.body.position.x)) + ((ob11.body.position.y - ob22.body.position.y)*(ob11.body.position.y - ob22.body.position.y)))) < ((ob11.radius + ob22.radius)))
  {
    return true;
  }else
  {
    return false;
  }
}

function obsDetect(rect1, rect2)
{
  if (rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y) 
  {
    return true;
  }else
  {
    return false;
  }
}


function reset()
{
  Matter.Body.setPosition(spr1.body, {x:500 , y:200});
  score = 0;
  minutesOnes = 0;
  minutesTens = 0;
  secondsOnes = 1;
  secondsTens = 0;
  p1d = 0;
  lettC = 0;
  finale = 0;
  winn = 0;
  lastExplode.scale = 20;
  scoreReduce = 0;
  gameState = PLAY;

  var switchh = Math.round(random(1, 6));

  switch(switchh)
  {
    case 1 :door.x = 690;           
            door.y = 635;
    break;

    case 2 :door.x = 485;
            door.y = 125;
    break;

    case 3 :door.x = 536;
            door.y = 431;
    break;

    case 4 :door.x = 332;
            door.y = 635;
    break;

    case 5 :door.x = 77;
            door.y = 175;
    break;

    case 6 :door.x = 685;
            door.y = 24;
    break;

    default : break;
  }

    Matter.Body.setPosition(sv1.body, {x: door.x+10 , y: door.y});
    Matter.Body.setPosition(sv2.body, {x: door.x-10 , y: door.y});
    Matter.Body.setPosition(sv3.body, {x: door.x , y: door.y});
    Matter.Body.setPosition(sv4.body, {x: door.x , y: door.y-10});
    Matter.Body.setPosition(sv5.body, {x: door.x , y: door.y+10});

  if(yes1 === 1)
  {
    yes1 = 0;
    v1.added();
  }

  if(yes2 === 1)
  {
    yes2 = 0;
    v2.added();
  }

  if(yes3 === 1)
  {
    yes3 = 0;
    v3.added();
  }

  if(yes4 === 1)
  {
    yes4 = 0;
    v4.added();
  }

  if(yes5 === 1)
  {
    yes5 = 0;
    v5.added();
  }

  if(yes6 === 1)
  {
    yes6 = 0;
    v6.added();
  }

  if(yes7 === 1)
  {
    yes7 = 0;
    v7.added();
  }

  if(yes8 === 1)
  {
    yes8 = 0;
    v8.added();
  }

  if(yes9 === 1)
  {
    yes9 = 0;
    v9.added();
  }

  if(yes10 === 1)
  {
    yes10 = 0;
    v10.added();
  }

  if(yes11 === 1)
  {
    yes11 = 0;
    v11.added();
  }

  if(yes12 === 1)
  {
    yes12 = 0;
    v12.added();
  }

  if(yes13 === 1)
  {
    yes13 = 0;
    v13.added();
  }

  if(yes14 === 1)
  {
    yes14 = 0;
    v14.added();
  }

  if(yes15 === 1)
  {
    yes15 = 0;
    v15.added();
  }

  if(yes16 === 1)
  {
    yes16 = 0;
    v16.added();
  }

  if(yes17 === 1)
  {
    yes17 = 0;
    v17.added();
  }

  if(yes18 === 1)
  {
    yes18 = 0;
    v18.added();
  }

  if(yes19 === 1)
  {
    yes19 = 0;
    v19.added();
  }

  if(yes20 === 1)
  {
    yes20 = 0;
    v20.added();
  }


  if(yesS1 === 1)//
  {
    yesS1 = 0;
    sv1.added();
  }

  if(yesS2 === 1)//
  {
    yesS2 = 0;
    sv2.added();
  }

  if(yesS3 === 1)//
  {
    yesS3 = 0;
    sv3.added();
  }

  if(yesS4 === 1)//
  {
    yesS4 = 0;
    sv4.added();
  }

  if(yesS5 === 1)//
  {
    yesS5 = 0;
    sv5.added();
  }

  var command = Math.round(random(1,10));

  switch(command)
  {
    case 1 :if(p1.body.position.x !== 382)
            {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 2 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:80});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 3 :if(p1.body.position.x !== 689)
            {
              Matter.Body.setPosition(p1.body, {x:689 ,y:333});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 4 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:435});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }-30
    break;
  
    case 5 :if(p1.body.position.x !== 180)
            {
              Matter.Body.setPosition(p1.body, {x:180 ,y:637});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 6 :if(p1.body.position.x !== 280)
            {
              Matter.Body.setPosition(p1.body, {x:280 ,y:129});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
          }
    break;
  
    case 7 :if(p1.body.position.x !== 281)
            {
              Matter.Body.setPosition(p1.body, {x:281 ,y:332});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 8 :if(p1.body.position.x !== 638)
            {
              Matter.Body.setPosition(p1.body, {x:638 ,y:485});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});            
            }else
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              
            }
    break;
  
    case 9 :if(p1.body.position.x !== 26)
            {
              Matter.Body.setPosition(p1.body, {x:26 ,y:435});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }else
            {
              Matter.Body.setPosition(p1.body, {x:383, y:535});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
            }
    break;
  
    case 10 :if(p1.body.position.x !== 383)
             {
               Matter.Body.setPosition(p1.body, {x:383, y:535});
               Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
               Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
             }else
             {
              Matter.Body.setPosition(p1.body, {x:382 ,y:690});
              Matter.Body.setPosition(v1.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v2.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v3.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v4.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v5.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v6.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v7.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v8.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v9.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v10.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v11.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v12.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v13.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v14.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v15.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v16.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v17.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v18.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v19.body, {x:spr1.body.position.x , y:spr1.body.position.y});
              Matter.Body.setPosition(v20.body, {x:spr1.body.position.x , y:spr1.body.position.y});
             }
    break;
   }
}


