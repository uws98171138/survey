var maxheightL0 = maxheight02adjusted();
var maxheightL0px = maxheightL0 + "px";
var maxheightqtnL0 = maxheightL0 * 0.90;
var maxheightqtnL0px = maxheightqtnL0 + "px";
document.getElementById("loaded0").getElementsByTagName("div")[7].style.maxHeight = maxheightL0px;
document.getElementById("loaded0").getElementsByTagName("div")[12].style.maxHeight = maxheightL0px;
document.getElementById("loaded0").getElementsByTagName("div")[13].style.maxHeight = maxheightqtnL0px;
var testheightL0 = document.getElementById("loaded0").getElementsByTagName("div")[13].offsetHeight;
var testwidthL0 = document.getElementById("loaded0").getElementsByTagName("div")[13].offsetWidth;
if (testheightL0 > maxheightqtnL0) {var areaL0a = testwidthL0 * testheightL0;
var widthL0a = areaL0a / maxheightqtnL0;
var widthL0apx = widthL0a + "px";
var biggersideL0b = Math.max(testwidthL0, testheightL0);
var areaL0b = biggersideL0b * biggersideL0b;
var widthL0b = areaL0b / maxheightqtnL0;
var widthL0bpx = widthL0b + "px";
document.getElementById("SkinContent").style.minWidth = widthL0apx;
document.getElementById("SkinContent").style.maxWidth = widthL0bpx;};
