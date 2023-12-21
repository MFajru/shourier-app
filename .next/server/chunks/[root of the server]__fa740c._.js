module.exports = {

"[project]/src/utils/printCategory.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "printCategory": ()=>printCategory
});
const printCategory = (catNumber)=>{
    switch(catNumber){
        case "1":
            return "OKE";
        case "2":
            return "Reguler";
        case "3":
            return "YES";
    }
};

})()),
"[project]/src/utils/formatter/formatToRupiah.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "formatToRupiah": ()=>formatToRupiah
});
const formatToRupiah = (number)=>{
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
};

})()),
"[project]/src/utils/getErrorMessage.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const getErrorMessage = (error)=>{
    if (error instanceof Error) return error.message;
    return String(error);
};
const __TURBOPACK__default__export__ = getErrorMessage;

})()),
"[project]/src/config/index.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "apiBaseUrl": ()=>apiBaseUrl
});
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8080");

})()),
"[project]/src/stores/userStore.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useUserStore": ()=>useUserStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getErrorMessage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/getErrorMessage.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const useUserStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["create"]()(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["persist"]((set)=>({
        user: null,
        error: "",
        isLoading: false,
        getUser: async (userId)=>{
            set({
                isLoading: true
            });
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users/${userId}`);
                if (response.status != 200) {
                    throw new Error(`Something bad happened, ${response.statusText}`);
                }
                const result = response.data;
                set({
                    user: {
                        email: result.email,
                        fname: result.fname,
                        phoneNumber: result.phoneNumber,
                        photo: result.photo,
                        balance: result.balance,
                        refCode: result.refCode
                    }
                });
            } catch (error) {
                set({
                    error: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$getErrorMessage$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"](error)
                });
                console.error(error);
            } finally{
                set({
                    isLoading: false
                });
            }
        }
    }), {
    name: "userInfo",
    skipHydration: true
}));

})()),
"[project]/src/stores/shippingStore.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useShippingStore": ()=>useShippingStore
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/index.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/zustand/esm/middleware.mjs [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useShippingStore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["create"]()(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["persist"]((set)=>({
        savedShippingForm: null,
        saveShippingForm: (shippingForm)=>set({
                savedShippingForm: shippingForm
            })
    }), {
    name: "newShipping",
    skipHydration: true
}));

})()),
"[project]/src/components/Loading/Spinner.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Spinner = ()=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "w-full flex justify-center",
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
            className: "loading loading-spinner loading-md"
        }, void 0, false, {
            fileName: "<[project]/src/components/Loading/Spinner.tsx>",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Loading/Spinner.tsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Spinner;

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
const InputField = ({ type, name, placeholder, value, label, onChange, err = "", variants = "medium" })=>{
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
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("input", {
                type: type === "password" ? innerType : type,
                name: name,
                placeholder: placeholder,
                className: `text-black input input-bordered w-full max-w-full ${variants === "medium" ? "input-md" : "input-sm"} ${err != "" ? "input-error" : ""}`,
                onChange: onChange,
                value: value
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 32,
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
                    lineNumber: 52,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 54,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text-alt text-red-500",
                    children: err
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Form/InputField.tsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};

})()),
"[project]/src/components/Card/CustomCard.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const CustomCard = ({ children, cardTitle })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "bg-white rounded-3xl px-6 py-8 drop-shadow flex flex-col",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                className: "font-semibold text-2xl",
                children: cardTitle
            }, void 0, false, {
                fileName: "<[project]/src/components/Card/CustomCard.tsx>",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Card/CustomCard.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = CustomCard;

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
const Button = ({ type = "button", children, variants = "", textSize = "normal", ...props })=>{
    let variantStyle = "";
    switch(variants){
        case "primary":
            variantStyle = "text-white btn-primary";
            break;
        case "error":
            variantStyle = "text-white btn-error";
            break;
        case "borderedError":
            variantStyle = "text-white btn-outline btn-error";
            break;
        case "primarySmall":
            variantStyle = "text-white btn-primary btn-sm";
            break;
        case "primaryBorderedTextSm":
            variantStyle = "border border-primary border-solid text-primary text-sm drop-shadow-sm bg-white btn-sm";
            break;
        case "logout":
            variantStyle = "text-red-500 text-base";
            break;
        case "bordered":
            variantStyle = "border border-black text-black text-sm";
            break;
        case "active":
            variantStyle = "text-white bg-primary";
    }
    switch(textSize){
        case "medium":
            variantStyle += " text-base";
            break;
    }
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
        type: type,
        ...props,
        className: `btn w-full ${variantStyle}`,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/Button/Button.tsx>",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;

})()),
"[project]/src/pages/user/shipping/shippingPayment.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Card/CustomCard.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/InputField.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loading/Spinner.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/shippingStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/userStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatter/formatToRupiah.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printAddOn$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/printAddOn.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printCategory$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/printCategory.ts [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
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
const ShippingPayment = ()=>{
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const { savedShippingForm } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"]();
    const { user } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    __TURBOPACK__external__react__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"].persist.rehydrate();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"].persist.rehydrate();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "bg-primary w-full py-12 px-4 md:px-[5%] lg:px-[12%]",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                    className: "text-3xl font-semibold text-white",
                    children: "Payment Page"
                }, void 0, false, {
                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            !savedShippingForm && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 29,
                columnNumber: 30
            }, this),
            savedShippingForm && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "py-10 px-4 md:px-[5%] lg:px-[12%] flex justify-between gap-6",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "flex flex-col w-1/3 justify-start gap-6",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        cardTitle: "Cost Summary",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex flex-col font-medium gap-3 mt-6",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                            className: "flex flex-col",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-lg",
                                                                    children: "Shipping Cost"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 38,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printCategory$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["printCategory"](savedShippingForm.category)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 39,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 37,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            className: "text-lg",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.categoryCost)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 43,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 36,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex justify-between text-lg",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            children: "Promo Code"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 48,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            children: savedShippingForm.promoUsed
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 49,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex justify-between text-lg",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            children: "Promo Discount"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 52,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            className: "text-red-500",
                                                            children: "-Rp 5.000,00"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 53,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 51,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                            className: "flex flex-col text-lg",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    children: "Add On"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 57,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-xs text-gray-400",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printAddOn$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["printAddOn"](savedShippingForm.addOn)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 58,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 56,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            className: "text-lg",
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.addOnCost)
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 62,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 55,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex justify-between font-semibold border-t border-black pt-6 mt-3",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            className: "text-semibold",
                                                            children: "Grand Total"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 67,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                            className: "text-xl",
                                                            children: "Rp 40.000,00"
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 68,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 66,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        cardTitle: "Use Promo",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex gap-4 items-center",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                                    type: "text",
                                                    name: "promo",
                                                    value: "",
                                                    placeholder: "Input promo here",
                                                    onChange: ()=>{}
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                    className: "btn btn-outline btn-primary rounded-2xl",
                                                    children: "Check"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 81,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                            lineNumber: 73,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "flex flex-col w-2/3 justify-start gap-6",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "w-3/5",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            cardTitle: "Your Balance",
                                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                className: "flex justify-between items-center mt-3",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                        className: "text-green-500 font-semibold  text-3xl",
                                                        children: user && user.balance && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](user.balance)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 91,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                        className: "btn btn-link text-lg",
                                                        children: "Top Up"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        cardTitle: "Shipping Detail",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("table", {
                                            className: "text-lg font-medium mt-6 border-separate border-spacing-2",
                                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tbody", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Length"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: [
                                                                    savedShippingForm.length,
                                                                    " CM"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Width"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 106,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: [
                                                                    savedShippingForm.width,
                                                                    " CM"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Height"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: [
                                                                    savedShippingForm.height,
                                                                    " CM"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 111,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Receiver Name"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 114,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: savedShippingForm.receiver
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Receiver Phone Number"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 118,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: savedShippingForm.receiverPhone
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Origin Address"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 122,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: savedShippingForm.originFull
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 123,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: "Destination Address"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 126,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                children: savedShippingForm.destinationFull
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 127,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 125,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "flex flex-col gap-6 my-8 px-[12%]",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variants: "primary",
                                onClick: ()=>{},
                                children: "Complete to Payment"
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                variants: "borderedError",
                                onClick: ()=>router.back(),
                                children: "Cancel Payment"
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 138,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
        lineNumber: 25,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ShippingPayment;

})()),
"[project]/public/logos/logo.png [ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/logo.a48733f3.png");
})()),
"[project]/public/logos/logo.png.mjs/(IMAGE)/[project]/public/logos/logo.png [ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/logos/logo.png [ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__["default"],
    width: 206,
    height: 46,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR42gFCAL3/AOz0///l7fj/x8fT/8XF0v/JytX/v8DN/72+zP/JytX/AOjy///n7vn/yMnV/8jI1P/JytX/xsfT/8LD0P/Q0dv/Pak3xBllJlEAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 2
};

})()),
"[project]/src/components/Navigation/Navbar/Navbar.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__external__next$2f$image__ = __turbopack_external_require__("next/image", true);
var __TURBOPACK__external__next$2f$link__ = __turbopack_external_require__("next/link", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/logos/logo.png.mjs/(IMAGE)/[project]/public/logos/logo.png [ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/solid/esm/index.js [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/userStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Loading/Spinner.tsx [ssr] (ecmascript)");
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
const Navbar = ()=>{
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const [isOpenMobile, setIsOpenMobile] = __TURBOPACK__external__react__["useState"](false);
    const [isOpenProfile, setIsOpenProfile] = __TURBOPACK__external__react__["useState"](false);
    const { user, isLoading } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "relative",
        children: [
            isOpenMobile && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "fixed min-w-full min-h-screen bg-black/10 z-50",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: " min-h-screen w-[80%] bg-white flex flex-col gap-24 font-semibold text-2xl p-10 z-50",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                            onClick: ()=>setIsOpenMobile(!isOpenMobile),
                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowLeftIcon"], {
                                width: 30,
                                height: 30
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex flex-col gap-10",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/",
                                    className: router.pathname === "/" ? "font-bold underline" : "",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/user/shipping",
                                    className: router.pathname.startsWith("/user/shipping") ? "font-bold underline" : "",
                                    children: "My Shipping"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/",
                                    children: "Saved Address"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/",
                                    children: "Top Up"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                    className: "text-warning text-left",
                                    children: "Get Free Balance!"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    className: "text-red-500",
                                    href: "/",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex gap-2   items-center",
                            children: isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 57,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: `w-12 h-12 avatar rounded-full ${!user ? "border border-solid border-black" : ":"}`,
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                                            src: user && user.photo ? user.photo : "/pictures/avatar.png",
                                            fill: true,
                                            sizes: "100%",
                                            alt: "Profile Picture"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 60,
                                        columnNumber: 19
                                    }, this),
                                    user ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        className: "font-normal",
                                        children: user.fname
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 76,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/auth/login",
                                        className: "text-3xl",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                    lineNumber: 24,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "fixed w-full flex items-center justify-between px-4 lg:px-[10%] h-20 z-40 bg-white",
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "flex w-full justify-between lg:justify-start items-center lg:w-[85%] gap-14",
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                className: "lg:hidden",
                                onClick: ()=>setIsOpenMobile(!isOpenMobile),
                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["Bars3Icon"], {
                                    width: 24,
                                    height: 24
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Shourier Logo",
                                    className: "w-28 lg:w-36",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "hidden gap-10 font-semibold lg:flex",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/",
                                        className: router.pathname === "/" ? "font-bold underline" : "",
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/user/shipping",
                                        className: router.pathname.startsWith("/user/shipping") ? "font-bold underline" : "",
                                        children: "My Shipping"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/",
                                        children: "Saved Address"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/",
                                        children: "Top Up"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                        className: "text-warning",
                                        children: "Get Free Balance!"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "md:w-[15%] lg:flex justify-end items-center hidden",
                        children: isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: `w-9 h-9 avatar rounded-full ${!user ? "border border-solid border-black" : ":"}`,
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                                        src: user && user.photo ? user.photo : "/pictures/avatar.png",
                                        fill: true,
                                        sizes: "100%",
                                        alt: "Profile Picture"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 131,
                                    columnNumber: 15
                                }, this),
                                user ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                            className: "btn btn-ghost text-base",
                                            onClick: ()=>setIsOpenProfile(!isOpenProfile),
                                            children: [
                                                user.fname,
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                                    width: 10,
                                                    height: 10
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                            lineNumber: 146,
                                            columnNumber: 19
                                        }, this),
                                        isOpenProfile && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex flex-col gap-6 absolute left-2 bg-white shadow-md rounded-lg p-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                                    href: "",
                                                    children: "Profile"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                    className: "text-red-500",
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 156,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 145,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/auth/login",
                                    className: "font-semibold pl-4",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/pages/layout.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2f$Navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Navigation/Navbar/Navbar.tsx [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Layout = ({ children })=>{
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    if (router.pathname.startsWith("/auth")) {
        return children;
    }
    if (router.pathname.startsWith("/admin")) {
        return children;
    }
    if (router.pathname === "/_error") {
        return children;
    }
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "bg-[#F9FBFC]",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2f$Navbar$2f$Navbar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/pages/layout.tsx>",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "min-h-screen pt-20 z-20",
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/pages/layout.tsx>",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/layout.tsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Layout;

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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout.tsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
function App({ Component, pageProps }) {
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("main", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$poppins_4cb400fb$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].className}`,
            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "<[project]/src/pages/_app.tsx>",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/pages/_app.tsx>",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/pages/_app.tsx>",
        lineNumber: 12,
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

//# sourceMappingURL=[root of the server]__fa740c._.js.map