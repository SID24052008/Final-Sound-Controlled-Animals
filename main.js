function start_classification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AdXgHdQVP/model.json',modelReady)
    img='Ear.gif';
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog= 0;
var cat= 0;
var cow= 0;
var lion= 0;


function gotResults(error,results){
    if(error){
        console.error(error);
    }
        else {
            console.log(results);
            random_number_r=Math.floor(Math.random()*255)+1;
            random_number_g=Math.floor(Math.random()*255)+1;
            random_number_b=Math.floor(Math.random()*255)+1;
            
            document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
            document.getElementById("result_confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
            document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        }
}

img1= document.getElementById('cat');
img2= document.getElementById('cow');
img3= document.getElementById('dog');
img4= document.getElementById('lion');

if (results[0].label=="Meowing"){
    img1.src='cat.jpg';
    cat= cat+1;
} else if(results[0].label=="Mooing"){
    img2.src='cow.jpg';
    cow= cow+1;
} else if(results[0].label=="Barking"){
    img3.src='dog.jpg';
    dog= dog+1;
} else if(results[0].label=="Roar"){
    img4.src='lion.jpg';
    lion= lion+1;
} else{
    img.src= "Ear.gif";
}