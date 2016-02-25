var headerh20 = document.getElementsByTagName("h2")[0];
var attqt0 = document.createAttribute("id");
attqt0.value = "qtext0";
headerh20.setAttributeNode(attqt0);
console.log("qtext0 created");
var qb0a = document.getElementsByTagName("h2")[0].nextElementSibling;
var qb0b = qb0a.getAttributeNode("class").value;
var qb0c = String(qb0b);
var qb0d = qb0c.indexOf("QuestionBody");
if (qb0d != - 1) {
var attqb = document.createAttribute("id");
attqb.value = "qbody0";
qb0a.setAttributeNode(attqb);
console.log("qbody0 created");};

var h1count = document.getElementsByTagName("h1").length;
if (h1count > 0) {
document.getElementById("skinner").setAttribute("id", "skinner");
document.getElementById("qtext0").setAttribute("id", "qtext0L4");
document.getElementById("qbody0").setAttribute("id", "qbody0L4");
document.getElementsByTagName("html")[0].id = "loaded4";
document.getElementsByTagName("div")[14].id = "HeadError";
document.getElementsByTagName("html")[0].setAttributeNode("previousload", 1);};