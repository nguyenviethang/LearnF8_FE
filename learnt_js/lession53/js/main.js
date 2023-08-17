/**
 * các loại function
 * 
 * 1. Declaration function - có thể gọi function trước khi định nghĩa function
 * 
 * 2. Expression function - không thể gọi function trước khi định nghĩa function, có thể đặt tên cho function để dễ hiểu mục đích của function nhưng thường để ngắn gọn thì người ta lược bỏ đi tên function vì tên biến cũng đã thể hiện được mục đích của function rồi
 * 3. Arrow function
 * 
 * 
 */

function showMessage() {
    //declaration function
    console.log('Declaration function');
}

var showMessage2 = function() {
    //Expression function
    console.log('Expression function');
}

showMessage();

showMessage2();

setTimeout(function autoLogin() {
    //expression function
    //function này dưới dang tham số
    //callback
});

var object = {
    myFunction: function() {
        //expression function
    }
}