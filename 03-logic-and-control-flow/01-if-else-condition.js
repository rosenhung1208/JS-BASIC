console.log("Bai tap vi du 3 - login and control flow");

let loginStatus = "locked";

if (loginStatus === "success") {
    console.log("test pass: Login thanh cong");
    
}
else if (loginStatus === "locked") {
    console.log("Tai khoan bi khoa");
    
} else {
    console.log("test fail: login that bai");
    
}

// toan tu 3 ngoi, ket qua tra ve phu thuoc vao mot bien khac
let score2 = 95;
let result;
if (score2 >= 90) {
    result = "XS"
} else if (score >= 50) {
    result ="Đậu"
} else {
    result = "Tèo";
}
console.log(result);
// Viêt lại đonạ tren theo toán tử 3 ngôi
console.log("Viet lai theo toan tu  3 ngoi co 3 th"); // Viết như này khó nhìn, nên chỉ viết toán tử 3 ngôi nếu có 2 điều kiện thôi

let result2 =  score2 >= 90 ? 'xs' :score2 >= 50 ? "Đậu" : "Tèo";
console.log(result);


// ## Toán tử 3 ngôi - Lối tắt của `if/else`

// Gọi là toán tử 3 ngôi vì nó có 3 thành phần.

// ### Cú pháp

// ```js
// let bien = dieuKien ? giaTriNeuDung : giaTriNeuSai;
// ```

// ### Ý nghĩa

// - Dấu `?` dùng để hỏi điều kiện đúng hay sai.
// - Dấu `:` dùng để ngăn cách giữa:
//   - giá trị khi đúng ở bên trái
//   - giá trị khi sai ở bên phải

// Cách đọc:

// - Nếu điều kiện đúng thì lấy vế bên trái dấu `:`.
// - Nếu điều kiện sai thì lấy vế bên phải.

// ## Best practice - Khi nào dùng

// ### Ưu tiên toán tử 3 ngôi khi

// - Bạn chỉ cần chọn **1 giá trị**.
// - Bài toán chỉ có **2 kết quả**.
// - Mỗi nhánh đều ngắn và đọc là hiểu ngay.

// Rất phù hợp cho các trường hợp:

// - Gán text cho biến
// - Chọn config
// - `return` một giá trị ngắn
// - Hiển thị nhãn đơn giản

// ### Ưu tiên `if/else` khi

// - Trong mỗi nhánh có nhiều hành động.
// - Bạn cần `console.log`, `click`, `screenshot`, gọi API, ...
// - Bạn muốn code rõ ràng theo từng bước.
// - Bạn biết logic này sẽ còn được mở rộng thêm.

// cach viet binh thuong theo if else 
console.log("Toan tu 3 ngoi ");

let diem = 8;
let trangThai;
if (diem >= 5) {
    trangThai = "Pass";
} else {
    trangThai = "Fail";
}

// Cach viet theo toan tu 3 ngoi
let trangThai1 = diem >=5 ? 'Pass' : 'Fail'; // cách đọc, nếu đk điểm >= 5 thì trạng thái pass, còn điểm ko >=5 thì fail
console.log(trangThai1);

// dùng toán tử 3 ngôi để gán text
let isSaving = true;
let buttonText = isSaving ? "Đang lưu" : "lưu";
console.log(buttonText);

// dùng toán tử 3 ngôi chọn config
 let isCI = false;
 let reportMode = isCI ? "html" : "list";
 console.log(reportMode);

 // dùng toán tử 3 ngôi hiển thị nhãn
 let hasBug = true;
 let statusLable = hasBug ? "có bug" : "ổn";
 console.log(statusLable);
 
// bai tap: viet lai ham duoi day dung if else, chuyen doi tu toan tử 3 ngôi sang if else
 let failedTests = 2;
 let suiteStatus = failedTests === 0 ? "Pass" : failedTests <= 3 ? "Warning" : "Fail";

 if (failedTests === 0) {
    suiteStatus = "Pass"
    
 } else if(failedTests <=3) {
    suiteStatus = "warning"
    
 } else {
    suiteStatus = "Fail";
    
 }

 // Dữ liệu lấy từ web ("", hoặc "https://github.com...")
// người mới học hay viết như này
 let githubLink = "";
 if (githubLink !== "" && githubLink !== null && githubLink !== undefined) {
    console.log("user đã upload github link");
 } else {
    console.log("chưa upload");
    
 }
 // Lập trình viên sẽ viết như này
 if(githubLink) {
    console.log("Đã upload");
    
 } else {
    console.log("chưa upload");
    
 }
//  Giải thích trực quan code của bạn:
// Trường hợp 1: Nếu githubLink = "" (Chuỗi rỗng)JavaScript thấy chuỗi rỗng nằm trong danh sách Falsy $\rightarrow$ 
// if (githubLink) biến thành if (false) $\rightarrow$ Chạy vào nhánh else (In ra "Chưa upload").Trường hợp 2: Nếu githubLink = "https://github.com..." (Có link)JavaScript thấy chuỗi có ký tự là Truthy $\rightarrow$ if (githubLink) biến thành if (true) $\rightarrow$ Chạy vào khối if (In ra "User đã upload github link").
// Trường hợp 3: Nếu githubLink bị null hoặc undefined (Do lỗi từ phía server không trả về data)Cả null và undefined đều là Falsy $\rightarrow$ if (githubLink) vẫn biến thành 

// bt vd, minh can check xem là rawUserName có hop le hay khong, neu rong la khong hop le va ngươc lai
let userName = "    "
if (userName.trim()) {
    console.log("hop le") ;
} else {
    console.log("ko hop le");
    
}

//swich case
let role = "admin";

switch (role) {
    case "admin":
        console.log("Cấp quyền trùy cập vào toàn bộ ht");
        break;
    case "editor":
        console.log("Cấp quyền chỉnh sửa");
        break;
    default:
        console.log("role không hợp lệ");
        
}

// vòng lặp while
let miengThit = 5;
while (miengThit > 0) {
    console.log(`đang ăn... còn lại ${miengThit} miếng`);
    miengThit--;
}
console.log("đã ăn hết, no bụng");

// trong auto có nút retry - thử lại n lần
//viết code tìm nút thanh toán , cứ 1s tìm lại 1 lần, tối đa 5 lần nếu thấy thì dừng, quá 5 lần báo lỗi
console.log("xu ly rety");

let maxRetry = 5;
let currentRetry = 1;
let isFound = false;
while(isFound === false && currentRetry <= maxRetry) {
    console.log("đang tìm nút thanh toán trên màn hình...");
    // giả lập tìm kiếm ( là 1 tỉ lệ tìm kiếm < 0.3)
    let toolGiaLap = Math.random();
    let searchRessult = toolGiaLap > 0.3;
    console.log(`serch result: ${toolGiaLap}`);
    if(searchRessult === true) {
        isFound = true;// tìm thấy rồi, đổi trạng thái để thoát vòng lặp
        console.log("Ngon, đã tìm thấy nút thanh toán. bấm click ngay");
        
    }else {
        console.log("không tìm thấy, chuẩn bị thử lại");
        currentRetry++;
    }
        
}
// xư ly ket qua
if(isFound ===false){
    console.log("test fail, đã thử 5 lần nhưng mạng lag quá, không tìm thấy nút");
    
}

// yêu cầu
// 1. dùng while để mô phỏng quá trình nhập mật khẩu  (tối đa 3 lần)
//2 ở mỗi lần thử, giả lập người dùng nhập mật khẩu bằng cách, gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else)
// neesunhaapj đúng in ra " đăng nhập thành công"
// nếu nhập sai in ra sai mật khẩu
// check sau khi thoát vòng lặp, kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra tài khoản bị khóa
console.log("Bai tap vi du 4- bai giai");

const MAT_KHAU_GOC = "9999"; // Mật khẩu đúng được lưu trên hệ thống
let maxRetry1 = 3;            // Số lần thử tối đa
let currentRetry1 = 1;        // Lần thử hiện tại
let isSuccess = false;       // Trạng thái dùng để kiểm tra đăng nhập thành công chưa

// 1. Dùng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
while (isSuccess === false && currentRetry1 <= maxRetry1) {
    console.log(`--- Lần nhập thứ ${currentRetry1} ---`);
    
    let matKhauNhap = "";
    
    // 2. Ở mỗi lần thử, giả lập người dùng nhập mật khẩu bằng cách gán cứng giá trị (dùng if else)
    if (currentRetry1 === 1) {
        matKhauNhap = "0000"; // Lần 1: Giả lập nhập sai
    } else if (currentRetry1 === 2) {
        matKhauNhap = "1111"; // Lần 2: Giả lập nhập sai tiếp
    } else if (currentRetry1 === 3) {
        matKhauNhap = "9999"; // Lần 3: Giả lập nhập đúng
    }

    console.log(`Mật khẩu bạn vừa nhập: "${matKhauNhap}"`);

    // 3. Nếu nhập đúng in ra "đăng nhập thành công"
    if (matKhauNhap === MAT_KHAU_GOC) {
        console.log("Đăng nhập thành công 🎉");
        isSuccess = true; // Đổi trạng thái thành true để kết thúc vòng lặp ngay lập tức
    } 
    // 4. Nếu nhập sai in ra "sai mật khẩu"
    else {
        console.log("Sai mật khẩu! ❌");
        currentRetry1++; // Tăng số lần thử lên 1 để chuẩn bị cho lần tiếp theo
    }
}

// 5. Check sau khi thoát vòng lặp, kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra tài khoản bị khóa
if (isSuccess === false) {
    console.log("Tài khoản bị khóa! 🔒 (Bạn đã nhập sai liên tiếp 3 lần)");
}