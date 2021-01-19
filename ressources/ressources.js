
//déclaration du canvas
var myCanvas = document.getElementById("myCanvas"); // récupération du canvas
var ctx = myCanvas.getContext("2D"); // création d'un contexte 2D pour modifier le canvas

var mur1 = new Image() // création de l'objet mur1
mur1.src = "assets/img/mur1.png"; // chemin d'accès à la source

ctx.drawImage(mur1, 0, 0) // affichage de l'image

// ____________________________________________________ //// ____________________________________________________ //
// ____________________________________________________ //// ____________________________________________________  //


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

for (let colonne = 0; colonne < hauteur; colonne++)
{
    for (let ligne = 0; ligne < largeur; ligne++)
    {
        Tableau[Labyrinthe0[largeur][col]]
    }
}

// __________________________________________________ //// ____________________________________________________ //
// __________________________________________________ //// ____________________________________________________ //

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

                        if (map[raw][column] === 0) 
                        {
                            labyrinth.innerHTML += "<div class='mur0'></div>";
                        }
                        else if (map[raw][column] === 1) 
                        {
                            labyrinth.innerHTML += "<div class='mur1'></div>";
                        }
                        else if (map[raw][column] === 2) 
                        {
                            labyrinth.innerHTML += "<div class='mur2'></div>";
                        }
                        else if (map[raw][column] === 3) 
                        {
                            labyrinth.innerHTML += "<div class='mur3'></div>";
                        }
                        else if (map[raw][column] === 4) 
                        {
                            labyrinth.innerHTML += "<div class='mur4'></div>";
                        }
                        else if (map[raw][column] === 5) 
                        {
                            labyrinth.innerHTML += "<div class='mur5'></div>";
                        }
                        else if (map[raw][column] === 6) 
                        {
                            labyrinth.innerHTML += "<div class='mur6'></div>";
                        }
                        else if (map[raw][column] === 7) 
                        {
                            labyrinth.innerHTML += "<div class='mur7'></div>";
                        }
                        else if (map[raw][column] === 8) 
                        {
                            labyrinth.innerHTML += "<div class='mur8'></div>";
                        }
                        else if (map[raw][column] === 9) 
                        {
                            labyrinth.innerHTML += "<div class='mur9'></div>";
                        }
                        else if (map[raw][column] === 10) 
                        {
                            labyrinth.innerHTML += "<div class='mur10'></div>";
                        }
                        else if (map[raw][column] === 11) 
                        {
                            labyrinth.innerHTML += "<div class='mur11'></div>";
                        }
                        else if (map[raw][column] === 12) 
                        {
                            labyrinth.innerHTML += "<div class='mur12'></div>";
                        }
                        else if (map[raw][column] === 13) 
                        {
                            labyrinth.innerHTML += "<div class='mur13'></div>";
                        }
                        else if (map[raw][column] === 14) 
                        {
                            labyrinth.innerHTML += "<div class='mur14'></div>";
                        }
                        else if (map[raw][column] === 15) 
                        {
                            labyrinth.innerHTML += "<div class='mur15'></div>";
                        }
*/

// ____________________________________________________  //// ____________________________________________________  //
// ____________________________________________________  //// ____________________________________________________  //
// ____________________________________________________  //// ____________________________________________________  //



        const mazeWIDTH   = 32 ;
        const mazeHEIGHT  = 16 ;
        const cellSIZE    = 50 ;
        
        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");

        /* var des murs */
        var mur0 = new Image();
        mur0.src="assets/img/mur0.png";
        var mur1 = new Image();
        mur1.src="assets/img/mur1.png";
        var mur2 = new Image();
        mur2.src="assets/img/mur2.png";
        var mur3 = new Image();
        mur3.src="assets/img/mur3.png";
        var mur4 = new Image();
        mur4.src="assets/img/mur4.png";
        var mur5 = new Image();
        mur5.src="assets/img/mur5.png";
        var mur6 = new Image();
        mur6.src="assets/img/mur6.png";
        var mur7 = new Image();
        mur7.src="assets/img/mur7.png";
        var mur8 = new Image();
        mur8.src="assets/img/mur8.png";
        var mur9 = new Image();
        mur9.src="assets/img/mur9.png";
        var mur10 = new Image();
        mur10.src="assets/img/mur10.png";
        var mur11 = new Image();
        mur11.src="assets/img/mur11.png";
        var mur12 = new Image();
        mur12.src="assets/img/mur12.png";
        var mur13 = new Image();
        mur13.src="assets/img/mur13.png";
        var mur14 = new Image();
        mur14.src="assets/img/mur14.png";
        var mur15 = new Image();
        mur15.src="assets/img/mur15.png";


        /* Définition de la map dans avec tableaux dans tableaux de 16x32 */
        map = 
        [ 
            [ 9, 5, 5, 1, 5, 5, 3, 9, 1, 1, 1, 1, 3, 9, 5, 5, 5, 5, 3, 9, 1, 1, 1, 1, 3, 9, 5, 5, 1, 5, 5, 3 ],
            [ 10, 9, 7, 10, 13, 3, 10, 8, 0, 0, 4, 4, 6, 10, 9, 1, 1, 3, 10, 12, 4, 4, 0, 0, 2, 10, 9, 7, 8, 13, 3, 10],
            [ 10, 14, 9, 0, 3, 14, 10, 12, 4, 6, 9, 5, 1, 2, 12, 4, 0, 2, 8, 5, 5, 3, 12, 4, 6, 10, 14, 9, 0, 3, 14, 10], 
            [ 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1 ],  
            [ 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1 ], 
            [ 1, 2, 2, 2, 1, 1, 5, 1, 1, 2, 2, 2, 1 ], 
            [ 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1 ], 
            [ 1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1 ], 
            [ 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1 ], 
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
        ];

        /* Walls */
        var wall = 
        [
            "assets/img/mur0.png" , "assets/img/mur1.png" , "assets/img/mur2.png" , "assets/img/mur3.png" , 
            "assets/img/mur4.png" , "assets/img/mur5.png" , "assets/img/mur6.png" , "assets/img/mur7.png" , 
            "assets/img/mur8.png" , "assets/img/mur9.png" , "assets/img/mur10.png" , "assets/img/mur11.png" ,
            "assets/img/mur12.png" , "assets/img/mur13.png" , "assets/img/mur14.png" , "assets/img/mur15.png"
        ];
        

        var xPacman = yPacman = 0;

        /* Map drawing */
        function drawMap()                                            // fonction de dessin de la map
        {  

            ctx.fillStyle = "lightgrey";                            // remplissage en gris et définition de la taille de l'écran de rafraichissement
            ctx.fillRect(0, 0, 1600, 800);                // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect

            for(let row=0 ; row<map.length ; row++) 
            {
                for(let column=0 ; column<map[row].length ; column++) 
                {	
                    var x = column * cellSIZE;
                    var y = row * cellSIZE;

                    ctx.drawImage(mur[map[row][column]],
                                0,0,cellSIZE,cellSIZE,
                                x,y,cellSIZE,cellSIZE
                                );

                    if(map[row][column] == 0)
                    {
                        ctx.drawImage(mur0, 0, 0, cellSIZE, cellSIZE);
                    }
                    else if(map[row][column] == 1)
                    {
                        ctx.drawImage(mur1, 0, 0, cellSIZE, cellSIZE);
                    }
                    else if(map[row][column] == 2)
                    {
                        ctx.drawImage(mur2, 0, 0, cellSIZE, cellSIZE);
                    }
                }
            }
            

            // setTimeout(drawMap, 1000/60);
        
        }
        
        drawMap();
        
        // si l'index du tableau contient le chiffre || nombre X 
        // alors murX apparait


function loadWalls()                                                    // fonction de dessin de la map avec les murs */
            {
                wall = loadImage(                                       // chargement des images des murs
                [ 
                    "assets/img/mur0.png" , "assets/img/mur1.png" , "assets/img/mur2.png" , "assets/img/mur3.png" , 
                    "assets/img/mur4.png" , "assets/img/mur5.png" , "assets/img/mur6.png" , "assets/img/mur7.png" , 
                    "assets/img/mur8.png" , "assets/img/mur9.png" , "assets/img/mur10.png" , "assets/img/mur11.png" ,
                    "assets/img/mur12.png" , "assets/img/mur13.png" , "assets/img/mur14.png" , "assets/img/mur15.png"
                ],   
                    loadPacMan ) ;                                      // appel de la fonction de dessin de PacMan
            }

