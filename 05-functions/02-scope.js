// Scope

// - Là phạm vi quy định một biến được phép tồn tại và được nhìn thấy ở đâu trong đoạn code.

// - **A. Global scope** (phạm vi toàn cục)
//   - **Đặc điểm:** Biến được khai báo lộ thiên, không nằm trong bất kỳ cặp ngoặc `{}` hay `function` nào.
//   - **Quyền lực:** Là “vua” — gần như mọi nơi trong file code đều có thể nhìn thấy và sử dụng nó.
// nên hạn chế biến vì thằng khác đều truy cập và thay đổi nó
let tenMoiTruong = "STAGING";
let baseUrl = "https://staging.neko.vn";
function chayTest(){
    // hàm này bên trong nhưng vẫn nhìn thấy biên GLOBAL ở bên ngoài
    console.log(`đang chạy test trên ${tenMoiTruong}`);
}

function chayTestKhac() {
    console.log(`Ham khac cung thay ${tenMoiTruong}`);
    
}
chayTest();
chayTestKhac();

soLanClick = 0;
function testDangNhap(){
    soLanClick = 5;
}

function testDangKy() {
    soLanClick = 10;
}
testDangNhap();
testDangKy();
console.log(soLanClick);

// - **B. Function scope** (phạm vi hàm)
//   - **Đặc điểm:** Biến được khai báo **bên trong một hàm**.
//   - **Quyền lực:** Chỉ hoạt động trong phạm vi của hàm đó.
//   - Những gì sinh ra trong hàm sẽ “chết” khi hàm chạy xong.
//   - Thế giới bên ngoài **không thể nhìn thấy** nó.
// ví dụ
function taoTaiKhoan(){
    let matKhauBaoMat = "Secret123";
    let token = "abc-xyz";
    console.log(`Mat Khau là ${matKhauBaoMat}`);
    console.log(`Token: ${token}`);
}

taoTaiKhoan();

// console.log(matKhauBaoMat);// sẽ báo lỗi vì biến này sinh ra trong hàm thì ko thể gọi ở ngoài


// - **C. Block scope** (phạm vi khối)
//   - Bất kỳ thứ gì nằm trong ngoặc nhọn `{}` của `if`, `for`, `while`,... đều tạo thành một block scope.
//   - Những gì xảy ra trong ngoặc nhọn sẽ ở lại trong đó.
//   - Nên dùng `let` hoặc `const`, **không dùng `var`** nếu muốn có block scope.

if (true) {
    let theNhieuTien = "Visa platinum";
    const soTien = 9999999999999;
    console.log(theNhieuTien);
}
//   console.log(theNhieuTien);// ko truy cập dc

// - **D. Cạm bẫy: `object` không phải là một scope**
//   - Hình thức có thể giống nhau, nhưng vai trò và bản chất hoàn toàn khác nhau.
//   - **Scope** là vùng nhìn thấy biến.
//   - **Object** là hộp dữ liệu chứa các cặp `key-value`.
//   - Scope trả lời câu hỏi: **“Biến này đứng ở đây còn nhìn thấy không?”**
//   - Object trả lời câu hỏi: **“Dữ liệu này nằm trong property nào?”**
//   - **Object không tạo ra scope.**
// ví dụ
//
if (true) {
    let secret = 123; // Scope trả lời câu hỏi: **“Biến này đứng ở đây còn nhìn thấy không?”**
}

const user222 = {
    name: "neko",
};
user222.name; //Object trả lời câu hỏi: **“Dữ liệu này nằm trong property nào?
// Trong scope hiện tại js chỉ biết chắc chắn là có biến user22

// khi nào thằng tên này trở thành cái biến
const { ten } = user222;


// - **Scope chain**
//   - Khi tìm biến, JavaScript tìm **từ trong ra ngoài**, không bao giờ tìm từ ngoài vào trong.
//   - Hàm con nhìn thấy biến của hàm cha.
//   - Hàm cha **không** nhìn thấy biến của hàm con.

let mau = "do"; // biến global 

function ngoai(){

    // function scope của ngoài () - hàm cha
    let size = "Lớn";
    // function scope của hàm con 

    // trong() tim biến theo scope chain
    function trong() {
        let gia = 1000;
        // tìm thấy ngay tại chỗ vì giá là của fc trong()
        console.log(gia);
        // ko có ở đây -> leo ra ngoài tìm -> lớn
        console.log(size);
        // ko có ở đây - leo ra ngoài() -> global ()
        console.log(mau);
    }
    trong();
    // lỗi vì  thằng cha ko nhìn dc thằng con
    console.log(gia);
}
ngoai();
console.log(size);

