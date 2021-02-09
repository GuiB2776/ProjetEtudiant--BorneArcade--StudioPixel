//// PACMAN ////

/* définition des constantes */
const largeurLaby = 25;
const hauteurLaby = 15;
const tailleCelluleLaby = 50;

// const taillePacman = tailleCelluleLaby * 0.7 ; 	
const taillePacman = 25;
const distanceCollision = ((taillePacman**2) + (taillePacman**2));

const canvasWidth = largeurLaby * tailleCelluleLaby ;
const canvasHeight = hauteurLaby * tailleCelluleLaby ;
var canvasContext ;

var score = 0;
var nbVies = 3;

var laby1 =[[ '9', '5', '5', '5', '5', '5', '3', '9', '1', '7', '9',' 5', '5', '5', '3','13', '1', '3', '9', '5', '5', '5', '5', '5', '3'],              // 1
			['10',"13", "5", "1", "5", "7",'10', "8", "6",' 9',' 6',' 9',' 1', '3','12', '3','12', '2','10','13', '5', '5', '5' ,'7','10'],              // 2
			[ '8', '5', '7','10','13', '5', '2','10', '9', '6', '9', '0', '0', '0', '3','12', '3','10', '8', '5', '5', '5', '5', '5', '2'],              // 3
			['10', '9', '1', '0', '1', '3','10','10','10', '9', '4', '4', '4', '4', '4', '3','10','10','10', '9', '1', '1', '1', '3','10'],              // 4
			['10','12', '4', '4', '4', '6','10','10','10','10', '9', '5', '5', '5', '3','10','10','10','10','12', '4', '4', '0', '6','10'],              // 5
			[ '8', '5', '5', '5', '1', '5', '2','14','10','14','10','13', '1', '7','10','14','10','14', '8', '5', '1', '7','10','13', '2'],              // 6
			['10', '9', '1', '3','10','11', '8', '5', '4', '1', '4', '3','14', '9', '4', '1', '4', '5', '2','11','10', '9', '0', '3','10'],              // 7
			['10', '8', '0', '2','10','10','10', '9',' 3','10','11','12',' 5',' 6','11','10',' 9',' 3','10','10','10',' 8', '0',' 2','10'],              // 8
			['10', '8', '0', '2','10','10','10', '8', '2','10','10', '9',' 0',' 3','10','10',' 8',' 2','10','10','10',' 8',' 0',' 2','10'],              // 9
			['10','12', '0', '6','10','14','10',' 8',' 2','10','10','12',' 4',' 6','10','10',' 8',' 2','10','14','10','12',' 4',' 6','10'],              // 10
			[ '8', '7','10','13',' 4',' 5',' 2','12', '6','10','14', '9', '5',' 3','14','10','12',' 6',' 8',' 5',' 4',' 5',' 5', '5', '2'],              // 11
			['10','13', '4', '5',' 5',' 7',' 8',' 5',' 1',' 4',' 1',' 6','11','12', '1',' 4',' 1', '5',' 2','13',' 5',' 1',' 5',' 7','10'],              // 12
			[ '8', '5', '5', '5', '5', '5', '2','11','10','11','10','13',' 0',' 7','10','11','10','11', '8',' 5',' 7','10','13',' 5', '2'],              // 13
			['10','13', '5', '5',' 5', '7','10','14','10','14','12',' 3','14', '9',' 6','14','10','14','10','13',' 5',' 4',' 5', '7','10'],              // 14
			['12', '5', '5', '5', '5',' 5',' 4',' 5',' 4', '7','15','12',' 5',' 6','15','13',' 4',' 5',' 4',' 5',' 5',' 5', '5',' 5',' 6'],				 // 15
		];
		//	  01   02   03   04   05   06   07   08   09   10   11   12   13   14   15   16   17   18   19   20   21   22   23   24   25 


var level = 0;
var definitionLevel=[ 
						{labyrinthe:laby1,startX:12,startY:4,direction:0}, //sélection de la zone de départ du PacMan et sa direction
					];	


var imageMur;	// défintion variable pour y mettre les assets des murs
function startLoading() //chargement des assets des murs dans un tableau grâce à la fonction loadImage()
{
    imageMur=loadImage([	"assets/img/mur0.png",
							"assets/img/mur1.png",
							"assets/img/mur2.png",
							"assets/img/mur3.png",
							"assets/img/mur4.png",
							"assets/img/mur5.png",
							"assets/img/mur6.png",
							"assets/img/mur7.png",
							"assets/img/mur8.png",
							"assets/img/mur9.png",
							"assets/img/mur10.png",
							"assets/img/mur11.png",
							"assets/img/mur12.png",
							"assets/img/mur13.png",
							"assets/img/mur14.png",
							"assets/img/mur15.png"],endLoadMur); // appel de la fonction de chargement de PacMan
}



var imagePacman;
function endLoadMur() 											// création fonction enLoadMur() qui charge Pacman
{        														
	imagePacman = loadImage([	"assets/img/DrPacman.png",   	// chargement du PacMan, dans un tableau
								],endLoadPacman);				// appel de la fonction endLoadPacman qui charge les ghosts
}	



var imageGost;
function endLoadPacman()  // chargement des Ghosts, dans un tableau
{     
	imageGost=loadImage([		"assets/img/virus.png",
								"assets/img/virusRouge.png",
								"assets/img/virusOrange.png",
								"assets/img/virusBleu.png",
								"assets/img/virusViolet.png"], initialisation);	// appel de la fonction endLoadGhost qui définie le canvas
}


const NbrGHOST = 4;
function initialisation() 		// fonction de chargement du canvas >>> ses paramètres
{ 
	
    document.getElementById("presentation").style.display="none";		// presentation cachée
	document.getElementById("jeu").style.display="";					//sélection de l'ID HTML "jeu"
	document.getElementById("saisieHiscore").style.display="none";		// saisieHighscore cachée

	var canvas = document.getElementById("canvas");								// définition d'une variable canvas = elementHTML avec l'id "canvas"
	canvas.width = canvasWidth;													// Taille du canvas en hauteur
	canvas.height = canvasHeight;												// taille du canvas en largeur
	canvasContext = canvas.getContext("2d");									// contexte du canvas en 2D
	document.getElementById("canvas").style.display="";							// affichage du canvas avec l'attribut display:""; / display:"none";

	document.getElementById("message").innerHTML= "Score : " + score + "  //  " + " Points restant : " + nbPillule ;				// affichage message en haut à droite
	document.getElementById("score").innerHTML= "Score : " + score + "  //  " + " Points restant : " + nbPillule ;
	
	pacman.init(definitionLevel[level]);										//initialisation du pac man dans le niveau selectioner
	gost.init(definitionLevel[level]);											//initialisation des fantomes dans le niveau selectioner
	gost2.init(definitionLevel[level]);	
	gost3.init(definitionLevel[level]);	
	gost4.init(definitionLevel[level]);	
	createPillules(definitionLevel[level].labyrinthe,definitionLevel[level].startX,definitionLevel[level].startY);	//création des pillules

	//appel de l'objet dynamique ghost()
	//ghost

	loopMain(); // appel de la fonction loopmain
}



var nbPillule = 0;
//// ---- Boucle principale ---- ////
function loopMain() 	// définition de la boucle principale
{  
	canvasContext.fillStyle = "#ffffff";
	canvasContext.fillRect(0, 0, 1600, 880);
	
	var nbPillule = drawLaby(definitionLevel[level].labyrinthe);	// definition du nombre de pièces dans le labyrinthe par le nombre de cases disponibles 
	pacman.update(definitionLevel[level]);							// mise à jour du pacman
	//for ( var < )
	gost.update(definitionLevel[level]);							// mise à jour des fantômes 
	gost2.update(definitionLevel[level]);
	gost3.update(definitionLevel[level]);
	gost4.update(definitionLevel[level]);

	document.getElementById("message").innerHTML= "Score : " + score + "  //  " + " Points restant : " + nbPillule ;
	document.getElementById("score").innerHTML= "Score : " + score + "  //  " + " Points restant : " + nbPillule ;
	
	if( !nbPillule )  
	{																				// s'il n'y a plus de pièces, on relance le niveau
		pacman.init(definitionLevel[level]);
		gost.init(definitionLevel[level]);											//initialisation des fantomes dans le niveau selectioner
		gost2.init(definitionLevel[level]);	
		gost3.init(definitionLevel[level]);	
		gost4.init(definitionLevel[level]);	
		createPillules(definitionLevel[level].labyrinthe,definitionLevel[level].startX,definitionLevel[level].startY); // recréation des pièces
	}

	if( pacman.mort == true )
	{
		popUpGameOver();
		pacman.mort = false;
		pacman.init(definitionLevel[level].labyrinthe,definitionLevel[level]);
		createPillules(definitionLevel[level].labyrinthe,definitionLevel[level].startX,definitionLevel[level].startY);

		document.getElementById("message").innerHTML= "Score :" + score + " // " + " Points restant :" + nbPillule;
		document.getElementById("score").innerHTML= "Score : " + score + "  //  " + " Points restant : " + nbPillule ;

	}

	setTimeout(loopMain, 1000/60);	// délais de chargement de 1000 millisecondes / 60

}


//// ---- PACMAN ---- ////
const delaiDemandeMax=20;	// constante du délais des commandes directionnelle // permet de mettre un délai pour tourner ( 20 frames )
var pacman=					// définition de pacman
{
	
	x:0,					// axe des x 
	y:0,					// axe des y 
	direction:0,
	derniereDirection:0,
	directionDemande:0,
	delaiDemande:0,
	vitesse:4,  	//vitesse du pac man
	vitesseAnim:6,
	vAnim:0,
	noAnim:0,

	mort: false,

	
	init(paramLevel) 		// initialisation des paramètres du niveau pour son affichage >>> 
	{			
		this.x=paramLevel.startX*tailleCelluleLaby;
		this.y=paramLevel.startY*tailleCelluleLaby;
		this.directionDemande=this.direction=this.derniereDirection=paramLevel.direction;
		this.delaiDemande=-30;
	},
	
	update(paramLevel) 		// mise à jour du jeu (rafraichissement) && paramètres de direction 
	{			

		if(this.delaiDemande>=0) 
		{     
			if(joystick&1) 
			{
				this.directionDemande=1;
				this.delaiDemande=delaiDemandeMax;
			} 
			else if(joystick&2) 
			{
				this.directionDemande=2;
				this.delaiDemande=delaiDemandeMax;
			} 
			else if(joystick&4) 
			{
				this.directionDemande=4;
				this.delaiDemande=delaiDemandeMax;
			} 
			else if(joystick&8) 
			{
				this.directionDemande=8;
				this.delaiDemande=delaiDemandeMax;
			}
		}
				
		if( (this.x%tailleCelluleLaby)<this.vitesse && (this.y%tailleCelluleLaby)<this.vitesse ) 
		{     
			if(this.delaiDemande>0) 
			{
				if((paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.directionDemande)==0) 
				{
					this.direction=this.directionDemande;
					this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
					this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
				}
			} 
			if(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
			{
				this.direction=0;
				this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
				this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
			}
		}

		// Gestion du délai d'appui d'une touche pour le déplacement
		if(this.delaiDemande>0)
		{
			this.delaiDemande--;
		}
		else if(this.delaiDemande<0)
		{
			this.delaiDemande++;
		}
			
		switch(this.direction) 			// choix de la direction
		{	
			case 1:
			 this.y-=this.vitesse;		// axe du déplacement
			 break;
			case 2:
			 this.x+=this.vitesse;		// axe du dépalcement
			 break;
			case 4:
			 this.y+=this.vitesse;		// axe du dépalcement
			 break;
			case 8:
			 this.x-=this.vitesse;		// axe du dépalcement
			 break;
		}

		// symétrie de l'image selon l'axe de déplacement (perso tourné à droite-gauche )
		canvasContext.save();						
		if(this.derniereDirection&8) 
		{
			canvasContext.scale(-1,1);
			canvasContext.translate((-this.x*2)-tailleCelluleLaby,0);
		} 
		/* 
		//Affichage perso tourné vers le haut ou le bas
		else if(this.derniereDirection&4) 
		{
			canvasContext.translate(this.x+this.y+tailleCelluleLaby,this.y-this.x);
			canvasContext.rotate(Math.PI/2);			
		} 
		else if(this.derniereDirection&1) 
		{
			canvasContext.translate(-this.y+this.x,this.x+this.y+tailleCelluleLaby);
			canvasContext.rotate(-Math.PI/2);
		}
		*/


		// Animation du personnage pendant son déplacement
		if(this.direction) 
		{
			this.derniereDirection=this.direction;
			if(this.vAnim>0) 
			{ 
				this.vAnim--;
			} 
			else 
			{
				this.vAnim=this.vitesseAnim;
				this.noAnim=(this.noAnim+1)%imagePacman.length;
			}
		} 
		else 
		{
			this.noAnim=this.vAnim=0;
		}

		canvasContext.drawImage(imagePacman[this.noAnim],
								0,0,tailleCelluleLaby,tailleCelluleLaby,
								this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);

		canvasContext.restore();
		
		var xPillule = parseInt(this.x/tailleCelluleLaby);
		var yPillule = parseInt(this.y/tailleCelluleLaby);
		// paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(1<<4);

		// pièce du centre
		if(paramLevel.labyrinthe[yPillule][xPillule]&(1<<4))
		{
			paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(1<<4);
			score++;
		}

		// pièce de droite
		if( (this.direction&10) && (this.x%tailleCelluleLaby)>4 && paramLevel.labyrinthe[yPillule][xPillule]&(2<<4) )
		{
			paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(2<<4);
			score++;
		}

		// pièce du sud
		if( (this.direction&5) && (this.y%tailleCelluleLaby)>4 && paramLevel.labyrinthe[yPillule][xPillule]&(4<<4) )
		{ 
			paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(4<<4);
			score++;
		}

		document.getElementById("message").innerHTML = score + " / " + nbPillule ;
	},
	
};


//// ---- DESSIN Labyrinthe ---- ////
function drawLaby(laby)							// création du labyrinthe avec une double boucle for
{		

	var pillule;
	canvasContext.fillStyle="#000000";

	for(var ligne=0 ; ligne<hauteurLaby ; ligne++ ) 
	{
		for(var colonne=0;colonne<largeurLaby;colonne++) 
		{
			var x=colonne*tailleCelluleLaby;
			var y=ligne*tailleCelluleLaby;
			canvasContext.drawImage(imageMur[laby[ligne][colonne]&15],
									0,0,tailleCelluleLaby,tailleCelluleLaby,
									x,y,tailleCelluleLaby,tailleCelluleLaby);
		}
	}

	var cptPillule = 0;		// création et placement des pillules 
	for( var ligne=0 ; ligne<hauteurLaby ; ligne++ ) 
	{
		for(var colonne=0;colonne<largeurLaby;colonne++) 
		{
			var x=colonne*tailleCelluleLaby;
			var y=ligne*tailleCelluleLaby;
			pillule=(laby[ligne][colonne]>>4)&7;
			if(pillule&1) 
			{
				canvasContext.fillRect(x+(tailleCelluleLaby/2)-2,y+(tailleCelluleLaby/2)-2,4,4);
				cptPillule++;
			}
			if(pillule&2) 
			{
				canvasContext.fillRect(x+tailleCelluleLaby-2,y+(tailleCelluleLaby/2)-2,4,4);
				cptPillule++;
			}
			if(pillule&4) 
			{
				canvasContext.fillRect(x+(tailleCelluleLaby/2)-2,y+tailleCelluleLaby-2,4,4);
				cptPillule++;
			}
		}
	}
	return cptPillule;
}



//// ---- création && mise en place des pièces à ramasser ---- ////
function createPillules(laby,x,y) 									// création des pièces dans le labyrinthe
{
	// laby[y][x]|=1<<7;   // bonus
	laby[y][x]|=1<<4;
	if(!(laby[y][x]&2)) laby[y][x]|=2<<4;
	if(!(laby[y][x]&4)) laby[y][x]|=4<<4;
	if(!(laby[y][x]&1) && !(laby[y-1][x]&(1<<4))) createPillules(laby,x,y-1);
	if(!(laby[y][x]&2) && !(laby[y][x+1]&(1<<4))) createPillules(laby,x+1,y);
	if(!(laby[y][x]&4) && !(laby[y+1][x]&(1<<4))) createPillules(laby,x,y+1);
	if(!(laby[y][x]&8) && !(laby[y][x-1]&(1<<4))) createPillules(laby,x-1,y);
}


//// ---- FANTÔMES ---- ////

var gost =		 // paramètres et mise en place du/des fantomes
{   
	
	x:0,
	y:0,
	direction:4,		//choix de la direction du fantôme
	vitesse:2,			//choix de la vitesse du fantôme
	
	init(paramLevel) 
	{
		this.x=12*tailleCelluleLaby;			//position x de départ du fantôme
		this.y=9*tailleCelluleLaby;				//position y de départ du fantôme
	},
	
	update(paramLevel) 
	{
				
		if((this.x%tailleCelluleLaby)<this.vitesse && (this.y%tailleCelluleLaby)<this.vitesse) {     
			if(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) {
				while(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) {
					this.direction=2**Math.floor(Math.random()*4);
				}
			} else {
				var demiTour=(this.direction<<2);if(demiTour>15) demiTour>>=4;
				this.direction=2**Math.floor(Math.random()*4);
				while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) {
					this.direction=2**Math.floor(Math.random()*4);
				}
			}
			this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
			this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
		}
		switch(this.direction) {
			case 1:
			 this.y-=this.vitesse;
			 break;
			case 2:
			 this.x+=this.vitesse;
			 break;
			case 4:
			 this.y+=this.vitesse;
			 break;
			case 8:
			 this.x-=this.vitesse;
			 break;
		}

		canvasContext.save();
		canvasContext.drawImage(imageGost[1],
								0,0,tailleCelluleLaby,tailleCelluleLaby,
								this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);
		canvasContext.restore();

		// test collision avec Pacman
		var dx = this.x-pacman.x;
		var dy = this.y-pacman.y;
		if( (dx**2) + (dy**2) < distanceCollision ) 
		{
			pacman.mort = true;
			chronoStop();
		}
	},
}; 



var gost2 =		 // paramètres et mise en place du fantôme 2
{   
	
	x:0,
	y:0,
	direction:4,		//choix de la direction du fantôme
	vitesse:2,			//choix de la vitesse du fantôme
	
	init(paramLevel) 
	{
		this.x=12*tailleCelluleLaby;			//position x de départ du fantôme
		this.y=9*tailleCelluleLaby;				//position y de départ du fantôme
	},
	
	update(paramLevel) 
	{
				
		if((this.x%tailleCelluleLaby)<this.vitesse && (this.y%tailleCelluleLaby)<this.vitesse) 
		{     
			if(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
			{
				while(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			} 
			else 
			{
				var demiTour=(this.direction<<2);
				if(demiTour>15) demiTour>>=4;
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
				while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			}
			this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
			this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
		}
		switch(this.direction) 
		{
			case 1:
			 this.y-=this.vitesse;
			 break;
			case 2:
			 this.x+=this.vitesse;
			 break;
			case 4:
			 this.y+=this.vitesse;
			 break;
			case 8:
			 this.x-=this.vitesse;
			 break;
		}

		canvasContext.save();
		canvasContext.drawImage(imageGost[2],
								0,0,tailleCelluleLaby,tailleCelluleLaby,
								this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);
		canvasContext.restore();

		// test collision avec Pacman
		var dx = this.x-pacman.x;
		var dy = this.y-pacman.y;
		if( (dx**2) + (dy**2) < distanceCollision ) 
		{
			pacman.mort = true;
			chronoStop();
		}

	},
}; 



var gost3 =		 // paramètres et mise en place du fantôme 2
{   
	
	x:0,
	y:0,
	direction:4,		//choix de la direction du fantôme
	vitesse:2,			//choix de la vitesse du fantôme
	
	init(paramLevel) 
	{
		this.x=12*tailleCelluleLaby;			//position x de départ du fantôme
		this.y=9*tailleCelluleLaby;				//position y de départ du fantôme
	},
	
	update(paramLevel) 
	{
				
		if((this.x%tailleCelluleLaby)<this.vitesse && (this.y%tailleCelluleLaby)<this.vitesse) 
		{     
			if(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
			{
				while(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			} 
			else 
			{
				var demiTour=(this.direction<<2);
				if(demiTour>15) demiTour>>=4;
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
				while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			}
			this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
			this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
		}
		switch(this.direction) 
		{
			case 1:
			 this.y-=this.vitesse;
			 break;
			case 2:
			 this.x+=this.vitesse;
			 break;
			case 4:
			 this.y+=this.vitesse;
			 break;
			case 8:
			 this.x-=this.vitesse;
			 break;
		}

		canvasContext.save();
		canvasContext.drawImage(imageGost[3],
								0,0,tailleCelluleLaby,tailleCelluleLaby,
								this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);
		canvasContext.restore();

		// test collision avec Pacman
		var dx = this.x-pacman.x;
		var dy = this.y-pacman.y;
		if( (dx**2) + (dy**2) < distanceCollision ) 
		{
			pacman.mort = true;
			chronoStop();
		}

	},
}; 



var gost4=		 // paramètres et mise en place du fantôme 2
{   
	
	x:0,
	y:0,
	direction:4,		//choix de la direction du fantôme
	vitesse:2,			//choix de la vitesse du fantôme
	
	init(paramLevel) 
	{
		this.x=12*tailleCelluleLaby;			//position x de départ du fantôme
		this.y=9*tailleCelluleLaby;				//position y de départ du fantôme
	},
	
	update(paramLevel) 
	{
				
		if((this.x%tailleCelluleLaby)<this.vitesse && (this.y%tailleCelluleLaby)<this.vitesse) 
		{     
			if(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
			{
				while(paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			} 
			else 
			{
				var demiTour=(this.direction<<2);
				if(demiTour>15) demiTour>>=4;
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
				while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
				{
					this.direction=2**Math.floor(Math.random()*4);
				}
			}
			this.x=(parseInt(this.x/tailleCelluleLaby))*tailleCelluleLaby;
			this.y=(parseInt(this.y/tailleCelluleLaby))*tailleCelluleLaby;
		}
		switch(this.direction) 
		{
			case 1:
			 this.y-=this.vitesse;
			 break;
			case 2:
			 this.x+=this.vitesse;
			 break;
			case 4:
			 this.y+=this.vitesse;
			 break;
			case 8:
			 this.x-=this.vitesse;
			 break;
		}

		canvasContext.save();
		canvasContext.drawImage(imageGost[4],
								0,0,tailleCelluleLaby,tailleCelluleLaby,
								this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);
		canvasContext.restore();

		// test collision avec Pacman
		var dx = this.x-pacman.x;
		var dy = this.y-pacman.y;
		if( (dx**2) + (dy**2) < distanceCollision ) 
		{
			pacman.mort = true;
			chronoStop();
		}

	},
}; 