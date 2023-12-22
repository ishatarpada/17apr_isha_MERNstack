let sun = document.getElementById("btn-1");
        let moon = document.getElementById("btn-2");

        sun.addEventListener('click', function () {
            let main = document.getElementById("main");
            main.style.backgroundColor = "white";
            let background = document.getElementById("background");
            background.style.color = "black";
            let btns = document.querySelectorAll(".btn");
            btns.forEach(btn => {
                btn.style.backgroundColor = "black";
                btn.style.color = "white";
            });
            sun.style.display = "none";
            moon.style.display = "block";
        });

        moon.addEventListener('click', function () {
            let main = document.getElementById("main");
            main.style.backgroundColor = "black";
            let background = document.getElementById("background");
            background.style.color = "white";
            let btns = document.querySelectorAll(".btn");
            btns.forEach(btn => {
                btn.style.backgroundColor = "white";
                btn.style.color = "black";
            });
            sun.style.display = "block";
            moon.style.display = "none";
        });