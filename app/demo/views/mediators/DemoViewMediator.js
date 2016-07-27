(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		DemoEvents = MyApp.DemoEvents;
	
	//class definition
	MyApp.DemoViewMediator = function() { this.init.apply(this, arguments); };
	MyApp.DemoViewMediator.prototype = {
		
		_demoApp: null,
		_view: null,
		_signalBus: null,
		
		init: function(demoApp) {
			this._demoApp = demoApp;
			this._signalBus = this._demoApp.signalBus;
	
			this._view = this._demoApp.demoView;
		
			this._signalBus.add(DemoEvents.MODEL_READY, this.setupModel.bind(this));
			this._signalBus.add(DemoEvents.RESIZE, this.onResize.bind(this) );
		},
		
		setupModel : function() {

		},
		
		onResize: function() {
			this._view.align();
		}
		
	};
	
})(window);
