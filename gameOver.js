function popupGameOver()
{
    // sélectionner la div de la popup
    var modal = document.getElementById("myModal");

    // sélectionner le <span> de la popup pour la refermer
    var span = document.getElementById("close");

    // Si (pacman.mort == true) alors affiche la Popup
    function gameOver()
    {
        modal.style.display = "block";
    }
    // condition d'affichage de la popup
    if( pacman.mort == true )
	{
		gameOver();
    }
    
    // Refermer la Popup
    span.onclick = function() 
    {
        modal.style.display = "none";
    }
    // en cliquant en dehors
    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
}
