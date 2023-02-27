// var strig = "Muhammad Moazzam Khan";
// console.log(strig.split("z"));


// for (var i=1;i <= 10; i++){
//     document.write("2 x " + i + "=" +2 * i + "<br />")
// }

// var arr = ["Multan", "lahore" , "Peshawar" ,"Karachi"];
// var user = prompt("enter");
// var mila = "nahi";

// for (var i=0; i< arr.length; i++){
//     if(user == arr[i]){
//         mila = "han";
//         break;
//     }
// }
// if(mila == "han"){
//     alert(true);
// }else{
//     alert(false);
// }

// var arr = ["Multan", "lahore" , "Peshawar" ,"Karachi"];
// var user = prompt("enter");
// var flag = false;

// for (var i=0; i< arr.length; i++){
//     if(user == arr[i]){
//         flag= true;
//         break;
//     }
// }
// if(flag){
//     alert(true);
// }else{
//     alert(false);
// }

// var arr = [ "noon" , "civic" ,"wow"];
// var user = prompt("enter");
// var flag = false;

// for (var i=0; i< arr.length; i++){
//     if(user == arr[i]){
//         flag= true;
//         break;
//     }
// }
// if(flag){
//     alert(true);
// }else{
//     alert(false);
// }


// var userInput = prompt("The a words");
// var method = userInput.split("").reverse().join("");
// if(userInput===method){
//     alert("this is plendaram word");
// }else{
//     alert("this is not pelendaran word");
// }







//          0     1    2     3   4     5     6     7 
// var arr = ["69","84","85","73","748","547",'830',"746"];
// var arru = arr[0]+","+arr[3]+","+arr[1]+","+arr[2]+","+arr[7]+","+arr[5]+","+arr[4]+","+arr[6];
// console.log(arru);
// arru.split(",")
// console.log(arru);
// arr = arru;
// console.log(arr);





// var  num = [24, 53, 78, 91, 12];
// var max = num[0];

// for(i = 0; i <= num.length; i++){
//     if(num[i] < max){
//         max = num[i];
//     }
// }
// document.write("The Largest number in the array is: " + max);

// var nums = [ 4,3,6,7,9];
// for(var i = 0; i < nums.length-1; i++){
//     for(var j = 0; j < nums.length-i-1; j++ ){
//         console.log(i,j);
//         if(nums[j] > nums[j+1]){
//             var big = nums[j];
//             nums[j]= nums[j+1]
//             nums[j+1] = big;
//         }
//     }
// }
// document.write(nums);

// var str = "Aa1Bb2cCc3Dd4Ee5Ff6Gg7Hh8Ii9Jj10";
// var capAlpha = [];
// var alpha = [];
// var number = [];

// for(var i=0; i < str.length; i++){
//     var code = str[i].charCodeAt();
//     if(code >= 65 && code <= 90){
//         capAlpha = capAlpha + str[i];
//     }else if(code >= 97 && code <= 122){
//         alpha = alpha + str[i];
//     }else{
//         number = number + str[i]; 
//     }
// }
// document.write(number,"<br>");
// document.write(capAlpha,"<br>");
// document.write(alpha,"<br>");



// var letter = "moazzam";
// var firstLe = letter[0].toUpperCase();
// var result = firstLe + letter.slice(1);
// console.log(result);



// var get = prompt("enter paragraph");
// for(var i=0; i < get.length; i++){
//     if(get.slice(i, i + 2) == "  "){
//         alert("No allow double space");
//         break;
//     }
// }

// var str = "moazzam saylani khan";
// var index = str.indexOf("saylani");
// console.log(index);
// if (index !== -1) {
//     var first = str.slice(0, index);
//     console.log(first);
//     var sec = "smit";
//     var last = str.slice(index + 7);
//     console.log(last);
//     console.log(first + sec + last);

// } else {
//     console.log("NOt available");
// }

// var str = "Muhammad saylani Moazzam saylani Khan saylani "
// console.log(str); 
// var index = str.indexOf("saylani");
// if(index !== -1){
// var first =  str.slice(0 ,index);
// var second = str.slice(index + 7);
// var smit = "SMIT";
// var final = first + smit + second;
// console.log(final);
// if (final.indexOf("saylani") !== -1){
//     var semiIndex = final.indexOf("saylani");
//     var semiFirst = final.slice(0,semiIndex); 
//     var semiSec = final.slice(semiIndex+7); 
//     semiFinal = semiFirst + smit +semiSec ;
//     console.log(semiFinal);
// if(semiFinal.indexOf("saylani") !== -1){
//     var lastIndex = semiFinal.indexOf("saylani");
//     var lastFirst = semiFinal.slice(0 ,lastIndex);
//     var lastSec = semiFinal.slice(lastIndex + 7);
//     var lastFinal = lastFirst +  smit + lastSec;
//     console.log(lastFinal)
// }
// }
// }


// var str = "muhammad moazzam khan";
// console.log(str);
// var first = str[0].toUpperCase();
// var firstFinal = first + str.slice(1);
// var sec = firstFinal.slice(0,9);
// // console.log(sec);
// var secSec = firstFinal.slice(9) ;
// var secAdd = sec[0].toUpperCase();
// var jkk = sec + secAdd + str.slice(10);
// // console.log(jkk);
// var kkj = jkk.slice(17,18).toUpperCase();
// var fullAndFinnal = jkk.slice(0,17) + kkj + jkk.slice(18);
// console.log(fullAndFinnal);

