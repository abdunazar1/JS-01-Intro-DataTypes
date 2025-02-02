============ 1. JavaScript tarixi va evolyutsiyasi ==========

- JS tarixi
- Backend va Frontend
- JavaScript ta'rifi va xususiyatlari
- client va serverda JavaScript
- JavaScript turlari
- ECMAScript standarti


============ 2. Dasturlash muhitini sozlash ==========

- Live Server, JS snippet, Code Runner, HTML CSS Support,
  JavaScript (ES6) code snippets extensionlarni o'rnatish
- NodeJSni o'rnatish:
    1) package orqali - boshlovchilar uchun
    2) NVM (Node Version Manager) - versiyalarni 
       professional darajada boshqarish uchun
       (NVMni o'rnatish uchun BREWni o'rnatish kerak)
- Google chrome Console bilan tanishish
 
Just in time 
=================== 3. JSni ulash ===================

- index.html
- css/style.css
- js/app.js
- <script type="text/javascript">Code</script>
- <script src="path/to/file.js"></script>
- <script src="https://najottalim.uz/libs/app.js"></script>
- <script defer src=""> yuklanishini kutib turadi
- <script async src=""> qaysi biri birinchi yuklansa o'sha bajariladi
    (counter va reklamalarda ishlatiladi)
- console.log ma'lumot chiqarish buyrug'i orqali sinab ko'rish
- alert ma'lumot chiqarish buyrug'i orqali sinab ko'rish



================= 4. JS kod tuzilishi =================

- Nuqta vergul (;)
- Qavslar ({([])}, [], ())
- Tirnoqlar ('', "", ``)
- Probel va Tab
- Kod uzunligi (80 ta belgi)
- modullar


================ 5. JS kod yo'riqnomalari  ===============

- Qiymatlar - VALUES (literallar, konstanta va o'zgaruvchi )
- Operatorlar ( =, +, -, *, /, % va boshqa)
- Amallar (o'zgaruvchi, qiymat va operator kombinatsiyasi)
- Kalit so'zlar (var, let, for, break...)
- Bloklar (funksiya, sikl)
- izoh yozish (Ctrl+/, Ctrl+Shift+/ ) (mac -> Ctrl+Option+/ )
- "use strict" - qat'iy rejimi (kod boshida)


================ 6. O'zgaruvchilar  ===============

- O'zgaruvchilarni e'lon qilish (var va let, use strict, Temporal Dead Zone (TDZ))
- O'zgaruvchiga ma'noli nom tanlash
- Ruxsat etilgan belgilar(harf, son, _ va $) âœ…
- Tavsiya qilinmaydi (lotin harfidan boshqa harflar, kalit so'zlar)â—ï¸
- camelCase âœ…, PascalCase, snake_case, kebab-caseâŒ
- registrga sezgirlik
- bir nechta o'zgaruvchilarni e'lon qilish
- qiymat yuklash (=)
- o'zgaruvchi qiymatini o'zgartirish
- ko'rinish doirasi (avval e'lon qilish, blok ichida)
- var va let farqi (blok ichida ko'rinish, avval qiymat yuklash)


================ 7. Konstantalar  ===============

- Konstantalarni e'lon qilish (const)
- Avvaldan ma'lum konstantalar (IP_ADDRESS, PASSWORD, PI)
- Avvaldan ma'lum bo'lmagan konstantalar (cubeSize)

const PI = 3.141592653589793;
const cubeSize = 2*3*4
cubeSize = 12

================ 8. JSda ma'lumot tiplari  ===============

- JS dinamik tip hisonlanadi (boshqa tipdagi qiymat yuklash)
- Tiplar 
    - Primitive:
        Number (Sonlar)
        String (Satrlar)
        Boolean (Mantiqiy)
        Null (Null qiymat)
        Undefined (Aniqlanmagan qiymat)
        Symbol (Simvol)
        BigInt (Katta butun sonlar)
    - Non-Primitive(Object):
        Object
        Array
        Function
        Date
        RegExp
        Map
        Set
        WeakMap
        WeakSet
    - Special tiplar
        NaN
        Infinity va -Infinity

- tiplarni o'zgartirish


============ 9. undefined ============
let yoshi;
let $ =20
console.log(yoshi) //undefined
console.log(typeof yoshi) //undefined
console.log(typeof typeof yoshi) //string

if (yoshi == 20){
    console.log("Noma'lum1") //undefined
}

if (typeof yoshi == 'number'){
    console.log('No'malum2') //undefined
} 


============ 10. null ============
let yili = null
console.log(yili) //null
console.log(typeof yili) //object 


============ 11. boolean ============
let isMale = false
console.log(isMale) //false
console.log(typeof isMale) //boolean

if (isMale) {
    console.log("male") 
} else {
    console.log("female") 
} 

let isBigger = 77>55

console.log(20==20); 


============ 12. number ============

let count = 0
console.log(count) //0
console.log(typeof count) //number

let len = 7.7
console.log(len) //7.7
console.log(typeof len) //number

let cheksizSon = -77/0
console.log(cheksizSon) //Infinity
console.log(typeof cheksizSon) //number

let nan = "yuz"/100
console.log(nan) //NaN
console.log(typeof nan) //number 


============ 13. bigint ============

const kattaSon = 234973493494399838234847n
console.log(typeof kattaSon) //bigint
console.log(Number.MIN_VALUE) //bigint


 ============ 14. string ============

 "", '', ``
let myAge = 33
let myName = "Salim"
let myData = `Ismim: ${myName}, yoshim:${myAge}`
console.log(myData) 

============ 15. object ============

const myAddress = {
    city: "Tashkent",
    street: "O'zbekiston",
    houseNumber: 77
}
myAddress['houseNumber'] = 78
myAddress.houseNumber = 78
myAddress.index =100100
console.log(myAddress) 
console.log(typeof myAddress) //object 


============ 16. symbol ============

let mySymbol = Symbol("Salom")
console.log(mySymbol) // Symbol(Salom)
console.log(typeof mySymbol) //symbol 


============ 17. function ============

 let kvadrat = function daraja(n){
    return n * n
}
console.log(kvadrat(2)) // 4
console.log(typeof kvadrat) //function 


============ 18. change type ============

let studentCount = 10
console.log(studentCount) // 10
console.log(typeof studentCount) // number

studentCount = String(studentCount) 
console.log(studentCount) // 10
console.log(typeof studentCount) // string

studentCount = Number(studentCount)  // number 10

let son = Number("asjksjk")
console.log(son) // NaN
console.log(typeof son) // number

let son1 = "100"+100
console.log(son1) // 1
console.log(typeof son1) // number

let isTrue = Boolean("")
console.log(isTrue) 
console.log(typeof isTrue) // boolean 


================ 19. Operatorlar  ===============
- operand, unar, binar
- asosiy operatorlar (=, +, -, *, /, %, **, ++, --)
- prioritet
- taqqoslash operatorlari (>, <, >=, <=, ==, !=, ===, !==)

