var para = "",
    i = "",
    targetdiv = "";
$(document).ready(function() {
    mainDivCreation();
      // return ImageFetching(i);

    // DraggableImage();

});

function mainDivCreation() {

    for (var i = 1; i <= 64; i++) {

        para = para + "<div id='innerDiv" + i + "'></div>";

        $(".chess-board")[0].classList.add("red");

    }
    return childDivCreation();
}

function childDivCreation() {
    $(".chess-board")[0].innerHTML = para;
    for (var i = 1; i <= 64; i++) {

        $("#innerDiv" + i)[0].classList.add("child");
        //$(".innerDiv" + i).eq(0).droppable();


        if ((i >= 1 && i < 9) || (i >= 17 && i < 25) || (i >= 33 && i < 41) || (i >= 49 && i < 57)) {
            if (i % 2 == 0)


                $("#innerDiv" + i).addClass("whiteDiv");
            if (i % 2 == 1)


                $("#innerDiv" + i).addClass("blackDiv");
        }
        if ((i >= 9 && i < 17) || (i >= 25 && i < 33) || (i >= 41 && i < 49) || (i >= 57 && i < 65)) {
            if (i % 2 == 0)


                $("#innerDiv" + i).addClass("blackDiv");
            if (i % 2 == 1)


                $("#innerDiv" + i).addClass("whiteDiv");
        }


    }

    return makingChildDivDroppable();


}

function makingChildDivDroppable() {
    $('.child').droppable({
        //  disabled:true

        //  accept: $("#innerDiv" + targetdiv)
        drop: function(event, ui) {
            if (!($(ui.draggable).hasClass('king'))) {
                $(ui.draggable).appendTo($(this)).css({
                    top: 0,
                    left: 0
                });
            } else {
                ($(ui.draggable).clone()).appendTo($(this)).css({
                    top: 0,
                    left: 0,
                    margin: -6
                });
            }
        }
    });


    return findTargetDiv();
}

function findTargetDiv() {

    $("#go").click(function() {
        // var targetdiv=$("#chessdiv").val();
        var targetdiv = parseInt($("#chessdiv").val(), 10);
        $("#chessdiv").val("");
        //var add=targetdiv+1;
        // console.log(targetdiv+1);
        if (targetdiv > 64) {
            alert("out of number");
        }
        $("#innerDiv" + targetdiv).html("<img src='chessimg.jpg' style='width: 75%;height:80%;margin: 10px;' id='img" + targetdiv + "'>");


        $("#innerDiv" + targetdiv).children().draggable({


            revert: true
        });


        return childImageClick(targetdiv);
    });


}
$("#imgg").draggable({
    helper: "clone"
    // disabled:true


});



function childImageClick(n) {
    var right = n + 1;
    var left = n - 1;
    var up = n - 8;
    var low = n + 8;

    $("#innerDiv" + n).on("dragstart", function() {

        $("#innerDiv" + right).addClass("highlight");
        $("#innerDiv" + left).addClass("highlight");
        $("#innerDiv" + up).addClass("highlight");
        $("#innerDiv" + low).addClass("highlight");
        $('.child').droppable("disable");

        $('.child.highlight').droppable("enable");
        $(this).droppable("enable");





    });
    $('.child').on("dragstop", function() {

        $("#innerDiv" + right).removeClass("highlight");
        $("#innerDiv" + left).removeClass("highlight");
        $("#innerDiv" + up).removeClass("highlight");
        $("#innerDiv" + low).removeClass("highlight");


    });

}

    // function ImageFetching(){
    //
    //   var arrimage=["image\blackbishop.png","blackhorse.png","blackking.jpg","blackknight.png","blackpawn.png","blackqueen.png","blackrook.png"];
    //    var arrlength=arrimage.length;
    //    var path = " D:\chessgame\send to home\send to home\Image";
    //    for(var i=0;i<arrlength;i++)
    //     {
    //       imgName = path + arrimage[i];
    //
    //      console.log(imgName);
    //    }
    //
    //   }
