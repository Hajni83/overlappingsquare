$(function() {
    var canvas=document.getElementById('MyCanvas');
    var context=canvas.getContext('2d');
    var rectWidth=80;
    var rectHeight=80;
    var square1=80;
    var square2=120;
    context.fillStyle='rgba(255, 0, 0, 0.6)';
    context.fillRect(square1,square1,rectWidth,rectHeight);
    context.fillStyle='rgba(0,0,255,0.3)';
    context.fillRect(square2,square2,rectWidth,rectHeight);
  });