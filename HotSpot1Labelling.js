var headerh20 = document.getElementsByTagName("h2")[0];
var attqt0 = document.createAttribute("id");
attqt0.value = "qtext0";
headerh20.setAttributeNode(attqt0);

var qb0a = document.getElementsByTagName("h2")[0].nextElementSibling;
var qb0b = qb0a.getAttributeNode("class").value;
var qb0c = String(qb0b);
var qb0d = qb0c.indexOf("QuestionBody");
if (qb0d != - 1) {
var attqb = document.createAttribute("id");
attqb.value = "qbody0";
qb0a.setAttributeNode(attqb);

var hqt0 = document.getElementById("qtext0");
var attqt0 = document.createAttribute("questiontype");
attqt0.value = "Inner OnOff BorderColor";
hqt0.setAttributeNode(attqt0);

var hqb0 = document.getElementById("qbody0");
var attqb0 = document.createAttribute("questiontype");
attqb0.value = "Inner OnOff BorderColor";
hqb0.setAttributeNode(attqb0);

document.getElementById("skinner").setAttribute("questiontype", "Inner OnOff BorderColor");

var hskc0 = document.getElementById("SkinContent");
var attskc0 = document.createAttribute("questiontype");
attskc0.value = "Inner OnOff BorderColor";
hskc0.setAttributeNode(attskc0);

var hqtnid0 = document.getElementById("Questions");
var attqtnid0 = document.createAttribute("questiontype");
attqtnid0.value = "Inner OnOff BorderColor";
hqtnid0.setAttributeNode(attqtnid0);

var himg = document.getElementById("qbody0").getElementsByTagName("img")[0];
var atimg = document.createAttribute("questiontype");
atimg.value = "Inner OnOff BorderColor";
himg.setAttributeNode(atimg);

var himgT2Iwidth = document.getElementById("qbody0").getElementsByTagName("img")[0];
var attimgT2Iwidth = document.createAttribute("width");
attimgT2Iwidth.value = 0;
himgT2Iwidth.setAttributeNode(attimgT2Iwidth);

var himgT2Iheight = document.getElementById("qbody0").getElementsByTagName("img")[0];
var attimgT2Iheight = document.createAttribute("height");
attimgT2Iheight.value = 0;
himgT2Iheight.setAttributeNode(attimgT2Iheight);

var childrenqbody = document.getElementById("qbody0").children[0];
var childrenqbodyid = childrenqbody.id;
var childrenqbodyidstring = String(childrenqbodyid);
var parentimgid = childrenqbodyidstring;
var imgparent = document.getElementById(childrenqbodyidstring);
var atbeimg = document.createAttribute("questiontype");
atbeimg.value = "Inner OnOff BorderColor img";
imgparent.setAttributeNode(atbeimg);

var imgidraw = document.getElementById("qbody0").getElementsByTagName("img")[0].id;
var imgid = String(imgidraw);
function imageid() {return parentimgid;};

var childrenqbody2 = document.getElementById("qbody0").children[0];
var childrenqbodyid2 = childrenqbody2.id;
var childrenqbodyidstring2 = String(childrenqbodyid2);
var parentimgid = childrenqbodyidstring2;
function parentimg() {return parentimgid;};

var h1count = document.getElementsByTagName("h1").length;
if (h1count > 0) {
document.getElementById("skinner").setAttribute("id", "skinner");
document.getElementById("qtext0").setAttribute("id", "qtext0L4");
document.getElementById("qbody0").setAttribute("id", "qbody0L4");
document.getElementsByTagName("html")[0].id = "loaded4";
document.getElementsByTagName("div")[14].id = "HeadError";
document.getElementsByTagName("html")[0].setAttributeNode("previousload", 1);};