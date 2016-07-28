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
		
		flipBtn: null,
		cashInBtn: null,
		increaseBetBtn: null,
		decreaseBetBtn: null,
		
		flipSignal: null,
		cashInSignal: null,
		increaseBetSignal: null,
		decreaseBetSignal: null,
		
		getView: function() { return this._display; },
		
		init: function(demoApp) {
			this._demoApp = demoApp;
			this._signal = this._demoApp.signalBus;
			
			//variables
			this._updateBetSignal = new Signal();
			this.flipSignal = new Signal();
			this.cashInSignal = new Signal();
			this.increaseBetSignal = new Signal();
			this.decreaseBetSignal = new Signal();
			
			this._display = new lib.demo();
			this._display.coin.visible = false;
			this._display.meter.visible = false;
			
			//gameMenu buttons
			if (this._display.flipBtn) {
				//this.flipBtn = new UIButton(this._display.flipBtn)
				this._display.flipBtn.addEventListener("mousedown", this.gameActions.bind(this));
				//this.flipBtn.setEnabled(false);
				this.setEnabled(this._display.flipBtn, false);
			}
			if (this._display.cashInBtn) {
				//this.cashInBtn = new UIButton(this._display.cashInBtn)
				this._display.cashInBtn.addEventListener("mousedown", this.gameActions.bind(this));
				//this.cashInBtn.setEnabled(false);
				this.setEnabled(this._display.cashInBtn, false);
			}
			if (this._display.increaseBetBtn) {
				//this.increaseBetBtn = new UIButton(this._display.increaseBetBtn);
				this._display.increaseBetBtn.addEventListener("mousedown", this.betActions.bind(this));
			}
			if (this._display.decreaseBetBtn) {
				//this.decreaseBetBtn = new UIButton(this._display.decreaseBetBtn);
				this._display.decreaseBetBtn.addEventListener("mousedown", this.betActions.bind(this));
				this.setEnabled(this._display.decreaseBetBtn, false);
			}
			
		},
		
		setEnabled: function(mc/*DisplayObject*/, enabled/*Boolean*/) {
			if(enabled) {
				mc.alpha = 1;
				mc.mouseEnabled = true;
			} else {
				mc.alpha = 0.5;
				mc.mouseEnabled = false;
			}
		},
		
		configure: function(balance/*float*/, highestScore/*float*/) {
			this._display.statusBar.highestScoreTxt.text = highestScore;
			this._display.statusBar.balanceTxt.text = balance;
		},
		
		updateBet: function(bet/*int*/) {
			this._display.betLbl.text = bet;
			
			if(bet>0) this.setEnabled(this._display.decreaseBetBtn, true);
			else this.setEnabled(this._display.decreaseBetBtn, false);
		},
		
		updateBalance: function(balance/*float*/) {
			this._display.statusBar.balanceTxt.text = balance;
		},

		align: function() {
			
		},
		
		updateLanguage: function() {
			this.align();
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
		
		getTotalBet: function() {
			return _betsPlaced;
		},
		
	};
	
})(window);