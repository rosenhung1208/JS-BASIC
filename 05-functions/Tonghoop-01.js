// Hoisting: function declaration

const checkLoginStatus = function () {
  return true;
};
const loginStatus = checkLoginStatus();
console.log(loginStatus);

function tinh(a, b) {
  return a * b;
}
console.log(tinh(2, 3));

// Viết theo kiểu function expression (cũ).

const tinhTongExpression = function (a, b) {
  return a + b;
};

// Chuyển sang arrow function.
const tinhTongArrow = (a, b) => a + b;
// Rút gọn hơn nữa.
const tinhTongSieuNgan = (a, b) => a + b;

// Sử dụng khi 
// 1. Viết method bên trong object.

const sanPham = {
  ten: "iPhone 17",
  gia: 2000000,
  //Cách 1 - nên dùng - dùng method shorthand 
  hienThiShorthand() {
  console.log(`${this.ten} - ${this.gia} VND`);
  }
};
sanPham.hienThiShorthand();

// Method nằm trong object, thường dùng để biểu diễn hành vi.
// Ví dụ: một object có cả data lẫn hành vi. Chẳng hạn, object cart có dữ liệu item
// và method getSummary() để tự mô tả chính nó.

const phonCart = {
    item: 3,
    getSummary() {
        return `co ${this.item} san pham`;
    },
    
};

console.log(phonCart.getSummary());


const pcCart = {
  item: 4,
  getSummary() {
    return `có ${this.item} sản phẩm`;
  },
};
console.log(pcCart.getSummary());

// B. Truyền hàm làm callback.
// -> Callback là truyền một hàm vào nơi khác để hàm đó được gọi sau.
// -> Lúc này Arrow function là lựa chọn ưu tiên hàng đầu.

const giaSanPham = [15000, 20000, 40000];

// cách 1: Function Declaration (có hoisting)
function locGiaCao(gia) {
  return gia > 20000;
}
const ketQua1 = giaSanPham.filter(locGiaCao);

// Cách 2: dùng arrow function (ko có hoisting)
const ketQua3 = giaSanPham.filter((gia) => gia > 20000);

function guiThongBao(message, target) {
    if (typeof target === "undefined") {
        console.log(message);
        return;
    }

    if (typeof target === "number") {
        console.log(`${message}, ${target}`);
        return;
    }

    console.log("target không hợp lệ");
}
guiThongBao("deploy xong");
guiThongBao("deploy xong", 101);
guiThongBao("deploy xong", 101);
// Return xử lý xong trường hợp này là thoát hàm luôn, ko in hay chạy câu lệnh bên dưới nữa

function timeSo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 5) {
            break;
        }
        console.log(arr[i]);
    }
    console.log("Đã xong");
}
// break ở đây chỉ dừng vòng lặp for, không kết thúc function ngay

/**
 * Thực hiện mô phỏng thao tác đăng nhập theo môi trường.
 * @param taiKhoan Tên tài khoản dùng để đăng nhập.
 * @param matKhau Mật khẩu dùng để đăng nhập.
 * @param moiTruong Môi trường chạy test, mặc định là "staging".
 */

function dangNhap (taiKhoan, matKhau, moiTruong = "staging") {
    console.log(`${moiTruong} - Đăng nhập: ${taiKhoan} - ${matKhau}`);
}

dangNhap("admin", "123456");
dangNhap("admin", "123456","dev");

function taoTestUser (ten, email, tuoi = 25, vaiTro =  "tester") {
    console.log(`${ten}, ${email}, ${tuoi}, ${vaiTro}`);
}

taoTestUser("neko", "neko@vn.com")

//Rest parameters
function tongTien(...danhSachGia) {
    // danhSachGia là một mảng
    let tong = 0;

    for (const gia of danhSachGia) {
        tong += gia;
    }
    return tong;
}
console.log(tongTien(10000));
console.log(tongTien(1000, 2000, 3000, 4000));

// Hàm nhận vào duy nhất một object là options
// Destructuring CHO OBJECT
// cách 1 
function taoUser(options) {
    // bóc tách destructuring object ra thành từng biến riêng biệt 
    const {ten, tuoi = 25, email, vaiTro = "test" } = options;
    console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
// cách 2
function taoUser2({ ten, tuoi = 25, email, vaiTro = "test"}) {
    console.log(`${ten}, ${tuoi}, ${email}, ${vaiTro}`);
}
// gọi hàm
taoUser({
    ten: "neko",
    email: "neko@vn.com"
})

taoUser2 ({
    ten: "neko",
    tuoi: 100,
    email: "neko@vn.com",
})

//Destructuring cho MẢNG 
// có 1 mảng như này
const danhSach = ["admin", "123456", "staging"];
// Destructuring 
const [user, pass, moiTruong2] = ["admin", "123456", "staging"];
console.log(user);
console.log(pass);
console.log(moiTruong2);

// bỏ qua phần tử không cần
const [firstName, , city] = ["neko", 25, "Ha Noi"];
console.log(firstName);
console.log(city);

// Gán giá trị mặc định
const [a,b,c = "n/a"] = ["hello", "world"];
console.log(c);

// Destructuring object
// Đây là cú pháp rất hay gặp, dùng để bóc tách thuộc tính từ object
// ra thành các biến riêng dựa trên tên thuộc tính.
// Khác với array destructuring, object destructuring không phụ thuộc vào thứ tự.

// đây là cách viết đầy đủ
const response = { status: 200, body: "ok", headers: {} };
const status = response.status;
console.log(status);

// lấy trực tiếp thuộc tính status và body từ object
const { status1, body } = { status1: 200, body: "ok" };
// in ra giá trị từng biến destructuring 
console.log(status1);
console.log(body);


// Đổi tên biến khi destructuring.
// Lấy status nhưng lưu vào biến statusCode,
// lấy body nhưng lưu vào biến noiDung.
const { status: statusCode, body: noiDung } = {
    status: 200,
    body: "ok",
    headers: {},
}

// In ra các biến đã được đổi tên.
console.log(statusCode);
console.log(noiDung);

// Giá trị mặc định kết hợp với đổi tên biến.
// Lấy Tên trực tiếp.
// Nếu object không có tuoi thì mặc định là 18.
// Lấy vaiTro và đổi tên thành role, nếu không có thì mặc định là "viewer".

const { ten, tuoi = 18, vaiTro: role = "viewer" } = { ten: "neko"};

// In ra kết quả sau khi destructing.
console.log(ten);
console.log(tuoi);
console.log(role);

// Destructuring ngay trong tham số hàm.

function hienThiUser({ ten, email, tuoi = 18 }) {
    // ghép các giá trị thành chuỗi rồi in ra màn hình 
    console.log(`${ten}, ${email}, ${tuoi}`);
}

// Gọi hàm với object, thiếu tuổi nên sẽ dùng giá trị mặc định.
hienThiUser ({ ten: "Neko", email: "a"});
// ví dụ tương đương khi tách object ra ngoài:
const  { ten: ten2, email, tuoi: tuoi2 = 18 } = {
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
}

// Ví dụ dữ liệu đầu vào
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

function taoBaoCaoTest(testRuns) {
    //khai báo các biến cần sử dụng
    const passed = [];
    const failed = [];
    let invalid = 0;
    for (const item of testRuns) {
        const [rawTestName, { browser, env }, rawStatus] = item;
        const testName = rawTestName.trim();
        const browserName = browser.trim();
        const envName = env.trim();
        const status = rawStatus.trim().toUpperCase();

        if(testName === ""){
            invalid++;
            continue;
        }
        if (status !== "PASS" && status !== "FAIL") {
            invalid++;
            continue
        }
        const reportItem = `${testName} - ${browserName} - ${envName}`;
        if (status === "PASS") {
            passed.push(reportItem)
        } else  {
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

// Toán tử spread dùng để sao chép và gộp mảng.
const mangGoc = [1,2,3];

// Sao chép toàn bộ phần tử của mảng gốc sang một mảng mới.
const mangSaoChep = [...mangGoc];

// Thêm phần tử vào mảng sao chép để chứng minh rằng 2 mảng là độc lập.
mangSaoChep.push(9999);

// In ra mảng ban đầu, mảng này không bị thay đổi.
console.log(mangGoc);

// In ra mảng đã sao chép sau khi thêm phần tử mới.
console.log(mangSaoChep);

// Gộp hai mảng thành một mảng mới.
const mang1 = ["A", "B"];
const mang2 = ["C", "D"];

// Trải các phần tử của mang1 và mang2 vào cùng một mảng.
const mangGop = [...mang1, ...mang2];

// In ra mảng sau khi gộp.
console.log(mangGop);

// Chèn phần tử vào đầu và cuối, đồng thời giữ các phần tử của mảng gốc ở giữa.
const mangMoi = [0, ...mangGoc, 4, 5];
// Spread với object: sao chép object và ghi đè một số thuộc tính

// Cấu hình mặc định dùng chung cho nhiều môi trường
const configMacDinh = {
    baseUrl: "https://staging.neko.vn",
    timeout: 30000,
    headless: true,
    retries: 2,
};

// Tạo cấu hình production bằng cách:
// - sao chép toàn bộ từ configMacDinh
// - ghi đè 2 thuộc tính cần thay đổi

const configProduction = {
    ...configMacDinh,
    baseUrl: "https://neko.vn",
    retries: 0,
};

// In ra cấu hình production để kiểm tra kết quả
console.log(configProduction);

// Tạo cấu hình debug từ cấu hình mặc định và tắt chế độ headless
const configDebug = { ...configMacDinh, headless: false, token: "123" };

// Khai báo mảng chứa danh sách các mức giá.
const danhSachGia = [10000, 20000, 30000];

// Dùng toán tử spread (...) để tách từng phần tử trong mảng thành các đối số riêng lẻ truyền vào hàm Math.max().
const giaMax = Math.max(...danhSachGia);
// Hoặc có thể viết
const giaMax1 = Math.max(10000, 20000, 30000)

// Cấu hình dùng để ghi đè một số giá trị mặc định
const configGhiDe = {
  timeout: 10000,
  headless: false,
};

// Danh sách tag mặc định
const tagsMacDinh = [" smoke  ", "  login "];

// Danh sách tag cần thêm
const tagsThem = ["  checkout  ", "  smoke  ", "  regression "];

// Mảng thời gian phản hồi
const tocDoPhanHoi = [1200, 3400, 800, 1500];

// Tên suite thô, chưa được làm sạch
const tenSuiteRaw = "  Payment  Flow  ";

//CALL BACK 
// Tạo số đt  sau đó callback để dùng

function quayLaiAn() {
    console.log("Tao quay lại day");
}

// bồi bàn nhận callback làm tham số

function choBanTrong(soDienThoaiCuaKhach) {
    console.log("Đang dọn bàn ...");
    //Bước 3. xử lý xong -> lôi hàm ra và gọi để chạy
  //Đây chính là lúc callBack đc gọi lại
  soDienThoaiCuaKhach();
}

// chạy ko có () sau quayLaiAn
choBanTrong(quayLaiAn);

//========================//
function layDuLieuTest() {
    return "Dữ liệu test";
}

// có ngoặc tròn () --> hàm chạy ngay -> lấy kết quả -> ly sinh tố

const ketQuaChay = layDuLieuTest();

console.log(ketQuaChay);
console.log(typeof ketQuaChay);

// Hàm callback có tính tái sử dụng cao
// Ví dụ: Hàm lọc mảng đa năng locMang
// Bước 1: Viết hàm xử lý logic chung (Hàm nhận callback)
// Hàm này chỉ làm đúng nhiệm vụ: Duyệt qua từng phần tử của mảng. 
// Còn việc "phần tử đó có được chọn hay không" thì nó nhường quyền quyết định cho hàm callbackDieuKien.

function locMang(mang, callbackDieuKien) {
    let ketQua = [];
    
    for (let i = 0; i < mang.length; i++) {
        // Gọi hàm callback để kiểm tra phần tử hiện tại
        // Nếu callback trả về true, chúng ta giữ phần tử đó lại
        if (callbackDieuKien(mang[i])) {
            ketQua.push(mang[i]);
        }
    }
    
    return ketQua;
}

// Callback 1: Kiểm tra số chẵn
function laSoChan(so) {
    return so % 2 === 0;
}

// Callback 2: Kiểm tra số lớn hơn 10
function laSoLonHon10(so) {
    return so > 10;
}

// Callback 3: Kiểm tra số lẻ
function laSoLe(so) {
    return so % 2 !== 0;
}

const danhSachSo = [3, 8, 12, 5, 20, 7, 14];
// Tình huống 1: Bạn muốn lọc số chẵn
const cacSoChan = locMang(danhSachSo, laSoChan);
console.log("cac so chan: " , cacSoChan);

// Tình huống 2: Bạn muốn lọc số lớn hơn 10
const cacSoLonHon10 = locMang(danhSachSo, laSoLonHon10);
console.log("Các số > 10:", cacSoLonHon10);

// Tình huống 3: Bạn muốn lọc số lẻ (Dùng hàm ẩn danh viết ngắn gọn)
const cacSoLe = locMang(danhSachSo, function(so) {
    return so % 2 !== 0;
});
console.log("Các số lẻ:", cacSoLe);


///Callback có tham số -
// Hàm nhận call back có thể tryền dữ liệu ngươci lại cho callback khi gọi

function thongBaoKetQua(tenBaiTest, ketQua) {
  console.log(`${tenBaiTest} - ${ketQua}`);
}

function chayTest(tenTest, thongBaoKetQua) {
  console.log(`đang chạy ${tenTest}`);

  //Giả lập: pass nếu test chứa logi fail nếu ko

  const pass = tenTest.includes("login");
  if (pass) {
    thongBaoKetQua(tenTest, "Chạy passed");
    // console.log(`${tenTest} - ${pass}`);
  } else {
    thongBaoKetQua(tenTest, "chạy fail");
  }
  // callBack(tenTest, pass ? "Chạy passed" : "chạy fail");
}
thongBaoKetQua("login thành công", "Chạy passed");

chayTest("login thành công", thongBaoKetQua);

chayTest("đăng kí thiếu email", thongBaoKetQua);


//ứng dụng thực tế
//Call back thường xảy ra ở các hàm xử lý array

// Cú pháp của map()
// const mangMoi = mangCu.map((item) => {
//   return giaTriMoi;
// });

const giaSanPhamUI = [100000, 250000, 500000];
function giaNhanDoi(value) {
  return value * 2;
}

const giaMoi = giaSanPhamUI.map(giaNhanDoi);
console.log(giaMoi);

const users = [
  { ho: "nguyen", ten: "neko" },
  { ho: "Tran", ten: "New" },
];

const hoTen = users.map((u) => {
  return `${u.ho} ${u.ten}`;
});

console.log(hoTen);

// ví dụ 2 
const sanPhamUI = [
  { ten: "Chuột", gia: 150000, tonKho: true },
  { ten: "Bàn phím", gia: 500000, tonKho: false },
  { ten: "Màn hình", gia: 3000000, tonKho: true },
  { ten: "Tai nghe", gia: 200000, tonKho: true },
];
//Lọc cấc sản phẩm còn hàng
//dùng for lọc các sản phẩm còn hàng
//đầu ra là 1 mảng mới
// let sanPhamConHang = [];
// for (const sanPham of sanPhamUI) {
//   if (sanPham.tonKho === true) {
//     sanPhamConHang.push(sanPham);
//   }
// }
// console.log(sanPhamConHang);

 let sanPhamConHang = [];
 for (const sanPham of sanPhamUI) {
     if (sanPham.tonKho === true) {
         sanPhamConHang.push(sanPham);
    }
 }
 console.log(sanPhamConHang);

//cách 2 : dùng Filter
/**CÚ PHAP FILTER */
//  const mangMoi = mangCu.filter((item) => {
//   return dieuKien;
// });
// filter() duyệt qua từng phần tử của mảng.
// Nếu điều kiện trả về true → phần tử được giữ lại.
// Nếu điều kiện trả về false → phần tử bị loại bỏ.
// Kết quả là một mảng mới.

const spConHangFilter = sanPhamUI.filter((sp) => {
    return sp.tonKho === true;   
});

console.log(spConHangFilter);

// FIND
//find() hoạt động như thế nào?
//Nó duyệt từng phần tử cho đến khi tìm thấy phần tử đầu tiên thỏa điều kiện.
// So sánh find() và filter()
// Phương thức	Kết quả
// find()	Trả về phần tử đầu tiên thỏa điều kiện
// filter()	Trả về tất cả phần tử thỏa điều kiện (mảng mới)

//VD tìm phần tử có role là admin
const userTest = [
    { id: 1, ten: "neko", role: "admin"},
    { id: 2, ten: "mew", role: "tester"},
    { id: 3, ten: "cat", role: "tester"},
];
const adminUser = userTest.find((user) => user.role === "tester");
console.log(adminUser);

