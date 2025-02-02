//"use strict"
// console.log(b);
// console.log(c);
// var va letni farqlaridan biri o'zidan tepada chaqira olmaymiz.

// hoisting -> funksiyalar va declarativ(var) o'zgaruvchilarni o'zidan tepada chaqirish degani.
// let va const temporal dead zone da qolib ketadi.(TDZ);
//V8 — bu Google tomonidan ishlab chiqilgan JavaScript engine bo‘lib, 
//JavaScript kodini tez va samarali bajarish uchun 
//JIT kompilyatsiya va xotira boshqaruvini ta'minlaydi. 
//U Chrome va Node.js kabi platformalarda ishlaydi.
// var b = 7;
// let c = 8;
// console.log(b);

// var b = 9;
// varda qayta o'zgaruvchiga yangi qiymat bersak eski qiymatni o'zgarib ketadi

/*Kompilyator - Dastur kodini to‘liq mashina tiliga o‘girib, keyin ishga tushiradi 
Interpretator - Dastur kodini qatorma-qator o‘qib, darhol bajaradi*/

// Hozirgi zamonaviy JS JIT(Just in time) da ishga tushiriladi.
//Asosiy qiladigan ishi daaturni takrorlanuvchi qismlarini ceshlab oziga oladi va
//dastur ishlashida ceshdan olib ishlatadi. Shuni hisobiga js tez ishlaydi

// JS ni htmlga ulashda oxirida bodyni ichida ulaymiz. Oxirida ulashimizga sabab
// tepadagi hamma elementlarni yuklab olib keyin ishlaydi.
// script defer -> Sahifani hamma elementlarini yuklanishini kutib turadi va oxirida ishga tushadi
// script async -> Avtonom ishga tushadi

//console.log("Salom Js"); // Dasturchining asosiy quroli

// ["salom", "js"].forEach(alert);

//-> {([])} <- ketma ketligi to'g'ri bo'lish kerak

// "", '', ``;
// //literal -> qaysidir o'zgaruvchiha boshlangich qiymatlarni berib yuborsak bu letiral deyiladi.
// const a = 5; // number literal
// let str1 = `Yangi O'zbekiston  ${a} `;// string literal
// console.log(str1);

// snake_case
//PascalCase
//camelcase
// //kebab-case
// // JS dinamik til hisoblanadi.
// let b = 15;
// var c = 20
// {
//   let b = 11;// blok ichida alohida o'zgaruvchilar muhutiga saqlaydi.
//   var c = 12;// var blokdan tashqarida ham ko'rinadi. yani varni global o'zgaruchiga qiyoslasak bo'ladi.
//   console.log(b);
// }
// console.log(c);
// console.log(b);

// !Tiplar  ikki turga bo'linadi. Primitive tip va noprimitive tip
// Primitive tip: number, string, null? undefined, symbol, bigint,Boolean;
//Non- primitivega : object, array, function, date, map, set, weakmap, weakset

//special tiplarga : NaN , Infinity va -infinity

// const test = null; //
// console.log(test);
// console.log(typeof test); // type object qaytaradi
// // typneni  aniqlab beradigan funksiyamiz -> typeof

// let a = 2; // number
// console.log(a);
// console.log(typeof a); //type number qaytaradi
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// const dd = 3.2;
// console.log(typeof dd);
// console.log(5 / 2);
// console.log(4 / 2); // -> hammasi number typega kiradi

// let str1 = `Najot Ta'lim`; // string
// console.log(str1); // Najot Ta'lim chiqaradi
// console.log(typeof str1); // type string qaytaradi

// console.log(typeof str1 == "string");
// console.log(typeof typeof a);

// const isActive = true;
// console.log(isActive);
// console.log(typeof isActive);

// const a1 = undefined; // yani hali qiymat  yuklanmagan
// console.log(a1);
// console.log(typeof a1);
// // Eslatma: const bilan e’lon qilingan o‘zgaruvchiga qiymat berilmasa,
// // xato (SyntaxError) yuz beradi.
// // Faqat let va var bilan qiymat bermaslik mumkin.

// //  Symbol – har doim unikal qiymat yaratadi.
// let s1 = Symbol("d1");
// let s2 = Symbol("d1");
// console.log(s1 == s2);
// console.log(s1);
// console.log(typeof s1);

// let b1 = 7n;
// console.log(b1);
// console.log(typeof b1);

// let i = 10 / 0;
// console.log(i); //Infinity
// console.log(typeof i); //number

// let n = NaN
// console.log(n);//NaN
// console.log(typeof n);//number  (Nimadirni songa o'tkazishhimizda sodir bo'ladi.)

// console.log(+"100");//100 songa o'tkazib beradi
// console.log(Number('100'));//100 songa o'tkazib beradi
// console.log(Number("test")); // natijasi (NaN)
// console.log(10+ 100+ "100" +3 + 4);// natijasi(11010034) concat stringni ko'rgandan stringga o'tib ketadi.

// OBJECT

// const products = {
//   name: "sut",
//   price: 10000,
//   // har doim keylarini string ko'rinishida saqlaydi
// };
// products.price = 12000;
// products.category = 1;
// console.log(products); //natija:{name: 'sut', price: 10000}
// console.log(typeof products); // natija: object

// FUNCTION
// function calc(a, b) {
//   return a + b;
// }
// console.log(calc(2, 3)); //natija: 5;
// console.log(typeof calc); // natija: function

// // Bitta typedan boshqa typega o'tkazish mumkin.
// let s = 10;
// console.log(s); // number
// console.log(String(s)); // string
// console.log(s.toString()); // string

// console.log(String(true));//true
// console.log(Number(true));// 1
// console.log(Number(false));//0

// OPERATORLAR

// let a = 5,
//   b = 6;
// let c = a + b; // ("a" va "b")-> operand, ("+")-> binar amal
// c = +"1000"; // bir tomonida bitta operand qatnashsa unar amal bo'ladi.

// let a = 1;
// let b = 2;
// let c = 10;
// c = c + b; //c+=b
// c = c - b; //c-=b
// c = c * b; //c*=b
// c = c / b; //c/=b
// c = c % b; //c%=b
// c = c ** b; //c*=b
// c = a++ + ++b;
// console.log(c);
//Muhim nuqta: a++ eski qiymatni qaytaradi (1),
// ++b esa oshirilgan qiymatni qaytaradi (3),
// shuning uchun natija 4.



// let a = 5;
// let b = "5";
// console.log(a == b); //true
// console.log(a === b); //false 3 ta tenglik qatiy tenglikni tekshiradi va kelaayotgan qiymatlarni typeni ham tekshiradi
// console.log(a != b); // false
// console.log(a !== b); //true
