//return trong hàm - js cơ bản

// confirm('Message?');

// var isConfirm = confirm('Message');
// console.log(isConfirm);

function plus(a, b) {
    return a + b;
    //một hàm không return thì nó sẽ trả về undefined
    //sau từ khóa returrn thì không chạy dọng code dưới
}
var result = plus(2, 8);
console.log(result);