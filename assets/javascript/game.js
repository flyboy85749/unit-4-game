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
// random = ""; // random # between 19 - 120









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

    console.log(randomIntFromInterval(19,120));



function crystal (name, color, points, image) {
    var obj = new Object();
    //now you can create custom object as per requirement
    obj.name = name;
    obj.color = color;
    obj.points = points;
    obj.image = image;
    
        obj.customFunc = function(){
            // console.log("Crystal name : " + this.name );
        }
        return obj;
    }
    
    var garnetCrystal = crystal("garnet","red", 50, "assets/images/garnet.png");
    var emeraldCrystal = crystal("emerald","green", 60, "assets/images/emerald.png");
    var sapphireCrystal = crystal("sapphire", "green", 75, "assets/images/sapphire.png");
    var amethystCrystal = crystal("amethyst", "yellow" , 90, "assets/images/amethyst.png");
    
    //log: Crystal name
    emeraldCrystal.customFunc();


    ////////////////////////////////////////////////////
    ////////////                    //////////////////
    ///// ************** PROCESSES ************ /////
    ////////////////////////////////////////////////////

    
        