//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
$(".imaCell_img img").mousedown(function() {var valueZ=giveZindex("img")+1; if (giveZindex("div")>valueZ){valueZ=giveZindex("div")+1}
var cssObj = {"z-index" : valueZ};$(this).css(cssObj); imaSel=$(this).parent().attr("id").substring(3,5);});
$(".imaCell_img img").mouseup(function() {var cssObj = {"z-index" : "0"};$(this).css(cssObj);});
$(".imaCell_img img").draggable({ containment: "document", revert: "invalid", cursor: "move", start: function(){},drag: function(event, ui){},stop: function(){}});
$(".imaCell_img").droppable({accept:".imaCell_img img", drop: function() { changeSrc(imaSel,parseInt($(this).attr("id").substring(3,5)));
var cssObj = { "border-color" : "black", "border-style": "dotted", "border-width": "1px",}; $(this).parent().css(cssObj);
isCorrect();
},
over: function() { var cssObj = { "border-color" : colorSele, "border-style": "solid", "border-width": "2px",}; $(this).parent().css(cssObj);},
out: function() { var cssObj = { "border-color" : "black", "border-style": "dotted", "border-width": "1px",}; $(this).parent().css(cssObj);}});
$(".imaCell_img img").dblclick(function (event) {showImage();setTimeout(function () {
document.getElementById("ardoraActCanvas").style.zIndex = 0;document.getElementById("ardoraActCanvas").style["visibility"] = "hidden";
},3000);});
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
imaSel=-1;$("#ardoraActCanvas").attr("role","img");$("#ardoraActCanvas").attr("aria-label","");$(".imaCell_img img").each(function(e){$(this).attr("alt",$(this).parent().parent().attr("id"));});$(".imaCell_img img").attr("tabindex","0");
$(".imaCell_img img").keydown(function(e) {if (e.which!=9  && !correct){if (e.which !=27){if (imaSel==-1){var valueZ=giveZindex("img")+1;if (giveZindex("div") > valueZ) {valueZ=giveZindex("div")+1};var cssObj={"z-index":valueZ};$(this).css(cssObj);imaSel=$(this).parent().attr("id").substring(3, 5);$(".imaCell_img img").first().focus();}
else{changeSrc(imaSel, parseInt($(this).parent().attr("id").substring(3, 5)));var cssObj={"border-color": "black","border-style": "dotted","border-width": "1px",};$(this).parent().css(cssObj);
isCorrect();
$(".imaCell_img img").attr("tabindex","0");$(".imaCell_img").attr("tabindex","-1");$(".imaCell_img img").first().focus();imaSel=-1;}}else{$(".imaCell_img img").dblclick();}}});
$(".imaCell_img img").focus(function(){$(this).parent().css("border-style","solid");$(this).parent().css("border-width","2px");$(this).parent().css("border-color",colorSele);});
$(".imaCell_img img").blur(function(){$(this).parent().css("border-style","dotted");$(this).parent().css("border-width","1px");$(this).parent().css("border-color","black");});
}
function showImage(){var canvas = document.getElementById("ardoraActCanvas");document.getElementById("ardoraActCanvas").style.zIndex = 5;
document.getElementById("ardoraActCanvas").style["visibility"] = "visible";canvas.width = canvas.width;var contexto = canvas.getContext("2d");
contexto.fillStyle = colorBack;contexto.fillRect(0, 0, canvas.width, canvas.height);
var ima = new Image();ima.src = original;ima.onload = function(){contexto.drawImage(ima,0,0)}}
function changeSrc(fromSrc,toSrc){var celTo; var celFrom; var srcTo; var srcFrom; var nameDivTo="ima"+toSrc+"_img"; var nameDivFrom="ima"+fromSrc+"_img";
celTo=document.getElementById(nameDivTo).getElementsByTagName("img")[0]; celFrom=document.getElementById(nameDivFrom).getElementsByTagName("img")[0]; srcTo=$(celTo).attr("src"); srcFrom=$(celFrom).attr("src");
$(celFrom).fadeOut("fast"); $(celFrom).attr("src",srcTo); $(celFrom).fadeIn("slow");$(celTo).fadeOut("fast");$(celTo).attr("src",srcFrom); $(celTo).fadeIn("slow");
$(celFrom).animate({"left": "0px", "top": "0px"});}
function randomSort(){var mat=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
 var mat2=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]];
var count=0;var nameDiv;var cel;var rand=0;
for (i=0; i <3; i++){for (j=0; j <4; j++){if (board[i][j]!="0"){mat[i][j]="1"; mat2[i][j]="1";count+=1;}}} var countTxt=count;var count1=0;
for (i=0; i <3; i++){for (j=0; j <4; j++){if (board[i][j]!="0"){rand=Math.floor(Math.random()*count);count1=0;
var isA=false;for (i1=0; i1<3; i1++){ for (j1=0; j1<4; j1++){if (!isA){ if (mat[i1][j1]!="0"){if (parseInt(rand)==parseInt(count1)){
mat[i1][j1]="0"; nameDiv="ima"+(j1+1).toString()+(i1+1).toString()+"_img";cel=document.getElementById(nameDiv).getElementsByTagName("img")[0];
$(cel).attr("src",board[i][j]);
count-=1;count1+=1;isA=true;} else{count1+=1;}}}}}}}}
}
function paintButtonTime(){if (tiTime || tiAttempts || tiScore || tiSuccesses ){clearInterval(timeInterval);}
var canvas = document.getElementById("ardoraActCanvas"); var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.10;contexto.fillStyle = colorButton; contexto.fillRect(0,0,canvas.width,canvas.height);
contexto.font="20px " + fMenssage; var metricsW = contexto.measureText(textButtonTime).width; var x=(canvas.width / 2)-(metricsW / 2); var y=(canvas.height / 2); contexto.beginPath();
contexto.globalAlpha = 1; contexto.lineWidth = 2; contexto.fillStyle = colorBack; var xAnim=canvas.width/2; var wAnim=0;
interval = setInterval(function () { contexto.strokeStyle = colorText; roundedRect(contexto,xAnim,y-20,wAnim,30,5,colorBack);xAnim-=1;wAnim+=2;
if (wAnim>metricsW+30){clearInterval(interval); contexto.shadowColor = "black"; contexto.shadowBlur = 20; contexto.shadowOffsetX = 10; contexto.shadowOffsetY = 10;contexto.stroke();contexto.beginPath();
contexto.textAlign = "left"; contexto.fillStyle = colorText; contexto.fillText(textButtonTime,x,y);contexto.lineWidth = 5;contexto.stroke();}},1);
$("#ardoraActCanvas").mousedown(function(e){ if (tiTime || tiAttempts || tiScore || tiSuccesses ){ timeInterval=setInterval("paintTab()",1000); $("#ardoraActCanvas").css("cursor", "default"); $("#ardoraActCanvas").unbind("mousedown"); }});}
function isCorrect() {var correct = true;successes = 0;
for (i = 0; i <3;i++) {for (j = 0; j<4;j++) {var nameDiv="ima"+(j+1).toString()+(i+1).toString()+"_img";
var cel = document.getElementById(nameDiv).getElementsByTagName("img")[0];
if (board[i][j] != $(cel).attr("src")) {correct = false;} else {successes++;}}}
if (correct) {score=score+scoreInc;$("#ardoraActCanvas").attr("aria-label",messageOk);showMessage("Ok");}}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){
for (i = 0; i < 3; i++) {for (j = 0; j < 4; j++) {
var nameDiv = "ima" + (j + 1).toString() + (i + 1).toString() + "_img";
var cel = document.getElementById(nameDiv).getElementsByTagName("img")[0];$(cel).attr("src",board[i][j]);}}
var canvas = document.getElementById("ardoraActCanvas");canvas.width = canvas.width;var contexto = canvas.getContext("2d");contexto.globalAlpha = 0.20;contexto.fillStyle = colorBack;contexto.fillRect(0,0,canvas.width,canvas.height);}
function paintBack(){}
function puzleWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
