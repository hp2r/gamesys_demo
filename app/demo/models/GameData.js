(function(global) {
	
	//class
	MyApp.GameData = function() { this.init.apply(this, arguments); };
	MyApp.GameData.prototype = {
		coinState: 0,
		balance: "",
		highestScore: "",
		
		init: function() { }
	};

})(window);