(function(global) {
	
	var MyApp = global.MyApp;
	
	MyApp.MiscUtils = {
		
		//randon num generator for coin flip
		headsOrTails: function() {
			var x = Math.floor((Math.random() * 2) + 1);
			return x == 1 ? "heads" : "tails";
		},
		
		//return the correct winning streak multiplier
		winningMultiplier: function(streak/*int*/) {
			var multiplier/*int*/ = 2;
			if(streak < 4) {
				multiplier = streak+1;
			} else {
				multiplier = 8;
			}
			return multiplier
		},
		
		getPageWidth: function() {
			var pixelRatio = (window.app) ? global.app.pixelRatio : 1;
			if (window.navigator.standalone) { //iOS web home app mode
				return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * pixelRatio;
			} else {
				return (document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth)  * pixelRatio;
			}
		},
		getPageHeight: function() {
			var pixelRatio = (window.app) ? global.app.pixelRatio : 1;
			if (window.navigator.standalone) { //iOS web home app mode
				return (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight)  * pixelRatio;
			} else {
				return (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight)  * pixelRatio;
			}
		},
		
		isLandscapeView: function(){
			return app.pageAspect > 1;
		},
		
		arrayComparision: function (array1, array2) {
		    // if the other array is a falsy value, return
		    if (!array2)
		        return false;

		    // compare lengths - can save a lot of time 
		    if (array1.length != array2.length)
		        return false;

		    for (var i = 0, l=array1.length; i < l; i++) {
		        // Check if we have nested arrays
		        if (array1[i] instanceof Array && array2[i] instanceof Array) {
		            // recurse into the nested arrays
		            if (!array1[i].equals(array2[i]))
		                return false;       
		        }           
		        else if (array1[i] != array2[i]) { 
		            // Warning - two different object instances will never be equal: {x:20} != {x:20}
		            return false;   
		        }           
		    }       
		    return true;
		},
		
		getTouchOrMouseCoordinate: function(event) {
			var pixelRatio = (window.app) ? global.app.pixelRatio : 1;
			var coordinateObject = {x:0, y:0};
			if (event.clientX !== null) {
				coordinateObject.x = event.pageX* pixelRatio;
				coordinateObject.y = event.pageY* pixelRatio;
			}
			if (event.targetTouches !== undefined && event.targetTouches.length >= 1) {
				coordinateObject.x = event.targetTouches[0].pageX* pixelRatio;
				coordinateObject.y = event.targetTouches[0].pageY* pixelRatio;
			}
			return coordinateObject;
		},
		
		insertAfter: function(movingNode, anchorNode) {
			if (anchorNode.nextSibling) {
				anchorNode.parentNode.insertBefore(movingNode, anchorNode.nextSibling);
			} else {
				anchorNode.parentNode.appendChild(movingNode);
			}
		},
		
		insertBefore: function(movingNode, anchorNode) {
			anchorNode.parentNode.insertBefore(movingNode, anchorNode);
		}
		
	};
	
})(window);