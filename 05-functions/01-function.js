// ### Function: Tư duy nó như một cái máy xay sinh tố

// Có thể tưởng tượng function như một chiếc máy xay với 3 thành phần cốt lõi:

// - **Đầu vào (input/parameter):** Bạn cho trái cây, đường, sữa... vào máy.
// - **Quy trình xử lý (body):** Lưỡi dao quay và trộn mọi thứ lại với nhau.
// - **Đầu ra (output/return):** Máy trả ra cho chúng ta một ly sinh tố.

// Ví dụ nếu không dùng function, ta sẽ phải lặp lại cùng một đoạn code nhiều lần:

// **TC1**

// ```js
// console.log("Nhập userName: abc");
// console.log("Nhập matKhau: abc");
// ```

// **TC2**

// ```js
// console.log("Nhập userName: abc2");
// console.log("Nhập matKhau: abc3");
// ```

// **TC3**

// ```js
// console.log("Nhập userName: abc3");
// console.log("Nhập matKhau: aab4");
// ```

// ### Điểm mấu chốt mà function giải quyết

// - Phần giống nhau được gom vào một nơi.
// - Mỗi lần cần dùng chỉ việc gọi lại.
// - Nó gắn liền với tư duy **DRY**: đừng lặp lại cùng một đoạn code ở nhiều nơi.

// ### Các loại function trong JavaScript

// Trong JavaScript có 3 loại function. Cú pháp cơ bản đầu tiên chúng ta dùng là **function declaration** (hàm tự định nghĩa).

// ### Cú pháp

// ```js
// function tenHam(dauVao) {
//   // body
//   // đầu ra
// }
// ```

// ### Đầu vào (parameter)

// - **Tham số (parameter):** là chỗ trống được khai báo sẵn khi ta tạo function.
// - **Đối số (argument):** là giá trị thật được truyền vào khi function chạy.
// vi du
console.log("================05-funtion===============");

function dangNhap(taiKhoan, matKhau){
    console.log(`Dang nhap user: ${taiKhoan}`);
    console.log(`Dang nhap password: ${matKhau}`);
    console.log("click nut login");
}

console.log("TC01");
dangNhap("adminNeko", "abc");
console.log("TC02");
dangNhap("adminNeko2", "abc");

// ### Body

// - Là nơi chứa logic xử lý của code.

// ### `return` - Đầu ra

// - `return` dùng để trả kết quả từ bên trong function ra bên ngoài.
// - Giá trị trả về có thể là:
//   - `number`
//   - `string`
//   - `boolean`
//   - `object`
//   - `array`
//   - ...

// - Nơi gọi hàm sẽ nhận lại giá trị đó.
// - Khi function gặp `return`, nó sẽ dừng ngay tại đó.
// vi du 
console.log("===========================");

function tinhTongTien(a,b){
    const result = a + b;
    console.log(result);
    return result; // bắt buộc phải có return dòng này, nếu ko kết quả sẽ trả về undefined 
    // vì hệ thống ko hiểu nếu ko có kết quả trả về, return ở đây dc coi là cái cốc để đựng ly sinh tố đã xay
}

let tienThanhToan = tinhTongTien(100, 2);
console.log(tienThanhToan);

console.log("vi du 2");
function laySoMayMan(){
    return 8;
}

let ketQua = laySoMayMan(); // kết quả này sẽ trả ra là 8 vì nó ko truyền vào cái gì, và return lại số 8, thế nên nó sẽ trả ra 8
console.log(ketQua);

// Tương tự trả về string

function layTenHienThi() {
    return "neko";
}

let tenHienthi = layTenHienThi();
console.log(tenHienthi);

function laAdult(tuoi) {
    return tuoi >= 18;
}

console.log(laAdult(20)); // cái này trả về true
console.log(laAdult(6));  // cái này trả về false


// BT vd, yeu cau viet 1 ham ten la cleanPrice(rawString). Ham này nhận vào là 1 chuỗi giá tiền lấy từ UI
// Vidu: Gia 25.000.000 VND, Ham phải tự động dọn dẹp và return về 1 số number nguyên, ví dụ 25000000
// cach xu ly
// testcase
// sp1 = " Giá: 15.000.000 VND ";
// sp2=  " 25.000.000 VND";
// sp3 = "";
// output
// 15000000
// 250000
//0 

// Note /\D/g -> xóa hết kí tự ko phải số, chỉ giữ lại các chữ số 0 - 9


function cleanPrice(rawString){
    if (!rawString) return 0;
    let cleanNumber = rawString.trim().replaceAll(/\D/g, "");
    return Number(cleanNumber);
}

let sp1 = " Giá: 15.000.000 VND ";
let sp2=  " 25.000.000 VND";
let sp3 = "";
console.log(cleanPrice(sp1));
console.log(cleanPrice(sp2));
console.log(cleanPrice(sp3));

console.log("cách viết số 2");

function cleanPrice1(rawString){
    if (!rawString){
        return 0;
    }
    const cleanNumber1 = rawString 
    .trim()
    .replace("Giá:", "")
    .replace("VND", "")
    .replaceAll(".", "");
    return Number(cleanNumber1);
}

let sp5 = " Giá: 15.000.000 VND ";
let sp6=  " 25.000.000 VND";
let sp7 = "";
console.log(cleanPrice1(sp5));
console.log(cleanPrice1(sp6));
console.log(cleanPrice1(sp7));


// ## Hoisting

// ```js
// // Gọi hàm trước khi khai báo
// xinChao();

// // Khai báo hàm sau
// function xinChao() {
//   console.log("Hoisting");
// }
// ```

// ### Ứng dụng

// - Có thể viết các kịch bản test ở phía trên trước.
// - Các hàm hỗ trợ như `helper`, `clean data`,... có thể đưa xuống cuối file để phần chính gọn hơn.
// - Hoisting không áp dụng cho mọi loại hàm, mà phụ thuộc vào cách mình khai báo hàm.

// ## Các kiểu viết hàm trong JavaScript

// ### 1. Function declaration (hàm khai báo)

// - Đây là cách viết truyền thống.
// - Bắt buộc bắt đầu bằng từ khóa `function` và phải có tên hàm.
// - **Hỗ trợ hoisting 100%**.

console.log("Hàm khai báo hỗ trợ hoisting 100%, tức là gọi hàm trước khai báo sau");

let loginStatus = checkLoginStatus();
console.log(loginStatus);

function checkLoginStatus(){
    return true;
}


// **Ưu điểm**

// - Được hoisting nên có thể gọi trước khi khai báo.
// - Tên hàm rõ ràng, dễ đọc code.
// - Dễ debug vì lỗi thường hiển thị tên hàm trong stack trace.

// **Nhược điểm**

// - Cú pháp dài hơn so với arrow function.
// - Có `this` riêng, có thể gây ảnh hưởng khi dùng callback.

// *2. Viết theo kiểu function expression (cũ).
// Tức là khai báo một hàm rồi gán cho nó vào biến
// Thằng này không được hỗ trợ hoisting
// Ví dụ
console.log("============Viết theo function express==============");

const checkLoginStatus1 = function () {
    return true;
};

const loginStatus1 = checkLoginStatus1();
console.log(loginStatus1);

//  Ưu điểm : An toan hơn nhờ const, với declaration, mình có thể vô tình khai báo trùng tên hàm ở chỗ khác dẫn đến hàm cũ bị ghi đè âm thầm mà ko bị báo lỗi
// linh hoạt - truyền hàm như một món đồ : vì hàm được cất trong biến, có thể truyền vào hàm khác

const utils = {
    lamSach: function(text){
        return text.trim().toLowerCase();
    },
};
console.log(utils.lamSach(" HELLO "));

console.log("==========Chọn hàm theo điều kiện==========");

// chọn hàm theo điều kiện
// Ví dụ

const moiTruong = "staging";

const layUrl = moiTruong === 'staging' ? function () {
    return 'https://staging.neko.vn'
} : function () {
    return "https://neko.vn"
};

console.log(layUrl());

// Ưu điểm dùng const - > năng việc khai báo lại hàm trùng tên
// có thể gán vào biến -> linh hoạt truyền hàm
// nhược điểm: ko có hoisting
// cú pháp dài dòng, vẫn phải viết chữ function
// ít sử dụng function expression

// ### 3. Arrow function (hàm mũi tên)

// - Là phiên bản rút gọn của function expression.

// Cú pháp:

// ```js
// // Dạng đầy đủ
// const tenHam = (thamSo1, thamSo2) => {
//   // thân hàm
// };

// // Dạng rút gọn
// const tenHam = (thamSo1) => console.log("abc");
// ```

// - Không có từ khóa `function` như ở expression, thay bằng dấu `=>` vào giữa dấu () và {}.
// Ví dụ viết theo kiểu function expression (cũ)
const tinhTongExpression = function (a, b) {
    return a + b;
};
// Chuyển sang arrow 
const tinhTongArrow = (a, b) => {
    return a + b;
};
//  rút gọn nữa
const tinhTongSieuNgan = (a, b) => a + b;


// - **Không hỗ trợ hoisting**.

// **Ưu điểm**

// - Cú pháp rất ngắn gọn.
// - Rất hay dùng khi viết callback như `.map()`, `.filter()`, `.forEach()`.
// - Không có `this` riêng, nên an toàn hơn trong các tình huống như `setTimeout()`, .forEach...()

// **Nhược điểm**

// - Không có hoisting.
// - Không có `this` riêng, cần lưu ý khi dùng trong object.
// - Khi debug, stack trace thường không rõ tên hàm bằng function declaration.
// Cach sử dụng thực tế
/*KHI NÀO DÙNG LOẠI NÀO */
// viết method bên trong object
const samPham = {
    ten: "iPhone 17",
    gia: 2000000,

//cách 1: function expression cổ điển

hienThiExpression: function () {
    console.log(`${this.ten} - ${this.gia} VND`);
},

// cách 2: để viết 1 hàm . method shorthand -> cách này nên dùng"


hienThiShortHand() {
    console.log(`${this.ten} - ${this.gia} VND`);
    
},

// Cách 3: ko sử dụng Arrow khi viết method trong object -> KO DÙNG
hienThiArrow: () => {
    console.log(`${this.ten} - ${this.gia}`);
    
},
};

// KHi gọi hàm ra sẽ gọi như sau

samPham.hienThiExpression();
samPham.hienThiShortHand();
samPham.hienThiArrow(); //-> undefined cái này do ko sử dụng arrow khi viết method trong object
// Method ở trong object hay sử dụng trong các trường
// ví dụ 1 object có cả data lẫn hành vi, vd 1 object trên cart có dữ liệu item và method getSummary() để mô tả chính object đó
const cart = {
    item:3,
    getSummary(){
        return `có ${this.item} sản phẩm`; // return có 3 sp
    },
};

console.log(cart.getSummary()); // in ra có 3 sp
// object config: vd object có cấu hình, timeout, baseurl -> có 1 method buildUrl() để ghép link hoàn chỉnh
// object formatter có các method formatPrice, formatDate() -> object tiện tích
// ví dụ 1 objecct cụ thể viêt nhanh dùng ngay -> method bên trong object là hợp lý (Thường tỉ lệ sử dụng khá ít)
// nhưng nếu nhiều object cùng from như cart 1, cart 2, cart 3 -> cùng classs dễ tổ chức hơn

//   ## Kỹ thuật xử lý tham số nâng cao

// - Cách viết hàm từ cơ bản đến nâng cao hơn một chút, vì trong thực tế mọi thứ không đơn giản.

// - **Function overloading** - một hàm có nhiều cách gọi
//   - Ở một số ngôn ngữ như Java, C#, bạn có thể tạo nhiều hàm cùng tên nhưng khác nhau về số lượng hoặc kiểu tham số.
//   - Tuy nhiên, **JavaScript không hỗ trợ overloading theo kiểu đó**.
//   - Cách xử lý trong JavaScript là dùng **một hàm duy nhất**, sau đó tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp.

// - **Default parameter** - giá trị mặc định
//   - Khi người gọi không truyền đủ tham số, JavaScript có thể tự động gán giá trị mặc định.
//   - **Lưu ý:**
//     - Hoạt động tốt nhất khi tham số mặc định nằm ở cuối.
//     - Nếu tham số ở giữa bị thiếu, bạn thường phải truyền `undefined` để giữ chỗ.
//   - **Quy tắc:** luôn đặt tham số default ở cuối.
//   - Nếu hàm có nhiều hơn 3 tham số, có thể cân nhắc dùng **options object**.

// - **Rest parameter (`...args`)**
//   - Dùng khi muốn nhận bao nhiêu tham số cũng được.
//   - Dấu `...` sẽ gom tất cả tham số còn lại vào một mảng.

// - **Options object**
//   - Nếu một hàm có nhiều hơn 3 tham số, thay vì truyền từng tham số riêng lẻ rất dễ nhầm thứ tự, hãy gói tất cả vào một object.
//   - Đây là một pattern nâng cao được dùng rất phổ biến.

// Destructuring và spread operator

// - `const { page } = await browser.newContext()`
// - `{ ...defaultConfig, timeout: 4000 }`

// - **Destructuring** (phân rã)
//   - Cú pháp cho phép bóc tách giá trị từ `array` hoặc `object` thành các biến riêng lẻ chỉ trong một dòng code.

// - **Array destructuring**
//   - Bóc tách giá trị từ mảng.
// - **Spread operator**
//   - Dùng dấu `...` đặt trước tên biến của một `array` hoặc `object` để trải toàn bộ nội dung của nó ra.
//   - Nếu có thuộc tính trùng tên, giá trị ở bên phải sẽ ghi đè giá trị ở bên trái.
//   - Spread không làm thay đổi `object` cũ mà tạo ra một `object` mới.

// B. Truyền hàm làm callback.
// -> Callback là truyền một hàm vào nơi khác để hàm đó được gọi sau.
// -> Arrow function là lựa chọn ưu tiên hàng đầu.

const giaSanPham = [15000, 20000, 40000];

// Declaration 
function locGiaCao(gia) {
  return gia > 20000;
}

const ketQua1 = giaSanPham.filter(locGiaCao);
// Expression

const ketQua2 = giaSanPham.filter(function (gia) {
  return gia > 20000;
});

//arrow
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

// Sự thật là ở rất nhiều codebase, arrow function gần như thay thế hoàn toàn function expression.
// Cả hai đều thường được gán vào const và đều không có hoisting, nhưng arrow function ngắn gọn hơn nhiều.
// Function expression chỉ còn xuất hiện trong một số trường hợp đặc biệt.
// Ở code cũ, trước khi arrow function ra đời, người ta dùng function expression nhiều hơn.
// Kết luận: với code mới, chỉ cần nhớ 2 loại chính là function declaration và arrow function.

// Kỹ Thuật xử lý tham số nâng cao, cách viết hàm cơ bản -> nâng cao hơn 1 chút vì thực tế ko đơn giản
// function overloading - 1 hàm nhiều cách gọi
// Một số ngôn ngữ như java, c# có thể tạo nhiều hàm cùng tên, nhưng khác nhau về số lượng hoặc kiểu tham số
// Nhưng javascrip thì lại ko hỗ trợ overloading, cứ thằng sau sẽ đè lên thằng trước

// Nếu khai báo 2 hàm cùng tên, hàm khai báo sau sẽ ghi đè hàm khai báo trước.
 function guiThongBao(message) {
   console.log(`${message}`);
 }

 function guiThongBao(message, userId) {
   console.log(`${message}, ${userId}`);
}

guiThongBao("Deploy xong"); // cái này in ra "deploy xong, undefinded" do function 2 đè vào function đầu tiên

guiThongBao("Deploy xong", 101); // cái này in ra "deploy xong, 101"
// Cách Giải quyết: Nó dùng 1 hàm duy nhất, rồi tự kiểm tra dữ liệu đầu vào để xử lý theo từng trường hợp
// Hàm trên sẽ viết lại như sau:

// Nếu target ko đc truyền vào tức là nó undefinded, thì  chỉ in ra message
function guiThongBao(message, target) {
  if (typeof target === "undefined") {
    console.log(message);
    return;
  }

  // nếu target đc truyền vào number vì in ra cả message cả target
  if (typeof target === "number") {
    console.log(`${message}, ${target}`);
    return;
  }

  // còn lại thì in ra target không hợp lệ
  console.log("target không hợp lệ");
}

// Đoạn dưới này là truyền vào 3 trường hợp cho hàm trên
guiThongBao("deploy xong");

guiThongBao("Deploy xong", 101);

guiThongBao("Deploy xong", "101");

// Đây là cùng một cách viết hàm, nhưng có nhiều cách gọi khác nhau.
// return ở đây giống như:
// "Xử lý xong trường hợp này rồi -> thoát hàm luôn."

function timSo(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      break;
    }

    console.log(arr[i]);
  }

  console.log("Đã xong");
}

// break ở đây chỉ dừng vòng lặp for, không kết thúc function ngay.

/**
 * Duyệt qua mảng và dừng ngay khi gặp số 5.
 * @param arr Mảng số cần duyệt.
 */
function timSo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Nếu gặp số 5 thì kết thúc luôn cả hàm.
    if (arr[i] === 5) {
      return;
    }

    // In ra phần tử hiện tại khi chưa gặp số 5.
    console.log(arr[i]);
  }

  // Chỉ chạy nếu vòng lặp kết thúc bình thường.
  console.log("Đã xong");
}

timSo([1, 2, 3, 4, 5, 6, 7]); // hàm này nó sẽ in ra 1,2,3,4 và "Đã xong" vì  khi gặp 5 cái là nó break ra và in ra dòng dưới 
timSo2([1, 2, 3, 4, 5, 6, 7]);// hàm nay chỉ in ra 1,2,3,4 vì nó return là xong luôn ko in ra dòng dưới cùng nữa

/**
 * Thực hiện mô phỏng thao tác đăng nhập theo môi trường.
 * @param taiKhoan Tên tài khoản dùng để đăng nhập.
 * @param matKhau Mật khẩu dùng để đăng nhập.
 * @param moiTruong Môi trường chạy test, mặc định là "staging".
 */
function dangNhap(taiKhoan, matKhau, moiTruong = "staging") {
  console.log(`${moiTruong} - Đăng nhập: ${taiKhoan} - ${matKhau}`);
}

dangNhap("admin", "123456"); // đoạn này in ra staging Đăng nhập: admin - 123456, khi ko truyền môi trường thì nó tự động hiểu đó là staging

dangNhap("admin", "1234567", "dev");// còn đoạn này in ra: dev Đăng nhập: admin - 1234567

// LƯU Ý: chỉ hoạt động tốt khi tham số mặc định nằm cuối, nếu tham số giữa bị thiếu, bạn bắt buộc truyền undifined hoặc null làm giữ chỗ
// ví dụ
function taoTestUser(ten, email, tuoi = 25, vaiTro = "tester") {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoTestUser("neko", "neko@vn.com");// cái này sẽ in ra "neko, neko@vn.com, undefinded, tester". Do mình bỏ qua tham số tuổi nên nó tự truyền undefind vào, vậy nên mình phải tự truyền undefind vào nếu muốn bỏ qua tham số ở giữa
// vậy mình sẽ truyền như ở dưới thì nó sẽ in ra 25 vào đúng chỗ undefinded

taoTestUser("neko2", undefined, "neko2@vn.com"); // in ra neko2, 25, neko@vn.com, tester
// Chốt lại là chỉ cái ở cuối nó mới tự động hiểu và truyền vào mặc định nếu bạn bỏ qua, còn cá tham số ở giữa mà bạn muốn nó hiểu truyền vào cái mặc định thì bạn phải truyền vào undefined
// QUY TẮC: luôn đặt tham số default ở cuối, nếu có nhiều hơn 3 tham số thì có thể dùng option objec (học sau)

// Rest parameters (...args) -> nhận bao nhiêu tham số cũng được
// Dấu ...() gom tất cả tham số vào 1 mảng

function tongTien(...danhSachGia) {
  // danhSachGia là một mảng
  let tong = 0;
  // [1000, 2000, 3000, 4000]
  for (const gia of danhSachGia) {
    tong += gia; // tổng = tong + giá
  }
  return tong;
}

console.log(tongTien(100000)); // in ra 100000
console.log(tongTien(1000, 2000, 3000, 4000)); // in ra 100000 vì nó cũng gom tất cả tham số vào cùng 1 mảng

//Option object
// Nếu 1 hàm có nhiều hơn 3 tham số, thay vì truyền các tham số lẻ tẻ  dễ nhầm lẫn thứ tự thì ta gói tất cả vào 1 object
// đây là pattern nâng cao hay sử dụng
// Hàm nhận vào duy nhất 1 object là options
// Cách 1 Bóc tách (destructuring) object ra từng biến riêng biệt
function taoUser(options) {
  // Bóc tách (destructuring) object ra thành từng biến riêng biệt
  const { ten, tuoi = 25, email, vaiTro = "test" } = options;
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

// Gọi hàm
taoUser({
  ten: "neko",
  email: "neko@vn.com",
}); // cái này sẽ in ra neko, 25, neko@vn.com, test. Như vậy mình ko cần truyền undefined, mình cần cái nào sẽ truyền cái đó


// Cách 2 viết gọn hơn, mình bóc tách (destructuring) luôn ở phần khai báo hàm
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test" }) {
  console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}

taoUser2({
  ten: "neko",
  tuoi: 100,
  email: "neko@vn.com",
});// cái này in ra neko, 100, neko@vn.com. test

const danhSach = ["admin", "123456", "staging"];

// Gán phần tử đầu tiên trong danh sách vào biến user.

// const matKhau = danhSach[1];


// Destructuring và spread operator 
// Destructuring: cú pháp cho phép bóc tách giá trị từ array hoặc object thành các biến riêng lẻ chỉ trong 1 dòng code
// ... Array destruct - bóc tách mảng
// ví dụ

// Binh Thường mình viết
// const danhSach = ["admin", "123456", "staging"]; 
// const user = danhSach[0]
// const pass = danhSach[1]

// Sau khi học structuring - bóc tách phân rã các array thành các biến riêng biệt
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

// Bỏ qua phần tử không cần
const [firstName, , city] = ["neko", 25, "hanoi"];

console.log(firstName);
console.log(city);

const [a, b, c = "n/a"] = ["hello", "world"];

// Giá trị mặc định.
console.log(c); // do ko có phần tử thứ 3 ở đây nên nó sẽ gán n/a và in ra n/a

// Destructuring object
// Đây là cú pháp rất hay gặp, dùng để bóc tách thuộc tính từ object
// ra thành các biến riêng dựa trên tên thuộc tính.
// Khác với array destructuring, object destructuring không phụ thuộc vào thứ tự.

/*Object destruct*/
// cú pháp gặp nhiều nhất -> bóc tách thuốc tính object ra biến riêng biệt theo tên thuộc tính
// ko theo thử tự như array

// Ví dụ đầy đủ:
// bình thường mình viết như này
 const response = { status: 200, body: "ok", headers: {} };
 const status = response.status;

// Dùng object destruct thì sẽ dùng như này - Lấy trực tiếp thuộc tính status và body từ object.
const { status4, body } = { status: 200, body: "ok", headers: {}};

// In ra giá trị của từng biến vừa destructuring.
console.log(status4); // in ra 200
console.log(body); // in ra ok

// Đổi tên biến khi destructuring.

// Lấy status nhưng lưu vào biến statusCode,
// lấy body nhưng lưu vào biến noiDung.
const { status: statusCode, body: noiDung } = {
  status: 200,
  body: "ok",
  headers: {},
};

// In ra các biến đã được đổi tên.
console.log(statusCode); // in ra 200

console.log(noiDung); // in ra ok

// Giá trị mặc định kết hợp với đổi tên biến.

// Lấy ten trực tiếp.
// Nếu object không có tuoi thì mặc định là 18.
// Lấy vaiTro và đổi tên thành role, nếu không có thì mặc định là "viewer".
const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko" };

// In ra kết quả sau khi destructuring.
console.log(ten); // in ra neko
console.log(tuoi); // in ra 18
console.log(role); // in ra viewer


// Destructuring ngay trong tham số hàm.
/**
 * Hiển thị thông tin người dùng từ object truyền vào.
 * @param {object} param0 Object chứa thông tin người dùng.
 * @param {string} param0.ten Tên người dùng.
 * @param {string} param0.email Email người dùng.
 * @param {number} [param0.tuoi=18] Tuổi người dùng, mặc định là 18.
 */
function hienThiUser({ ten, email, tuoi = 18 }) {
  // Ghép các giá trị thành chuỗi rồi in ra màn hình.
  console.log(`${ten}, ${email}, ${tuoi}`); // in ra neko, a,18
}

// Gọi hàm với object, thiếu tuoi nên sẽ dùng giá trị mặc định.
hienThiUser({ ten: "Neko", email: "a" });

// Ví dụ tương đương khi tách object ra ngoài:
const { ten: ten2, email, tuoi: tuoi2 = 18 } = {
   ten: "Neko",
   email: "a",
 };

 // Destructuring lồng nhau (nested destructuring).
// Object này có nhiều cấp lồng nhau trong thuộc tính data.
const apiResponse = {
  data: {
    user: { name: "neko", email: "neko@123" },
    token: "123",
  },
  status: 200,
};
// Destructuring thành
 const {
   data: {
     user: { name, email1 },
     token,
   },
   status: status2,
 } = apiResponse;

 console.log(name);
 console.log(token);
 console.log(status2);
 // // Ví dụ dữ liệu đầu vào


// // Khi chạy automation test, ta nhận được một danh sách kết quả như bên dưới:
// // Bài toán
// // Viết hàm taoBaoCaoTest(testRuns) để tạo báo cáo từ danh sách kết quả test.

// // Yêu cầu
// // - Dùng destructuring để bóc tách từng phần tử trong mảng.
// // - Gợi ý:
// //   const [rawTestName, { browser, env }, rawStatus] = item
// // - Tương ứng:
// //   + rawTestName: tên test thô
// //   + { browser, env }: thông tin môi trường chạy
// //   + rawStatus: trạng thái test thô

// // Rule xử lý
// // - Nếu testName rỗng thì tăng invalid và bỏ qua dòng đó.
// // - Nếu status không phải PASS hoặc FAIL thì tăng invalid và bỏ qua.
// // - Nếu dữ liệu hợp lệ:
// //   + Tạo chuỗi theo định dạng: testName - browser - env
// //   + Ví dụ: login smoke - chromium - staging
// //   + Nếu PASS thì đưa vào mảng passed.
// //   + Nếu FAIL thì đưa vào mảng failed.

// // Kết quả mong đợi
// // Hàm cần trả về dữ liệu theo dạng:
// // return {
// //   totalValid:3 ,
// //   invalid: 1,
// //   passed: [
// //     "login smoke - chromium - staging",
// //     "search product - webkit - staging"
// //   ],
// //   failed: [
// //     "checkout payment - firefox - prod"
// //   ]
// // }
const testRuns = [
  [
    " login smoke ",
    { browser: "   chromium   ", env: "  staging  " },
    "  PASS ",
  ],
  [
    " checkout payment ",
    { browser: "   firefox   ", env: "  prod  " },
    "  FAIL ",
  ],
  [
    " search product ",
    { browser: "   webkit   ", env: "  staging  " },
    "  PASS ",
  ],
  ["  ", { browser: "   chromium   ", env: "  dev  " }, "  PASS "],
];

function taoBaoCaoTest(testRuns) {
  //khai báo các biến cần sử dụng
  const passed = [];
  const failed = [];
  let invalid = 0;
  for (const item of testRuns) {
  /*Dùng [] để bóc tách dữ liệu dạng Mảng (vị trí thứ tự).
  Dùng {} để bóc tách dữ liệu dạng Object (tên thuộc tính).
  Vì phần tử thứ hai của mảng là một Object, bạn bắt buộc phải lồng {} 
  vào trong [] để "vào tận nơi" lấy dữ liệu ra.*/

    const [rawTestName, { browser, env }, rawStatus] = item;// dùng {} cho browser và en vì cấu trúc mảng ở trên nó như vậy
    const testName = rawTestName.trim();
    const browserName = browser.trim();
    const envName = env.trim();
    const status = rawStatus.trim().toUpperCase();
   // lệnh invalid++; sẽ chạy để tăng số lượng test lỗi lên 1.
    if (testName === "") { //Từ khóa continue; ngay phía dưới: > Sau khi tăng biến đếm, lệnh continue sẽ bảo vòng lặp "Bỏ qua phần còn
      invalid++;
      continue;
    }
    if (status !== "PASS" && status !== "FAIL") {
      invalid++;
      continue;
    }
    const reportItem = `${testName} - ${browserName} - ${envName}`;
    if (status === "PASS") {
      passed.push(reportItem);
    } else {
      failed.push(reportItem);
    }
  }
  return {
    totalValid: passed.length + failed.length,
    invalid: invalid,
    passed: passed,
    failed: failed,
  };
}
console.log(taoBaoCaoTest(testRuns));
// Trace ngắn:
// 1. Khi gọi taoBaoCaoTest(testRuns), hàm tạo:
///    - passed = []
//     - failed = []
//     - invalid = 0
// 2. Hàm duyệt từng phần tử trong testRuns bằng for...of.
// 3. Mỗi item được tách thành:
//     - rawTestName
//     - browser, env
//     - rawStatus
// 4. Sau đó dữ liệu được chuẩn hóa:
//     - trim() để bỏ khoảng trắng đầu/cuối
//     - status được đổi sang chữ hoa bằng toUpperCase()
// 5. Nếu testName rỗng -> invalid tăng 1, bỏ qua phần tử đó.
// 6. Nếu status không phải "PASS" hoặc "FAIL" -> invalid tăng 1, bỏ qua.
// 7. Nếu hợp lệ, tạo chuỗi reportItem dạng:
//     "ten-test - browser - env"
// 8. Nếu status === "PASS" thì thêm vào passed, ngược lại thêm vào failed.
// 9. Kết thúc vòng lặp, hàm trả về object gồm:
//     - totalValid
//     - invalid
//     - passed
//     - failed


// - **Spread operator**  - sao chép và gộp mảng
//   - Dùng dấu `...` đặt trước tên biến của một `array` hoặc `object` để trải toàn bộ nội dung của nó ra.
console.log("**Spread operator**");
//** Spread với Array */
//vd 1: sao chép mảng

const mangGoc = [1, 2,3]; // mảng gốc có 1,2,3
const mangSaoChep = [...mangGoc] // dấu ...và tên của mảng gốc tức là nó sao chép toàn bộ mảng gốc
mangSaoChep.push(9999); // thêm 9999 vào mảng sao chép
console.log(mangGoc);
console.log(mangSaoChep);

//vd 2: gốp 2 mảng thành 1
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];
const mangGop = [...mang1, ...mang2];
console.log(mangGop);

// chèn mảng vào vị trí mong muốn của mảng khác 
const mangMoi = [0, ...mangGoc, 4, 5] // chèn mảng gốc vào mảng mới
console.log(mangMoi);

//**Spread với object - sao chép và ghi đè*/
// đầu tiên có 1 object mặc định như này
const configMacDinh = {
  baseUrl: 'https://staging.neko.vn',
  timeout: 30000,
  headless: true,
  retries: 2,
}
// ghi đè 2 field và giữ nguyên phần còn lại
const configProd = {
  ...configMacDinh,
  baseUrl: "https://neko.vn",
  retries: 0,
}; 
console.log(configProd);// nó sẽ ghi đè 2 fields baseUrl và retries
// lấy hết thông của mặc định và thêm headless
const configDebug = {...configMacDinh, headless:false};

/**Spread trong tham số hàm */
// vd có 1 hàm
const danhSachGia = [10000, 20000, 30000];
const giaMax = Math.max(1000, 20000, 30000); // bản thân max ko nhận cả một mảng nên ko thể viết max(danhSachGia) được, ta phải viết từng phần tử như kia
console.log(giaMax);

const giaMax1 = Math.max(...danhSachGia); // có thể viết như này, tương ứng với phần trên, nó sẽ lấy giá trị lớn nhất
console.log(giaMax1);

// Math.max có tác dụng nhận vào một chuỗi các con số và trả về số có giá trị lớn nhất.


// Bai Tap Vi Du
const configMacDinhBaiTap = {
  baseUrl: 'https://staging.neko.vn',
  timeout: 30000,
  headless: true,
  retries: 2,
}

const configGhiDe = {
  timeout: 10000,
  retries: false,
}; 

const tagsMacDinh = [" smoke ", " login "];
const tagsThem = ["  check out ", " smoke ", " regression "];
const tocDoPhanHoi = [1200, 3400, 800, 1500];
const tenSuiRaw = " Payment flow ";

// Yêu cầu dùng object spread để tạo configCuoi từ configMacDinh va configGhiDe
// Dùng Array spread để gộp tagsMacDinh và tagsThem thành 1 mảng mới
// Sau đó xử lý mảng mới bằng cách bỏ tag rỗng, đổi về lowerCase
//Làm sạch tenSuiteRaw
//Nếu tenSuiteRaw rỗng thì dùng mặc định là "unknow-suite"
//Tìm thời gian phản hồi lớn nhất dùng spread với Math.Max
//Trả về object có dạng
// {
    // suiteName: "Payment Flow",
    // config: {
    //   baseUrl: "https://staging.neko.vn",
    //   timeout: 10000,
    //   headless: false,
    //   retries: 2, 
    // },
    // tags: ['smoke', 'login', 'checkout', 'regression'],
    // slowestRespone: 3400
// //}

// const configCuoi = {
//   ...configMacDinhBaiTap,
//   timeout: 10000,
//   retries: false,
// };

// // Bai lam
// console.log("bài làm ví dụ");

// function taoCauHinhChayTest() {
//   const configCuoi = {
//     ...configMacDinhBaiTap,
//     ...configGhiDe,
//   };

// const tatCaTag = {...tagsMacDinh, ...tagsThem};

// let tagsDaLamSach = []
// for (const tag of tatCaTags) {
//     let cleanTag = tag.trim().toLowerCase();
//     if(cleanTag === "") { // nếu thằng này là rỗng thì toàn bộ đoạn dưới ko dc chạy nữa
//       // đó là tác dụng của thằng continue
//       continue; 
//     }
//     // Đây là một trong những cách xử lý mảng trùng
//     if(!tagsDaLamSach.includes(cleanTag)){ // Nếu tag đã làm sạch mà ko chứa cleantag thì push vào clean tag
//       tagsDaLamSach.push(cleanTag);
//     }
// }

// let cleanTestSuite = tenSuiRaw.trim();
// if (cleanTestSuite === "") {
//   cleanTestSuite = "unknown-suite";

// }
// let maxResponse = Math.max(...tocDoPhanHoi);

// return{
//   suiteName: cleanTestSuite,
//   config: configCuoi,
//   tags: tagsDaLamSach,
//   slowestRespone: maxResponse,

// };
// console.log(taoCauHinhChayTest());
// }

// Hàm callback (gọi lại)
// Ví dụ thực tế:

// Bạn đến một nhà hàng đang đông khách.
// Nhân viên order nói: “Anh để lại số điện thoại, khi nào có bàn tôi sẽ gọi lại.”
// Bạn đưa số điện thoại.
// Nhân viên tiếp tục làm việc khác.
// Khi có bàn, nhân viên lấy số điện thoại của bạn ra và thực hiện hành động gọi.
// Từ ví dụ trên:

// Callback là một hàm A được truyền vào làm tham số cho một hàm khác B.
// Khi hàm B làm xong việc, nó sẽ gọi hàm A để chạy.

// Ví dụ cho callback
// Bước 1: tạo số điện thoại -> callback
function quayLaiAn(){
  console.log("Tao quay lại đây!!!");
  
}
// Bước 2: Bồi bàn nhân callback là tham số
function choBanTrong(soDienThoaiCuaKhach) {
  console.log("Đang dọn bàn...");
  
  // Bước 3: xử lý xong -> lôi hàm ra và gọi để chạy
  // Đây chính là lúc callback được gọi lại
  soDienThoaiCuaKhach();
}
// Bước 4: chạy -> không có () sau quayLaiAn
choBanTrong(quayLaiAn)

//**Có () thì THỰC THI NGAY -> Giống bấm nút say sinh tốt
// Không có () = GIAO BẢN VẼ -> truyền bản thân cái máy xem cho người khác, 
// để lúc họ muốn thì tự cắm điện mà chạy */

function layDuLieuTest(){
  return "Dữ liệu test";
}
// có ngoặc tròn () -> hàm chạy ngay -> lấy kết quả, ly sinh tố
const ketQuaChay = layDuLieuTest();
console.log(ketQuaChay);
console.log(typeof ketQuaChay);

// Không có ngoặc tròn - giao bản vẽ - lấy bản thân cái máy
const copyHam = layDuLieuTest;
console.log(copyHam);
console.log(typeof copyHam);
// khi muốn chạy  thì thêm dấu () vào
console.log(copyHam());

/**ĐỆ QUY: khác với call back- đệ quy gọi chính nó trong thân hàm */
function demNguoc(n) {
  if  (n === 0){
    return;
  }

console.log(n);
demNguoc(n-1);
}
demNguoc(5);

//**Khi truyền callback, luôn viết tên hàm trần, không có ().
// Callback có tham số 
// Hàm callback có thể truyền dữ liệu ngược lại cho callback khi gọi */

// Đầu tiên cần có 1 hàm callback 
function thongBaoKetQua(tenBaiTest, ketQua){
  console.log(`${tenBaiTest} - ${ketQua}`);
}

// Thứ 2 là có hàm nhận callback
function chayTest(tenTest, callBack){
  console.log(`đang chạy ${tenTest}`);

  // Giả lập: Pass nếu test chứa login fail nếu không 
  const pass = tenTest.includes("login"); // đoạn này tên test chứa login thì kết quả ra pass
  callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
}

chayTest("login thành công", thongBaoKetQua); // in ra tên bài test login không thành công - Chạy passed
chayTest("đăng kí thiếu email", thongBaoKetQua); 

/**Bản chất thực sự callback thay thế cho thongBaoKetQua (không có dấu () để cần dùng lúc nào thì dùng
 * có thể viết lại như sau*/

function thongBaoKetQua(tenBaiTest, ketQua){
  console.log(`${tenBaiTest} - ${ketQua}`);
}

function chayTest(tenTest, thongBaoKetQua){
  console.log(`đang chạy ${tenTest}`);

  // Giả lập: Pass nếu test chứa login fail nếu không 
  const pass = tenTest.includes("login");
  if (pass) {
    thongBaoKetQua(tenTest, "Chạy passed");
  }else {
    thongBaoKetQua(tenTest, "Chạy fail");
  }
}

chayTest("login thành công", thongBaoKetQua); // in ra tên bài test login không thành công - Chạy passed
chayTest("đăng kí thiếu email", thongBaoKetQua); 

// // Cách 1 
// setTimeout(inThongBao, 5000);

// // Cách 2 
// setTimeout(function() {
//   console.log("Đã đợi xong");
  
// }, 3000);

// cách 3 dùng arrow function
// setTimeout (() => {
//   console.log("Đã đợi xong");
  
// }, 3000);

// ứng dụng thực tế
// callback thường xảy ra ở các vùng xử lý array
// array callback methods
// map - biến đổi mảng cũ thành 1 mảng mới
// nhận 1 callback function thuowgnf là có 3 tham số nhưng thực tế chỉ dùng 1 
//  const mangMoi = mangcu.Map((phanTu,index, mangGoc) => {
  // phanTu = phần tử hiện tại
  // index = vị trí 0,1,2
  // mang goc
  // return giaTriMoi (bắt buộc phải return)})
// ví dụ
const giaSanPhamUI = [100000, 250000, 500000];
const giaMoi = giaSanPhamUI.map((gia) => {
  return gia * 2;
});
console.log(giaMoi);


// Biến đổi object nằm trong array
// const user1 = [
//   {ho: "Nguyen", ten: "neko"},
//   {ho: "Tran", ten: "New"},
// ]
// const hoTen = userTest.map((u) => { // u ở đây đóng vai trò là callback
//   return `${u.ho} ${u.ten}`;
// });
// console.log(hoTen);


// Filter - lọc phần tử htoar mãn điều kiện
// const mangLoc = mangGoc.filter((callBack)) => {
//   điều kiện
// })
// nó sẽ check điều kiện, nếu return true thì giữ còn false thì bỏ

// ví dụ

const sanPhamUI = [
  { ten: "Chuot", gia: 150000, tonKho: true},
  { ten: "Ban Phim", gia: 500000, tonKho: false},
  { ten: "Man Hinh", gia: 3000000, tonKho: true},
  { ten: "Tai Nghe", gia: 200000, tonKho: true},
];

// 1. Dùng vòng lặp for để lọc sản phẩm còn hàng
const spConHangFilter = [];
for (const sanPham of sanPhamUI) {
  if (sanPham.tonKho) { // Câu lệnh if (sanPham.tonKho) sẽ tương đương với if (true). 
  // JavaScript thấy true nên sẽ lọt vào bên trong và thực hiện lệnh push().
  // cách viết này hoàn toàn tương đương if (sanPham.tonKho === true) { ... }
    spConHangFilter.push(sanPham);
  }
}

// 2. Lọc giá nhỏ hơn 200000 bằng .filter()
const mangLoc = sanPhamUI.filter((sanPham) => {
  return sanPham.gia < 200000;
});
console.log(mangLoc);

// 3. Kết hợp nhiều điều kiện
const sanPhamCuoi = sanPhamUI.filter((sanPham) => {
  return sanPham.gia < 200000 && sanPham.tonKho;
});

console.log("Sản phẩm cuối thỏa cả 2 điều kiện:", sanPhamCuoi);

// Find () - Tìm phần tử Đầu Tiên thỏa mãn điều kiện
// const phanTu = mang.find((phantu) => dieukien)

const users = [
  { id: 1, ten: "neko", role: "admin" },
  { id: 2, ten: "mew", role: "tester" },
  { id: 3, ten: "Cat", role: "tester" },
]
// dùng find tìm phần tử có tên là admin
//trả về phần tử đầu tiên ko thỏa mãn, ko phải phần tử mảng
const adminUser = users.find((user) => user.role === "admin");
console.log(adminUser);

/**Scope - là phạm vi quy định 1 biến được phép sống và nhìn thấy ở đâu trong đoạn code */
// A. Global scope (phạm vi toàn cục)
// Đặc điểm