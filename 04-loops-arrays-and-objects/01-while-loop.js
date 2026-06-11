// yếu tố 1: 
let soLanClick = 1;

// Yếu tố 2 : 
while (soLanClick <=3){
    console.log(`Đang click lần thứ ${soLanClick}`);
    
    // yếu tố 3
    soLanClick ++;
}
console.log("Đã click xong, thoát vòng lặp");


// Vòng lặp vô tận phải né ko sẽ treo máy

// let bugnDoi = true;
// while (bugnDoi === true) {
//     console.log("Đang ăn thịt nướng");
// // hậu quả ăn mãi ko ngừng, nổ bụng, treo máy, 
// }


let miengThit = 5;

while (miengThit > 0) {
    console.log(`Đang ăn... còn lại. ${miengThit}`);
    
    miengThit --;
}
console.log("Đã ăn hết, no bụng");


// Trong AI sẽ có cơ chế retry - thử lại tối đa N lần
// Viết code tìm nút thanh toán, cứ 1s tìm 1 lần, tìm tối đa 5 lần, nếu thấy thì dừng, nếu quá 5 lần thì báo lỗi

let maxRetry = 5 // số lần thử tối đa
let currentRetry = 1 // lần thử hiện tại
let isFound = false // Trạng thái tìm thấy nút

while(isFound === false && currentRetry <= maxRetry) {
    console.log(`Đang tim nut thanh toan tren man hinh ...`);
    
    // giả lập tìm kiếm
    let toolGiaLap = Math. random();
    let searchRessult = toolGiaLap > 0.3;
    console.log(`Search result : ${toolGiaLap}`);
    

    if (searchRessult === true) {
        isFound = true // Tìm thấy rồi, đổi trạng thái thoát vòng lặp
        console.log("Ngon! đã tìm thấy nút thanh toán, bấm click ngay");
        
    }else {
        console.log("không tìm thấy, thử lại");
        currentRetry ++;
    }
    // xử lý kết quả
    if (isFound === false){
        console.log(`TES FAIL, đã thử 5 lần, không tìm thấy nút`);
        
    }
}

//QUY TẮC VÀNG : Dùng while khi bạn không biết trước số lần lặp, bạn chỉ biết điều kiện dừng

// Bài Tập nhỏ: 
// Có một hệ thống đăng nhập, rule là : hệ thống cho phép sai MK tối đa 3 lần, nếu nhập đúng trc khi hết lượt
// HIển thị đăng nhập thành công, nếu sai -> khóa tàikhoangr

let matKhauDung = "1234";
let soLanThu = 3;

// Yêu cầu:
// 1. dùng while để mô phỏng quá trình nhập mật khẩu (tối đa 3 lần)
// 2. ở mỗi lần thử, giả lập người dugnf nhập mật khẩu bằng cách gán cứng giá trị cho biến matKhauNhap = "0000", matKhauNhap = "9999" (dùng if else)
// Nếu nhập đúng in ra "Đăng nhập thành công"
// Nếu nhập sai in ra sai mật khẩu
// Check sau khi thoát vòng lặp, kiểm tra nếu đã dùng hết 3 lần mà vẫn sai -> in ra tài khoản bị khóa

let matKhauNhap = "";
let dangNhapThanhCong = false;

// dùng while để mô phỏng quá trình nhập mk tối đa 3 lần
while(soLanThu <=3) {
    console.log(`Lan thu thu ${soLanThu}`);
    if (soLanThu === 1){
        matKhauNhap = "0000";
        
    } else if (soLanThu === 2) {
        matKhauDung = "1111";
       
        
    } else if (soLanThu === 3) {
        matKhauNhap = "3333`";
        
    }
    if (matKhauNhap === matKhauDung) {
        console.log("Dang nhap thanh cong");
        dangNhapThanhCong = true;
        break;
    } else {
        console.log("sai mat khau");
        
    }
    soLanThu++;

}
if (!dangNhapThanhCong) {
    console.log("tai khoan bi khoa do dang nhap sai qua nhieu lan");
    
}
