(function(global) {
	
	//class
	MyApp.GameData = function() { this.init.apply(this, arguments); };
	MyApp.GameData.prototype = {
		balance: 1000,
		highestScore: 10000,
		sound_loc: "assets/coin-flip.wav", //I would normally put asset locations in a separate class to normal game data.
		
		init: function() { }
	};

})(window);