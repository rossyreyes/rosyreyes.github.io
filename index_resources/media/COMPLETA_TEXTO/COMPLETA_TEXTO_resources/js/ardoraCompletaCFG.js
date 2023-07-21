//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=0; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FF80FF"; colorButton="#0000FF"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="lo lograste"; messageTime="se acabo tu tiempo"; messageError="fallaste"; messageAttempts="sigue intentando"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img tabindex="0" alt="pescado" class="imaup imaLeft" src="COMPLETA_TEXTO_resources/media/ceviche.jpg" alt="Ima"  align="left"><p>se prepara a base de \"PESCADO\" crudo y la coccion se realiza  a base de \"limon\" acompañad con canchita </p><p> </p>','<img tabindex="0" alt="lomo saltado" class="imaup imaLeft" src="COMPLETA_TEXTO_resources/media/lomo.jpg" alt="Ima"  align="left"><p>a base de \"carne\" en filete acompañado con \"papas frita\"y un saltado de veduras mas sillao </p><p>  </p><p> </p>','<img tabindex="0" alt="CORDERO" class="imaup imaLeft" src="COMPLETA_TEXTO_resources/media/aguadito.jpg" alt="Ima"  align="left"><p>ES UN PLATO QUE ES A BASE DE MENESTRON CON CARNE DE \"CORDERO\" Y VERDURAS </p><p>  </p><p> </p>'];
var answers=];
var a=];
var itemCorr=];
var itemHelp=];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="Q09NUExFVEFfVEVYVE8="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var textBNext="";
var fHelp="Verdana, Geneva, sans-serif";
