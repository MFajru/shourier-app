(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_middleware_ts_9f486c._.js", {

"[project]/src/middleware.ts [middleware] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/esm/server/web/exports/next-response.js [middleware] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const middleware = (request)=>{
    const token = request.cookies.get("token");
    if (token === undefined && (request.nextUrl.pathname.startsWith("/user") || request.nextUrl.pathname.startsWith("/admin"))) {
        const redirectUrl = new URL("/auth/login", request.nextUrl.origin);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].redirect(redirectUrl.toString());
    }
    if (token?.value?.includes("admin-") && (request.nextUrl.pathname.startsWith("/user") || request.nextUrl.pathname.startsWith("/auth") || request.nextUrl.pathname === "/")) {
        const redirectUrl = new URL("/admin/shipping", request.nextUrl.origin);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].redirect(redirectUrl.toString());
    }
    if (token?.value?.includes("user-") && (request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/auth"))) {
        const redirectUrl = new URL("/", request.nextUrl.origin);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].redirect(redirectUrl.toString());
    }
    if (request.nextUrl.pathname === "/admin") {
        const redirectUrl = new URL("/admin/shipping", request.nextUrl.origin);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].redirect(redirectUrl);
    }
    if (request.nextUrl.pathname === "/user") {
        const redirectUrl = new URL("/", request.nextUrl.origin);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$next$2d$response$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["default"].redirect(redirectUrl);
    }
};
const __TURBOPACK__default__export__ = middleware;

})()),
}]);

//# sourceMappingURL=src_middleware_ts_9f486c._.js.map