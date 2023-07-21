//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$("#ardoraAct").mousemove(function (e) {var posX = e.pageX - this.offsetLeft;var posY = e.pageY - this.offsetTop;drawJoin(posX,posY);});
$(".conten").bind("click", function (e) {if (sel1.localeCompare("")==0){sel1=$(this).attr("id");$(this).css({background: colorSele, borderColor: colorButton });
var color2=colorSele;var color1=colorBack;
$(this).css("background","-webkit-radial-gradient(center, ellipse, "+color1+","+color2+")");
$(this).css("background","-moz-radial-gradient(center,ellipse, "+color1+", "+color2+")");
$(this).css("background","-ms-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(this).css("background","-o-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(this).css("background","radial-gradient(ellipse at center, "+color1+", "+color2+")");
$(this).css("filter","progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
}else{if (Math.abs(parseInt($(this).attr("id").substr(6,1))-parseInt(sel1.substr(6,1)))>1 || $(this).attr("id").substr(0,7)==sel1.substr(0,7)){
$("#"+sel1).css({ background: colorBack, borderColor: colorText });sel1="";drawJoin(0,0);}else{join1.push(sel1);join2.push($(this).attr("id"));
$("#"+sel1).css({ background: colorBack, borderColor: colorText });sel1="";drawJoin(0,0);drawGame();}}});
$( ".conten" ).dblclick(function(e) {delJoin($(this).attr("id"));});
$(".conten").bind("taphold", function (e) {e.preventDefault();delJoin($(this).attr("id"));});
$(".conten").mouseenter(function () {$(this).css({background: colorSele,borderColor: colorButton});
var color2=colorSele;var color1=colorBack;
$(this).css("background","-webkit-radial-gradient(center, ellipse, "+color1+","+color2+")");
$(this).css("background","-moz-radial-gradient(center,ellipse, "+color1+", "+color2+")");
$(this).css("background","-ms-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(this).css("background","-o-radial-gradient(center, ellipse, "+color1+", "+color2+")");
$(this).css("background","radial-gradient(ellipse at center, "+color1+", "+color2+")");
$(this).css("filter","progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});$(".conten").mouseleave(function () {if ($(this).attr("id")!=sel1){ $(this).css({ background: colorBack, borderColor: colorText });}});
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
$(".conten").attr("tabindex","0");$(".conten").focus(function(e){$(this).css("background",colorSele);});$(".conten").blur(function(e){$(this).css("background",colorBack);});
$(".conten").keydown(function(e){if (e.which!=9 && e.which!=27){if (sel1.localeCompare("") == 0) {sel1 = $(this).attr("id");$(this).css({background: colorSele,borderColor: colorButton});var color2=colorSele;var color1=colorBack;$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");
} else {if (Math.abs(parseInt($(this).attr("id").substr(6, 1)) - parseInt(sel1.substr(6, 1))) > 1 || $(this).attr("id").substr(0, 7) == sel1.substr(0, 7)) {$("#" + sel1).css({background: colorBack,borderColor: colorText});sel1 = "";drawJoin(0, 0);} else {
join1.push(sel1);join2.push($(this).attr("id"));$("#" + sel1).css({background: colorBack,borderColor: colorText});sel1 = "";drawJoin(0,0);drawGame();}}}if (e.which==27){delJoin($(this).attr("id"));}});
}
function delJoin(ele){var pos = join1.indexOf(ele);while (pos>-1){join1.splice(pos,1);join2.splice(pos,1);pos = join1.indexOf(ele);}
pos = join2.indexOf(ele);while (pos>-1){join1.splice(pos,1);join2.splice(pos,1);pos = join2.indexOf(ele);}drawGame();}
function drawJoin(posX,posY){var canvas = document.getElementById("joinCanvas");canvas.width=canvas.width;var context = canvas.getContext("2d");
if (sel1.localeCompare("")!=0){var canLeft = document.getElementById("ardoraAct").offsetLeft;var canTop = document.getElementById("ardoraAct").offsetTop;
context.lineWidth=2.5;var posDivX=document.getElementById(sel1).parentNode.parentNode.offsetLeft+$("#"+sel1).width()+10;var posDivY=document.getElementById(sel1).offsetTop+14+5;
context.strokeStyle=colorButton;context.fillStyle=colorSele;context.lineCap = "round";context.beginPath();context.arc(posDivX, posDivY, 5, 0, 2 * Math.PI, false);
context.fill();context.moveTo(posDivX,posDivY);context.quadraticCurveTo(posDivX+50,posDivY,posX,posY);context.arc(posX, posY, 5,0,2*Math.PI, false);context.stroke();}}
function drawGame(){var canvas = document.getElementById("joinCanvasDo");canvas.width=canvas.width;var context = canvas.getContext("2d");
for (i = 0; i < join1.length; i++) {var canLeft = document.getElementById("ardoraAct").offsetLeft;var canTop = document.getElementById("ardoraAct").offsetTop;context.lineWidth=2.5;
if(parseInt(join1[i].substr(6,1))<parseInt(join2[i].substr(6,1))){var posX=document.getElementById(join2[i]).parentNode.parentNode.offsetLeft-5;var posY=document.getElementById(join2[i]).offsetTop+12+5;//12 é o tamaño da fonte;
var posDivX=document.getElementById(join1[i]).parentNode.parentNode.offsetLeft+$("#"+join1[i]).width()+10;var posDivY=document.getElementById(join1[i]).offsetTop+14+5;}
else{var posX=document.getElementById(join1[i]).parentNode.parentNode.offsetLeft-5;var posY=document.getElementById(join1[i]).offsetTop+14+5;
var posDivX=document.getElementById(join2[i]).parentNode.parentNode.offsetLeft+$("#"+join2[i]).width()+10;var posDivY=document.getElementById(join2[i]).offsetTop+14+5;}
context.strokeStyle=colorSele;context.fillStyle=colorSele;context.lineCap = "round";context.beginPath();context.arc(posDivX, posDivY, 5, 0, 2 * Math.PI, false);context.fill();
context.moveTo(posDivX,posDivY);context.quadraticCurveTo(posDivX+50,posDivY,posX,posY);context.stroke();context.beginPath();
context.arc(posX, posY, 5,0,2*Math.PI, false);context.fill();}}
function randomSort(){
for (i = 0; i < con1.length; i++) {var ind = Math.floor(Math.random()*(con1.length-1))+1;var divId="conten1_"+parseInt(ind);
while (document.getElementById(divId).innerHTML.localeCompare("")!=0){ind++;if (ind>con1.length){ind=1;}divId="conten1_"+parseInt(ind);}document.getElementById(divId).innerHTML=con1[i];}
for (i = 0; i < con2.length; i++) {var ind = Math.floor(Math.random()*(con2.length-1))+1;var divId="conten2_"+parseInt(ind);
while (document.getElementById(divId).innerHTML.localeCompare("")!=0){ind++;if (ind>con2.length){ind=1;}divId="conten2_"+parseInt(ind);}document.getElementById(divId).innerHTML=con2[i];}
}
function isCorrect(){
var correct=true; successes=0;var joinWords1=[];var joinWords2=[];
for (i = 0; i < join1.length; i++) {joinWords1.push($("#" +join1[i]).text());joinWords2.push($("#" +join2[i]).text());}
for (i = 0; i < joinPar.length; i++) {var check = false;
for (j = 0; j < joinWords1.length; j++) {if (joinWords1[j].localeCompare(unirWords(joinPar[i][0]).substring(0, c[i][0])) == 0) {if (cleartags(joinWords2[j]).localeCompare(cleartags(unirWords(joinPar[i][1]).substring(0, c[i][1]))) == 0) {check = true;}}}
if (!check) {check = false;for (j = 0; j < joinWords1.length; j++) {if (joinWords2[j].localeCompare(unirWords(joinPar[i][0]).substring(0, c[i][0])) == 0) {if (cleartags(joinWords1[j]).localeCompare(cleartags(unirWords(joinPar[i][1]).substring(0, c[i][1]))) == 0) {check = true;}}}}
if (!check) {check = false;for (j = 0; j < joinWords1.length; j++) {if (joinWords1[j].localeCompare(unirWords(joinPar[i][1]).substring(0, c[i][1])) == 0) {if (cleartags(joinWords2[j]).localeCompare(cleartags(unirWords(joinPar[i][0]).substring(0, c[i][0]))) == 0) {check = true;}}}}
if (!check) {check = false;for (j = 0; j < joinWords1.length; j++) {if (joinWords2[j].localeCompare(unirWords(joinPar[i][1]).substring(0, c[i][1])) == 0) {if (cleartags(joinWords1[j]).localeCompare(cleartags(unirWords(joinPar[i][0]).substring(0, c[i][0]))) == 0) {check = true;}}}}
if (!check) {correct = false} else {successes++}}
for (i = 0; i < joinWords1.length; i++) {check = false;
for (j = 0; j < joinPar.length; j++) {if (unirWords(joinPar[j][0]).substring(0, c[j][0]).localeCompare(joinWords1[i]) == 0) {if (cleartags(unirWords(joinPar[j][1]).substring(0, c[j][1])).localeCompare(cleartags(joinWords2[i])) == 0) {check = true;}}}
if (!check) {for (j = 0; j < joinPar.length; j++) {if (unirWords(joinPar[j][1]).substring(0, c[j][1]).localeCompare(joinWords1[i]) == 0) {if (cleartags(unirWords(joinPar[j][0]).substring(0, c[j][0])).localeCompare(cleartags(joinWords2[i])) == 0) {check = true;}}}}
if (!check) {for (j = 0; j < joinPar.length; j++) {if (unirWords(joinPar[j][0]).substring(0, c[j][0]).localeCompare(joinWords2[i]) == 0) {if (cleartags(unirWords(joinPar[j][1]).substring(0, c[j][1])).localeCompare(cleartags(joinWords1[i])) == 0) {check = true;}}}}
if (!check) {for (j = 0; j < joinPar.length; j++) {if (unirWords(joinPar[j][1]).substring(0, c[j][1]).localeCompare(joinWords2[i]) == 0) {if (cleartags(unirWords(joinPar[j][0]).substring(0, c[j][0])).localeCompare(cleartags(joinWords1[i])) == 0) {check = true;}}}}
if (!check) {correct = false;}}
if (correct){score = score + scoreInc;timeAct=timeAct+timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");$("#buttonOk").remove();}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {
$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function cleartags(str) {while (str.indexOf("<sup>")>-1){str = str.replace("<sup>", "");}while (str.indexOf("</sup>")>-1){str = str.replace("</sup>", "");}while (str.indexOf("<sub>")>-1){str = str.replace("<sub>", "");}while (str.indexOf("</sub>")>-1){str = str.replace("</sub>", "");}
while (str.indexOf("<b>")>-1){str = str.replace("<b>", "");}while (str.indexOf("</b>")>-1){str = str.replace("</b>", "");}while (str.indexOf("<strong>")>-1){str = str.replace("<strong>", "");}while (str.indexOf("</strong>")>-1){str = str.replace("</strong>", "");}
while (str.indexOf("<i>")>-1){str = str.replace("<i>", "");}while (str.indexOf("</i>")>-1){str = str.replace("</i>", "");}while (str.indexOf("<em>")>-1){str = str.replace("<em>", "");}while (str.indexOf("</em>")>-1){str = str.replace("</em>", "");}
while (str.indexOf("<small>")>-1){str = str.replace("<small>", "");}while (str.indexOf("</small>")>-1){str = str.replace("</small>", "");}while (str.indexOf("<mark>")>-1){str = str.replace("<mark>", "");}while (str.indexOf("</mark>")>-1){str = str.replace("</mark>", "");}
while (str.indexOf("<del>")>-1){str = str.replace("<del>", "");}while (str.indexOf("</del>")>-1){str = str.replace("</del>", "");}while (str.indexOf("<ins>")>-1){str = str.replace("<ins>", "");}while (str.indexOf("</ins>")>-1){str = str.replace("</ins>", "");}return str;}
function showSol(oldTypeGame){ 
join1=[];join2=[];var divJoin=document.getElementsByTagName("div");for (i = 0; i < joinPar.length; i++) {
for (j=0;j<divJoin.length;j++){if ($("#"+divJoin[j].id).text().localeCompare(unirWords(joinPar[i][0]))==0){join1.push(divJoin[j].id);
for (k=0;k<divJoin.length;k++){if ($("#"+divJoin[k].id).text().localeCompare(unirWords(joinPar[i][1]))==0){join2.push(divJoin[k].id);}}}}}drawGame();
}
function paintBack(){}
function unirWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
