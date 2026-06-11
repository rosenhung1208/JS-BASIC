// - Kiểu dữ liệu (data types)
// - Nhóm kiểu dữ liệu nguyên thủy (primitive types)
//   - `string` (chuỗi ký tự)
//     - Được bao bọc bằng dấu nháy đơn (`'`) hoặc dấu nháy kép (`"`).
//     - Có thể dùng dấu backtick (`` ` ``).

// - Nếu là chuỗi bình thường và không cần nhúng biến, có thể dùng cả dấu nháy đơn (`'...'`) hoặc dấu nháy kép (`"..."`).
//   - Dùng dấu nháy kép (`"..."`) khi bên trong chuỗi có dấu nháy đơn (`'`).
//   - Dùng dấu nháy đơn (`'...'`) khi bên trong chuỗi có dấu nháy kép (`"`).
//   - Nếu cần nhúng biến, dùng dấu backtick (`` `...${tenBien}...` ``).

//   sẽ có những extension để format code cho đẹp ví dụ như là
//   prettier /eslint

let loiChao = "xin chao buoi sang";
let loiChao2 = "xin chao buoi sang";
let myName = "I'm Andy";

const tenHocVien = "Ali";
// dung backtick nhung bien ten hoc vien vao giua cau hoac 1 chuoi khac

const loiGioiThieu = `My name is ${tenHocVien}`; // tao cau gioi thieu co chen gia tri bien
// khi noi nhieu chuoi lai voi nhau thi dung backstick
console.log(loiGioiThieu);

const productName = "iPhone  15 promax";
const productSelector = `h2:has-text("${productName}")`;
console.log(productSelector);

//  - Number (số)
//   - Không phân biệt số nguyên (`10`) hay số thập phân (`3.14`) — tất cả đều được gọi chung là `number`.
//   - Quy tắc đóng gói của `number`: viết trực tiếp, không bao quanh bởi ký tự nào cả.

let tuoi = 30;
const PI = 3.14;

let ketQua = (tuoi - 5)*2;
console.log(ketQua);

// - Boolean (luận lý) giống như một công tắc đèn.
//   - Nó chỉ có 2 trạng thái duy nhất: bật `true` hoặc tắt `false`.
//   - Quy tắc đóng gói của `boolean`: viết trực tiếp `true` hoặc `false`, không bao quanh bởi ký tự nào cả.

let denDangBat = true; // den sang
let daTotNghiep = false; // chua tot nghiep

// - `.length`: dùng để đếm số ký tự của chuỗi, bao gồm cả dấu cách.
//   - Cú pháp: `tenBien.length`
//   - Lưu ý: không có dấu ngoặc `()` vì đây là thuộc tính, không phải method.

let matKhau = "1234567";
console.log(matKhau.length);

// - trim() - cái kéo cắt tỉa - nó sẽ làm sạch khoảng trắng ở 2 đầu

// - Ví dụ: `input: " admin@example.com " -> "admin@example.com"`
//   - Cú pháp: `tenBien.trim()`

let emailWeb = "  user01   ";

let emailChuan = emailWeb.trim();
console.log(emailChuan);
console.log(emailChuan.length);

// - `toUpperCase()` và `toLowerCase()` - máy biến hình
//   - Dùng để biến tất cả ký tự thành chữ HOA hoặc chữ thường.
//   - Cú pháp: `tenBien.toUpperCase()` và `tenBien.toLowerCase()`

//IPHONE 15 - data test lai la iphone 15
// giai phap chuyen ca 2 ve cung 1 kieu (thuong laf lowercase) roi moi so sanh

let tenSanPham = "iPhone 15";
console.log(tenSanPham.toLocaleLowerCase());

// - `includes()` - kính lúp tìm kiếm
//   - Dùng để kiểm tra xem một chuỗi con có nằm trong chuỗi mẹ hay không.
//   - Kết quả trả về: `true` hoặc `false`
//   - `includes()` phân biệt chữ HOA/chữ thường (case-sensitive).
//   - Nó so khớp chính xác từng ký tự, bao gồm cả chữ hoa và chữ thường.
//   - Ví dụ: `Error` và `error` là hai chuỗi khác nhau.

let thongBao = "Dang nhap that bai. Sai mat khau";
console.log(thongBao.includes("Thanh Cong"));
console.log(thongBao.includes("mat khau"));

let msg = "login Error: invalid password";
console.log(msg.includes("Error"));
console.log(msg.includes("error"));

let a = "Hello";
let b = "hello";

console.log(a.toLocaleLowerCase() === b.toLocaleLowerCase());

// - `replace()` - xóa và sửa lỗi
//   - Đặc điểm: mặc định chỉ thay thế **lần xuất hiện đầu tiên** mà nó tìm thấy.
//   - Cú pháp: `tenBien.replace("cu", "moi")`
let giaTien = "100$";
let giaTienSo = giaTien.replace("$", "");
console.log(giaTienSo);

// - `replaceAll()` - máy hút bụi công nghiệp
//   - Dùng để thay thế **tất cả** chuỗi khớp.
let tien = "1.000.000";
console.log(tien.replaceAll(".",""));

// - `indexOf()` - máy dò vị trí
//   - Tìm vị trí (index) đầu tiên của một chuỗi con bên trong chuỗi mẹ.
//   - Nếu không tìm thấy, trả về `-1`.
//   - Cú pháp: `chuoiMe.indexOf("chuoiCon")`
//   - Kết quả: trả về số, là vị trí bắt đầu tính từ `0`.

let urlUI = "https://shopee.vn/product/12345";
console.log(urlUI.indexOf("product"));



// - `substring()` / `slice()`
//   - Cắt lấy một phần của chuỗi dựa trên vị trí bắt đầu và vị trí kết thúc.
//   - Điểm cực kỳ quan trọng:
//     - `start`: được tính vào
//     - `end`: không được tính vào
// - `slice()` và `substring()` đều dùng để cắt chuỗi.
// let text = "ABCDEFG";

// text.slice(1, 4); // "BCD"
// ```

// - Cú pháp:
//   - `chuoi.substring(batDau, ketThuc)`: cắt từ vị trí bắt đầu đến trước vị trí kết thúc.
//   - `chuoi.slice(batDau, ketThuc)`: cắt tương tự, nhưng hỗ trợ số âm.
// let maDon = "ORD-2026-00567";

// maDon.substring(4, 8); // "2026"
// ```

// ```js
// let fileName = "report_2026.pdf";

// fileName.slice(-4); // ".pdf"
// ```

// - Khi nào dùng:
//   - Muốn lấy phần cuối chuỗi hoặc đuôi file: ưu tiên `slice()`.
//   - Cắt đơn giản từ trái sang phải: `slice()` hoặc `substring()` đều được.
//   - Nếu không truyền `end`, hàm sẽ lấy từ vị trí `start` đến hết chuỗi.
//   - Nếu chỉ truyền 1 tham số, nó sẽ lấy từ vị trí đó đến hết chuỗi.



//slice so am 
let fileName = "report_2026.pdf";
console.log(fileName.slice(-4));

// indexOf ket hop voi substring() de cat lay 1 phan chuoi tu vi tri tim duoc 
let errorMsg = "Error 404: Page not found";
let pos = errorMsg.indexOf(":");
console.log(errorMsg.substring(errorMsg.indexOf(":")+2));

// - Tư duy kết hợp nhiều string method:
//   - Đừng cố nhớ rời rạc từng method.
//   - Hãy tư duy theo quy trình:

// 1. Dữ liệu có bẩn không?  
//    → dùng `trim()`, `replace()`, `replaceAll()`, `toLowerCase()`

// 2. Có cần kiểm tra sự tồn tại hay không?  
//    → dùng `includes()`

// 3. Mốc bắt đầu nằm ở đâu?  
//    → dùng `indexOf()`

// 4. Sau khi biết vị trí rồi, cần cắt đoạn nào?  
//    → dùng `slice()`, `substring()`

// 5. Kết quả cuối cùng có cần chuẩn hóa nữa không?  
//    → dùng `trim()`, `toLowerCase()`, `split()`

// - Công thức tư duy: **LÀM SẠCH → TÌM MỐC → CẮT/TÁCH → CHUẨN HÓA → KIỂM TRA**




//bai toan vi du
let rawText = " Order ID: ORD-2026-123 | Status: Success   ";
let cleanTex = rawText.trim();
let startText = rawText.indexOf(":");
let endText = rawText.indexOf("|");
let result = cleanTex.slice(startText + 1, endText - 1)
console.log(result);

// Hộp đồ nghề xử lý Number

// - `"100"` → `100`

// - **Ép kiểu**
//   - Để tính toán, bắt buộc phải chuyển dữ liệu về kiểu `Number`.
//   - `Number()`
//     - Cố gắng chuyển toàn bộ chuỗi thành số.
//     - Nếu chuỗi chứa chỉ một ký tự không hợp lệ, kết quả sẽ là `NaN` (`Not a Number`)
let numberA = "100";
console.log(Number(numberA)); // tra ve 100

let numberB = "100px";
console.log(Number(numberB)); // Tra ve NAN vi co px

//   - `parseInt()`
//     - Giống như máy lọc số nguyên.
//     - Đọc từ trái sang phải, gặp số thì lấy, gặp chữ thì dừng.
//     - Bỏ qua phần thập phân.
console.log(parseInt(numberB));
console.log(parseInt("100.99"));
//   - `parseFloat()`
//     - Giống như máy lọc số thập phân.
//     - Hoạt động tương tự `parseInt()`, nhưng giữ lại phần thập phân.
console.log(parseFloat("10.5kg"));
//NOTE khi convert thanh 0, console.log(number());
// => if (str.trim()==="") {'// xu ly logic}

// - **Một số phương thức làm việc với `Number`**
//   - `toFixed()`
//     - Dùng để cố định số chữ số sau dấu phẩy.
//     - Cú pháp: `so.toFixed(soLeMuonLay)`
//     - Tự động làm tròn dựa vào chữ số ngay sau vị trí muốn giữ.
//       - `>= 5` → làm tròn lên
//       - `< 5` → làm tròn xuống
//       - Nếu thiếu, sẽ tự thêm số `0` vào cuối

console.log((19.956).toFixed(2)); // ra 19.96
console.log((19.9).toFixed(2)); // ra 19.90
console.log((19.9).toFixed()); // ra 20

// ## Đối tượng toán học (Math object)
// - **Làm tròn số nguyên**
//   - `Math.round()`: làm tròn theo quy tắc toán học.
//   - `Math.ceil()`: làm tròn lên. Ví dụ: `4.1 -> 5`.
//   - `Math.floor()`: làm tròn xuống. Ví dụ: `4.9 -> 4`.
let diem = 4.1;
console.log(Math.round(diem));
console.log(Math.ceil(diem));
console.log(Math.floor(diem));


// - **Tạo số ngẫu nhiên**
//   - `Math.random()`: trả về một số thập phân ngẫu nhiên từ `0` đến nhỏ hơn `1`.
//   - Ví dụ: `0.1123`, `0.999999`
// - **Tạo số ngẫu nhiên từ `min` đến `max`**
//   - Công thức:
//     `Math.floor(Math.random() * (max - min + 1)) + min`
// - Ví dụ: random từ `50` đến `55` sẽ có thể ra:
//   `50, 51, 52, 53, 54, 55`
//   - B1. `Math.random()` → từ `0` đến gần `1` (`0.99999999...`)
//   - B2. `max - min + 1` → `55 - 50 + 1 = 6` → tính tổng số kết quả có thể có (`50, 51, 52, 53, 54, 55` là `6` số)
//   - B3. `Math.random() * 6` → từ `0` đến `5.99999999...` → kéo giãn khoảng ra `6` đơn vị
//   - B4. `Math.floor()` → nhận được `0, 1, 2, 3, 4, 5` → làm tròn xuống để ra `6` số nguyên từ `0` đến `5`
//   - B5. `+ min` → dịch chuyển lên vị trí `min` → `50, 51, 52, 53, 54, 55`
// Vi du viet xong cong thuc moi lan chay no se show ra 1 so ngau nhien
let min = 50;
let max = 55;
let soLuong = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(soLuong);

// Kiem tra xem tra ve du lieu loai gi
const checkType = (19.956).toFixed(2);
console.log(typeof checkType);

// min, max
console.log(Math.max(10,5,6,20));
console.log(Math.min(10,5,3,20));
// abs - Bien so am thanh so duong
console.log(Math.abs(-15));

// - `padStart()` dùng để lấp đầy phần trống ở phía trước chuỗi.
// - Hàm này chèn thêm ký tự vào đầu chuỗi cho đến khi chuỗi đạt đủ độ dài mong muốn.
// - Lưu ý: `padStart()` là phương thức của `String`, không phải `Number`.
//   - Nếu đang có số, cần ép kiểu sang chuỗi trước khi dùng.

// - Cú pháp:
//   - `chuoi.padStart(doDaiMongMuon, kiTuChen)`

// - Ghi nhớ:
//   - Độ dài tổng bao gồm cả phần đệm.
//   - Nếu chuỗi chưa đủ độ dài `n`, hàm sẽ tự động thêm ký tự chèn vào đầu chuỗi cho đủ.

let ngay = 5;
// dau tien muon dung padStart phai ep kieu truoc

let chuoiNgay = String(ngay);
let ngayDep = chuoiNgay.padStart(2,"0");
console.log(ngayDep);

let ngayDep2 = chuoiNgay.padEnd(2,"2");
console.log(ngayDep2);

//Bien doi tu 5 sang SP-00005
let orderNumber = 5;
let chuoiOrder = String(orderNumber);

let orderNumberDep = chuoiOrder.padStart(8,"SP-0000");
console.log(orderNumberDep);

// cach  2 dung bastick

let orderNumber1 = 5;
let orderNumberStr = String(orderNumber1);

let orderID = orderNumberStr.padStart(5,"0");
console.log(`SP-${orderID}`);

// Vi du khac cho padEnd

let sanPham = "iPhone 18";
let gia = "1000$";
console.log(sanPham.padEnd(20,".") + gia);

// - Cách nhớ nên dùng hàm nào:
//   - Đầu vào hiện tại là text hay number?
//     - Nếu là text, cần nghĩ tới việc ép kiểu.
//   - Cần ép kiểu nghiêm ngặt hay linh hoạt?
//     - `Number()`, `parseInt()`, `parseFloat()`
//   - Sau khi thành số rồi, cần tính gì?
//     - Cộng, trừ, nhân, chia, `min`, `max`
//   - Có cần làm tròn không?
//   - Có cần hiển thị đẹp không?
//     - `toFixed()`, `padStart()`, `padEnd()`


// In ra màn hình (`console.log`)

// 1. Cách 1: Nối chuỗi bằng dấu cộng (`+`)
let userName = "neko";
let age = 18;
console.log("Ten san pham " + userName + " " + age);

// 2. Cách 2: Ngăn cách bằng dấu phẩy
console.log("Ten san pham", userName, age);

// 3. Cách 3: Dùng backtick (template literal)
console.log(`Ten san pham: ${userName} ${age} `); // Ten san pham: neko 18
console.log(`Ten san pham: ${userName} ${age + 1} `);// Ten san pham: neko 19