//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var txtSel;
function initAct(){if (tiAval){parent.iniciaActividade()}
if ((tiTime) && (tiButtonTime)){paintButtonTime();}else{showText();}$(":input").attr("autocomplete","off");$(":input").attr("spellcheck",false);}
function reorganiza(){if ($("#ardoraAct img.imaRight").length>0){var newWi=$("#ardoraAct").innerWidth()-$("#ardoraAct img.imaRight").innerWidth()-$("#cellHome").innerWidth()-15;$("#ardoraAct p").css("width",newWi.toString()+"px");var mr=$("#cellHome").innerWidth()+10;$("#ardoraAct img.imaRight").css("marginRight",mr);}
for (j=1;j<41;j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {document.getElementById("txt" + numItem.toString()).style["top"] = $("#" + nameItem).position().top.toString() + "px";document.getElementById("txt" + numItem.toString()).style["left"] = $("#" + nameItem).position().left.toString() + "px";}}}
function showText(){
document.getElementById("ardoraAct").innerHTML=txtC[indexTXT]+'<canvas id="ardoraActCanvas" width="2px" height="2px"></canvas><canvas id="ardoraHelpCanvas" width="2px" height="2px"></canvas>';
resizeCanvas();cssColors()
$("#ardoraAct").append("<div id='cellHome' class='txtCellHome'></div>");initItems();cssColors()
$(".imaup").keydown(function(e) {if (e.which != 9) {$(this).click();}});
$(".imaup").on("touchstart click", function() {var iu=$(this).attr("src").split(".");var newDivBig = $('<div id="imaForTagBig"  tabindex="0"><span class="background-image" role="img" aria-label="' + $(this).attr("alt") + '"></span></div>);');
newDivBig.css({height: "100%",width: "100%",position: "absolute",padding: "0px",margin: "0px",backgroundImage: "url("+iu[0]+"_big."+iu[1]+")",backgroundColor: "rgba(255,253,253,0.8)",backgroundRepeat: "no-repeat",backgroundPosition: "center center",top: "0",left: "0"});newDivBig.mousedown(function(e) {$("#imaForTagBig").remove();});
$("body").append(newDivBig);$("#imaForTagBig").focus();$("#imaForTagBig").keydown(function(e) {if (e.which == 27) {newDivBig.mousedown();}});});
}
function initItems(){var aItems = new Array();var indexArray=0;var minItem=9;var maxItem=1;
for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {if (numItem>maxItem){maxItem=numItem}if (numItem<minItem){minItem=numItem}}}
for (i = 0; i < a.length; i++) {if (parseInt(completaWords(a[i]))>=minItem && parseInt(completaWords(a[i]))<=maxItem){
var numItem=parseInt(completaWords(a[i]));var nameItem="item"+numItem.toString();var theItem=document.getElementById(nameItem);if (theItem!=null){aItems.push(answers[i]);}
}}
var randomArray = new Array();for (i = 0; i < aItems.length; i++) {randomArray[i]=aItems[i];aItems[i]="~";}for (i = 0; i < aItems.length; i++) {
var rand = Math.floor(Math.random() * aItems.length);while (aItems[rand]!="~"){rand++;if (rand==aItems.length){rand=0;}}aItems[rand]=randomArray[i];}
indexArray=0;for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {var newCell="<div id='txt"+numItem.toString()+"' class='txtCell'></div>";
$("#ardoraAct").append(newCell);$("#txt"+numItem.toString()).attr({"width": $("#"+nameItem).css("width"),"height":$("#"+nameItem).css("height")})
document.getElementById("txt"+numItem.toString()).style["top"] = $("#"+nameItem).position().top.toString() + "px";
document.getElementById("txt"+numItem.toString()).style["left"] = $("#"+nameItem).position().left.toString() + "px";
$("#cellHome").append("<div aria-grabbed='false' tabindex='0' id='txt"+numItem.toString()+"_txt' class='txtCell_txt' <p>"+aItems[indexArray]+"</p></div>");indexArray++;}}
$(".txtCell").attr("aria-dropeffect","execute");$(".txtCell").attr("tabindex","0");$(".txtCell").focus(function(e){$(this).css("border-color",colorSele);$(this).css("border-style","solid");});
$(".txtCell").blur(function(e){$(this).css("border-color","darkslategray");$(this).css("border-style","dotted");});$(".txtCell_txt").focus(function(e){$(this).css("border-color",colorSele);});
$(".txtCell_txt").blur(function(e){$(this).css("border-color","#000000");});
$(".txtCell_txt").keydown(function(e){if (e.which!=9 && e.which!=37 && e.which!=38 && e.which!=39 && e.which!=40 && e.which!=27){$(this).attr("aria-grabbed","true");txtSel=$(this);txtSel.css("background",colorBack);$(".txtCell").not(".ui-droppable-disabled").first().focus();}
if (e.which==27){$("#cellHome").append($(this));$(".txtCell").removeClass(".ui-droppable-disabled");$(".txtCell").droppable("option","disabled",false);$(".txtCell").attr("tabindex","0");$(":input").val("");showText();$(".txtCell_txt").attr("tabindex","0");}});
$(".txtCell").keydown(function(e){if ($(this).hasClass("ui-droppable-disabled")){}else{if (e.which!=9){document.getElementById("ardoraHelpCanvas").style["visibility"] = "hidden";var numItem = $(this).attr("id").substring(3);var nameItem = "item" + numItem;var theItem = document.getElementById(nameItem);theItem.value = txtSel.attr("id");var cssObj = {"border-color": "black","border-style": "dotted","border-width": "1px"};
$(this).css(cssObj);if (txtSel.element !== undefined) {txtSel.element.droppable("enable");}$(this).droppable("disable");txtSel.position({of: $(this),my:'left top',at:'left top'});
txtSel.draggable("option", "revert", "invalid");txtSel.element = $(this);txtSel.attr("aria-grabbed","false");$(this).attr("tabindex","-1");var long=txtSel.attr("id").length;var newtxt_txt=String(parseInt(txtSel.attr("id").substring(3,long-4))+1);cssColors();if ($("#txt"+newtxt_txt+"_txt").length){$("#txt"+newtxt_txt+"_txt").focus();}}}});
$(".txtCellHome").droppable({accept: ".txtCell_txt",drop:handleDropEventHome});$(".txtCell").droppable({accept: ".txtCell_txt",
drop:handleDropEvent,over: function () {var indexHelp = parseInt($(this).attr("id").substring(3));if ($.trim(itemHelp[indexHelp - 1])) {
paintHelp($("#item"+indexHelp.toString()));}var cssObj = {"border-color": colorSele,"border-style": "solid","border-width": "2px",};
$(this).css(cssObj);},out: function () {var cssObj = {"border-color": "black","border-style": "dotted","border-width": "1px",};$(this).css(cssObj);}});
$(".txtCell").mouseleave(function () {document.getElementById("ardoraHelpCanvas").style["visibility"] = "hidden";});$(".txtCell_txt").draggable({
containment: "document",revert: "invalid",cursor: "move",start: handleDragStart,drag: function (event, ui) {},stop: function () {}});cssColors();setTimeout(function() {reorganiza()},1000);}
function handleDropEvent (event, ui) {document.getElementById("ardoraHelpCanvas").style["visibility"] = "hidden";
var numItem=$(this).attr("id").substring(3);var nameItem = "item" + numItem;var theItem = document.getElementById(nameItem);theItem.value=ui.draggable.attr("id");
var cssObj = {"border-color": "black","border-style": "dotted","border-width": "1px"};$(this).css(cssObj);
if (ui.draggable.element !== undefined) {ui.draggable.element.droppable("enable");}$(this).droppable("disable");
ui.draggable.position({of: $(this),my: 'left top',at: 'left top'});
ui.draggable.draggable("option", "revert", "invalid");ui.draggable.element = $(this);}
function handleDropEventHome (event, ui) {document.getElementById("ardoraHelpCanvas").style["visibility"] = "hidden";
for (j = 1; j < 41; j++) {var numItem = j;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {if (ui.draggable.attr("id")==theItem.value){theItem.value="";}}}
if (ui.draggable.element !== undefined) {ui.draggable.element.droppable("enable");}
ui.draggable.draggable("option", "revert", "invalid");ui.draggable.element = $(this);}
function handleDragStart (event, ui) {txtSel=$(this) }
function paintHelp(item){document.getElementById("ardoraHelpCanvas").style.zIndex=3;var canvas = document.getElementById("ardoraHelpCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.font="16px " + fHelp; var indexHelp=parseInt($(item).attr("name").substring(4));var metricsW = contexto.measureText(itemHelp[indexHelp-1]).width+20;
var metricsH = 10+16+10;$("#ardoraHelpCanvas").attr({"width": metricsW,"height": metricsH});var topHelp=Math.round($(item).position().top)-metricsH;
var leftHelp=Math.round($(item).position().left)+10-(canvas.width/2);var xPoint=0;if (leftHelp<5){leftHelp=5;xPoint=Math.round($(item).position().left)+10;};
document.getElementById("ardoraHelpCanvas").style["visibility"]="visible";document.getElementById("ardoraHelpCanvas").style["position"]="absolute";document.getElementById("ardoraHelpCanvas").style["top"]=topHelp.toString()+"px";
document.getElementById("ardoraHelpCanvas").style["left"]=leftHelp.toString()+"px";
contexto.fillStyle=colorSele;var gcolorSele=colorSele;colorSele="#00FF00";paintBubble(contexto,0,0,canvas.width-10, canvas.height-3,xPoint,10);colorSele=gcolorSele;
contexto.beginPath();contexto.lineWidth="1";contexto.textAlign="left";
contexto.font="16px " + fHelp;contexto.shadowBlur = 0;contexto.shadowOffsetX = 0;contexto.shadowOffsetY = 0;
contexto.fillStyle="#000000";contexto.fillText(itemHelp[indexHelp-1],5,16);contexto.fill();}
function randomSort(){};
function resizeCanvas(){var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");
$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});$("#ardoraActCanvasAnim").attr({"width": canWidth,"height": canHeight});};
function isCorrect(){successes=consolidateSuccess;score=consolidateScore;var correct=true;for (j=1; j<41; j++){var numItem=j;var nameItem="item"+numItem.toString();
var theItem=document.getElementById(nameItem);var ansCorrect="";if (theItem != null){
if (theItem.value!=""){var theAnswer = $("#"+theItem.value).text();
for (i = 0; i < a.length; i++) {if (parseInt(completaWords(a[i])) == numItem) {if (answers[i].replace("&#39;","'")==theAnswer){ansCorrect=theItem.value;}}}}
if (theItem.value==ansCorrect && $.trim(theItem.value)!=""){
itemCorr[numItem-1]="1";consolidateSuccess++;consolidateScore=consolidateScore+scoreInc;
score = score + scoreInc;successes++;}
else{
consolidateScore=consolidateScore-scoreDec;
score = score - scoreDec;correct=false;}}}if (correct) {if (indexTXT==txtC.length-1){showMessage("Ok");$("#buttonOk").remove();}else{
showButtonNext();
timeAct = timeAct + timeBon;}}else{attempts++;if (tiAttempts) {
if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){for (i = 0; i < itemCorr.length; i++) {itemCorr[i]="1";}showCorrect();}
function paintBack(){showText();consolidateSuccess=successes;consolidateScore=score;}
function completaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
function showCorrect() {for (j = 0; j < itemCorr.length; j++) {var numItem = j+1;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {var tx_t = "#txt"+numItem.toString()+"_txt";var tx = "#txt"+numItem.toString();$(tx_t).remove();$(tx).remove();}}
for (j = 0; j < itemCorr.length; j++) {if (itemCorr[j] != "0") {var numItem = j+1;var nameItem = "item" + numItem.toString();var theItem = document.getElementById(nameItem);
if (theItem != null) {var txtCorr = document.getElementById("ardoraAct").innerHTML;var pos = txtCorr.indexOf(nameItem);var ans = "";
posItem = txtCorr.indexOf(">", pos) + 1;for (i = 0; i < a.length; i++) {if (parseInt(completaWords(a[i])) == numItem) {ans = answers[i];}}
output = [txtCorr.slice(0, posItem), "<b>" + ans + "</b>", txtCorr.slice(posItem)].join("");var it = "input#" + nameItem;
document.getElementById("ardoraAct").innerHTML = output;$(it).remove();}}}initItems();}
function loadImages(){var d=document;if(d.images){if(!d.pre) d.pre=new Array();var i,j=d.pre.length,a=loadImages.arguments; for(i=0; i<a.length; i++)if (a[i].indexOf("#")!=0){d.pre[j]=new Image;d.pre[j++].src=a[i];}}}
function showButtonNext() {var canvas = document.getElementById("ardoraActCanvas");document.getElementById("ardoraActCanvas").style.zIndex=5;document.getElementById("ardoraActCanvas").style["visibility"] = "visible";canvas.width = canvas.width;
var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.50;contexto.fillStyle = colorBack;contexto.fillRect(0,0,canvas.width, canvas.height);contexto.font="14px "+fMenssage;var metricsW=contexto.measureText(textBNext).width;var x=canvas.width-metricsW-50;var y = canvas.height - 14 - 40;
contexto.beginPath();contexto.globalAlpha=1;contexto.lineWidth=2;contexto.fillStyle=colorButton;contexto.strokeStyle=colorSele;roundedRect(contexto, x, y, metricsW + 45, 14 + 20, 5, colorButton);contexto.shadowColor = "black";contexto.shadowBlur = 15;
contexto.shadowOffsetX=4;contexto.shadowOffsetY=4;contexto.stroke();contexto.beginPath();contexto.textAlign="left";contexto.fillStyle = colorText;contexto.fillText(textBNext,x+10,y+14+10);contexto.lineWidth=5;contexto.stroke();contexto.fill();
$("#ardoraActCanvas").bind("click", function(e) {$("#ardoraActCanvas").unbind();document.getElementById("ardoraActCanvas").style.zIndex=0;document.getElementById("ardoraActCanvas").style["visibility"]="hidden";indexWord=0;indexTXT++;showText();});}
