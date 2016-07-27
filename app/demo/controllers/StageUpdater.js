(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		Tween = global.createjs.Tween,
		Ticker = global.createjs.Ticker,
		DemoEvents = MyApp.DemoEvents;
	
	//class
	MyApp.StageUpdater = function() { this.init.apply(this, arguments); };
	MyApp.StageUpdater.prototype = {
		
		//to try to keep things simple, there will only be one instance of StageUpdater
		//this will try to accomodate listening for as many system, lobby,
		//and game events (once a game is started) as possible
		
		app: null,
		enabled: true,
		
		_handleTickBound: null,
		_updateInterval: null,
		TIMED_UPDATE_INTERVAL: 1000,
		
		init: function(app, enabled) {
			if (enabled === false) {
				//this provides an easy way to disable StageUpdater without having to comment out
				//all places in the code which call 'this.app.stageUpdater.queueUpdate();'
				this.enabled = false;
				return;
			}
			//return;
			
			this.app = app;
			this._queueUpdateBound = this.queueUpdate.bind(this);
			
			Ticker.removeEventListener("tick", this.app.stage); //reverse this here, instead of commenting-out lines in other classes
			this._handleTickBound = this.handleTick.bind(this);
			Ticker.addEventListener("tick", this._handleTickBound);
			
			this.app.signalBus.add(DemoEvents.MODEL_READY, this.onAppModelReady.bind(this) );
			
			//events the will cause updates
			this.app.stage.addEventListener("mousedown", this._queueUpdateBound);
			this.app.stage.addEventListener("pressup", this._queueUpdateBound);
			this.app.stage.addEventListener("pressmove", this._queueUpdateBound);
			this.app.signalBus.add(DemoEvents.MODEL_READY, this._queueUpdateBound);
			//this.app.signalBus.add(CoreEvents.BALANCE_LOADED, this._queueUpdateBound);
			//this.app.signalBus.add(CoreEvents.LANGUAGE_LOADED, this._queueUpdateBound);
			//this.app.signalBus.add(CoreEvents.SHOW_MESSAGE, this._queueUpdateBound);
			//this.app.signalBus.add(CoreEvents.SHOW_ERROR, this._queueUpdateBound);
			//app.js already takes care of updating the stage on window resizes
			
			//update every so often as insurance
			this.start();
		},
		
		start: function() {
			clearInterval( this._updateInterval );
			this._updateInterval = setInterval(this._queueUpdateBound, this.TIMED_UPDATE_INTERVAL);
			Ticker.addEventListener("tick", this._handleTickBound);
		},
		
		stop: function() {
			clearInterval( this._updateInterval );
			Ticker.removeEventListener("tick", this._handleTickBound);
		},
		
		onAppModelReady: function(/*signal*/) {
			//by this time the lobby has been instantiated and we can add more event listeners
			if (this.app.lobby) {
				this.app.lobby.signalBus.add(CoreEvents.MODEL_READY, this._queueUpdateBound);
				this.app.signalBus.add(XLG.LobbyEvents.TOGGLE_LOBBY_UI, this._queueUpdateBound);
				this.app.lobby.signalBus.add(XLG.LobbyEvents.LOAD_GAME, this._queueUpdateBound);
				this.app.lobby.signalBus.add(XLG.LobbyEvents.GAME_LOADED, this.onGameStarted.bind(this) );
			}
		},
		
		onGameStarted: function(/*signal*/) {
			//by this time the game has been instantiated and we can add even more event listeners
			this.app.game.signalBus.add(CoreEvents.MODEL_READY, this._queueUpdateBound);
			this.app.game.signalBus.add(CoreEvents.SPLASH_CLICKED, this._queueUpdateBound);
			this.app.game.signalBus.add(CoreEvents.COUNTDOWN_TICK, this._queueUpdateBound);
			this.app.game.signalBus.add(XLG.SocketDataEvents.HANDLE_RESULT, this._queueUpdateBound);
		},
		
		queueUpdate: function() {
			this._updateQueued = true;
		},
		
		handleTick: function() {
			var doUpdate;
			//queued updates
			if (this._updateQueued) {
				doUpdate = true;
				this._updateQueued = false;
			}
			//automatic tween update
			if (Tween.hasActiveTweens()) {
				doUpdate = true;
				this._doFinalTweenUpdate = true; //do an extra update after a tween has finished
			} else {
				if (this._doFinalTweenUpdate) {
					doUpdate = true;
					this._doFinalTweenUpdate = false;
				}
			}
			//manual timeline animation updates
			if (this._usingTimelineGraphic) doUpdate = true;
			
			//action
			if (doUpdate) {
				//lmsg("stage_update_" + (new Date()).getTime());
				this.app.stage.update();
			}
		},
		
		setUsingTimelineGraphic: function(value) {
			this._usingTimelineGraphic = value;
		}
		
	};
	
})(window);