// ? Soru-1 Bir dizideki en büyük sayıyı bulan fonksiyonu yaz. Örn: [3, 7, 2, 9, 12] => 12
//----------------------------------------------------------------------------------------

// const numbers = [32, 45, 3, 7, 2, 12];

// const findMax = (number) => {
//   return number.reduce((acc, num) => (num > acc ? num : acc));
// };

// console.log(`En büyük sayı : `, findMax(numbers));

// const findMax = (arr) => {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) max = num;
//   }
//   return max;
// };

// console.log(`En büyük sayı : `, findMax(numbers));

// ? Soru-2 Bir dizideki sayıların kareköklerinden oluşan yeni bir dizi döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// const sqrt = (arr) => {
//   return arr.map((num) => Math.sqrt(num));
// };

// console.log(sqrt(numbers));

// ? Soru-3 Bir diziden sadece çift sayıları yeni bir diziye aktaran fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = (arr) => {
//   return arr.filter((num) => num % 2 === 0);
// };

// console.log(evenNumbers(numbers));

// ? Soru-4 Bir dizide verilen elemandan kaç tane olduğunu bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const words = ["a", "b", "a", "c", "a"];

// const countWord = (arr, value) => {
//   return arr.reduce((acc, item) => (item === value ? acc + 1 : acc), 0);
// };

// console.log(countWord(words, "a"));

// const words = ["a", "b", "a", "c", "a"];
// const search = "a";

// const countElements = (arry, search) => {
//   let counter = 0;
//   for (let item of arry) {
//     if (item === search) counter++;
//   }
//   return counter;
// };

// console.log(countElements(words, search));

// ? Soru-5 Bir dizideki negatif sayıların toplamını bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [10, -4, 7, -9, 11, 15, -19];

// const negativeNumbers = (arr) => {
//   return arr.filter((num) => num < 0).reduce((acc, val) => acc + val, 0);
// };

// console.log(negativeNumbers(numbers));

// const numbers = [10, -4, 7, -9, 11, 15, -19];

// const negativeNum = (arr) => {
//   let toplam = 0;
//   for (let item of arr) {
//     if (item < 0) toplam += item;
//   }
//   return toplam;
// };

// console.log(negativeNum(numbers));

// ? Soru-6 Bir isimler dizisindeki her ismin uzunluğunu döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const names = ["Ali", "Mehmet", "Sinan", "Hüseyin", "Ömer", "Erdem", "Elif"];

// const lengtNames = (ary) => {
//   return arr.map((item) => item.length);
// };

// console.log(lengtNames(names));

// ? Soru-7 Bir dizideki her sayıyı verilen çarpanla çarpıp döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiply = (arr, factor) => {
//   return arr.map((num) => num * factor);
// };

// console.log(multiply(numbers, 3));

// ? Soru-8 Bir dizinin ortalamasını döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [15, 20, 33, 46, 59, 67, 72, 88, 99, 102];

// const average = (arr) => {
//   const sum = arr.reduce((acc, num) => acc + num, 0); // ! Bunu sor...
//   return Math.round(sum / arr.length);
// };

// console.log(average(numbers));

// ? Soru-9 Bir objede "scores" dizisi vardır. En yüksek notu bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const score = {
//   name: "Ali",
//   scores: [70, 90, 85],
// };

// const highestScore = (score) => {
//   return score.scores.reduce((acc, num) => (num > acc ? num : acc));
// };

// console.log(`${score.name}'nin en yüksek skoru :`, highestScore(score));

// const score = {
//   name: "Ali",
//   scores: [70, 90, 85],
// };

// const highestScore = (obj) => {
//   let highest = obj.scores[0];
//   for (let num of obj.scores) {
//     if (num > highest) highest = num;
//   }
//   return highest;
// };

// console.log(highestScore(score));

// ? Soru-10 Öğrenciler dizisinde (objelerden oluşan) en genç öğrenciyi bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const students = [
//   { name: "Ali", age: 25 },
//   { name: "Ayşe", age: 20 },
// ];

// const youngestStudent = (arr) => {
//   const result = arr.reduce((youngest, student) =>  //! SOR
//     student.age < youngest.age ? student : youngest
//   );
//   return result.name;
// };

// console.log(`En genç öğrenci :`, youngestStudent(students));

// ? Soru-11 İçinde farklı tipler (string, number, boolean, null, undefined, array, function) barındıran bir obje tanımla. Bu objeyi parametre olarak alan bir fonksiyon, her bir değeri console.log ile yazsın.
//----------------------------------------------------------------------------------------
// const mixdObject = {
//   name: "Sinan",
//   age: 30,
//   isStudent: true,
//   address: null,
//   nickname: undefined,
//   hobbies: ["code", "music", "travel"],
//   greet: function () {
//     return "Merhaba!";
//   },
// };

// const objectValues = (obj) => {
//   for (let key in obj) {
//     console.log(`${key}:`, obj[key]);
//   }
// };

// console.log(objectValues(mixdObject));

// ? Soru-12 Öğrenciler dizisinde (objelerden oluşan) en genç öğrenciyi bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const university = {
//   name: "Teknoloji Üniversitesi",
//   established: 1995,
//   location: {
//     city: "İstanbul",
//     country: "Türkiye",
//   },
//   faculties: [
//     {
//       name: "Mühendislik Fakültesi",
//       departments: [
//         {
//           name: "Bilgisayar Mühendisliği",
//           students: [
//             {
//               id: 101,
//               name: "Ali Yılmaz",
//               age: 21,
//               isGraduated: false,
//               scores: [80, 92, 74, 88],
//               address: {
//                 city: "Ankara",
//                 postalCode: 6000,
//               },
//             },
//             {
//               id: 102,
//               name: "Ayşe Demir",
//               age: 22,
//               isGraduated: false,
//               scores: [95, 85, 90, 100],
//               address: {
//                 city: "İstanbul",
//                 postalCode: 34000,
//               },
//             },
//           ],
//         },
//         {
//           name: "Elektrik-Elektronik Mühendisliği",
//           students: [
//             {
//               id: 201,
//               name: "Mehmet Kaya",
//               age: 23,
//               isGraduated: true,
//               scores: [70, 65, 80, 60],
//               address: {
//                 city: "İzmir",
//                 postalCode: 35000,
//               },
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "İktisadi ve İdari Bilimler Fakültesi",
//       departments: [
//         {
//           name: "İşletme",
//           students: [
//             {
//               id: 301,
//               name: "Selma Arslan",
//               age: 20,
//               isGraduated: false,
//               scores: [88, 76, 91, 85],
//               address: {
//                 city: "Bursa",
//                 postalCode: 16000,
//               },
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   contact: {
//     phone: "+90 212 555 55 55",
//     email: "info@teknolojiuni.edu.tr",
//   },
// };

// const result = JSON.stringify(university);

// const formatJson = (arr) => {
//   return JSON.stringify(arr);
// };

// const formatJs = (arr) => {
//   return JSON.parse(arr);
// };

// console.log(formatJson(university));

// console.log(formatJs(result));

// ? Soru-13 Öğrenciler dizisinde (objelerden oluşan) en genç öğrenciyi bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------
/*  Soru:
Bir sınıfta öğrencilerin bilgileri bir array içinde obje olarak tutuluyor.  
Her öğrenci objesinde "name", "grades" (notların olduğu array) ve "passed" (boolean) alanı var.  

Görev: Öğrencilerin ortalamasını hesaplayıp, 
- ortalama 60 ve üzeri olanların "passed" değerini true,  
- altında olanların "passed" değerini false yap.  

Sonuçta öğrencilerin güncellenmiş halini döndüren bir fonksiyon yaz.  

Örnek veri:
const students = [
  { name: "Ali", grades: [70, 80, 65], passed: null },
  { name: "Ayşe", grades: [40, 55, 50], passed: null },
  { name: "Mehmet", grades: [90, 95, 100], passed: null },
];

Beklenen çıktı:
[
  { name: "Ali", grades: [70, 80, 65], passed: true },
  { name: "Ayşe", grades: [40, 55, 50], passed: false },
  { name: "Mehmet", grades: [90, 95, 100], passed: true }
]
*/

const students = [
  { name: "Ali", grades: [70, 80, 65], passed: null },
  { name: "Ayşe", grades: [40, 55, 50], passed: null },
  { name: "Mehmet", grades: [90, 95, 100], passed: null },
];

const passGrade = 70;

const passedStudents = (arr) => {
  for (let student of arr) {
    let total = 0;
    for (let grade of student.grades) {
      total += grade;
    }
    let average = total / student.grades.length;

    if (average >= passGrade) {
      student.passed = true;
    } else {
      student.passed = false;
    }
  }
  return arr;
};

console.log(passedStudents(students));
