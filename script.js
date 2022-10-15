// for 1
let startInput = document.querySelector(".startInput");
let startBtn = document.querySelector(".startBtn");
let wanna = document.querySelector(".wanna");
let error = document.querySelector(".error");
// player 1
let startInputTwo = document.querySelector(".startInputTwo");
let startBtnTwo = document.querySelector(".startBtnTwo");
let wannaTwo = document.querySelector(".wannaTwo");
let errorTwo = document.querySelector(".errorTwo");
let player1name = document.querySelector(".player1name");
let playerOne = "Lose";
// player 2 name
let wannaThree = document.querySelector(".wannaThree");
let startInputThree = document.querySelector(".startInputThree");
let startBtnThree = document.querySelector(".startBtnThree");
let errorThree = document.querySelector(".errorThree");
// player 2 number
let wannaFour = document.querySelector(".wannaFour");
let startInputFour = document.querySelector(".startInputFour");
let startBtnFour = document.querySelector(".startBtnFour");
let errorFour = document.querySelector(".errorFour");
let chancestyle =document.querySelector(".chancestyle");
let chance =document.querySelector(".chance");
let player2name = document.querySelector(".player2name");
let playerTwo = "Lose";
// player 3 name
let wannaFive = document.querySelector(".wannaFive");
let startInputFive = document.querySelector(".startInputFive");
let startBtnFive = document.querySelector(".startBtnFive");
let errorFive = document.querySelector(".errorFive");
// player 2 number
let wannaSix = document.querySelector(".wannaSix");
let startInputSix = document.querySelector(".startInputSix");
let startBtnSix = document.querySelector(".startBtnSix");
let errorSix = document.querySelector(".errorSix");
let chancestyle1 =document.querySelector(".chancestyle1");
let chance1 =document.querySelector(".chance1");
let player3name = document.querySelector(".player3name");
let playerThree = "Lose";
// result
let guessingNumber= document.querySelector(".guessingNumber");
let theResult= document.querySelector(".theResult");

let player1= document.querySelector(".player1");
let player2= document.querySelector(".player2");
let player3= document.querySelector(".player3");

let p1= document.querySelector(".p1");
let p2= document.querySelector(".p2");
let p3= document.querySelector(".p3");

let r1= document.querySelector(".wORl1");
let r2= document.querySelector(".wORl2");
let r3= document.querySelector(".wORl3");

let count = 5;
let count1= 5;

startBtn.addEventListener("click", ()=>{
    let startInputValue = startInput.value.trim();
    if(startInputValue == ""){
        error.style.display = "block";
        error.innerHTML ="Please Enter  Your Name";
    }
    else{
        if(!(startInput.value-10000000000)){
            startInput.style.display = "none";
            startBtn.style.display = "none";
            wanna.style.display = "none";
            error.style.display = "none";
    
            startInputTwo.style.display = "block";
            startBtnTwo.style.display = "block";
            wannaTwo.style.display = "block";
            player1name.innerHTML = startInput.value
        }else{
            error.style.display = "block";
            error.innerHTML= "Please Enter a Name Not a Number"
        }
    }
});
startBtnTwo.addEventListener("click", ()=>{
    if(startInputTwo.value<1 || startInputTwo.value>10){
        errorTwo.style.display = "block";
        errorTwo.innerHTML = "The number must be between 1 and 10";
    }
    else{
        if(startInputTwo.value-15){
            startInputTwo.style.display = "none";
            startBtnTwo.style.display = "none";
            wannaTwo.style.display = "none";
            errorTwo.style.display = "none";

            wannaThree.style.display = "block";
            startInputThree.style.display = "block";
            startBtnThree.style.display = "block";
        }
        else{
            errorTwo.style.display = "block";
            errorTwo.innerHTML = "The value must be a number";
        }
    }
});

startBtnThree.addEventListener("click", ()=>{
    let startInputThreeValue = startInputThree.value.trim();
    if(startInputThreeValue == ""){
        error.style.display = "block";
        errorThree.innerHTML ="You entered empty value";
    }
    else{
        startInputThree.style.display = "none";
        startBtnThree.style.display = "none";
        wannaThree.style.display = "none";
        errorThree.style.display = "none";

        startInputFour.style.display = "block";
        startBtnFour.style.display = "block";
        wannaFour.style.display = "block";
        chancestyle.style.display ="block";
        player2name.innerHTML = startInputThree.value

    }
});

startBtnFour.addEventListener("click", ()=>{
    if(startInputFour.value<1 || startInputFour.value>10){
        errorFour.style.display = "block";
        errorFour.innerHTML = "The number must be between 1 and 10";
    }
    else{
        if(startInputFour.value-15){
            if(startInputTwo.value == startInputFour.value){
                playerTwo= "Win";
                count--;
                chance.innerHTML = count;
                if(count==0){
                    compareWithSecond()
                }
            }
            else{
                count--;
                chance.innerHTML = count;
                if(count==0){
                    compareWithSecond()
                }
            }
        }
        else{
            errorFour.style.display = "block";
            errorFour.innerHTML = "The value must be a number";
        }
    }
});
function compareWithSecond(){
    startInputFour.style.display = "none";
            startBtnFour.style.display = "none";
            wannaFour.style.display = "none";
            errorFour.style.display = "none";
            chancestyle.style.display ="none";

            startInputFive.style.display = "block";
            startBtnFive.style.display = "block";
            wannaFive.style.display = "block";
}
startBtnFive.addEventListener("click",()=>{
    let startInputFiveValue = startInputFive.value.trim();
    if(startInputFiveValue == ""){
        errorFive.style.display = "block";
        errorFive.innerHTML ="You Entered Empty Value";
    }
    else{
        startInputFive.style.display = "none";
        startBtnFive.style.display = "none";
        wannaFive.style.display = "none";
        errorFive.style.display = "none";

        startInputSix.style.display = "block";
        startBtnSix.style.display = "block";
        wannaSix.style.display = "block";
        chancestyle1.style.display ="block";
        player3name.innerHTML = startInputFive.value

    }
});
startBtnSix.addEventListener("click", ()=>{
    if(startInputSix.value<1 || startInputSix.value>10){
        errorSix.style.display = "block";
        errorSix.innerHTML = "The number must be between 1 and 10";
    }
    else{
        if(startInputSix.value-15){
           
            if(startInputTwo.value == startInputSix.value){
                playerThree= "Win";
                count1--;
                chance1.innerHTML = count1;
                if(count1==0){
                    CompareWithThird()
                }
            }
            else{
                count1--;
                chance1.innerHTML = count1;
                if(count1==0){
                    CompareWithThird()
                }
            }
        }
        else{
            errorSix.style.display = "block";
            errorSix.innerHTML = "The value must be a number";
        }
    }
});

function CompareWithThird(){
    startInputSix.style.display = "none";
            startBtnSix.style.display = "none";
            wannaSix.style.display = "none";
            errorSix.style.display = "none";
            chancestyle1.style.display ="none";

            player1.style.display = "block";
            player2.style.display = "block";
            player3.style.display = "block";
            theResult.style.display = "block";

            p1.innerHTML = startInput.value;
            p2.innerHTML = startInputThree.value;
            p3.innerHTML = startInputFive.value;

            if (playerTwo == "Lose" && playerThree == "Lose"){
                playerOne ="Win";
            }
            r1.innerHTML = playerOne;
            r2.innerHTML = playerTwo;
            r3.innerHTML = playerThree;
            guessingNumber.innerHTML = startInputTwo.value;
}