//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FF80FF"; colorButton="#FF0080"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="lo lograste"; messageTime="se caba tu tiempo"; messageError="fallaste... vuelve a intentarlo"; messageErrorG="fallaste... vuelve a intentarlo"; messageAttempts="te queda un intento"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var cp_pal=["Q0VWSUNIRQ==","UEFDSEFNQU5DQQ==","QUdVQURJVE8=","VEFDVS1UQUNV","UE9MTE8tQS1MQS1CUkFaQQ==","QVJST1otQ09OLVBPTExP","VEFMTEFSSU5FUy1BLUxBLUhVQU5DQUlOQQ==","Q0FVU0E=","TE9NTy1TQUxUQURP","QUpJLURFLUdBTExJTkE="];var cp_ima=["ceviche.jpg","pachamanca.jpg","aguadito.jpg","tacu_tacu.jpg","pollo_a_la_braza.jpg","arroz_con_pollo.jpg","tallarines_a_la_huancaina.jpg","causa.jpg","lomo.jpg","aji_de_gallina.jpg"];var cp_mp3=["","","","","","","","","",""];var cp_ogg=["","","","","","","","","",""];var cp_que=["YSBiYXNlIGRlIHBlc2NhZG8gY3J1ZG8geSBjb2NpZG8gY29uIGxpbW9u","Y29jaWRvIGJham8gdGllcnJhIGNvbiBjYXJuZSB5IHR1YmVyY3Vsb3M=","YSBiYXNlIGRlIGNhcm5lIHkgbWVuZXRyb24gbWFzIHR1YnJjdWxvcw==","Y29tYmluYWNpb24gZGUgY29taWRhcyBhIGJhc2UgZGUgbWVuZXN0cmFz","cG9sbG8gY29jaWRvIGVuIGNhYm9uIGFjb3Bhw7FhZG8gY29uIHBhcGFzIGZyaXRhcyB5IGNyZW1hcw==","YSBiYXNlIGRlIGFycm96IHZlcmRlLCBwb2xsbyB5IHZlcmR1cmFz","Y3JlbWEgaHVhbmNhaW5hIGNvbiB0YWxsYXJpbmVzIHkgY2FybmUgZG9yYWRh","YSBiYXNlIGRlIHBhcGEgYWJ1bmRhbnRlIGNvbiByZWxsZW5vIGRlIHBvbGxvIGRlc2lsYWNoYWRvIHkgY3JlbWE=","c2FsdGFkbyBkZSB2ZXJkdXJhcyBhY29tcMOxYWRvIGNvbiBwYXBhcyBmcml0YXM=","Y2FybmUgZGVzaWxhY2hhZGEgbWFzIGFqaSBhbWFyaWxsbyBjb24gYXJyb3o="];var cp_num=[7,10,8,9,16,15,25,5,12,14];var cp_alt=["","","","","","","","","",""];
var wordsGame="ZW5jdWVudHJhX2xhX3BhbGFicmE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var au="";var cp=[];var letters=[];var posAns=0;var lettersId=[];var lettersX=[];var lettersY=[];var lettersAns=[];var answers=[];var indexGame=1;var numle=5; var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ";var jobindex=[];
