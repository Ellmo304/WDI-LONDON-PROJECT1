//human board
//board is made and all cell ids are placed into an array

var body = document.getElementsByTagName('body');
var board2 = document.getElementById("board2");

var $playersTiles = [];
var body = document.getElementsByTagName('body')[0];
var tbl2 = document.createElement('table');
tbl2.style.width = '500px';
tbl2.style.width = '500px';
tbl2.setAttribute('border', '1');
var tbdy2 = document.createElement('tbody');
  for (var i = 0; i < 10; i++) {
    var tr2 = document.createElement('tr');
      for (var j = 0; j < 10; j++) {
      var td2 = document.createElement('td');
      td2.style.width = '50px';
      td2.style.height = '50px';
      td2.class = "SEA";
      td2.id = ("" + i + j);
      tr2.appendChild(td2);
      $playersTiles.push(td2);
      }
    tbdy2.appendChild(tr2);
  }
tbl2.appendChild(tbdy2);
board2.appendChild(tbl2);
body.appendChild(board2);


//-----------------------------------------------------------------------------------------


var playersLocations = [];
var shipsSelected = 0;
var ship = "";

var playGame = function() {
  console.log("game ready");
};

//add all players coordinates to playerslocations array. if pc chooses



//function to allow human to place ship vertically//

// var placeShipVertical = function() {
//   shipsSelected = shipsSelected +1;
//   $("td").off("mouseover");
//   $("td").off("mouseout");
//   var b = +this.id;
//   console.log($("td")[b]);
//   for (var i = 0; i < ship.length; i ++) {
//     $("td")[b + (i*10)].innerHTML = ship;
//     playersLocations.push($("td")[b + i]);
//     console.log(playersLocations);
//     }
//   if (shipsSelected === 5) {playGame();
//   }
// };

//function to allow horizontal placment of players ships
var placeShipHorizontal = function() {

  $("td").off("mouseover");
  $("td").off("mouseout");
  var c = +this.id;
  console.log($("td")[c]);
  for (var i = 0; i < ship.length; i ++) {
    $("td")[c + (i)].innerHTML = ship;
    playersLocations.push($("td")[c + i]);
      if (shipsSelected < 5) {document.getElementById("battleLog2").innerHTML = ship + " placed, position your next ship!";
    }
    else  document.getElementById("battleLog2").innerHTML = "All ships placed! Click 'Start' button to begin warfare!";
    console.log(playersLocations);
    }
};

  //function to allow human to POSITION ships vertically

// var positionVertical = function() {
//   ship = this.id;
//   console.log(ship);
//   this.disabled = true;
//   $("td").on("mouseover", function() {
//     $(this).addClass('hover'); var a = +this.id; {
//       for (var i = 0; i < ship.length; i ++) {
//         $("td")[a + (i*10)].innerHTML = "SHIP";
//       }
//     }
//   });
//   $("td").on("mouseout", function(){
//     $(this).removeClass('hover'); var a = +this.id;
//         for (var i = 0; i < ship.length; i ++) {
//         $("td")[a + (i*10)].innerHTML = "";
//       }
//     });
//   $("td").on("click", placeShipVertical);
// };


  //function to allow horizontal positioning of players ships

var positionHorizontal = function() {
  shipsSelected ++;
  console.log(shipsSelected);
  ship = this.id;
  console.log(ship);
  this.disabled = true;
  $("td").on("mouseover", function() {
    $(this).addClass('hover'); var a = +this.id; {
      for (var i = 0; i < ship.length; i ++) {
      $("td")[a + (i)].innerHTML = "SHIP";
      }
    }
  });
  $("td").on("mouseout", function(){
    $(this).removeClass('hover'); var a = +this.id;
    for (var i = 0; i < ship.length; i ++) {
      $("td")[a + (i)].innerHTML = "";
      }
    });
    $("td").on("click", placeShipHorizontal);
    if (shipsSelected === 5) {$('#playButton').prop('disabled', false); $("#RotateButton").prop("disabled", true);
  }
};


$("#ACFCR").on("click", positionHorizontal);
$("#BTSP").on("click", positionHorizontal);
$("#CRS").on("click", positionHorizontal);
$("#CR2").on("click", positionHorizontal);
$("#DS").on("click", positionHorizontal);

        //function to add click listener to rotate bytton to choose vertical or horizontal position.

// var rotateClicks = 0;
//
// var rotateShip = function() {
//   rotateClicks ++;
//   var a = ""; var b = "";
//   if (rotateClicks % 2 === 0) {
//     positionHorizontal();
//   }
//   else  {
//   positionVertical();
//   }
// };

// $("#RotateButton").on("click", rotateShip);







        ///actual game playButton


var inGame = function() {
this.disabled = true;
document.getElementById("battleLog2").innerHTML = "Player goes first, choose enemy square to bomb!";

var turn = 0;

//-----------------------------------------------------
// //function to mark tiles either hit or miss // if (this) is in the array of ships (!index of -1 of [ships]), var cellchosen = hit image
// // else cellchosen = miss image

var isHit = function() {
  console.log(this.id, this.class);
  if (this.class === "HIT") {
    $(this).css("background-color", "red");
    document.getElementById("battleLog").innerHTML = "Direct Hit!";
    }
  else if (this.class === "SEA") { $(this).html("MISS"); document.getElementById("battleLog").innerHTML = "No hits this time!";
  }
};


// //click event listener for tiles on board
$("td").on("click", isHit);
};

//idea for battle logs you sunk my battle ship etc - if i push each ships clears array into another array, if ships always go in order i can say once td.id(myarray[0][1][2].tostring) are clicked on, display u sunk my bttleship.,

// for computer choosing for my board, pick random cell from my tiles array. remove tile pickd from array. if class = hit, pick cell+ 1or cell -1 or cell + 10 or cell -10. if miss, pick another cell at random.


//click listener on play button to start game
$("#playButton").on("click", inGame);


        //
        //     //idea for battle logs you sunk my battle ship etc - if i push each ships clears array into another array, if ships always go in order i can say once td.id(myarray[0][1][2].tostring) are clicked on, display u sunk my bttleship.,
        //
        //
        //     // for computer choosing for my board, pick random cell from my tiles array. remove tile pickd from array. if class = hit, pick cell+ 1or cell -1 or cell + 10 or cell -10. if miss, pick another cell at random.

        //-------------------------------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------------------------------------------------------

        //computers board

        //board is made and all cell ids are placed into an array


var board = document.getElementById("board");
var $tiles = [];
var body = document.getElementsByTagName('body')[0];

var tbl = document.createElement('table');
tbl.style.width = '500px';
tbl.style.width = '500px';
tbl.setAttribute('border', '1');
var tbdy = document.createElement('tbody');
  for (var i = 0; i < 10; i++) {
  var tr = document.createElement('tr');
    for (var j = 0; j < 10; j++) {
    var td = document.createElement('td');
    td.style.width = '50px';
    td.style.height = '50px';
    td.class = "SEA";
    td.id = ("" + i + j);
    tr.appendChild(td);
    $tiles.push(td);
    }
  tbdy.appendChild(tr);
  }
tbl.appendChild(tbdy);
board.appendChild(tbl);
body.appendChild(board);


        //-----------------------------------------------------------------------------------------

        //loop to set ships positions on grid
        // var startingShips = ["ds", "crs", "crs", "btsp", "arcft"];


//function for ai to place ships vertically at random location on board without overlapping
var chooseVertical = function(ship) {
  var randomIndex = Math.floor(Math.random() * $tiles.length);
  var $pos = $("td")[randomIndex];
  console.log($pos);
    if (+$pos.id + (10*(+ship.length-1)) > 99){
    $pos = "";
    randomIndex = "";
    chooseVertical(ship);
    }
    else {
      if ($("td")[randomIndex].class === "SEA")  {
        for (var i = 0; i < ship.length; i++) {
          while ($("td")[randomIndex + (10*(i))].class === "SEA") {
          $("td")[randomIndex + (10*(i))].class = "HIT";
          }
        }
      }
    else {
    $pos = "";
    randomIndex = "";
    chooseVertical(ship);
    }
  }
};


//function for ai to place ships horizontally at random location on board without overlapping
var chooseHorizontal = function(ship) {
  var randomIndex = Math.floor(Math.random() * $tiles.length);
  var $pos = $("td")[randomIndex];
  var clears = [];
  console.log(+$pos.id);
    for (p = 0; p < ship.length; p ++) {
      clears.push((+$pos.id + (p)).toString());
      }
    clears.reverse();
    clears.slice(4);
    var string = clears.toString();
    console.log(string);
      if (string.includes("9") === true) {
      clears = [];
      string = "";
      $pos = "";
      randomIndex = "";
      chooseHorizontal(ship);
      }
    else if (string.includes("9") === false)  {
      if ($pos.class === "SEA")  {
        for (var i = 0; i < ship.length; i++) {
          while ($("td")[randomIndex + (i)].class === "SEA"){
          $("td")[randomIndex + (i)].class = "HIT";
          clears = [];
          string = "";
          }
        }
      }
    else {
    clears = [];
    string = "";
    $pos = "";
    randomIndex = "";
    chooseHorizontal(ship);
    }
  }
};

//function to randomly assign vertical or horizontal placement for each ship
var orientation = function(ship) {
  if (Math.floor(Math.random()*2) === 1) {
    console.log(Math.floor(Math.random()*2) === 1);
    chooseVertical(ship);
    }
  else {
    console.log(Math.floor(Math.random()*2) === 1); chooseHorizontal(ship);
    }
  };

          //variables for 5 diff ships
var aircraft = "12345";
orientation(aircraft);

var battleship = "1234";
orientation(battleship);

var cruiser = "123";
orientation(cruiser);

var cruiser2 = "123";
orientation(cruiser2);

var destroyer = "12";
orientation(destroyer);


//loop to go through all ships orientation at once
// for (o = 0; o < startingShips.length; o ++) {
//   var ship = startingShips[o];
//   if (Math.floor(Math.random()*2) === 1) {
//     chooseVertical(); ship = "";
//     }
//   else {
//     chooseHorizontal(); ship = "";
//   }
// }
