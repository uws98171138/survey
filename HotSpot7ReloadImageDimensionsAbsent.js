var idphotoget9b = imageid();
var width9raw = document.getElementById(idphotoget9b).getAttributeNode("width").value;
var width9 = Number(width9raw);
if (width9 === 0) {alert("The page is being reloaded as there are problems showing the picture"); location.reload();};