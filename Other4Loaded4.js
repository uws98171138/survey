var maxwidthL4 = widthscreenadjusted();
var maxwidthL4px = maxwidthL4 + "px";
var maxheightL4 = maxheight4adjusted();
var maxheightL4px = maxheightL4 + "px";
var maxheightqtnL4 = qtnmaxheight4adjusted();
var maxheightqtnL4px = maxheightqtnL4 + "px";
var positionskinL4px = barheights();
document.getElementById("loaded4").getElementsByTagName("div")[7].style.top = positionskinL4px;
document.getElementById("loaded4").getElementsByTagName("div")[7].style.minWidth = maxwidthL4px;
document.getElementById("loaded4").getElementsByTagName("div")[7].style.maxWidth = maxwidthL4px;
document.getElementById("loaded4").getElementsByTagName("div")[7].style.maxHeight = maxheightL4px;
document.getElementById("loaded4").getElementsByTagName("div")[12].style.maxHeight = maxheightL4px;
document.getElementById("loaded4").getElementsByTagName("div")[12].style.minWidth = maxwidthL4px;
document.getElementById("loaded4").getElementsByTagName("div")[12].style.maxWidth = maxwidthL4px;
document.getElementById("loaded4").getElementsByTagName("div")[13].style.maxHeight = maxheightqtnL4px;
var testheightL4 = document.getElementById("loaded4").getElementsByTagName("div")[13].offsetHeight;
var testwidthL4 = document.getElementById("loaded4").getElementsByTagName("div")[13].offsetWidth;
if (testheightL4 > maxheightqtnL4) {var areaL4a = testwidthL4 * testheightL4;
var widthL4a = areaL4a / maxheightqtnL4;
var widthL4apx = widthL4a + "px";
var biggersideL4b = Math.max(testwidthL4, testheightL4);
var areaL4b = biggersideL4b * biggersideL4b;
var widthL4b = areaL4b / maxheightqtnL4;
var widthL4bpx = widthL4b + "px";
document.getElementById("qtext0L4").style.minWidth = widthL4apx;
document.getElementById("qtext0L4").style.maxWidth = widthL4bpx;
document.getElementById("qbody0L4").style.minWidth = widthL4apx;
document.getElementById("qbody0L4").style.maxWidth = widthL4bpx;
document.getElementById("Buttons").style.minWidth = widthL4apx;
document.getElementById("Buttons").style.maxWidth = widthL4bpx;
document.getElementById("qtext0L4").id = "qtext0";
document.getElementById("qbody0L4").id = "qbody0";};