(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		createjs = global.createjs,
		SignalBus = MyApp.SignalBus,
		DemoEvents = MyApp.DemoEvents,
		GameData = MyApp.GameData;
	
	//class
	MyApp.DemoApp = function() { this.init.apply(this, arguments); };
	MyApp.DemoApp.prototype = {
		
		app: null,
		
		signalBus: null,
		controller: null,
		display: null,
		
		demoView: null,
		demoViewMediator: null,
		
		_demoImage: null,
		_demoImageLoaded: false,
		_demoHandleFileLoaded: false,
		
		init: function(app) {
			this.app = app;
			this.display = new createjs.Container();
			
			this.setupComponents();
			this.setupCommands();
			
			//no graphics yet so load straight away
			this.loadImageFinished();
			
			//Will be needed if game contained a spritesheet. 
			//this.loadGraphics();
		},
		
		loadGraphics: function() {
			
		},
		
		handleFileLoad:function(evt) {
			//if (evt.item.type === "image") { global.images[evt.item.id] = evt.result; }
		},
		
		handleComplete:function(evt) {
			
		},
		
		loadImageFinished: function(){
			this.setupViews();
			this.signalBus.dispatch(DemoEvents.STARTUP);
		},
 

		setupComponents: function() {
			this.signalBus = new SignalBus(this.app);
			this.gameData = new GameData(this.app);
		},
		
		setupCommands: function() {
			//Commands are not used for this small app. However, I have found them useful in the past to seperate startup procedures for different areas of an app.
		},
		
		setupViews: function() {
			this.demoView = new MyApp.DemoView(this);
			this.demoViewMediator = new MyApp.DemoViewMediator(this);
			this.display.addChild( this.demoView.getView() );
		},
		
	};
	
})(window);