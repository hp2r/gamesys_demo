(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		createjs = global.createjs,
		lib = global.demoAssets,
		Signal = global.signals.Signal,
		UIButton = MyApp.UIButton,
		DemoEvents = MyApp.DemoEvents;
	
	//class definition
	MyApp.DemoView = function() { this.init.apply(this, arguments); };
	MyApp.DemoView.prototype = {
		
		_demoApp: null,
		_display: null,
		_betsPlaced: 0,
		_coinSide: "heads", //default choice. User can change before placing a bet.
		_soundID: "coinflip",
		
		flipBtn: null,
		increaseBetBtn: null,
		decreaseBetBtn: null,
		
		flipSignal: null,
		increaseBetSignal: null,
		decreaseBetSignal: null,
		
		getView: function() { return this._display; },
		
		init: function(demoApp) {
			this._demoApp = demoApp;
			this._signal = this._demoApp.signalBus;
			
			//variables
			this._updateBetSignal = new Signal();
			this.flipSignal = new Signal();
			this.increaseBetSignal = new Signal();
			this.decreaseBetSignal = new Signal();
			this.choiceSignal = new Signal();
			
			this._display = new lib.demo();
			this._display.coin.visible = false;
			this._display.meter.visible = false;
			
			//gameMenu buttons
			
			//Example of how the UIButton class would have been used. It is useful for setting the button type, action and button text
			//this.flipBtn = new UIButton(this._display.flipBtn)
			//this.flipBtn.setEnabled(false);
			
			//I couldnt get it to work with the JS Adobe Animate generates so doing it the old fashioned way. setEnabled could be seperated into its own class			
			this._display.flipBtn.addEventListener("mousedown", this.gameActions.bind(this));
			this.setEnabled(this._display.flipBtn, false);
			
			this._display.increaseBetBtn.addEventListener("mousedown", this.betActions.bind(this));
			this._display.decreaseBetBtn.addEventListener("mousedown", this.betActions.bind(this));
			this.setEnabled(this._display.decreaseBetBtn, false);
			
			this._display.headsBtn.addEventListener("mousedown", this.choiceActions.bind(this));
			this.coinToggle(this._display.headsBtn, true);
			this._display.tailsBtn.addEventListener("mousedown", this.choiceActions.bind(this));
			this.coinToggle(this._display.tailsBtn, false);
			
		},
		
		/*
		*Sets whether a ui button is enabled or disabled. disabled buttons are faded out.
		*/
		setEnabled: function(mc/*DisplayObject*/, enabled/*Boolean*/) {
			if(enabled) {
				mc.alpha = 1;
				mc.mouseEnabled = true;
			} else {
				mc.alpha = 0.5;
				mc.mouseEnabled = false;
			}
		},
		
		/*
		*Works differently to setEnabled in that faded out button signifies that it is not selected. It is still clickable
		*/
		coinToggle: function(mc/*DisplayObject*/, selected/*Boolean*/) {
			if(selected) mc.alpha = 1;
			else mc.alpha = 0.5;
		},
		
		/*
		*Gets data from mediator when the Model is ready. A bigger application would send more than the below.
		*/
		configure: function(balance/*float*/, highestScore/*float*/, sound_loc/*String*/) {
			this._display.statusBar.highestScoreTxt.text = highestScore;
			this._display.statusBar.balanceTxt.text = balance;
			
			//load a sound
			createjs.Sound.registerSound(sound_loc, this._soundID);
		},
		
		resetGame: function() {
			this._betsPlaced = 0;
			this._display.betLbl.text = 0;
			this.setEnabled(this._display.flipBtn, false);
			this.setEnabled(this._display.decreaseBetBtn, false);
			
		},
		
		startCoinFlip: function() {
			//play a sound
			createjs.Sound.play(this._soundID);
			
			this._display.meter.visible = true;
			//this._demoApp.app.stageUpdater.setUsingTimelineGraphic(true); //This would be useful if MC contained an animation. Allows smooth animations.
			this._display.coin.gotoAndStop(1);
		},
		
		stopCoinFlip: function(result/*String*/) {
			this._display.coin.gotoAndStop(result);
			//this._demoApp.app.stageUpdater.setUsingTimelineGraphic(false); //This reduces the frame rate again to save CPU
		},
		
		/*
		*Sets the Streak meter. 
		*/ 
		setMeter: function(streak/*int*/) {
			if(streak >= 4) streak = 4;
			this._display.meter.gotoAndStop(streak);
		},
		
		updateBet: function(bet/*int*/) {
			this._display.betLbl.text = bet;
			
			if(bet>0) {
				this.setEnabled(this._display.decreaseBetBtn, true);
				this.setEnabled(this._display.flipBtn, true);
				this._display.coin.visible = true;
				this._display.coin.gotoAndStop(0);
			} else {
				this.setEnabled(this._display.decreaseBetBtn, false);
			}
		},
		
		updateBalance: function(balance/*float*/) {
			this._display.statusBar.balanceTxt.text = balance;
		},
		
		updateScore: function(score/*int*/) {
			this._display.statusBar.scoreTxt.text = score;
		},

		gameActions: function(event) {
			switch (event.currentTarget) { 
				case this._display.flipBtn:
					this.flipSignal.dispatch();
					break;
				case this._display.cashInBtn:
					this.cashInSignal.dispatch();
					break;
			}					
		},
		
		betActions: function(event) {
			switch (event.currentTarget) { 
				case this._display.increaseBetBtn:
					this.increaseBetSignal.dispatch();
					break;
				case this._display.decreaseBetBtn:
					this.decreaseBetSignal.dispatch();
					break;
			}
		},
		
		choiceActions: function(event) {
			switch (event.currentTarget) { 
				case this._display.headsBtn:
					this._coinSide = "heads";
					this.coinToggle(this._display.headsBtn, true);
					this.coinToggle(this._display.tailsBtn, false);
					break;
				case this._display.tailsBtn:
					this._coinSide = "tails";
					this.coinToggle(this._display.headsBtn, false);
					this.coinToggle(this._display.tailsBtn, true);
					break;
			}
		},
		
		getTotalBet: function() {
			return _betsPlaced;
		},
		
	};
	
})(window);