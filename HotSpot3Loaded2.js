var maxheightL2 = maxheight02adjusted();
var maxheightL2px = maxheightL2 + "px";
var buttonheightL2 = buttonheightcalculated();
var maxheightqtnL2 = maxheightL2 - buttonheightL2;
var maxheightqtnL2px = maxheightqtnL2 + "px";
document.getElementById("loaded2").getElementsByTagName("div")[9].style.maxHeight = maxheightL2px;
document.getElementById("loaded2").getElementsByTagName("div")[14].style.maxHeight = maxheightL2px;
document.getElementById("loaded2").getElementsByTagName("div")[15].style.maxHeight = maxheightqtnL2px;
var testheightL2 = document.getElementById("loaded2").getElementsByTagName("div")[15].offsetHeight;
var testwidthL2 = document.getElementById("loaded2").getElementsByTagName("div")[15].offsetWidth;
var biggersideL2 = Math.max(testheightL2, testwidthL2);
var areaL2 = biggersideL2 * biggersideL2;
var widthL2 = areaL2 / maxheightqtnL2;
var widthL2px = widthL2 + "px";
document.getElementById("loaded2").getElementsByTagName("div")[14].style.maxWidth = widthL2px;