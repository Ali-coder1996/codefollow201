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
alert('now you have to answer in 6 quection you have just 4 attempts okay let is start .')

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

alert('now you have to answer in 7 quection okay you have 6 attempts for each quection to guess the correct answer.')
// let ar = [ 'can u guess if i like to animel from 1 to 5 ','can u guess if i like to monkey from 1 to 5' ,'can u guess if i like to turkey from 1 to 5' ,'can u guess if i like to watch movies from 1 to 5' ,'can u guess if i like to travel from 1 to 5','can u guess if i like to viking from 1 to 5','can u guess if i like to anime from 1 to 5']
// let score=0;
// alert(ar[0])
// let guessing = prompt(ar[0])
// for (let i =0;i < ar.length;i++){
//     if(guessing == 1){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing > 1){
//         alert('Too high')
//         guessing = prompt('try again from 1 to 5')
//     }else if(guessing < 1){
//         alert('Too low')
//         guessing = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 1')


// alert(ar[1])
// let guessing1 = prompt(ar[1])
// for (let i =0;i < ar.length;i++){
//     if(guessing1 == 1){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing1 > 1){
//         alert('Too high')
//         guessing1 = prompt('try again from 1 to 5')
//     }else if(guessing1 < 1){
//         alert('Too low')
//         guessing1 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 1')

// alert(ar[2])
// let guessing2 = prompt(ar[2])
// for (let i =0;i < ar.length;i++){
//     if(guessing2 == 5){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing2 > 5){
//         alert('Too high')
//         guessing2 = prompt('try again from 1 to 5')
//     }else if(guessing2 < 5){
//         alert('Too low')
//         guessing2 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')

// alert(ar[3])
// let guessing3 = prompt(ar[3])
// for (let i =0;i < ar.length;i++){
//     if(guessing3 == 5){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing3 > 5){
//         alert('Too high')
//         guessing3 = prompt('try again from 1 to 5')
//     }else if(guessing3 < 5){
//         alert('Too low')
//         guessing3 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')

// alert(ar[4])
// let guessing4 = prompt(ar[4])
// for (let i =0;i < ar.length;i++){
//     if(guessing4 == 5){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing4 > 5){
//         alert('Too high')
//         guessing4 = prompt('try again from 1 to 5')
//     }else if(guessing4 < 5){
//         alert('Too low')
//         guessing4 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')

// alert(ar[5])
// let guessing5 = prompt(ar[5])
// for (let i =0;i < ar.length;i++){
//     if(guessing5 == 5){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing5 > 5){
//         alert('Too high')
//         guessing5 = prompt('try again from 1 to 5')
//     }else if(guessing5 < 5){
//         alert('Too low')
//         guessing5 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')

// alert(ar[6])
// let guessing6 = prompt(ar[6])
// for (let i =0;i < ar.length;i++){
//     if(guessing6 == 5){
//         alert('bravo');
//         score++;
//         break;
//     }else if(guessing6 > 5){
//         alert('Too high')
//         guessing6 = prompt('try again from 1 to 5')
//     }else if(guessing6 < 5){
//         alert('Too low')
//         guessing6 = prompt('try again from 1 to 5')
//     }
// }
// alert('the correct answer is 5')

// alert(`your score is : ${score}`)

let array1 = ['apple','watermelon','orange','banana','grapes','pomegranate']
let guess1 = prompt('can you guess my favorite fruite you have 6 attempts you will write 6 fruite one by one ^_^ ').toLowerCase();
let j =0;
let score =0;
for (let i=1;i<6;i++){
    if (guess1 === array1[0]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else if (guess1 === array1[1]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else if (guess1 === array1[2]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else if (guess1 === array1[3]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else if (guess1 === array1[4]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else if (guess1 === array1[5]){
        j++;
        guess1 =prompt(`good! there ${array1.length-j} left`)
        score++;
    }else {
        guess1 =prompt(`try again you have ${array1.length-i} left attempts`)
    }
}
alert('This is the rigth answer: apple, watermelon, orange, banana ,grapes ,pomegranate')
alert(`your score is : ${score}`)

let array2 = ['The Green Mile','The Silence of the Lambs','Inception','The Godfather','The Dark Knight','Schindler List']
let guess2 = prompt('can you guess my favorite movies you have 6 attempts you will write 6 movies one by one ^_^ ').toLowerCase();
let a =0;
let score2 =0;
for (let i=1;i<6;i++){
    if (guess2 === array2[0]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else if (guess2 === array2[1]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else if (guess2 === array2[2]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else if (guess2 === array2[3]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else if (guess2 === array2[4]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else if (guess2 === array2[5]){
        a++;
        guess2 =prompt(`good! there ${array2.length-a} left`)
        score2++;
    }else {
        guess2 =prompt(`try again you have ${array2.length-i} left attempts`)
    }
}
alert('This is the rigth answer: The Green Mile ,The Silence of the Lambs,Inception,The Godfather,The Dark Knight,Schindler List ')
alert(`your score2 is : ${score2}`)

let array3 = ['white','black','green','red','gray','brown']
let guess3 = prompt('can you guess my favorite color you have 6 attempts you will write 6 color one by one ^_^ ').toLowerCase();
let b =0;
let score3 =0;
for (let i=1;i<6;i++){
    if (guess3 === array3[0]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else if (guess3 === array3[1]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else if (guess3 === array3[2]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else if (guess3 === array3[3]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else if (guess3 === array3[4]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else if (guess3 === array3[5]){
        b++;
        guess3 =prompt(`good! there ${array3.length-b} left`)
        score3++;
    }else {
        guess3 =prompt(`try again you have ${array3.length-i} left attempts`)
    }
}
alert('This is the rigth answer: white,black,green,red,gray,brown')
alert(`your score3 is : ${score3}`)

let array4 = ['viking','breaking bad','The 100','got','lost','the walking dead']
let guess4 = prompt('can you guess my favorite series  you have 6 attempts you will write 6 series  one by one ^_^ ').toLowerCase();
let c =0;
let score4 =0;
for (let i=1;i<6;i++){
    if (guess4 === array4[0]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else if (guess4 === array4[1]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else if (guess4 === array4[2]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else if (guess4 === array4[3]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else if (guess4 === array4[4]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else if (guess4 === array4[5]){
        c++;
        guess4 =prompt(`good! there ${array4.length-c} left`)
        score4++;
    }else {
        guess4 =prompt(`try again you have ${array4.length-i} left attempts`)
    }
}
alert('This is the rigth answer: viking,breaking bad,The 100,Got,lost,the walking dead')
alert(`your score4 is : ${score4}`)

let array5 = ['pasta','pizza','burger','fish','shawarma','kebab']
let guess5 = prompt('can you guess my favorite dish you have 6 attempts you will write 6 dish one by one ^_^ ').toLowerCase();
let d =0;
let score5 =0;
for (let i=1;i<6;i++){
    if (guess5 === array5[0]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else if (guess5 === array5[1]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else if (guess5 === array5[2]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else if (guess5 === array5[3]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else if (guess5 === array5[4]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else if (guess5 === array5[5]){
        d++;
        guess5 =prompt(`good! there ${array5.length-d} left`)
        score5++;
    }else {
        guess5 =prompt(`try again you have ${array5.length-i} left attempts`)
    }
}
alert('This is the rigth answer: pasta,pizza,burger,fish,shawarma,kebab')
alert(`your score5 is : ${score5}`)

let array6 = ['one piece','hxh','demon slayer','bleach','attack on titan','naruto']
let guess6 = prompt('can you guess my favorite anime you have 6 attempts you will write 6 anime one by one ^_^ ').toLowerCase();
let e =0;
let score6 =0;
for (let i=1;i<6;i++){
    if (guess6 === array6[0]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else if (guess6 === array6[1]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else if (guess6 === array6[2]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else if (guess6 === array6[3]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else if (guess6 === array6[4]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else if (guess6 === array6[5]){
        e++;
        guess6 =prompt(`good! there ${array6.length-e} left`)
        score6++;
    }else {
        guess6 =prompt(`try again you have ${array6.length-i} left attempts`)
    }
}
alert('This is the rigth answer: one piece,hxh,demon slayer,bleach,attack on titan,naruto')
alert(`your score6 is : ${score6}`)

let array7 = ['turkey','hxh','london','saudi arabia','switzerland','greece']
let guess7 = prompt('can you guess my favorite place you have 6 attempts you will write 6 place one by one ^_^ ').toLowerCase();
let f =0;
let score7 =0;
for (let i=1;i<6;i++){
    if (guess7 === array7[0]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else if (guess7 === array7[1]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else if (guess7 === array7[2]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else if (guess7 === array7[3]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else if (guess7 === array7[4]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else if (guess7 === array7[5]){
        f++;
        guess7 =prompt(`good! there ${array7.length-f} left`)
        score7++;
    }else {
        guess7 =prompt(`try again you have ${array7.length-i} left attempts`)
    }
}
alert('This is the rigth answer: turkey,hxh,london,saudi arabe,switzerland,greece')
alert(`your score7 is : ${score7}`)