# Tovala front end web developer challenge
The challenge is to build a single­page javascript application that lets users drag colored rectangles around an area. The application should be as simple as possible but also needs to work robustly and intuitively. It is fine to include documentation on use. It is better if the application itself gives the user enough feedback to figure out all the possible activities.
</br>
Here is the requested feature set:
* Add a new rectangle to the area
* Remove a rectangle
* Resize a rectangle using direct mouse manipulations
* Move a rectangle using direct mouse manipulations
* Change the color of a rectangle
* Clear the area
* Save the current area layout (the position, size, and color of each rectangle in the area)
* Name a saved layout
* Return to a saved layout
* Delete a saved layout from the set of saved layouts
The layouts should be stored per­ user & should persist though a page refresh.
</br>
Please use any toolkit(s) that you like in implementing this application, then put the application up on a server so that we can play with it “live”, and provide a link to download all of the code that you have written. Please document which browsers you have used to test your code.

# Victor's documentation 
This is a Rails app because I'm deploying it on Heroku.

Research Topics:
* SVG
* SVG path
* SVG container
* SVG rect
* svg g
* HTML DOM
..* https://stackoverflow.com/questions/1122437/what-is-dom-element</br>
* Saving with jQuery?
* HTML5 localStorage
* Client-side MVC. This blew my mind. It just completely shifted what I learned in bootcamp! I am so used to server-side MVC (Rails)
* SVG Sprites? What is it and what does it do?
..* https://github.com/jkphl/svg-sprite</br>
..* https://osvaldas.info/caching-svg-sprite-in-localstorage</br>
..* https://www.webdesignerdepot.com/2017/05/how-to-create-and-manage-svg-sprites/</br>
..* https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/</br>
* How do I save and load SVG with localStorage???
* I have not used Angular.js before, but the more I Google, the more I associate Angular with working with SVG. What advantages (for this project) do I have in using Angular? Do I have enough time to learn Angular for this challenge??
..* https://www.packtpub.com/mapt/book/web_development/9781784398057</br>
..* https://stackoverflow.com/questions/45549065/load-svg-content-in-angular-2-using-d3-js</br>
* What does D3.js do?
..* https://github.com/d3/d3</br>
* SVG-localstorage
..* https://www.npmjs.com/package/svg-localstorage</br>
* Backbone.js
..* http://backbonejs.org/docs/backbone.localStorage.html</br>

Raphaël JavaScript Library turned out to be a lifesaver</br>
https://dmitrybaranovskiy.github.io/raphael</br>
https://dmitrybaranovskiy.github.io/raphael/reference.html</br>
The drag and drop and resize features are done by using this library.</br>
I used Raphaël because it's lightweight and it currently supports Firefox 3.0+, Safari 3.0+, Chrome 5.0+, Opera 9.5+ and Internet Explorer 6.0+

I wanted to use jscolor for users to pick their own colors, but have yet to fully implement.</br>
http://jscolor.com/</br>
At the current state of the app, user can randomize color of a rectangle by double clicking it. Each randomized color change is logged in the console.

Integrating Raphael.js with Backbone.js</br>
https://marmelab.com/blog/2013/05/22/integrating-raphael.js-with-backbone.html</br>
http://backbonejs.org/</br>


Web browser used:
Chrome
Version 60.0.3112.113 (Official Build) (64-bit)

Features that still need work:
* Deleting individual rectangles
* File saving features

