// setInterval(function() {
//     console.log('toi la nguyen viet thang')
// }, 1000)

/**
 * giới thiệu các loại toán tử js
 * - toán tử số học
 * - toán tử gán
 * - toán tử so sánh
 * - toán tử logic
 */


/**
 * toán tử số học: + - * **(luy thua) / %(chia lay du) ++ --
 */
// var a =1 + 2;
// console.log(a);
// var a = 8;
// var b = 2;
// var c = a + b;
// ++a; công trước và thực hiện sau (hiểu đơn giản là trả lương trước và làm việc sau)
// a++; thực hiên xong code trươc và thêm sau( hiểu đơn giản là làm việc trước và trả lương sau)
// a--;
// --a;
// console.log(c);

//example
 var number = 6;
 var output = number++ + --number;
 //giai tich number++ la 6, sau khi thuc hien toan tu number++ thi number = 7,biến number dc gan cho --number, --number thuc hien ngay viec trừ 1, nên --number = 6 ==> output = 6 + 6

/**
 * toán tử gán: = += -= *= /= **=
 * example: x += y => x = x + y
 */

// var a = 1;
// a += 2;
// console.log(a);

// var fullName = 'nguyen viet thang';


/**
 * toán tử so sánh > < =
 */

// var a = 1;
// var b = 2;
// if (a > b) {
//     alert('dung');
// }


/**
 * toán tử logic && |= |== == ===
 */

// if (a > 0 && b > 0) {
//     alert('a va b lon hon 0');
// }