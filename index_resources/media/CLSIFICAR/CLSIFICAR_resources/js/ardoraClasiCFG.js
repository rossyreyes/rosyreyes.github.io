//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=1;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=6; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FF00FF"; colorButton="#8080FF"; colorText="#000000"; colorSele="#00FFFF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Lucida Console', Monaco, monospace";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="SE ACABO TU TIEMPO"; messageError="FALLASTE"; messageErrorG="FALLASTE"; messageAttempts="SIGUE INTENTANDO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["R0FMTElOQQ==","UE9MTE8=","UEVTQ0FETw==","QVRVTg==","Q0FSTkVSTw==","UE9MTE8="];
var img_G=["i_GALLINA.jpg","i_POLLO.jpg","i_PSCADO.jpg","i_ATUN.jpg","i_CRNERO.jpg","i_POLLO.jpg"];
var mp3_G=["","","","","",""];
var ogg_G=["","","","","",""];
var n_G=["MQ==","Mg==","Mw==","NA==","NQ==","Ng=="];
var e_G=["FALLASE SIGUE INTETANDO","","","","",""];
var mp4_G=["","","","","",""];
var ogv_G=["","","","","",""];
var alt_G=["","","","","",""];
var txtGr=["AJI DE GALLINA","ARROZ CON POLLO","CEVICHE","CAUSA","PACHAMANCA","POLLO A LA BRAZA"];
var imgGr=["0_aji_de_gallina.jpg","0_arroz_con_pollo.jpg","0_ceviche.jpg","0_causa.jpg","0_pachamanca.jpg","0_pollo_a_la_braza.jpg"];
var mp3Gr=["","","","","",""];
var oggGr=["","","","","",""];
var altGr=["","","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1];
var messageErrorG="FALLASTE";
var dirMedia="CLSIFICAR_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="Q0xTSUZJQ0FS"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
