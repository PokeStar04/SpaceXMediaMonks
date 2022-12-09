document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
        const spaceSuit = document.getElementById("myImageId");
        if(item.id == "blue2"){
            spaceSuit.src="./Astro-Gif/Bleu.gif";
        }
        if(item.id == "blue"){
            spaceSuit.src="./Astro-Gif/Bleu2.gif";
        }
        if(item.id == "purple2"){
            spaceSuit.src="./Astro-Gif/Purple2.gif";
        }
        if(item.id == "purple"){
            spaceSuit.src="./Astro-Gif/Purple.gif";
        }
        if(item.id == "green"){
            spaceSuit.src="./Astro-Gif/Vert.gif";
        }
        if(item.id == "green2"){
            spaceSuit.src="./Astro-Gif/Vert-Clair.gif";
        }
        if(item.id == "red"){
            spaceSuit.src="./Astro-Gif/Red.gif";
        }
        if(item.id == "red2"){
            spaceSuit.src="./Astro-Gif/Orange.gif";
        }
        if(item.id == "orange"){
            spaceSuit.src="./Astro-Gif/Jaune.gif";
        }
        if(item.id == "white"){
            spaceSuit.src="./Astro-Gif/White.gif";
        }
       console.log(item.id)
    })
})


