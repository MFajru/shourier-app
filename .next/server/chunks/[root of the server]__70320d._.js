module.exports = {

"[project]/src/utils/formatter/formatDate.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__moment__ = __turbopack_external_require__("moment", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const formatDate = (date)=>{
    return __TURBOPACK__external__moment__["default"](date).format("MMMM, Do YYYY");
};
const __TURBOPACK__default__export__ = formatDate;

})()),
"[project]/src/config/index.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "apiBaseUrl": ()=>apiBaseUrl
});
const apiBaseUrl = ("TURBOPACK compile-time value", "http://localhost:8080");

})()),
"[project]/src/components/Table/Table.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Table = ({ tableHeads, isHeadAbleToSort, children, onClickHead })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("table", {
            className: "table text-black text-base",
            children: [
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("thead", {
                    className: "text-sm",
                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                        children: [
                            tableHeads.map((head, idx)=>isHeadAbleToSort[idx] ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    onClick: onClickHead[idx],
                                    className: "cursor-pointer",
                                    children: head
                                }, idx, false, {
                                    fileName: "<[project]/src/components/Table/Table.tsx>",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {
                                    children: head
                                }, idx, false, {
                                    fileName: "<[project]/src/components/Table/Table.tsx>",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this)),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("th", {}, void 0, false, {
                                fileName: "<[project]/src/components/Table/Table.tsx>",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Table/Table.tsx>",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Table/Table.tsx>",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tbody", {
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/components/Table/Table.tsx>",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Table/Table.tsx>",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Table/Table.tsx>",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Table;

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
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
        type: type,
        ...props,
        className: `btn w-full ${variantStyle}`,
        children: children
    }, void 0, false, {
        fileName: "<[project]/src/components/Button/Button.tsx>",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;

})()),
"[project]/src/components/Navigation/Sidebar/Sidebar.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Sidebar": ()=>Sidebar
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$image__ = __turbopack_external_require__("next/image", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/logos/logo.png.mjs/(IMAGE)/[project]/public/logos/logo.png [ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__external__next$2f$link__ = __turbopack_external_require__("next/link", true);
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function Sidebar() {
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
            className: "w-[21%] bg-primary min-h-screen fixed left-0 px-7 py-20 z-10 rounded-r-lg flex flex-col gap-20 items-start",
            children: [
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: "w-full h-full flex justify-center cursor-pointer",
                    onClick: ()=>router.replace("/admin/shipping"),
                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                        alt: "Shourier Logo",
                        className: "text-center rounded-xl w-44",
                        priority: true
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: "flex flex-col gap-7 h-full w-full text-center text-white",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                            href: "/admin/shipping",
                            className: router.pathname.startsWith("/admin/shipping") ? "font-bold underline" : "",
                            children: "Manage Shipping"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                            href: "/admin/address",
                            className: router.pathname.startsWith("/admin/address") ? "font-bold underline" : "",
                            children: "Manage Origin Address"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                            href: "",
                            children: "Manage Promo"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                            href: "",
                            children: "Earning Reports"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                            href: "",
                            children: "Profile"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: "flex flex-col w-full text-center h-64 justify-end",
                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variants: "logout",
                        onClick: ()=>{},
                        children: "Logout"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Navigation/Sidebar/Sidebar.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false);
}

})()),
"[project]/src/components/Layout/AdminLayout.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Navigation/Sidebar/Sidebar.tsx [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const AdminLayout = ({ children })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2f$Sidebar$2f$Sidebar$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "<[project]/src/components/Layout/AdminLayout.tsx>",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "container w-[79%] relative left-[21%] px-14 min-h-screen",
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/Layout/AdminLayout.tsx>",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = AdminLayout;

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
const InputField = ({ type, name, placeholder, value, label, onChange, err, variants = "medium" })=>{
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
"[project]/src/pages/admin/shipping/index.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/InputField.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AdminLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Layout/AdminLayout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Table$2f$Table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Table/Table.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatter/formatDate.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$limitShowedData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/limitShowedData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$link__ = __turbopack_external_require__("next/link", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs [ssr] (ecmascript)");
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
const ManageShipping = ()=>{
    const [searchInput, setSearchInput] = __TURBOPACK__external__react__["useState"]("");
    const [page, setPage] = __TURBOPACK__external__react__["useState"](0);
    const [activePage, setActivePage] = __TURBOPACK__external__react__["useState"](0);
    const [totalPage, setTotalPage] = __TURBOPACK__external__react__["useState"](0);
    const [arrPage, setArrPage] = __TURBOPACK__external__react__["useState"]([]);
    const [shippingData, setShippingData] = __TURBOPACK__external__react__["useState"]([]);
    const [prevShippingData, setPrevShippingData] = __TURBOPACK__external__react__["useState"]([]);
    const [orderBy, setOrderBy] = __TURBOPACK__external__react__["useState"]("asc");
    const fetchShipping = async (url)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data;
    };
    const fetchUsers = async (url)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data;
    };
    const shipping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"](`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/shipping`, fetchShipping, {
        revalidateOnFocus: false
    });
    const users = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"](`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users`, fetchUsers, {
        revalidateOnFocus: false
    });
    const handleOnSearch = (e)=>{
        const value = e.target.value;
        setPage(0);
        setActivePage(0);
        setSearchInput(value);
        if (shippingData) {
            const result = shippingData.filter((detail)=>detail.id.toLowerCase().includes(value.toLowerCase()));
            setShippingData(result);
        }
        if (value === "") {
            setShippingData(prevShippingData);
        }
    };
    const handleGoToFirstPage = ()=>{
        setPage(0);
        setActivePage(0);
    };
    const handleGoToLastPage = ()=>{
        if (totalPage != 0) {
            setPage(totalPage - 1);
            setActivePage(totalPage - 1);
        }
    };
    const handleNextPage = ()=>{
        if (page != totalPage - 1) {
            setPage(page + 1);
            setActivePage(activePage + 1);
        }
    };
    const handlePrevPage = ()=>{
        if (page != 0) {
            setPage(page - 1);
            setActivePage(activePage - 1);
        }
    };
    const handleNumPage = (idx)=>{
        setPage(idx);
        setActivePage(idx);
    };
    const compareShippingDetailId = (a, b)=>{
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    };
    const compareShippingStatus = (a, b)=>{
        if (a.status < b.status) {
            return -1;
        }
        if (a.status > b.status) {
            return 1;
        }
        return 0;
    };
    const compareShippingCategory = (a, b)=>{
        return parseInt(b.category) - parseInt(a.category);
    };
    const comparePackageSize = (a, b)=>{
        return b.length * b.width * b.height - a.length * a.width * a.height;
    };
    const handleOnSortShippingId = (sortBy)=>{
        if (orderBy === "asc") {
            switch(sortBy){
                case "shippingDetailId":
                    shippingData.sort(compareShippingDetailId);
                    break;
                case "packageSize":
                    shippingData.sort(comparePackageSize);
                    break;
                case "shippingCategory":
                    shippingData.sort(compareShippingCategory);
                    break;
                case "shippingStatus":
                    shippingData.sort(compareShippingStatus);
                    break;
            }
            setOrderBy("desc");
        } else {
            switch(sortBy){
                case "shippingDetailId":
                    shippingData.sort(compareShippingDetailId).reverse();
                    break;
                case "packageSize":
                    shippingData.sort(comparePackageSize).reverse();
                    break;
                case "shippingCategory":
                    shippingData.sort(compareShippingCategory).reverse();
                    break;
                case "shippingStatus":
                    shippingData.sort(compareShippingStatus).reverse();
                    break;
            }
            setOrderBy("asc");
        }
    };
    __TURBOPACK__external__react__["useEffect"](()=>{
        let total = 0;
        if (shippingData) {
            total = shippingData.length;
            setTotalPage(Math.ceil(total / __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$limitShowedData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["limit"]));
        }
    }, [
        shippingData
    ]);
    __TURBOPACK__external__react__["useEffect"](()=>{
        let numArr = [];
        for(let i = 0; i < totalPage; i++){
            numArr.push(i + 1);
        }
        setArrPage(numArr);
    }, [
        totalPage
    ]);
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (shipping.data) {
            const arrItem = [];
            for (const item of shipping.data){
                for (const detail of item.shippingDetails){
                    arrItem.push({
                        ...detail,
                        shippingId: item.id,
                        userId: item.userId
                    });
                }
            }
            setShippingData(arrItem);
            setPrevShippingData(arrItem);
        }
    }, [
        shipping.data
    ]);
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AdminLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                className: "uppercase font-semibold text-2xl text-black pt-14",
                children: "Manage Shipping List"
            }, void 0, false, {
                fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "mt-5 flex flex-col",
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "w-full flex justify-end",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "w-72",
                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                type: "text",
                                name: "filter",
                                variants: "small",
                                placeholder: "Search by shipping number",
                                value: searchInput,
                                onChange: handleOnSearch,
                                err: ""
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                lineNumber: 209,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    (users.error || shipping.error) && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        className: "text-black",
                        children: "Something went wrong, please refresh the page"
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this),
                    users.isLoading || shipping.isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                            className: "loading loading-spinner loading-md"
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this) : shippingData && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Table$2f$Table$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        tableHeads: [
                            "Shipping ID",
                            "Sender Name",
                            "Package Size",
                            "Shipping Category",
                            "Shipping Date",
                            "Shipping Status"
                        ],
                        isHeadAbleToSort: [
                            true,
                            false,
                            true,
                            true,
                            false,
                            true
                        ],
                        onClickHead: [
                            ()=>handleOnSortShippingId("shippingDetailId"),
                            ()=>null,
                            ()=>handleOnSortShippingId("packageSize"),
                            ()=>handleOnSortShippingId("shippingCategory"),
                            ()=>null,
                            ()=>handleOnSortShippingId("shippingStatus")
                        ],
                        children: shippingData.slice(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$limitShowedData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["limit"] * page, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$limitShowedData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["limit"] * (page + 1)).map((shippingDetail)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: shippingDetail.id
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 254,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: users.data && users.data[shippingDetail.userId - 1].fname
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 255,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: [
                                            shippingDetail.length * shippingDetail.height * shippingDetail.width / 1000000,
                                            " ",
                                            "M³"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 259,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: shippingDetail.category === "1" ? "OKE" : shippingDetail.category === "2" ? "Reguler" : "YES"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 266,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"](shippingDetail.createdAt)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 273,
                                        columnNumber: 21
                                    }, this),
                                    shippingDetail.status === "Pending" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        className: "text-white text-center",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                            className: "bg-orange-500 py-0.5 rounded-full",
                                            children: shippingDetail.status
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                            lineNumber: 276,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 275,
                                        columnNumber: 23
                                    }, this),
                                    shippingDetail.status === "On Delivery" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        className: "text-white text-center",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                            className: "bg-green-500 py-0.5 rounded-full",
                                            children: shippingDetail.status
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                            lineNumber: 283,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 282,
                                        columnNumber: 23
                                    }, this),
                                    shippingDetail.status === "Finished" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        className: "text-white text-center",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                            className: "bg-gray-400 py-0.5 rounded-full",
                                            children: shippingDetail.status
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                            lineNumber: 290,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 289,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex gap-2",
                                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                                href: `/admin/shipping/${shippingDetail.shippingId}/${shippingDetail.id}/manage`,
                                                className: "text-primary hover:underline",
                                                children: "Manage"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                                lineNumber: 297,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                            lineNumber: 296,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 295,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, shippingDetail.id, true, {
                                fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                lineNumber: 253,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                        lineNumber: 231,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "flex justify-end mt-4",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex gap-1",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "w-10",
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleGoToFirstPage,
                                        children: `<<`
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 314,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "w-10",
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handlePrevPage,
                                        children: `<`
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                arrPage.map((numPage, idx)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "w-10",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variants: activePage === idx ? "active" : "",
                                            onClick: ()=>handleNumPage(idx),
                                            children: numPage
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this)
                                    }, idx, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "w-10",
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleNextPage,
                                        children: `>`
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "w-10",
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        onClick: handleGoToLastPage,
                                        children: `>>`
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                            lineNumber: 312,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/admin/shipping/index.tsx>",
        lineNumber: 202,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ManageShipping;

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

//# sourceMappingURL=[root of the server]__70320d._.js.map