var i = 0;
        var max = 3;

        var stories = new Array(4);
        stories[0] = "#HARD_WORK";
        stories[1] = "LINDA DEMAIS";
        stories[2] = "FOFA DEMAAAAAAAAAAAAIS";
        stories[3] = "dormir faz mal";

        function right() {
            if (i + 1 <= max) {
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
                i = max;
            }
            renderSlide()
        }

        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 37) {
                left();
            }
            else if(event.keyCode == 39) {
                right();
            }
        })

        function renderSlide() {
            var canvas = document.getElementById("canvas");
            var bgIm = document.getElementById("bgimg");

            canvas.children[0].children[0].innerHTML = stories[i];
            bgIm.src = canvas.lastChild.src = "/imgs/"+i+".jpg";
        }

        renderSlide()