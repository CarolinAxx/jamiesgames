const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation(){
    var num1 = Math.floor(Math.random() * 30)
    var num2 = Math.floor(Math.random() * 30)
    var dummyNum1 = Math.floor(Math.random() * 30)
    var dummyNum2 = Math.floor(Math.random() * 30)

    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 + num2;

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyNum1, dummyNum2];

    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.random() * (i + 1), 1)[0]);
    }

    opt1.innerHTML = switchAnswers[0];
    opt2.innerHTML = switchAnswers[1];
    opt3.innerHTML = switchAnswers[2];
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