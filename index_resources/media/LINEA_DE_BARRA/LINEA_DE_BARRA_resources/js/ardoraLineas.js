//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
initGraph();
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$("#buttonOk").attr("tabindex","0");$("#buttonOk").keydown(function(e){if (e.which!=9){isCorrect();}});$("#buttonOk").focus(function(e){removeOk();});$("#buttonOk").blur(function(e){paintOk();});
$("#ardoraGraph").attr("tabindex","0");$("#s_pointer").hide();$("#s_pointer").css("position", "absolute");$("#s_pointer").css("z-index", 50);$("#s_pointer").attr("height", $("#ardoraGraph").attr("height"));$("#s_pointer").attr("width", $("#ardoraGraph").attr("width"));
var posimaAct=$("#ardoraGraph").position();$("#s_pointer").css($("#ardoraGraph").position());$("body").mousemove(function(e) {$("#s_pointer").hide();});$("#ardoraGraph").keydown(function(e){$("#s_pointer").show();})
}
function initGraph(){graph=$("#ardoraGraph");axes=$("#ardoraAxes");var c=axes[0].getContext("2d");c.lineWidth=2;
c.strokeStyle="#333";
c.font="10px Verdana, Geneva, sans-serif";
c.textAlign="center";
for(var i=iniAxe;i<=maxY;i+=yStep){if (c.measureText(i).width>xPadding){xPadding=c.measureText(i).width}}
xPadding=xPadding+30;
for(var i=0; i<data.values.length; i++) {dPoints.push({x:getXPixel(i), y:getYPixel(data.values[i].Y)}); dPointsState.push(0);
dPoints2.push({x:getXPixel(i),y: getYPixel(data2.values[i].Y)});dPoints2State.push(0);
dPoints3.push({x:getXPixel(i),y: getYPixel(data3.values[i].Y)});dPoints3State.push(0);
}
graph.mousemove(function(e){if(e.offsetX==undefined){mouseX = e.pageX-graph.offset().left;mouseY = e.pageY-graph.offset().top;}else{mouseX = e.offsetX;mouseY = e.offsetY;}$("html,body").css("cursor","default");
for (i=0;i<dPoints.length;i++){if (mouseX>dPoints[i].x-4 && mouseX<dPoints[i].x+3 && mouseY>dPoints[i].y-3 && mouseY<dPoints[i].y+4 ){$("html,body").css("cursor","pointer");}
if (mouseX > dPoints2[i].x - 4 && mouseX < dPoints2[i].x + 3 && mouseY > dPoints2[i].y - 3 && mouseY < dPoints2[i].y + 4) {$("html,body").css("cursor","pointer");}
if (mouseX > dPoints3[i].x - 4 && mouseX < dPoints3[i].x + 3 && mouseY > dPoints3[i].y - 3 && mouseY < dPoints3[i].y + 4) {$("html,body").css("cursor","pointer");}
}
if (stateMouse!=-1){var newValue=getYValue(mouseY);if (newValue<iniAxe){newValue=iniAxe}
if (selectedG==1){data.values[stateMouse].Y=newValue;dPoints[stateMouse].y=getYPixel(data.values[stateMouse].Y);}
if (selectedG==2){data2.values[stateMouse].Y=newValue;dPoints2[stateMouse].y=getYPixel(data2.values[stateMouse].Y);}
if (selectedG==3){data3.values[stateMouse].Y=newValue;dPoints3[stateMouse].y=getYPixel(data3.values[stateMouse].Y);}
drawGraph();}});
graph.mousedown(function(e){for (i=0;i<dPoints.length;i++){if (mouseX>dPoints[i].x-4 && mouseX<dPoints[i].x+3 && mouseY>dPoints[i].y-3 && mouseY<dPoints[i].y+4 ){dPointsState[i]=1;stateMouse=i;selectedG=1; } else{dPointsState[i]=0;}
 if (mouseX > dPoints2[i].x - 4 && mouseX < dPoints2[i].x + 3 && mouseY > dPoints2[i].y - 3 && mouseY < dPoints2[i].y + 4){dPoints2State[i]=1;stateMouse=i;selectedG=2;} else {dPoints2State[i]=0;}
 if (mouseX > dPoints3[i].x - 4 && mouseX < dPoints3[i].x + 3 && mouseY > dPoints3[i].y - 3 && mouseY < dPoints3[i].y + 4){dPoints3State[i]=1;stateMouse=i;selectedG=3;} else {dPoints3State[i]=0;}
} drawGraph();});
graph.mouseup(function(e){if (stateMouse!=-1){for (i=0;i<dPoints.length;i++){
dPointsState[i]=0;
dPoints2State[i]=0;
dPoints3State[i]=0;
;}stateMouse=-1;selectedG=0;drawGraph();}});
drawAxes();
}
function drawAxes(){document.getElementById("ardoraAxes").width=document.getElementById("ardoraAxes").width;var c = axes[0].getContext("2d");
c.lineWidth=2;c.strokeStyle="#333";c.font="10px Verdana, Geneva, sans-serif";c.textAlign="center";c.beginPath();c.moveTo(xPadding,0);c.lineTo(xPadding,graph.height());c.stroke();c.textAlign ="right";c.textBaseline="middle";
for(var i=iniAxe;i<=maxY;i+=yStep) {c.beginPath();c.fillText(i,xPadding-5,getYPixel(i));c.lineWidth=1;for(var t = xPadding;t<graph.width();t+=4) {if (i!=0){c.strokeStyle="gray";c.font ="8px Verdana, Geneva, sans-serif";c.fillText(".",t,getYPixel(i)-1);}}
c.font = "10px Verdana, Geneva, sans-serif";}
c.strokeStyle="black";c.moveTo(xPadding,getYPixel(iniAxe));c.lineTo(graph.width(),getYPixel(iniAxe));c.stroke();
c.fillStyle="#000000";
for(var i = 0; i < data.values.length; i ++) {
if (iniAxe>0){c.fillText(data.values[i].X, getXPixel(i)+(c.measureText(data.values[i].X).width)/2,graph.height()-yPadding+hFont+5);}else{c.fillText(data.values[i].X, getXPixel(i)+(c.measureText(data.values[i].X).width)/2,getYPixel(iniAxe)+hFont+5);}}
c.save();c.fillStyle="#000000";c.translate(10,10);c.rotate(-Math.PI/2);c.textAlign="right";c.font="10px Verdana, Geneva, sans-serif";c.fillText("NIÑOS",0,0);c.restore();
drawGraph();}
function drawGraph(){document.getElementById("ardoraGraph").width=document.getElementById("ardoraGraph").width;var c=graph[0].getContext("2d");
c.lineWidth=2;c.strokeStyle="#FF0000";c.beginPath();c.moveTo(getXPixel(0),getYPixel(data.values[0].Y));
for(var i=1; i<data.values.length; i++) {c.lineTo(getXPixel(i), getYPixel(data.values[i].Y));} c.stroke();
for(var i=0; i< data.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints[i].x-5, dPoints[i].y-hFont-hFont-2,c.measureText(data.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPointsState[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data.values[i].Y,dPoints[i].x, dPoints[i].y-hFont);
c.arc(dPoints[i].x, dPoints[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
if ($("#c_point"+i).length){}else{$("#s_pointer").append('<circle class="c_point" id="c_point'+i+'" cx="'+dPoints[i].x+'" cy="'+dPoints[i].y+'" r="5"style="opacity:0.8;stroke:rgb(255,0,0);stroke-width:2"/>');$("#s_pointer").html($("#s_pointer").html());}
}
c.lineWidth=2;c.strokeStyle="#008000";c.beginPath();c.moveTo(getXPixel(0),getYPixel(data2.values[0].Y));
for(var i=1; i<data2.values.length; i++) {c.lineTo(getXPixel(i), getYPixel(data2.values[i].Y));} c.stroke();
for(var i=0; i< data2.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints2[i].x-5, dPoints2[i].y-hFont-hFont-2,c.measureText(data2.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPoints2State[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data2.values[i].Y,dPoints2[i].x, dPoints2[i].y-hFont);
c.arc(dPoints2[i].x, dPoints2[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
if ($("#2_point"+i).length){}else{$("#s_pointer").append('<circle class="2_point" id="2_point'+i+'" cx="'+dPoints2[i].x+'" cy="'+dPoints2[i].y+'" r="5"style="opacity:0.8;stroke:rgb(255,0,0);stroke-width:2"/>');$("#s_pointer").html($("#s_pointer").html());}
}
c.lineWidth=2;c.strokeStyle="#A6CAF0";c.beginPath();c.moveTo(getXPixel(0),getYPixel(data3.values[0].Y));
for(var i=1; i<data3.values.length; i++) {c.lineTo(getXPixel(i), getYPixel(data3.values[i].Y));} c.stroke();
for(var i=0; i<data3.values.length; i ++) {c.beginPath();
c.font = (hFont-2)+"pt sans-serif";c.rect(dPoints3[i].x-5, dPoints3[i].y-hFont-hFont-2,c.measureText(data3.values[i].Y).width+10,hFont+4);c.fillStyle=colorBack;c.globalAlpha=0.5;c.fill();c.globalAlpha=1;c.lineWidth="0.5";c.strokeStyle =colorText;c.stroke();c.beginPath();
if (dPoints3State[i]==1){c.fillStyle=colorSele;} else{ c.fillStyle=colorText;} c.fillText(data3.values[i].Y,dPoints3[i].x, dPoints3[i].y-hFont);
c.arc(dPoints3[i].x, dPoints3[i].y,4,0,Math.PI * 2,true);c.fill();c.fillStyle=colorText;
if ($("#3_point"+i).length){}else{$("#s_pointer").append('<circle class="3_point" id="3_point'+i+'" cx="'+dPoints3[i].x+'" cy="'+dPoints3[i].y+'" r="5"style="opacity:0.8;stroke:rgb(255,0,0);stroke-width:2"/>');$("#s_pointer").html($("#s_pointer").html());}
}
$(".3_point").attr("tabindex","0");$(".3_point").css("cursor", "pointer");$(".3_point").keydown(function(e){if (e.which!=9){var po=parseInt($(this).attr("id").substring(7,9));if (e.which==38){if (data3.values[po].Y<maxY){
dPoints3[po].y=dPoints3[po].y-10;data3.values[po].Y=data3.values[po].Y+10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}
if (e.which==40){if (data3.values[po].Y>0){dPoints3[po].y=dPoints3[po].y+10;data3.values[po].Y=data3.values[po].Y-10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}}});
$(".2_point").attr("tabindex","0");$(".2_point").css("cursor", "pointer");$(".2_point").keydown(function(e){if (e.which!=9){var po=parseInt($(this).attr("id").substring(7,9));if (e.which==38){if (data2.values[po].Y<maxY){
dPoints2[po].y=dPoints2[po].y-10;data2.values[po].Y=data2.values[po].Y+10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}
if (e.which==40){if (data2.values[po].Y>0){dPoints2[po].y=dPoints2[po].y+10;data2.values[po].Y=data2.values[po].Y-10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}}});
$(".c_point").attr("tabindex","0");$(".c_point").css("cursor", "pointer");$(".c_point").keydown(function(e){if (e.which!=9){var po=parseInt($(this).attr("id").substring(7,9));if (e.which==38){if (data.values[po].Y<maxY){
dPoints[po].y=dPoints[po].y-10;data.values[po].Y=data.values[po].Y+10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}
if (e.which==40){if (data.values[po].Y>0){dPoints[po].y=dPoints[po].y+10;data.values[po].Y=data.values[po].Y-10;drawGraph();e.stopPropagation();e.which=0;$(this).focus();}}}});
}
function getXPixel(val) {return ((graph.width() - xPadding) / data.values.length) * val + (xPadding * 1.5)+5;}
function getYPixel(val) {return (graph.height()-yPadding)-((graph.height()-yPadding)*(val-iniAxe)/(maxY-iniAxe));}
function getYValue(pix) {var yVal =maxY-(pix*(maxY-iniAxe)/(graph.height()-yPadding));return Math.round(yVal/yStepDiv)*yStepDiv;}
function randomSort(){
}
function isCorrect(){
var correct=true;
for (var i=0;i<data.values.length;i++) {if (parseInt(data.values[i].Y)!=parseInt(LineasWords(c1[i])) || parseInt($("#1_"+(i+1).toString()).val())!=parseInt(LineasWords(c1[i]))){correct=false;}
else{$("#1_"+(i+1).toString()).prop("disabled","disabled");}
}
for (var i=0;i<data2.values.length;i++) {if (parseInt(data2.values[i].Y)!=parseInt(LineasWords(c2[i])) || parseInt($("#2_"+(i+1).toString()).val())!=parseInt(LineasWords(c2[i]))){correct=false;}
else{$("#2_"+(i+1).toString()).prop("disabled","disabled");}
}
for (var i=0;i<data3.values.length;i++) {if (parseInt(data3.values[i].Y)!=parseInt(LineasWords(c3[i])) || parseInt($("#3_"+(i+1).toString()).val())!=parseInt(LineasWords(c3[i]))){correct=false;}
else{$("#3_"+(i+1).toString()).prop("disabled","disabled");}
}
if (correct){score=score+scoreInc;successes++;timeAct=timeAct+timeBon;$("#ardoraActCanvas").attr("aria-label",messageOk); showMessage("Ok");$("#buttonOk").remove();
}else{attempts++;score=score-scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {$("#ardoraActCanvas").attr("aria-label",messageAttempts);showMessage("Attempts");} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}} else {$("#ardoraActCanvas").attr("aria-label", messageError);showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function LineasWords(input) {return decodeURIComponent(escape(window.atob( input )));}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
