(function(global) {
	
	//application start point
	window.addEventListener("DOMContentLoaded", startApp);
	function startApp() {
		window.removeEventListener("DOMContentLoaded", startApp);
		//setTimeout is used so that on mobile, the page width can be finalised
		//before content is added, fixing a zoom issue that sometimes occurs
		setTimeout(function() { window.app = new MyApp.Demo(); }, 50);
	}
	
	//imports
	var Constants = MyApp.Constants;
	
	//class
	MyApp.Demo = function() { this.init.apply(this, arguments); };
	MyApp.Demo.prototype = {
		
		canvas: null,
		stage: null,
		demo: null,
		
		init: function() {
			if (!window.lmsg) window.lmsg = function(){}; //create a dud log function

			this.pixelRatio =  (window.devicePixelRatio || 1);			
			/*fix for devices with devicePixelRatio = 4 - slow down problems in chrome landscape */
			if(this.pixelRatio >=  2)this.pixelRatio = 2;

			this.setupStage();
			this.setupComponents();
			//this.loadGraphics(); //Only needed if we had a spritesheet. All graphics are vectors
			this.loadDemo();

		},
		
		setupStage: function() {
			this.containerElement = this.createContainer();
			document.body.appendChild( this.containerElement );
			
			//create application stage
			this.canvas = document.createElement("canvas");
			this.canvas.id = "DemoAppCanvasStage";
			this.canvas.style.position = "absolute";
			
			document.body.style.display = "inline-block"; //ensure body size is updated when game is nested in iframes
			
			this.stage = new createjs.Stage(this.canvas);
			this.stage.autoClear = true;
			this.stage.enableMouseOver(0); //disable - no need on touch screen devices
			createjs.Touch.enable(this.stage);
			this.scaleApplication();
			setTimeout( (function(){ this.scaleApplication(); }).bind(this), 100);
			setTimeout( (function(){ this.scaleApplication(); }).bind(this), 300);
			setTimeout( (function(){ this.scaleApplication(); }).bind(this), 600);
			window.addEventListener("resize", this.scaleApplication.bind(this) );
			this.containerElement.appendChild(this.canvas);
			
			this.toggleScrollLock(true);
	
		},
		
		loadDemo: function() {
			//create lobby sub-app
			this.demo = new MyApp.DemoApp(this);
			this.stage.addChild( this.demo.display );
						
			this.signalBus.dispatch(MyApp.DemoEvents.MODEL_READY);
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
			this.signalBus = new MyApp.SignalBus(this);
			this.stageUpdater = new MyApp.StageUpdater(this, true);
		},
		
		setupCommands: function() {
			//this.appStartupCommand = new MyApp.AppStartupCommand(this); //Would have used this for larger multi interface applications
		},
		
		createContainer: function() {
			var element = global.document.createElement("div");
			var style = "display: block; overflow: hidden; position: absolute; width: 359px; height: 559px";
			element.setAttribute("style", style);
			return element;
		},
		
		toggleScrollLock: function(toggled) {
			this.stage.preventSelection = toggled;
			if (this.stage.__touch) this.stage.__touch.preventDefault = toggled;
		},
		
		scaleApplication: function() {
			//prevent scrollbars from screwing with the page size calculations - reverse at the end of this function
			this.canvas.style.display = 'none';
			this.containerElement.style.display = "none";
			
			//calculate application scaling
			var pageWidth = MyApp.MiscUtils.getPageWidth(); 
			var pageHeight = MyApp.MiscUtils.getPageHeight();
			var pageAspect = pageWidth / pageHeight;
			var appAspect = 359 / 559
			var scaleAmount = (appAspect > pageAspect) ? (pageWidth / 359) : (pageHeight / 559);
			
			//calculate full width/height utilisation measurements
			if (pageAspect > appAspect) {
				this.availableWidth = 559 * pageAspect;
				this.availableHeight = 559;
			} else {
				this.availableWidth = 359;
				this.availableHeight = 359 * (1/pageAspect);
			}
			
			//apply scaling
			this.canvas.width = pageWidth; //Constants.STAGE_WIDTH * scaleAmount;
			this.canvas.height = pageHeight; //Constants.STAGE_HEIGHT * scaleAmount;
			this.containerElement.style.width = pageWidth + "px";
			this.containerElement.style.height = pageHeight + "px";
			this.stage.scaleX = this.stage.scaleY = scaleAmount;
			
			/*scale down canvas to fit on screen - this fix resolution problems (inside canvas) in android devices when the app is in fullscreen mode*/
			var scale = 1/this.pixelRatio;			
			$(this.containerElement).css({'-webkit-transform-origin' : "0 0",
                '-moz-transform-origin' : "0 0",
                '-ms-transform-origin' : "0 0",
                'transform-origin' : "0 0"});
			
			$(this.containerElement).css({'-webkit-transform' : "scale("+scale+")",
                '-moz-transform' : "scale("+scale+")",
                '-ms-transform' : "scale("+scale+")",
                'transform' : "scale("+scale+")"});
			
			
			//save some information for the rest of the application
			this.pageAspect = pageAspect;
			this.appAspect = appAspect;
			this.scaleAmount = scaleAmount;
			
			//let the application arrange itself
			if (this.signalBus) this.signalBus.dispatch(MyApp.DemoEvents.RESIZE);
			
			this.stage.update(); //then draw
			setTimeout( (function() { this.stage.update(); }).bind(this), 10);
			setTimeout( (function() { this.stage.update(); }).bind(this), 50);
			setTimeout( (function() { this.stage.update(); }).bind(this), 100);
			
			this.canvas.style.display = 'inline-block';
			this.containerElement.style.display = "inline-block";
		},
	};
	
})(window);