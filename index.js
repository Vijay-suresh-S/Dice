function rollDice(){
    let dice1;
    let dice2;
    
    let num1=Math.ceil(Math.random()*6);
    let num2=Math.ceil(Math.random()*6);

        switch(num1){
            case 1: dice1="./images/1dice.jpg";
            break;
            case 2: dice1="./images/2dice.jpg";
            break;
            case 3: dice1="./images/3dice.jpg";
            break;
            case 4: dice1="./images/4dice.jpg";
            break;
            case 5: dice1="./images/5dice.jpg";
            break;
            case 6: dice1="./images/6dice.jpg";
            break;
            default: dice1="./images/6dice.jpg";
        }

        
        switch(num2){
            case 1: dice2="./images/1dice.jpg";
            break;
            case 2: dice2="./images/2dice.jpg";
            break;
            case 3: dice2="./images/3dice.jpg";
            break;
            case 4: dice2="./images/4dice.jpg";
            break;
            case 5: dice2="./images/5dice.jpg";
            break;
            case 6: dice2="./images/6dice.jpg";
            break;
            default: dice2="./images/6dice.jpg";
        };

        console.log("hi"+ dice1+" "+dice2);

        document.querySelector(".dice1").setAttribute("src",dice1);
        document.querySelector(".dice2").setAttribute("src",dice2);

        if(num1===num2)
        {
            document.querySelector("h1").textContent="Match Draw";           
        }else if(num1>num2)
        {
            document.querySelector("h1").textContent="player 1 wins"; 
        }
        else{
            document.querySelector("h1").textContent="player 2 wins"; 
        }
}

rollDice();