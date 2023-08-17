//hiểu hơn về câu lệnh điều kiện
//và phép so sánh
/**
 * có 6 giá trị khi chuyển sang boolean thi la gia trị false: 0, '', null, undefined, NaN, false 
 */

var a = 1;
var b = 2;

// var result = 'A' && 'B' && 'C' && 'D' && 'E' && 'F';
//kết quả là F,
/**giải thích: với toán tử logic &&, đoc giá trị vê phải và so sánh với 6 giá trị falsly, nếu khác thì nó gián cho vế trái và tiếp tục như vậy cho hết vế phải thi giá trị cuối cùng là F nên nó sẽ lưu giá trị F, và ngược lại nêu gặp một trong 6 giá trị falsly thì nó nhận ngay giá trị fasly đấy và ngừng đọc tiếp 
 * 
 */

var result = 'A' || 'B' || 'C' || 'D' || 'E' || 'F';
//kết quả là A,
/**giải thích: với toán tử logic ||, đoc giá trị vê phải và so sánh với 6 giá trị falsly, nếu khác thì nó gián cho vế trái và dừng chạy câu lệnh ở đây. nên nó sẽ lưu giá trị A.
 */

console.log(result);

// var result = a < b && a < 0;
// console.log('result', result);
// if (a < b) {
//     console.log('A < B');
// } else {
//     console.log('A > B');
// }