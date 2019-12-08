// TODO: add mouse over
// TODO: check op safari
// TODO: multiple
var space = 300;
var speed = 3;
var direction = "left";

// no need to change anything below this line
/* --------------------------------- */

//var modifier = (direction === "left") ? -1 : 1;


// create a ticker div
var tickerdiv = $("<div>").attr("id","ticker");
tickerdiv.css({
    "display":"inline-block",
    "white-space": "nowrap",
    "position":"relative"
});

// add it to the container
$("#ticker-container").append(tickerdiv);
$("#ticker-container").css("overflow","hidden");

// move the ticker-text to the tickerdiv
$("#ticker-text").css({
    "display":"inline-block",
    "position":"absolute"
});
tickerdiv.append(  $("#ticker-text") );


// add ticker-texts untill the ticker-container is filled
//var i = 1;
var xpos    = $("#ticker-text").width() + space;
var totalw  = $("#ticker-text").width() + $("#ticker-container").width();
while (xpos < totalw ) {
    var clone = $("#ticker-text").clone();
    //clone.addClass("class-" + i);
    clone.css({
        "left":xpos,
      //  "color": '#'+Math.floor(Math.random()*16777215).toString(16)
    });
    tickerdiv.append( clone );

    xpos += clone.width() + space;
   // i++;
}
//$("#ticker-text").addClass("class-0");

animate();

function animate() {

    if (direction === "left") {
        var farright = (tickerdiv.children().length-1) * ($("#ticker-text").width() + space) + space;

        tickerdiv.children().each(function(){
            var pos = $(this).position().left - speed;
            $(this).css("left",pos);
            if ($(this).position().left < -($("#ticker-text").width())) {
                $(this).css("left",farright);
            }
        });
    }
    else {
        //var farleft = tickerdiv.children().first().position().left;
        var farleft = 0;

        tickerdiv.children().each(function(){
            var pos = $(this).position().left + speed;

            //console.log(pos)
            $(this).css("left",pos);
            if ($(this).position().left > $("#ticker-container").width()) {
                $(this).css("left", farleft - $("#ticker-text").width() - space );
                farleft = $(this).position().left;
            }
        });
    }


    window.requestAnimationFrame(animate);
}





var spanClass = document.getElementsByClassName('class');
var i = 0;
while(i < spanClass.length){
    spanClass[i].onmouseover = function change(){
        var i = 0;
        while(i < spanClass.length){
            spanClass[i].style.color = 'rgb(160, 62, 247)';
            i++;
        }
    }

    spanClass[i].onmouseout = function change(){
        var i = 0;
        while(i < spanClass.length){
            spanClass[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


var spanCardType = document.getElementsByClassName('cardtype');
var i = 0;
while(i < spanCardType.length){
    spanCardType[i].onmouseover = function change(){
        var i = 0;
        while(i < spanCardType.length){
            spanCardType[i].style.color = 'rgb(234, 131, 255)';
            i++;
        }
    }

    spanCardType[i].onmouseout = function change(){
        var i = 0;
        while(i < spanCardType.length){
            spanCardType[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


var spanPlay = document.getElementsByClassName('play');
var i = 0;
while(i < spanPlay.length){
    spanPlay[i].onmouseover = function change(){
        var i = 0;
        while(i < spanPlay.length){
            spanPlay[i].style.color = 'rgb(255, 0, 222)';
            i++;
        }
    }

    spanPlay[i].onmouseout = function change(){
        var i = 0;
        while(i < spanPlay.length){
            spanPlay[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


var spanHero = document.getElementsByClassName('hero');
var i = 0;
while(i < spanHero.length){
    spanHero[i].onmouseover = function change(){
        var i = 0;
        while(i < spanHero.length){
            spanHero[i].style.color = 'rgb(22, 66, 255)';
            i++;
        }
    }

    spanHero[i].onmouseout = function change(){
        var i = 0;
        while(i < spanHero.length){
            spanHero[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


var spanAHero = document.getElementsByClassName('Ahero');
var i = 0;
while(i < spanAHero.length){
    spanAHero[i].onmouseover = function change(){
        var i = 0;
        while(i < spanAHero.length){
            spanAHero[i].style.color = 'rgb(205, 55, 181)';
            i++;
        }
    }

    spanAHero[i].onmouseout = function change(){
        var i = 0;
        while(i < spanAHero.length){
            spanAHero[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


var spanEmote = document.getElementsByClassName('Emote');
var i = 0;
while(i < spanEmote.length){
    spanEmote[i].onmouseover = function change(){
        var i = 0;
        while(i < spanEmote.length){
            spanEmote[i].style.color = 'rgb(62, 30, 153)';
            i++;
        }
    }

    spanEmote[i].onmouseout = function change(){
        var i = 0;
        while(i < spanEmote.length){
            spanEmote[i].style.color = 'black';
            i++;
        }
    }

    i++;
}


// document.getElementById("tempDiv").onclick = function(e) {
//   e.target.style.visibility = 'hidden';
// }
//
// document.getElementById("tempDiv1").onclick = function(e) {
//   e.target.style.visibility = 'hidden';
// }
//
// document.getElementById("tempDiv2").onclick = function(e) {
//   e.target.style.visibility = 'hidden';
// }

// get width & height of random pane
var pane_width = $(".random-pane").width() - $(".grid-item").width();
var pane_height = $(".random-pane").height() - $(".grid-item").height();

// loop through all the items in the random-pane
$(".random-pane").children().each( function(){

  // get a random x position
  var x = Math.round(Math.random() * pane_width);
  // get a random y position
  var y =  Math.round(Math.random() * pane_height);

  // change the position of the item
  $(this).css("top",y);
  $(this).css("left",x);

  // add hover functionality, to move item to the top on hover
  $(this).on("mouseover",function(){
    // this is a small hack, removing it and adding it again moves it to the top
    $(this).parent().append(this);
  });

});





//
//
//
//
// // TODO: add mouse over
// // TODO: check op safari
// // TODO: multiple
// var space = 10;
// var speed = 2;
// var direction = "right";
//
// // no need to change anything below this line
// /* --------------------------------- */
//
// //var modifier = (direction === "left") ? -1 : 1;
//
//
// // create a ticker div
// var tickerdiv = $("<div>").attr("id","ticker");
// tickerdiv.css({
//     "display":"inline-block",
//     "white-space": "nowrap",
//     "position":"relative"
// });
//
// // add it to the container
// $("#ticker-container2").append(tickerdiv);
// $("#ticker-container2").css("overflow","hidden");
//
// // move the ticker-text to the tickerdiv
// $("#ticker-text2").css({
//     "display":"inline-block",
//     "position":"absolute"
// });
// tickerdiv.append(  $("#ticker-text2") );
//
//
// // add ticker-texts untill the ticker-container is filled
// //var i = 1;
// var xpos    = $("#ticker-text2").width() + space;
// var totalw  = $("#ticker-text2").width() + $("#ticker-container2").width();
// while (xpos < totalw ) {
//     var clone = $("#ticker-text2").clone();
//     //clone.addClass("class-" + i);
//     clone.css({
//         "left":xpos,
//       //  "color": '#'+Math.floor(Math.random()*16777215).toString(16)
//     });
//     tickerdiv.append( clone );
//
//     xpos += clone.width() + space;
//    // i++;
// }
// //$("#ticker-text").addClass("class-0");
//
// animate();
//
// function animate() {
//
//     if (direction === "left") {
//         var farright = (tickerdiv.children().length-1) * ($("#ticker-text2").width() + space) + space;
//
//         tickerdiv.children().each(function(){
//             var pos = $(this).position().left - speed;
//             $(this).css("left",pos);
//             if ($(this).position().left < -($("#ticker-text2").width())) {
//                 $(this).css("left",farright);
//             }
//         });
//     }
//     else {
//         //var farleft = tickerdiv.children().first().position().left;
//         var farleft = 0;
//
//         tickerdiv.children().each(function(){
//             var pos = $(this).position().left + speed;
//
//             //console.log(pos)
//             $(this).css("left",pos);
//             if ($(this).position().left > $("#ticker-container2").width()) {
//                 $(this).css("left", farleft - $("#ticker-text2").width() - space );
//                 farleft = $(this).position().left;
//             }
//         });
//     }
//
//
//     window.requestAnimationFrame(animate);
// }
