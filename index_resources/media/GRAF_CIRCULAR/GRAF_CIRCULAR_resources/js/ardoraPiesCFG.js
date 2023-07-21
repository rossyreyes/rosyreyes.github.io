//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=0;
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
var colorBack="#80FF80"; colorButton="#00FFFF"; colorText="#000000"; colorSele="#FF00FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO LOGRASTE"; messageTime="ESTAS FUERA DE TIEMPO"; messageError="TE EQUIVOCASTE"; messageErrorG="TE EQUIVOCASTE"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var uniVal=50;
var a=["NTA=","MTAw","MjAw","NTA=","NTA=","MTUw"];
var wordsGame="R1JBRl9DSVJDVUxBUg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var canvas = document.getElementById("ardoraCanvasPie");var context = canvas.getContext("2d");
var radius=140;var arcs=[];
var arcCenterX=[150,150,150,150,150,150,150,150,150,150,150,150];var arcCenterY=[150,150,150,150,150,150,150,150,150,150,150,150];
var arcStrokeStyles=[colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText,colorText];var arcFillStyles=[colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack,colorBack];
var arcIni=[0,0.523598775598299,1.0471975511966,1.5707963267949,2.0943951023932,2.61799387799149,3.14159265358979,3.66519142918809,4.18879020478639,4.71238898038469,5.23598775598299,5.75958653158129];var arcEnd=[0.523598775598299,1.0471975511966,1.5707963267949,2.0943951023932,2.61799387799149,3.14159265358979,3.66519142918809,4.18879020478639,4.71238898038469,5.23598775598299,5.75958653158129,6.28318530717959];
var indexColor=0;var colors=["#FFFF00","#3399FF","#FF9933","#78C85A","#97A5FF","#9BA533"];
