//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}actorder = actorder.sort(function() {return Math.random() - 0.5});indexGame=actorder[in_act];paintBoard();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function paintQuestion(){var newHtml = "";if (quest[indexGame-1][2].localeCompare("")!=0){newHtml=newHtml+"<img alt='"+altQuest[indexGame-1]+"' src='"+dirMedia+quest[indexGame-1][2]+"'/>"}
newHtml=newHtml+"<p>";if (quest[indexGame-1][1].localeCompare("X")==0){newHtml=newHtml+"<img alt='Play' id='bQuestSound' src='"+dirMedia+"sound.png'/>"}
newHtml=newHtml+quest[indexGame-1][0]+"</p>";$("#ardoraQuest").html(newHtml);$("#bQuestSound").attr("tabindex","0");
if (quest[indexGame-1][1].localeCompare("X")==0){$("#bQuestSound").click(function () {
var nameItem="auQ"+indexGame.toString();silenceAll();document.getElementById(nameItem).play();tiAudio=true;});
$("#bQuestSound").keydown(function(e) {if (e.which!=9){var nameItem = "auQ" + indexGame.toString();silenceAll();document.getElementById(nameItem).play();tiAudio=true;}});
}}
function silenceAll(){if (tiAudio){$("audio").each(function(ind, e) {$(e)[0].pause();$(e)[0].currentTime=0;});tiAudio=false;}}
function paintBoard(){ paintQuestion(); var newHtml = "<ul>";var passAcBoard=[];actualBoard=[]; actualState=[];
for (i=0;i<dat.length; i++) {if (parseInt(selImaWords(dat[i][0]))==indexGame){passAcBoard.push(parseInt(selImaWords(dat[i][1])));actualState.push(0);}}
for (i=0;i<passAcBoard.length;i++){var ind=Math.floor(Math.random() * passAcBoard.length);while (passAcBoard[ind]<0){ind++;
if (ind==passAcBoard.length){ind=0;}}actualBoard.push(passAcBoard[ind]);passAcBoard[ind]=-1;}
for (i=0;i<actualBoard.length;i++){newHtml=newHtml+"<li id='cellG"+actualBoard[i].toString()+"' class='bGame'>";
for (j=0;j<dat.length;j++){if (parseInt(selImaWords(dat[j][0]))==indexGame){if (parseInt(selImaWords(dat[j][1]))==actualBoard[i]){if (parseInt(selImaWords(dat[j][4]))==1){
var Nm=parseInt(selImaWords(dat[j][1]))-1;
newHtml=newHtml+"<div class='backbGame'><p>"+selImaWords(media[Nm][1])+"</p></div>"}}}}newHtml=newHtml+"</li>";}
newHtml=newHtml+"</ul>";$("#ardoraBoard").html(newHtml);$(".bGame").css("border-color",colorButton);
for (i=0;i<actualBoard.length;i++){for (j=0;j<dat.length; j++){if (parseInt(selImaWords(dat[j][0]))==indexGame){if (parseInt(selImaWords(dat[j][1]))==actualBoard[i]){
if (parseInt(selImaWords(dat[j][3]))==1){var Nm=parseInt(selImaWords(dat[j][1]))-1;var bckIma="url('"+dirMedia+media[Nm][2]+"')";
$("#cellG"+actualBoard[i].toString()).css("background-image",bckIma);$("#cellG" + actualBoard[i].toString()).attr("aria-label",alt[Nm]);}}}}}
$(".bGame").mouseenter(function (){$(this).css("border-color",colorSele);});
$(".bGame").mouseleave(function (){for (i=0;i<actualBoard.length; i++) {if (actualBoard[i]==parseInt($(this).attr('id').replace("cellG",''))){
if (actualState[i]==0){$(this).css("border-color",colorButton);}}}});
$( ".bGame" ).click(function() {for (i=0;i<actualBoard.length; i++) {if (actualBoard[i]==parseInt($(this).attr('id').replace("cellG",''))){
if (actualState[i]==0){actualState[i]=1;$(this).css("-webkit-box-shadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");
$(this).css("box-shadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("border-color",colorSele);$(this).css("border-style","solid");
var idCell = $(this).attr("id").replace("cellG", "");silenceAll();if ($("#auSel"+idCell).length){
var ini=-1;for (i=0; i<dat.length; i++) {if (parseInt(selImaWords(dat[i][0])) == indexGame && parseInt(selImaWords(dat[i][1]))==parseInt(idCell)) {ini=i}}
if (parseInt(selImaWords(dat[ini][5]))==1){document.getElementById("auSel"+idCell).play();tiAudio=true;}}}else{
actualState[i]=0;$(this).css("-webkit-box-shadow","4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow","4px 4px 4px rgba(50, 50, 50, 0.5)");
$(this).css({borderColor: colorButton,borderStyle: "dashed"});}}}});
$(".backbGame").css("background-color",colorBack);$(".backbGame p").css("color", colorText);
var canWidth=$("#ardoraAct").css("width").replace("px","");var canHeight=$("#ardoraAct").css("height").replace("px","");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});
$(".bGame").attr("tabindex","0");$(".bGame").focus(function() {$(this).css("border-color", colorSele);});
$(".bGame").blur(function() {for (i = 0; i < actualBoard.length; i++) {if (actualBoard[i] == parseInt($(this).attr("id").replace("cellG",""))) {if (actualState[i] == 0) {$(this).css("border-color", colorButton);}}}});
$(".bGame").keydown(function(e) {if (e.which!=9){for (i = 0; i < actualBoard.length; i++) {if (actualBoard[i] == parseInt($(this).attr("id").replace("cellG",""))) {
if (actualState[i] == 0) {actualState[i]=1;$(this).css("-webkit-box-shadow", "inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow", "inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("border-color", colorSele);$(this).css("border-style", "solid");
var idCell = $(this).attr("id").replace("cellG", "");silenceAll();if ($("#auSel" + idCell).length) {var ini=-1;for (i=0; i<dat.length; i++) {if (parseInt(selImaWords(dat[i][0])) == indexGame && parseInt(selImaWords(dat[i][1])) == parseInt(idCell)) {ini=i}}
if (parseInt(selImaWords(dat[ini][5])) == 1) {document.getElementById("auSel"+idCell).play();tiAudio=true;}}} else {actualState[i]=0;$(this).css("-webkit-box-shadow", "4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow", "4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css({borderColor: colorButton,borderStyle: "dashed"});}}}}});
}
function randomSort(){}
function isCorrect(){
var partialCo= true;for (i = 0; i < actualBoard.length; i++) {for (j = 0; j < dat.length; j++) {if (parseInt(selImaWords(dat[j][0])) == indexGame) {
if (parseInt(selImaWords(dat[j][1])) == actualBoard[i]) {if (parseInt(selImaWords(dat[j][2])) != actualState[i] ) {partialCo=false;}}}}}
if (partialCo){score=score+scoreInc;timeAct=timeAct+timeBon;successes++;in_act++;if (in_act>quest.length-1){$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");$("#buttonOk").remove();}else{indexGame=actorder[in_act];paintBoard();}}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function selImaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
