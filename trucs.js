if(paramLevel.labyrinthe[yPillule][xPillule]&(1<<4))
{
	paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(1<<4);
	score++;
}
// pièce de droite
if(this.direction&10)
{
	paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(2<<4);
	score++;
}
// pièce du sud
if(this.direction&5)
{ 
	paramLevel.labyrinthe[yPillule][xPillule]&=0xffff-(4<<4);
	score++;
}



		document.getElementById("message").innerHTML = score + " / " + nbPillule;



audioURL = "assets/sound/DrPacManSound.mp3" ;
audioObj = new Audio(audioURL);					// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio



// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //

var laby1 =[[' 9',' 5',' 5',' 5',' 1',' 1',' 5',' 3'],		// 		1
			['10','13',' 5',' 3',' 8',' 6','11','10'],		// 		2
			[' 8',' 5',' 3','14','10','13',' 2','10'],		// 		3
			['10','15',' 8',' 5',' 0',' 3','14','10'],		// 		4
			[' 8',' 5',' 2','15',' 8',' 4',' 1',' 2'],		// 		5
			['10','11','12',' 5',' 2','11',' 8',' 6'],		// 		6
			['10','12',' 5',' 7','10','14','10','15'],		// 		7
			['12',' 5',' 5',' 5',' 4',' 5',' 4',' 7'],		// 		8
		];
		//     1    2    3    4    5    6    7    8


var laby2 =[[ '9', '5', '5', '5', '5', '5', '3', '9', '3', '9', '5', '5', '5', '5', '5', '3'],              // 1
			['10',"13", "5", "1", "5", "7",'10',' 8', '2','10','13', '5', '5', '5' ,'7','10'],              // 2
			[ '8', '5', '7','10','13', '5', '2',' 8', '2', '8', '5', '5', '5', '5', '5', '2'],              // 3
			['10', '9', '1', '0', '1', '3','10',' 8',' 2','10', '9', '1', '1', '1', '3','10'],              // 4
			['10','12', '4', '4', '4', '6','10',' 8', '2','10','12', '4', '4', '0', '6','10'],              // 5
			[ '8', '5', '5', '5', '1', '5', '2','12', '6', '8', '5', '1', '7','10','13', '2'],              // 6
			['10', '9', '1', '3','10','11', '8', '5', '5', '2','11','10', '9', '0', '3','10'],              // 7
			['10', '8', '0', '2','10','10','10', '9',' 3','10','10','10',' 8', '0',' 2','10'],              // 8
			['10', '8', '0', '2','10','10','10', '8',' 2','10','10','10',' 8',' 0',' 2','10'],              // 9
			['10','12', '0', '6','10','14','10',' 8',' 2','10','14','10','12',' 4',' 6','10'],              // 10
			[ '8', '7','10','13',' 4',' 5',' 2','12',' 6',' 8',' 5',' 4',' 5',' 5', '5', '2'],              // 11
			['10','13', '4', '5',' 5',' 7',' 8',' 5', '5',' 2','13',' 5',' 1',' 5',' 7','10'],              // 12
			[ '8', '5', '5', '5', '5', '5', '2','11','11', '8',' 5',' 7','10','13',' 5', '2'],              // 13
			['10','13', '5', '5',' 5', '7','10','14','14','10','13',' 5',' 4',' 5', '7','10'],              // 14
			['12', '5', '5', '5', '5',' 5',' 4',' 5',' 5',' 4',' 5',' 5',' 5', '5',' 5',' 6'],				// 15
		];
		//	  01   02   03   04   05   06   07   08   09   10   11   12   13   14   15   16  




var laby3 =[[ '9', '5', '5', '5', '5', '5', '3', '9', '1', '7', '9',' 5', '5', '5', '3','13', '1', '3', '9', '5', '5', '5', '5', '5', '3'],              // 1
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


	function levelSwitcher()
	{
		if( playerLevel === 1)
		{
			definitionLevel=[ 
				{labyrinthe:laby1,startX:5,startY:0,direction:0}, //sélection de la zone de départ du PacMan et sa direction
			];
		}
		else if( playerLevel === 2)
		{
			definitionLevel=[ 
				{labyrinthe:laby2,startX:0,startY:0,direction:0}, //sélection de la zone de départ du PacMan et sa direction
			];
		}
		else if( playerLevel === 3)
		{
			definitionLevel=[ 
				{labyrinthe:laby3,startX:12,startY:4,direction:0}, //sélection de la zone de départ du PacMan et sa direction
			];
		}
	}



// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //


const NbrGHOST = 4;

ghost = new Array();
{
	for (var i=0 ; i<NbrGHOST ; i++)
	{
		var obj = new Object();
		obj.x = 0 * tailleCelluleLaby ;
		obj.y = 4 * tailleCelluleLaby ;
		// déplacement
		obj.direction = 4 ;
		obj.vitesse = 2 ;
		// ia de gestion des déplacements
		obj.gestion = ghostGestion ;
		// img des ghost
		obj.img = imageGhost[i%imageGhost.length] ;
		// ia supplémentaires
		obj.ia = function()[];
		// push
		ghost.push(obj) ;
	}

	ghost[1].img = "assets/img/virusRouge.png" ;
	ghost[2].img = "assets/img/virusOrange.png";
	ghost[3].img = "assets/img/virusViolet.png";
	ghost[4].img = "assets/img/virusBleu.png";

	ghost[1].IA = ghostNormal ;
	ghost[2].IA = ghostNormal ;
	ghost[3].IA = ghostNormal ;
	ghost[4].IA = ghostNormal ;

	loopMain();

	var ghostGestion = function (paramLevel)
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
				this.IA(paramLevel);
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
	}

	var ghostNormal = function ( paramLevel )
	{
		var demiTour=(this.direction<<2);
		if(demiTour>15) 
		{
			demiTour>>=4;
		}
		this.direction=2**Math.floor(Math.random()*4);
		while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
		{
			this.direction=2**Math.floor(Math.random()*4);
		}
	}

	var ghostMoins = function ( paramLevel )
	{
		this.direction=2**Math.floor(Math.random()*4);
		while(this.direction==demiTour || paramLevel.labyrinthe[parseInt(this.y/tailleCelluleLaby)][parseInt(this.x/tailleCelluleLaby)]&this.direction) 
		{
			this.direction=2**Math.floor(Math.random()*4);
		}
	}

	canvasContext.save();
	canvasContext.drawImage(this.img,
							0,0,tailleCelluleLaby,tailleCelluleLaby,
							this.x,this.y,tailleCelluleLaby,tailleCelluleLaby);
	canvasContext.restore();

	// test collision avec Pacman
	var dx = this.x-pacman.x;
	var dy = this.y-pacman.y;
	if( (dx**2) + (dy**2) < distanceCollision ) 
	{
		pacman.mort = true;
	}

}
