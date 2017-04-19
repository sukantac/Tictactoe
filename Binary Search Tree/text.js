   var Text = function(txtxpos, txtypos, value) {

       var textelement = document.createElementNS("http://www.w3.org/2000/svg", 'text');//To create a text
       textelement.setAttribute('dx', txtxpos-10);
       textelement.setAttribute('dy', txtypos);
       txtnode = document.createTextNode(value);
       textelement.appendChild(txtnode);
       document.getElementById("mySVG").appendChild(textelement);




   };
