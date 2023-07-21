var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD";colorText="#000080";colorSele="#FF00FF";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var itemHelp=["AGUADITO","AJI DE GALLINA","ARROZ CON POLLO","CAUSA ","LOMO SALTADO","PACHAMANCA"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_aguadito.jpg","i_aji_de_gallina.jpg","i_arroz_con_pollo.jpg","i_causa.jpg","i_lomo.jpg","i_pachamanca.jpg"];
var altIma=["","","","","",""];
var fileX=["684","684","684","684","684","684"];
var fileY=["359","359","359","359","359","359"];
var txt=["A BASE DE CARNE DE CORDERO ADREZADO CON MENESTRON Y VERDURAS <br>","A BASE DE GALLINA DEILACHADA ACOMPAÑADO CON CREMA DE AJI AMARILLO DECOADO CON HUEVO Y ACEITUNAS","PREPARADO A BASE DE ARROZ VERDE Y VERDURAS ACOMPAÑDO CON UN POLLO DORADO","ELABORADO A BASE DE PAPA Y  TIENE COMO RELLENO POLLO DESILACHADO CON CEBOLLA","A BASE DE CARNE CON PAPAS FRITAS SALTADO CON CEBOLLA AJI LIMO ACOMPAÑADO OCN ARROZ","ELABORADO A BASE DE UNA VARIEDAD DE CARNES Y TUBERCULOS COCIDO BAJO TIERRA"];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","",""];
var conLink=["","","","","",""];
