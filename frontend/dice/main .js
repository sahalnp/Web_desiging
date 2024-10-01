var random = Math.floor(Math.random() * 6)+1;

var dice ="./images/dice" + random + ".png";

var images=document.querySelectorAll("img")[0];

images.setAttribute("src",dice); 

var random2 = Math.floor(Math.random() * 6)+1;
 
var dice2="./images/dice"+random2+".png";

var images=document.querySelectorAll("img")[1];

images.setAttribute("src",dice2); 

if(random>random2){
    document.querySelector("h1").innerHTML="1st won";
}
else if(random2>random){
     document.querySelector("h1").innerHTML="2nd  won"
}
else{
     document.querySelector("h1").innerHTML="Draw"
}

