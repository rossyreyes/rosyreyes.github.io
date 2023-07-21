//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()} initGame();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
}
function initGame(){$(".cell").each(function (index) {$(this).val("");});$(".damCell").css("border-color",colorText);$(".topLet").css("color",colorText);
$(".damCell").mouseenter(function() {$(this).css("border-color",colorSele);var coor=$(this).attr("id").slice(1).split("_");$("#numL"+coor[0]).css("color",colorSele);$("#letT"+coor[1]).css("color",colorSele);}).mouseleave(function() {
$(this).css("border-color",colorText);var coor=$(this).attr("id").slice(1).split("_");$("#numL"+coor[0]).css("color",colorText);$("#letT"+coor[1]).css("color",colorText);});
$(".cell").hover(function (e) {$(this).css("backgroundColor", colorButton);});$(".cell").mouseout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cell").click(function (e) {var idCell = $(this).attr("id").substring(1);var pos = idCell.indexOf("_");col = parseInt(idCell.substring(pos + 1));row = parseInt(idCell.substr(1, pos));});
$(".cell").focus(function (e) {$(this).css("backgroundColor", colorSele);});$(".cell").focusout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cell").keydown(function (e) {er = "|^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$|";if (e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode!= 9) {$(this).val(String.fromCharCode(e.keyCode).match(er));}
if (e.keyCode==37 || e.keyCode==38 || e.keyCode==39 || e.keyCode==40) {goCell(e.keyCode);}});
$(".cell").keypress(function (e) {var idCell=$(this).attr("id").substring(1);var position=idCell.indexOf("_");col=parseInt(idCell.substring(position + 1));row=parseInt(idCell.substr(1, position));
var code=e.charCode || e.keyCode;if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {} else {if (e.keyCode != 9){
this.value=String.fromCharCode(code).toUpperCase();for (i=0; i<upos.length; i++){for (j=0; j<upos[i].length; j++){if(colCount*(row-1)+col==parseInt(pos[i][j])){upos[i][j]=this.value;if (i==inQue){$("#dc1_"+(j+1).toString()).val(this.value);}}}}
checkLetters();if (code){nextCell();}}}});$("#ardoraQue").width($("#tableDam").width());drawQue();}
function goCell(toDir) {var newCol=col;var newRow=row;if (toDir==37) {newCol--;}if (toDir == 38) {newRow--;}if (toDir == 39) {newCol++;}
if (toDir == 40) {newRow++;}if ($("#ic" + newRow.toString() + "_" + newCol.toString()).length){col = newCol;row = newRow;$("#ic" + row.toString() + "_" + col.toString()).focus();}}
function nextCell() {if ($("#ic" + row.toString() + "_" + (col+1).toString()).length) {col++;$("#ic" + row.toString() + "_" + col.toString()).focus();}
else{if ($("#ic" + row.toString() + "_" + (col+2).toString()).length) {col++;col++;$("#ic" + row.toString() + "_" + col.toString()).focus();}
else{if ($("#ic" + (row+1).toString() + "_1").length) {row++;col=1;$("#ic" + row.toString() + "_"+ col.toString()).focus();}
else{if ($("#ic" + (row+1).toString() + "_2").length) {row++;col=2;$("#ic" + row.toString() + "_" + col.toString()).focus();}}}}}
function checkLetters(){var res=true;var inckCol=1;var inckRow=1;for (i=0; i<xCell.length; i++){if ($("#ic"+inckRow.toString()+"_"+inckCol.toString()).length){//existe a celda
if ($("#ic"+inckRow.toString()+"_"+inckCol.toString()).val().length>0){if ($("#ic"+inckRow.toString()+"_"+inckCol.toString()).val().localeCompare(DameroWords(xCell[i]).substr(0,1))==0){$("#ic"+inckRow.toString()+"_"+inckCol.toString()).css("color", colorText);}
else{if(tiCor){$("#ic"+inckRow.toString()+"_"+inckCol.toString()).css("color", colorError);} res=false;}}else{$("#ic"+inckRow.toString()+"_"+inckCol.toString()).css("color", colorText);res=false;}}
inckCol++;if (inckCol>colCount){inckCol=1;inckRow++;}}
for (i = 0; i < upos[inQue].length; i++) {if ($("#dc1_"+(i+1).toString()).length){if ($("#dc1_" + (i + 1).toString()).val().length > 0) {if ($("#dc1_" + (i + 1).toString()).val().localeCompare(DameroWords(yCell[inQue]).substr(i, 1)) == 0) {
$("#dc1_" + (i + 1).toString()).css("color", colorText);} else {if (tiCor) {$("#dc1_" + (i + 1).toString()).css("color", colorError);}res = false;}}
}}return res;}
function drawQue(){colDef=0;var newHtm="";if (inQue>0) {newHtm='<div id="goL" class="butfont">A</div>';}
if (inQue<yCell.length-1){newHtm=newHtm+'<div id="goR" class="butfont">C</div>';}newHtm=newHtm+'<div id="textQue">'+que[inQue]+"</div>";
newHtm=newHtm+'<div id="def"><table id="tableDef"><tr>';for (i=0; i<upos[inQue].length; i++){var loc="";
if (pos[inQue][i].localeCompare("0")!=0){if (parseInt(pos[inQue][i]) % colCount==0){loc= $("#letT" + (colCount).toString()).text();loc = loc + (Math.floor(parseInt(pos[inQue][i]) / colCount)).toString();}
else{loc= $("#letT" + (parseInt(pos[inQue][i]) % colCount).toString()).text();loc=loc+(Math.floor(parseInt(pos[inQue][i])/colCount)+1).toString();}}
newHtm=newHtm+'<td class="topLetDef" id="defT'+(i+1).toString()+'">'+loc+'</td>';}
newHtm=newHtm+"</tr><tr>";for (i=0; i<upos[inQue].length; i++){if (DameroWords(yCell[inQue]).substr(i,1).localeCompare(" ")==0){newHtm = newHtm+'<td class="blackCell"></td>';
}else{newHtm=newHtm+'<td class="damCellDef" id="d1_'+(i+1).toString()+'"><input id="dc1_'+(i+1).toString()+'" name="dc1_'+(i+1).toString()+'" type="text" class="cellDef" maxlength="1"/></td>';}}
newHtm=newHtm+"</tr></table></div>";$("#ardoraQue").html(newHtm);$(".butfont").css("backgroundColor", colorBack);$(".butfont").css("color", colorText);
$(".butfont").hover(function (e) {$(this).css("backgroundColor", colorText);$(this).css("color", colorBack);});
$(".butfont").mouseout(function (e) {$(this).css("backgroundColor", colorBack);$(this).css("color", colorText);});
for (i=0; i<upos[inQue].length; i++){$("#dc1_"+(i+1).toString()).val(upos[inQue][i]);}if (inQue>0){$("#goL").click(function() {inQue=inQue-1;drawQue();checkLetters();});}
if (inQue<yCell.length-1){$("#goR").click(function() {inQue=inQue+1;drawQue();checkLetters();});
$("#goR, #goL").attr("tabindex","0");$("#goR").keydown(function(e){if (e.which!=9){$("#goR").click();}});$("#goL").keydown(function(e){if (e.which!=9){$("#goL").click();}});
}
$(".cellDef").click(function (e) {var idCell = $(this).attr("id").substring(1);var pos = idCell.indexOf("_");colDef = parseInt(idCell.substring(pos + 1));});
$(".cellDef").focus(function (e) {$(this).css("backgroundColor", colorSele);});$(".cellDef").focusout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cellDef").hover(function (e) {$(this).css("backgroundColor", colorButton);});$(".cellDef").mouseout(function (e) {$(this).css("backgroundColor", colorBack);});
$(".cellDef").keydown(function (e) {er = "|^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*$|";if (e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 9) {$(this).val(String.fromCharCode(e.keyCode).match(er));};if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {goCellDef(e.keyCode);}});
$(".cellDef").keypress(function (e) {var idCell=$(this).attr("id").substring(1);var position=idCell.indexOf("_");colDef=parseInt(idCell.substring(position+1));var code = e.charCode || e.keyCode;if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {} else {if (e.which!=9) {
var idCell = $(this).attr("id").substring(1);var pos = idCell.indexOf("_");colSele = parseInt(idCell.substring(pos + 1));this.value=String.fromCharCode(code).toUpperCase();upos[inQue][colSele-1]=this.value;
var nameCell=$("#defT"+colSele.toString()).text();if (nameCell){for (i=1; i<=colCount; i++){
if ($("#letT"+(i).toString()).text().localeCompare(nameCell.substr(0,1))==0){$("#ic"+$.trim(nameCell.substr(1,3))+"_"+i.toString()).val(this.value);}}}checkLetters();if (code){nextCellDef();}}}});}
function goCellDef(toDir) {var newCol = colDef;if (toDir == 37) {newCol--;}if (toDir == 39) {newCol++;}
if ($("#dc1_" + newCol.toString()).length) {colDef = newCol;$("#dc1_" + colDef.toString()).focus();}}
function nextCellDef() {if ($("#dc1_"+(colDef+1).toString()).length) {colDef++;$("#dc1_" +colDef.toString()).focus();}
else{if ($("#dc1_" +(col+2).toString()).length) {colDef++;colDef++;$("#dc1_"+ colDef.toString()).focus();}}}
function randomSort(){
}
function isCorrect(){var correct=false;correct=checkLetters();
$("#ardoraActCanvas").attr({"width": $("#ardoraAct").width(),"height": $("#ardoraAct").height()+24});
if (correct){score = score + scoreInc;timeAct = timeAct + timeBon;successes++;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();}else{attempts++;score = score - scoreDec;if (tiAttempts) {
if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){$("#ardoraActCanvas").attr({"width": $("#ardoraAct").width(),"height": $("#ardoraAct").height() + 24});clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function DameroWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
