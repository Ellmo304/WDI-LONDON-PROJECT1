
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
// var startingShips = ["ds", "crs", "crs", "btsp", "arcft"];

//
// var chooseVertical = function(ship) {
//   var randomIndex = Math.floor(Math.random() * $tiles.length);
//   var $pos = $("td")[randomIndex];
//   console.log($pos);
//   if (+$pos.id + (10*(+ship.length-1)) > 99)
//   { $pos = ""; randomIndex = ""; chooseVertical(ship);}
//   else {
//     while ($("td")[randomIndex].class !== "HIT")  {
//       for (var i = 0; i < ship.length; i++) {
//         if ($("td")[randomIndex + (10*(i))].class !== "HIT")
//         {$("td")[randomIndex + (10*(i))].class = "HIT";}
//         else {$pos = ""; randomIndex = ""; chooseVertical(ship);}}}
//       }
//     };



var clears = [];


    var chooseHorizontal = function(ship) {
      var randomIndex = Math.floor(Math.random() * $tiles.length);
      var $pos = $("td")[randomIndex];
      console.log(+$pos.id);
      for (p = 0; p < ship.length; p ++) {
        clears.push((+$pos.id + (p)).toString());}
        clears.reverse();
        clears.slice(4);
        var string = clears.toString();
        console.log(string);
        if (string.includes("9") === true) {
          clears = []; string = ""; $pos = ""; randomIndex = ""; chooseHorizontal(ship);}
          else if (string.includes("9") === false)  {
            if ($pos.class === "SEA")  {
              for (var i = 0; i < ship.length; i++) {
                if ($("td")[randomIndex + (i)].class === "SEA")
                {$("td")[randomIndex + (i)].class = "HIT";
              clears = []; string = "";}
                else {$pos = ""; randomIndex = ""; clears = []; string = ""; chooseHorizontal(ship);}}  } else {clears = []; string = ""; $pos = ""; randomIndex = ""; chooseHorizontal(ship);}
              }  };




var aircraft = "12345";
var battleship = "1234";
var cruiser = "123";
var cruiser2 = "123";
var destroyer = "12";

chooseHorizontal(aircraft);
chooseHorizontal(battleship);
chooseHorizontal(cruiser);
chooseHorizontal(cruiser2);
chooseHorizontal(destroyer);

              //
              //
              // var orientation = function(ship) {
              //   if (Math.floor(Math.random()*2) === 1)
              //   {console.log(Math.floor(Math.random()*2) === 1);
              //    chooseVertical(ship); }
              //   else { console.log(Math.floor(Math.random()*2) === 1); chooseHorizontal(ship);}
              // };



// orientation(battleship);

// orientation(aircraft);
//
// orientation(cruiser);
//
// orientation(cruiser2);
//
// orientation(destroyer);
              //   var ship = "ds"; orientation();
              // // hip = "crs"; orientation();


              // for (o = 0; o < startingShips.length; o ++) {
              //   var ship = startingShips[o];
              //   if (Math.floor(Math.random()*2) === 1)
              //   { chooseVertical(); ship = "";}
              //   else {chooseHorizontal(); ship = "";}
              // }



              // //function to mark tiles either hit or miss // if (this) is in the array of ships (!index of -1 of [ships]), var cellchosen = hit image
              // // else cellchosen = miss image
              var isHit = function() {
                console.log(this.id, this.class);
                if (this.class === "HIT") {
                  $(this).css("background-color", "red");
                }
                else $(this).html("MISS");
              };
              // //click event listener for tiles on board
              $("td").on("click", isHit);

              //
              ///find an empty square
              //pos = tiles {mathfloormathrandom} etc
              //while pos val = none
              // is vertical/horizontal mathfloormathrabdom*2 ===1 etc
              // decide orientation - if valid good, if not change orirtation else pick new square
              // pick a ship to put there
              // place the ship
