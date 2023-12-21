module.exports = {

"[project]/public/pictures/shippingConfirmation.png [ssr] (static)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname }) => (() => {

__turbopack_export_value__("/_next/static/media/shippingConfirmation.e22c8e65.png");
})()),
"[project]/public/pictures/shippingConfirmation.png.mjs/(IMAGE)/[project]/public/pictures/shippingConfirmation.png [ssr] (static) (structured image object, ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png__$5b$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/public/pictures/shippingConfirmation.png [ssr] (static)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png__$5b$ssr$5d$__$28$static$29$__["default"],
    width: 2402,
    height: 2402,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+UlEQVR42o2PPWwBYQBAv/rrHR0sTFTv0rRp9dqkcro0Gqe509MamjTSplxycTFcQgwMGJAIg4gIcSExiNhYJMzCxs5gsZOI1XAsxOit7y0PgFPQazWo1fTkUMMqtU6rMdyhBuxsxyG4vdRhnk8q4Cbo4P+Hg3eRb+whkEok0nMFfGH/44rprrAodWtTN2ONwJBCKZfJ5IClqbDtxcIwfHWe7DTFen8scqlggzDjX3EfmweU2fTtIu3+bLiyzMV7oiBMNs4fPvaAos+/5LsXcE461EpER8NCZjUoF9ftXHWG6JH74wMEQ65w/OaasDwayVfMaFNCkGrvtySIP5PggxJAAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 8
};

})()),
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
"[project]/src/utils/printAddOn.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "printAddOn": ()=>printAddOn
});
const printAddOn = (addOnNum)=>{
    switch(addOnNum){
        case "0":
            return "No Add On";
        case "1":
            return "Wooden Package";
        case "2":
            return "Bubble Wrap";
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
                        id: result.id,
                        email: result.email,
                        fname: result.fname,
                        password: result.password,
                        phoneNumber: result.phoneNumber,
                        photo: result.photo,
                        balance: result.balance,
                        totalSpent: result.totalSpent,
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
"[project]/src/lib/swrFetcher.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fetcher": ()=>fetcher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fetcher = async (url)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
    return response.data;
};

})()),
"[project]/src/hooks/useCustomSWR.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "useCustomSWR": ()=>useCustomSWR
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$swrFetcher$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/swrFetcher.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/swr/core/dist/index.mjs [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const useCustomSWR = (apiUrl)=>{
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$core$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"](apiUrl, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$swrFetcher$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["fetcher"], {
        revalidateOnFocus: false
    });
    return result;
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
const Button = ({ type = "button", children, variants = "", textSize = "normal", ...props })=>{
    let variantStyle = "";
    switch(variants){
        case "primary":
            variantStyle = "text-white btn-primary";
            break;
        case "secondary":
            variantStyle = "btn-outline btn-primary";
            break;
        case "secondaryBig":
            variantStyle = "btn-outline btn-primary btn-lg";
            break;
        case "primaryBig":
            variantStyle = "text-white btn-primary btn-lg";
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
        case "borderedWarning":
            variantStyle = "btn-outline btn-warning";
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
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;

})()),
"[project]/src/components/Modal/Modal.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@heroicons/react/24/outline/esm/index.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const Modal = ({ setIsOpen, deletedDataName, onHandleDelete, children, variants })=>{
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "flex flex-col justify-center items-center bg-black/40 z-[999] min-h-screen fixed top-0 left-0 w-screen",
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
            className: "flex flex-col py-10 px-6 bg-[#F7F6F4] gap-6 rounded-lg",
            children: [
                variants === "delete" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex justify-between border-b border-slate-300",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                    className: "text-primary-orange text-xl mx-5",
                                    children: "Confirm Delete"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                    lineNumber: 28,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                    onClick: ()=>setIsOpen(false),
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["XMarkIcon"], {
                                        width: 25,
                                        height: 25,
                                        className: "text-primary-orange"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                        lineNumber: 30,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Modal/Modal.tsx>",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "text-xl mx-10 h-[100px] flex items-center",
                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                children: [
                                    " ",
                                    "Are you sure want to delete",
                                    " ",
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                                        className: "text-primary-orange",
                                        children: deletedDataName
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this),
                                    " ?"
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Modal/Modal.tsx>",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex gap-3 px-3 pt-4 justify-end border-t border-slate-300",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variants: "primary",
                                        onClick: onHandleDelete,
                                        children: "Yes"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setIsOpen(false),
                                        children: "No"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Modal/Modal.tsx>",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Modal/Modal.tsx>",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
                variants === "custom" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                    children: children
                }, void 0, false)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Modal/Modal.tsx>",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Modal/Modal.tsx>",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Modal;

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
const InputField = ({ page, type, name, placeholder, value, label, onChange, err = "", disabled = false, variants = "medium", showEye = true, isPassword = false })=>{
    const [showPassword, setShowPassword] = __TURBOPACK__external__react__["useState"](false);
    const innerType = showPassword ? "text" : "password";
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("label", {
        className: "form-control w-full max-w-full relative",
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: `label-text ${variants === "large" ? "text-base" : ""}`,
                    children: label
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("input", {
                type: isPassword && disabled ? "password" : type === "password" ? innerType : type,
                name: name,
                placeholder: placeholder,
                className: `text-black input input-bordered w-full max-w-full ${variants === "medium" ? "input-md" : variants === "large" ? "input-lg" : "input-sm"} ${err != "" ? "input-error" : ""} ${disabled ? "!text-black !bg-gray-100" : ""}`,
                onChange: onChange,
                value: value,
                disabled: disabled
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            showEye && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                type: "button",
                className: `absolute w-5 h-5 right-4 top-[50px] ${type !== "password" ? "hidden" : ""}`,
                onClick: ()=>{
                    setShowPassword(!showPassword);
                },
                children: showPassword ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EyeIcon"], {
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 79,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$20$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["EyeSlashIcon"], {
                    className: "text-gray-500"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 81,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            page === "promo" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label absolute -bottom-7",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text-alt text-red-500",
                    children: err
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 87,
                columnNumber: 9
            }, this),
            page != "promo" && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "label",
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("span", {
                    className: "label-text-alt text-red-500",
                    children: err
                }, void 0, false, {
                    fileName: "<[project]/src/components/Form/InputField.tsx>",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Form/InputField.tsx>",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Form/InputField.tsx>",
        lineNumber: 37,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Modal/Modal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useCustomSWR.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/shippingStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/userStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formatter/formatToRupiah.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printAddOn$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/printAddOn.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printCategory$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/printCategory.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__("[project]/public/pictures/shippingConfirmation.png.mjs/(IMAGE)/[project]/public/pictures/shippingConfirmation.png [ssr] (static) (structured image object, ecmascript)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__external__next$2f$image__ = __turbopack_external_require__("next/image", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/sonner/dist/index.mjs [ssr] (ecmascript)");
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
;
;
;
;
;
;
const ShippingPayment = ()=>{
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get("userId");
    const { savedShippingForm, saveShippingForm } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"]();
    const { user } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    const [isValidPromo, setIsValidPromo] = __TURBOPACK__external__react__["useState"](null);
    const [patchId, setPatchId] = __TURBOPACK__external__react__["useState"](0);
    const [existingShippingDetails, setExistingShippingDetils] = __TURBOPACK__external__react__["useState"]([]);
    const [promoErrorMess, setPromoErrorMess] = __TURBOPACK__external__react__["useState"]("");
    const [promoDiscount, setPromoDiscount] = __TURBOPACK__external__react__["useState"](0);
    const [isModalOpen, setIsModalOpen] = __TURBOPACK__external__react__["useState"](false);
    const [isConfModalOpen, setIsConfModalOpen] = __TURBOPACK__external__react__["useState"](false);
    const [usedPromo, setUsedPromo] = __TURBOPACK__external__react__["useState"]({
        id: 0,
        used: 0
    });
    const promos = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCustomSWR"](`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/promos`);
    const shipping = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useCustomSWR"](`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/shipping`);
    const patchUpdateUser = async (newBalance, newTotalSpent)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/users/${userId}`, {
                balance: newBalance,
                totalSpent: newTotalSpent
            });
            if (response.status != 200) {
                throw new Error(`Something bad happened, ${response.statusText}`);
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    const patchShipping = async (newShippingDetails)=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/shipping/${patchId}`, {
                shippingDetails: newShippingDetails
            });
            if (response.status != 200) {
                throw new Error(`Something bad happened, ${response.statusText}`);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].success("Successfully add new shipping");
            setIsModalOpen(true);
            return response.data;
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to add shipping, please check your data or contact administrator");
            console.error(error);
        }
    };
    const patchPromo = async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/promos/${usedPromo.id}`, {
                used: usedPromo.used + 1
            });
            if (response.status != 200) {
                throw new Error(`Something bad happened, ${response.statusText}`);
            }
            return response.data;
        } catch (error) {
            console.error(error);
        }
    };
    const handleCompletePayment = async ()=>{
        setIsConfModalOpen(false);
        if (savedShippingForm && user && user.balance && user.balance < savedShippingForm.costAfter) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["toast"].error("Insufficient balance, please top up your balance");
            return;
        }
        if (existingShippingDetails.length != 0 && patchId != 0 && savedShippingForm && user && user.balance && user.totalSpent) {
            const newShippingDetails = existingShippingDetails;
            newShippingDetails.push(savedShippingForm);
            const newBalance = user.balance - savedShippingForm.costAfter;
            const newTotalSpent = user.totalSpent + savedShippingForm.costAfter;
            await patchShipping(newShippingDetails);
            await patchUpdateUser(newBalance, newTotalSpent);
            if (usedPromo.id != 0) {
                await patchPromo();
            }
            document.body.style.overflow = "auto";
        }
    };
    const handlePromo = ()=>{
        if (promos.data && savedShippingForm && savedShippingForm.promoUsed) {
            for (const promo of promos.data){
                if (promo.promoCode === savedShippingForm.promoUsed) {
                    if (parseInt(promo.quota) === promo.used) {
                        setIsValidPromo(false);
                        setPromoErrorMess("Promo has reached maximum quota");
                        return;
                    }
                    if (promo.expiryDate === new Date().toLocaleString()) {
                        setIsValidPromo(false);
                        setPromoErrorMess("Promo has expired");
                        return;
                    }
                    setPromoDiscount(parseInt(promo.discount));
                    setUsedPromo({
                        id: promo.id,
                        used: promo.used
                    });
                    setIsValidPromo(true);
                    setPromoErrorMess("");
                    saveShippingForm({
                        ...savedShippingForm,
                        costAfter: savedShippingForm.costBefore * ((100 - parseInt(promo.discount)) / 100),
                        discountAmount: savedShippingForm.costBefore * (parseInt(promo.discount) / 100)
                    });
                    return;
                }
            }
            setIsValidPromo(false);
            setPromoErrorMess("Invalid Promo");
        }
    };
    const handleChangePromo = ()=>{
        setIsValidPromo(null);
        setPromoDiscount(0);
    };
    const handleOnChangePromo = (e)=>{
        setIsValidPromo(null);
        setPromoErrorMess("");
        let value = e.target.value;
        if (savedShippingForm) {
            if (value === " ") {
                value = "";
            }
            value = e.target.value.replace(" ", "").toUpperCase();
            saveShippingForm({
                ...savedShippingForm,
                [e.target.name]: value
            });
        }
    };
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (userId && shipping.data) {
            for (const ship of shipping.data){
                if (parseInt(userId) === ship.userId) {
                    setExistingShippingDetils(ship.shippingDetails);
                    setPatchId(ship.id);
                    return;
                }
            }
        }
    }, [
        userId,
        shipping.data
    ]);
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (isModalOpen || isConfModalOpen) {
            document.body.style.overflow = "hidden";
            return;
        }
    }, [
        isModalOpen,
        isConfModalOpen
    ]);
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (!promos.data) {
            promos.mutate();
        }
    });
    __TURBOPACK__external__react__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"].persist.rehydrate();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-center",
                richColors: true
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            isConfModalOpen && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                variants: "custom",
                setIsOpen: setIsConfModalOpen,
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: "flex flex-col items-center gap-10",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex flex-col items-center gap-4 w-4/5",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                    className: "font-semibold text-3xl text-center",
                                    children: "Payment Confirmation"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                    className: "text-center text-lg",
                                    children: "Are you sure you want to complete the payment?"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "w-9/12 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variants: "primary",
                                    onClick: handleCompletePayment,
                                    children: "Yes"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 236,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                    className: "btn btn-outline btn-primary w-full",
                                    onClick: ()=>setIsConfModalOpen(false),
                                    children: "No"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                    lineNumber: 226,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 225,
                columnNumber: 9
            }, this),
            isModalOpen && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Modal$2f$Modal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                variants: "custom",
                setIsOpen: setIsModalOpen,
                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                    className: "flex flex-col items-center gap-10",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "w-72",
                            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$pictures$2f$shippingConfirmation$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                alt: "Picture of box in top of earth"
                            }, void 0, false, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 252,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex flex-col items-center gap-4 w-9/12",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                                    className: "font-semibold text-3xl text-center",
                                    children: "Shipping Confirmed"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 259,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                    className: "text-center text-lg",
                                    children: 'Your shipment is on progress, please go to "My Shipping" page to see the status.'
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 262,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "w-9/12 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    variants: "primary",
                                    onClick: ()=>{
                                        router.replace("/user/shipping");
                                        saveShippingForm(null);
                                    },
                                    children: "Go to My Shipping Page"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 268,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                    className: "btn btn-outline btn-primary w-full",
                                    onClick: ()=>router.replace("/"),
                                    children: "Go to My Homepage"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 267,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                    lineNumber: 251,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 250,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: `flex flex-col`,
                children: [
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "bg-primary w-full py-12 px-[5%] lg:px-[12%]",
                        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                            className: "text-3xl font-semibold text-white",
                            children: "Payment Page"
                        }, void 0, false, {
                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    !savedShippingForm && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                        lineNumber: 291,
                        columnNumber: 32
                    }, this),
                    savedShippingForm && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["Fragment"], {
                        children: [
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "py-10 px-[5%] lg:px-[12%] flex flex-col-reverse lg:flex-row justify-between gap-6",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "flex flex-col w-full lg:w-1/3 justify-start gap-6",
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
                                                                            lineNumber: 300,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printCategory$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["printCategory"](savedShippingForm.category)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                            lineNumber: 301,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 299,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-lg",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.categoryCost)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 305,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                            className: "flex justify-between text-lg",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    children: "Promo Code"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 310,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    children: savedShippingForm.promoUsed != "" ? savedShippingForm.promoUsed : "-"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 311,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 309,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                            className: "flex justify-between text-lg",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    children: "Promo Discount"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 318,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-red-500",
                                                                    children: [
                                                                        "-",
                                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.costBefore * (promoDiscount / 100))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 319,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 317,
                                                            columnNumber: 21
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
                                                                            lineNumber: 328,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                            className: "text-xs text-gray-400",
                                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$printAddOn$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["printAddOn"](savedShippingForm.addOn)
                                                                        }, void 0, false, {
                                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                            lineNumber: 329,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 327,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-lg",
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.addOnCost)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 333,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 326,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                            className: "flex justify-between font-semibold border-t border-black pt-6 mt-3",
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-semibold",
                                                                    children: "Grand Total"
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 338,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                    className: "text-xl",
                                                                    children: promoDiscount === 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.costBefore) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatter$2f$formatToRupiah$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["formatToRupiah"](savedShippingForm.costAfter)
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                    lineNumber: 339,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                            lineNumber: 337,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 297,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$CustomCard$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                cardTitle: "Use Promo",
                                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                    className: "flex flex-col relative pb-4",
                                                    children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                        className: "flex gap-4 items-end",
                                                        children: [
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["InputField"], {
                                                                page: "promo",
                                                                type: "text",
                                                                name: "promoUsed",
                                                                value: savedShippingForm.promoUsed,
                                                                placeholder: "Input promo here",
                                                                onChange: handleOnChangePromo,
                                                                err: !isValidPromo ? promoErrorMess : ``,
                                                                disabled: isValidPromo && promoDiscount != 0 ? true : false
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 350,
                                                                columnNumber: 23
                                                            }, this),
                                                            isValidPromo && promoDiscount != 0 && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                                                className: "text-green-500 absolute text-xs -bottom-1",
                                                                children: [
                                                                    savedShippingForm.promoUsed,
                                                                    " is applied!"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 363,
                                                                columnNumber: 25
                                                            }, this),
                                                            isValidPromo && promoDiscount != 0 ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                                className: "btn btn-outline btn-primary rounded-2xl",
                                                                onClick: handleChangePromo,
                                                                children: "Change"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 368,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                                className: "btn btn-outline btn-primary rounded-2xl",
                                                                onClick: handlePromo,
                                                                children: "Check"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 375,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 347,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                        className: "flex flex-col w-full lg:w-2/3 justify-start gap-6",
                                        children: [
                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                                className: "w-full",
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
                                                                lineNumber: 390,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                                className: "btn btn-link text-lg",
                                                                children: "Top Up"
                                                            }, void 0, false, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 393,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 389,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 387,
                                                columnNumber: 17
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
                                                                        lineNumber: 401,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: [
                                                                            savedShippingForm.length,
                                                                            " CM"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 402,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 400,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Width"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 405,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: [
                                                                            savedShippingForm.width,
                                                                            " CM"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 406,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 404,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Height"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 409,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: [
                                                                            savedShippingForm.height,
                                                                            " CM"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 410,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 408,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Receiver Name"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 413,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: savedShippingForm.receiver
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 414,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 412,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Receiver Phone Number"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 417,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: savedShippingForm.receiverPhone
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 418,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 416,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Origin Address"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 421,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: savedShippingForm.originFull
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 422,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 420,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("tr", {
                                                                children: [
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: "Destination Address"
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 425,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("td", {
                                                                        children: savedShippingForm.destinationFull
                                                                    }, void 0, false, {
                                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                        lineNumber: 426,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                                lineNumber: 424,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                        lineNumber: 399,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                    lineNumber: 398,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                                lineNumber: 397,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 386,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                className: "flex flex-col gap-6 my-8 px-[5%] lg:px-[12%]",
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variants: "primary",
                                        onClick: ()=>setIsConfModalOpen(true),
                                        children: "Complete to Payment"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        variants: "borderedError",
                                        onClick: ()=>router.back(),
                                        children: "Cancel Payment"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                        lineNumber: 440,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/shippingStore.ts [ssr] (ecmascript)");
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
const Navbar = ()=>{
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get("userId");
    const [isOpenMobile, setIsOpenMobile] = __TURBOPACK__external__react__["useState"](false);
    const [isOpenProfile, setIsOpenProfile] = __TURBOPACK__external__react__["useState"](false);
    const { user, isLoading, getUser } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"]();
    const { saveShippingForm } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"]();
    const [name, setName] = __TURBOPACK__external__react__["useState"]("");
    const handleLogout = ()=>{
        localStorage.clear();
        Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get()).forEach((cookieName)=>{
            var neededAttributes = {
                token: "",
                userId: ""
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__["default"].remove(cookieName, neededAttributes);
        });
        router.replace("/");
        router.reload();
    };
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (userId) {
            getUser(userId);
            return;
        }
    }, [
        getUser,
        userId
    ]);
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
                                lineNumber: 52,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 51,
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
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/user/shipping",
                                    className: router.pathname.startsWith("/user/shipping") ? "font-bold underline" : "",
                                    children: "My Shipping"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/user/address",
                                    className: router.pathname.startsWith("/user/address") ? "font-bold underline" : "",
                                    children: "Saved Address"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/user/topUp",
                                    className: router.pathname.startsWith("/user/topUp") ? "font-bold underline" : "",
                                    children: "Top Up"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/user/profile",
                                    className: router.pathname.startsWith("/user/profile") ? "font-bold underline" : "",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    className: "text-red-500",
                                    href: "/",
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                            className: "flex gap-2 items-center",
                            children: isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 110,
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
                                            lineNumber: 118,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 113,
                                        columnNumber: 19
                                    }, this),
                                    user ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                                        className: "font-normal",
                                        children: user.fname
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/auth/login",
                                        className: "text-3xl",
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 130,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                    lineNumber: 50,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                lineNumber: 49,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                className: "fixed w-full flex items-center justify-between px-[5%] lg:px-[10%] h-20 z-40 bg-white",
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
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                onClick: ()=>router.push("/"),
                                children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$image__["default"], {
                                    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$logos$2f$logo$2e$png$2e$mjs$2f28$IMAGE$292f5b$project$5d2f$public$2f$logos$2f$logo$2e$png__$5b$ssr$5d$__$28$static$29$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                                    alt: "Shourier Logo",
                                    className: "w-28 lg:w-36",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 148,
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
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/user/shipping",
                                        className: router.pathname.startsWith("/user/shipping") ? "font-bold underline" : "",
                                        children: "My Shipping"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/user/address",
                                        className: router.pathname.startsWith("/user/address") ? "font-bold underline" : "",
                                        children: "Saved Address"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                        href: "/user/topUp",
                                        className: router.pathname.startsWith("/user/topUp") ? "font-bold underline" : "",
                                        children: "Top Up"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                        className: "md:w-[25%] lg:flex justify-end items-center hidden",
                        children: isLoading ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loading$2f$Spinner$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                            lineNumber: 198,
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
                                        lineNumber: 206,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this),
                                user ? /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                            className: "btn btn-ghost text-sm",
                                            onClick: ()=>setIsOpenProfile(!isOpenProfile),
                                            children: [
                                                user.fname,
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["ChevronDownIcon"], {
                                                    width: 10,
                                                    height: 10
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                            lineNumber: 215,
                                            columnNumber: 19
                                        }, this),
                                        isOpenProfile && /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                                            className: "flex flex-col gap-6 absolute left-2 bg-white shadow-md rounded-lg p-4 text-sm",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                                    href: "/user/profile",
                                                    className: router.pathname.startsWith("/user/profile") ? "font-bold underline" : "",
                                                    children: "Profile"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 224,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                                                    className: "text-red-500",
                                                    onClick: handleLogout,
                                                    children: "Logout"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                                    lineNumber: 234,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                            lineNumber: 223,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 214,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__external__next$2f$link__["default"], {
                                    href: "/auth/login",
                                    className: "font-semibold pl-4",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Navigation/Navbar/Navbar.tsx>",
        lineNumber: 47,
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
    if (router.pathname === "_error") {
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

//# sourceMappingURL=[root of the server]__4e68b4._.js.map