/**toán tử logic
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

// var a = 1;
// var b = 2;
// var c = 3;
// if (a > 0 && b > 0 && c > 0) {
//     console.log('điều kiện đúng');
// }

var a = true;
var b = false;
var c = a || b;
var d = b && c;

console.log(c, d); // Output: ?

/**
 * Với toán tử hoặc (||), nếu xuất hiện ít nhất 1 vế bằng true thì kết quả trả về sẽ là true.

  Còn với toán tử và (&&), nếu xuất hiện ít nhất 1 vế bằng false thì kết quả trả về sẽ là false.
 */