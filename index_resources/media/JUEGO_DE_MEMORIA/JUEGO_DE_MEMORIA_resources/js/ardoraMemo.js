//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".imaCell_img").bind("click", function (e) {openCell($(this));});
$(".imaCell p").bind("click", function(e){openCell($("#ima"+$(this).attr("id").substr(1,1)+$(this).attr("id").substr(2,1)+"_img"));});
$(".imaCell_img").attr("tabindex","0");$(".imaCell_img").keydown(function(e){if (e.which!=9 && e.which!=37 && e.which!=39){ openCell($(this));}; if (e.which==37){var ant=$(this).parent().prev().attr("id");$("#"+ant+"_img").focus();}
if (e.which==39){var des=$(this).parent().next().attr("id");$("#"+des+"_img").focus();}});
$(".imaCell p").keydown(function(e){if (e.which!=9 && e.which!=37 && e.which!=39){penCell($("#ima" + $(this).attr("id").substr(1, 1) + $(this).attr("id").substr(2, 1) + "_img"));}});
}
function openCell(cel) {if (open1R.localeCompare("") == 0) {cel.not(this).animate({opacity: 0}, 1000);open1R = cel.attr("id").substr(3, 1);open1C = cel.attr("id").substr(4, 1);playAudio(cel);
$("#ima"+open1R+open1C).css("border-color",colorButton);$("#ima"+open1R+open1C).css("border-style","solid");$("#ima"+open1R+open1C).css("border-width","3px");
$("#p"+open1R.toString()+open1C.toString()).not(this).animate({opacity: 1}, 1000);} else {if (open2R.localeCompare("") == 0) {
cel.not(this).animate({opacity: 0}, 1000);open2R = cel.attr("id").substr(3, 1);open2C = cel.attr("id").substr(4, 1);playAudio(cel);$("#ima"+open2R+open2C).css("border-color",colorButton);
$("#ima"+open2R+open2C).css("border-style","solid");$("#ima"+open2R+open2C).css("border-width","3px");$("#p" + open2R.toString() + open2C.toString()).not(this).animate({opacity: 1}, 1000);a = setTimeout("isCorrect()",1000);}}}
function playAudio(cel){var i=parseInt(cel.attr("id").substr(3,1))-1;var j=parseInt(cel.attr("id").substr(4,1))-1;var numB = parseInt(memoWords(boardGame[i][j]));
var auId = "";if (numB < 20) {auId = mp31[numB-10];} else { auId = mp32[numB-20];}var auId="au"+auId;if(document.getElementById(auId)){document.getElementById(auId).play();}}
function randomSort(){
for (i = 0; i <pos.length; i++) {if (memoWords(pos[i]).substring(0,2).localeCompare("-1")!=0){var rRow = Math.floor(Math.random()*rows);var rCol = Math.floor(Math.random()*cols);
while (boardGame[rRow][rCol].localeCompare("")!=0){rCol=rCol+1;if (rCol==cols){rCol=0;rRow=rRow+1;if (rRow==rows){rRow=0;}}}
boardGame[rRow][rCol]=itp[i];rRow = Math.floor(Math.random()*rows);rCol = Math.floor(Math.random()*cols);while (boardGame[rRow][rCol].localeCompare("")!=0){
rCol=rCol+1;if (rCol==cols){rCol=0;rRow=rRow+1;if (rRow==rows){rRow=0;}}}boardGame[rRow][rCol]=pos[i];}}paintBoard();
}
function paintBoard(){
for (i = 0; i < rows; i++) {for (j = 0; j < cols; j++) {if (boardGame[i][j].localeCompare("$&") != 0) {var numB = parseInt(memoWords(boardGame[i][j]));
var ima = "";var wo = "";var alt="";if (numB < 20) {ima = im1[numB - 10];wo = wo1[numB-10];alt=alt1[numB-10];} else {ima = im2[numB-20];wo = wo2[numB-20];alt=alt2[numB-20];}
$("#ima"+(i+1).toString()+(j+1).toString()).append("<p id='p" + (i+1).toString()+(j+1).toString()+"'>" + wo + "</p>");
if (ima.localeCompare("")!=0) {$("#ima" + (i + 1).toString() + (j + 1).toString()).css("background-image", "url(" + dirMedia + ima + ")");$("#ima" + (i + 1).toString() + (j + 1).toString()).attr("aria-label",alt);}
else{ var styles = {top: "0",bottom: "0",left: "0",right: "0",width: "194px",height: "50%",margin: "auto"
};$("#p"+(i+1).toString()+(j+1).toString()).css( styles );}}}}
$("#ardoraAct").not(this).animate({opacity:1},2000);}
function isCorrect(){
clearTimeout(a);var cor=false;var op1=parseInt(memoWords(boardGame[parseInt(open1R-1)][parseInt(open1C-1)]));var op2=parseInt(memoWords(boardGame[parseInt(open2R-1)][parseInt(open2C-1)]));
if ((op1<20 && op2>19) || (op1>19 && op2<20)){if (op1<20){op1=op1-10;if (parseInt(memoWords(pos[op1]))==parseInt(op2)){cor=true;}}else{
op2=op2-10;if (parseInt(memoWords(pos[op2]))==parseInt(op1)){cor=true;}}}
if (cor){successes++;timeAct=timeAct+timeBon;$("#ima"+open1R+open1C+"_img").hide();$("#ima"+open2R+open2C+"_img").hide();
$("#p"+open1R+open1C).unbind("click");$("#p"+open2R+open2C).unbind("click");$("#p"+open1R+open1C).css("cursor","auto");$("#p"+open2R+open2C).css("cursor","auto");
ansDo++;if (ansDo==items){score = score + scoreInc;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();}}
else{attempts++;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");}}
$("#p"+open1R.toString()+open1C.toString()).not(this).animate({opacity:0},1000);$("#ima"+open1R+open1C+"_img").not(this).animate({opacity:1},1000);
$("#p"+open2R.toString()+open2C.toString()).not(this).animate({opacity:0},2000); $("#ima"+open2R+open2C+"_img").not(this).animate({opacity:1},2000);}$("#ima"+open1R+open1C).css("border-color",colorText);
$("#ima"+open1R+open1C).css("border-style","dotted");$("#ima"+open1R+open1C).css("border-width","1px");$("#ima"+open2R+open2C).css("border-color",colorText);$("#ima"+open2R+open2C).css("border-style","dotted");
$("#ima"+open2R+open2C).css("border-width","1px");open1R="";open1C="";open2R="";open2C="";
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
$(".imaCell_img").hide();$(".imaCell p").not(this).animate({opacity:1}, 1000);
}
function paintBack(){}
function memoWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
