    for (let i = 0; i <= 6; i++) {
        document
            .getElementsByTagName("button")
            [i].addEventListener("click", function () {
                var btn = this.innerHTML.toLowerCase();
                var audio = new Audio("./sounds/tom-" + (i + 1) + ".mp3");
                audio.play();
                mine(btn);
                
            }); 
    }

    document.addEventListener("keydown", function (event) {
        mine(event.key);
    });

    function mine(key) {
        let audio;
        switch (key) {
            case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                break;
            case "j":
                audio = new Audio("./sounds/tom-5.mp3");
                break;
            case "k":
                audio = new Audio("./sounds/tom-6.mp3");
                break;
            case "l":
                audio = new Audio("./sounds/tom-7.mp3");
                break;
            default:
                console.log("error");
                return;
        }
        audio.play();
        anime(key);  // Call the anime function to add the class
    }

    function anime(currentkey) {
        var click_event= document.querySelector("." + currentkey); 
        click_event.classList.add("pent");
            setTimeout(function(){ // used to remove click event pent
                click_event.classList.remove("pent");
            },100 )
    }
