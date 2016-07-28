(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		MiscUtils = MyApp.MiscUtils,
		DemoEvents = MyApp.DemoEvents;
	
	//class definition
	MyApp.DemoViewMediator = function() { this.init.apply(this, arguments); };
	MyApp.DemoViewMediator.prototype = {
		
		_demoApp: null,
		_view: null,
		_signalBus: null,
		_totalBet: null,
		singleBet: 5,
		
		init: function(demoApp) {
			this._demoApp = demoApp;
			this._signalBus = this._demoApp.app.signalBus;
			this._gameData = this._demoApp.gameData;
	
			this._view = this._demoApp.demoView;
			
			this._view.flipSignal.add(this.startFlip.bind(this));
			this._view.cashInSignal.add(this.cashIn.bind(this));
			this._view.increaseBetSignal.add(this.increaseBet.bind(this));
			this._view.decreaseBetSignal.add(this.decreaseBet.bind(this));
			this._view._updateBetSignal.add(this.updateTotalBet.bind(this));
		
			this._signalBus.add(DemoEvents.MODEL_READY, this.setupModel.bind(this));
			this._signalBus.add(DemoEvents.RESIZE, this.onResize.bind(this) );
		},
		
		setupModel : function() {
			this._view.configure(this._gameData.balance, this._gameData.highestScore);
		},
		
		startFlip: function() {
			this._view.startCoinFlip();
			var coinFlipFunction = function() {
				this._view.stopCoinFlip(MiscUtils.headsOrTails());
				this.processResult();
			};
			setTimeout(coinFlipFunction.bind(this), 3000);
		},
		
		cashIn: function() {
			console.log("cashIn")
		},
		
		increaseBet: function() {
			if((this._totalBet + this.singleBet) <= this._gameData.balance) {
				this._totalBet += this.singleBet;
				this._gameData.balance = this._gameData.balance - this.singleBet;
				this._view.updateBalance(this._gameData.balance);
				this._view.updateBet(this._totalBet);
			}
		},
		
		decreaseBet: function() {
			this._totalBet -= this.singleBet;
			this._gameData.balance = this._gameData.balance + this.singleBet;
			this._view.updateBalance(this._gameData.balance);
			this._view.updateBet(this._totalBet);
		},
		
		updateTotalBet : function() {
			this._gameData.balance -= this._view.getTotalBet();
		},
		
		updateHighScore: function() {
			
		},
		
		onResize: function() {
			this._view.align();
		}
		
	};
	
})(window);
