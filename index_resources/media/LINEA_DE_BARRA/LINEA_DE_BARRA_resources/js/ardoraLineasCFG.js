//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#8080FF"; colorButton="#FFFF00"; colorText="#000000"; colorSele="#FF0080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES UN GENIO"; messageTime="SE ACABO TU TIEMPO"; messageError="NOOOOOOO..... FALLASTE"; messageErrorG="NOOOOOOO..... FALLASTE"; messageAttempts="TIENES UN INTENTO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TElORUFfREVfQkFSUkE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var graph;var axes;var dPoints=[];var dPointsState=[];var stateMouse=-1;var mouseX=0;var mouseY=0;
var yStep=50;var xPadding=0;var yPadding = 30;var hFont=10;var iniAxe=0;
var yStepDiv=10;
var maxY=62;
var c1=["Mg==","Mw==","NA==","Ng==","Nw==","OQ==","MTA="];
var c2=["NA==","NA==","Ng==","Nw==","OA==","MTA=","MTI="];
var c3=["Mw==","NA==","NA==","NQ==","Ng==","Ng==","Nw=="];
var data={ values:[{X:"ENERO",Y:0},{X:"FEBRERO",Y:0},{X:"MARZO",Y:0},{X:"ABRIL",Y:0},{X:"MAYO",Y:0},{X:"JUNIO",Y:0},{X:"JULIO",Y:0},]};
var data2={ values:[{X:"ENERO",Y:0},{X:"FEBRERO",Y:0},{X:"MARZO",Y:0},{X:"ABRIL",Y:0},{X:"MAYO",Y:0},{X:"JUNIO",Y:0},{X:"JULIO",Y:0},]};
var dPoints2=[];var dPoints2State=[];
var data3={ values:[{X:"ENERO",Y:0},{X:"FEBRERO",Y:0},{X:"MARZO",Y:0},{X:"ABRIL",Y:0},{X:"MAYO",Y:0},{X:"JUNIO",Y:0},{X:"JULIO",Y:0},]};
var dPoints3=[];var dPoints3State=[];
var selectedG=0;
