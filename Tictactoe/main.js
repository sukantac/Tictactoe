 var smallDiv="";

  var divCollection=document.getElementsByClassName("child");
 // divCollection[0].addEventListener("click", startPlay);

 window.addEventListener("load",DivCreation);
 //CREATION OF SMALL DIV
 function DivCreation(){

	 for(var i=0;i<=8;i++)
	 {

		// para = para + "<div class='innerDiv"+i+"'></div>";
		 smallDiv=smallDiv + "<div id='innerDiv"+i+"'></div>";



 }
   document.getElementsByClassName("main")[0].innerHTML=smallDiv;

    for(var i=0;i<=8;i++)
	 {
		  document.getElementById("innerDiv" + i).classList.add("child");
		   document.getElementById("innerDiv" + i).removeEventListener("click" , startPlay,false);
		  document.getElementById("innerDiv" + i).addEventListener("click", startPlay,false);
	 }

 }

 //STARTING THE GAME
               var click=0;
    function startPlay(){
		          click++;
				  if((click%2===1)){
		     this.classList.add("cross");
				  }
				  else{
					 this.classList.add("round");
				  }
                //STOPPING THE DOUBLE CLICK

                if(click>=1){

                  this.removeEventListener("click" , startPlay,false);
                }


				  //PLAYING THE GAME ACCORDING TO ROW
				  //first row
					if ((innerDiv0.classList.contains('cross'))
						&& (innerDiv1.classList.contains('cross'))
							&& (innerDiv2.classList.contains('cross')))

                                  {
							alert("cross win");
              // document.getElementsByClassName("main").style.visibility = "none";

							}



							if((innerDiv0.classList.contains('round'))
						&& (innerDiv1.classList.contains('round'))
							&& (innerDiv2.classList.contains('round')))
							{

								alert("round win");
							}
							//Second row
							if ((innerDiv3.classList.contains('cross'))
						&& (innerDiv4.classList.contains('cross'))
							&& (innerDiv5.classList.contains('cross')))

                                  {
							alert("cross  win");

							}



							if((innerDiv3.classList.contains('round'))
						&& (innerDiv4.classList.contains('round'))
							&& (innerDiv5.classList.contains('round')))
							{

								alert("round  win");
							}
							//Third row
							if ((innerDiv6.classList.contains('cross'))
						&& (innerDiv7.classList.contains('cross'))
							&& (innerDiv8.classList.contains('cross')))

                                  {
							alert("cross  win");

							}



							if((innerDiv6.classList.contains('round'))
						&& (innerDiv7.classList.contains('round'))
							&& (innerDiv8.classList.contains('round')))
							{

								alert("round  win");
							}

							//PLAYING THE GAME ACCORDING TO COLUMN

						   //First column

		                             if ((innerDiv0.classList.contains('cross'))
						&& (innerDiv3.classList.contains('cross'))
							&& (innerDiv6.classList.contains('cross')))

                                  {
							alert("cross win");

							}



							if((innerDiv0.classList.contains('round'))
						&& (innerDiv3.classList.contains('round'))
							&& (innerDiv6.classList.contains('round')))
							{

								alert("round win");
							}

							//Second column
							if ((innerDiv1.classList.contains('cross'))
						&& (innerDiv4.classList.contains('cross'))
							&& (innerDiv7.classList.contains('cross')))

                                  {
							alert("cross win");

							}



							if((innerDiv1.classList.contains('round'))
						&& (innerDiv4.classList.contains('round'))
							&& (innerDiv7.classList.contains('round')))
							{

								alert("round win");
							}
							//Third Column
							if ((innerDiv2.classList.contains('cross'))
						&& (innerDiv5.classList.contains('cross'))
							&& (innerDiv8.classList.contains('cross')))

                                  {
							alert("cross win");

							}



							if((innerDiv2.classList.contains('round'))
						&& (innerDiv5.classList.contains('round'))
							&& (innerDiv8.classList.contains('round')))
							{

								alert("round win");
							}
							//PLAYING THE GAME DIAGONALLY

						     //First Diagonal
							   if ((innerDiv0.classList.contains('cross'))
						&& (innerDiv4.classList.contains('cross'))
							&& (innerDiv8.classList.contains('cross')))

                                  {
							alert("cross  win");

							}



							if((innerDiv0.classList.contains('round'))
						&& (innerDiv4.classList.contains('round'))
							&& (innerDiv8.classList.contains('round')))
							{

								alert("round  win");
							}

							//Second Diagonal

							if ((innerDiv2.classList.contains('cross'))
						&& (innerDiv4.classList.contains('cross'))
							&& (innerDiv6.classList.contains('cross')))

                                  {
							alert("cross win");

							}



							if((innerDiv2.classList.contains('round'))
						&& (innerDiv4.classList.contains('round'))
							&& (innerDiv6.classList.contains('round')))
							{

								alert("round  win");
							}




	}
