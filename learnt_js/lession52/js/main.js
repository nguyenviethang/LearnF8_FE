/**
 * một số điều cần biết về function
 * 
 * 1. Khi function đặt trùng tên? nó sẽ thực thi hàm sau cùng vì js là trình thông dịch
 * 2. khai báo biến trong hàm? có
 * 3. định nghĩa hàm trong hàm? có thể
 * 
 */

// function showMessage() {
//     console.log('Message 1');
// }

// function showMessage() {
//     console.log('Message 2');
// }

// showMessage();

// function showMessage() {
//     var fullName = 'thang';
// }
// showMessage();

function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}
showMessage();