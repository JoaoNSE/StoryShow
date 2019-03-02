var i = 0;
var last_id = 0;
var max = 3;

var stories;

function right() {
    if (i + 1 < max) {
        i = i + 1;
    } else {
        i = 0;
    }
    updateList()
}

function left() {
    if (i - 1 >= 0) {
        i = i - 1;
    } else {
        i = max-1;
    }
    updateList()
}

function renderSlide() {
    var canvas = document.getElementById("canvas");
    var bgIm = document.getElementById("bgimg");
    
    if (max === 0) {
    	stories = Array(1);
    	stories[0] = {imagePath: "no_image.png", storyText: "sem fotos ainda"};
    	i = 0;
    } else {
    	console.log(stories);
    	last_id = stories[i].id;
    	
    }
    
    canvas.children[0].children[0].innerHTML = stories[i].storyText;
    console.log(stories[i]);
    if(stories[i].storyText === null || stories[i].storyText === "") {
    	$("#story").hide();
    	$("#story").children().hide();
    	
    } else {
    	$("#story").show();
    	$("#story").children().show();
    }
    
    bgIm.src = canvas.lastChild.src = "/imgs/" + stories[i].imagePath;
    
}

function updateList() {
	$.ajax({
		type : "GET",
		dataType: "json",
		contentType: "application/json",
	    url : '/getList',
	    success : function(data) {
	    	stories = data;
	    	max = data.length;
	    	if (max < 0) {
	    		i = stories.findIndex(function(obj){return obj.id == last_id});
	    		if (i === -1) {
	    			i = 0;
	    		}
	    	}
	    	
	    	renderSlide();
	    }
	})
}

function main() {
	updateList();

	setInterval(right, 5000);
}

$(document).ready(main());

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        left();
    }
    else if(event.keyCode == 39) {
        right();
    }
})