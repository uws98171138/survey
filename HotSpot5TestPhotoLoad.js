var idphotoget9a = imageid();
var picstatusraw9a = document.getElementById(idphotoget9a).complete;
var picstatus9a = String(picstatusraw9a);
var docstatus9araw = document.readyState;
var docstatus9a = String(docstatus9araw);
var statuscode9a;
if (docstatus9a == "interactive" || docstatus9a == "complete") {statuscode9a = 1;} else {statuscode9a = 0;};
if (picstatus9a == "false" && statuscode9a == 1) {location.reload();};