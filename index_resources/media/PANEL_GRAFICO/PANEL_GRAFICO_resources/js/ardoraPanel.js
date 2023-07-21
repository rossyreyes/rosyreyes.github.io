//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timePoint;var aniPoint=0; timePoint=setInterval("paintPointSel()",250);
var txtSel; function initAct(){
if ((tiTime) && (tiButtonTime)){paintButtonTime();}randomSort(); paintPoints();if (tiAval){parent.iniciaActividade()}
$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);
$(".txtCell").attr("tabindex","0");
$(".txtCell").focus(function() {$(this).css("border-color", colorSele);});
$(".txtCell").blur(function() {$(this).css("border-color", "#000000");});
$(".txtCell").keydown(function(e){if (e.which!=9){isCorrect($(this));}})
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort(){ var rand=0; var j=0; words= new Array(); for (i = 0; i < answers.length; i++) {answer[i]="";} texSel=Math.floor(Math.random() * (answers.length-1));
for (i = 0; i < answers.length; i++) {rand = Math.floor(Math.random() * (answers.length-1));if (answer[rand]==""){answer[rand]=answers[i];}else{
j=rand;while (answer[j]!=""){j++;if (j>answers.length-1){j=0;}}answer[j]=answers[i];}}}
function paintButtons(){var num=$("div.txtCell").length;var nameDiv="#txt"+num.toString();$(nameDiv).remove();
for (i = 1; i < answer.length+1; i++) {nameDiv="#txt"+i.toString()+"_txt";$(nameDiv).html("<p>"+answer[i-1]+"</p>");}var heightBut=5;for (i = 1; i < answer.length+1; i++) {
nameDiv="#txt"+i.toString();$(nameDiv).css("top",heightBut+"px");heightBut=heightBut+$(nameDiv).height()+10;}}
function paintPoints() {var canvas = document.getElementById("ardoraActCanvasAnim");canvas.style["visibility"] = "visible";canvas.width = canvas.width;var contexto = canvas.getContext("2d");
for (i = 0; i < doneA.length; i++) {
if (doneA[i] == "0") {contexto.beginPath();contexto.fillStyle=colorSele;contexto.arc(parseInt(panelWords(coorx[i])),parseInt(panelWords(coory[i])),4,0,2*Math.PI,false);contexto.fill();contexto.strokeStyle=colorButton;contexto.lineWidth = 2;contexto.stroke();} else {
contexto.beginPath();contexto.fillStyle=colorButton;contexto.arc(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])), 4, 0, 2 * Math.PI, false);contexto.fill();contexto.strokeStyle = colorSele;contexto.lineWidth = 2;
var x=parseInt(posX[i]);var y=parseInt(posY[i]);contexto.moveTo(parseInt(panelWords(coorx[i])), parseInt(panelWords(coory[i])));contexto.lineTo(x,y);contexto.stroke();
for (j = 0; j < answer.length; j++) {if (doneA[i] == answer[j]){var idT=String(parseInt(j)+1);$("#txt"+idT).css({left: x+"px",top: y+"px" });$("#txt"+idT).off("mousedown");}}}
}}
function paintPointSel(){var canvas = document.getElementById("ardoraActCanvasAnim");var contexto = canvas.getContext("2d");var colorB;var colorL;aniPoint++;
if (aniPoint>3){aniPoint=0};if (aniPoint==0) { colorB=colorSele; colorL=colorBack;}
if (aniPoint==1) { colorB=colorButton; colorL=colorSele;}
if (aniPoint==2) { colorB=colorText; colorL=colorButton;} if (aniPoint==3) { colorB=colorBack; colorL=colorText;}
contexto.beginPath();contexto.fillStyle =colorB;contexto.arc(parseInt(panelWords(coorx[texSel])),parseInt(panelWords(coory[texSel])),5, 0 , 2 * Math.PI, false);
contexto.fill();contexto.strokeStyle = colorL;contexto.lineWidth = 2;contexto.stroke();}
function isCorrect(cell){
var totalCorrect=0;var solu=$(cell).children("div.txtCell_txt").text();if (answers[texSel].replace("&#39;","'")==solu){ $(cell).children("div.txtCell_txt").addClass("txtCellOk");$(cell).children("div.txtCell_txt").removeClass("txtCell_txt");
doneA[texSel]=solu;score = score + scoreInc;successes++;timeAct = timeAct + timeBon;for (i = 0; i < doneA.length; i++) {if (doneA[i]!="0"){totalCorrect++;}}
if (totalCorrect==doneA.length){clearInterval(timePoint);paintPoints();$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");}
else{texSel=Math.floor(Math.random() * (answers.length-1));while (doneA[texSel]!="0"){texSel++;if (texSel>answers.length-1){texSel=0;}}paintPoints();paintPointSel();}}
else{attempts++; score = score - scoreDec; if (tiAttempts) { if (attempts > attemptsMax){$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");}else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < doneA.length; i++) {doneA[i] = answers[i];}paintPoints(); }
function paintBack(){}
function panelWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
