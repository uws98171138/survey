var idphotoget9 = imageid();
var picstatusraw9 = document.getElementById(idphotoget9).complete;
var picstatus9 = String(picstatusraw9);
if (picstatus9 == "true") {
var el9a = document.getElementById(idphotoget9);
var widthl9 = document.getElementById(idphotoget9).offsetWidth;
document.getElementById(idphotoget9).setAttribute("width", widthl9);
var heightl9 = document.getElementById(idphotoget9).offsetHeight;
document.getElementById(idphotoget9).setAttribute("height", heightl9);
var parentimg9 = parentimg();
var widthfigure9a = widthl9;
var widthfigure9apx = widthfigure9a + "px";
var widthfigure9b = widthfigure9a + 20;
var widthfigure9bpx = widthfigure9b + "px";
document.getElementById(parentimg9).style.width = widthfigure9apx;
document.getElementById("qbody0").style.width = widthfigure9bpx;};