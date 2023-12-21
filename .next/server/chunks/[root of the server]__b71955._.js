module.exports = {

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
"[project]/src/pages/user/shipping/shippingPayment.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/shippingStore.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/userStore.ts [ssr] (ecmascript)");
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const ShippingPayment = ()=>{
    const { savedShippingForm } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useShippingStore"]();
    __TURBOPACK__external__react__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["useUserStore"].persist.re;
    });
    return /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
            className: "bg-primary w-full py-12 px-4 md:px-[5%] lg:px-[12%]",
            children: /*#__PURE__*/ __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h1", {
                className: "text-3xl font-semibold text-white",
                children: "Payment Page"
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/pages/user/shipping/shippingPayment.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ShippingPayment;

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

//# sourceMappingURL=[root of the server]__b71955._.js.map