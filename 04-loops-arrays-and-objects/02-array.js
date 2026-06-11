// Vi tri mang
console.log("MẢNG");

let sanPham = ["AoThun", "AoSoMi", "MuLuoiTrai"];
console.log(sanPham[1]);
console.log(sanPham[2]);
console.log(sanPham[0]);
console.log(sanPham[10]); // tra ve undifined vi khong co trong mang, vi tri mang xuat phat tu 0

// in ra độ dài mảng
let ketQuaTimKiem = ["iphone 13", "iphone 20"];
console.log(ketQuaTimKiem.length);

//   - **B. `push()`** - Thêm phần tử vào cuối mảng
//     - Cú pháp:
//       ```js
//       tenMang.push(giaTri);
//       ```
//     - Đầu ra: số lượng phần tử mới của mảng sau khi thêm
//     - Tác dụng phụ: mảng gốc bị thay đổi
let danhSachLoi = [];
danhSachLoi.push("Nút đăng nhập ko bấm được");
danhSachLoi.push("Sai màu chữ ở footer");
console.log(danhSachLoi);


// Kiem tra mảng có tồn tại ko
let status = ["PENDING", "APPROVED", "SHIPPED"];
let currentStatus = "APPROVED";
if (status.includes(currentStatus)){
    console.log("Test Pass: Trang Thai Hien Thi Dung LOGIC");
    
}else {
    console.log("TEST FAIL");
    
}

// - **D. `pop()`** - Rút phần tử cuối cùng ra ngoài
//     - Đầu ra: phần tử cuối cùng vừa bị rút ra
//     - Tác dụng phụ: mảng gốc bị thay đổi

let lichSuDuyetWeb = ["Homepage", "Products", "Cart"];
let trangChuVuaThoat = lichSuDuyetWeb.pop();
console.log(lichSuDuyetWeb);
console.log(trangChuVuaThoat);



//   - **E. `shift()`** - Rút phần tử đầu tiên ra ngoài
let hangChoHoTro = ["Khach A", "Khach B", "Khach C"]
let khachHangDuocXuLy = hangChoHoTro.shift();
console.log(hangChoHoTro)
console.log(khachHangDuocXuLy);
;

//   - **F. `unshift()`** - Thêm phần tử vào đầu mảng
let danhSachUuTien = ["Bug Thuong", "Bug Giao Dien"];
danhSachUuTien.unshift("Bug Sieu TO Khong Lo");
console.log(danhSachUuTien);

//   - **G. `join()`** - Gộp tất cả phần tử thành một chuỗi
//     - Cú pháp:
//       ```js
//       tenMang.join(kiTuNoi);
//       ```

let tags = ["automation", "playwright", "javascript" ];
let tagString = tags.join(", ");
console.log(tagString);

//   - **H. `indexOf()`** - Trả ra `index` nếu tìm thấy, trả `-1` nếu không có
let danhSachMenu = ["Home","About", "Services"];
console.log(danhSachMenu.indexOf("About"));
// in ra tổng số sản phẩm
// In ra sản phẩm đầu tiên
// In ra tên sản phẩm cuối cùng
// thêm 1 cái lót chuột vào cuối giỏ hàng
console.log("Bai Luyen Tap so 5");

let gioHang = [
    "Bàn Phím cơ",
    "Chuột gamin",
    "Man hình 27 inch",
    "Tai nghe bluetooth",
];

console.log(`Tong SP là: ${gioHang.length}`);

let spDauTien = gioHang.shift();
console.log(`san pham dau tien la: ${spDauTien}`);

let spCuoiCung = gioHang.pop();
console.log(`San pham cuoi cung la:${spCuoiCung}`);

let themSP = gioHang.push("Lót Chuột");
console.log(gioHang);



