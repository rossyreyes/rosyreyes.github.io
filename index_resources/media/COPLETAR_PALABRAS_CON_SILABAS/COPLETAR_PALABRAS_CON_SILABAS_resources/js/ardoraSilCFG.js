//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#80FFFF"; colorButton="#FF80FF"; colorText="#000000"; colorSele="#80FF80";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="SE ACABO T TIEMPO"; messageError="FALLASTE......"; messageErrorG="FALLASTE......"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wGame=["CA-RON","CAMPE-","JUE-","VA-CION","MER-DO","-MER","BA-LAR","ANI-L","PA-SO","LE-"];
var wIma=["","","","","","","","","",""];
var audio=["","","","","","","","","",""];
var wAlt=["","","","","","","","","",""];
var w0=["TUE=","T04=","R08=","Q0E=","Q0E=","Q08=","Q0k=","TUE=","WUE=","R08="];
var w1=["Q08=","T04=","VkVT","TEk=","TUE=","TEE=","SQ==","TUE=","Q0E=","R08="];
var w2=["TUE=","U0lOTw==","R08=","Vkk=","Q0E=","Q08=","Q0k=","TEw=","WUE=","VFJB"];
var w3=["UkE=","Q0hBTk8=","Sk8=","Q0E=","VEE=","REE=","RE8=","RE8=","TUE=","T04="];
var c=[2,2,2,2,2,2,2,2,2,2];
var wW=["","","","","","","","","",""];
var dirMedia="COPLETAR_PALABRAS_CON_SILABAS_resources/media/";
var wordsGame="Q09QTEVUQVJfUEFMQUJSQVNfQ09OX1NJTEFCQVM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var ram_G=["-1","-1","-1","-1","-1","-1","-1","-1","-1","-1"]; var indexGame=0; var tiAudio=false;
