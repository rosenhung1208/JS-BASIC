// Closure là khả năng của một hàm ghi nhớ và truy cập các biến ở phạm vi bên ngoài nó, 
// ngay cả khi phạm vi bên ngoài đã kết thúc thực thi.
// ví dụ
 function outer() {
    const name = "Neko";
    
    function inner() {
        console.log(name);
        
    }
    return inner;
 }

 const fn = outer();
 fn();
 /**Nhà kho (outer)
|
|-- Hộp bí mật (name)
|
|-- Người giao hàng (inner) */

/**Người giao hàng rời khỏi nhà kho.

Nhà kho đóng cửa.

Nhưng người giao hàng vẫn giữ chìa khóa của hộp bí mật.

Nên dù nhà kho đóng rồi, anh ta vẫn lấy được đồ trong hộp.

Đó là cách Closure hoạt động. */

// ví dụ thực tế

function taoBoDem() {
    // đầu tiên tạo bộ đếm = 0, 
    let count = 0;
    // trả về count 
    return function () {
        count++;
        return count;
    };
}
const dem = taoBoDem();
// Mỗi lần gọi là một lần hiển thị rồi tăng lên
// Biến count không bị biến mất, đó là closure
console.log(dem());
// Mỗi lần đếm nó vẫn nó count cũ và tăng thêm, chứ ko bị mất đi
console.log(dem());
console.log(dem());
console.log(dem());

// Vd2: Quản lý số lần đăng nhập sai
function createLoginTracker() {
    //Tạo biến, biến này được giữ lại nhờ Closure
    let failedAttempts = 0;

    return {
        loginFailed() {
            failedAttempts++;
            console.log(
                `Sai ${failedAttempts} lần`
            );
        },

        getAttempts() {
            return failedAttempts;
        }
    };
}

const tracker = createLoginTracker();

tracker.loginFailed();
tracker.loginFailed();
tracker.loginFailed();

// vd 3
let soThuTu = 0;

function taoIdTest() {
  soThuTu++;
  return `USERT_TEST_${soThuTu}`;
}

console.log(taoIdTest());
console.log(taoIdTest());

soThuTu = 999;

console.log(taoIdTest());

function mayTaoId() {
  ///khai bao bien dem
  let soThuTu = 0;
  function tangId() {
    soThuTu++;
    return `USER_TEST_${soThuTu}`;
  }
  return tangId;
}

const layIdMoi = mayTaoId();
console.log(layIdMoi());
console.log(layIdMoi());

// khi mayTaoid chạy xong -> theo qy tắc scope , biến soThuTu sẽ chết.
// NHƯNG!!! vì chúng ta đã tạo ra return tangId, và hàm tangId đang closure (bao đóng)
// biếnd soThuTu vào balo kí ức. Do đó biến soThuTu bất tử và tiếp tục tăng lên mỗi lần
// gọi layIdMoi()


function taoNhaMaySinhEmail(domain) {
  let dem = 0;

  return function () {
    dem++;
    return `Tester_${dem}@${domain}`;
  };
}

const sinhEmailStaging = taoNhaMaySinhEmail("staging.neko.vn");
const sinhEmailProd = taoNhaMaySinhEmail("neko.com");

console.log(sinhEmailStaging());
console.log(sinhEmailStaging());
console.log(sinhEmailProd());
console.log(sinhEmailProd());