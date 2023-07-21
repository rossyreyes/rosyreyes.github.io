//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintQuest();paintbGame();paintLetters();$(".bLetter").css("background",colorButton);
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintQuest(){$("#ardoraQuest").html("");
if (audioW[indexG].localeCompare("")==0){$("#ardoraQuest").html("<p>" + questionW[indexG] + "</p>");}else{
$("#ardoraQuest").html("<img id='playSound' class='imaLeft' src='AHORCADO_resources/media/' alt='Sound' align='left'>"+ "<p>" + questionW[indexG] + "</p>");
$("#playSound").bind("click", function (e) {var au="audio"+audioW[indexG];document.getElementById(au).play();});}
profG=parseInt($("#ardoraQuest").css("height").replace("px", ""));
$("#ardoraImage").html("");if (imageW[indexG].localeCompare("")!=0){$("#ardoraImage").html("<img alt='"+alterW[indexG]+"' src='"+dirMedia+imageW[indexG]+"'/>");}
profG=profG+200;
}
function randomSort(){
var iW=[];var iWL=[];for (i = 0; i < words.length; i++) {if (words[i].localeCompare("")!=0){iW.push(words[i]);iWL.push(wordsL[i]);wordsG.push("");wordsGL.push("");imageW.push("");questionW.push("");audioW.push("");}}
for (i = 0; i < iW.length; i++) {var ind = Math.floor(Math.random()*iW.length);while (wordsG[ind].localeCompare("")!=0){
ind++;if (ind==iW.length){ind=0;}}wordsGL[ind]=iWL[i];wordsG[ind]=iW[i];imageW[ind]=imaW[i];questionW[ind]=queW[i];audioW[ind]=auW[i];alterW[ind]=altW[i];}
}
function calcMaxWidth(){for (i = 0; i < wordsG.length; i++) {var actualSize=0;actualSize=$.trim(aforWords(wordsG[i])).length*(48+9);
if (actualSize>actMaxWidth){actMaxWidth=actualSize}}$("#ardoraAct").css("width",actMaxWidth+20+"px");
var canWidth=$("#ardoraAct").css("width").replace("px","");
var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": (parseInt(canWidth)+20).toString(),"height": canHeight});}
function checkLetter(cel){var sizeW=0;var correctL=false;for (i=0; i<$.trim(aforWords(wordsG[indexG])).length; i++) {if (fillLetter.indexOf(aforWords(wordsG[indexG]).substr(i,1))!=-1){sizeW++;}
if (aforWords(wordsG[indexG]).substr(i,1).localeCompare(cel.text())==0){correctL=true;$("#cellG"+i.toString()).append("<p>"+aforWords(wordsG[indexG]).substr(i,1)+"</p>");
$("#cellG"+i.toString()+" p").css("opacity","0");
var color2 = colorSele;var color1 = colorBack;
$("#cellG"+i.toString()).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$("#cellG"+i.toString()).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$("#cellG"+i.toString()).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$("#cellG"+i.toString()).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$("#cellG"+i.toString()).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$("#cellG"+i.toString()).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
$("#cellG"+i.toString()+" p").not(this).animate({opacity: 1}, 1000);indexWord++;}}cel.removeClass("bLetter");cel.addClass("letterOk");
cel.unbind();if (!correctL){cel.css("borderColor",borderError);cel.css("background",colorBack);attempts++;score = score-scoreDec;
if (tiAttempts){if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");}else {if (messageError.localeCompare("")!=0){$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}else {if (messageError.localeCompare("")!=0){$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}}else{if (indexWord==sizeW){attempts=0;successes++;timeAct=timeAct+timeBon;totalWord++;
if (totalWord==wordsG.length){score = score+scoreInc;$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");$("#buttonOk").remove();}else{score = score + scoreInc;
$(".bLetter").remove();$(".bGame").remove();
$(".letterOk").remove();indexWord=0;indexG++;paintQuest();paintbGame();paintLetters();$(".bLetter").css("backgroundColor",colorButton);$(".bLetter").css("color",colorBack);}}}}
function paintLetters(){profG=profG+72; var leV=0;var toV=profG;for (i = 0; i < fillLetter.length; i++) {
$("#ardoraAct").append("<div id='let"+i.toString()+"' class='bLetter'><p>"+fillLetter[i]+"</p></div>");
$("#let"+i.toString()).css("left",leV.toString()+"px");$("#let"+i.toString()).css("top",toV.toString()+"px");
leV=leV+45;if (leV+45>actMaxWidth){leV=0;toV=toV+45;}}
var heiAct=(toV+45).toString()+"px";$("#ardoraAct").css("height",heiAct);
$(".bLetter").bind("click", function (e){checkLetter($(this));});
$(".bLetter").mouseenter(function (){$(this).css({background: colorSele,color:colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});
calcMaxWidth();
$(".bLetter").mouseleave(function () {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bLetter").attr("tabindex", "0");$("#ardoraActCanvas").attr("tabindex", "0");$(".bLetter").focus(function(e) {$(this).css("backgroundColor", colorSele);});$(".bLetter").blur(function(e) {$(this).css("backgroundColor", colorButton);});
$(".bLetter").keydown(function(e) {if (e.which != 9 && e.which !=37 && e.which !=39) {checkLetter($(this));};if (e.which==39) {$(this).next(".bLetter").focus();};if (e.which==37) {$(this).prev(".bLetter").focus();}});
}
function paintbGame(){profG=profG+36+9;var leV=(actMaxWidth-($.trim(aforWords(wordsG[indexG])).length-1)*(36+19))/2;
var toV=profG;for (i = 0; i < $.trim(aforWords(wordsG[indexG])).length; i++) {
if (fillLetter.indexOf(aforWords(wordsG[indexG]).substr(i,1))!=-1){$("#ardoraAct").append("<div id='cellG"+i.toString()+"' class='bGame'></div>");
$("#cellG"+i.toString()).css("left",leV.toString()+"px");$("#cellG"+i.toString()).css("top",toV.toString()+"px");}
leV=leV+55;}}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
for (i = 0; i < $.trim(aforWords(wordsG[indexG])).length; i++) {if (aforWords(wordsG[indexG]).substr(i, 1).localeCompare("") != 0) {
$("#cellG" + i.toString()).html("<p>" + aforWords(wordsG[indexG]).substr(i, 1) + "</p>");$("#cellG" + i.toString()+" p").css("opacity","1");}}
}
function paintBack(){}
function aforWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
