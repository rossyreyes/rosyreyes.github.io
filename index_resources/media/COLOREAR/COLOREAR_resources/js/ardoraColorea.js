//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var xp=0;var yp=0;
function initAct(){
loadIma();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".bColor").mousedown(function() {indexColor=parseInt( $(this).attr("id").substring(1,2));seleColor();});seleColor();
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
$(".bColor").attr("tabindex","0");$(".bColor").keydown(function(e){if (e.which!=9 && e.which!=38 && e.which!=40 ){$(this).trigger("mousedown");$("#ardoraCanvasPaint").focus();}
if (e.which==40){var nt=parseInt($(this).attr("id").substring(1,3))+1;if ($("#c"+nt.toString())){$("#c"+nt.toString()).focus();}};if (e.which==38){var nt=parseInt($(this).attr("id").substring(1,3))-1;if ($("#c"+nt.toString())){$("#c"+nt.toString()).focus();}}});
 $(".bColor").focus(function(e){$(this).css("border-color",colorSele);});$(".bColor").focusout(function(e){$(this).css("border-color",colorText);});$("#s_pointer").hide();
var posimaAct = $("#ardoraCanvasPaint").position();$("#s_pointer").css($("#ardoraCanvasPaint").position());$("body").mousemove(function(e) {$("#s_pointer").hide();});
}
function drawcross() {$("#s_pointer").show();$("#vertical").attr("x1",xp);$("#vertical").attr("x2",xp);$("#horizontal").attr("y1",yp);$("#horizontal").attr("y2",yp);$("#c_point").attr("cx",xp);$("#c_point").attr("cy", yp);}
function loadIma(){var canvas = document.getElementById("ardoraCanvasPaint");var context = canvas.getContext("2d");var imageObj = new Image();
imageObj.onload = function() {context.drawImage(this, 0, 0);context.beginPath();context.rect(0,0,canvas.width,canvas.height);context.lineWidth=4;context.strokeStyle="black";context.stroke();
};imageObj.src ="COLOREAR_resources/media/dibujos-de-zanahorias-para-colorear.jpg";
 $("#ardoraCanvasPaint").mousedown(function(e) {var parentOffset=$(this).offset();fillArea(e.pageX-Math.trunc(parentOffset.left),e.pageY-Math.trunc(parentOffset.top),canvas.width,canvas.height,context);});
$("#ardoraCanvasPaint").attr("tabindex", "0");$("#ardoraCanvasPaint").keydown(function(e) {if (e.which != 9 && e.which != 37 && e.which != 39 && e.which != 39) {drawcross();};if (e.which == 37) {if (xp > 1) {xp--;xp--;drawcross();}};
if (e.which==39) {if (xp < $("#ardoraCanvasPaint").width() - 1) {xp++;xp++;drawcross();}};if (e.which == 38) {if (yp > 1) {yp--;yp--;drawcross();}};if (e.which == 40) {if (yp < $("#ardoraCanvasPaint").height() - 1) {yp++;yp++;drawcross();}}
if (e.which==13) {var canvas=document.getElementById("ardoraCanvasPaint");var context = canvas.getContext("2d");fillArea(xp,yp, canvas.width, canvas.height, context);}});
}
function fillArea(x,y,canvasW,canvasH,canvasObj){var imaBit=canvasObj.getImageData(0,0,canvasW,canvasH);
fillColor(imaBit,[hexToRgb(cM[indexColor]).r,hexToRgb(cM[indexColor]).g,hexToRgb(cM[indexColor]).b,255],100,x,y);canvasObj.putImageData(imaBit,0,0);}
function hexToRgb(hex) {var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;hex = hex.replace(shorthandRegex, function(m, r, g, b) {
return r + r + g + g + b + b;});var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
return result ? {r: parseInt(result[1], 16),g: parseInt(result[2], 16),b: parseInt(result[3], 16)} : null;}
function seleColor(){for (var i=0;i<10;i++){if ($("#c"+i.toString()).length){if (i==indexColor){$("#c"+i.toString()).removeClass("bColor");
$("#c"+i.toString()).addClass("bColorSele");}else{$("#c"+i.toString()).addClass("bColor");
$("#c"+i.toString()).removeClass("bColorSele");}}}}
function fillColor(bitmap,replacementColor,tolerance,x,y) {var RGBA=4;var start=getPixelArrayIndex(x || 0, y || 0);var queue=[];
(function (node, targetColor, replColor, toler) {if (String(targetColor)===String(replColor)) {return;}  queue.push(node);while (queue.length) {node = queue.pop();
if (colorEquals(node,targetColor,toler)) {setColor(node, replColor);queue.push(getNode("west" , node),getNode("east" , node),getNode("north", node),getNode("south", node));}}}(
start,Array.prototype.slice.call(bitmap.data, start, start + RGBA),replacementColor || [ 0, 0, 0, 0 ],tolerance || 10));
function colorEquals(node, color, tolerance) {if (node < 0 || node + RGBA - 1 > bitmap.data.length) {return false;}
var diff = 0;for (var i = 0; i < RGBA; i += 1) {diff += Math.abs(bitmap.data[node + i] - color[i]);} return diff <= tolerance;}
function setColor(node, color) {for (var i = 0; i < RGBA; i += 1) {bitmap.data[node + i] = color[i];}}
function getNode(direction, node) {var n=0;switch (direction) {case "west":n = 1;break;
case "east":n=-1;break;case "north":n = -bitmap.width;break;case "south":n=bitmap.width;break;} return node + n * RGBA;}
function getPixelArrayIndex(x,y) {return (y*bitmap.width+x)*RGBA;}}
function randomSort(){
}
function isCorrect(){
var correct=true;var canvas=document.getElementById("ardoraCanvasPaint");var context=canvas.getContext("2d");
for (var i=0;i<x.length;i++) {var pixelData = canvas.getContext("2d").getImageData(x[i],y[i],1,1).data;if (hexToRgb(c[i]).r != pixelData[0]){correct=false;} if (hexToRgb(c[i]).g != pixelData[1]){correct=false;}if (hexToRgb(c[i]).b != pixelData[2]){correct=false;}}
if (correct) {score=score+scoreInc;successes++;timeAct = timeAct + timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");$("#buttonOk").remove();} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function coloreaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
