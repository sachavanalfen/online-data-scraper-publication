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
            spanCardType[i].style.color = 'red';
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
            spanPlay[i].style.color = 'green';
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
            spanHero[i].style.color = 'blue';
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
            spanAHero[i].style.color = 'orange';
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

document.getElementById("tempDiv").onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

document.getElementById("tempDiv1").onclick = function(e) {
  e.target.style.visibility = 'hidden';
}

document.getElementById("tempDiv2").onclick = function(e) {
  e.target.style.visibility = 'hidden';
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  // console.log(document.getElementById("myBtn").dataset.word);
  modal.firstChild.append(btn.dataset.word);
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
