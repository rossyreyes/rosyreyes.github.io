//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60;timeIni=60; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#00FFFF"; colorButton="#FF8000"; colorText="#000000"; colorSele="#FF0080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="DEMORASTE MUCHO"; messageError=""; messageErrorG=""; messageAttempts="TIENES  INTENTO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="SlVFR09fREVfTUVNT1JJQQ=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["GATO","CONEJO","CABALLO","POLLO","LOBO","","",""];im1=["GATO.jpg","CONEJO.jpg","CABALLO.jpg","POLLO.jpg","LOBO.jpg","","",""];mp31=["","","","","","","",""];alt1=["","","","","","","",""];
var wo2=["PERRO","DELFIN","","LORO","CORDERO","PEZ","",""];im2=["PERRO.jpg","DELFIN_22.jpg","","LORO.jpeg","CORDERO.jpg","PEZ.jpg","",""];mp32=["","","","","","","",""];alt2=["","","","","","","",""];
var cols=5; rows=2; items=5; itp=["MTA=","MTE=","MTI=","MTM=","MTQ=","MTU=","MTY=","MTc="]; pos=["MjA=","MjM=","MjE=","MjU=","MjQ=","LTE=","LTE=","LTE="];
var boardGame=[["","","","",""],["","","","",""]]; dirMedia="JUEGO_DE_MEMORIA_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
