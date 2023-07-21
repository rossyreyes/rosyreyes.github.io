//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#00FFFF"; colorButton="#FFFF00"; colorText="#000000"; colorSele="#0000FF";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="ERES UN GENIO"; messageTime="SE CABO TU TIEMPO"; messageError="FALLASTE"; messageErrorG="FALLASTE"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UFVOVE9T"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var points=[["117","59","0","0"],["125","130","1","1"],["170","159","2","2"],["165","191","3","3"],["82","158","4","4"],["36","73","5","5"],["36","73","5","5"],["36","73","5","5"],["63","122","6","6"],["70","128","6","6"]];
var backSrc="PUNTOS_resources/media/MAPA PERU.jpg";
var Shape = function () {this.x=undefined;this.y=undefined;};
Shape.prototype={fill:function(context){context.save();context.fillStyle=this.fillStyle;this.createPath(context);context.fill();context.restore();},
stroke:function(context){context.save();this.createPath(context);context.stroke();context.restore();},
isPointInPath:function(context,x,y){this.createPath(context);return context.isPointInPath(x, y);},};
var Polygon=function(){this.points = [];this.numInd=0;};Polygon.prototype=new Shape();Polygon.prototype.addPoint=function(x,y){this.points.push(new Point(x,y));};
Polygon.prototype.createPath=function (context) {if (this.points.length === 0)return;context.beginPath();
context.moveTo(this.points[0].x,this.points[0].y);for (var i=0; i < this.points.length; ++i) {context.lineTo(this.points[i].x,this.points[i].y);}context.closePath();};
var Point=function(x,y){this.x=x;this.y=y;};var shapes=[];
var polygonPoints=[[new Point(117,59)],[new Point(125,130)],[new Point(170,159)],[new Point(165,191)],[new Point(82,158)],[new Point(36,73),new Point(36,73),new Point(36,73)],[new Point(63,122),new Point(70,128)]];
var game=[];indexGame=0;
var area=["0","1","2","3","4","5","6"];
var areaSolved=["N","N","N","N","N","N","N"];
var areaWord=["LORETO","UCAYALI","MADRE DE DIOS","PUNO","LIMA","PIURA","ANCASH"];
var areaHelp=["IQUITOS","SAN MARTIN","SAN MARTIN","JULIACA","CALLAO","TRUJILLO","PUNO"];
var areaWrong=["FALLASTE","S UN ERROR","FALLASTE","NO ES CORECTO","","FALLASTE","TE EQUIVOCASTE"];
var initMessageError="FALLASTE";
var wordPointX=["117","125","170","165","82","36","63"];
var wordPointY=["59","130","159","191","158","73","122"];
var areaColor=["#0080FF","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0","#F0F0F0"];
var imaSound='<img id="playSound" class="imaRight" src="PUNTOS_resources/media/sound.png" alt="Play"  align="right">'
var pathMedia="PUNTOS_resources/media/"
var auMP3=["error-fallo-1.mp3","error-fallo-1.mp3","megaman-x-error.mp3","megaman-x-error.mp3","megaman-x-error.mp3","megaman-x-error.mp3","megaman-x-error.mp3"];
var auOGG=["","","","","","",""];
var colorWord="#FF0000";
