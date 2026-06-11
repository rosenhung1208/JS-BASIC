//Bài 1	
// Tình huống Automation: Bạn cần kiểm tra xem tính năng Giảm giá (Discount) trên trang Shopee hoạt động có đúng logic toán học không.

// Dữ liệu đầu vào:

// Giá gốc (Lấy từ UI - String): " 1.000.000 đ "
// Phần trăm giảm (Lấy từ DB - Number): 20 (tức là 20%)
// Giá sau giảm (Lấy từ UI - String): " 800.000 đ "
// Yêu cầu: Viết code để:

// Làm sạch và chuyển đổi Giá gốc về Number.
// Tính toán giá mong đợi: Giá gốc * (100 - 20) / 100.

// let giaGoc = " 1.000.000 đ ";
// let giamGia = "20";
// let giaSauGiam = " 800.000 đ ";
// let giaSach = giaGoc.trim();
// let giaChuyenDoi = giaGoc.substring(0,9);
// let giaSachCuoiCung = giaChuyenDoi.replaceAll(".","");
// console.log(giaSachCuoiCung);
// let giaMongDoi = giaSachCuoiCung * (100-20)/100
// console.log(giaMongDoi);


//Bài 2
// Bạn đang viết script test cho trang thương mại điện tử. Bạn lấy được thông tin đơn hàng từ giao diện web, 
// nhưng dữ liệu trả về rất "bẩn" (lẫn lộn chữ, số, ký tự lạ, khoảng trắng).
// Nhiệm vụ của bạn là làm sạch chúng, tính toán tổng tiền, và in ra một cái Hóa đơn (Receipt) chuẩn chỉnh.

// Dữ liệu đầu vào
// let tenSanPham = ""   macbook pro m3   "";
// let giaGoc = ""Price: 30,000,000 vnđ"";
// let soLuong = ""Sl: 2 máy"";
// let maGiamGia = ""DISCOUNT CODE: 10% OFF"";

// Bạn phải viết code xử lý để khi chạy console.log, màn hình hiện ra y hệt như sau:
// HÓA ĐƠN THANH TOÁN - ID: #0002
// Sản phẩm: MACBOOK PRO M3
// Đơn giá: 30000000
// Số lượng: 2
// Tổng tiền (Gốc): 60000000
// Giảm giá: 10%
// THÀNH TIỀN: 54.000.000 VNĐ

let tenSanPham = "   macbook pro m3   ";
let giaGoc = "Price: 30,000,000 vnđ";
let soLuong = "Sl: 2 máy";
let maGiamGia = "DISCOUNT CODE: 10% OFF";

let hoaDon = 2;
let soHoaDon = String(hoaDon).padStart(3,"0");
console.log(`HÓA ĐƠN THANH TOÁN - ID: #${soHoaDon}`);

let tenSPInHoa = tenSanPham.trim().toUpperCase();
console.log(`Sản phẩm: ${tenSPInHoa}`);

let giaGocBoPrice = giaGoc.substring(giaGoc.indexOf(":")+2);
let giaGocBoDauPhay = giaGocBoPrice.replaceAll(",","");
let giaGocSach = giaGocBoDauPhay.substring(0,8)
console.log(`Đơn giá: ${giaGocSach}`);

let soLuongSach = soLuong.substring(soLuong.indexOf(":")+2);
let soLuongNumb = soLuongSach.substring(0,1)
console.log(`Số lượng: ${soLuongNumb}`);

let tongSoTienGoc =  giaGocSach*2 
console.log(`Tổng tiền (Gốc): ${tongSoTienGoc}`);

let maGiamGiaMoi = maGiamGia.substring(maGiamGia.indexOf(":")+2);
let maGiamGiaSach = maGiamGiaMoi.substring(0,3)
console.log(`Giảm giá: ${maGiamGiaSach}`);

let giaSauGiam = tongSoTienGoc * (100-10)/100;
let ketQua = giaSauGiam.toLocaleString('vi-VN') + " VNĐ"
console.log(`THÀNH TIỀN: ${ketQua}`);











