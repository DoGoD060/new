var inputElement
var randomValue=0
function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 inputElement =createInput("Hello")
 inputElement.position(50,50)
  sliderElement= createSlider(10,50,20,0.01)//初始值，最大值，預設值，間距
  sliderElement.position(350,50)
 btnElement =createButton("瘋狂")
 btnElement .position(550,50)
 btnElement .mousePressed(goCrazy)
	 colorPicker = createColorPicker('#ed225d');//括號內的值，為預設值
 colorPicker .position(850,50)
 radioElement=createRadio()
 
 radioElement.position(1050,50)
  radioElement.style("background-color",'white')//設定為CSS格式
}
function goCrazy(){
 if(randomValue>0) {
     randomValue=0
 }
 else
 { 
  randomValue=10
 }
}

function draw() {
background(0);
var txts = inputElement.value();
	fill(255)
	 fill(colorPicker.value())
	textSize(sliderElement.value())
	textStyle(BOLD)
	var textLength = textWidth(txts)+80
	var textHeight = sliderElement.value()+30
	for(var y=0;y<height;y=y+textHeight){
	for (var x=0;x<width;x=x+textLength){
		text(txts,x+random(-randomValue,randomValue),y+random(-randomValue,randomValue))
	}
	}
}