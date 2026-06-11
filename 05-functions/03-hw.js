// const loginOptions = {
//     defaultRole: "guest",
//     allowedRoles: ["admin", "tester", "viewer", "guest"],
//     minPasswordLength: 8
// };

// const loginTestData = [
//     {
//         name: "Case 1 - Hợp lệ cơ bản",
//         formInput: {
//             username: "  Neko_Admin  ",
//             password: "  12345678  ",
//             role: " tester ",
//             rememberMe: "yes",
//             device: "  chrome-win11  "
//         }
//     },
//     {
//         name: "Case 2 - Role rỗng, phải dùng defaultRole",
//         formInput: {
//             username: "  guest_user  ",
//             password: "  abcdefgh  ",
//             role: "   ",
//             rememberMe: "no",
//             device: " firefox "
//         }
//     },
//     {
//         name: "Case 3 - Username rỗng",
//         formInput: {
//             username: "    ",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 4 - Username có khoảng trắng ở giữa",
//         formInput: {
//             username: "neko admin",
//             password: "12345678",
//             role: "tester",
//             rememberMe: "yes",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 5 - Password quá ngắn",
//         formInput: {
//             username: "valid_user",
//             password: "123",
//             role: "tester",
//             rememberMe: true,
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 6 - Role không hợp lệ",
//         formInput: {
//             username: "valid_user",
//             password: "12345678",
//             role: "manager",
//             rememberMe: "on",
//             device: "chrome"
//         }
//     },
//     {
//         name: "Case 7 - rememberMe là boolean true",
//         formInput: {
//             username: "admin01",
//             password: "abcdefgh",
//             role: "admin",
//             rememberMe: true,
//             device: "edge"
//         }
//     },
//     {
//         name: "Case 8 - rememberMe là chuỗi lạ",
//         formInput: {
//             username: "viewer01",
//             password: "abcdefgh",
//             role: "viewer",
//             rememberMe: "maybe",
//             device: "safari"
//         }
//     }
// ];
// // Bài Làm
// function taoPayLoaadDangNhap(formInput, options = {}) {
//     const {
//         username,
//         password,
//         role,
//         rememberMe,
//         device
//     } = formInput;

//     const {
//         defaultRole = "guest",
//         allowedRoles = [],
//         minPasswordLength = 8
//     } = options;

//     const cleanUserName = username.trim().toLowerCase();
//     const cleanPassword = password.trim();
//     const cleanRole = role.trim().toLowerCase() || defaultRole;
//     const cleanDevice = device.trim();
//     const cleanRememberMe =
//         rememberMe === true ||
//         rememberMe === "yes" ||
//         rememberMe === "on";

//     const errorArr = [];

//     if (!cleanUserName) {
//         errorArr.push("Username không được rỗng");
//     }

//     if (cleanUserName.includes(" ")) {
//         errorArr.push("Username không được chứa khoảng trắng");
//     }

//     if (cleanPassword.length < minPasswordLength) {
//         errorArr.push(`Password phải có ít nhất ${minPasswordLength} ký tự`);
//     }

//     if (!allowedRoles.includes(cleanRole)) {
//         errorArr.push("Role không hợp lệ");
//     }

//     const payLoad = {
//         username: cleanUserName,
//         password: cleanPassword,
//         role: cleanRole,
//         rememberMe: cleanRememberMe,
//         device: cleanDevice
//     };

//     return {
//         isValid: errorArr.length === 0,
//         payLoad,
//         errorArr
//     };
// }
// for (const test of loginTestData) {
//     console.log(
//         test.name,
//         taoPayLoaadDangNhap(test.formInput, loginOptions)
//     );
// }

// ### Đề bài
// Viết hàm:
// ```javascript
// // ### Bộ data test dùng để làm bài

// ```javascript
const testCaseConfig = {
    minPriority: 1,
    maxPriority: 5
};

const rawRows = [
    [" TC_LOGIN_001 ", "login", "1", " smoke ", "active"],
    ["TC_LOGIN_001", "login", "2", "regression", "active"],
    ["TC_SEARCH_002", "search", "0", "smoke", "active"],
    ["TC_CART_003", "", "3", "checkout", "inactive"],
    ["TC_PAY_004", "payment", "2", " critical ", "ACTIVE"],
    ["TC_ORDER_005", "order", "5", "sanity", "inactive"],
    ["TC_ORDER_006", " order ", "4", " SANITY ", "active"],
    ["LOGIN_007", "login", "2", "smoke", "active"],
    ["TC_USER_008", "user", "6", "regression", "active"],
    ["TC_API_009", "api", "3", "api", "disabled"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_API_010", "api", "2", " api ", "active"],
    ["TC_REPORT_011", "report", "1", " nightly ", "INACTIVE"],
    [" TC_EMPTY_012 ", "   ", "2", "misc", "active"]
];
// rawRows - là dữ liệu import từ Excel. ["TC_LOGIN_001", "login", "1", "smoke", "active"]
// config - là cấu hình {
    // minPriority: 1,
    // maxPriority: 5
//}
function chuanHoaDanhSachTest(rawRows, config = {}) {
    // Object destructuring - Tương Đương với 
    // const minPriority = config.minPriority;
    // const maxPriority = config.maxPriority;
    // Nếu người  dùng ko truyền config thì minPriority và maxPriority được dùng mặc định
    const {
        minPriority = 1,
        maxPriority = 5
    } = config;

    // Tạo mảng để chứa kết quả 
    const validCases = []; 
    const invalidCases = [];

    //Tạo Set để kiểm tra trùng ID
    //Set chỉ lưu giá trị duy nhất có 1 phần tử
    const idSet = new Set();
    // Vòng for để đếm số ID bị trùng, duyệt toàn bộ dữ liệu 
    let duplicateIds = 0;

    for (let i = 0; i < rawRows.length; i++) {

        // 1. Array destructuring
        // Duyệt từng dòng của rawRows ở trên 
        const [id, module, priority, tag, status] = rawRows[i];

        // 2. Chuẩn hóa dữ liệu
        const cleanId = id.trim().toUpperCase();
        const cleanModule = module.trim().toLowerCase();
        const cleanPriority = Number(priority);
        const cleanTag = tag.trim().toLowerCase();
        const cleanStatus = status.trim().toLowerCase();

        // Build object mới
        const testCase = {
            id: cleanId,
            module: cleanModule,
            priority: cleanPriority,
            tag: cleanTag,
            status: cleanStatus
        };
        // Tạo mảng lỗi 
        const errors = [];

        // 3. Validate ID
        if (!cleanId.startsWith("TC_")) {
            errors.push("ID phải bắt đầu bằng TC_");
        }

        // 4. Validate module
        if (!cleanModule) {
            errors.push("Module không được rỗng");
        }

        // 5. Validate priority
        if (
            cleanPriority < minPriority ||
            cleanPriority > maxPriority
        ) {
            errors.push(
                `Priority phải nằm trong khoảng ${minPriority}-${maxPriority}`
            );
        }

        // 6. Validate status
        if (
            cleanStatus !== "active" &&
            cleanStatus !== "inactive"
        ) {
            errors.push(
                "Status chỉ được là active hoặc inactive"
            );
        }

        // 7. Kiểm tra duplicate ID
        if (idSet.has(cleanId)) {
            duplicateIds++;
            errors.push("ID bị trùng");
        } else {
            idSet.add(cleanId);
        }

        // 8. Phân loại valid / invalid
        // nếu ko có lỗi push vào danh sách valid, ngược lại thì push vào ds invalid
        if (errors.length === 0) {
            validCases.push(testCase);
        } else {
            invalidCases.push({
                ...testCase,
                errors
            });
        }
    }

    return {
        validCases,
        invalidCases,
        summary: {
            total: rawRows.length,
            valid: validCases.length,
            invalid: invalidCases.length,
            duplicateIds
        }
    };
}
const result = chuanHoaDanhSachTest(
    rawRows,
    testCaseConfig
   
);
console.log("VALID TESTCASSE");
console.table(result.validCases);
console.log("INVALID TESTCASSE");
console.table(result.invalidCases);
//Luồng xử lý tổng quát
// FOR từng dòng
//         ↓
// Destructuring
//         ↓
// Chuẩn hóa dữ liệu
//         ↓
// Build object mới
//         ↓
// Validate
//         ↓
// Kiểm tra duplicate
//         ↓
// Có lỗi?
//    /        \
//  Có         Không
//  ↓             ↓
// invalid     valid
//         ↓
//     return kết quả