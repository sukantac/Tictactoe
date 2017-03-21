
 var path = "image/";
$(document).ready(function() {
     BlackImageFetching();
      WhiteImageFetching();

});

function BlackImageFetching() {
    var arrbimage = ["blackbishop.png", "blackhorse.png", "blackking.jpg", "blackknight.png", "blackpawn.png", "blackqueen.png", "blackrook.png","horsepic.jpg"];
    var arrlength = arrbimage.length;


    for (var i = 1; i<=arrlength; i++) {
       var j=i+8;
        imgName = path + arrbimage[i-1];
        $("#innerDiv" + i).html("<img src='" + imgName + "' style='width: 75%;height:80%;margin: 10px;' >").children().draggable();
     $("#innerDiv" + j).html("<img src='secondrow.png' style='width: 75%;height:80%;margin: 10px;' id='img" + j + "'>").children().draggable();
        console.log(imgName);
    }

}

   function WhiteImageFetching(){
   var arrwimage = ["whitebishop.png", "whitehorse.png", "whiteking.png", "whiteknight.png", "whitepawn.png", "whitequeen.png", "whiterook.png","horsepic.jpg"];
  var arrwlength=arrwimage.length;
  for (var i = 1; i<=arrwlength; i++) {
     var k=i+56;
     var l=i+48
      imagName = path + arrwimage[i-1];
      $("#innerDiv" + k).html("<img src='" + imagName + "' style='width: 75%;height:80%;margin: 10px;' >").children().draggable();
  $("#innerDiv" + l).html("<img src='secondwrow.png' style='width: 75%;height:80%;margin: 10px;' id='img" + l + "'>").children().draggable();
      console.log(imagName);
  }

   }
