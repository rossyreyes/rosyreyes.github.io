//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=3;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#BE41B5"; colorButton="#FF80FF"; colorText="#000000"; colorSele="#00FF00";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="muchas felicidades "; messageTime="te quedan 5 minutos"; messageError="fallaste "; messageErrorG="fallaste "; messageAttempts="tienes un intento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="QUhPUkNBRE8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["Q0VWSUNIRQ==","UE9MTE8tQS1MQS1CUkFaQQ==","QUdVQURJVE8=","VEFDVS1UQUNV","UEFDSEFNQU5DQQ==","QUpJLURFLUdBTExJTkE=","Q0FVU0E=","TE9NTy1TQUxUQURP","",""];imaW=["0_ceviche.jpg","0_pollo_a_la_braza.jpg","0_aguadito.jpg","0_tacu_tacu.jpg","0_pachamanca.jpg","0_aji_de_gallina.jpg","0_causa.jpg","0_lomo.jpg","",""];queW=["plato a base de pescado","pollo a base de carbon acompañado con papas fritas","a base de carne y verduras con abundante agua","combiancion de menestras,carnes y arroz","a base de tuberculos, carne , habas hecho bajo tierra","base de pollo y crema huancaina","a base de papa y relleno de pollo","papas fritas saltado con verduras","",""];var wordsL=[7,16,8,9,10,14,5,12,"",""];var altW=["","","","","","","","","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ- "; wordsG=[];var wordsGL=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var alterW=[];var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="AHORCADO_resources/media/"; textBNext="";
