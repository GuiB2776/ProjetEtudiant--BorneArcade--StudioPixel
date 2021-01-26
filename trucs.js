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