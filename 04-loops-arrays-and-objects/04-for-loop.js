// ## Vòng lặp `for` - lặp lại có cấu trúc

// ### A. Vòng lặp `for` cổ điển

// - Đây là kiểu vòng lặp cơ bản, mạnh mẽ và xuất hiện trong hầu hết các ngôn ngữ lập trình.

// - **Cú pháp:**

//   ```js
//   for ([1. Khởi tạo]; [2. Điều kiện dừng]; [3. Bước nhảy]) {
//     // khối lệnh bên trong
//   }
//   ```

// - **[1] Khởi tạo:** Tạo biến đếm, chỉ chạy đúng 1 lần duy nhất.
// - **[2] Điều kiện dừng:** Được kiểm tra trước mỗi vòng lặp. Nếu `true` thì tiếp tục, nếu `false` thì dừng.
// - **[3] Bước nhảy:** Cập nhật biến đếm sau mỗi vòng lặp, thường là `i++` hoặc `i--`.
// - Ba phần được ngăn cách với nhau bằng dấu chấm phẩy `;`, không phải dấu phẩy `,`.
//   B. Vòng lặp `for...of` (dùng cho array và string)

// - Dùng để duyệt qua từng phần tử trong `array` hoặc từng ký tự trong `string`.

// - **Cú pháp:**

// ```js
// for (let phanTu of danhSach) {
//   // phanTu tự động nhận giá trị của từng phần tử
// }
// ```

// - `danhSach`: một `array` hoặc `string` muốn duyệt qua.
// - `phanTu`: biến tạm, tự động nhận **giá trị** của từng phần tử trong mỗi vòng lặp.
// - `of`: từ khóa.

// - **Lưu ý:** Không dùng `for...of` để duyệt `object`.
for (let i = 1; i <= 5 ; i++){
    console.log(`đang chạy vòng thứ ${i}`);
}
 // dung vong lap tao tk email test
let slAccount = 3;

for(let i = 1; i <= slAccount ; i++) {
    let emailTest = `nguoiDung_${i}@gmail.com`;
    console.log(`Đã tạo tk ${emailTest}`);
    
}


// Duyệt array băng index
let sanPham2 = ["Quần đùi", "Áo cộc", "Váy"];
for(let i = 0; i < sanPham2.length; i++){
    console.log(`san pham #${i +1} : ${sanPham2[i]}`);
    
}

// Duyệt object
let config2 = {
    browser: "Firefox",
    timeout: 2000,
    headless: true,
}
// object không dùng dc for cổ điển
let keys = Object.keys(config2);
for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let value = config2[key];
    console.log(`${key}: ${value}`);
    
}

/*trace thực thi:
1. tạo objec config2 với 3 thuộc tính:
    -browser: "Firefox"
    - timeout = 2000
    - headless = true
2. Goi object.keys(config2) để lấy mảng tên thuộc tính:
    keys = ["browser", "timeout","headless"]
3. vòng lặp bắt đầu với i = 0, điều kiên i < keys.length (3).
    - lần 1: i = 0
        key = "browser"
        value = config2["browser"] = "Firefox"
        In ra: browser: Firefox
    - Lần 2: i = 1
        key = "timeout"
        value = config2["timeout"] = 2000
        In ra: timeout: 2000
    - Lan 3: i = 2
        Key = "headless"
        value = config2["headless"] = true
        In ra: headless: true
    4. sau lần lặp cuối cùng i tăng lên 3
    điều kiên 3 < 3 nên vòng lặp đóng
    */

    // BT tạo nhanh 5 mã đơn hàng để test màn hình quản lý đơn hang
    // dữ liệu đầu vào
    let soLuongDon = 5;
    // yêu cầu
    //1. dùng for cổ điển lặp từ 1 >5
    // mỗi vong tạo biến maDonHang theo mẫu order-1, order-2...
    // in ra từng mã đơn hàng


for(let i = 1; i <= soLuongDon ; i++) {
    let maDonHang = `ORDER-${i}`;
    console.log(`Đơn hàng đã tạo ${maDonHang}`);
    
}

// B. Vòng lặp `for...of` (dùng cho array và string)

// - Dùng để duyệt qua từng phần tử trong `array` hoặc từng ký tự trong `string`.

// - **Cú pháp:**

// ```js
// for (let phanTu of danhSach) {
//   // phanTu tự động nhận giá trị của từng phần tử
// }
// ```

// - `danhSach`: một `array` hoặc `string` muốn duyệt qua.
// - `phanTu`: biến tạm, tự động nhận **giá trị** của từng phần tử trong mỗi vòng lặp.
// - `of`: từ khóa.

// - **Lưu ý:** Không dùng `for...of` để duyệt `object`.

// vd viết 2 cách 
// cách 1 theo for cổ điển

let fruits = ["táo", "cam", "ổi"];
for (let i = 0; i < fruits.length ; i++){
    console.log(fruits[i]);
    
}

//cách 2 viết theo cách mới for... of
for(let fruit of fruits) {
    console.log(fruit);
    
}

// cách dùng thường gặp
// duyệt array đơn giản
// duyệt string

// ví dụ cho duyệt string

let matKhau = "Neko@123"; matKhau = "Neko@123"
for(let kyTu of matKhau){
    console.log(`ky tu: ${kyTu}`);
    
}

// ví dụ duyêt array of object

let dsUser = [
    {ten: "Neko", role: "admin"},
     {ten: "Neko2", role: "guest"},
      {ten: "Neko3", role: "user"},
];
for(let user of dsUser) {
    console.log(`${user.ten} - quyền ${user.role}`);
    
}

//  làm việc với object cần sử dụng entries để biến đổi nó thành các cặp keys và values rồi làm việc
let config = {browser: "chrome", timeout: 5000};
for(let cap of Object.entries(config)){
    console.log(`${cap[0]} - ${cap[1]}`);
    
}

// dung for...of... mỗi vòng lặp lấy ra 1 url và in ra câu đang kiểm tra: url
let danhSachUrl = ["/login", "/dashboard", "/profile"];
for(let url of Object.entries(danhSachUrl)){
    console.log(`dang kiem tra url ${url}`);
    
}

// Những lỗi kinh điển hay gặp
let arr = ["A", "B", "C"];

// in ra console log 3 phần tử trong mảng
// đoạn này sẽ trả về undifined bởi vì mảng nó đếm từ 0 -> ở trên chỉ có 0,1,2. nếu vậy thì arry tại vị trí 3 ko hề có 
// nên nó in ra là undefined. muốn sửa đoạn dưới thì bỏ dấu = đi sẽ chạy đúng
// hoặc viết i <= arr.length - 1 
 // Biến i chỉ tồn tại trong dấu ngoặc nhọn, khi ra ngoài sẽ ko tồn tại
 for (let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
 }



// C. for... in (dành cho object)
// nó sẽ duyệt thẳng qua từng tên thuộc tính (key) mà nó ko cần biến hình trước
// for (let key in tên object) 
// {
//     tenObjec: object mà mình đang muốn duyệt qua
//     Key: biến tạm, tự động nhận tên thuộc tính (key), trong mỗi vòng lặp
//     in: từ khóa
// }
// KHÔNG DÙNG CHO ARRAY

for(let key in config) { // key = "browser" -> "timeout"
    console.log(`${key} - ${config[key]}`);
    
}

// Dùng vòng lặp nào cho array và object
// Vòng lặp while : Không biết trước số lần lặp, lặp đến khi điều kiện sai
// For cổ điển : biết chính xác số lần lặp, kiểm soát tuyệt đối biến đếm
// có array, chỉ cần giá trị -> for ... of
// có array, cần cả index.. for cổ điển 
// duyệt object... -> dùng for of + biến hình hoặc for in 
// ví dụ  - yêu cầu sd for of và for in để in ra tên và giá trị của products

let products = [
{  ten: "iphone", gia: 200000 },
{  ten: "airpods", gia: 300000 },
{  ten: "macbook", gia: 100000 }, 
]

// mỗi lần lặp cần có dấu --- phân cách giữa các sản phẩm ở đầu ra 
for(let product of products) {
    for (let key in product) {
         console.log(`${key} - ${product[key]}`);
    }
   console.log("----");
   
    
}

//Break and Continue
// KHi chạy vòng lặp - đôi khi mình muốn can thiệp ngay giữa chừng
// --> tìm thấy rồi, mà ko cần tìm nữa -> dừng ngay ! (break)
// -> cái này không quan tâm, bỏ qua đi, -> nhảy sang vòng lặp tiếp theo (continue)
// được dùng trong for cổ điển, while, for of, for in'
// for each -> không dùng được
// cách viết syntax
// break
// for(){
//     if (điều kiện){
//         break // nhảy ra ngoài vòng lặp, chạy code phía dưới
//     }
// }
// với break thoát khỏi vòng  lặp nên code ở dưới break trong lần đó không chạy, các lần sau cũng không chạy luôn



// vd cho break, từ 1- 100, mình muốn tìm số chia hết cho 7 đầu tiên

for (let i = 1; i <=100; i++){
    if(i % 7 === 0){
        console.log(`tim thay  ${i}`);
        break;        
    }
}

// ví dụ 2
// tìm sản phẩm hết  hàng đầu tiên

let sanPhams = [
{ ten: "iphone", conHang: true},
{ ten: "airpods", conHang: false},
{ ten: "macbook", conHang: true},
];

for (let product of sanPhams){
    if (product.conHang === false) {
        console.log(`san pham het hang dau tien ${product.ten}`);
        break;
        
    }
}
// hoặc cách viết khác dùng dấu !
for (let product of sanPhams){
    if (!product.conHang) {
        console.log(`san pham het hang dau tien ${product.ten}`);
        break;
        
    }
}

// for() {
//     if(dieukien) {
//         continue 
//     }
//     // bo qua dong code ở đây sẽ không được chạy
// }
//  với continue, không thoát vòng lặp, chỉ bỏ qua phần code phía dưới trong lần lặp hiện tại rồi nhảy sang lần lặp tiếp theo

for  (let i = 1; i <= 10; i++){
    if(i % 2 === 0) {
        continue;
    }
    console.log(`so lẻ ${i}`);
    
}

// Tiếp tục với ví dụ sản phẩm hết hàng ở trên sử dụng continue, vd, bỏ qua sp hết hàng
// sau đó in ra sp còn hàng
for (let product of sanPhams){
    if (!product.conHang) {
        continue;
    }
    console.log(`san pham con hang ${product.ten}`);
}

// dùng includes trong array bỏ qua field nhạy cảm dựa trên array fieldAndi, sau đó in ra key và value hợp lê
let userInfor = {
    ten: "neko",
    email: "neko@gmail.com",
    password: "abc123",
    role: "admin",
};

let fieldAnDi = ["password"]

for (let key in userInfor) {
    if (fieldAnDi.includes(key)) {
        continue;
    }
    console.log(`${key}: ${userInfor[key]}`);
    
}

// ví dụ mình đang test trang TIKI, lấy được ds giá 6 sp, yêu cầu loc ra những sp có giá lớn hơn 100k và đếm xem có bn sp VIP
// yêu cầu, tạo 1 array rỗng danhSachVip
// nếu giá > 100000 thì ta cho sp vào ds vip
// in ra ds vip và số lượng
let danhSachGia = [5000, 120000, 80000, 30000, 25000, 50000]
let danhSachVip = [];
for (let gia of danhSachGia) {
    if (gia > 100000){
        danhSachVip.push(gia)
    }
    
}
console.log(`sp vao ds vip ${danhSachVip}`);
console.log(`so  luong ds vip ${danhSachVip.length}`);

// // cách 2 
// console.log("cách 2");

// for (let gia of danhSachGia){
//     if (gia < 100000) {
//         continue;
//     }
//     danhSachVip.push(gia);
// }

// console.log(`sp vao ds vip ${danhSachVip}`);
// console.log(`so  luong ds vip ${danhSachVip.length}`);