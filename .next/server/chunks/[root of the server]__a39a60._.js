module.exports = {

"[project]/src/utils/generator/generateToken.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "generateToken": ()=>generateToken
});
const generateToken = ()=>{
    return "user-" + crypto.randomUUID();
};

})()),
"[project]/src/utils/generator/generateRefCode.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "generateRefCode": ()=>generateRefCode
});
const generateRefCode = ()=>{
    return Math.random().toString(36).toUpperCase().substring(2, 8);
};

})()),
"[project]/src/config/index.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "apiBaseUrl": ()=>apiBaseUrl
});
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8080");

})()),
"[project]/src/components/Layout/AuthLayout.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "AuthLayout": ()=>AuthLayout
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__next$2f$image__ = __turbopack_external_require__("next/image", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const AuthLayout = ({ children, page })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "flex flex-col px-28 py-10 w-full lg:w-1/2 max-h-screen",
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                        src: "/logos/logo.png",
                        alt: "Shourier Logo",
                        className: "absolute left-30 w-28 lg:w-36",
                        width: 100,
                        height: 25
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    children
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "hidden lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-center",
                children: page === "login" ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                    src: "/pictures/login.png",
                    alt: "Illustration of a courier",
                    width: 700,
                    height: 700,
                    priority: true
                }, void 0, false, {
                    fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
                    lineNumber: 25,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                    src: "/pictures/signup.png",
                    alt: "Illustration of a courier",
                    width: 700,
                    height: 700,
                    priority: true
                }, void 0, false, {
                    fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
                    lineNumber: 33,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Layout/AuthLayout.tsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};

})()),
"[project]/src/utils/formValidation/isFieldEmpty.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isFieldEmpty": ()=>isFieldEmpty
});
const isFieldEmpty = (value)=>{
    if (value === "") {
        return true;
    }
    return false;
};

})()),
"[project]/src/utils/formValidation/isValidForm.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isValidForm": ()=>isValidForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isFieldEmpty$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formValidation/isFieldEmpty.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const isValidForm = (data, setError)=>{
    const ObjData = Object.entries(data);
    let countEmpty = 0;
    for (const [key, value] of ObjData){
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isFieldEmpty$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isFieldEmpty"](value)) {
            countEmpty += 1;
            setError((prevData)=>{
                return {
                    ...prevData,
                    [key]: true
                };
            });
        }
    }
    if (countEmpty >= 1) {
        return false;
    }
    return true;
};

})()),
"[project]/src/utils/formValidation/isValidEmail.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "isValidEmail": ()=>isValidEmail
});
const isValidEmail = (email)=>{
    const emailRegex = new RegExp("^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$", "i");
    return emailRegex.test(email);
};

})()),
"[project]/src/components/Form/InputField.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "InputField": ()=>InputField
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/20/solid/esm/index.js [ssr] (ecmascript)");
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const InputField = ({ type, name, placeholder, value, label, onChange, err })=>{
    const [showPassword, setShowPassword] = __TURBOPACK__external__react__["useState"](false);
    const innerType = showPassword ? "text" : "password";
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("label", {
        className: "form-control w-full max-w-full relative",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text",
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("input", {
                type: type === "password" ? innerType : type,
                name: name,
                placeholder: placeholder,
                className: `text-black input input-bordered w-full max-w-full input-md ${err != "" ? "input-error" : ""}`,
                onChange: onChange,
                value: value
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                type: "button",
                className: `absolute w-5 h-5 right-4 top-[50px] ${type !== "password" ? "hidden" : ""}`,
                onClick: ()=>{
                    setShowPassword(!showPassword);
                },
                children: showPassword ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 50,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text-alt text-red-500",
                    children: err
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Form/InputField.tsx>",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};

})()),
"[project]/src/components/Button/Button.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Button": ()=>Button,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Button = ({ type = "button", children, variants = "", ...props })=>{
    let variantStyle = "";
    switch(variants){
        case "primary":
            variantStyle = "text-white btn-primary";
    }
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
        type: type,
        ...props,
        className: `btn w-full ${variantStyle}`,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/Button/Button.tsx>",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;

})()),
"[project]/src/pages/auth/signup.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/InputField.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidEmail$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formValidation/isValidEmail.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidForm$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formValidation/isValidForm.ts [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$link__ = __turbopack_external_require__("next/link", true);
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Layout/AuthLayout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateRefCode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generator/generateRefCode.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateToken$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generator/generateToken.ts [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const SignUp = ()=>{
    const [registerValue, setRegisterValue] = __TURBOPACK__external__react__["useState"]({
        fname: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPass: "",
        refCodeFriend: ""
    });
    const [isError, setIsError] = __TURBOPACK__external__react__["useState"]({
        fname: false,
        email: false,
        phoneNumber: false,
        password: false,
        confirmPass: false
    });
    const [existedUsers, setExistedUsers] = __TURBOPACK__external__react__["useState"]([]);
    const [isRefCodeFound, setIsRefCodeFound] = __TURBOPACK__external__react__["useState"](true);
    const correctPassword = registerValue.password === registerValue.confirmPass;
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const getExistedUser = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users`);
            if (response.status != 200) {
                throw new Error(`Something bad happened ${response.statusText}`);
            }
            const usersData = response.data;
            const tempArr = [];
            for (const user of usersData){
                if (user.role != "admin") {
                    const tempObj = {
                        email: user.email,
                        refCode: user.refCode
                    };
                    tempArr.push(tempObj);
                }
            }
            setExistedUsers(tempArr);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].error("Login Failed, Please enter valid username and password");
            console.error(error);
        }
    };
    const fetchRegister = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users`, {
                role: "user",
                token: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateToken$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateToken"](),
                email: registerValue.email,
                password: registerValue.password,
                fname: registerValue.fname,
                phoneNumber: registerValue.phoneNumber,
                photo: "/pictures/avatar.png",
                balance: 0,
                refCode: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateRefCode$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["generateRefCode"](),
                refCodeFriend: registerValue.refCodeFriend,
                refCodeUsedCount: 0,
                completedShipments: 0,
                totalSpent: 0,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
            if (response.status != 201) {
                throw new Error(`Something bad happened ${response.statusText}`);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].success("Register successfull");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].error("Register failed, server error");
            console.error(error);
        }
    };
    const handleOnChange = (e)=>{
        setIsRefCodeFound(true);
        setIsError((prevData)=>{
            return {
                ...prevData,
                [e.target.name]: false
            };
        });
        if (e.target.name === "refCodeFriend") {
            setRegisterValue((existingVal)=>{
                return {
                    ...existingVal,
                    refCodeFriend: e.target.value.toUpperCase()
                };
            });
        } else {
            setRegisterValue((existingVal)=>{
                return {
                    ...existingVal,
                    [e.target.name]: e.target.value
                };
            });
        }
    };
    const handleOnSubmit = async (e)=>{
        e.preventDefault();
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidForm$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidForm"](registerValue, setIsError) && correctPassword && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidEmail$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidEmail"](registerValue.email)) {
            let isOk = false;
            for (const existedUser of existedUsers){
                if (registerValue.email === existedUser.email) {
                    setIsError((prevData)=>{
                        return {
                            ...prevData,
                            email: true
                        };
                    });
                    break;
                }
                if (registerValue.refCodeFriend === existedUser.refCode) {
                    setIsError((prevData)=>{
                        return {
                            ...prevData,
                            email: false
                        };
                    });
                    isOk = true;
                    break;
                }
                setIsRefCodeFound(false);
            }
            if (isOk) {
                await fetchRegister();
                setTimeout(()=>{
                    router.push("/auth/login");
                }, 1000);
            }
            return;
        }
    };
    __TURBOPACK__external__react__["useEffect"](()=>{
        getExistedUser();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AuthLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["AuthLayout"], {
        page: "signup",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                richColors: true,
                position: "top-center"
            }, void 0, false, {
                fileName: "<[project]/src/pages/auth/signup.tsx>",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "flex flex-col pt-12 justify-center w-full max-h-screen",
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "flex flex-col gap-2",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                            className: "text-4xl text-black",
                            children: "Get Started Now"
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/auth/signup.tsx>",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/auth/signup.tsx>",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("form", {
                        className: "flex flex-col w-full mt-1",
                        onSubmit: handleOnSubmit,
                        noValidate: true,
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "text",
                                label: "Full Name",
                                placeholder: "Your full name here...",
                                value: registerValue.fname,
                                onChange: handleOnChange,
                                name: "fname",
                                err: isError.fname ? "Full Name must be filled" : ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 177,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "email",
                                label: "Email",
                                placeholder: "Your email here...",
                                value: registerValue.email,
                                onChange: handleOnChange,
                                name: "email",
                                err: isError.email && registerValue.email === "" ? "Email must be filled" : isError.email && registerValue.email != "" ? "Email already exist" : !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidEmail$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["isValidEmail"](registerValue.email) && registerValue.email ? "Invalid email format, ex: john@mail.com" : ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "text",
                                label: "Phone Number",
                                placeholder: "Your phone number here...",
                                value: registerValue.phoneNumber,
                                onChange: handleOnChange,
                                name: "phoneNumber",
                                err: isError.phoneNumber ? "Phone number must be filled" : ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "password",
                                label: "Password",
                                placeholder: "Your password here...",
                                value: registerValue.password,
                                onChange: handleOnChange,
                                name: "password",
                                err: isError.password ? "Password must be filled" : ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "password",
                                label: "Confirm Password",
                                placeholder: "Your confirm password here...",
                                value: registerValue.confirmPass,
                                onChange: handleOnChange,
                                name: "confirmPass",
                                err: `${isError.confirmPass ? "Confirm password must be filled" : !correctPassword && registerValue.confirmPass !== "" ? "Password not match" : ""}`
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "text",
                                label: "Referral Code",
                                placeholder: "Your referral code here (optional)",
                                value: registerValue.refCodeFriend,
                                onChange: handleOnChange,
                                name: "refCodeFriend",
                                err: !isRefCodeFound ? "Referal code not found" : ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    variants: "primary",
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/auth/signup.tsx>",
                                    lineNumber: 246,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/auth/signup.tsx>",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        className: "text-black mt-5",
                        children: [
                            "Have an account?",
                            " ",
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                href: "/auth/login",
                                className: "cursor-pointer font-semibold",
                                children: "Log in here"
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/auth/signup.tsx>",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/auth/signup.tsx>",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/auth/signup.tsx>",
                lineNumber: 168,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/auth/signup.tsx>",
        lineNumber: 166,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SignUp;

})()),
"[next]/internal/font/google/poppins_4cb400fb.module.css [ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "className__poppins_4cb400fb__e1bf1c5b",
});

})()),
"[next]/internal/font/google/poppins_4cb400fb.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_4cb400fb.module.css [ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Poppins_4cb400', '__Poppins_Fallback_4cb400'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/src/pages/_app.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>App
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/poppins_4cb400fb.js [ssr] (ecmascript)");
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("main", {
        className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].className,
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](Component, {
            ...pageProps
        }, void 0, false, {
            fileName: "<[project]/src/pages/_app.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/pages/_app.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}

})()),
"[project]/src/pages/_document.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Document
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__next$2f$document__ = __turbopack_external_require__("next/document", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function Document() {
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Html"], {
        lang: "en",
        "data-theme": "light",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Head"], {}, void 0, false, {
                fileName: "<[project]/src/pages/_document.tsx>",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("body", {
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["Main"], {}, void 0, false, {
                        fileName: "<[project]/src/pages/_document.tsx>",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$document__["NextScript"], {}, void 0, false, {
                        fileName: "<[project]/src/pages/_document.tsx>",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/_document.tsx>",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/_document.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}

})()),

};

//# sourceMappingURL=[root of the server]__a39a60._.js.map