(function(global) {
	
	//application start point
	window.addEventListener("DOMContentLoaded", startApp);
	function startApp() {
		window.removeEventListener("DOMContentLoaded", startApp);
		//setTimeout is used so that on mobile, the page width can be finalised
		//before content is added, fixing a zoom issue that sometimes occurs
		setTimeout(function() { window.app = new MyApp(); }, 50);
	}
	
	//imports
	var Constants = XLG.Constants;
	
	//class
	MyApp = function() { this.init.apply(this, arguments); };
	MyApp.prototype = {
		
		canvas: null,
		stage: null,
		
		init: function() {
			if (!window.lmsg) window.lmsg = function(){}; //create a dud log function
			
			this.pixelRatio =  (window.devicePixelRatio || 1);			
			/*fix for devices with devicePixelRatio = 4 - slow down problems in chrome landscape */
			if(this.pixelRatio >=  2)this.pixelRatio = 2;
			
			document.title = Constants.PAGE_TITLE;

			this.setupStage();
			this.loadGraphics();

		},
		
		setupStage: function() {
			console.log("setupStage");
		},
			
		loadGraphics: function() {

		},
		
		handleFileLoad:function(evt) {

		},
		
		handleComplete:function(evt) {
			
		},
		
		loadImageFinished: function(){

		},
 
		setupComponents: function() {

		},
		
		setupCommands: function() {

		},
		
		setToTop: function(mc) {
			
		},
		
		createContainer: function() {

		},
		
		toggleScrollLock: function(toggled) {
	
		},
		
		scaleApplication: function() {
			
		},
		
	};
	
})(window);