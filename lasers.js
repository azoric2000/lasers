
 // global Vars 
    const laser = 12  //    number of lasers on screen
    const theme = 'custom'       // defaults to random. options: 'red', 'blue', 'green', 'custom'
    const custom = '#009640, #2A337B, #D6B469' 
        //comma delimited string of valid css colors in hexcode or rgb (no alpha)
        // requires custom theme set above
    const allowRotation = true  // boolean: lasers only move up and down.
    const rotationMin = 3      // number of degrees to rotate
    const rotationMax = 17     // see above 
    const BGcolor = ' ' //'#000'      // color of the background div
    const beamWidth = 3          // width of beam in px 
    const minHeight = 45        // highest position of a laser 
    const maxHeight = 46        // lowest position of a laser
    const backgroundRotation = 0     // rotate the background. Gives a consistant slope to all lasers
    const animationDuration = 8     // how long the animation should last 
    const backgroundParent  = undefined // document.getElementById('header')  // javascript location of where to show lasers (default is body)

    window.onload = init()

function init() { 

    if(document.getElementById('background') !== null){
        document.getElementById('background').remove() 
    }

    var iDiv = document.createElement('div');
    iDiv.id = 'background';
    iDiv.className = 'background';
    iDiv.setAttribute("style", "width: 150vw; left: -25vw; height: 100vh; overflow: hidden; z-index: -1; position: fixed; top: 0; background-color: "  + BGcolor + "; rotate: " + backgroundRotation + "deg;" )
    document.getElementsByTagName('body')[0].appendChild(iDiv); 
    const node = document.createElement("div");
        
    for( i = 0; i < laser; i++){
        const node = document.createElement("div");
        node.className = 'laser'; 
        node.setAttribute("style", "height: " + beamWidth + "px; background-color: #fff; width: 200vw; position: absolute; left: -50vw; transform: rotate(00deg); top: 50vh;transition: top " + animationDuration + "s, transform " + animationDuration + "s;")
        document.getElementById("background").appendChild(node); 
        var lasers = document.getElementsByClassName('laser')
        if (theme === 'custom'){
           var laserColor = setCustomTheme(i)
        }
        else {
            var laserColor = getLaserColor(theme)
        }
        lasers[i].style.boxShadow="0px 0px 10px 6px " + laserColor;
        lasers[i].style.top=getRandomInt(minHeight, maxHeight) + 'vh';
        if(allowRotation){
            lasers[i].style.transform = 'rotate(' + getRandomInt(rotationMin, rotationMax) +'deg)'
        }
    }
     
    animator()
}

function animator(){   
    var laser = document.getElementsByClassName('laser') 
    var i = 0;

    while (i < laser.length) {
        (function(i) {
            setTimeout(function() {    

                if (allowRotation){
                    laser[i].style.transform  = 'rotate(' + getRandomInt(rotationMin, rotationMax) +'deg)'
                }
                laser[i].style.top = getRandomInt(minHeight,maxHeight) + 'vh';
             //   laser[i].style.transition =  'transform ' + laser.length + 's, top ' + laser.length +'s'
                if (i == laser.length-1){ 
                    animator()
                }  
            },  i * 1000) 
        })(i++) 
    }
}

function getRandomInt(min, max) { 
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

function getLaserColor(theme){ 
    r = getRandomInt(0,255)
    g = getRandomInt(0,255)
    b = getRandomInt(0,255) 
    if(theme === 'red' ){
        var r = 255;
    }
    if (theme === 'blue' ){
        var b = 255;
    }
    if (theme === 'green'){
        var g = 255;
    }
    return('rgb(' + r + ', ' + g+ ', '+ b +')')
}


function setCustomTheme(i){  
    var colors = custom.split(',')
    var x = i % colors.length
    return(colors[x])
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }