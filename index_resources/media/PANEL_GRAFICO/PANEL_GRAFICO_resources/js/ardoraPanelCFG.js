//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#00FF00"; colorButton="#FFFF00"; colorText="#000000"; colorSele="#FF80C0";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="SE ACABO TU TIEMPO"; messageError="FALLASTE"; messageAttempts="SIGUE INTENTANDO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var texSel=0; var doneA=["0","0","0","0","0","0","0","0","0"];
var posX=[172,216,210,227,190,62,43,42,72]; var posY=[23,57,102,149,177,170,132,81,51];
var coorx=["MjE3", "MjEx", "MjA1", "MjIy", "MTg1", "NTc=", "Mzg=", "Mzc=", "Njc="]; var coory=["OTE=", "NTc=", "MTAy", "MTQ5", "MTc3", "MTcw", "MTMy", "ODE=", "NTE="]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var al1=["CABEZA", "CAVIDADES", "PANZA", "APENDICE", "UTERO", "TRIPAS", "PANCREAS", "BRONQUIOLOS", "TRAQUEA"]; var al2=["CRANEO", "PECHO", "BARRIGA", "VESICULA", "SISTEMA URINARIO", "SISTEMA DIGESIVO", "DIAFRAGMA", "TRAQUEA", "FARINGE"]; var al3=["", "PULMON", "TRIPA", "TROMPAS", "PROSTATA", "COLON", "PULMON", "PANCREAS", "BRONQUIOLOS"]; var al4=["", "", "", "VEJIGA", "", "", "", "HIGADO", ""]; answers=["CEREBRO", "CORAZON", "ESTOMAGO", "RIÑONES", "VEJIGA", "INTESTINOS", "HIGADO", "PULMON", "TIROIDES"];indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="UEFORUxfR1JBRklDTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
