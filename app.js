let userScore=0;
let compScore=0;
let user_score=document.querySelector('.user-score');
let comp_score=document.querySelector('.comp-score');
let display_message=document.querySelector('.display-message');
let rock=document.querySelector('#rock');
let paper=document.querySelector('#paper');
let scissor=document.querySelector('#scissor');

function compSelection(){
    let random = Math.floor(Math.random()*3);
    let comp_selection=['r','p','s'];
   
  return comp_selection[random];
}
 function convert(letter){
     if(letter==='r') return "Rock";
     if(letter==='p') return "Paper";
     return "Scissor";
 }
function win(user_selection,comp_selection){
    userScore ++;
    compScore=compScore;
    user_score.innerHTML=userScore;
    comp_score.innerHTML=compScore
    display_message.innerHTML = convert(user_selection) +  " (user) ".sub()+ " beats " + convert(comp_selection) + " (comp) ".sub() + " You Win.. ";
   

}
function lose(user_selection,comp_selection){
    userScore = userScore;
    compScore ++;
    user_score.innerHTML=userScore;
    comp_score.innerHTML=compScore
    display_message.innerHTML = convert(user_selection) +  " (user) ".sub()+ " lost to  " + convert(comp_selection) + " (comp) ".sub() + " You Lose.. ";


}
function draw(user_selection,comp_selection){
   
    user_score.innerHTML=userScore;
    comp_score.innerHTML=compScore
    display_message.innerHTML = convert(user_selection) +  " (user) ".sub()+ " equals " + convert(comp_selection) + " (comp) ".sub() + " It is a draw ";


}
function check_win_lose(user_selection, comp_selection){
    switch(user_selection+comp_selection){
        case 'rs':
        case 'sp':
        case 'pr':
        console.log("user_wins");
        win(user_selection,comp_selection);
        break;
        case 'rp':
        case 'sr':
        case 'ps':
        console.log("user_loses");
         lose(user_selection,comp_selection);
        break;
        case 'rr':
        case 'ss':
        case 'pp':
        console.log("user_draw");
         draw(user_selection,comp_selection);
        break;
        default:
    }
}
function game(user_selection){
   let comp_selection = compSelection();
   console.log(user_selection); 
   console.log(comp_selection);
   check_win_lose(user_selection, comp_selection );
    
}

rock.addEventListener('click',function(e){
    game('r');
});

paper.addEventListener('click',function(e){
    game('p');
});

scissor.addEventListener('click', function(e){
    game('s');
})
