//js
//textchange
function textChange(){
	document.getElementById('t_c').innerHTML="Hello";
}
//show date
function showDate(){
	document.getElementById('s_d').innerHTML= Date();
}
//bulb on/off
function bulbOn(){
	document.getElementById('b_on').src='image/pic_bulbon.gif';
}
function bulbOff(){
	document.getElementById('b_on').src='image/pic_bulboff.gif';
}
//colour change
function colourChange(){
	document.getElementById('c_c').style.color="blue"
}
//show/hide
function textShow(){
document.getElementById('s_h').style.display='block';
}

function textHide(){
document.getElementById('s_h').style.display='none';

}
//variable
var number1=5;
var number2=2;
var number3=number1+number2;


function calculation(){
	document.getElementById('value').innerHTML=number3;
}
//textchange
function textChange(){
	document.getElementsByClassName('t_c')[1].innerHTML="Hello";
}

//textchange
function textChange(){
	document.getElementById('demo').innerHTML="Hello JavaScript!";
}
//fontchange
function fontChange(){
	document.getElementById('font').style.fontsize="35px";
}
//html remove
function removeHTML(){
	document.write(5+5)
}
//variable +
var number1=100;
var number2=50;
var number3=number1+number2;


function calculation(){
	document.getElementById('plus').innerHTML=number3;
}
//variable -
var number1=50;
var number2=10;
var number3=number1-number2;


function calculation(){
	document.getElementById('minus').innerHTML=number3;
}
//variable *
var number1=60;
var number2=60;
var number3=number1*number2;


function calculation(){
	document.getElementById('multi').innerHTML=number3;
}
//variable /
var number1=12;
var number2=3;
var number3=number1/number2;


function calculation(){
	document.getElementById('division').innerHTML=number3;
}
//show/hide
function texthide(){
document.getElementById('show').style.display='none';
}

//write
function addition(){
	document.write(5+5)
}
//window
function addition(){
	window.alert(5+5)
}
//2 statements
function statement(){
	document.getElementsByClassName('demo1').innerHTML=Hello!
	document.getElementsByClassName('demo2').innerHTML=How are you!
}
//let
let x,y;
x=10;
y=5;
function letaddition(){
	document.getElementById('l_a').innerHTML=x+y;
}
//x variable
let x = 5 + 2 + 3;
function add(){
	document.getElementById('result').innerHTML= x;
}