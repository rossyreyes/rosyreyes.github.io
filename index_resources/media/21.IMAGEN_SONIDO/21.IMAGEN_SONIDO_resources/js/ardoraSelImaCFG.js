//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#80FF00"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#FF00FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fPreg="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="";messageError="FALLASTE";messageErrorG="FALLASTE"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var actMaxWidth="600"; actMaxHeight="";indexQ=0;dirMedia="21.IMAGEN_SONIDO_resources/media/";
var quest=[["CUALES SON LOS ANIMALES DOMESICOS","",""],["CUALES SON LOS ANIMALES SALVAJES","",""],["CUALES SON LOS ANIMALES DE GRANJA","",""]];
var altQuest=["","",""];
var media=[["MQ==","VkFDQQ==","0_vaca.jpg","X"],["Mg==","Q09SREVSTw==","0_CORDERO.jpg","X"],["Mw==","TE9STw==","0_LORO.jpeg","X"],["NA==","REVMRklO","0_DELFIN_22.jpg","X"],["NQ==","TU9OTw==","0_mono.jpg","X"],["Ng==","TEVPTg==","0_leon.jpg","X"],["Nw==","R0FUTw==","0_GATO.jpg","X"],["OA==","UEVSUk8=","0_PERRO.jpg","X"]];
var alt=["","","","","","","",""];
var dat=[["Mg==","NA==","MA==","MQ==","MQ==","MQ=="],["Mg==","NQ==","MA==","MQ==","MQ==","MQ=="],["Mg==","Ng==","MA==","MQ==","MQ==","MQ=="],["Mw==","MQ==","MA==","MQ==","MQ==","MQ=="],["Mw==","Mg==","MA==","MQ==","MQ==","MQ=="],["MQ==","MQ==","MA==","MQ==","MQ==","MQ=="],["MQ==","Mg==","MA==","MQ==","MQ==","MQ=="],["MQ==","Mw==","MA==","MQ==","MQ==","MQ=="],["MQ==","NA==","MA==","MQ==","MQ==","MQ=="],["MQ==","NQ==","MA==","MQ==","MQ==","MQ=="],["MQ==","Ng==","MA==","MQ==","MQ==","MQ=="],["MQ==","Nw==","MA==","MQ==","MQ==","MQ=="],["MQ==","OA==","MA==","MQ==","MQ==","MQ=="]];
var actualBoard=[];actualState=[];indexGame=1;tiAudio=false;
var wordsGame="MjEuSU1BR0VOX1NPTklETw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actorder=[1,2,3];var in_act=0;
