var bg,bgImg;

var taylororig;
var taylor1spri;

var vidatay = 100;

var vidaye = 100;

var taymic;
var taylostmic;

var katy;
var katyspri;

var joejoimg;
var nickjoimg
var kevinjoimg;
var joespri;
var nickspri;
var kevinspri;

var kanyeimg;
var kanyespri;

var startbuimg;
var startbu;

var solo;

var flagmic = 0;
var mic;
var micimg;

var flagnick = 0;
var flagjoe = 0;
var flagkevin = 0;

var vmaimg;
var vmaspri;

var winimg;
var loseimg;
var losespri;
var winspri;

//var vmagroup;



function preload(){
  

  bgImg = loadImage("images/bg jogo taylor.png");
  
  taylororig = loadAnimation("images/taylor inicio.png");

  taymic = loadAnimation ("images/taylor w mic.png");

  taylostmic = loadAnimation ("images/taylor throwmic.png");
  
  katy = loadImage ("images/katy monstra again.png");

  loseimg = loadImage ("images/perdeuhaha.png");

  winimg = loadImage ("images/venceuyay.png");

  joejoimg = loadImage ("images/joe jonas nhoc.png");
  nickjoimg = loadImage ("images/nick jonas nhoc.png");
  kevinjoimg = loadImage ("images/kevin jonas nhoc.png");

  kanyeimg = loadImage ("images/kanye monstro.png");

  startbuimg = loadImage ("images/startbu.png");

  micimg = loadAnimation ("images/microt0.png");

  microt = loadAnimation ("images/microt0.png", "images/microt1.png", "images/microt2.png", "images/microt3.png");
  
  vmaimg = loadImage ("images/vmatrophy.png");


}

function setup() {

  
  createCanvas(windowWidth,windowHeight);


  taylor1spri = createSprite (200, 490, 20, 20);
  taylor1spri.addAnimation ("origtay", taylororig);
  taylor1spri.addAnimation ("taymic", taymic);
  taylor1spri.addAnimation ("taylostmic", taylostmic);
  taylor1spri.scale = 0.9;

  katyspri = createSprite (900, -200);
  katyspri.addImage (katy);
  katyspri.scale = 0.7;

  joespri = createSprite (650, -200);
  joespri.addImage (joejoimg);
  joespri.scale = 0.8;
  //
  nickspri = createSprite (850, -200);
  nickspri.addImage (nickjoimg);
  nickspri.scale = 0.9;
  //
  kevinspri = createSprite (1050, -200);
  kevinspri.addImage (kevinjoimg);
  kevinspri.scale = 0.8;

  kanyespri = createSprite (900, -200);
  kanyespri.addImage (kanyeimg);
  kanyespri.scale = 0.9;

  startbu = createSprite (700, 350);
  startbu.addImage (startbuimg);
  startbu.scale = 0.9;

  solo = createSprite (width/2, height- 30, 2000, 20);


  vmaspri = createSprite (850, 500);
  vmaspri.addImage (vmaimg);
  vmaspri.scale = 0.4;
  vmaspri.visible = false;

  winspri = createSprite (700, 250);
  winspri.addImage (winimg);
  winspri.scale = 0.4;
  winspri.visible = false;

  losespri = createSprite (700, 250);
  losespri.addImage (loseimg);
  losespri.scale = 0.3;
  losespri.visible = false;

  //vmagroup = new Group ();


  
}

function draw() {
  background(bgImg); 
  solo.visible = false;

  
  katyspri.debug = false;
  katyspri.setCollider ("rectangle", 0, 0, 400, 400);

  
  taylor1spri.setCollider ("rectangle", 0,0, 200, 300);
  taylor1spri.debug = false;

  if (mousePressedOver (startbu) || keyCode == 13){
    startbu.visible = false;
    katyspri.velocityY = 12;

  }
  
  if (taylor1spri.collide (solo) && keyDown ("UP_ARROW")){
    taylor1spri.velocityY = -21;  
  }
  taylor1spri.velocityY += 0.8;


  if (keyDown ("LEFT_ARROW") && taylor1spri.x > 90){
    taylor1spri.x -= 10;
  }

  if (keyDown ("RIGHT_ARROW") && taylor1spri.x < 500){
    taylor1spri.x += 10;
  }

  if (katyspri.collide (solo) && flagmic == 0){
    mic = createSprite (520, 575);
    mic.addAnimation ("mic", micimg);
    mic.addAnimation ("rot", microt );


    mic.scale = 0.4;

    mic.setCollider ("rectangle", 0, 0, 200, 200);

    flagmic = 1;
  }

  if (keyDown ("SPACE")){
    taylor1spri.changeAnimation ("taylostmic");
    mic.visible = true;
    mic.x = taylor1spri.x + 150;
    mic.y = taylor1spri.y;
    mic.changeAnimation ("rot");
    mic.velocityX = 20;
  
    }

  if (mic){
    if (taylor1spri.isTouching (mic)){
      taylor1spri.changeAnimation ("taymic");
      mic.visible = false;
      mic.x = -4334;
        }
    if (mic.isTouching (katyspri)){
   katyspri.velocityX = 20;
   joespri.velocityY = 12;
   kevinspri.velocityY = 12;
   nickspri.velocityY = 12;
  
   flagmic = 0;
  if (mic.x > 1600){
    mic.destroy ();
    katyspri.destroy ();
  }
 
      }

  if (joespri.isTouching (mic)){
    joespri.velocityX = 20;
  }

  if (joespri.x > 1600 && joespri.x < 1700){
   //joespri.destroy ();
   mic.destroy ();
   flagmic = 0;
   flagjoe = 1;
  }

  if (flagjoe == 1 && nickspri.isTouching (mic)){
    nickspri.velocityX = 20;
  }

  if (nickspri.x > 1600 && nickspri.x < 1700){
   // nickspri.destroy ();
    mic.destroy ();
    flagmic = 0;
    flagnick = 1;
   }

  if (flagjoe == 1 && flagnick == 1 && kevinspri.isTouching (mic)){
    kevinspri.velocityX = 20;
  }

  if (kevinspri.x > 1600 && kevinspri.x < 1700){
   // kevinspri.destroy ();
    mic.destroy ();
    flagmic = 0;
    flagkevin = 1;
   }

   if (mic.isTouching (kanyespri)){
    vidaye -= 30;
    mic.destroy ();

    mic = createSprite (470, 575);
    mic.addAnimation ("mic", micimg);
    mic.addAnimation ("rot", microt );
    mic.scale = 0.4;
    mic.setCollider ("rectangle", 0, 0, 200, 200);
  }

  }

  if (joespri.collide (solo) && flagmic == 0){
    
    flagmic = 1;
    

    mic = createSprite (470, 575);
    mic.addAnimation ("mic", micimg);
    mic.addAnimation ("rot", microt );
    mic.scale = 0.4;
    mic.setCollider ("rectangle", 0, 0, 200, 200);
    joespri.setCollider ("rectangle", 0, 0, 100, 300);
    //joespri.debug = true;

  }

    if (joespri.x > 1700 && flagmic == 0){
      mic = createSprite (440, 575);
      mic.addAnimation ("mic", micimg);
      mic.addAnimation ("rot", microt );
      mic.scale = 0.4;
      mic.setCollider ("rectangle", 0, 0, 200, 200);
    

      flagmic = 1;
    }
  if (nickspri.collide (solo) && flagmic == 0){
    
    if (nickspri.x > 1700 && flagmic == 0){
      mic = createSprite (470, 575);
      mic.addAnimation ("mic", micimg);
      mic.addAnimation ("rot", microt );
      mic.scale = 0.4;
      mic.setCollider ("rectangle", 0, 0, 200, 200);

      flagmic = 1;
    }


  }

  if (kevinspri.collide (solo) && flagmic == 0){

    if (kevinspri.x > 1700 && flagmic == 0){
      mic = createSprite (470, 575);
      mic.addAnimation ("mic", micimg);
      mic.addAnimation ("rot", microt );
      mic.scale = 0.4;
      mic.setCollider ("rectangle", 0, 0, 200, 200);

      flagmic = 1;
    }

  }

  if (kevinspri.x > 1700 && joespri.x > 1700 && nickspri.x > 1700){
    kanyespri.velocityY = 12;
    kanyespri.setCollider ("rectangle", 0, 0, 300, 320);
    //kanyespri.debug = true;

  }

  if (kanyespri.collide (solo)){
    vmaspri.visible = true;
    vmaspri.velocityX = -10;
  }

  if (vmaspri.x < -20){
    vmaspri.x = 850;
  }

  if (vmaspri.isTouching (taylor1spri)){
    vidatay -= 20;
    vmaspri.x = 850;
  }

  if (vidaye == 0 || vidaye == -20){
    butão = createButton ("ganhou!");
    butão.position (650,400);
    butão.class ("botao");
    butão.mousePressed (()=>{
      window.location.reload ();
    })
    winspri.visible = true;
    kanyespri.destroy ();
    vmaspri.destroy ();
  }

  if (vidatay <= 0){
    butão = createButton ("perdeu kaka");
    butão.position (650,400);
    butão.class ("botao");
    butão.mousePressed (()=>{
      window.location.reload ();
    })
    losespri.visible = true;
    taylor1spri.destroy ();
    
  }


drawSprites();
}

