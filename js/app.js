'use strict';
let userName = prompt('please enter Name');
alert(`welcome to my website ${userName} let is enjoy now you will be discover me by answer in yes or no or y or n okay `);
let score = 0;
function game(question,correctAnswer,uncorrectAnswer){
  let userInput ;
  do{
    userInput = prompt(question).toLowerCase();
  }while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n' );
  if(userInput === 'yes' || userInput === 'y'){
    alert(correctAnswer);
    score++;
  }
  else {
    alert(uncorrectAnswer);
  }
}
game('my favorite place is turkey','well done ','wrong answer');
game('my favorite song is english','well done ','wrong answer');
game('my favorite dish is pasta','well done ','wrong answer');
game('I prefer short hair','well done','wrong answer');
game('I love to go gym','well done ','wrong answer');

/*let favoritePlace = prompt('my favorite place is turkey').toLowerCase();
if (favoritePlace === 'yes' || favoritePlace === 'y'){
    alert('great job')
    // console.log('well done')
}else if(favoritePlace === 'no' || favoritePlace === 'n'){
    alert('wrong answer')
}else {
    alert('you should answer by yes or no or y or n')
}
let favoriteSong = prompt('my favorite song is english').toLowerCase();
if (favoriteSong === 'yes' || favoriteSong === 'y'){
    alert('great job')
    // console.log('well done')
}else if(favoriteSong === 'no' || favoriteSong === 'n'){
    alert('wrong answer')
}else {
    alert('you should answer by yes or no or y or n')
}
let favoriteDish = prompt('my favorite dish is pasta').toLowerCase();
if (favoriteDish === 'yes' || favoriteDish === 'y'){
    alert('great job')
    // console.log('well done')
}else if(favoriteDish === 'no' || favoriteDish === 'n'){
    alert('wrong answer')
}else {
    alert('you should answer by yes or no or y or n')
}
let favoriteHair = prompt('I prefer short hair').toLowerCase();
if (favoriteHair === 'yes' || favoriteHair === 'y'){
    alert('wrong answer')
}else if(favoriteHair === 'no' || favoriteHair === 'n'){
    // console.log('well done')
    alert('great job')
}else {
    alert('you should answer by yes or no or y or n')
}
let favoriteSport = prompt('I love to go gym').toLowerCase();
if (favoriteSport === 'yes' || favoriteSport === 'y'){
    alert('great job')
    // console.log('well done')
}else if(favoriteSport === 'no' || favoriteSport === 'n'){
    alert('wrong answer')
}else {
    alert('you should answer by yes or no or y or n')
}
alert('just to know the rigth answer is yes,yes,yes,no.yes')*/
// alert('now the 6th quection you have 4 attempts')
// let gussNumber = prompt('can u guess if i like to go gym from 1 to 5 ')
// for (let i =0;i < 3;i++){
//     if(gussNumber == 5){
//         alert('bravo')
//         break
//     }else if(gussNumber > 5){
//         alert('Too high')
//         gussNumber = prompt('try again from 1 to 5')
//     }else if(gussNumber < 5){
//         alert('Too low')
//         gussNumber = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')
// alert(`your scored is : ${scored} from 4 attempts`)
function q6(){
  alert('now the 6th quection you have 4 attempts');
  let gussNumber = prompt('can u guess if i like to go gym from 1 to 5 ');
  outerloop: for (let i =0;i < 3;i++){
    if(gussNumber == 5){
      alert('bravo');
      score++;
      break outerloop;
    }else if(gussNumber > 5){
      alert('Too high');
      gussNumber = prompt('try again from 1 to 5');
    }else if(gussNumber < 5){
      alert('Too low');
      gussNumber = prompt('try again from 1 to 5');
    }
  }
  alert('the correct answer is 5');
}
q6();

function q7(){
  alert('now the 7th question you have 6 attempts');
  let array = ['apple','watermelon','orange','banana','grapes','pomegranate'];
  let fruite = prompt('can you guess my favorite fruite!');
  outerloop: for (let i=0;i<6;i++){
    for(let j=0;j<array.length;j++){
      if(fruite === array[j]){
        alert('well done ^_^');
        score++;
        break outerloop;
      }
    }
    fruite = prompt('try again');
  }
  alert('This is the answer :apple, watermelon ,orange ,banana ,grapes ,pomegranate');
}
q7();
alert(`you score is :${score}`);