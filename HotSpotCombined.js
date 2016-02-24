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

/*-------Calculating the total width of the page----*/
var widthscreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
function widthscreenadjusted() {return widthscreen;};

/*-------Calculating the total height of the page----*/
var heightscreen = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

/*-------Get the height of Response Return Bar---*/
var rel2 = document.getElementsByTagName("html")[0].getAttributeNode("hrbpx").value;
var rel2A = String(rel2);
var rel2B = rel2A.replace("px", "");
var rel2C = Number(rel2B);
var rel2D = rel2C;
var hresponsebar = rel2D;


/*-------Get the height of Progress Bar---*/
var rel1 = document.getElementsByTagName("html")[0].getAttributeNode("hpbarpx").value;
var rel1A = String(rel1);
var rel1B = rel1A.replace("px", "");
var rel1C = Number(rel1B);
var rel1D = rel1C;
var hprogressbar = rel1D;

/*-------Get the height of Head Error---*/
var rel3 = document.getElementsByTagName("html")[0].getAttributeNode("hvepx").value;
var rel3A = String(rel3);
var rel3B = Number(rel3A);
var rel3C = rel3B;
var headerrorheight = rel3C;

/*-------Calculating the available height for Buttons--*/
var heightavailablebuttons = heightscreen - hprogressbar- 80 - 20;
var heightallocatedbuttons = 0.10 * heightavailablebuttons;
var buttonheightusepx = heightallocatedbuttons + "px";
document.getElementById("Buttons").style.minHeight = buttonheightusepx;
document.getElementById("Buttons").style.maxHeight = buttonheightusepx;
function buttonheightcalculated() {return heightallocatedbuttons;};

/*-------Calculating the maximum height of Skin Inner and Skin Content for Loaded 0 & 2--*/
var maxheight02a;
if (hresponsebar === 0) {var netheight1 = heightscreen - hprogressbar- 80 - 20; 
maxheight02a = netheight1;}
else {var netheight2 = heightscreen - hresponsebar - hprogressbar- 80 - 20; 
maxheight02a = netheight2;};
var maxheight02 = Number(maxheight02a);
function maxheight02adjusted() {return maxheight02;};

/*-------Calculating the maximum height of Skin Inner and Skin Content for Loaded 4--*/
var maxheight4a = heightscreen - headerrorheight - 80 - 20;
var qtnmaxheight4a = heightscreen - headerrorheight - heightallocatedbuttons - 80 - 20;
function maxheight4aadjusted() {return maxheight4a;};
function qtnmaxheight4aadjusted() {return qtnmaxheight4a;};
