//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var posIni=90;var incre=360/arcIni.length;
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".bColor").mousedown(function() {indexColor=parseInt($(this).attr("id").substring(1,3));seleColor();});seleColor();
drawArcs();
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
$("#ardoraCanvasPie").attr("tabindex","0");$("#s_pointer").hide();$("#s_pointer").css("position","absolute");$("#s_pointer").css("z-index",50);$("#s_pointer").attr("height", $("#ardoraCanvasPie").attr("height"));$("#s_pointer").attr("width", $("#ardoraCanvasPie").attr("width"));var posimaAct=$("#ardoraCanvasPie").position();$("#s_pointer").css($("#ardoraCanvasPie").position());
$("body").mousemove(function(e) {$("#s_pointer").hide();});$("#ardoraCanvasPie").keydown(function(e){$("#s_pointer").show();});$(".arc").keydown(function(e){if (e.which!=9){var po = parseInt($(this).attr("id").substring(4,7));arcFillStyles[po] = colors[indexColor];drawArcs();if ($("#arc_"+(po+1).toString()).length){$("#arc_"+(po+1).toString()).focus();}}});
$(".bColor").attr("tabindex","0");$(".bColorSele").attr("tabindex","0");$(".bColor").keydown(function(e){if (e.which!=9){indexColor=parseInt($(this).attr("id").substring(1, 3));seleColor();}});
$(".bColorSele").keydown(function(e){if (e.which!=9){indexColor=parseInt($(this).attr("id").substring(1, 3));seleColor();}});
}
var Arc = function () {this.x=0;this.y=0;this.ini=0;this.end=0;};
function seleColor() {
for (var i = 0; i < 12; i++) {if ($("#c" + i.toString()).length) {if (i == indexColor) {$("#c" + i.toString()).removeClass("bColor");
$("#c" + i.toString()).addClass("bColorSele");$("#p" + i.toString()).css("color", colors[i]);} else {
$("#c" + i.toString()).addClass("bColor");$("#c" + i.toString()).removeClass("bColorSele");$("#p" + i.toString()).css("color", colorText);}}}
}
function windowToCanvas(e) {var x = e.x || e.clientX,y = e.y || e.clientY,bbox = canvas.getBoundingClientRect();return { x: x - bbox.left * (canvas.width  / bbox.width),y: y - bbox.top  * (canvas.height / bbox.height)};};
function drawArcs() {canvas.width = canvas.width; for (var i = 0; i < this.arcCenterX.length; ++i) {drawA(i);}
    $(".arc").attr("tabindex","0");$(".arc").focus(function(e){$(this).css("opacity",1);});$(".arc").blur(function(e){$(this).css("opacity",0);});
}
function drawA(i) {context.beginPath();context.fillStyle = arcFillStyles[i];context.strokeStyle = this.arcs[i].stroke;context.moveTo(this.arcs[i].x, this.arcs[i].y);
context.arc(this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end);context.lineTo(this.arcs[i].x, this.arcs[i].y);context.fill();context.stroke();context.closePath();
if ($("#arc_"+i).length){}else{$("#s_pointer").append('<path class="arc" id="arc_'+i+'" fill="none" style="opacity:0.0;stroke-width:2" d="M '+this.arcs[i].x+' '+this.arcs[i].y+' A '+radius+' '+radius+' 0 1 0 '+this.arcs[i].ini+' '+this.arcs[i].end+'"></path>');
document.getElementById("arc_"+i).setAttribute("d", describeArc(this.arcs[i].x, this.arcs[i].y, radius,posIni,posIni+incre)+" L "+this.arcs[i].x+" "+this.arcs[i].y);
posIni=posIni+incre;$("#arc_"+i).css("stroke","rgb(255,0,0)");$("#s_pointer").html($("#s_pointer").html());}
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;return {x: centerX + (radius * Math.cos(angleInRadians)),y: centerY + (radius * Math.sin(angleInRadians))};}
function describeArc(x, y, radius, startAngle, endAngle){var start = polarToCartesian(x, y, radius, endAngle);var end = polarToCartesian(x, y, radius, startAngle);var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";var d = ["M", start.x, start.y,"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(" ");return d;}
canvas.onmousedown = function (e) {var location=windowToCanvas(e);arcs.forEach( function (arc) {var i=arcs.indexOf(arc);
if (isInsideSector(location,this.arcs[i].x,this.arcs[i].y, radius,this.arcs[i].ini, this.arcs[i].end)){
arcFillStyles[arcs.indexOf(arc)]=colors[indexColor];drawArcs();
}});}
canvas.onmousemove = function(e) {canvas.width=canvas.width;var indexInside=-1;var location=windowToCanvas(e);arcs.forEach(function(arc) {
var i = arcs.indexOf(arc);if (isInsideSector(location, this.arcs[i].x, this.arcs[i].y, radius, this.arcs[i].ini, this.arcs[i].end)) {arcs[i].stroke = colorSele;
indexInside=i;} else {arcs[i].stroke = colorText;}});drawArcs();
if (indexInside>-1){$("#ardoraCanvasPie").css("cursor","pointer");drawA(indexInside);}else{$("#ardoraCanvasPie").css("cursor","default");}}
canvas.onmouseup=function (e) {}
function isInsideSector(point, centerX,centerY, radius, angle1, angle2) {function areClockwise(centerX,centerY, radius, angle, point2) {
var point1 = {x:(centerX+radius)*Math.cos(angle),y:(centerY+radius)*Math.sin(angle)};
return -point1.x*point2.y + point1.y*point2.x > 0;}var relPoint={x:point.x-centerX,y:point.y-centerY};
return !areClockwise(centerX,centerY,radius,angle1,relPoint) && areClockwise(centerX,centerY,radius,angle2,relPoint) && (relPoint.x*relPoint.x + relPoint.y*relPoint.y <= radius * radius);}
for (var i=0; i < arcCenterX.length; ++i) {var arcNew = new Arc();arcNew.x=arcCenterX[i];arcNew.y=arcCenterY[i];arcNew.ini=arcIni[i];arcNew.end=arcEnd[i];arcNew.stroke=arcStrokeStyles[i];arcNew.fill=arcFillStyles[i];arcs.push(arcNew);}
function randomSort(){
}
function isCorrect(){
var correct = true;
for (var j=0; j<colors.length;++j){var tot=0;for (var i=0; i<arcCenterX.length; ++i) {
if (arcFillStyles[i].localeCompare(colors[j])==0){tot=tot+uniVal;}} var cV=piesWords(a[j]);if (tot.toString().localeCompare(cV)!=0){correct=false;}}
for (var j=0; j<colors.length; ++j) {var tot=$("#D"+j.toString()).val();var cV=piesWords(a[j]);if (tot.localeCompare(cV)!=0){correct=false;}}
 if (correct) {score=score+scoreInc;successes++;timeAct=timeAct+timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {
attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function piesWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
