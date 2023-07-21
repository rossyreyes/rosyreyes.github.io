//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=1;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FF80FF"; colorButton="#FF0000"; colorText="#000000"; colorSele="#FF0080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE "; messageTime="TIEMO AGOTADO"; messageError="FALLASTE "; messageErrorG="FALLASTE "; messageAttempts="SOLO UN INTENTO"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RlJBU0VfRV9JTUFHRU4="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Herbívoros. Se alimentan de vegetales. Protegen su cuerpo con pelo y grasas</p>","<p>Cetáceos. Son marinos. Sus extremidades anteriores son aletas y no tienen extremidades posteriores.</p>","<p>Primates. En este grupo se incluye al ser humano. Tienen manos de cinco dedos que sirven para agarrar</p>","<p>PECES. Son animales vertebrados de vida acuática de los que existen 20.000 especies conocidas.</p>"];
var iL=["<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/vaca.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/delfin.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/mono.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/peces.jpg'></div>"];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["<p>AVES. Tienen esqueleto con vértebras. La mayoría vuelan y pasan gran parte de su vida en el medio aéreo. Tienen todo el cuerpo cubierto de pluma</p>","<p>Carnívoros. Se alimentan de otros animales. Sus dientes son afilados y cortantes.</p>","<p> Roedores. Se alimentan de vegetales duros que desgastan sus dientes, por lo que estos crecen continuamente</p>","<p>REPTILES. Son animales de cuatro patas dirigidas hacia los lados, de manera que no pueden sostener bien el cuerpo cuando se desplazan</p>"]; ansRL=["MQ==","Mg==","MA==","Mw=="];
var iR=["<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/aves.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/leon.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/raton.jpg'></div>","<div  align='center'><img alt='' src='FRASE_E_IMAGEN_resources/media/reptil.jpg'></div>"];
var auR=[3,1,2,4];
