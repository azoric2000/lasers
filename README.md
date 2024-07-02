# lasers
A single-page Javascript Library to add laser effects to the background of your website. 

**User Editable options: **
   laser = 12              //    number of lasers on screen
   theme = 'custom'        // defaults to random. options: 'red', 'blue', 'green', 'custom'
    if the theme is custom then a comma delimited string can be used to display custom colors. 
    custom = '#009640, #2A337B, #D6B469' 
      
    allowRotation = true      // boolean: lasers only move up and down.
    rotationMin = 3           // number of degrees to rotate
    rotationMax = 17          // see above 
    BGcolor = ' '             // color of the background div
    beamWidth = 3             // width of beam in px 
    minHeight = 45            // highest position of a laser 
    maxHeight = 46            // lowest position of a laser
    backgroundRotation = 0    // rotate the background. Gives a consistant slope to all lasers
    animationDuration = 8     // how long the animation should last 
    backgroundParent  = undefined   // javascript location of where to show lasers (default is body)
