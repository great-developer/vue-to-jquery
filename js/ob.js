function getURLParameter(name) {
	var query = window.location.search.substring(1);  
	var vars = query.split("&");  
	for (var i=0;i<vars.length;i++) {  
	var pair = vars[i].split("=");  
	if(pair[0] === name){return pair[1];}  
	}  
	return "";
	}

function getURLParam_default(input, standard) {
	var result = getURLParameter(input);
	if (result == "" || result == undefined) {
	result = standard;
	}
	return result
}

var base_url = getURLParam_default('domain', 'ecomes-contamil.icu');
base_url = 'https://' + base_url + "/"
var offer_url = base_url + 'click'; // main offer url
var split_url = base_url + 'click/2';

// GO
function go() {
	window.onbeforeunload = null;
	document.location.assign(offer_url); 
}