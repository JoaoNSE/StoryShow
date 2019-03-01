var i = 0;
var max = 3;

var stories;

function right() {
    if (i + 1 < max) {
        i = i + 1;
    } else {
        i = 0;
    }
    renderSlide()
}

function left() {
    if (i - 1 >= 0) {
        i = i - 1;
    } else {
        i = max-1;
    }
    renderSlide()
}

function renderSlide() {
    var canvas = document.getElementById("canvas");
    var bgIm = document.getElementById("bgimg");
    
    console.log(stories[i].imagePath)

    canvas.children[0].children[0].innerHTML = stories[i].story;
    bgIm.src = canvas.lastChild.src = "/imgs/" + stories[i].imagePath;
    
}

function getList() {
	$.ajax({
		type : "GET",
		dataType: "json",
		contentType: "application/json",
	    url : '/getList',
	    success : function(data) {
	    	stories = data;
	    	max = data.length;
	    	console.log("AQUI!2")
	    	renderSlide();
	    }
	})
	
	document.addEventListener('keydown', function(event) {
	    if(event.keyCode == 37) {
	        left();
	    }
	    else if(event.keyCode == 39) {
	        right();
	    }
	})
}

$(document).ready(getList());