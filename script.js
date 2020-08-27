let question = document.getElementById("question");
let awnsers1 = document.getElementById("awnsers1");
let awnsers2 = document.getElementById("awnsers2");
let awnsers3 = document.getElementById("awnsers3");
let awnsers4 = document.getElementById("awnsers4");
let indexNumber = document.getElementById('index');
let btnNext = document.getElementById("nextbtn");
let submit = document.getElementById("submit");
let radiobtn1 = document.getElementById('awnser1');
let radiobtn2 = document.getElementById('awnser2');
let radiobtn3 = document.getElementById('awnser3');
let radiobtn4 = document.getElementById('awnser4');
let score = document.getElementById("score");
let anwsers = document.querySelector(".anwser");
let scoreEnd = document.getElementById('score-end');
let Submited = document.getElementById("submited");
let loading = document.getElementById("loading");
let index = 0;
let length = '';
let correct_answer = null;
let btnCorrectAnswer = "df";
let correct = 0;
let incorrect = 0;
let clicked = true;

function fatch(){
    return response = fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple")
    .then(res => res.json())
    .then(data => {
            questionlist = [
                data.results[index]['incorrect_answers'][0],
                data.results[index]['incorrect_answers'][1],
                data.results[index]['incorrect_answers'][2],
                data.results[index]['correct_answer']
            ]
            correct_answer = questionlist[3];
            // shffled answers
            questionlist = questionlist.sort(() => Math.random() - 0.5)
            length = data.results.length;
            // end shffle

            question.innerHTML = data.results[index]['question'];
            awnsers1.innerHTML = questionlist[0];
            awnsers2.innerHTML = questionlist[1];
            awnsers3.innerHTML = questionlist[2];
            awnsers4.innerHTML = questionlist[3];

            indexNumber.innerHTML = index+1 + "/" + length;
            
    })
}
fatch();
// next button
btnNext.addEventListener("click",function(){
    if (index >= 8) {
        btnNext.disabled = true;
        submit.disabled = false;
        index ++;
        awnsers1.style.background = "white";
        awnsers2.style.background = "white";
        awnsers3.style.background = "white";
        awnsers4.style.background = "white";
        clicked = "";
        clicked = true;
        fatch();
    }
    else{
        index ++;
        awnsers1.style.background = "white";
        awnsers2.style.background = "white";
        awnsers3.style.background = "white";
        awnsers4.style.background = "white";
        clicked = "";
        clicked = true;
        fatch();
    }
})
awnsers1.addEventListener("click",function clicked_anwser(e){
    radiobtn1.click();
})
awnsers2.addEventListener("click",function clicked_anwser(e){
    radiobtn2.click();
})
awnsers3.addEventListener("click",function clicked_anwser(e){
    radiobtn3.click();
})
awnsers4.addEventListener("click",function clicked_anwser(e){
    radiobtn4.click();
})


function GetChecked(obj){
    if (clicked == true) {
        switch (obj.id) {
            case "awnser1":
                if (awnsers1.innerHTML == correct_answer) {
                    awnsers1.style.background = 'green';
                    correct ++;
                    clicked = "";
                    clicked = false;
                }else{
                    awnsers1.style.background = 'red';
                    clicked = "";
                    clicked = false;
                }
                break;
            case "awnser2":
                if (awnsers2.innerHTML == correct_answer) {
                    awnsers2.style.background = 'green';
                    correct ++;
                    clicked = "";
                    clicked = false;
                }else{
                    awnsers2.style.background = 'red';
                    clicked = "";
                    clicked = false;
                }
                break;    
            case "awnser3":
                if (awnsers3.innerHTML == correct_answer) {
                    awnsers3.style.background = 'green';
                    correct ++;
                    clicked = "";
                    clicked = false;
                }else{
                    awnsers3.style.background = 'red';
                    clicked = "";
                    clicked = false;
                }
                break;
            case "awnser4":
                if (awnsers4.innerHTML == correct_answer) {
                    awnsers4.style.background = 'green';
                    correct ++;
                    clicked = "";
                    clicked = false;
                }else{
                    awnsers4.style.background = 'red';
                    clicked = "";
                    clicked = false;
                }
                break;
        }
        if (awnsers1.innerHTML == correct_answer) {
            awnsers1.style.background = 'green';
        }
        if (awnsers2.innerHTML == correct_answer) {
            awnsers2.style.background = 'green';
        }
        if (awnsers3.innerHTML == correct_answer) {
            awnsers3.style.background = 'green';
        }
        if (awnsers4.innerHTML == correct_answer) {
            awnsers4.style.background = 'green';
        }
        score.innerHTML = correct;
    }
 
}

function submited(){
    Submited.classList.add("display-flex");
    scoreEnd.innerHTML = correct;
}
function refresh(){
    location.reload();
}
