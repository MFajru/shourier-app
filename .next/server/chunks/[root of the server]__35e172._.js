module.exports = {

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
"[project]/src/components/Form/SelectField.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
const SelectField = ({ id, name, placeholder, label, defaultValue, err, variants, options, onChange })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("label", {
        className: "form-control w-full max-w-xs",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text",
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/SelectField.tsx>",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/SelectField.tsx>",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("select", {
                name: name,
                id: id,
                onChange: onChange,
                value: defaultValue,
                className: `select select-bordered ${variants === "small" ? "select-sm" : ""}`,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("option", {
                        disabled: true,
                        value: "",
                        children: "Pick one..."
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Form/SelectField.tsx>",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    options.map((option, idx)=>/*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("option", {
                            children: option
                        }, idx, false, {
                            fileName: "<[project]/src/components/Form/SelectField.tsx>",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Form/SelectField.tsx>",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text-alt text-red-500",
                    children: err
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/SelectField.tsx>",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/SelectField.tsx>",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Form/SelectField.tsx>",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SelectField;

})()),
"[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$SelectField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/SelectField.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AdminLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Layout/AdminLayout.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Rating$2f$Rating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Rating/Rating.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatter/formatDate.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatter/formatToRupiah.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [ssr] (ecmascript)");
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
;
const EditShipping = ()=>{
    const [shippingStatus, setShippingStatus] = __TURBOPACK__external__react__["useState"]("");
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const fetchSpecificShip = async (url)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data;
    };
    const specShipping = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"](router.query.shippingId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/shipping/${router.query.shippingId}` : null, fetchSpecificShip, {
        revalidateOnFocus: false
    });
    const fetchSpecificUser = async (url)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data;
    };
    const specUser = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"](specShipping.data ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users/${specShipping.data?.userId}` : null, fetchSpecificUser, {
        revalidateOnFocus: false
    });
    const patchShipping = async (updatedArr)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/shipping/${router.query.shippingId}`, {
                shippingDetails: updatedArr
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].success("Save successfull");
            return response.data;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].error("Save failed, there is something wrong");
            console.error(error);
        }
    };
    const handleOnSave = async (existData, idx)=>{
        const tempData = existData;
        const updateShippingDetail = existData[idx];
        if (shippingStatus != "") {
            const updated = {
                ...updateShippingDetail,
                status: shippingStatus
            };
            tempData[idx] = updated;
            await patchShipping(tempData);
            setTimeout(()=>{
                router.replace("/admin/shipping");
            }, 1000);
        }
    };
    const handleOnStatus = (e)=>{
        setShippingStatus(e.target.value);
    };
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Layout$2f$AdminLayout$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-center",
                richColors: true
            }, void 0, false, {
                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                className: "uppercase font-semibold text-2xl text-black pt-14",
                children: [
                    "Detail & Edit Status of Shipping ",
                    router.query.shippingDetailId
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "flex flex-col",
                children: [
                    specShipping.error && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        children: "error"
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                        lineNumber: 89,
                        columnNumber: 32
                    }, this),
                    specShipping.isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "w-full flex justify-center",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                            className: "loading loading-spinner loading-md"
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        children: specShipping.data && specShipping.data.shippingDetails.map((detail, idx)=>detail.id === router.query.shippingDetailId ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "w-full flex mt-5 items-center gap-20",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                className: "flex items-center gap-4",
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                        className: "font-semibold",
                                                        children: "Shipping Status:"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 102,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                        className: "w-40",
                                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$SelectField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            id: "status",
                                                            name: "status",
                                                            variants: "small",
                                                            defaultValue: shippingStatus === "" ? detail.status : shippingStatus,
                                                            options: [
                                                                "Pending",
                                                                "On Delivery",
                                                                "Finished"
                                                            ],
                                                            onChange: handleOnStatus
                                                        }, void 0, false, {
                                                            fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                            lineNumber: 104,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 103,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 101,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                        className: "font-semibold",
                                                        children: [
                                                            "Review: ",
                                                            detail.review
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 119,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Rating$2f$Rating$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 118,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                        lineNumber: 100,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("table", {
                                        className: "w-full border-separate border-spacing-y-2",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                className: "font-semibold text-xl mt-2",
                                                children: "Shipping Info"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 125,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Shipping ID"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 129,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 130,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Shipping Date"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 132,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatDate$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["default"](detail.createdAt)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 133,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 128,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Sender Name"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 136,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            specUser.data?.fname
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Sender Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 138,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            specUser.data?.phoneNumber
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 139,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 135,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Receiver Name"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 142,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.receiver
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 143,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Receiver Phone Number"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 144,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.receiverPhone
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 145,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 141,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Origin"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 148,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.origin
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 149,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Destination"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 150,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.destination
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 151,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 147,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                className: "font-semibold mt-4 text-xl",
                                                children: "Package Info"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 153,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Length"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 155,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.length,
                                                            " CM"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 156,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Width"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 157,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.width,
                                                            " CM"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 158,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 154,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Height"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.height,
                                                            " CM"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 162,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Weight"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 163,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.weight,
                                                            " KG"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 164,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                className: "font-semibold mt-4 text-xl",
                                                children: "Additional Info"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 166,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Delivery Category"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 170,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ":",
                                                            " ",
                                                            detail.category === "1" ? "OKE" : detail.category === "2" ? "Reguler" : "YES"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 171,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Add On"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 179,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ":",
                                                            " ",
                                                            detail.addOns === "1" ? "Wooden Package" : "Bubble Wrap"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 180,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 169,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                className: "font-semibold mt-4 text-xl",
                                                children: "Cost Summary"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 187,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Sub Cost"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 189,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](detail.costBefore)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 190,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Promo Code"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 191,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            detail.promoUsed
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 192,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 188,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                children: [
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Total Discount"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 195,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](detail.discountAmount)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 196,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        className: "font-semibold",
                                                        children: "Total Cost"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 197,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                        children: [
                                                            ": ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](detail.costAfter)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                        lineNumber: 198,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                lineNumber: 194,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                        lineNumber: 124,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "flex justify-start w-full mt-16",
                                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex gap-2 w-28",
                                            children: [
                                                shippingStatus === "" || shippingStatus === detail.status ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    disabled: true,
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                    lineNumber: 205,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    variants: "primary",
                                                    onClick: ()=>specShipping.data && handleOnSave(specShipping.data.shippingDetails, idx),
                                                    children: "Save"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                    lineNumber: 207,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    onClick: ()=>router.back(),
                                                    children: "Go Back"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                                    lineNumber: 220,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                            lineNumber: 202,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                        lineNumber: 201,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, detail.id, true, {
                                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                                lineNumber: 99,
                                columnNumber: 19
                            }, this) : null)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/admin/shipping/[shippingId]/[shippingDetailId]/manage.tsx>",
        lineNumber: 83,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = EditShipping;

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

//# sourceMappingURL=[root of the server]__35e172._.js.map