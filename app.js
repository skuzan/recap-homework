// ? Soru-1 Bir dizideki en büyük sayıyı bulan fonksiyonu yaz. Örn: [3, 7, 2, 9, 12] => 12
//----------------------------------------------------------------------------------------

// const numbers = [32, 45, 3, 7, 2, 12];

// const largestNummmer = (number) => {
//   return numbers.reduce((acc, num) => (num > acc ? num : acc));
// };

// console.log(`En büyük sayı : `, largestNummmer(numbers));

// ? Soru-2 Bir dizideki sayıların kareköklerinden oluşan yeni bir dizi döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

// const sqrt = (numbers) => {
//   return numbers.map((num) => Math.sqrt(num));
// };

// console.log(sqrt(numbers));

// ? Soru-3 Bir diziden sadece çift sayıları yeni bir diziye aktaran fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = (numbers) => {
//   return numbers.filter((num) => num % 2 === 0);
// };

// console.log(evenNumbers(numbers));

// ? Soru-4 Bir dizide verilen elemandan kaç tane olduğunu bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const arr = ["a", "b", "a", "c", "a"];

// const countWord = (arr, value) => {
//   return arr.reduce((acc, item) => (item === value ? acc + 1 : acc), 0);
// };

// console.log(countWord(arr, "a"));

// ? Soru-5 Bir dizideki negatif sayıların toplamını bulan fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [10, -4, 7, -9, 11, 15, -19];

// const negativeNumbers = (numbers) => {
//   return numbers.filter((num) => num < 0).reduce((acc, num) => acc + num, 0);
// };

// console.log(negativeNumbers(numbers));

// ? Soru-6 Bir isimler dizisindeki her ismin uzunluğunu döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const arr = ["Ali", "Mehmet", "Sinan", "Hüseyin", "Ömer", "Erdem", "Elif"];

// const lengtNamen = (ary) => {
//   return arr.map((item) => item.length);
// };

// console.log(lengtNamen(arr));

// ? Soru-7 Bir dizideki her sayıyı verilen çarpanla çarpıp döndüren fonksiyon yaz.
//----------------------------------------------------------------------------------------

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const multiply = (arr, factor) => {
//   return arr.map((item) => item * factor);
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

// const objectValues = (arr) => {
//   for (let key in arr) {
//     console.log(`${key}:`, arr[key]);
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
