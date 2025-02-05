// Array1.
// n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
//  📥 Input: getLevel3(5)
//  📤 Output: [3, 9, 27, 81, 243]
// let n = 5;  
// let son = 3
// let result = [];  
// for (let i = 1; i <= n; i++) {
//     result.push(son ** i);
// }
// console.log(result);

// Array2.
// n natural soni va X, Y butun sonlari berilgan (n > 2).
// a[0] = X, a[1] = Y.
// Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
// 📥 Input: n = 6, X = 1, Y = 2
//  📤 Output: [1, 2, 3, 5, 8, 13]
// let n = 6
// let x = 1
// let y = 2
// let a = [x,y]
// for (let i = 2; i < n; i++){
//      a.push(a[i-1]+a[i-2])
// }
// console.log(a);

// Array3.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output: [9, 8, 5]
// const arr = [4, 5, 7, 8, 6, 9]
// const arrp = []
// for (let i=0; i<=arr.length; i++){
//      if (arr.indexOf(arr[i]) % 2 == 1) {
//           arrp.unshift(arr[i]);
//       }
// }
// console.log(arrp);

// Array4.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// 📥 Input: [10, 5, 3, 8, 1, 6, 9]
//  📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)
// const arr = [10, 5, 3, 8, 1, 6, 9]
// let engkichik = arr.indexOf(Math.min(...arr));
// let engkatta = arr.indexOf(Math.max(...arr));
// let sum = engkichik + engkatta
// console.log(sum);

// Array5.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output:
//  Juft indekslilar: [4, 7, 6]
//  Toq indekslilar: [5, 8, 9]
// const arr = [4, 5, 7, 8, 6, 9]
// const arrj = []
// const arrt = []
// for (let i=0; i<arr.length; i++){
//      if (arr[i]%2==0){
//           arrj.push(arr[i])
//      } else if(arr[i]%2==1){
//           arrt.push(arr[i])
//      }
// }
// console.log(arrj,arrt);

// Array6.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng ko‘p uchragan element va uning soni topilsin.
// 📥 Input: [2, 3, 2, 5, 3, 3, 7, 2, 3]
//  📤 Output: Eng ko‘p uchragan element: 3, Uchrash soni: 4
// function engkopuchragan(arr) {
//      let son = {};
//      let engkopuchraqam = 0; 
//      let kopuchragansonraqami = null; 
//      for (let i = 0; i < arr.length; i++) {
//          let num = arr[i];
//          if (son[num]) {
//              son[num]++; 
//          } else {
//              son[num] = 1; 
//          }
//      }
//      for (let key in son) {
//          if (son[key] > engkopuchraqam) {
//              engkopuchraqam = son[key]; 
//              kopuchragansonraqami = key; 
//          }
//      }
//      console.log(` kop yozilgan son: ${kopuchragansonraqami},kop Uchrash soni: ${engkopuchraqam}`);
//  }
//  let arr = [2, 3, 2, 5, 3, 3, 7, 2,]
//  console.log(engkopuchragan(arr));
 
// Array7.
// n ta elementdan tashkil topgan massiv va R butun soni berilgan.
// Massiv elementlari orasidan R soniga eng uzoq son topilsin.
// 📥 Input: arr = [10, 15, 2, 30, 18], R = 12
//  📤 Output: 30 (12 ga eng uzoq son 30 (farqi 18))
// function engUzoqSon(arr, R) {
//      return arr.reduce((uzoq, son) => 
//          Math.abs(son - R) > Math.abs(uzoq - R) ? son : uzoq
//      );
//  }
//  const arr = [10, 15, 2, 30, 18];
//  const R = 12;
//  console.log(engUzoqSon(arr, R)); 

// Array8.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// 📥 Input: [7, 3, 9, 1, 8, 2, 4]
//  📤 Output:
//  Birinchi yarmi katta: [7, 9, 8]
//  Ikkinchi yarmi kichik: [3, 1, 2, 4]
// let arr = [7, 3, 9, 1, 8, 2, 4]
// let arrkatta = []
// let arrkichik = []
// for (let i=0; i<arr.length; i++){
//      if(arr[i]>=arr.length){
//           arrkatta.push(arr[i])
//      } else{
//           arrkichik.push(arr[i])
//      }
// }
// console.log(arrkatta);
// console.log(arrkichik);

// Array9.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// 📥 Input: [1, 2, 3, 4]
//  📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]
// function ikkitachqar(arr) {
//      return arr.flatMap(item => [item, item]);
//  }
//  let sonlar = [1, 2, 3, 4]
//  console.log(ikkitachqar(sonlar));

// Array10.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// 📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
//  📤 Output: [15, 9, 8, 5]
function oralab(arr) {
     return arr.reverse().filter((_, index) => index % 2 === 0);
 }
 let arr = [4, 5, 7, 8, 6, 9, 10, 15]
 console.log(oralab(arr));
