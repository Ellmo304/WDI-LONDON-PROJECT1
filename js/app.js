//human board
//board is made and all cell ids are placed into an array
var $playerBoard = $("#playerBoard");
var $cpuBoard = $("#cpuBoard");
var $playersTiles = $playerBoard.find('td');
var $cpuTiles = $cpuBoard.find('td');
var $playBtn = $('#playButton');
var $rotateBtn = $("#rotateButton");
//-----------------------------------------------------------------------------------------

var playersLocations = [];
var shipsSelected = 0;
var ship = "";

function playGame() {
  console.log("game ready");
}

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
function placeShipHorizontal() {

  $("#playerBoard").off("mouseover");
  $("#playerBoard").off("mouseout");
  var c = +this.id;
  console.log($("td")[c]);
  for (var i = 0; i < ship.length; i ++) {
    $("#" + (c + i)).html(ship);
    playersLocations.push($("td")[c + i]);
      if (shipsSelected < 5) {document.getElementById("battleLog2").innerHTML = ship + " placed, position your next ship!";
    }
    else {
      document.getElementById("battleLog2").innerHTML = "All ships placed! Click 'Start' button to begin warfare!";
    }
    console.log(playersLocations);
  }
}

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

function positionHorizontal() {
  shipsSelected ++;
  ship = $(this).attr('id');
  $(this).prop('disabled', true);

  $playerBoard.off("mouseover").on("mouseover", "td", function() {
    var cellIndex = $(this).index();
    for (var i = 0; i < ship.length; i ++) {
      $playerBoard.eq(cellIndex + i).addClass('hover');
    }
  });

  $playerBoard.off("mouseout").on("mouseout", "td", function(){
    var cellIndex = $(this).index();
    for (var i = 0; i < ship.length; i ++) {
      $playerBoard.eq(cellIndex + i).removeClass('hover');
    }
  });

  $playerBoard.on("click", "td", placeShipHorizontal);

  if (shipsSelected === 5) {
    $playBtn.prop('disabled', false);
    $rotateBtn.prop("disabled", true);
  }
}


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

// --------------------------------------------------------------------------------------------------------------------
//computers board
//board is made and all cell ids are placed into an array




///-------------------------------------------------------------------------------------------------------------

//loop to set ships positions on grid
// var startingShips = ["ds", "crs", "crs", "btsp", "arcft"];
//function for ai to place ships vertically at random location on board without overlapping
function placeShip(ship, isHorizontal) {
  var randomIndex = Math.floor(Math.random() * $cpuTiles.length);
  var $pos = $cpuTiles.eq(randomIndex);
  var $tile;
  var i;
  var j = 0;

  var canPlaceShip = true;
  for (i = 0; i < ship.length; i++) {
    $tile = $cpuTiles.eq(randomIndex+j);
    if($tile.hasClass('hit')) canPlaceShip = false;
    j+= isHorizontal ? 1 : 10;
  }

  if(randomIndex + (10*(ship.length-1)) > 99) canPlaceShip = false;

  j = 0;
  if(!canPlaceShip) {
    placeShip(ship, isHorizontal);
  } else {
    for (i = 0; i < ship.length; i++) {
      $tile = $cpuTiles.eq(randomIndex+j);
      $tile.addClass('hit');
      j+= isHorizontal ? 1 : 10;
    }
  }
}

//variables for 5 diff ships
var aircraft = "12345";
placeShip(aircraft, Math.floor(Math.random()*2) === 1);
var battleship = "1234";
placeShip(battleship, Math.floor(Math.random()*2) === 1);
var cruiser = "123";
placeShip(cruiser, Math.floor(Math.random()*2) === 1);
var cruiser2 = "123";
placeShip(cruiser2, Math.floor(Math.random()*2) === 1);
var destroyer = "12";
placeShip(destroyer, Math.floor(Math.random()*2) === 1);


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

//-----------------------------------------------------
// //function to mark tiles either hit or miss // if (this) is in the array of ships (!index of -1 of [ships]), var cellchosen = hit image
// // else cellchosen = miss image

var isHit = function() {
  console.log(this.id, this.class);
  if (this.class === "hit") {
    $(this).css("background-color", "red");
    document.getElementById("battleLog").innerHTML = "Direct Hit!";
  } else if (this.class === "sea") {
    $(this).html("MISS");
    document.getElementById("battleLog").innerHTML = "No hits this time!";
  }
};

// //click event listener for tiles on board
$cpuBoard.on("click", "td", isHit);







//
var inGame = function() {
this.disabled = true;
document.getElementById("battleLog2").innerHTML = "Player goes first, choose enemy square to bomb!";

var turn = 0;
};


//click listener on play button to start game
$("#playButton").on("click", inGame);
