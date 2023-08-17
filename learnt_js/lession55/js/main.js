/**
 * chuỗi trong js
 * 1. tạo chuỗi
 * - các cách tạo chuỗi
 * - Nên dùng cách nào? lý do?
 * - kiểm tra datatype
 * 2. một số case sự dụng backslash(\)
 * 3. xem độ dài chuỗi
 * 4. chú ý độ dài khi viết code
 * 5. Template string ES6
 * 
 */

//có 2 cách tạo chuỗi
// var fullNmae = 'thang'; --> nên dùng cách này để tạo chuỗi vì nó nhanh hơn cách 2, và cách 2 tạo ra kiểu dữ liệu không đúng như ý dev
// var fullName = new String('thang');
// console.log(typeof fullName)

// seach gg backslash js
// var fullName = 'thang'
// + 'la'
// + 'sieu'
// + 'nhan';
// console.log(fullName.length);

var firstName = 'nguyen';
var lastname = 'Thang';
console.log(`toi la: ${firstName} ${lastname}`);