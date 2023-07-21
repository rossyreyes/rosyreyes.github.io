//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#800080"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#FF0080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="lo lograste"; messageTime="upss ya fuiste"; messageError="fallaste"; messageErrorG="fallaste"; messageAttempts="solo tienes un intento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var xCell=["RQ==","Tg==","IA==","RQ==","TA==","IA==","UA==","RQ==","Ug==","VQ==","IA==","VA==","RQ==","Tg==","RQ==","TQ==","Tw==","Uw==","IA==","TQ==","VQ==","Qw==","SA==","QQ==","IA==","Qg==","SQ==","Tw==","RA==","SQ==","Vg==","RQ==","Ug==","Uw==","SQ==","RA==","QQ==","RA==","IA==","WQ==","IA==","Qw==","Tw==","Tg==","VA==","QQ==","TQ==","Tw==","Uw==","IA==","Qw==","Tw==","Tg==","IA==","VQ==","Tg==","QQ==","IA==","Vg==","QQ==","Ug==","SQ==","RQ==","RA==","QQ==","RA==","IA==","RA==","RQ==","IA==","Rw==","QQ==","Uw==","VA==","Ug==","Tw==","Tg==","Tw==","TQ==","SQ==","Qw==","QQ==","IA==","RQ==","Tg==","IA==","Qw==","Tw==","Uw==","VA==","QQ==","LA==","IA==","Uw==","SQ==","RQ==","Ug==","Ug==","QQ==","IA==","WQ==","IA==","Uw==","RQ==","TA==","Vg==","QQ=="];
var que=["a base de pescado crudo y coccdo con limon","cocido bajo tierra con carne y tuberulos","a base de carne y menestron mas tuberculos","es una combinacion de dos comidas a base de menestras","pollo cocido en carbon acompañado con papas fritas y cremas","hecho con arroz verde , pollo y verduras","crema huancaina mas coccion de fideos","se utiliza bastante papa con pollo desilachado y crema","saltado de verduras mas acompañamiento de papas","carne desilachada mas aji amarillo con arroz"];
var yCell=["Q0VWSUNIRQ==","UEFDSEFNQU5DQQ==","QUdVQURJVE8=","VEFDVSBUQUNV","UE9MTE8gQSBMQSBCUkFaQQ==","QVJST1ogQ09OIFBPTExP","VEFMTEFSSU5FUyBBIExBIEhVQU5DQUlOQQ==","Q0FVU0E=","TE9NTyBTQUxUQURP","QUpJIERFIEdBTExJTkE="];
var pos=[["22","1","31","27","42","23","4"],["7","24","51","0","37","16","46","2","81","57"],["60","71","10","65","29","30","12","17"],["45","72","87","21","3","74","82","0","55"],["0","28","5","105","43","6","91","11","0","99","19","26","9","0","0","0"],["0","33","61","48","0","25","0","52","14","39","0","76","0","0","78"],["90","0","0","0","0","75","35","44","8","18","41","0","50","0","0","54","0","0","0","53","0","0","62","56","0"],["0","0","0","34","0"],["0","88","20","0","58","49","0","0","0","0","36","0"],["0","0","80","67","38","13","70","0","0","0","0","95","77","0"]];
var upos=[["","","","","","",""],["","","","","","","","","",""],["","","","","","","",""],["","","","","","","","",""],["","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","",""],["","","","","","","","","","","",""],["","","","","","","","","","","","","",""]];
var uCell=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var colCount=15;
var showE=true;
var typeD=1;var tiCor=true;
var colDef=0; col=1; row=1; inQue=0; colorError="#FF0000";
var wordsGame="ZGFtZXJv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
