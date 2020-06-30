	// JavaScript Document
	
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;	

function checkBtnAudio(str) {
	var isBtnAudio = str.indexOf("btn_audio.swf") != -1; 
	return isBtnAudio;
}

function audioStarted(str) {
	sendToAllAudioButtons(str);
}
	
function sendToAllAudioButtons(str) {
	if (isIE && isWin && !isOpera) {
		var objs = document.getElementsByTagName("object");	
	} else {
		var objs = document.getElementsByTagName("embed");	  
	}
 		 
	for(var i=0, len=objs.length; i < len; i++) {
		var item = objs.item(i);
		try {
			item.stopPlayback(str);
		} catch(e) {
		}
	}
}