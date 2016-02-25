var maxheightquestionsall = maxheightquestion();
var testheightlast = document.getElementById("Questions").offsetHeight;
if (testheightlast > maxheightquestionsall) {document.getElementById("Questions").style.overflowY = "scroll";}
else {document.getElementById("Questions").style.overflowY = "none";};
