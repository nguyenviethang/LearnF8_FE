/**
 * tham số hàm - js cơ bản
 * 
 * 1. tham số
 * - định nghĩa?
 * - kiểu dữ liệu?
 * - tính private?
 * - 1 tham số?
 * - nhiều tham số
 * 
 * 2. truyền tham số
 * - 1 tham số
 * - nhiều tham số
 * 3. Arguments?
 * - Đối tượng arguments trong function
 * - Giới thiệu vòng for of
 * 
 */
// function writeLog(message, message2) {
//     console.log(message);
//     console.log(message2);
// }

// writeLog('Testing message', 'test2');
//một function chỉ nên làm mọt việc vậy nên hàm càng ít tham số càng tốt

console.log(1, 2, 3, 4)


// function writeLog() {
//     console.log(arguments);
// }
// writeLog('Log 1', 'Log 2');

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `;
    }
    console.log(myString);
}
writeLog('Log 1', 'Log 2');