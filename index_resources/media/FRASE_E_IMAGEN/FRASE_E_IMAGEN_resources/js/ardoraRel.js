//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
paintButtonUp("bUpLCanvas",colorButton,colorSele);paintButtonUp("bUpRCanvas",colorButton,colorSele);paintButtonDown("bDownLCanvas",colorButton,colorSele);paintButtonDown("bDownRCanvas",colorButton,colorSele);paintGame();
$("#bUpLCanvas").bind('click',function(e) { if (indexL>0){indexL--;playAud("auI"+(parseInt(order[indexL])+1).toString());paintGame();}});
$("#contenL").bind('click', function(e) {playAud("auI"+(parseInt(order[indexL])+1).toString());});$("#contenR").bind('click', function(e) {playAud("auD"+(auR[parseInt(orderR[indexR])]).toString());});
$("#bUpLCanvas").mouseenter(function() {if (indexL>0){paintButtonUp("bUpLCanvas",colorSele,colorButton);}});
$("#bUpLCanvas").mouseleave(function() {if (indexL>0){paintButtonUp("bUpLCanvas",colorButton,colorSele);}});
$("#bUpRCanvas").bind('click',function(e) {if (indexR>0){indexR--;playAud("auD"+(auR[parseInt(orderR[indexR])]).toString());paintGame();}});
$("#bUpRCanvas").mouseenter(function(){if (indexR>0){paintButtonUp("bUpRCanvas",colorSele,colorButton);}});
$("#bUpRCanvas").mouseleave(function() {if (indexR>0){paintButtonUp("bUpRCanvas",colorButton,colorSele);}});
$("#bDownLCanvas").bind('click',function(e) {if (indexL<order.length-1){indexL++;playAud("auI"+(parseInt(order[indexL])+1).toString());paintGame();}});
$("#bDownLCanvas").mouseenter(function() {if (indexL<order.length-1){paintButtonDown("bDownLCanvas",colorSele,colorButton);}});
$("#bDownLCanvas").mouseleave(function() {if (indexL<order.length-1){paintButtonDown("bDownLCanvas",colorButton,colorSele);}});
$("#bDownRCanvas").bind('click',function(e) {if (indexR<order.length-1){indexR++;playAud("auD"+(auR[parseInt(orderR[indexR])]).toString());paintGame();}});
$("#bDownRCanvas").mouseenter(function() {if (indexR<order.length-1){paintButtonDown("bDownRCanvas",colorSele,colorButton);}});
$("#bDownRCanvas").mouseleave(function() {if (indexR<order.length-1){paintButtonDown("bDownRCanvas",colorButton,colorSele);}});
$("#bUpLCanvas").attr("tabindex","0");$("#bUpRCanvas").attr("tabindex","0");$("#bDownLCanvas").attr("tabindex","0");$("#bDownRCanvas").attr("tabindex","0");
$("#bUpLCanvas").keydown(function(e) {if (e.which != 9) {if (indexL > 0) {indexL--;playAud("auI" + (parseInt(order[indexL]) + 1).toString());paintGame();}}});
$("#bUpRCanvas").keydown(function(e) {if (e.which != 9) {if (indexR > 0) {indexR--;playAud("auD" + (auR[parseInt(orderR[indexR])]).toString());paintGame();}}});
$("#bDownLCanvas").keydown(function(e) {if (e.which != 9) {if (indexL < order.length - 1) {indexL++;playAud("auI" + (parseInt(order[indexL]) + 1).toString());paintGame();}}});
$("#bDownRCanvas").keydown(function(e) {if (e.which != 9) {if (indexR < order.length - 1) {indexR++;playAud("auD" + (auR[parseInt(orderR[indexR])]).toString());paintGame();}}});
$("#buttonOk").attr("tabindex", "0");$("#buttonOk").keydown(function(e) {if (e.which != 9) {isCorrect();}});$("#buttonOk").focus(function(e) {removeOk();});$("#buttonOk").blur(function(e) {paintOk();});
}
function paintGame(){document.getElementById("contenL").innerHTML = iL[order[indexL]] + cL[order[indexL]];document.getElementById("contenR").innerHTML = iR[orderR[indexR]] + cR[orderR[indexR]];
if (indexL==0){clearCanvasButton("bUpLCanvas")} else {paintButtonUp("bUpLCanvas", colorButton, colorSele);}
if (indexR==0){clearCanvasButton("bUpRCanvas")} else {paintButtonUp("bUpRCanvas", colorButton, colorSele);}
if (indexL==order.length-1){clearCanvasButton("bDownLCanvas")} else {paintButtonDown("bDownLCanvas", colorButton, colorSele);}
if (indexR==order.length-1){clearCanvasButton("bDownRCanvas")} else {paintButtonDown("bDownRCanvas", colorButton, colorSele);}
}
function clearCanvasButton(canvasId){var canvas = document.getElementById(canvasId);canvas.width = canvas.width;}
function paintButtonUp(divUp,colorStroke, colorFill){var canvas = document.getElementById(divUp);canvas.width = canvas.width;var context = canvas.getContext("2d");
var wDiv=$("#"+divUp).width();var hDiv=$("#"+divUp).height();var padd=5;context.lineWidth=2;context.beginPath();context.strokeStyle=colorStroke;context.fillStyle=colorFill;
var x=wDiv-padd;var grd = context.createRadialGradient(x/2, hDiv/2,1,x/2, hDiv/2,hDiv-padd);
grd.addColorStop(0,colorBack);grd.addColorStop(1,colorFill);context.fillStyle = grd;
context.moveTo(padd,hDiv-padd);context.lineTo(wDiv-padd,hDiv-padd);context.lineTo(wDiv/2,padd);
context.lineTo(padd,hDiv-padd);context.fill();context.stroke();}
function paintButtonDown(divUp,colorStroke, colorFill){var canvas = document.getElementById(divUp);canvas.width = canvas.width;
var context = canvas.getContext("2d");var wDiv=$("#"+divUp).width();var hDiv=$("#"+divUp).height();var padd=5;
context.lineWidth=2;context.beginPath();context.strokeStyle=colorStroke;context.fillStyle = colorFill;
var x=wDiv-padd;var grd = context.createRadialGradient(x/2, hDiv/2,1,x/2, hDiv/2,hDiv-padd);
grd.addColorStop(0,colorBack);grd.addColorStop(1,colorFill);context.fillStyle = grd;
context.moveTo(padd,padd);context.lineTo(wDiv-padd,padd);context.lineTo(wDiv/2,hDiv-padd);context.lineTo(padd,padd);context.fill();context.stroke();
}
function randomSort(){
for (i = 0; i < order.length; i++) {
var randN = Math.floor(Math.random() * order.length);
while (order[randN]!=""){randN++;if (randN==order.length){randN=0;}}
order[randN]=i.toString();orderR[randN] = i.toString();}indexR=Math.floor(Math.random() * order.length);indexL=Math.floor(Math.random() * order.length);
}
function isCorrect(){
$("audio").each(function(){this.pause();this.currentTime=0;});
if(parseInt(relWords(ansRL[order[indexL]]))===parseInt(orderR[indexR])){document.getElementById("contenL").innerHTML = "";
document.getElementById("contenR").innerHTML = "";order.splice(indexL, 1 );orderR.splice(indexR, 1 );
if (indexL>order.length-1){indexL=order.length-1;}if (indexR>orderR.length-1){indexR=orderR.length-1;}successes++;score = score + scoreInc;
timeAct=timeAct+timeBon;if (successes == iL.length) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {$("#contenL").slideUp();$("#contenR").slideUp();
paintGame();$("#contenL").slideDown("slow");$("#contenR").slideDown("slow");}}
else{attempts++;score = score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
document.getElementById("contenL").innerHTML = iL[order[indexL]] + cL[order[indexL]];
document.getElementById("contenR").innerHTML = iR[parseInt(relWords(ansRL[order[indexL]]))] + cR[parseInt(relWords(ansRL[order[indexL]]))];
}
function paintBack(){}
function relWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function playAud(elem){$("audio").each(function(){this.pause();this.currentTime = 0;});if ($("#"+elem).length){document.getElementById(elem).play();}}
