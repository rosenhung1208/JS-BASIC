// - Method chaining là cách gọi nhiều method liên tiếp trên cùng một kiểu giá trị.
// - Kết quả của bước trước sẽ trở thành đầu vào cho bước sau.

// ```js
// let slug = "abc";
// let trimmed = slug.trim();
// let lowerCase = trimmed.toLowerCase();
// let result = lowerCase.replaceAll(" ", "-");
// ```

// - Có thể viết ngắn gọn bằng method chaining:

// ```js
// const slug = " Playwright Basic First test ";
// console.log(slug.trim().toLowerCase().replaceAll(" ", "-"));
// ```

// - Ví dụ:

//   ```js
//   let text = " sale ";
//   ```

// - Câu này **sai**:

//   ```js
//   text.trim().includes("sale").toLowerCase();
//   ```

//   - `includes("sale")` trả về `true` hoặc `false`
//   - Boolean không dùng `toLowerCase()` được

// - Câu đúng là:

//   ```js
//   text.trim().toLowerCase().includes("sale");
//   ```
let amount  = 9.5;
let number = amount.toFixed(2).padStart(6,"0")
console.log(number);


// - `toLocaleString()` dùng để hiển thị số theo cách viết quen thuộc của từng quốc gia hoặc ngôn ngữ.
// - Ví dụ, cùng là số `54000000`:
//   - Việt Nam: `54.000.000`
//   - Mỹ: `54,000,000`

// - Cú pháp:

//   ```js
//   so.toLocaleString(locale, options);
//   ```

//   - `locale`: chuẩn vùng/ngôn ngữ, ví dụ `vi-VN`, `en-US`
//   - `options`: cấu hình thêm như tiền tệ, số lẻ, phần trăm

// - Ví dụ:

//   ```js
  const price = 54000000;

  console.log(price.toLocaleString("vi-VN")); // 54.000.000;
  console.log(price.toLocaleString("en-US")); // 54,000,000;

  let moneyText = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  console.log(moneyText);

//   - Với `slice()`:

//   ```js
//   let text = "ABCDEFGH";
//   //         01234567
//   //        -8-7-6-5-4-3-2-1
//   ```

// - Chỉ cần nhớ:
//   - `start`: được lấy
//   - `end`: không được lấy
//   - Nếu là số âm, đổi sang vị trí dương bằng công thức: `length + số âm`
//   - Nếu chỉ có 1 tham số, đó là `start`, còn `end` sẽ là đến hết chuỗi

// - Muốn lấy `DEFGH`:

//   ```js
//   text.slice(3);
//   ```

//   - `start = 3`
//   - Không có `end` nên lấy đến hết chuỗi
//   - Kết quả: `"DEFGH"`

// - Muốn lấy `GH` bằng tham số âm:

//   ```js
//   text.slice(-2);
//   ```

//   - `-2` đổi sang dương là `8 + (-2) = 6`
//   - Bản chất là:

//   ```js
//   text.slice(6);
//   ```

//   - Bắt đầu từ index `6` là chữ `G`
//   - Kết quả: `"GH"`

// - Muốn lấy `BCDEF`:

//   ```js
//   text.slice(1, -2);
//   ```

//   - `start = 1`
//   - `end = -2` đổi sang dương là `6`
//   - Bản chất là:

//   ```js
//   text.slice(1, 6);
//   ```

//   - Kết quả: `"BCDEF"`
  
const finalPrice = "54000000";
const resultFinalPrice = String(finalPrice).slice(0, 2) + "." + 
String(finalPrice).slice(2, 5) + "." +
String(finalPrice).slice(-3);
console.log(resultFinalPrice);

// cach 2 
// 8 + -6 = 2 -> Slice (0,2);
// slice (2,5)
// slice (-3)
 let formated = `${finalPrice.slice(0, -6)}.${finalPrice.slice(-6, -3)}.${finalPrice.slice(-3)}`;
 console.log(formated);
 

 let maGiamGia = "DISCOUNT CODE: 10% OFF";
 let phanTramGiamGia = Number (maGiamGia.slice(maGiamGia.indexOf(":") +2, maGiamGia.indexOf("%")),);
 console.log(phanTramGiamGia);
 //cach 2
 let phanTramGiamGia2 = Number(maGiamGia.replace("DISCOUNT CODE:", "").replace("% OFF", ""),);
 console.log(phanTramGiamGia2);
 // cach 3
 console.log(maGiamGia.slice(15,17));

 // Bai tap cho ly thuyet moi
 // Test chuc nang cua nut dang ki tk, nut dk chi sang len khi thoa man dong thoi 3 dk
 // 1 nguoi dung tu 18 tuoi tro len
 // mk co dung 8 ki tu
 // check box dong y phai duoc tick

 let userAge = 20;
 let passwordInput = "Neko1234";
 let isTermAccepted = true;
 // cach lam :
 // tao bien isAgeValid de kiem tra do  tuoi > = 18 hay khong
 // tao bien isPasssWorldValid kiem tra mk co dung khong
 // Ket hop toan bo dieu kien de tao bien isSubmitButtonEnabled
 // in ra consle log

 let isAgeValid = userAge >= 18;
 let isPasssWorldValid = passwordInput.length === 8;
 let isSubmitButtonEnabled = isAgeValid && isPasssWorldValid && isTermAccepted;
 console.log(isSubmitButtonEnabled);
 

 // postfix, trả ve kết quả gia trị a trước sau đó mới tăng
 let a = 5;
 let ketQua1 = a++;
 console.log(ketQua1); // trả về kết quả a = 5
 console.log(a); // sau đó tăng a lên = 6
 // prefix, tăng giá trị b lên trước sau đó trả về giá trị b
 let b = 5;
 let ketQua2 = ++b;
 console.log(ketQua2); // tang a lên trước b = 6
 console.log(b); // trả về giá trị của b = 6
 // khi đứng độc lập thì nó vô hại
 // cách viết để đỡ nhầm

 let i =3;
 let resultPostFix = i * 2;
 // lúc này viết i++ hay ++i thì cũng ra kết quả như nhau
i++;
 // vi du khac
 let retries = 2;
 console.log("ket qua");
 let firstLog = retries;
 retries++;
 ++retries;
 let secondLog = retries;
 let canRetry = retries > 3;
 console.log(firstLog);
 console.log(secondLog);
 console.log(canRetry);


 // bài tap:co 1 promotion, neu kh > 18 tuoi và la thanh vien VIP, giam 30%, ngc lai van giu nguyen
// yeu cau: làm sach va ep kieu
// 2. kiem tra dieu kien, neu du tinh gia sau giam 30%, ko thi giu nguyen
// 3. in ra ket qua
console.log("Bai tap vi du");
let rawAge = " 25 tuổi";
let rawisVIP = "true";
let rawTicketPrice = "  500.000 đ ";

let isVIP = rawisVIP === "true";
let rawAge1 = parseInt(rawAge.trim().slice(0,2)); 
let rawTicketPrice1 = Number(rawTicketPrice.trim().replaceAll(".", "").replaceAll("đ",""));
if (rawAge1 > 18 && rawisVIP) {
  console.log(`Gia ticket sau giam: ${rawTicketPrice1*0.7}đ`);
  
} else {
  console.log(rawTicketPrice.trim());
  
}




 
 
 
 