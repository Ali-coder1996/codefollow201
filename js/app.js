"use strict";

let userName = prompt('please enter Name');
// alert(`welcome to my website ${userName} let is enjoy now you will be discover me by answer in yes or no or y or n okay `);

// let favoritePlace = prompt('my favorite place is turkey').toLowerCase();
// if (favoritePlace === 'yes' || favoritePlace === 'y'){
//     alert('great job')
//     // console.log('well done')
// }else if(favoritePlace === 'no' || favoritePlace === 'n'){
//     alert('wrong answer')
// }else {
//     alert('you should answer by yes or no or y or n')
// } 

// let favoriteSong = prompt('my favorite song is english').toLowerCase();
// if (favoriteSong === 'yes' || favoriteSong === 'y'){
//     alert('great job')
//     // console.log('well done')
// }else if(favoriteSong === 'no' || favoriteSong === 'n'){
//     alert('wrong answer')
// }else {
//     alert('you should answer by yes or no or y or n')
// }

// let favoriteDish = prompt('my favorite dish is pasta').toLowerCase();
// if (favoriteDish === 'yes' || favoriteDish === 'y'){
//     alert('great job')
//     // console.log('well done')
// }else if(favoriteDish === 'no' || favoriteDish === 'n'){
//     alert('wrong answer')
// }else {
//     alert('you should answer by yes or no or y or n')
// }

// let favoriteHair = prompt('I prefer short hair').toLowerCase();
// if (favoriteHair === 'yes' || favoriteHair === 'y'){
//     alert('wrong answer')
// }else if(favoriteHair === 'no' || favoriteHair === 'n'){
//     // console.log('well done')
//     alert('great job')
// }else {
//     alert('you should answer by yes or no or y or n')
// }

// let favoriteSport = prompt('I love to go gym').toLowerCase();
// if (favoriteSport === 'yes' || favoriteSport === 'y'){
//     alert('great job')
//     // console.log('well done')
// }else if(favoriteSport === 'no' || favoriteSport === 'n'){
//     alert('wrong answer')
// }else {
//     alert('you should answer by yes or no or y or n')
// }

// alert('just to know the rigth answer is yes,yes,yes,no.yes')

let gusNumber = prompt('can u guess which number i prefer 1, 9, 5, 7, 3')
for (let i =0;i < 3;i++){
    if(gusNumber == 5){
        alert('bravo')
        break
    }else if(gusNumber > 5){
        alert('Too high')
        gusNumber = prompt('try again 1, 9, 5, 7, 3')
    }else if(gusNumber < 5){
        alert('Too low')
        gusNumber = prompt('try again 1, 9, 5, 7, 3')
    }
}
alert('the correct answer is 5')

let gussNumber = prompt('can u guess if i like to go gym from 1 to 5 ')
for (let i =0;i < 3;i++){
    if(gussNumber == 5){
        alert('bravo')
        break
    }else if(gussNumber > 5){
        alert('Too high')
        gussNumber = prompt('try again from 1 to 5')
    }else if(gussNumber < 5){
        alert('Too low')
        gussNumber = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

let gusssNumber = prompt('can u guess if i like to pizza from 1 to 5 ')
for (let i =0;i < 3;i++){
    if(gusssNumber == 4){
        alert('bravo');
        break;
    }else if(gusssNumber > 4){
        alert('Too high')
        gusssNumber = prompt('try again from 1 to 5')
    }else if(gusssNumber < 4){
        alert('Too low')
        gusssNumber = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 4')

let gussssNumber = prompt('can u guess if i like to sleep from 1 to 5 ')
for (let i =0;i < 3;i++){
    if(gussssNumber == 5){
        alert('bravo');
        break;
    }else if(gussssNumber > 5){
        alert('Too high')
        gussssNumber = prompt('try again from 1 to 5')
    }else if(gussssNumber < 5){
        alert('Too low')
        gussssNumber = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

let gussiNumber = prompt('can u guess if i like to read from 1 to 5 ')
for (let i =0;i < 3;i++){
    if(gussiNumber == 1){
        alert('bravo');
        break;
    }else if(gussiNumber > 1){
        alert('Too high')
        gussiNumber = prompt('try again from 1 to 5')
    }else if(gussiNumber < 1){
        alert('Too low')
        gussiNumber = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 1')

let gussinNumber = prompt('can u guess if i like to wirte from 1 to 5 ')
for (let i =0;i < 3;i++){
    if(gussinNumber == 1){
        alert('bravo');
        break;
    }else if(gussinNumber > 1){
        alert('Too high')
        gussinNumber = prompt('try again from 1 to 5')
    }else if(gussinNumber < 1){
        alert('Too low')
        gussinNumber = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 1')
alert('now you have to answer in 7 quection okay you have 6 attempts to guess the correct answer.')
let ar = [ 'can u guess if i like to animel from 1 to 5 ','can u guess if i like to monkey from 1 to 5' ,'can u guess if i like to turkey from 1 to 5' ,'can u guess if i like to watch movies from 1 to 5' ,'can u guess if i like to travel from 1 to 5','can u guess if i like to viking from 1 to 5','can u guess if i like to anime from 1 to 5']
let score=0;
alert(ar[0])
let guessing = prompt(ar[0])
for (let i =0;i < ar.length;i++){
    if(guessing == 1){
        alert('bravo');
        score++;
        break;
    }else if(guessing > 1){
        alert('Too high')
        guessing = prompt('try again from 1 to 5')
    }else if(guessing < 1){
        alert('Too low')
        guessing = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 1')


alert(ar[1])
let guessing1 = prompt(ar[1])
for (let i =0;i < ar.length;i++){
    if(guessing1 == 1){
        alert('bravo');
        score++;
        break;
    }else if(guessing1 > 1){
        alert('Too high')
        guessing1 = prompt('try again from 1 to 5')
    }else if(guessing1 < 1){
        alert('Too low')
        guessing1 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 1')

alert(ar[2])
let guessing2 = prompt(ar[2])
for (let i =0;i < ar.length;i++){
    if(guessing2 == 5){
        alert('bravo');
        score++;
        break;
    }else if(guessing2 > 5){
        alert('Too high')
        guessing2 = prompt('try again from 1 to 5')
    }else if(guessing2 < 5){
        alert('Too low')
        guessing2 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

alert(ar[3])
let guessing3 = prompt(ar[3])
for (let i =0;i < ar.length;i++){
    if(guessing3 == 5){
        alert('bravo');
        score++;
        break;
    }else if(guessing3 > 5){
        alert('Too high')
        guessing3 = prompt('try again from 1 to 5')
    }else if(guessing3 < 5){
        alert('Too low')
        guessing3 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

alert(ar[4])
let guessing4 = prompt(ar[4])
for (let i =0;i < ar.length;i++){
    if(guessing4 == 5){
        alert('bravo');
        score++;
        break;
    }else if(guessing4 > 5){
        alert('Too high')
        guessing4 = prompt('try again from 1 to 5')
    }else if(guessing4 < 5){
        alert('Too low')
        guessing4 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

alert(ar[5])
let guessing5 = prompt(ar[5])
for (let i =0;i < ar.length;i++){
    if(guessing5 == 5){
        alert('bravo');
        score++;
        break;
    }else if(guessing5 > 5){
        alert('Too high')
        guessing5 = prompt('try again from 1 to 5')
    }else if(guessing5 < 5){
        alert('Too low')
        guessing5 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

alert(ar[6])
let guessing6 = prompt(ar[6])
for (let i =0;i < ar.length;i++){
    if(guessing6 == 5){
        alert('bravo');
        score++;
        break;
    }else if(guessing6 > 5){
        alert('Too high')
        guessing6 = prompt('try again from 1 to 5')
    }else if(guessing6 < 5){
        alert('Too low')
        guessing6 = prompt('try again from 1 to 5')
    }
}
alert('the correct answer is 5')

alert(`your score is : ${score}`)