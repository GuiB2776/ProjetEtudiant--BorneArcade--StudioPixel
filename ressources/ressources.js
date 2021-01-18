// le canvas
var myCanvas, myCanvasContext, canvasWidth=1920, canvasHeight= 1080;
// le pacman
var pacman;
// les fantômes
var fantome1, fantome2, fantome3, fantome4;

var Labyrinthe0 = [
                    [ 9, 1, 1, 1, 1 ],
                    [ 8, 0, 0, 0, 2 ],
                    [ 8, 0, 0, 0, 2 ],
                    [ 8, 0, 0, 0, 2 ],
                    [ 12, 4, 4, 4, 6 ],
                  ];

for (var largeur = 0; colonne < hauteur; colonne++)
{
    for (var colonne = 0; ligne < largeur; ligne++)

    Tableau[Labyrinthe0[largeur][col]]

}

// ____________________________________________________ //
// ____________________________________________________  //

/*
            for (var column = 0; column < map.columns; column++) 
            {
                for (var row = 0; row < map.rows; row++) 
                {
                    var tile = map.getTile(column, row);
                    var x = column * map.tileSize;
                    var y = row * map.tileSize;
                    drawTile(tile, x, y);
                }
            }
            */

            //--- Initialisation de PacMan ---//

 /*

<script type="text/javascript">
 
 var canvas = document.getElementById("myCanvas");
 var ctx = canvas.getContext("2d");

 var mur1 = new Image();
 mur1.onload = function() 
 {
     ctx.drawImage(mur1, 0, 0, 50, 50);
 };
 mur1.src = "assets/img/mur1.png";

 var mur2 = new Image();
 mur2.onload = function() 
 {
     ctx.drawImage(mur2, 100, 100, 50, 50);
 };
 mur2.src = "assets/img/mur2.png";

 var mur3 = new Image();
 mur3.onload = function() 
 {
     ctx.drawImage(mur3, 400, 400, 50, 50);
 };
 mur3.src = "assets/img/mur3.png";

 var pacman = new Image();
 pacman.onload = function() 
 {
     ctx.drawImage(pacman, 100, 100, 48, 48);
 };
 pacman.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Pacman.svg/220px-Pacman.svg.png";

</script>

/*



