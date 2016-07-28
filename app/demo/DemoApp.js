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
			//this.app.demo = this;
			this.display = new createjs.Container();
			
			this.setupComponents();
			this.setupCommands();
			
			//no graphics yet so load straight away
			this.loadImageFinished();
			//this.loadGraphics();
		},
		
		loadGraphics: function() {
			/*
			var loader = new createjs.LoadQueue(false);
			loader.addEventListener("fileload", this.handleFileLoad.bind(this));
			loader.addEventListener("complete", this.handleComplete.bind(this));
			loader.loadFile({src:"flash/images/lobby_atlas_.json", type:"spritesheet", id:"lobby_atlas_"}, true);
			loader.loadManifest(global.lobbyAsset.properties.manifest);
			
			this._lobbyImage = new Image();
			this._lobbyImage.onload = function(){
				window.app.lobby._lobbyImageLoaded = true;
				if(window.app.lobby._lobbyHandleFileLoaded && window.app.lobby._lobbyImageLoaded){
					window.app.lobby.loadImageFinished();
				}
			};
			this._lobbyImage.src = "flash/images/lobby_atlas_.png";
			*/
		},
		
		handleFileLoad:function(evt) {
			//if (evt.item.type === "image") { global.images[evt.item.id] = evt.result; }
		},
		/*
		handleProgress:function(evt) {
			this.preloader.loadingBar.fillBar.scaleX = evt.loaded; //300 is loaderWidth
		},
		*/
		handleComplete:function(evt) {
			/*
			var queue = evt.target;
			global.ss.lobby_atlas_ = queue.getResult("lobby_atlas_");
			this._lobbyHandleFileLoaded = true;
			if(this._lobbyHandleFileLoaded && this._lobbyImageLoaded){
				this.loadImageFinished();
			}
			*/
			
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
			/*
			this.lobbyStartupCommand = new LobbyStartupCommand(this.app);
			this.showPanelCommand = new ShowPanelCommand(this.app);
			this.showHelpCommand = new ShowHelpCommand(this.app);
			this.toggleLobbyUICommand = new ToggleLobbyUICommand(this.app);
			this.screenNameInputCommand = new ScreenNameInputCommand(this.app);
			*/
		},
		
		setupViews: function() {
			this.demoView = new MyApp.DemoView(this);
			this.demoViewMediator = new MyApp.DemoViewMediator(this);
			this.display.addChild( this.demoView.getView() );
		},
		
	};
	
})(window);