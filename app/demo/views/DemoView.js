(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		createjs = global.createjs,
		lib = global.demoAssets,
		Signal = global.signals.Signal,
		DemoEvents = MyApp.DemoEvents;
	
	//class definition
	MyApp.DemoView = function() { this.init.apply(this, arguments); };
	MyApp.DemoView.prototype = {
		
		_demoApp: null,
		_display: null,
		
		getView: function() { return this._display; },
		
		init: function(demoApp) {
			this._demoApp = demoApp;
			this._signal = this._demoApp.signalBus;
			
			//variables
			this._display = new lib.demo();
			this._display.coin.visible = false;
			
			this._display.flipBtn.addEventListener("mousedown", this.flipBtnClicked.bind(this));
			this._display.cashInBtn.addEventListener("mousedown", this.cashInBtnClicked.bind(this));
			
			//createjs.Ticker.addEventListener("tick", this.align.bind(this));
			//this._display.gameMenu.btnBlackjack.gotoAndStop(0);
			//this._display.gameMenu.btnBaccarat.gotoAndStop(0);
		},

		align: function() {
			
		},
		
		updateLanguage: function() {
			this.align();
		},
		
		flipBtnClicked: function() {
			this._display.meter.gotoAndStop(0);
			this._display.coin.visible = true;
			this._display.coin.gotoAndStop(0);		
		},
		
		cashInBtnClicked: function() {
			this._display.meter.gotoAndPlay(0);
			this._display.coin.visible = false;
			this._display.coin.gotoAndStop(0);		
		},
		
	};
	
})(window);