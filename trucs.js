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


// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------- //


const NbrGHOST = 4;

ghost = new Array();
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

