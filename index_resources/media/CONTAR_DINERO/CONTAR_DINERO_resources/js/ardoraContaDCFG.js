//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#80FFFF"; colorButton="#FF80FF"; colorText="#000000"; colorSele="#00FF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="SE ACABO TU  TIEMPO"; messageError="FALLASTE"; messageErrorG="FALLASTE"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q09OVEFSX0RJTkVSTw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["cns000001","cns000005","cns000010","cns000020","cns000050","cns000100","cns000200","cns000500","cns001000","cns002000","cns005000","cns010000","cns020000"];
var values=[10,50,100,200,500,1000,2000,5000,10000,20000,50000,100000,200000];
var tiC=[12,12,12,12,12,12,12,12,12,12,12,12,12];
var imaH=[0,0,0,0,0,0];
var totEuros=0;var totCent=0;var nameEuro="S/.";var nameCent="Cént.";
var te=["TRECE","VEINTECINCO","TREINTE Y SEIS","CIENTO DIEZ","DOCIENTOS VEINTICINCO","TREINTA Y UNO"];var im=["","","","","",""];var a1=["","","","","",""];var imalt=["","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[00,00,00,00,00,00];var eu=[13000,25000,36000,110000,225000,31000];var ram_G=[-1,-1,-1,-1,-1,-1];
