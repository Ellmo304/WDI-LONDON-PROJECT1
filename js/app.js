
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


//function for ai to place ships vertically at random location on board without overlapping
var chooseVertical = function(ship) {
  var randomIndex = Math.floor(Math.random() * $tiles.length);
  var $pos = $("td")[randomIndex];
  console.log($pos);
  if (+$pos.id + (10*(+ship.length-1)) > 99)
  { $pos = ""; randomIndex = ""; chooseVertical(ship);}
  else {
    if ($("td")[randomIndex].class === "SEA")  {
      for (var i = 0; i < ship.length; i++) {
        while ($("td")[randomIndex + (10*(i))].class === "SEA")
        {$("td")[randomIndex + (10*(i))].class = "HIT";}
        // else {$pos = ""; randomIndex = ""; chooseVertical(ship);} }
      }} else { $pos = ""; randomIndex = ""; chooseVertical(ship);}}
    };


//function for ai to place ships horizontally at random location on board without overlapping
    var chooseHorizontal = function(ship) {
      var randomIndex = Math.floor(Math.random() * $tiles.length);
      var $pos = $("td")[randomIndex];
      var clears = [];
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
                while ($("td")[randomIndex + (i)].class === "SEA")
                {$("td")[randomIndex + (i)].class = "HIT";
              clears = []; string = "";}
                }  } else {clears = []; string = ""; $pos = ""; randomIndex = ""; chooseHorizontal(ship);}
              }  };
//---------------------------------------------------------------------------------------------------------------------------------

//function to randomly assign vertical or horizontal placement for each ship
    var orientation = function(ship) {
      if (Math.floor(Math.random()*2) === 1)
      {console.log(Math.floor(Math.random()*2) === 1);
       chooseVertical(ship); }
      else { console.log(Math.floor(Math.random()*2) === 1); chooseHorizontal(ship);}
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
        document.getElementById("battleLog").innerHTML = "Direct Hit!";
      }
      else if (this.class === "SEA") { $(this).html("MISS"); document.getElementById("battleLog").innerHTML = "No hits this time!";}
    };
    // //click event listener for tiles on board
    $("td").on("click", isHit);








    //idea for battle logs you sunk my battle ship etc - if i push each ships clears array into another array, if ships always go in order i can say once td.id(myarray[0][1][2].tostring) are clicked on, display u sunk my bttleship.,


    // for computer choosing for my board, pick random cell from my tiles array. remove tile pickd from array. if class = hit, pick cell+ 1or cell -1 or cell + 10 or cell -10. if miss, pick another cell at random. 
