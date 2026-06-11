// - **Object**
//   - Có thể hiểu object giống như một cái tủ có dán nhãn:
//     - Khi muốn lấy một "ngăn kéo", ta lấy theo **tên ngăn kéo**.

//   - **Quy tắc vàng:**
//     - Dùng **array** khi bạn có một danh sách gồm nhiều thứ giống nhau, ví dụ: danh sách user, giá, sản phẩm.
//     - Dùng **object** khi cần mô tả chi tiết **một thứ duy nhất**, ví dụ: một user, một sản phẩm, hoặc một cấu hình test.

//   - **Cú pháp:**
//     - Dùng dấu ngoặc nhọn `{}`.
//     - Bên trong là các cặp **key - value** và ngăn cách nhau bằng dấu phẩy.

//   - **Key và value:**
//     - **Key**: tên thuộc tính, giống như nhãn dán trên ngăn kéo.
//     - **Value**: dữ liệu nằm trong ngăn kéo, có thể là `string`, `number`, `boolean`, `array`, hoặc `function`.

//   - **Ví dụ:**

let userTest = {
    hoTen: "Neko Nguyen",
    tuoi: 30,
    isVIP: true,
    quyenHan: ["read", "write"],
};
console.log(userTest);
//     ```

//   - **Quy tắc đặt tên key:**
//     - Nếu key là tên hợp lệ theo quy tắc đặt tên biến, thường **không cần dấu nháy**.
//     - Nếu key chứa **dấu cách** hoặc **dấu gạch ngang `-`**, phải bọc trong dấu nháy kép.
// nên hạn chế đặt tên có dấu gạch ngang hay dấu cách, cứ camel case mà chơi
let apiData = {
    "first-name": "neko",
    "content-type": "text/html",
    "so dien thoai": "01234567",
};
//   - **Cách truy xuất dữ liệu:**
//     - **A. Dùng dấu chấm `.`** - cách dùng phổ biến nhất
//       - Cú pháp:
//         ```js
//         tenObject.key; -> khi key không chứa dấu nháy kép
//   - Dùng khi key là tên hợp lệ.
// vi du
console.log(userTest);
console.log(userTest.hoTen); // nó chui vào tủ usertest rồi lấy thằng họ tên ra


    // - **B. Dùng dấu ngoặc vuông `[]`** 
    //   - Cú pháp:
    //     ```js
    //     tenObject["tenKey"];
    //     ```
    //   - Dùng khi key có dấu cách, dấu gạch ngang, hoặc cần truy cập động.
   
    // ví dụ
    console.log(apiData["first-name"]);
    
     // Trường hợp rất hay dùng trong AT: khi key được lưu trong 1 biến khác
     // dynamic key
    let userTest2 = {
        hoTen: "Neko Nguyen", 
        email: "neko@gmail.com",
    };

    let thongTinCanLay = "email";
    console.log(userTest2.thongTinCanLay); // cái này sẽ ra kết qua undefind, vì làm gì có

    // viết đúng phải là
    console.log(userTest2[thongTinCanLay]);
    
    //   - **Thêm, sửa, xóa (CRUD) dữ liệu trong object**
    // - Có thể thêm, cập nhật, hoặc xóa thuộc tính bằng dấu chấm hoặc dấu ngoặc vuông.

    let config = {browser: "chrome", timeout: 5000};
    console.log(`Ban đầu $(config)`);// không in ra đc nếu dùng bastick với object
    // đối với object thì nên dùng "", dấu , để nối chuỗi
    console.log("Ban đầu", config);

    config.timeout = 10000;
    console.log("sau khi sửa timeout", config);

    // Thêm dữ liệu (gọi tên key chưa tồn tại + giá trị)
    config.isHeadless = true;
    console.log("sau khi thêm isHeadless", config);
    
    // xóa dữ liệu dùng từ khóa delete, vd xóa cái này   let config = {browser: "chrome", timeout: 5000};
    delete config.browser;
    console.log("sau khi xoa browser", config);
    
    // bình thường const ko thay đổi được, nhưng đối với object mình vẫn sửa, thêm, xóa được ruột.
    // const chỉ cấm lại bạn gán lại object bằng dầu bằng
    // vi du
    const user3 = {ten: "neko"};
    // user3 = {ten: "meo"}; // như này sẽ báo lỗi luôn
    // console.log(user3);// như này sẽ báo lỗi luôn

    // Nhưng nếu thay đổi tên bên trong thì ok 
    user3.ten = "meo";
    console.log(user3);
    

//       - **Các phương thức thường dùng của object:**
//     - **A. `Object.keys()`** - Lấy tất cả key thành một mảng
let spTiki = {id: "SP01", ten: "Bàn Phím", gia:50000};
let danhSachkey = Object.keys(spTiki);
console.log(danhSachkey);
// sau khi lay thanh mot mang, minh check xem phần tử có trong mảng đó hay không
console.log(danhSachkey.includes("gia"));


//     - **B. `Object.values()`** - Lấy tất cả value thành một mảng
let dsValue = Object.values(spTiki);
console.log(dsValue);
// sau đó lại check 1 value có trong mảng đó ko
console.log(dsValue.includes("Bàn Phím"));


//     - **C. `Object.entries()`** - Lấy cả key và value thành từng cặp
let dsEntries = Object.entries(spTiki);
console.log(dsEntries);
console.log(dsEntries[0]);


//     - **D. `Object.hasOwn()`** - Kiểm tra key có phải là thuộc tính của chính object đó hay không

//   - **Cú pháp `Object.hasOwn()`:**
//     ```js
//     Object.hasOwn(tenObject, "tenKey");

console.log(Object.hasOwn(spTiki, "id")); //kết quả trả về true  vì có chứa id trong object đó

// dung object.keys de dem xem api trả về bao nhiêu trường
// dùng object.hasown() để kiểm tra 3 trường require "userId", "email","role"
// Kiểm tra xem giá trị isActive có đúng kiểu boolean không (dùng typeof), nêu sai kiểu in ra cảnh báo
// Dùng object.value +includes để kiểm tra xe có giá trị  nào là "admin";

console.log("Bai giai cho luyen tap object");

let apiResponse = {
    userID: 9999,
    userName: "neko_auto",
    role: "admin",
    isActive: "yes",
};

let dsTruong = Object.keys(apiResponse).length;
console.log(dsTruong);

console.log(Object.hasOwn(apiResponse, "userID"));
console.log(Object.hasOwn(apiResponse, "email"));
console.log(Object.hasOwn(apiResponse, "role"));


if (typeof apiResponse.isActive !== 'boolean'){
    console.log("ko đúng kiểu");
    
}else{
 
   console.log("đúng kiểu");
    
}


let hasAdmin = Object.values(apiResponse).includes("admin");
console.log(`co chua admin hay ko ${hasAdmin}`);


// ## Array of Object

// - Cấu trúc này được bao bên ngoài bằng ngoặc vuông `[]`.
// - Bên trong mảng chứa các object, mỗi object được bao bằng ngoặc nhọn `{}`.
//vd
let dsUser =[
    { id: 2, ten: "teo", role: "user"},
    { id: 3, ten: "teo2", role: "user2"}
];

