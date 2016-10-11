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
var $cpuBattleLog = $('#cpuBattleLog');
var player = "user";
var playerShipIsHorizontal = true;
//variables to count hits on ships/check if cpu has sunk your ships/won game
var ACFCRcounter = 0;
var BTSPcounter = 0;
var CR1counter = 0;
var CR2counter = 0;
var DScounter = 0;

var myACFCRcounter = 0;
var myBTSPcounter = 0;
var myCR1counter = 0;
var myCR2counter = 0;
var myDScounter = 0;

var $cpuCellChosen = "";
var $chosenCells = [];

$(".sea").text("SEA");
$(".miss").text("MISS");
$(".hit").text("HIT");


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
    $battleLog.html("All ships placed, click 'Start Game' to commence warfare!");
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
      $tile.text(ship);
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









function checkForWin() {
  if (myACFCRcounter === 6 && myBTSPcounter === 5 && myCR1counter === 4 && myCR2counter === 4 && myDScounter === 3) {
    $cpuBoard.off('click');
    $battleLog.text("You've sunk the opposition!!! Player 1 IS VICTORIOUS!!!");
    $cpuBattleLog.text("CPU loses!!!");
  }
  else {setTimeout(cpusChoice, 1000);
  }
}









function isHit() {

  switch ($(this).text()) {
    case "SEA" : $battleLog.text("No hits this time");
    break;
    case "ACFCR" : $battleLog.text("Player 1 hits cpu's aircraft carrier!"); (myACFCRcounter ++);
    break;
    case "BTSP" : $battleLog.text("Player 1 hits cpu's battleship!"); myBTSPcounter ++;
    break;
    case "CR1" : $battleLog.text("Player 1 hits cpu's cruiser!"); myCR1counter ++;
    break;
    case "CR2" : $battleLog.text("Player 1 hits cpu's cruiser!"); myCR2counter ++;
    break;
    case "DS" : $battleLog.text("Player 1 hits cpu's destroyer!"); myDScounter ++;
    break;
  }
  if ($(this).hasClass("ship")) {
  $(this).addClass("hit"); $(this).text("HIT");$(this).removeClass("ship");
  }
  else {$(this).addClass("miss"); $(this).removeClass("sea"); }
  if (myACFCRcounter === 5) {
    $battleLog.text("You sank CPU'S aircraft carrier!");
    setTimeout(1000); myACFCRcounter ++;
  }
  else if (myBTSPcounter === 4) {
    $battleLog.text("You sank CPU's battleship!");
    setTimeout(1000); myBTSPcounter ++;
  }
  else if (myCR1counter === 3) {
    $battleLog.text("You sank CPU's cruiser!");
    setTimeout(1000); myCR1counter ++;
  }
  else if (myCR2counter === 3) {
    $battleLog.text("You sank CPU's cruiser!");
    setTimeout(1000); myCR2counter ++;
  }
  else if (myDScounter === 2) {
    $battleLog.text("You sank CPU's destroyer!");
    setTimeout(1000); myDScounter ++;
  }
  checkForWin();
}

function playersTurn() {
  $cpuBoard.on("click", "td", isHit);
  $battleLog.text("Player 1's turn to fire!!!");
  console.log($(this));// //click event listener for tiles on enemies board
}



function startGame() {         //function to start game upon start game being clicked, activates listeners on cpu board
  $(this).prop('disabled', true);
  $playerBoard.off('click');
  $battleLog.text("Opposition engaged, pick an enemy square to fire!");
  $cpuBattleLog.text("Enemy engaged!");
playersTurn();
}

//click listener on play button to start game
$("#playButton").on("click", startGame);

////-------------------------------------------------------------------------------------------------------------
//cpus gameplay functionss




function checkForCpuWin() {
  if (ACFCRcounter === 6 && BTSPcounter === 5 && CR1counter === 4 && CR2counter === 4 && DScounter === 3) {
    $cpuBoard.off('click');
    $battleLog.text("All your ships have been sunk! You have been defeated!!!");
    $cpuBattleLog.text("CPU IS VICTORIOUS!!!");
  }
  else { setTimeout(playersTurn, 1000);
  }
}



function cpuFire(){
    switch ($cpuCellChosen.text()) {
      case "SEA" : $cpuBattleLog.text("No hits this time");
      break;
      case "ACFCR" : $cpuBattleLog.text("CPU hits player 1's aircraft carrier!"); (ACFCRcounter ++);
      break;
      case "BTSP" : $cpuBattleLog.text("CPU hits player 1's battleship!"); BTSPcounter ++;
      break;
      case "CR1" : $cpuBattleLog.text("CPU hits player 1's cruiser!"); CR1counter ++;
      break;
      case "CR2" : $cpuBattleLog.text("CPU hits player 1's cruiser!"); CR2counter ++;
      break;
      case "DS" : $cpuBattleLog.text("CPU hits player 1's destroyer!"); DScounter ++;
      break;
    }
  if ($cpuCellChosen.hasClass("ship")) {
  $cpuCellChosen.addClass("hit"); $cpuCellChosen.text("HIT");$cpuCellChosen.removeClass("ship");
  }
  else {$cpuCellChosen.addClass("miss"); $cpuCellChosen.removeClass("sea"); }
    if (ACFCRcounter === 5) {
      $cpuBattleLog.text("CPU sank your aircraft carrier!");
      setTimeout(1000); ACFCRcounter ++;
    }
    else if (BTSPcounter === 4) {
      $cpuBattleLog.text("CPU sank your battleship!");
      setTimeout(1000); BTSPcounter ++;
    }
    else if (CR1counter === 3) {
      $cpuBattleLog.text("CPU sank your cruiser!");
      setTimeout(1000); CR1counter ++;
    }
    else if (CR2counter === 3) {
      $cpuBattleLog.text("CPU sank your cruiser!");
      setTimeout(1000); CR2counter ++;
    }
    else if (DScounter === 2) {
      $cpuBattleLog.text("CPU sank your destroyer!");
      setTimeout(1000); DScounter ++;
    }
  checkForCpuWin();
}
//-------------------------------------------------------------
function lookForShip() {
  var randomIndex2 = Math.floor(Math.random() * 4);
  switch (randomIndex2) {
    case 1 : $cpuCellChosen = $playersTiles.index($cpuCellChosen) +1;
    break;
    case 2 : $cpuCellChosen = $playersTiles.index($cpuCellChosen) -1;
    break;
    case 3 : $cpuCellChosen = $playersTiles.index($cpuCellChosen) +10;
    break;
    case 4 : $cpuCellChosen = $playersTiles.index($cpuCellChosen) -10;
    break;
  }
  console.log($cpuCellChosen);
  if (($cpuCellChosen.hasClass("ship") || $cpuCellChosen.hasClass("sea")) || ($cpuCellChosen.hasClass(undefined))) {
    lookForShip();
  }
  else {
  cpuFire();
  }
}
//---------------------------------------------------------------------

function cpusChoice() {
  $cpuBoard.off('click');
  if ($cpuCellChosen.text === "HIT") {
    lookForShip();
  }
  else {
    var randomIndex = Math.floor(Math.random() * $playersTiles.length);
    $cpuCellChosen = $playersTiles.eq(randomIndex);
    if ($cpuCellChosen.hasClass("ship") || $cpuCellChosen.hasClass("sea")) {
      console.log($cpuCellChosen);
      cpuFire();
    }
    else
    cpusChoice();
  }
}
