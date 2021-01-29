
// -----------------------------------------------------------------//


function popUpGameOver()
{
    // sélection de la div de la popup
    var popupGameOver = document.getElementById("popupGameOver");

    // sélection du <span> de la popup pour la refermer
    var fermerPopUp = document.getElementById("fermerPopUp");

    // Si (pacman.mort == true) alors affiche la Popup
    function gameOver()
    {
        popupGameOver.style.display = "block";
    }
    // condition d'affichage de la popup
    if( pacman.mort == true )
	{
        gameOver();
        document.getElementById("popupScore").innerHTML= score;
        document.getElementById("popupTimer").innerHTML= "00:00:00";
    }
    
    // Refermer la Popup
    fermerPopUp.onclick = function() 
    {
        popupGameOver.style.display = "none";
    }
    // en cliquant en dehors
    window.onclick = function(event) 
    {
        if (event.target == popupGameOver) 
        {
            popupGameOver.style.display = "none";
        }
    }
}
