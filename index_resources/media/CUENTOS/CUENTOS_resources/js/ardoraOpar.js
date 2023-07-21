//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
calcMaxWidth();paintbGame();$(".bGame").css("background",colorButton);
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function calcMaxWidth() {$("#ardoraAct").css("width", actMaxWidth + "px");$("#ardoraAct").css("height",actMaxHeight + "px");
var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": (parseInt(canWidth) + 20).toString(),"height": canHeight});}
function paintbGame() {var iW = [];var iWS = [];var oW = "";if (indexG==0){var actualW=words1G;}if (indexG==1){var actualW=words2G;}if (indexG==2){var actualW=words3G;}
for (i = 0; i < actualW.length; i++) {iW.push("");}for (i = 0; i < iW.length; i++) {var ind = Math.floor(Math.random() * iW.length);while (iW[ind].localeCompare("") != 0) {
ind++;if (ind == iW.length) {ind = 0;}}iW[ind]=oparWords(actualW[i]);}
var newHtml = "<ul id='sortable'>";for (i=0; i<iW.length; i++) {newHtml = newHtml + "<li tabindex='0' id='cellG" + i.toString() + "' class='bGame'><p>" + iW[i] + "</p></li>";
}newHtml = newHtml + "</ul>";$("#ardoraActSort").html(newHtml);$("#sortable").sortable({revert: true});$("ul, li").disableSelection();
$(".bGame").mouseenter(function () {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});
var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");
$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");
$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='"+color1+"', endColorstr='"+color2+"')");
});
$(".bGame").mouseleave(function () {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").focus(function() {$(this).css({background: colorSele,color: colorText,borderColor: colorButton});var color2 = colorSele;var color1 = colorBack;
$(this).css("background", "-webkit-radial-gradient(center, ellipse, " + color1 + "," + color2 + ")");$(this).css("background", "-moz-radial-gradient(center,ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "-ms-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");$(this).css("background", "-o-radial-gradient(center, ellipse, " + color1 + ", " + color2 + ")");
$(this).css("background", "radial-gradient(ellipse at center, " + color1 + ", " + color2 + ")");$(this).css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr='" + color1 + "', endColorstr='" + color2 + "')");});
$(".bGame").blur(function() {$(this).css({background: colorButton,color: colorBack,borderColor: colorBack});});
$(".bGame").keydown(function(event){if(event.which == 37 || event.which == 38) {$(this).insertBefore($(this).prev());}
if(event.which == 39 || event.which == 40) {$(this).insertAfter($(this).next());}
if (event.which == 84 || event.which == 33) {$(this).parent().prepend($(this));}
if (event.which == 66 || event.which == 34) {$(this).parent().append($(this));}
if(event.which == 82) {var p = $(this).parent();p.children().each(function(){p.prepend($(this))})}
if(event.which == 83) {var p = $(this).parent();p.children().each(function(){if(Math.random()<.5){p.prepend($(this));}else{p.append($(this));}})};$(this).focus();});
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function randomSort() {}
function isCorrect(){
if (indexG==0){var actualW=words1G; var c=c1;}if (indexG==1){var actualW=words2G;var c=c2;}if (indexG==2){var actualW=words3G;var c=c3;}var correct = true;var i=0;
$("ul li").each(function (ind, e){
if (oparWords(actualW[i]).substring(0,c[i]).localeCompare($(e).text())!=0){correct=false;}i++;});
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;indexG++;var iEnd=false;if (indexG==3){iEnd=true}
else{if (indexG==1){if (words2G.length==0){if (words3G.length==0){iEnd=true;}else{indexG++;}}}else{if (words3G.length==0){iEnd=true}}}
if (iEnd) {$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {paintbGame();$(".bGame").css("backgroundColor", colorButton);$(".bGame").css("color", colorBack);}
} else {attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");
} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
var iW = [];if (indexG==0){var actualW=words1G;}if (indexG==1){var actualW=words2G;}if (indexG==2){var actualW=words3G;}
for (i = 0; i < actualW.length; i++) {iW.push(oparWords(actualW[i]));}var i=0;$("ul li").each(function (ind, e) {$(e).html("<p>" + iW[i] + "</p>");i++;});
}
function paintBack(){}
function oparWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
