//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=20; timeIni=20; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#00FF00"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#FF00FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES UN GENIO"; messageTime="SE ACABO TU TIEMPO"; messageError="PERDISTE"; messageErrorG="PERDISTE"; messageAttempts="SOLO UN INTENTO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,1,1]];
var vCell=[["0","0","0","0"],["0","2","2","2"],["0","2","2","2"],["0","2","2","2"]];
var a0Cell=[["VkVISUNVTE9T","TU9UT0NJQ0xFVEE=","Q0FNSU9O","QVVUTw=="],["NiBSVUVEQVM=","MA==","MQ==","MA=="],["NCBSVUVEQVM=","MA==","MA==","MQ=="],["MiBSVUVEQVM=","MQ==","MA==","MA=="]];
var c=[[9,11,6,4],[8,1,1,1],[8,1,1,1],[8,1,1,1]];
var c1=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var c2=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var c3=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var a1Cell=[["VkVISUNVTE9T","TU9UT0NJQ0xFVEE=","Q0FNSU9O","QVVUTw=="],["NiBSVUVEQVM=","MA==","MQ==","MA=="],["NCBSVUVEQVM=","MA==","MA==","MQ=="],["MiBSVUVEQVM=","MQ==","MA==","MA=="]];
var a2Cell=[["VkVISUNVTE9T","TU9UT0NJQ0xFVEE=","Q0FNSU9O","QVVUTw=="],["NiBSVUVEQVM=","MA==","MQ==","MA=="],["NCBSVUVEQVM=","MA==","MA==","MQ=="],["MiBSVUVEQVM=","MQ==","MA==","MA=="]];
var a3Cell=[["VkVISUNVTE9T","TU9UT0NJQ0xFVEE=","Q0FNSU9O","QVVUTw=="],["NiBSVUVEQVM=","MA==","MQ==","MA=="],["NCBSVUVEQVM=","MA==","MA==","MQ=="],["MiBSVUVEQVM=","MQ==","MA==","MA=="]];
var wordsGame="VEFCTEFTXzE1"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=false;
