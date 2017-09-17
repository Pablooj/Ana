var axioma = "F-F-F-F";
var frase = axioma;
var len = 100;
var exc = 1;
var sc = 0.5;


var regla ={
  a: "F",
  b: "F-F+F+FF-F-F+F"
}

function generar(){
  len *=sc;
  var futura = "";
  for(var i=0; i<frase.length; i++){
    var actual = frase.charAt(i);
    if(actual == regla.a){
      futura += regla.b;
    }else{
      futura += actual;
    }
  }
  frase = futura;
  exc++;
  //graphics();

}

//turtle graphics engine
function graphics(){
  var ang = radians(angSlider.value());
  background(51);
  resetMatrix();
  translate(width / 2, height)
  stroke(255);

  for(var i=0; i<frase.length; i++){
    var actual = frase.charAt(i);
    if (actual == "F"){
      line(0,0,0,-len);
      translate(0,-len);
    }else if(actual == "+"){
      rotate(ang);
    }else if(actual == "-"){
      rotate(-ang);
    }else if(actual == "["){
      push();
    }else if(actual == "]"){
      pop();
    }else if(actual == "|"){
      line(0,0,0,-len/exc);
      translate(0,-len/exc);
    }
  }
}

function setup(){
  createCanvas(1800,900);
  background(51);
  fill(255);
  //ang = radians(25);
  //graphics();

  var button = createButton("Generar");
  button.mousePressed(generar);
  angSlider = createSlider(0,90,25);

}

function draw(){
  graphics();
}
