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
	this.shape.graphics.f("#FF0000").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.StatusBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.balanceTxt = new cjs.Text("", "bold 12px 'Arial'");
	this.balanceTxt.name = "balanceTxt";
	this.balanceTxt.textAlign = "right";
	this.balanceTxt.lineHeight = 16;
	this.balanceTxt.lineWidth = 100;
	this.balanceTxt.setTransform(352.6,41.8);

	this.highestScoreTxt = new cjs.Text("", "bold 12px 'Arial'");
	this.highestScoreTxt.name = "highestScoreTxt";
	this.highestScoreTxt.textAlign = "right";
	this.highestScoreTxt.lineHeight = 16;
	this.highestScoreTxt.lineWidth = 100;
	this.highestScoreTxt.setTransform(352.6,20.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFAfIAAgMIALAAIAAAMgAgFgSIAAgMIALAAIAAAMg");
	this.shape.setTransform(247,49.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeArIAAhVIA8AAIAAAKIgxAAIAAAbIAtAAIAAAIIgtAAIAAAeIAzAAIAAAKg");
	this.shape_1.setTransform(241.4,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAmQgKgFgEgLQgFgLABgLQAAgMAEgLQAGgJAJgFQAKgGAJAAQANAAAJAHQAIAHAEALIgLADQgDgJgGgFQgGgEgIAAQgIAAgHAFQgGAFgDAHQgDAJAAAHQAAAKADAIQAEAIAGAEQAHAEAGAAQAJAAAHgGQAHgFACgKIALADQgDAOgJAGQgJAIgOAAQgMAAgIgGg");
	this.shape_2.setTransform(233,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVArIgrhCIAABCIgKAAIAAhVIALAAIArBCIAAhCIALAAIAABVg");
	this.shape_3.setTransform(224.3,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbArIgLgaIghAAIgKAaIgMAAIAihVIAJAAIAkBVgAgEgQIgKAXIAbAAIgJgWIgEgSQgBAJgDAIg");
	this.shape_4.setTransform(216,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZArIAAhVIALAAIAABLIAoAAIAAAKg");
	this.shape_5.setTransform(208.9,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbArIgKgaIgiAAIgJAaIgNAAIAihVIAJAAIAjBVgAgFgQIgJAXIAbAAIgJgWIgEgSQgCAJgDAIg");
	this.shape_6.setTransform(201.3,48.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfArIAAhVIAfAAQAJAAAGADQAGADADAGQAEAEAAAHQAAAFgDAFQgDAFgGADQAIABAEAFQAEAFAAAHQAAAGgDAGQgCAFgEADIgJAEQgGABgIABgAgUAhIAUAAIAIgBQADAAADgDQADgBABgDQACgEAAgEQAAgEgCgEQgDgDgEgBQgFgCgGAAIgUAAgAgUgGIATAAIAJgBQAEgBACgCQADgDAAgFQAAgFgCgDQgDgDgDgBQgEgCgHAAIgSAAg");
	this.shape_7.setTransform(193.4,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAfIAAgMIALAAIAAAMgAgFgSIAAgMIALAAIAAAMg");
	this.shape_8.setTransform(247,28.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgeArIAAhVIA8AAIAAAKIgxAAIAAAbIAtAAIAAAIIgtAAIAAAeIAzAAIAAAKg");
	this.shape_9.setTransform(241.4,27.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXArIgLgSIgIgMIgEgGIgFgCIgHAAIgNAAIAAAmIgLAAIAAhVIAkAAQALAAAGADQAGACAEAGQADAGAAAHQAAAJgGAHQgFADgNADIAHADIAJAMIAPAYgAgZgDIAYAAQAGAAAFgCQAEgBACgEQADgEAAgEQAAgGgFgEQgEgEgKAAIgZAAg");
	this.shape_10.setTransform(233.3,27.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAmQgKgGgFgKQgFgKABgMQAAgSALgNQALgMARAAQAMAAAJAGQAKAGAEAKQAGAKAAALQgBAMgFALQgFALgKAEQgKAGgKAAQgLAAgJgGgAgTgZQgJAIAAASQAAAPAIAJQAJAJALAAQAMAAAJgJQAHgJABgQQAAgJgEgIQgEgHgGgFQgHgEgIAAQgLAAgIAIg");
	this.shape_11.setTransform(224,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAmQgKgFgEgLQgFgLABgLQAAgMAEgLQAGgJAJgFQAKgGAJAAQANAAAJAHQAIAHAEALIgLADQgDgJgGgFQgGgEgIAAQgIAAgHAFQgGAFgDAHQgDAJAAAHQAAAKADAIQAEAIAGAEQAHAEAGAAQAJAAAHgGQAHgFACgKIALADQgDAOgJAGQgJAIgOAAQgMAAgIgGg");
	this.shape_12.setTransform(215,27.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQApQgIgEgEgGQgFgIAAgIIALgBQABAHACAEQADADAGAEQAGACAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgFAAgGQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHADAEAHQAEAFAAAIIgLAAQgBgHgFgEQgFgFgJAAQgJAAgFAEQgFADAAAGQAAAFAEADQADADAMADQAOADAFADQAHABAEAFQAEAGAAAGQAAAHgEAGQgEAGgIAEQgHADgJAAQgKAAgIgDg");
	this.shape_13.setTransform(206.6,27.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEArIAAhLIgcAAIAAgKIBBAAIAAAKIgcAAIAABLg");
	this.shape_14.setTransform(195.6,27.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQApQgIgEgEgGQgFgIAAgIIALgBQABAHACAEQADADAGAEQAGACAFAAQAHAAAFgCQAFgCACgEQADgDAAgEQAAgEgDgDQgCgDgGgCIgNgEQgMgDgEAAQgHgEgDgEQgDgFAAgGQAAgGAEgHQAEgFAHgDQAHgDAIAAQAIAAAIADQAHADAEAHQAEAFAAAIIgLAAQgBgHgFgEQgFgFgJAAQgJAAgFAEQgFADAAAGQAAAFAEADQADADAMADQAOADAFADQAHABAEAFQAEAGAAAGQAAAHgEAGQgEAGgIAEQgHADgJAAQgKAAgIgDg");
	this.shape_15.setTransform(187.9,27.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfArIAAhVIA9AAIAAAKIgxAAIAAAbIAuAAIAAAIIguAAIAAAeIAyAAIAAAKg");
	this.shape_16.setTransform(180.1,27.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWArIAAgpIgrAAIAAApIgLAAIAAhVIALAAIAAAkIArAAIAAgkIALAAIAABVg");
	this.shape_17.setTransform(171.6,27.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgRAmQgLgFgFgKQgFgLAAgMQAAgLAFgKQAFgMAKgEQAKgGALAAQAJAAAIADQAHADAEAFQAFAGACAIIgKADQgCgGgDgEQgDgEgFgCQgGgCgGAAQgGAAgGADQgFACgEADQgDAFgCAEQgEAIAAAIQAAALAEAHQAEAIAIAEQAHADAHABQAHgBAHgCQAHgDAEgDIAAgQIgZAAIAAgJIAkAAIAAAfQgIAGgJAEQgJADgJAAQgLAAgKgGg");
	this.shape_18.setTransform(162.5,27.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_19.setTransform(156.2,27.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWArIAAgpIgrAAIAAApIgLAAIAAhVIALAAIAAAkIArAAIAAgkIALAAIAABVg");
	this.shape_20.setTransform(150.2,27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.highestScoreTxt},{t:this.balanceTxt}]}).wait(1));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("A8CEsIAApXMA4FAAAIAAJXg");
	this.shape_21.setTransform(179.5,30);

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,359,60);


(lib.Meter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stop();
	}
	this.frame_14 = function() {
		stop();
	}
	this.frame_29 = function() {
		stop();
	}
	this.frame_44 = function() {
		stop();
	}
	this.frame_59 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(15).call(this.frame_29).wait(15).call(this.frame_44).wait(15).call(this.frame_59).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009900").s().p("AmjBpIAAjQINHAAIAADQg");
	this.shape.setTransform(42,-10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009900").s().p("AmjBwIAAjfINHAAIAADfg");
	this.shape_1.setTransform(42,-11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#009900").s().p("AmjB4IAAjvINHAAIAADvg");
	this.shape_2.setTransform(42,-12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AmjB/IAAj9INHAAIAAD9g");
	this.shape_3.setTransform(42,-12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009900").s().p("AmjCHIAAkNINHAAIAAENg");
	this.shape_4.setTransform(42,-13.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009900").s().p("AmjCOIAAkbINHAAIAAEbg");
	this.shape_5.setTransform(42,-14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009900").s().p("AmjCWIAAkqINHAAIAAEqg");
	this.shape_6.setTransform(42,-15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009900").s().p("AmjCdIAAk5INHAAIAAE5g");
	this.shape_7.setTransform(42,-15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009900").s().p("AmjClIAAlJINHAAIAAFJg");
	this.shape_8.setTransform(42,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#009900").s().p("AmjCsIAAlXINHAAIAAFXg");
	this.shape_9.setTransform(42,-17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009900").s().p("AmjC0IAAlnINHAAIAAFng");
	this.shape_10.setTransform(42,-18);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#009900").s().p("AmjC7IAAl1INHAAIAAF1g");
	this.shape_11.setTransform(42,-18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#009900").s().p("AmjDDIAAmEINHAAIAAGEg");
	this.shape_12.setTransform(42,-19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#009900").s().p("AmjDKIAAmTINHAAIAAGTg");
	this.shape_13.setTransform(42,-20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#009900").s().p("AmjDSIAAmjINHAAIAAGjg");
	this.shape_14.setTransform(42,-21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#009900").s().p("AmjDZIAAmwINHAAIAAGwg");
	this.shape_15.setTransform(42,-21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#009900").s().p("AmjDgIAAm/INHAAIAAG/g");
	this.shape_16.setTransform(42,-22.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#009900").s().p("AmjDnIAAnMINHAAIAAHMg");
	this.shape_17.setTransform(42,-23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#009900").s().p("AmjDuIAAnbINHAAIAAHbg");
	this.shape_18.setTransform(42,-23.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009900").s().p("AmjD1IAAnoINHAAIAAHog");
	this.shape_19.setTransform(42,-24.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#009900").s().p("AmjD8IAAn3INHAAIAAH3g");
	this.shape_20.setTransform(42,-25.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009900").s().p("AmjEDIAAoFINHAAIAAIFg");
	this.shape_21.setTransform(42,-25.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#009900").s().p("AmjEKIAAoSINHAAIAAISg");
	this.shape_22.setTransform(42,-26.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#009900").s().p("AmjERIAAohINHAAIAAIhg");
	this.shape_23.setTransform(42,-27.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#009900").s().p("AmjEYIAAouINHAAIAAIug");
	this.shape_24.setTransform(42,-28);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#009900").s().p("AmjEfIAAo9INHAAIAAI9g");
	this.shape_25.setTransform(42,-28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#009900").s().p("AmjEmIAApKINHAAIAAJKg");
	this.shape_26.setTransform(42,-29.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#009900").s().p("AmjEtIAApZINHAAIAAJZg");
	this.shape_27.setTransform(42,-30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#009900").s().p("AmjE0IAApmINHAAIAAJmg");
	this.shape_28.setTransform(42,-30.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#009900").s().p("AmjE7IAAp1INHAAIAAJ1g");
	this.shape_29.setTransform(42,-31.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#009900").s().p("AmjFCIAAqDINHAAIAAKDg");
	this.shape_30.setTransform(42,-32.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#009900").s().p("AmjFJIAAqQINHAAIAAKQg");
	this.shape_31.setTransform(42,-32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009900").s().p("AmjFQIAAqfINHAAIAAKfg");
	this.shape_32.setTransform(42,-33.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#009900").s().p("AmjFXIAAqsINHAAIAAKsg");
	this.shape_33.setTransform(42,-34.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009900").s().p("AmjFeIAAq7INHAAIAAK7g");
	this.shape_34.setTransform(42,-35);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#009900").s().p("AmjFlIAArIINHAAIAALIg");
	this.shape_35.setTransform(42,-35.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#009900").s().p("AmjFsIAArXINHAAIAALXg");
	this.shape_36.setTransform(42,-36.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#009900").s().p("AmjFzIAArkINHAAIAALkg");
	this.shape_37.setTransform(42,-37.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#009900").s().p("AmjF6IAArzINHAAIAALzg");
	this.shape_38.setTransform(42,-37.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#009900").s().p("AmjGBIAAsBINHAAIAAMBg");
	this.shape_39.setTransform(42,-38.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#009900").s().p("AmjGIIAAsOINHAAIAAMOg");
	this.shape_40.setTransform(42,-39.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#009900").s().p("AmjGPIAAsdINHAAIAAMdg");
	this.shape_41.setTransform(42,-39.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#009900").s().p("AmjGWIAAsqINHAAIAAMqg");
	this.shape_42.setTransform(42,-40.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#009900").s().p("AmjGdIAAs5INHAAIAAM5g");
	this.shape_43.setTransform(42,-41.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#009900").s().p("AmjGkIAAtGINHAAIAANGg");
	this.shape_44.setTransform(42,-42);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009900").s().p("AmjGrIAAtVINHAAIAANVg");
	this.shape_45.setTransform(42,-42.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#009900").s().p("AmjGyIAAtjINHAAIAANjg");
	this.shape_46.setTransform(42,-43.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009900").s().p("AmjG5IAAtxINHAAIAANxg");
	this.shape_47.setTransform(42,-44.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#009900").s().p("AmjHAIAAt/INHAAIAAN/g");
	this.shape_48.setTransform(42,-44.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#009900").s().p("AmjHHIAAuNINHAAIAAONg");
	this.shape_49.setTransform(42,-45.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#009900").s().p("AmjHPIAAudINHAAIAAOdg");
	this.shape_50.setTransform(42,-46.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#009900").s().p("AmjHWIAAurINHAAIAAOrg");
	this.shape_51.setTransform(42,-47);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#009900").s().p("AmjHdIAAu5INHAAIAAO5g");
	this.shape_52.setTransform(42,-47.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#009900").s().p("AmjHkIAAvHINHAAIAAPHg");
	this.shape_53.setTransform(42,-48.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#009900").s().p("AmjHrIAAvVINHAAIAAPVg");
	this.shape_54.setTransform(42,-49.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#009900").s().p("AmjHyIAAvjINHAAIAAPjg");
	this.shape_55.setTransform(42,-49.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#009900").s().p("AmjH6IAAvyINHAAIAAPyg");
	this.shape_56.setTransform(42,-50.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#009900").s().p("AmjIBIAAwBINHAAIAAQBg");
	this.shape_57.setTransform(42,-51.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009900").s().p("AmjIIIAAwPINHAAIAAQPg");
	this.shape_58.setTransform(42,-52);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#009900").s().p("AmjIPIAAwdINHAAIAAQdg");
	this.shape_59.setTransform(42,-52.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-21,84.1,21);


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
	this.shape.graphics.f("#FFCC33").s().p("AhsBtQgugtAAhAQAAg/AugtQAtguA/AAQBAAAAtAuQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape.setTransform(15.5,15.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.FlipButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(3,1,1).p("AGzAAQAAC0iAB/Qh/CAi0AAQizAAh/iAQiAh/AAi0QAAizCAh/QB/iACzAAQC0AAB/CAQCAB/AACzg");
	this.shape.setTransform(43.5,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AkyEzQiAh/AAi0QAAizCAh/QB/iACzAAQC0AAB/CAQB/B/ABCzQgBC0h/B/Qh/B/i0ABQizgBh/h/g");
	this.shape_1.setTransform(43.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.CashInButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00CCCC").ss(3,1,1).p("AGzAAQAACziACAQh/B/i0AAQizAAh/h/QiAiAAAizQAAiyCAiAQB/h/CzAAQC0AAB/B/QCACAAACyg");
	this.shape.setTransform(43.5,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AkyEzQiAiAAAizQAAiyCAiAQB/h/CzAAQC0AAB/B/QB/CAABCyQgBCzh/CAQh/B/i0AAQizAAh/h/g");
	this.shape_1.setTransform(43.5,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,90,90);


// stage content:
(lib.demo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.tailsBtn = new lib.TailsBtn();
	this.tailsBtn.setTransform(309.2,436.6,1,1,0,0,0,15.5,15.5);

	this.headsBtn = new lib.HeadsBtn();
	this.headsBtn.setTransform(270.9,436.6,1,1,0,0,0,15.5,15.5);

	this.betLbl = new cjs.Text("0", "bold 14px 'Arial'");
	this.betLbl.name = "betLbl";
	this.betLbl.textAlign = "center";
	this.betLbl.lineHeight = 18;
	this.betLbl.lineWidth = 100;
	this.betLbl.setTransform(290,465.8);

	this.decreaseBetBtn = new lib.DecreaseBet();
	this.decreaseBetBtn.setTransform(293.7,491.8);

	this.increaseBetBtn = new lib.IncreaseBet();
	this.increaseBetBtn.setTransform(238,491.8);

	this.statusBar = new lib.StatusBar();
	this.statusBar.setTransform(179.5,29.5,1,1,0,0,0,179.5,30);

	this.meter = new lib.Meter();
	this.meter.setTransform(46,377.1);

	this.coin = new lib.Coin();
	this.coin.setTransform(262.1,243,1,1,0,0,0,70,70);

	this.cashInBtn = new lib.CashInButton();
	this.cashInBtn.setTransform(127,452.2);

	this.flipBtn = new lib.FlipButton();
	this.flipBtn.setTransform(20,452.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.flipBtn},{t:this.cashInBtn},{t:this.coin},{t:this.meter},{t:this.statusBar},{t:this.increaseBetBtn},{t:this.decreaseBetBtn},{t:this.betLbl},{t:this.headsBtn},{t:this.tailsBtn}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(179.5,279,359,541.1);

})(demoAssets = demoAssets||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var demoAssets, images, createjs, ss;