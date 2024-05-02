//1. İstifadəçidən adını soruşun və cavab olaraq ona "Salam, [adı]!" çap edin.
// const name = prompt("Enter your name: ");
// console.log("Salam " + name + ". Xos geldiniz!");

//2. İstifadəçidən doğum ilini soruşun, onun yaşını hesablayın və nəticəni çap edin. Cari il
// kodda sabit olaraq qeyd edin.
// const userYear = prompt("Enter your birth year: ");
// const year = "2024";
// console.log(Number(year) - Number(userYear));

//3. İstifadəçidən kvadratın bir tərəfinin uzunluğunu soruşun və bu kvadratın perimetrini çap
// edin.
// const length = prompt("Enter width/height of the square: ");
// console.log(Number(length) * 4);

//4. İstifadəçidən bir dairənin radiusunu soruşun və bu dairənin sahəsini çap edin.
// const radius = prompt("Enter radius of the circle: ");
// console.log(Number(radius) * Number(radius) * 3.14);

//5. İstifadəçidən iki şəhər arasındakı məsafəni kilometr cinsində və hansısa saatda çatmaq
// istədiyini soruşun. Vaxtında çatmaq üçün lazım olan sürəti hesablayın.
// const kilometer = prompt("Enter the distance between cities: ");
// const hour = prompt("Enter hours: ");

// console.log(Number(kilometer) / Number(hour));

//6. Valyuta çevirici tətbiq edin. İstifadəçi dollarları daxil edir, proqram onları avrolara çevirir.
// Valyuta məzənnəsini bir sabitdə saxlayın.
// const valute = 0.93436;
// const money = prompt("Enter the amount: ");

// console.log(valute*Number(money));

//7. İstifadəçi flash sürücünün həcmi GB olaraq göstərir. Proqram 820 MB ölçüsündəki
// faylların neçəsinin flash sürücünə sığacağını hesablayır.
// const gb = prompt("Enter gb:");
// const mg = 1024;
// console.log((Number(gb) * 1024) / 820);

//8. İstifadəçi cüzdanındakı pul miqdarını və bir cokoladka qiymətini daxil edir. Proqram
// istifadəçinin neçə cokoladka ala biləcəyini və onun əlində qalan qalan pul miqdarını çap edir
// const userMoney = Number(prompt("Enter the amount: "));
// const chocolateCost = Number(prompt("Enter the price of chocolate: "));
// const qaliq = chocolateCost % userMoney;

// console.log(
//   "You can buy ",
//   Math.floor(chocolateCost / userMoney),
//   "chocolates"
// );
// console.log("Change: " + qaliq);

//9. İstifadəçidən üç rəqəmli bir ədəd soruşun və onu tərsinə çevirin. Həll etmək üçün%
// operatorundan istifadə etməyiniz tələb olunur (bölmənin qalığı)
// function reverseNumber(num) {
//   //234
//   var temp = num % 10; //4
//   var result = temp * 10; //40
//   num = (num - temp) / 10; //23
//   temp = num % 10; //3
//   result = (result + temp) * 10; //43
//   num = (num - temp) / 10; //2
//   result = result + num;
//   return result;
// }
// const userInput = prompt("Enter 3 digit number: ");
// console.log(reverseNumber(Number(userInput)));

//10. İstifadəçidən bir tam ədəd soruşun və cavab olaraq onun cüt ədəd olub olmadığını çap
// edin. Tapşırıqda mantıq operatorlarını istifadə edin. Şərt operatorları if və ya switch istifadə
// etməyiniz tələb olunur
const numb = Number(prompt("Enter number: "));

if (numb % 2 == 0) {
  console.log(numb, "is even.");
} else {
  console.log(numb, "is odd.");
}
