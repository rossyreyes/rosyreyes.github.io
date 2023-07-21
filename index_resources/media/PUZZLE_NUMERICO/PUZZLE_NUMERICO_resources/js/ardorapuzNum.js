//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()} paintBoard();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
}
function paintBoard() {$("#ardoraQuest").html("<p>? ? ? = ?</p>");var newHtml="<ul>";var chargeBoard=[];var actualBoard=[];for (i = 0; i < a.length; i++) {if (a[i].localeCompare("0")==0){chargeBoard.push("+")}
if (a[i].localeCompare("1")==0){chargeBoard.push("-")}if (a[i].localeCompare("2")==0){chargeBoard.push("x")}if (a[i].localeCompare("3")==0){chargeBoard.push(":")}chargeBoard.push(parseInt(puzNumWords(b[i])).toString().trim());chargeBoard.push(parseInt(puzNumWords(d[i])).toString().trim());chargeBoard.push("R"+parseInt(c[i]).toString().trim());}
for (i = 0; i < chargeBoard.length; i++) {var ind = Math.floor(Math.random() * chargeBoard.length);while (chargeBoard[ind].localeCompare("#")==0) {ind++;if (ind==chargeBoard.length) {ind=0;}}actualBoard.push(chargeBoard[ind]);chargeBoard[ind]="#";actualState.push(0);}
for (i = 0; i < actualBoard.length; i++) {if (actualBoard[i].localeCompare("+")==0 || actualBoard[i].localeCompare("-")==0 || actualBoard[i].localeCompare("x")==0 || actualBoard[i].localeCompare(":")==0){newHtml = newHtml + "<li id='cellG"+i.toString()+"' class='bOp bGame'>";
newHtml = newHtml + "<div class='backbOp backbGame' id='divCellG"+i.toString()+"'><p>"+actualBoard[i].toString()+"</p></div>";}else{
if (actualBoard[i].substring(0,1).localeCompare("R")==0){newHtml=newHtml+"<li id='cellG"+i.toString()+"' class='bSol bGame'>";newHtml = newHtml + "<div class='backbSol backbGame' id='divCellG"+i.toString()+"'><p>"+actualBoard[i].toString().substring(1)+"</p></div>";}
else{newHtml=newHtml+"<li id='cellG"+i.toString()+"' class='bNum bGame'>";newHtml = newHtml + "<div class='backbNum backbGame' id='divCellG"+i.toString()+"'><p>"+actualBoard[i].toString()+"</p></div>";}}newHtml = newHtml + "</li>";}
newHtml=newHtml+"</ul>";$("#ardoraBoard").html(newHtml);$(".bGame").css("border-color", colorButton);$(".bGame").mouseenter(function () {$(this).css("border-color", colorSele);});$(".bGame").mouseleave(function () {$(this).css("border-color", colorButton);});
$(".bGame").click(function () {if ($(this).hasClass("bNum")){if (actualState[parseInt($(this).attr("id").replace("cellG", ""))]==0) {
if (!iOp1){actualState[parseInt($(this).attr("id").replace("cellG", ""))]=1;iOp1=true;idiOp1=parseInt($(this).attr("id").replace("cellG", ""));}
else{if (!iOp2){actualState[parseInt($(this).attr("id").replace("cellG", ""))]=1;iOp2=true;idiOp2=parseInt($(this).attr("id").replace("cellG", ""))}}}
else{actualState[parseInt($(this).attr("id").replace("cellG", ""))]=0;if (idiOp1==parseInt($(this).attr("id").replace("cellG", ""))){ iOp1=false;idiOp1=-1;}if (idiOp2==parseInt($(this).attr("id").replace("cellG", ""))){ iOp2=false;idiOp2=-1;}}}
if ($(this).hasClass("bSol")){if (actualState[parseInt($(this).attr("id").replace("cellG", ""))]==0) {if (!iSol){actualState[parseInt($(this).attr("id").replace("cellG", ""))]=1;iSol=true;idiSol=parseInt($(this).attr("id").replace("cellG", ""));}}
else{actualState[parseInt($(this).attr("id").replace("cellG", ""))]=0;iSol=false;idiSol=-1;}}
if ($(this).hasClass("bOp")){if (actualState[parseInt($(this).attr("id").replace("cellG", ""))]==0) {if (!iM){actualState[parseInt($(this).attr("id").replace("cellG", ""))]=1;iM=true;idiM=parseInt($(this).attr("id").replace("cellG", ""))}}
else{actualState[parseInt($(this).attr("id").replace("cellG", ""))]=0;iM=false;idiM=-1;}}
if (actualState[parseInt($(this).attr("id").replace("cellG", ""))]==1) {$(this).css("-webkit-box-shadow", "inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow", "inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("border-color", colorSele);$(this).css("border-style", "solid");
} else {$(this).css("-webkit-box-shadow", "4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css("box-shadow", "4px 4px 4px rgba(50, 50, 50, 0.5)");$(this).css({borderColor: colorButton,borderStyle: "dashed"});}showCalculation();});
$(".bGame").attr("tabindex","0");$(".bGame").keydown(function(e){if (e.which!=9 && e.which!=37 && e.which!=39){$(this).trigger("click");}; if (e.which==37){$(this).prev().focus();}; if (e.which==39){$(this).next().focus();}});
$(".bGame").focus(function() {$(this).css("border-color", colorSele);});$(".bGame").blur(function() {$(this).css("border-color", colorButton);});
$(".backbGame").css("background-color", colorBack);$(".backbGame p").css("color", colorText);$(".bSol").css("background-color", colorSol);$(".backbSol").css("background-color", colorSol);var canWidth = $("#ardoraAct").css("width").replace("px", "");var canHeight = $("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height": canHeight});}
function showCalculation(){var calculation="";var leftCalculation="";if (idiOp1>-1){calculation=calculation+$("#divCellG"+idiOp1.toString()).text();}else{calculation=calculation+"? ";}
if (idiM>-1){calculation=calculation+" "+$("#divCellG"+idiM.toString()).text();}else{calculation=calculation+" ? ";}if (idiOp2>-1){calculation=calculation+" "+$("#divCellG"+idiOp2.toString()).text();}else{calculation=calculation+" ? ";}
leftCalculation=calculation.replace("x","*").replace(":","/");calculation=calculation+" = ";if (idiSol>-1){calculation=calculation+$("#divCellG"+idiSol.toString()).text();}else{calculation=calculation+"? ";}$("#ardoraQuest").html("<p>"+calculation+"</p>");
if (iOp1 && iOp2 && iM && iSol){if (eval(leftCalculation)==parseInt($("#divCellG"+idiSol.toString()).text())){$("#cellG"+idiOp1.toString()).fadeOut(1000,function(){$("#cellG"+idiOp1.toString()).remove();});$("#cellG"+idiOp2.toString()).fadeOut(1000,function(){$("#cellG"+idiOp2.toString()).remove();});
$("#cellG"+idiM.toString()).fadeOut(1000,function(){$("#cellG"+idiM.toString()).remove();});$("#cellG"+idiSol.toString()).fadeOut(1000,function(){$("#cellG"+idiSol.toString()).remove();});$("#ardoraQuest").fadeOut(800,function(){$("#ardoraQuest").html("<p>? ? ? = ?</p>");$("#ardoraQuest").fadeIn(800);})
iOp1=false;idiOp1=-1;iOp2=false;idiOp2=-1;iM=false;idiM=-1;iSol=false;idiSol=-1;timeAct=timeAct+timeBon;successes++;if (successes==a.length) {$("#ardoraQuest").html("<p></p>");score=score+scoreInc;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();}}
else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}}}
function randomSort(){
}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function puzNumWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
