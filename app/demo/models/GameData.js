(function(global) {
	
	//class
	MyApp.GameData = function() { this.init.apply(this, arguments); };
	MyApp.GameData.prototype = {
		balance: 1000,
		highestScore: 10000,
		
		init: function() { }
	};

})(window);