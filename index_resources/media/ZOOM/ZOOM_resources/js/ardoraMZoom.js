//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function(){$("body").css({backgroundColor:"#FF00FF"});
initZoom();});
function initZoom(){$("#zoomer img").css({top:0,left:0});var maskWidth  = $("#zoomer").width();var maskHeight = $("#zoomer").height();var imgPos     = $("#zoomer img").offset();
var imgWidth=$("#zoomer img").width();var imgHeight=$("#zoomer img").height();var x1=(imgPos.left+maskWidth)-imgWidth;var y1=(imgPos.top+maskHeight)-imgHeight;var x2=imgPos.left;var y2=imgPos.top;
$("#zoomer img").draggable({ containment: [x1,y1,x2,y2] });$("#zoomer img").css({cursor: "move"});$("#zoomer_region").css({top: 0, left: 0});$("#zoomer_region").draggable({containment:"parent"});$("#zoomer_region").draggable({drag: function(){
var regionPos=$("#zoomer_region").offset();var thumbPos=$("#zoomer_region").parent().offset();var areaPos={top:(regionPos.top-thumbPos.top)*(-1),left:(regionPos.left-thumbPos.left)*(-1)}
var ratioX=parseInt($("#zoomer").width()*areaPos.left/$("#zoomer_region").width()+5);var ratioY=parseInt($("#zoomer").height()*areaPos.top/$("#zoomer_region").height()+5);$("#zoomer img").css({top:ratioY, left:ratioX});
}});$("#zoomer img").draggable({drag: function(){var regionPos=$("#zoomer img").offset();var thumbPos=$("#zoomer img").parent().offset();var areaPos={top:(regionPos.top-thumbPos.top)*(-1),left:(regionPos.left-thumbPos.left)*(-1)}
var ratioX=parseInt($("#zoomer_region").width()*areaPos.left/$("#zoomer").width());var ratioY=parseInt($("#zoomer_region").height()*areaPos.top/$("#zoomer").height());$("#zoomer_region").css({top:ratioY, left:ratioX});}});
$("#zoomer img").attr("tabindex","0");$("#zoomer img").keydown(function(e){});$("#zoomer_region").attr("tabindex","0");$("#zoomer_region").focus(function(e){$("#zoomer_region").css("border","solid 1px red");});$("#zoomer_region").focusout(function(e){$("#zoomer_region").css("border","none");});
$("#zoomer_region").keydown(function(e){if (e.which!=9){var off=$("#zoomer_region").offset();var offth=$("#zoomer_thumb").offset();if (e.which==38){if (off.top-2>=offth.top){$("#zoomer_region").offset({top:off.top-2,left:off.left});}}
if (e.which==40){if (off.top+2+$("#zoomer_region").height()<=offth.top+$("#zoomer_thumb").height()){$("#zoomer_region").offset({top:off.top+2,left:off.left});}};if (e.which==37){if (off.left-2>=offth.left){ $("#zoomer_region").offset({top:off.top,left:off.left-2});}}
if (e.which==39){if (off.left+2+$("#zoomer_region").width()<=offth.left+$("#zoomer_thumb").width()){$("#zoomer_region").offset({top:off.top,left:off.left+2});}};if (e.which==37 || e.which==38 || e.which==39 || e.which==40 ){var regionPos = $("#zoomer_region").offset();
var thumbPos = $("#zoomer_region").parent().offset();var areaPos={top: (regionPos.top - thumbPos.top) * (-1),left: (regionPos.left - thumbPos.left) * (-1)};var ratioX = parseInt($("#zoomer").width() * areaPos.left / $("#zoomer_region").width() + 5);var ratioY = parseInt($("#zoomer").height() * areaPos.top / $("#zoomer_region").height() + 5);
$("#zoomer img").css({top: ratioY,left: ratioX});}}})
}
