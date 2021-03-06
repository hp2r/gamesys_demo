(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 359,
	height: 559,
	fps: 25,
	color: "#33CCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.TailsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNBHIAAh1IgqAAIAAgYIBvAAIAAAYIgqAAIAAB1g");
	this.shape.setTransform(16.1,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.StatusBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.scoreTxt = new cjs.Text("0", "bold 12px 'Arial'");
	this.scoreTxt.name = "scoreTxt";
	this.scoreTxt.lineHeight = 16;
	this.scoreTxt.lineWidth = 100;
	this.scoreTxt.setTransform(68.7,52.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAfIAAgMIAKAAIAAAMgAgFgSIAAgLIAKAAIAAALg");
	this.shape.setTransform(57.4,59.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeArIAAhVIA7AAIAAAKIgwAAIAAAbIAtAAIAAAIIgtAAIAAAeIAzAAIAAAKg");
	this.shape_1.setTransform(51.9,58.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAXArIgLgSIgIgMIgEgGIgFgCIgHAAIgNAAIAAAmIgLAAIAAhVIAkAAQALAAAGADQAGACAEAGQADAGAAAHQAAAJgGAHQgFADgNADIAHADIAJAMIAPAYgAgZgDIAYAAQAGAAAFgCQAEgBACgEQADgEAAgEQAAgGgFgEQgEgEgKAAIgZAAg");
	this.shape_2.setTransform(43.8,58.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAmQgKgGgFgKQgFgKABgMQAAgSALgNQAMgMAQAAQALAAAKAGQAKAGAEAKQAGAKAAALQgBAMgFALQgFALgKAEQgKAGgKAAQgLAAgJgGgAgTgZQgJAIAAASQAAAPAJAKQAHAIAMAAQAMAAAJgJQAHgJAAgQQAAgJgDgIQgEgHgGgFQgHgEgIAAQgLAAgIAIg");
	this.shape_3.setTransform(34.4,58.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgSAmQgKgFgEgLQgFgLABgLQAAgMAEgLQAGgJAJgFQAKgGAJAAQANAAAIAHQAKAHADALIgLADQgDgJgGgFQgFgEgJAAQgIAAgHAFQgGAFgDAHQgDAJAAAHQAAAKADAIQADAIAHAEQAHAEAGAAQAKAAAGgGQAHgFACgKIAMADQgEAOgJAGQgJAIgOAAQgMAAgIgGg");
	this.shape_4.setTransform(25.5,58.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQApQgIgEgEgGQgFgIAAgIIALgBQABAHACAEQADADAGAEQAGACAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgFQgDgEAAgGQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHADAEAHQAEAFAAAIIgLAAQgBgHgFgEQgFgFgJAAQgJAAgFAEQgFADAAAGQAAAFAEADQADADAMADQAOADAFADQAHABAEAFQAEAGAAAGQAAAHgEAGQgEAGgIAEQgHADgJAAQgKAAgIgDg");
	this.shape_5.setTransform(17,58.6);

	this.balanceTxt = new cjs.Text("", "bold 12px 'Arial'");
	this.balanceTxt.name = "balanceTxt";
	this.balanceTxt.lineHeight = 16;
	this.balanceTxt.lineWidth = 100;
	this.balanceTxt.setTransform(252.6,51.8);

	this.highestScoreTxt = new cjs.Text("", "bold 12px 'Arial'");
	this.highestScoreTxt.name = "highestScoreTxt";
	this.highestScoreTxt.lineHeight = 16;
	this.highestScoreTxt.lineWidth = 100;
	this.highestScoreTxt.setTransform(175.6,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAeIAAgLIALAAIAAALgAgFgSIAAgMIALAAIAAAMg");
	this.shape_6.setTransform(247,59.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAqIAAhUIA8AAIAAALIgxAAIAAAaIAtAAIAAAIIgtAAIAAAeIAzAAIAAAJg");
	this.shape_7.setTransform(241.4,58.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgSAnQgKgHgEgKQgFgLABgLQAAgNAEgJQAGgLAJgEQAKgGAJAAQANAAAJAHQAIAHAEALIgLADQgDgJgGgFQgGgEgIAAQgIAAgHAFQgGAFgDAHQgDAJAAAHQAAAKADAIQAEAIAGAEQAHAEAGAAQAJAAAHgGQAHgFACgKIALACQgDAPgJAGQgJAIgOAAQgMAAgIgFg");
	this.shape_8.setTransform(233,58.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVAqIgrhBIAABBIgKAAIAAhUIALAAIArBCIAAhCIALAAIAABUg");
	this.shape_9.setTransform(224.3,58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAbAqIgLgaIghAAIgKAaIgMAAIAihUIAJAAIAkBUgAgEgQIgKAXIAbAAIgJgWIgEgSQgBAJgDAIg");
	this.shape_10.setTransform(216,58.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgZAqIAAhUIALAAIAABLIAoAAIAAAJg");
	this.shape_11.setTransform(208.9,58.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbAqIgKgaIgiAAIgJAaIgNAAIAihUIAJAAIAjBUgAgFgQIgJAXIAbAAIgJgWIgEgSQgCAJgDAIg");
	this.shape_12.setTransform(201.3,58.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgfAqIAAhUIAfAAQAJAAAGADQAGADADAGQAEAEAAAHQAAAFgDAFQgDAFgGADQAIABAEAFQAEAFAAAHQAAAHgDAFQgCAFgEADIgJAEQgGABgIAAgAgUAhIAUAAIAIgBQADgBADgBQADgCABgDQACgDAAgFQAAgEgCgEQgDgDgEgBQgFgCgGAAIgUAAgAgUgGIATAAIAJgBQAEgBACgCQADgDAAgFQAAgFgCgDQgDgDgDgBQgEgBgHAAIgSAAg");
	this.shape_13.setTransform(193.4,58.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAeIAAgLIAKAAIAAALgAgEgRIAAgNIAKAAIAAANg");
	this.shape_14.setTransform(170,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAqIAAhTIA8AAIAAAKIgwAAIAAAaIAuAAIAAAIIguAAIAAAdIAyAAIAAAKg");
	this.shape_15.setTransform(164.4,21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAqIgLgSIgIgLIgEgGIgFgCIgHAAIgNAAIAAAlIgLAAIAAhTIAkAAQALAAAGACQAGACAEAGQADAGAAAHQAAAJgGAGQgFAEgNADIAHADIAJAMIAPAXgAgZgDIAYAAQAGgBAFgBQAEgCACgDQADgEAAgEQAAgGgFgEQgEgEgKAAIgZAAg");
	this.shape_16.setTransform(156.3,21.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVAmQgJgGgFgKQgEgKgBgLQAAgUAMgMQALgMARAAQAMAAAJAGQAJAFAGALQAEAKAAALQABAMgGALQgFAKgKAGQgJAFgLAAQgLAAgKgGgAgTgZQgJAJAAARQAAAQAIAIQAJAJALAAQAMAAAIgJQAJgJgBgQQAAgJgDgIQgEgHgGgFQgHgEgIAAQgKAAgJAIg");
	this.shape_17.setTransform(147,21.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAnQgJgHgEgKQgEgLgBgLQAAgMAGgKQAEgLAKgFQAJgFAKAAQANAAAIAGQAKAIADALIgLADQgDgKgGgEQgGgEgIAAQgIAAgGAEQgIAFgCAJQgDAHAAAIQAAAKAEAIQACAIAIAEQAGAEAGAAQAJAAAHgFQAGgGADgKIAMACQgEAOgKAIQgJAHgNAAQgMAAgJgFg");
	this.shape_18.setTransform(138,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAoQgIgDgEgGQgFgIAAgIIALgBQABAGACAEQADAFAGACQAGADAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEgBQgHgCgDgGQgDgFAAgFQAAgHAEgFQAEgGAHgDQAHgDAIAAQAIAAAIADQAHAEAEAGQAEAFAAAIIgLAAQgBgIgFgEQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAFAEADQADADAMADQAOADAFACQAHABAEAGQAEAGAAAGQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_19.setTransform(129.6,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAqIAAhJIgcAAIAAgKIBDAAIAAAKIgdAAIAABJg");
	this.shape_20.setTransform(118.6,21.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAoQgIgDgEgGQgFgIAAgIIALgBQABAGACAEQADAFAGACQAGADAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEgBQgHgCgDgGQgDgFAAgFQAAgHAEgFQAEgGAHgDQAHgDAIAAQAIAAAIADQAHAEAEAGQAEAFAAAIIgLAAQgBgIgFgEQgFgEgJAAQgJAAgFAEQgFADAAAGQAAAFAEADQADADAMADQAOADAFACQAHABAEAGQAEAGAAAGQAAAHgEAGQgEAGgIADQgHAEgJAAQgKAAgIgEg");
	this.shape_21.setTransform(110.9,21.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAqIAAhTIA8AAIAAAKIgwAAIAAAaIAuAAIAAAIIguAAIAAAdIAzAAIAAAKg");
	this.shape_22.setTransform(103.1,21.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWAqIAAgoIgrAAIAAAoIgLAAIAAhTIALAAIAAAjIArAAIAAgjIALAAIAABTg");
	this.shape_23.setTransform(94.6,21.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAnQgLgGgFgKQgFgKAAgNQAAgKAFgLQAFgMAKgFQAKgFALAAQAJAAAIADQAHADAEAGQAFAFACAIIgKAEQgCgHgDgEQgDgDgFgDQgGgCgGAAQgGAAgGADQgFABgEAFQgDAEgCAEQgEAIAAAIQAAAKAEAJQAEAHAIAEQAHAEAHgBQAHABAHgDQAHgDAEgDIAAgQIgZAAIAAgJIAkAAIAAAfQgIAGgJADQgJAEgJAAQgLAAgKgFg");
	this.shape_24.setTransform(85.5,21.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_25.setTransform(79.2,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWAqIAAgoIgrAAIAAAoIgLAAIAAhTIALAAIAAAjIArAAIAAgjIALAAIAABTg");
	this.shape_26.setTransform(73.2,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.highestScoreTxt},{t:this.balanceTxt},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.scoreTxt}]}).wait(1));

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CCCCCC").s().p("A8CEsIAApXMA4FAAAIAAJXg");
	this.shape_27.setTransform(179.5,36,1,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359,72);


(lib.Meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AmjAZIAAgxINHAAIAAAxg");
	this.shape.setTransform(42,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBHQABgOAIgNQAIgNAWgVQARgQAFgGQAFgIAAgJQAAgJgEgFQgFgFgKAAQgGAAgFAFQgFAGgBAMIgcgDQADgXANgKQANgJARAAQAVAAAMALQAMALAAARQAAAKgDAJQgDAIgIAIIgRASIgQAQIgFAIIA0AAIAAAZg");
	this.shape_1.setTransform(109.5,-13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUAzIgUggIgUAgIghAAIAmgzIgkgyIAhAAIASAcIASgcIAgAAIgjAxIAnA0g");
	this.shape_2.setTransform(98.6,-11.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AmjBpIAAjQINHAAIAADQg");
	this.shape_3.setTransform(42,-10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfA+QgNgMgCgSIAbgDQABAKAGAGQAFAEAHAAQAHABAHgHQAFgGAAgLQAAgLgFgFQgGgHgIAAQgEAAgGACIACgUQAKAAAFgFQAGgFAAgIQAAgIgEgEQgFgEgEAAQgIAAgEAFQgGAEAAAKIgagEQADgNAFgIQAFgIAKgFQAKgDALAAQATAAAMAMQAJAKABAOQgBATgUALQANACAHAIQAHAJAAANQAAATgNANQgPAOgTAAQgTgBgMgKg");
	this.shape_4.setTransform(107.7,-53.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AmjEiIAApCINHAAIAAJCg");
	this.shape_5.setTransform(42,-29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAHBHIAAgdIg5AAIAAgYIA8hYIAYAAIAABYIARAAIAAAYIgRAAIAAAdgAgYASIAfAAIAAgvg");
	this.shape_6.setTransform(107.7,-99.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AmjIDIAAwEINHAAIAAQEg");
	this.shape_7.setTransform(42,-51.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgeA+QgPgMAAgVQgBgMAHgJQAFgIANgFQgLgEgFgJQgFgIAAgJQAAgQAMgLQAKgKAUAAQATAAAMAKQALALAAAQQAAAKgFAIQgFAIgJAEQALAEAHAIQAFAJAAAMQAAATgMANQgMAMgWAAQgRABgNgLgAgOALQgEAIAAAHQgBAMAHAGQAFAGAHABQAIAAAGgHQAGgFgBgNQABgKgGgGQgFgFgJAAQgJAAgFAGgAgLgtQgFAEAAAIQAAAIAFAFQAFAFAGgBQAHABAEgFQAGgFgBgIQAAgIgEgEQgFgFgHAAQgGAAgFAFg");
	this.shape_8.setTransform(107.7,-185.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AmjO2IAA9qINHAAIAAdqg");
	this.shape_9.setTransform(42,-95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{x:98.6,y:-11.4}},{t:this.shape_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_2,p:{x:96.6,y:-51.4}},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_2,p:{x:96.6,y:-97.4}},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_2,p:{x:96.6,y:-183.4}},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5,84.1,5);


(lib.IncreaseBet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjwDQIDwmgIDxGgg");
	this.shape.setTransform(24.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.4,41.8);


(lib.HeadsBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBHIAAg/Ig3AAIAAA/IgdAAIAAiNIAdAAIAAA4IA3AAIAAg4IAdAAIAACNg");
	this.shape.setTransform(15,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_1.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.FlipButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZBAIgyhSIAABSIgZAAIAAh/IAaAAIAzBUIAAhUIAXAAIAAB/g");
	this.shape.setTransform(60.1,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_1.setTransform(51.2,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsAwQgRgRAAgeQAAgTAFgNQAFgKAIgIQAIgHAIgEQANgFAOAAQAcAAARARQARATAAAdQAAAfgRARQgRASgcAAQgcAAgQgSgAgZggQgJAMgBAUQABAWAJAKQALAMAOAAQAPAAAKgLQAKgLAAgWQAAgVgKgLQgJgLgQAAQgPAAgKALg");
	this.shape_2.setTransform(41.7,56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgmAwQgRgRAAgeQAAgfARgRQAQgSAaAAQAXAAAPAOQAJAIAEAPIgaAHQgCgKgHgGQgHgGgLAAQgMAAgJALQgJAKAAAWQAAAXAJAKQAJALAMAAQAKAAAIgGQAHgHADgOIAaAHQgGAWgOAKQgNAKgVAAQgYAAgQgSg");
	this.shape_3.setTransform(28.1,56.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgwBAIAAh/IAqAAQAWAAAHACQALADAHAKQAIAJAAAQQAAAMgFAIQgEAGgHAEQgGAFgHACQgKACgPAAIgRAAIAAAwgAgWgFIAOAAQAOAAAFgCQAFgCADgEQADgEAAgGQAAgHgEgFQgEgEgHgBIgRgBIgMAAg");
	this.shape_4.setTransform(57.9,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMBAIAAh/IAYAAIAAB/g");
	this.shape_5.setTransform(49.2,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgsBAIAAh+IAaAAIAABoIA/AAIAAAWg");
	this.shape_6.setTransform(41.6,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqBAIAAh/IBWAAIAAAWIg8AAIAAAfIAzAAIAAATIgzAAIAAA3g");
	this.shape_7.setTransform(30.4,34.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(3,1,1).p("AGzAAQAAC0iAB/Qh/CAi0AAQizAAh/iAQiAh/AAi0QAAizCAh/QB/iACzAAQC0AAB/CAQCAB/AACzg");
	this.shape_8.setTransform(43.5,43.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC33").s().p("AkyEzQiAh/AAi0QAAizCAh/QB/iACzAAQC0AAB/CAQB/B/ABCzQgBC0h/B/Qh/B/i0ABQizgBh/h/g");
	this.shape_9.setTransform(43.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,90,90);


(lib.DecreaseBet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjwjQIHhAAIjxGgg");
	this.shape.setTransform(24.2,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,48.4,41.8);


(lib.Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{heads:2,tails:8});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKBsIAAjUIAmAAIAAAXQAHgMANgHQANgIANAAQAcABASAUQATAWAAAmQAAAlgTAWQgTAVgbAAQgLAAgKgFQgLgFgLgMIAABNgAgYg/QgKALAAAXQAAAaALALQAKANANAAQAOAAAKgMQAJgJAAgbQAAgZgJgLQgKgMgOAAQgOAAgKAMg");
	this.shape.setTransform(85,90.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTBrIAAiaIAnAAIAACagAgThEIAAgmIAnAAIAAAmg");
	this.shape_1.setTransform(71.2,84.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBrIAAjVIAnAAIAADVg");
	this.shape_2.setTransform(62.9,84.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhIBrIAAjVICRAAIAAAkIhmAAIAAAzIBYAAIAAAiIhYAAIAABcg");
	this.shape_3.setTransform(49.9,84.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAeBPIAAhPQAAgYgEgHQgCgIgGgEQgGgDgIAAQgJAAgIAFQgJAGgDAKQgDAJAAAYIAABHIgqAAIAAiZIAnAAIAAAWQAVgaAcAAQAOAAALAFQAMAFAFAHQAGAIACAKQACAKAAARIAABfg");
	this.shape_4.setTransform(91.2,52.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTBrIAAiaIAnAAIAACagAgThEIAAgmIAnAAIAAAmg");
	this.shape_5.setTransform(77.9,49.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgnBHQgUgKgKgSQgKgTAAgZQAAgUAKgTQAKgUATgKQATgKAVAAQAjAAAWAXQAXAXAAAiQAAAigXAYQgXAXgiAAQgUAAgTgKgAgagiQgLAMAAAWQAAAXALAMQALAMAPAAQAQAAALgMQAKgMAAgXQAAgWgKgMQgLgMgQAAQgPAAgLAMg");
	this.shape_6.setTransform(64.5,52.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhBBRQgbgdAAgzQAAgzAcgdQAbgeArAAQAoAAAYAXQAPAOAHAaIgqAKQgEgRgMgJQgMgKgSAAQgWAAgOARQgPARAAAmQAAAnAOARQAPARAVAAQASABAMgLQANgMAFgXIAqAOQgKAigWARQgXASgigBQgpAAgcgdg");
	this.shape_7.setTransform(44.4,49.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC33").s().p("AnuHvQjNjNAAkiQAAkhDNjMQDNjNEhgBQEiABDNDNQDNDMAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNg");
	this.shape_8.setTransform(70,70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgEBZQgIgDgEgFQgDgFgCgJQgBgGAAgTIAAg5IgQAAIAAgdIAQAAIAAgaIAigVIAAAvIAYAAIAAAdIgYAAIAAA0QAAARABACQAAADADACQACACAEAAQAFAAAJgEIADAcQgMAFgQAAQgKAAgFgDg");
	this.shape_9.setTransform(99.2,103.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQBdIAAi4IAiAAIAAC4g");
	this.shape_10.setTransform(91.3,103.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnA+QgLgFgFgLQgFgLAAgTIAAhTIAkAAIAAA9QAAAbACAGQACAHAFADQAFAFAIAAQAHAAAIgGQAHgEACgIQADgHAAgbIAAg5IAkAAIAACFIghAAIAAgVQgIALgMAGQgKAHgNAAQgOAAgKgHg");
	this.shape_11.setTransform(79.6,106);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgpA7QgQgMgEgSIAkgGQABAKAIAGQAHAGAKAAQAOAAAHgGQAEgEABgFQgBgEgCgDQgCgDgKgBQgpgKgMgIQgQgJAAgUQAAgRAPgMQANgMAdAAQAaAAANAJQAOAJAFASIghAGQgDgIgGgEQgGgEgKAAQgNAAgHADQgEADAAAFQABAEADADQAFADAaAHQAdAGAMAJQAKAIABARQAAASgQAOQgQANgeAAQgaAAgQgLg");
	this.shape_12.setTransform(64.2,105.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgwAvQgNgSAAgcQAAggARgTQASgTAaAAQAcAAASAUQARAUgBAnIhXAAQAAAQAJAIQAIAJAKAAQAJABAFgFQAGgFADgKIAkAGQgHAUgPAKQgPAKgWAAQghAAgRgXgAgRghQgHAJAAAOIAzAAQAAgQgIgHQgIgJgLABQgJAAgIAIg");
	this.shape_13.setTransform(49.9,105.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgqBFIAAiFIAhAAIAAATQAJgNAEgFQAHgEAJgBQAMAAALAHIgLAfQgJgFgIAAQgHgBgFAFQgDAEgDALQgDALAAAgIAAAqg");
	this.shape_14.setTransform(38.8,105.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgqBFIAAiFIAhAAIAAATQAJgNAEgFQAHgEAJgBQAMAAALAIIgLAeQgJgFgIAAQgHgBgFAFQgDAEgDALQgDALAAAgIAAAqg");
	this.shape_15.setTransform(81.4,74.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA9QgRgIgKgQQgIgQAAgWQAAgRAIgQQAKgSAQgIQAPgJATAAQAeAAATAUQAUAUAAAdQAAAegUAUQgTAUgeAAQgRAAgQgJgAgWgdQgKAKAAATQAAATAKALQAJALANAAQANAAAKgLQAKgLAAgTQAAgTgKgKQgKgLgNAAQgNAAgJALg");
	this.shape_16.setTransform(67.4,74.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYBeIAAhpIgUAAIAAgcIAUAAIAAgKQAAgRADgIQAEgIAKgGQAHgFAQAAQAPAAAOAFIgFAYQgIgCgIAAQgIAAgDAEQgDAEAAAKIAAAJIAaAAIAAAcIgaAAIAABpg");
	this.shape_17.setTransform(55.6,72);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtBUQgPgMAAgSIABgEIAoAFQABAHAEADQAFAEAJAAQAOAAAHgFQAFgCACgHQACgEAAgMIAAgUQgQAWgXAAQgbAAgQgXQgMgSAAgZQAAgiAQgSQARgSAYAAQAXAAAQAWIAAgTIAhAAIAAB3QAAAYgDAMQgEAMgIAHQgHAGgLAEQgMAEgTAAQggAAgOgMgAgTg5QgJAKAAAUQAAAWAJAIQAIAJALAAQAMAAAJgKQAJgIAAgUQAAgVgIgKQgJgKgNAAQgLAAgIAKg");
	this.shape_18.setTransform(106.7,46.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAZBFIAAhFQAAgUgCgGQgDgHgFgDQgEgEgIAAQgHAAgHAFQgIAFgCAIQgDAJgBAVIAAA9IgjAAIAAiFIAhAAIAAAUQARgYAZAAQAMABAKAEQAKAEAFAHQAFAGACAJQACAIAAAPIAABTg");
	this.shape_19.setTransform(91.2,43.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRBdIAAiFIAiAAIAACFgAgRg6IAAghIAiAAIAAAhg");
	this.shape_20.setTransform(79.7,41.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgEBZQgIgDgEgFQgDgFgCgJQgBgGAAgTIAAg5IgQAAIAAgdIAQAAIAAgaIAigVIAAAvIAYAAIAAAdIgYAAIAAA0QAAARABACQAAADADACQACACAEAAQAFAAAJgEIADAcQgMAFgQAAQgKAAgFgDg");
	this.shape_21.setTransform(71.7,41.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQBdIAAiFIAiAAIAACFgAgQg6IAAghIAiAAIAAAhg");
	this.shape_22.setTransform(63.8,41.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgyA6QgMgKAAgSQAAgLAFgJQAGgJAKgDQAKgFASgDQAXgFAKgEIAAgDQAAgLgFgEQgFgFgMABQgKgBgFAEQgGAEgDAKIgggHQAFgTANgJQAOgKAaAAQAWAAAMAGQALAFAFAJQAFAJAAAXIgBAnQAAASACAJQACAIAFAKIgkAAIgDgKIgBgFQgKAJgKAFQgIAEgMAAQgVAAgMgMgAAAAHQgPAEgEADQgHAFAAAIQAAAHAFAGQAGAFAIAAQAIAAAJgGQAGgFACgHQACgFAAgMIAAgHIgUAEg");
	this.shape_23.setTransform(53,43.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAlBdIgliKIgjCKIgpAAIgti4IAnAAIAcB9IAih9IAqAAIAiB/IAch/IAlAAIgtC4g");
	this.shape_24.setTransform(33.5,41.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0066CC").s().p("AnuHvQioipgejiQgGgxgBgzQAAkhDNjMQDNjNEhgBQEiABDNDNQDNDMAAEhQAAAzgHAxQgeDiioCpQjNDNkiAAQkhAAjNjNg");
	this.shape_25.setTransform(70,70);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("ABTDTIAAi5IilAAIAAC5IhWAAIAAmlIBWAAIAACnIClAAIAAinIBWAAIAAGlg");
	this.shape_26.setTransform(68.2,70.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgpDTIAAldIh9AAIAAhIIFNAAIAABIIh9AAIAAFdg");
	this.shape_27.setTransform(69,74.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AnuHvQjNjNAAkiQAAkhDNjMQDNjNEhgBQEiABDNDNQDNDMAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNg");
	this.shape_28.setTransform(70,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},6).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,140);


// stage content:
(lib.demo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// assets
	this.text = new cjs.Text("Add/Decrease Bet", "12px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 15;
	this.text.lineWidth = 100;
	this.text.setTransform(308.1,387.2);

	this.text_1 = new cjs.Text("Winnings Multiplier. Increase your streak to increase the multiplier", "12px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 167;
	this.text_1.setTransform(95.6,369.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgBQABAFAEAEQAEADAFAAQAIAAADgCQAEgEAAgEQAAgDgEgDIgLgDIgOgEQgEgBgCgEQgDgDAAgFQAAgEADgEIAEgGIAIgDIAIgBQAFAAAGACQAGACACAEQADADABAHIgLABQAAgFgDgDQgDgDgGABQgGgBgDADQgEADAAADIACADIAEADIAHADIAQAEQAFABACADQACAEABAFQAAAFgDAFQgEAFgFADQgGACgIAAQgKAAgGgFg");
	this.shape.setTransform(243.9,461.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_1.setTransform(239.6,460.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEArIAAg9IAJAAIAAA9gAgEgdIAAgNIAJAAIAAANg");
	this.shape_2.setTransform(237,460.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgFACgDQACgEAEgCIAHgCIAKgCQAKgBAGgCIAAgDQAAgGgDgDQgEgDgHAAQgGgBgEADQgDADgCAGIgLgBQACgHAEgDQACgEAHgDQAGgCAFAAQAIAAAGABQAFACACAEQACACACAEIAAALIAAALIAAATQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgGABgDABQgDABgCADQgBACAAADQAAAEAEADQACADAHgBQADABAGgDQAEgDADgFQABgDAAgHIAAgDIgPADg");
	this.shape_3.setTransform(232.3,461.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFArIAAhKIgcAAIAAgLIBDAAIAAALIgdAAIAABKg");
	this.shape_4.setTransform(225.4,460.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPAfIAAg8IAJAAIAAAJQAEgGACgCQACgCAEAAQAFAAAFADIgDAKQgEgCgEAAQgDAAgCACQgCACgBADQgCAGAAAGIAAAfg");
	this.shape_5.setTransform(216.8,461.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAJQAJAHAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAGAAAKQAAALAFAHQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHABQgGgBgGAHg");
	this.shape_6.setTransform(211,461.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAbQgHgFgCgKIALgBQABAFAEAEQAEADAFAAQAHAAAEgCQADgEABgEQAAgDgEgDIgLgDIgOgEQgEgBgCgEQgDgDAAgFQABgEACgEIAEgGIAHgDIAJgBQAGAAAFACQAGACACAEQADADABAHIgKABQgBgFgEgDQgDgDgFABQgGgBgDADQgDADAAADIABADIAEADIAHADIAQAEQAFABACADQACAEAAAFQAAAFgCAFQgEAFgFADQgHACgHAAQgKAAgGgFg");
	this.shape_7.setTransform(201.3,461.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAnQgFgEgEgHQgDgIAAgJQAAgKACgFQAEgIAGgEQAGgEAHAAQAFAAAEADQAFACACAEIAAgfIALAAIAABUIgKAAIAAgIQgGAJgLAAQgGAAgHgEgAgKgFQgEAFgBALQAAAMAGAGQAEAFAFAAQAHAAAFgFQAFgGAAgLQAAgMgFgFQgFgGgHAAQgFAAgFAGg");
	this.shape_8.setTransform(194.8,460.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgVAbQgGgFAAgIQAAgFACgDQACgEAEgCIAHgCIAKgCQAKgBAGgCIAAgDQAAgGgDgDQgEgDgHAAQgGgBgEADQgEADgBAGIgLgBQACgHAEgDQACgEAHgDQAGgCAFAAQAIAAAGABQAEACADAEQACACACAEIAAALIAAALIAAATQABAEACAEIgLAAIgCgIQgGAFgFACQgEACgGAAQgKAAgFgFgAgBADQgGABgDABQgDABgCADQgBACAAADQAAAEAEADQACADAHgBQAEABAFgDQAEgDADgFQABgDAAgHIAAgDIgPADg");
	this.shape_9.setTransform(188.3,461.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgIQAIgJALAAQAMAAAIAJQAIAIAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgSQgFAFgBAJIAhAAQgBgJgDgDQgFgHgIABQgFAAgFAEg");
	this.shape_10.setTransform(181.7,461.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWArIAAgpIgrAAIAAApIgLAAIAAhVIALAAIAAAkIArAAIAAgkIALAAIAABVg");
	this.shape_11.setTransform(174,460.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAXQgIgIAAgPQAAgOAIgIQAIgJALAAQAMAAAIAJQAIAIAAAOIAAACIgsAAQAAALAFAFQAGAFAFAAQAGAAAEgDQAEgDADgGIALABQgDAJgHAGQgHAFgLAAQgLAAgIgJgAgKgSQgFAFgBAJIAhAAQgBgJgDgDQgFgHgIABQgFAAgFAEg");
	this.shape_12.setTransform(163,461.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAbQgGgFgCgKIAKgBQABAFAEAEQAEADAFAAQAIAAADgCQAEgEgBgEQAAgDgCgDIgLgDIgOgEQgFgBgCgEQgDgDABgFQAAgEABgEIAGgGIAGgDIAJgBQAFAAAHACQAFACADAEQACADABAHIgLABQAAgFgDgDQgEgDgFABQgGgBgDADQgDADgBADIACADIAEADIAIADIAPAEQAEABADADQACAEAAAFQAAAFgDAFQgDAFgGADQgFACgHAAQgLAAgGgFg");
	this.shape_13.setTransform(156.7,461.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAJQAJAHAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAGAAAKQAAALAFAHQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHABQgGgBgGAHg");
	this.shape_14.setTransform(150.4,461.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAXQgIgIAAgPQAAgQAKgIQAIgHAKAAQAMAAAIAJQAJAHAAAPQAAAKgEAIQgEAGgHAEQgGAEgIAAQgMAAgIgJgAgMgQQgFAGAAAKQAAALAFAHQAGAFAGAAQAHAAAFgFQAGgHAAgLQAAgLgGgFQgFgHgHABQgGgBgGAHg");
	this.shape_15.setTransform(143.7,461.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAOArIAAgoQAAgGgDgEQgEgDgGAAQgDAAgEACQgEADgCAEQgBACAAAHIAAAjIgLAAIAAhVIALAAIAAAgQAHgJAJAAQAHAAAFACQAFADADAFQACAFAAAHIAAAog");
	this.shape_16.setTransform(137.1,460.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgSAnQgKgHgEgKQgFgLABgLQAAgNAEgJQAGgLAJgEQAKgGAJAAQANAAAJAGQAIAIAEALIgLADQgDgJgGgFQgGgEgIAAQgIAAgHAFQgGAFgDAHQgDAJAAAHQAAAKADAIQAEAIAGAEQAHAEAGAAQAJAAAHgGQAHgFACgKIALACQgDAPgJAGQgJAIgOAAQgMAAgIgFg");
	this.shape_17.setTransform(129.5,460.6);

	this.tailsBtn = new lib.TailsBtn();
	this.tailsBtn.setTransform(206.2,493.6,1,1,0,0,0,15.5,15.5);

	this.headsBtn = new lib.HeadsBtn();
	this.headsBtn.setTransform(160.6,493.6,1,1,0,0,0,15.5,15.5);

	this.betLbl = new cjs.Text("0", "bold 14px 'Arial'");
	this.betLbl.name = "betLbl";
	this.betLbl.textAlign = "center";
	this.betLbl.lineHeight = 18;
	this.betLbl.lineWidth = 72;
	this.betLbl.setTransform(308,464.8);

	this.decreaseBetBtn = new lib.DecreaseBet();
	this.decreaseBetBtn.setTransform(284.7,491.8);

	this.increaseBetBtn = new lib.IncreaseBet();
	this.increaseBetBtn.setTransform(284.7,410.3);

	this.statusBar = new lib.StatusBar();
	this.statusBar.setTransform(179.5,29.5,1,1,0,0,0,179.5,30);

	this.meter = new lib.Meter();
	this.meter.setTransform(46,363.1);

	this.coin = new lib.Coin();
	this.coin.setTransform(262.1,243,1,1,0,0,0,70,70);

	this.flipBtn = new lib.FlipButton();
	this.flipBtn.setTransform(15,454.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flipBtn},{t:this.coin},{t:this.meter},{t:this.statusBar},{t:this.increaseBetBtn},{t:this.decreaseBetBtn},{t:this.betLbl},{t:this.headsBtn},{t:this.tailsBtn},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.5,279,360.1,543.1);

})(demoAssets = demoAssets||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var demoAssets, images, createjs, ss;