const opt1 = document.getElementById("option1");
const opt2 = document.getElementById("option2");
const opt3 = document.getElementById("option3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 100)
    var num2 = Math.floor(Math.random() * 100)
    var dummyNum1 = Math.floor(Math.random() * 100)
    var dummyNum2 = Math.floor(Math.random() * 100)

    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 + num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    opt1.innerHTML = answer;
    opt2.innerHTML = dummyNum1;
    opt3.innerHTML = dummyNum2;
}

opt1.addEventListener("click", function(){
    if(opt1.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

opt2.addEventListener("click", function(){
    if(opt2.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

opt3.addEventListener("click", function(){
    if(opt3.innerHTML == answer){
        generate_equation();
    }
    else{
        audio.play();
    }
});

generate_equation();