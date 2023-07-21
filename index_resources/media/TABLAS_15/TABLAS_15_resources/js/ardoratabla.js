//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;const synth=window.speechSynthesis;const recognition = new SpeechRecognition();recognition.lang="en-GB";
function initAct(){
if (tiAval){parent.iniciaActividade()} paintBoard();if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$(".play_but").attr("tabindex","0");$(".play_but").keydown(function(e) {if (e.which!=9){var playid = $(this).attr("id").substring(8, 12).trim();$("audio").each(function() {this.pause();this.currentTime=0;});document.getElementById("aud_" + playid).play();}});
$(".play_but").click(function() {var playid=$(this).attr("id").substring(8,12).trim();$("audio").each(function(){this.pause(); this.currentTime = 0; }); document.getElementById("aud_"+playid).play();});
$("#modal-background").click(function() {$("#modal-content, #modal-background").toggleClass("active");});
$(".ima_but").click(function() {var imasrc = $(this).attr("src");var n=imasrc.indexOf("media");var imafile=imasrc.substring(n+6,600);showmodal(imasrc.substring(0,n+6)+"gr_"+imasrc.substring(n+6,600));});
$(".ima_but").attr("tabindex","0");$(".ima_but").keydown(function(e){if (e.which!=9){$(this).click();return false;}});
$(".divCB").keydown(function(e){if (e.which!=9){if ($("input", this).is(":checked")){$("input", this).prop("checked",false);}else{$("input", this).prop("checked",true);}}})
$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
actMicro();
}
function actMicro(){
}
function showmodal(ima){$("#modal-content").html('<img id="modalimg" src="'+ima+'">');$("#modal-content, #modal-background").toggleClass("active");
var onImgLoad = function(selector, callback){$(selector).each(function(){if (this.complete || /*for IE 10-*/ $(this).height() > 0) {callback.apply(this);} else {$(this).on("load", function(){callback.apply(this);});}});};
onImgLoad("img", function(){$("#modal-content").css({"width":document.getElementById("modalimg").clientWidth+"px","height":document.getElementById("modalimg").clientHeight+"px",
"left":"calc(50% - "+(document.getElementById("modalimg").clientWidth/2).toString()+"px)","top":"calc(50% - "+(document.getElementById("modalimg").clientHeight/2).toString()+"px)"});});}
function paintBoard(){for (i=0;i<cols;i++){for (j=0; j<rows; j++){if (parseInt(vCell[i][j])==3){
var nArr = [];nArr.push(tablaWords(a0Cell[i][j]).substring(0, c[i][j]));nArr.push(tablaWords(a1Cell[i][j]).substring(0, c1[i][j]));nArr.push(tablaWords(a2Cell[i][j]).substring(0, c2[i][j]));nArr.push(tablaWords(a3Cell[i][j]).substring(0, c3[i][j]));
nArr=nArr.unique();nArr = $.grep(nArr,function(n){return(n);});nArr=nArr.sort(function(){return Math.random()-0.5});for (z=0; z<nArr.length; z++){$("#select"+i.toString()+j.toString()).append('<option value="'+nArr[z]+'">'+nArr[z]+'</option>');
}}}}calcCan();}
function calcCan(){var canWidth=$("#ardoraAct").css("width").replace("px", "");
var canHeight=$("#ardoraAct").css("height").replace("px", "");$("#ardoraActCanvas").attr({"width": canWidth,"height":canHeight});}
function randomSort(){
}
function isCorrect(){var correct=true;for (i = 0; i < cols; i++) {for (j = 0; j < rows; j++) {if (parseInt(vCell[i][j])<4 && d[i][j]==1){var iC=true;
if (parseInt(vCell[i][j])==0){var cV=$("#input"+i.toString()+j.toString()).val();if (!cV){correct=false;iC=false;}var cV1=tablaWords(a0Cell[i][j]).substring(0, c[i][j]);var cV2=tablaWords(a1Cell[i][j]).substring(0, c1[i][j]);
var cV3=tablaWords(a2Cell[i][j]).substring(0, c2[i][j]);var cV4=tablaWords(a3Cell[i][j]).substring(0, c3[i][j]);if (cV1.localeCompare(cV)!=0 && cV2.localeCompare(cV)!=0 && cV3.localeCompare(cV)!=0 && cV4.localeCompare(cV)!=0) {
correct = false;iC = false;}}
if (parseInt(vCell[i][j])==1){var cV=$("#input"+i.toString()+j.toString()).val().trim().toUpperCase();if (!cV){correct=false;iC=false;}var cV1=tablaWords(a0Cell[i][j]).substring(0, c[i][j]).toUpperCase();
var cV2=tablaWords(a1Cell[i][j]).substring(0, c1[i][j]).toUpperCase();var cV3=tablaWords(a2Cell[i][j]).substring(0, c2[i][j]).toUpperCase();var cV4=tablaWords(a3Cell[i][j]).substring(0, c3[i][j]).toUpperCase();
if (cV1.localeCompare(cV)!=0 && cV2.localeCompare(cV)!=0 && cV3.localeCompare(cV)!=0 && cV4.localeCompare(cV)!=0){
correct=false;iC=false;}}
if (parseInt(vCell[i][j])==2){var cB=0;if ($("#checkbox"+i.toString()+j.toString()).is(":checked")){cB=1;}if (tablaWords(a0Cell[i][j]).substring(0,1).localeCompare(cB)!=0){correct=false; iC=false;}}
if (parseInt(vCell[i][j])==3){var cV=$("#select"+i.toString()+j.toString()).val();if (tablaWords(a0Cell[i][j]).substring(0,c[i][j]).localeCompare(cV)!=0){correct=false; iC=false;}}
if (iC && showC){d[i][j]=0;if (parseInt(vCell[i][j])!=2){$("#cell"+i.toString()+j.toString()).text(tablaWords(a0Cell[i][j]).substring(0,c[i][j]));}else{
if (cB==1){$("#cell"+i.toString()+j.toString()).html("&#10004;");}else{$("#cell"+i.toString()+j.toString()).html("&#10065;");}}}}}}
if (correct) {score=score+scoreInc;timeAct=timeAct+timeBon;successes++;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();} else {attempts++;score = score - scoreDec;
if (tiAttempts){if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}else{$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function tablaWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
Array.prototype.unique=function(a){return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0});
