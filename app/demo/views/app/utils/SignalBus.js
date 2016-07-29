(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		Signal = global.signals.Signal;
	
	MyApp.SignalBus = SignalBus;
	function SignalBus() { this.init(); }
	
	SignalBus.prototype = {
		
		_signals: null,
		
		init: function() {
			this._signals = {};
		},
		
		getSignal: function( /*String*/ signalName) {
			var signal = this._signals[signalName];
			if (!signal) {
				signal = new Signal();
				signal.type = signalName;
				this._signals[signalName] = signal;
			}
			return signal;
		},
		
		dispatch: function(/*String*/ signalName, /*Object*/ parameters) {
			if (signalName === null) {
				lmsg("SignalBus: Invalid signal name specified");
				return;
			}
			lmsg("DISPATCH: " + signalName);
			var signal = this._signals[signalName];
			if (signal) {
				signal.params = parameters || {};
				signal.dispatch(signal);
			}
		},
		
		add: function( /*String*/ signalName, /*Function*/ listener, /*Object*/ thisObj) {
			this.getSignal(signalName).add(listener, thisObj);
		},
		
		addOnce: function( /*String*/ signalName, /*Function*/ listener, /*Object*/ thisObj) {
			this.getSignal(signalName).addOnce(listener, thisObj);
		},
		
		remove: function( /*String*/ signalName, /*Function*/ listener, /*Object*/ thisObj) {
			this.getSignal(signalName).remove(listener, thisObj);
		}
		
	};
	
})(window);