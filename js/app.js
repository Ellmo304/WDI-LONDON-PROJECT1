//human board
//board is made and all cell ids are placed into an array
var $playerBoard = $("#playerBoard");
var $cpuBoard = $("#cpuBoard");
var $playersTiles = $playerBoard.find('td');
var $cpuTiles = $cpuBoard.find('td');
var $playBtn = $('#playButton');
var $rotateBtn = $("#rotateButton");
var playersLocations = [];
var shipsSelected = 0;
var ship = null;
var $battleLog = $('#battleLog');
var player = "user";

var playerShipIsHorizontal = true;

$rotateBtn.on('click', function() {
  playerShipIsHorizontal = !playerShipIsHorizontal;
});

function selectShip() {
  shipsSelected++;
  ship = $(this).attr('id');
  $(this).prop('disabled', true);

  $playerBoard.off("mouseover").on("mouseover", "td", function() {
    var cellIndex = $playersTiles.index(this);
    for (var i = 0; i < ship.length; i ++) {
      var j = playerShipIsHorizontal ? i : i * 10;
      $playersTiles.eq(cellIndex + j).addClass('hover');
    }
  });

  $playerBoard.off("mouseout").on("mouseout", "td", function(){
    var cellIndex = $playersTiles.index(this);
    for (var i = 0; i < ship.length; i ++) {
      var j = playerShipIsHorizontal ? i : i * 10;
      $playersTiles.eq(cellIndex + j).removeClass('hover');
    }
  });

  $playerBoard.on("click", "td", function() {
    if(placeShip($playersTiles.index(this), ship, playerShipIsHorizontal, $playersTiles)) {
      $playerBoard.off("mouseout").off("mouseover");
    }
  });

  if (shipsSelected === 5) {
    $playBtn.prop('disabled', false);
    $rotateBtn.prop("disabled", true);
  }
}

$("#ACFCR").on("click", selectShip);
$("#BTSP").on("click", selectShip);
$("#CR1").on("click", selectShip);
$("#CR2").on("click", selectShip);
$("#DS").on("click", selectShip);

function placeShip(index, ship, isHorizontal, $tiles) {
  var $pos = $tiles.eq(index);
  var $tile;
  var i;
  var j = 0;

  var canPlaceShip = true;

  if((10 - (index % 10) < ship.length && isHorizontal) || (index + (10*(ship.length-1)) > 99 && !isHorizontal)) canPlaceShip = false;

  for (i = 0; i < ship.length; i++) {
    $tile = $tiles.eq(index+j);
    if($tile.hasClass('ship')) canPlaceShip = false;
    j+= isHorizontal ? 1 : 10;
  }

  j = 0;
  if(!canPlaceShip) {
    return false;
  } else {
    for (i = 0; i < ship.length; i++) {
      $tile = $tiles.eq(index+j);
      $tile.addClass('ship');
      j+= isHorizontal ? 1 : 10;
    }
    return true;
  }
}

function placeShipRandomly(ship, $tiles) {
  var randomIndex = Math.floor(Math.random() * $tiles.length);
  var isHorizontal = Math.floor(Math.random()*2) === 1;

  return placeShip(randomIndex, ship, isHorizontal, $tiles);
}

//variables for 5 diff ships
while(!placeShipRandomly("ACFCR", $cpuTiles));
while(!placeShipRandomly("BTSP", $cpuTiles));
while(!placeShipRandomly("CR1", $cpuTiles));
while(!placeShipRandomly("CR2", $cpuTiles));
while(!placeShipRandomly("DS", $cpuTiles));

function isHit() {

  if(player === 'cpu') return false;

  if($(this).hasClass("ship")) {
    $(this).addClass('hit');
    $battleLog.text("Direct hit!");
  } else if (this.class === "sea") {
    $(this).addClass("miss");
    $battleLog.text("No hits this time!");
  }

  player = "cpu";

  // cpu's turn
}

// //click event listener for tiles on board




//click listener on play button to start game
$("#playButton").on("click", startGame);

function startGame() {
  $playerBoard.off('click');
  $cpuBoard.on("click", "td", isHit);
}
