(function(global) {
	
	//imports
	var MyApp = global.MyApp,
		createjs = global.createjs;
	
	//class definition
	MyApp.UIButton = function() { this.init.apply(this, arguments); };
	MyApp.UIButton.prototype = $.extend(new createjs.MovieClip(), {
		
		init: function(clip/*MovieClip*/, asToggleButton/*Boolean = false*/, containClip/*Boolean = true*/, clickSound/*Sound = null*/, clickVolume/*Number = 1*/) {
			
			this.defaultClickSound = null;	/*Sound*/
			this.FRAME_NORMAL =				0;
			this.FRAME_NORMAL_OVER =		1;
			this.FRAME_NORMAL_DOWN =		1;
			this.FRAME_TOGGLED =			3;
			this.FRAME_TOGGLED_OVER =		4;
			this.FRAME_TOGGLED_DOWN =		4;
			this.DEFAULT_DARKEN_AMOUNT =	0.4; //lower = darker

			this._clip = null;
			this._isToggleButton = false;
			this._toggled = false;
			this._autoToggle = false; //autoToggle can make the UIButton do some voodoo things, so turn it off if you find UIButtons in odd states/frames
			this._enabled = false;
			this._label = null;
			this._toggledLabel = null;
			this._darkenAmount = null;
			this._params = null;
			this._clickSound = null;
			this._clickVolume = null;
			this._useDefaultClickSound = false;
			this._toggledReadSinceMouseDown = false; //used to decide whether to revert the autoToggle if the mouse is dragged oed
			this._isActionTarget = false;
			
			createjs.MovieClip.call(this);
		
			if (clip === null) { return; /*("No asset supplied to UIButton")*/ }

			//init variables
			this._isToggleButton = asToggleButton;
			this._toggled = false;
			this._autoToggle = true;
			this._enabled = true;
			this._darkenAmount = this.DEFAULT_DARKEN_AMOUNT;
			this._params = {};

			this._useDefaultClickSound = true;

			this._clickSound = clickSound;
			this._clickVolume = clickVolume;

			//obtain clip reference
			this._clip = clip;
			if (this._clip.gotoAndStop) this._clip.gotoAndStop(0);

			//retrieve the pre-defined label
			if (this._clip.label) { this._label = this._clip.label.text; XLG.GameUtils.makeTextResizeable(this._clip.label);}
			//also retrieve the 'toggled' label if this is a toggle button
			if (this._isToggleButton) { this.getToggledLabel(); }

			if (containClip === undefined) containClip = true; 
			
			if (containClip) {

				//insert this UIButton into the display list
				if (this._clip.parent) {
					var depthIndex = this._clip.parent.getChildIndex(this._clip); //remember the depth of the mc
					this._clip.parent.addChildAt(this, depthIndex); //add to display and set depth to the original object's depth
				}

				//this.transformMatrix = this._clip.getMatrix(); //take on the clip's position
				//this._clip.transformMatrix = new Matrix2D(); //reset the clip's position
				this.saveTransform();
				this.addChild(this._clip); //plant the clip inside this object

				//setup interactivity on this object
				//_clip.tabEnabled = false;
				//mouseChildren = false;
				//mouseEnabled = buttonMode = true;

				this.addEventListener("mouseover", this.mouseHandler.bind(this));
				this.addEventListener("mouseout", this.mouseHandler.bind(this));
				this.addEventListener("mousedown", this.mouseHandler.bind(this));
				this.addEventListener("pressup", this.mouseHandler.bind(this));
				this.addEventListener("click", this.mouseHandler.bind(this));


			} else {

				//setup interactivity on the clip object
				//_clip.mouseChildren = false;
				//_clip.mouseEnabled = _clip.buttonMode = true;
				this._clip.addEventListener("mouseover", this.mouseHandler.bind(this));
				this._clip.addEventListener("mouseout", this.mouseHandler.bind(this));
				this._clip.addEventListener("mousedown", this.mouseHandler.bind(this));
				this._clip.addEventListener("pressup", this.mouseHandler.bind(this));
				this._clip.addEventListener("click", this.mouseHandler.bind(this));

			}
		},
		
		saveTransform: function() {
			this.x = this._clip.x;
			this.y = this._clip.y;
			this.scaleX = this._clip.scaleX;
			this.scaleY = this._clip.scaleY;
			this.rotation = this._clip.rotation;
			this.nominalBounds = this._clip.nominalBounds;
			
			this._clip.x = this._clip.y = 0;
			this._clip.scaleX = this._clip.scaleY = 1;
			this._clip.rotation = 0;
		},

		setToggled: function(value/*Boolean*/) {
			if (!this._isToggleButton) return;
			this._toggled = value;
			if (!this._toggled)	this.gotoFrame(this.FRAME_NORMAL);
			if (this._toggled)	this.gotoFrame(this.FRAME_TOGGLED);
		},
		
		isToggled: function() {
			return this._toggled;
		},
		
		setEnabled: function(value/*Boolean*/) {
			this._enabled = this._clip.mouseEnabled = value;
			this._clip.alpha = this._enabled ? 1 : 0.2;
		},
		
		isEnabled: function() {
			return this._enabled;
		},

		setLabel: function(value/*String*/) {
			this._label = value;
			this._toggledLabel = value;
			this.updateText();
		},
		
		setToggledLabel: function(value/*String*/) {
			this._toggledLabel = value;
			this.updateText();
		},
		
		setIsToggleButton: function(value/*Boolean*/) {
			if (this._isToggleButton === value) return;
			this._isToggleButton = value;
			if (this._isToggleButton) this.getToggledLabel();
		},
		
		autoToggle: function (value/*Boolean*/) {
			this._autoToggle = value;
		},
		
		setDarkenAmount : function(value/*Number*/) {
			this._darkenAmount = value;
			this.enabled = this._enabled; //simply causes a refresh by running the set enabled function again with the new _darkenAmount 
		},

		useDefaultClickSound : function(value/*Boolean*/) { this._useDefaultClickSound = value; },
		setClickSound: function(value/*Sound*/) { this._clickSound = value; },
		setClickVolume: function(value/*Number*/) { this._clickVolume = value; },

		gotoFrame : function(frame) {
			if (this._clip.gotoAndStop) this._clip.gotoAndStop(frame);
			this.updateText();
		},

		updateText: function() {
			if (this._clip.label) {
				if (!this._toggled)	this._clip.label.text = this._label || "";
				if (this._toggled)	this._clip.label.text = this._toggledLabel || "";
				if(this._clip.label)XLG.GameUtils.makeTextResizeable(this._clip.label);
			}
			
			if (this._clip.untoggledLabel) { //some hacky stuff to get lobby game buttons translating
				this._clip.untoggledLabel.text = this._label || "";
				XLG.GameUtils.makeTextResizeable(this._clip.untoggledLabel);
			}

			if (this._clip.untoggledLabel && this._clip.toggledLabel) {
				this._clip.untoggledLabel.text = this._label || "";
				this._clip.toggledLabel.text = this._toggledLabel || "";
				XLG.GameUtils.makeTextResizeable(this._clip.untoggledLabel);
				XLG.GameUtils.makeTextResizeable(this._clip.toggledLabel);
			}
			
		},

		getToggledLabel: function() {
			//quickly switch frame, search for a label text field, save it's value, then switch the frame back
			this._clip.gotoAndStop(this.FRAME_TOGGLED);
			if (this._clip.label) this._toggledLabel = this._clip.label.text;
			else this._toggledLabel = this._label;
			this._clip.gotoAndStop(this.FRAME_NORMAL);
			if(this._toggledLabel)XLG.GameUtils.makeTextResizeable(this._toggledLabel);
			if(this._clip.label)XLG.GameUtils.makeTextResizeable(this._clip.label);
		},

		mouseHandler: function(evt) {
			switch( evt.type ) {
				case "mousedown":
					this._isActionTarget = true;
					this._toggledReadSinceMouseDown = false; //reset to show that the toggled property has not beed read since MOUSE_DOWN was triggered
					if (!this._toggled)		this.gotoFrame(this.FRAME_NORMAL_DOWN);//.bind(this);
					if (this._toggled)		this.gotoFrame(this.FRAME_TOGGLED_DOWN);//.bind(this);
					if (this._isToggleButton && this._autoToggle)	this._toggled = !this._toggled; //do this after changing the frame to allow depressed/transitioning frames
					if (this._clickSound) {
						//channel = _clickSound.play();
						//if (channel) channel.soundTransform = new SoundTransform(_clickVolume);
					} else if (this._useDefaultClickSound && XLG.UIButton.defaultClickSound) {
						//channel = UIButton.defaultClickSound.play();
						//if (channel) channel.soundTransform = new SoundTransform(UIButton.defaultClickVolume);
					}
					break;
				case "pressup":
					this._isActionTarget = false;
					/*
					if ( !app.device || !app.device.mobile() ) { //this line now makes this class dependant on outside components :( 
						if (!_toggled)						gotoFrame(FRAME_NORMAL_OVER);
						if (_toggled)						gotoFrame(FRAME_TOGGLED_OVER);
					} else {
					*/
						if (!this._toggled)					this.gotoFrame(this.FRAME_NORMAL);//.bind(this);
						if (this._toggled)					this.gotoFrame(this.FRAME_TOGGLED);//.bind(this);
					//}
					break;
			}
		}
		
	});

})(window);

