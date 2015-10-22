var bgWin = chrome.extension.getBackgroundPage();
var PAGE_URL = 'http://local.whistlejs.com/from-chrome-plugins'

$('#menu').on('click', 'li', function() {
	var self = $(this);
	if (self.hasClass('network')) {
		bgWin.openWindow(PAGE_URL + '#network');
		return;
	} 
	
	if (self.hasClass('rules')) {
		bgWin.openWindow(PAGE_URL + '#rules');
		return;
	}
	
	if (self.hasClass('values')) {
		bgWin.openWindow(PAGE_URL + '#values');
		return;
	}
	
	if (self.hasClass('direct')) {
		bgWin.setDirect();
	} else if (self.hasClass('proxy-config')) {
		
	} else if (self.hasClass('set-proxy')) {
		bgWin.openOptions();
	} else if (self.hasClass('about')) {
		bgWin.openAbout();
	}
	window.close();
});