
//board is made and all cell ids are placed into an array
var body = document.getElementsByTagName('body');
var board = document.createElement('div');

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
  body.appendChild(tbl);



//-----------------------------------------------------------------------------------------

//loop to set ships positions on grid
var $startingShips = ["ds", "crs", "crs", "btsp", "arcft"];

// var ship = "123";
//
//   var randomIndex = Math.floor(Math.random() * $tiles.length);
//   var $pos = $("td")[randomIndex];
// console.log(+$pos.id + (10*(+ship.length-1)));
// while ($("td")[randomIndex].class === "SEA" && $("td")[randomIndex].class !== false)  {
//   for (var i = 0; i < ship.length; i++) {
//     if ($("td")[randomIndex + (10*(i))].class === "SEA")
//     {$("td")[randomIndex + (10*(i))].class = "HIT";
//   }
//
//   }}

var ship = "123";

// var chooseVertical = function() {
//   var randomIndex = Math.floor(Math.random() * $tiles.length);
//   var $pos = $("td")[randomIndex];
//   console.log($pos);
// if (+$pos.id + (10*(+ship.length-1)) > 99)
//  { $pos = ""; randomIndex = ""; chooseVertical();}
//  else {
//    while ($("td")[randomIndex].class === "SEA" && $("td")[randomIndex].class !== false)  {
//      for (var i = 0; i < ship.length; i++) {
//        if ($("td")[randomIndex + (10*(i))].class === "SEA")
//        {$("td")[randomIndex + (10*(i))].class = "HIT";
//      }}}
//   }
// };
// 
// chooseVertical();


var chooseHorizontal = function() {
  var randomIndex = Math.floor(Math.random() * $tiles.length);
  var $pos = $("td")[randomIndex];
  console.log($pos);
if (+$pos.id + (10*(+ship.length-1)) > 99)
 { $pos = ""; randomIndex = ""; chooseHorizontal();}
 else {
   while ($("td")[randomIndex].class === "SEA" && $("td")[randomIndex].class !== false)  {
     for (var i = 0; i < ship.length; i++) {
       if ($("td")[randomIndex + (10*(i))].class === "SEA")
       {$("td")[randomIndex + (10*(i))].class = "HIT";
     }}}
  }
};

chooseHorizontal();








//   var ship = "123";
//
//   var randomIndex = Math.floor(Math.random() * $tiles.length);
//   var $pos = $("td")[randomIndex];
// console.log($pos);
//
// var searchForPos = function() {
//
// if ($("td")[randomIndex].class !== undefined) {
//   if ($("td")[randomIndex].class === "SEA")  {
//     for (var i = 0; i < ship.length; i++) {
//       if ($("td")[randomIndex + (10*(i))].class === "SEA")
//       {$("td")[randomIndex + (10*(i))].class = "HIT";
//     }}
// }} else randomIndex = ""; $pos = ""; randomIndex = Math.floor(Math.random() * $tiles.length);
//  $pos = $("td")[randomIndex]; searchForPos();
//
//
// };

// searchForPos();


  // var ship = [1, 2, 3];
  // console.log(ship.length);
  //   var randomIndex = Math.floor(Math.random() * $tiles.length);
  //   var $pos = $("td")[randomIndex];
  //   console.log($pos.class);
  //   for (var i = 0; i < ship.length; i++) {
  //     console.log($pos);
  //     console.log($("td")[randomIndex].class);
  //     if ($("td")[randomIndex].class === "SEA" && $("td")[randomIndex + (10*(i))].class === "SEA")
  //     { $("td")[randomIndex].class = "HIT"; $("td")[randomIndex + (10*(i))].class = "HIT" ;
  //
  //   }}




  // console.log($("td")[randomIndex + 10]);

  // console.log(+($pos.id));
  // console.log($pos.class);
  // var canAIPlace = (+($pos.id));
  // console.log(+($pos.id) + 10);



//   while ($pos.class === "sea");
//     for (var j = 0; j < $startingShips[].length; j ++) {
// $startingShips[i]}
//
// // for each ship, check length.
// for (var i = 0; i < ship.length; i++) {
// var checksquare = (+($pos.id) + (10*[i]));
// if checksquare ===   }
// //

// var isVertical = if +$pos.id +10 === class of sea then mark pos and pos2 as class of hit
//
// id1 = (+($pos.id) +10);
// console.log(id1);
// console.log($tiles.indexOf(id1));
// var orientation = "";
// if (Math.floor(Math.random()*2) === 1) orientation = isVertical;
// else orientation = isHorizontal;
// console.log(orientation);


//
// for (var i = 0; ; i ++)
//  {var randomIndex = Math.floor(Math.random() * $tiles.length);
//   var $ship = $tiles[randomIndex];
//
//   if ($ships[0] === $ship || $ships[1] === $ship) {
//     var randomIndex = Math.floor(Math.random() * $tiles.length);
//      var $ship = $tiles[randomIndex];
//   }
//       $ships.push($ship);
//       console.log($ships);
//       randomIndex = [];
// //     }
//



//
//   var aircraftCarrier = 5;
//   var battleship  = 3;
//   var cruiser = 2;
//   var cruiser2 = 2;
//   var destroyer = 1;
// //
// var isHorizontal = ;
// var isVertical = ;


//create loop for each ship to set its place on board

// for (i = 0; i < aircraftCarrier.length; i++) {
// var position = cells[randomIndex];
// if cell
// }
//

// var setVal = function() {
//   $()val("HIT") ;
// };
//
// $.each($ships, setVal);






// //function to mark tiles either hit or miss // if (this) is in the array of ships (!index of -1 of [ships]), var cellchosen = hit image
// // else cellchosen = miss image
var isHit = function() {
  console.log(this.id, this.class);
  if (this.class === "HIT") {
    $(this).html("HIT");
  }
  else $(this).html("MISS");
};
// //click event listener for tiles on board
$("td").on("click", isHit);




//
// to determine if orientation is possible
// i % width = 0 not
// i % width = -1 its one on the edge

///find an empty square
//pos = tiles {mathfloormathrandom} etc
//while pos val = none
// is vertical/horizontal mathfloormathrabdom*2 ===1 etc
// decide orientation - if valid good, if not change orirtation else pick new square
// pick a ship to put there
// place the ship
