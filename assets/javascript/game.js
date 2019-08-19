//////////////////////
//////// CRYSTAL COLLECTOR GAME JAVASCRIPT
////    https://github.com/flyboy85749/unit-4-game
////
////    https://flyboy85749.github.io/unit-4-game/
////
/////////
//////////////////////////////////
//////// *************** VARIABLES ******************///////////
let counter = 0; // this will keep track of 
let score = 0; // score tracker

var points = new Array(100);
        for (var i = 0; i < 100; i++) {
            points[i] = i + 1; 
        }

        for (var i = 0; i < points.length; i++) {
            // console.log(points[i]); //This prints the values that you stored in the array
        }








    ////////////////// ///////////////////////////////
    ///////////                         //////////////////
    /////////// ********** FUNCTIONS ************** //////////
    /////////////////////////////////////////////////////////
    
// we'll need four objects for the crystals
// probably don't need a crystal factory, but it's fun and fast

    // rand = random # between 19 - 120
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    // console.log(randomIntFromInterval(19,120));

    function garnetIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    //   console.log(garnetIntFromInterval(1,24));

      function emeraldIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    //   console.log(emeraldIntFromInterval(25,49));

      function sapphireIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    //   console.log(sapphireIntFromInterval(50,74));


      function amethystIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    //   console.log(amethystIntFromInterval(75,100));



function crystal (name, color, points, image) {
    var obj = new Object();
    //now you can create custom object as per requirement
    obj.name = name;
    obj.color = color;
    obj.points = points;
    obj.image = image;
    
        obj.customFunc = function(){
         console.log("Crystal points : " + this.points );
        }
        return obj;
    }

    
    
    var garnetCrystal = crystal("garnet","red", 60, "assets/images/garnet.png");
    var emeraldCrystal = crystal("emerald","green", 70, "assets/images/emerald.png");
    var sapphireCrystal = crystal("sapphire", "blue", 80, "assets/images/sapphire.png");
    var amethystCrystal = crystal("amethyst", "purple" , 90, "assets/images/amethyst.png");
    
    //log: Crystal name
    amethystCrystal.customFunc();


    ////////////////////////////////////////////////////
    ////////////                    //////////////////
    ///// ************** PROCESSES ************ /////
    ////////////////////////////////////////////////////
// change the HTML here
$( ".value" ).append( i + " points" );
$( ".rnd" ).append( randomIntFromInterval(19,120) );
$( ".gar-value" ).append( randomIntFromInterval(1,20) );
$( ".eme-value" ).append( randomIntFromInterval(1,20) );
$( ".sap-value" ).append( randomIntFromInterval(1,20) );
$( ".ame-value" ).append( randomIntFromInterval(1,20) );
$( ".scr" ).append( score );
    
        