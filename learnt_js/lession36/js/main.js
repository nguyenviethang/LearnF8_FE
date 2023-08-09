//toán tử so sánh phần 2

/***
 * 
 * === 
 * !==
 */

var a = 1;
var b = '1';
console.log(a !== b);

/**
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
 * 
 * console.log(Boolean(1)) // true
console.log(Boolean(['BMW'])) // true
console.log(Boolean({ name: 'Miu' })) // true

console.log(!!'hi') // true


!! là gì? Đơn giản thôi. Toán tử ! là toán tử not (phủ định) nên !! là 2 lần phủ định, mà 2 lần phủ định lại trở thành "khẳng định". Trong Javascript thì đây là một "tip" để convert (chuyển đổi) mọi kiểu dữ liệu khác sang Boolean.

vi du: 
console.log(!!1) // true
console.log(!!'f8') // true
console.log(!!['Mercedes']) // true

Trong Javascript có 6 giá trị sau được coi là Falsy:

false
0 (số không)
'' or "" (chuỗi rỗng)
null
undefined
NaN

vidu:
console.log(!!false) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!NaN) // false

Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:

'0' (một chuỗi chứa số không)
' ' (một chuỗi chứa dấu cách)
'false' (một chuỗi chứa từ khóa false)
[] (một array trống)
{} (một object trống)
function(){} (một hàm "trống")


 */