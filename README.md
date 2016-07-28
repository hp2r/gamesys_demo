# gamesys_demo

This demo will represent a simple coin flip game in a MVC type pattern. The game utilises EaselJS (Canvas) and thus should run on most modern browsers and devices. 

I apologise for the lack of graphics and finese. I have been working late this week so have not been able to dedicate the time and brain power this demo deserved!

How to run:

You can run the demo from this link:

https://dl.dropboxusercontent.com/u/93088164/GameSys_demo/index.html

Or you can download from here and run on a local server

Game Rules:

Choose Heads or Tails (Heads is chosen by default) and add a wager on the result. If you win, you double your money. Go on a winning streak and you can increase your multiplier by upto 8x. Your score is reset when you lose your winning streak but you keep any balance you may have won.

Reason for choosing this game:

My current company is part of Novomatic Group who own famous slot brands such Book of Ra and Lucky Ladies. These slot games allow the player to increase their winnnings by gambling on red or black to double their money in a mini game. I found that this feature of the slots game were probably the most popular aspect and had the player most engaged.

Ommissions/Short Comings: 

Due to time constraints, Models have hard coded values and only one View is used for the interface. In a larger application, I would seperate Views in terms of their functionalities (TaskBar, StausBar, GameInfo etc). In a 'real world' application, Model data would be retrieved from a Service loading data from a db or xml. Results would arrive from WebSockets rather than from a function as I have done here as this would be far more secure than what I have done here. Graphics here are only placeholders. I would have developed or acquired much better graphics and animations if time allowed! In a real world project, I would usually make commits more often and make smaller branches than I have done here. 

Notes:

The Signal and SignalBus classes are from one of my existing projects. They are partly inspired by the as3-signals by Robert Penner.
The UIButton class is also from one of my existing projects. However, it is not used here as I couldnt get it to work with the js files Adobe Animate produces for the graphics. 
I can bring in some of my current work to any possible interviews. It is much more impressive than this small demo here :)


Author: Hiren Patel
