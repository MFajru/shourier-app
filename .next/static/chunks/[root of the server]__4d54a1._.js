(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__4d54a1._.js", {

"[project]/src/pages/user/shipping/newShipping.tsx [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button/Button.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$AdditionalCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Card/AdditionalCard.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/InputField.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$SelectField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Form/SelectField.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/config/index.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useCustomSWR.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/userStore.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateShippingId$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/generator/generateShippingId.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidForm$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/utils/formValidation/isValidForm.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/stores/shippingStore.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
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
const NewShipping = ()=>{
    _s();
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const baseCatOptions = [
        {
            variants: "category",
            cardTitle: "OKE",
            eta: "",
            cost: 0
        },
        {
            variants: "category",
            cardTitle: "REG",
            eta: "",
            cost: 0
        },
        {
            variants: "category",
            cardTitle: "YES",
            eta: "",
            cost: 0
        }
    ];
    const userId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"].get("userId");
    const [addOnOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([
        {
            variants: "addOn",
            cardTitle: "No Add On",
            cost: 0
        },
        {
            variants: "addOn",
            cardTitle: "Wooden Package",
            cost: 25000
        },
        {
            variants: "addOn",
            cardTitle: "Bubble Wrap",
            cost: 10000
        }
    ]);
    const [catOptions, setCatOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([
        {
            variants: "category",
            cardTitle: "OKE",
            eta: "",
            cost: 0
        },
        {
            variants: "category",
            cardTitle: "REG",
            eta: "",
            cost: 0
        },
        {
            variants: "category",
            cardTitle: "YES",
            eta: "",
            cost: 0
        }
    ]);
    const [isError, setIsError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        length: false,
        width: false,
        height: false,
        weight: false,
        origin: false,
        destination: false,
        category: false,
        addOn: false
    });
    const [originOptions, setOriginOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [destinationOptions, setDestinationOptions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]([]);
    const [subCost, setSubCost] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        category: 0,
        addOn: 0
    });
    const [selectedAddress, setSelectedAddress] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        originCityId: "",
        originFullAddress: "",
        destinationCityId: "",
        destinationFullAddress: ""
    });
    const [shippingForm, setShippingForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"]({
        id: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        receiver: "",
        receiverPhone: "",
        origin: "",
        destination: "",
        costBefore: 0,
        costAfter: 0,
        status: "Pending",
        promoUsed: "",
        discountAmount: 0,
        category: "",
        addOn: "",
        review: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
    const { savedShippingForm, saveShippingForm } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useShippingStore"]();
    const originAddress = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"](`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/originAddress`);
    const destinationAddress = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"](userId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["apiBaseUrl"]}/destinationAddress/${parseInt(userId) - 1}` : null);
    const cost = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"](selectedAddress.originCityId != "" && selectedAddress.destinationCityId != "" && shippingForm.weight != "" && parseInt(shippingForm.weight) <= 30 ? `/api/getCost?origin=${selectedAddress.originCityId}&destination=${selectedAddress.destinationCityId}&weight=${parseInt(shippingForm.weight) * 1000}` : null);
    const handleContinue = ()=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2f$isValidForm$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isValidForm"](shippingForm, setIsError)) {
            setShippingForm((prevData)=>{
                return {
                    ...prevData,
                    costBefore: subCost.addOn + subCost.category
                };
            });
            saveShippingForm({
                ...shippingForm,
                costBefore: subCost.addOn + subCost.category
            });
        }
    };
    const handleAction = (selectedOption1)=>{
        let value1 = "";
        if (selectedOption1.variants === "category") {
            switch(selectedOption1.cardTitle){
                case "OKE":
                    value1 = "1";
                    break;
                case "REG":
                    value1 = "2";
                    break;
                case "YES":
                    value1 = "3";
                    break;
            }
        } else {
            switch(selectedOption1.cardTitle){
                case "No Add On":
                    value1 = "0";
                    break;
                case "Wooden Package":
                    value1 = "1";
                    break;
                case "Bubble Wrap":
                    value1 = "2";
                    break;
            }
        }
        setSubCost((prevData)=>{
            return {
                ...prevData,
                [selectedOption1.variants]: selectedOption1.cost
            };
        });
        setShippingForm((prevData)=>{
            return {
                ...prevData,
                [selectedOption1.variants]: value1
            };
        });
        saveShippingForm({
            ...shippingForm,
            [selectedOption1.variants]: value1
        });
    };
    const handleTextInput = (e)=>{
        setIsError((prevData)=>{
            return {
                ...prevData,
                [e.target.name]: false
            };
        });
        if (e.target.name === "weight" && e.target.value.length > 2 || e.target.value.length > 4) {
            return;
        }
        saveShippingForm({
            ...shippingForm,
            [e.target.name]: e.target.value
        });
        setShippingForm((prevData)=>{
            return {
                ...prevData,
                [e.target.name]: e.target.value
            };
        });
        if (e.target.name === "weight" && e.target.value === "") {
            setCatOptions(baseCatOptions);
        }
    };
    const handleSelectAddress = (e)=>{
        setIsError((prevData)=>{
            return {
                ...prevData,
                [e.target.id]: false
            };
        });
        setSelectedAddress((prevData)=>{
            return {
                ...prevData,
                [e.target.name]: e.target.value
            };
        });
        const selectedAddressName = e.target.value.split(", ");
        if (destinationAddress.data && e.target.name === "destinationFullAddress") {
            const selectedDestination = destinationAddress.data.address.find((data)=>data.addressName === selectedAddressName[0]);
            if (selectedDestination) {
                setSelectedAddress((prevData)=>{
                    return {
                        ...prevData,
                        destinationCityId: selectedDestination.cityId
                    };
                });
                setShippingForm((prevData)=>{
                    return {
                        ...prevData,
                        destination: selectedDestination.city,
                        receiver: selectedDestination.receiver,
                        receiverPhone: selectedDestination.receiverPhone
                    };
                });
                saveShippingForm({
                    ...shippingForm,
                    [selectedOption.variants]: value
                });
            }
        }
        if (originAddress.data && e.target.name === "originFullAddress") {
            const selectedOrigin = originAddress.data.find((data)=>data.addressName === selectedAddressName[0]);
            if (selectedOrigin) {
                setSelectedAddress((prevData)=>{
                    return {
                        ...prevData,
                        originCityId: selectedOrigin.cityId
                    };
                });
                setShippingForm((prevData)=>{
                    return {
                        ...prevData,
                        origin: selectedOrigin.city
                    };
                });
            }
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (savedShippingForm) {
            setShippingForm(savedShippingForm);
        }
    }, [
        savedShippingForm
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (shippingForm.category != "") {
            setShippingForm((prevData)=>{
                return {
                    ...prevData,
                    id: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$generator$2f$generateShippingId$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["generateShippingId"](shippingForm.category)
                };
            });
        }
    }, [
        shippingForm.category
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (originAddress.data) {
            const stringArr = [];
            for (const origin of originAddress.data){
                const tempString = `${origin.addressName}, ${origin.street}, ${origin.city}, ${origin.province}`;
                stringArr.push(tempString);
            }
            setOriginOptions(stringArr);
        }
    }, [
        originAddress.data
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (destinationAddress.data) {
            const stringArr = [];
            for (const destination of destinationAddress.data.address){
                const tempString = `${destination.addressName}, ${destination.street}, ${destination.city}, ${destination.province}`;
                stringArr.push(tempString);
            }
            setDestinationOptions(stringArr);
        }
    }, [
        destinationAddress.data
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        if (cost.data) {
            const costsResult = cost.data.rajaongkir.results[0].costs;
            const newCatOptions = [
                {
                    variants: "category",
                    cardTitle: "OKE",
                    eta: "",
                    cost: 0
                },
                {
                    variants: "category",
                    cardTitle: "REG",
                    eta: "",
                    cost: 0
                },
                {
                    variants: "category",
                    cardTitle: "YES",
                    eta: "",
                    cost: 0
                }
            ];
            for (const cost of costsResult){
                if (cost.service === "OKE") {
                    const updatedCatOption = {
                        variants: "category",
                        cardTitle: "OKE",
                        cost: cost.cost[0].value,
                        eta: cost.cost[0].etd
                    };
                    newCatOptions[0] = updatedCatOption;
                } else if (cost.service === "REG" || cost.service === "CTC") {
                    const updatedCatOption = {
                        variants: "category",
                        cardTitle: "REG",
                        cost: cost.cost[0].value,
                        eta: cost.cost[0].etd
                    };
                    newCatOptions[1] = updatedCatOption;
                } else if (cost.service === "YES" || cost.service === "CTCYES") {
                    const updatedCatOption = {
                        variants: "category",
                        cardTitle: "YES",
                        cost: cost.cost[0].value,
                        eta: cost.cost[0].etd
                    };
                    newCatOptions[2] = updatedCatOption;
                }
            }
            setCatOptions(newCatOptions);
            if (cost.data.rajaongkir.results[0].costs.length === 0) {
                setCatOptions(newCatOptions);
            }
        }
    }, [
        cost.data
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        cost.mutate();
    }, [
        cost,
        shippingForm
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$userStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useUserStore"].persist.rehydrate();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useShippingStore"].persist.rehydrate();
    }, []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "bg-primary w-full py-12 px-4 md:px-[5%] lg:px-[12%]",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "text-3xl font-semibold text-white",
                    children: "Add New Shipping"
                }, void 0, false, {
                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                    lineNumber: 419,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                lineNumber: 418,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "py-10 px-4 md:px-[5%] lg:px-[12%]",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("form", {
                    className: "flex flex-col gap-10 mt-10",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "font-semibold text-2xl",
                                    children: "Package Details"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 424,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex w-full justify-between gap-8",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["InputField"], {
                                            type: "number",
                                            name: "length",
                                            value: shippingForm.length,
                                            label: "Length (CM)",
                                            placeholder: "ex: 2",
                                            onChange: handleTextInput,
                                            err: isError.length ? "Length must be filled" : ""
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 426,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["InputField"], {
                                            type: "number",
                                            name: "width",
                                            value: shippingForm.width,
                                            label: "Width (CM)",
                                            placeholder: "ex: 2",
                                            onChange: handleTextInput,
                                            err: isError.width ? "Width must be filled" : ""
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 435,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["InputField"], {
                                            type: "number",
                                            name: "height",
                                            value: shippingForm.height,
                                            label: "Height (CM)",
                                            placeholder: "ex: 2",
                                            onChange: handleTextInput,
                                            err: isError.height ? "Height must be filled" : ""
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$InputField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["InputField"], {
                                            type: "number",
                                            name: "weight",
                                            value: shippingForm.weight,
                                            label: "Weight (KG)",
                                            placeholder: "ex: 2",
                                            onChange: handleTextInput,
                                            err: isError.weight ? "Weight must be filled" : parseInt(shippingForm.weight) > 30 ? "Weight must be below 30 KG" : ""
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 453,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 425,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col gap-6",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "font-semibold text-2xl",
                                    children: "Address & Receiver Information"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 471,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "w-1/2",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$SelectField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                id: "origin",
                                                name: "originFullAddress",
                                                label: "Origin Address",
                                                options: originOptions,
                                                value: selectedAddress.originFullAddress != "" ? selectedAddress.originFullAddress : "",
                                                onChange: handleSelectAddress,
                                                err: isError.origin ? "Origin address must be filled" : ""
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                lineNumber: 476,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex flex-col w-1/2",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Form$2f$SelectField$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        id: "destination",
                                                        name: "destinationFullAddress",
                                                        label: "Destination Address",
                                                        options: destinationOptions,
                                                        value: selectedAddress.destinationFullAddress != "" ? selectedAddress.destinationFullAddress : "",
                                                        onChange: handleSelectAddress,
                                                        err: isError.destination ? "Destination address must be filled" : ""
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                        lineNumber: 492,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 491,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "font-semibold",
                                                                    children: "Receiver Name: "
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                                    lineNumber: 512,
                                                                    columnNumber: 21
                                                                }, this),
                                                                shippingForm.receiver
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                            lineNumber: 511,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                            children: [
                                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                                    className: "font-semibold",
                                                                    children: "Receiver Phone: "
                                                                }, void 0, false, {
                                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                                    lineNumber: 516,
                                                                    columnNumber: 21
                                                                }, this),
                                                                shippingForm.receiverPhone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                            lineNumber: 515,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 510,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 474,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                            lineNumber: 470,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col gap-5",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("h3", {
                                    className: "font-semibold text-2xl",
                                    children: "Additional Information"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 524,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col gap-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm",
                                                    children: "Shipping Category"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 527,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-red-500 text-xs",
                                                    children: isError.category ? "Category must be chose" : ""
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 528,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex gap-8",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$AdditionalCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                options: catOptions,
                                                handleAction: handleAction
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 532,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 525,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex flex-col gap-4 mt-4",
                                    children: [
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-sm",
                                                    children: "Add On"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 541,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "text-red-500 text-xs",
                                                    children: isError.addOn ? "Add On must be chose" : ""
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 540,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "flex gap-8",
                                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$AdditionalCard$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                options: addOnOptions,
                                                handleAction: handleAction
                                            }, void 0, false, {
                                                fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                                lineNumber: 547,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 539,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                            lineNumber: 523,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "flex flex-col gap-6 mt-16",
                            children: [
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    variants: "primary",
                                    onClick: handleContinue,
                                    children: "Continue to Payment"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 555,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2f$Button$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    variants: "borderedError",
                                    onClick: ()=>router.back(),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                                    lineNumber: 558,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                            lineNumber: 554,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                    lineNumber: 422,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
                lineNumber: 421,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/pages/user/shipping/newShipping.tsx>",
        lineNumber: 417,
        columnNumber: 5
    }, this);
};
_s(NewShipping, "adtWQABsWjGfGvWaIFFeppPSoWY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$shippingStore$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useShippingStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useCustomSWR$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["useCustomSWR"]
    ];
});
_c = NewShipping;
const __TURBOPACK__default__export__ = NewShipping;
var _c;
__turbopack_refresh__.register(_c, "NewShipping");

})()),
"[next]/entry/page-loader.ts/(PAGE)/[project]/src/pages/user/shipping/newShipping.tsx [client] (ecmascript) (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

const PAGE_PATH = "/user/shipping/newShipping";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_require__("[project]/src/pages/user/shipping/newShipping.tsx [client] (ecmascript)");
    }
]);
if (module.hot) {
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}

}.call(this) }),
"[turbopack]/dev/client/websocket.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

// Adapted from https://github.com/vercel/next.js/blob/canary/packages/next/client/dev/error-overlay/websocket.ts
__turbopack_esm__({
    "addMessageListener": ()=>addMessageListener,
    "connectHMR": ()=>connectHMR,
    "sendMessage": ()=>sendMessage
});
let source;
const eventCallbacks = [];
// TODO: add timeout again
// let lastActivity = Date.now()
function getSocketProtocol(assetPrefix) {
    let protocol = location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (_) {}
    return protocol === "http:" ? "ws" : "wss";
}
function addMessageListener(cb) {
    eventCallbacks.push(cb);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
function connectHMR(options) {
    const { timeout = 5 * 1000 } = options;
    function init() {
        if (source) source.close();
        console.log("[HMR] connecting...");
        function handleOnline() {
            const connected = {
                type: "turbopack-connected"
            };
            eventCallbacks.forEach((cb)=>{
                cb(connected);
            });
            if (options.log) console.log("[HMR] connected");
        // lastActivity = Date.now()
        }
        function handleMessage(event) {
            // lastActivity = Date.now()
            const message = {
                type: "turbopack-message",
                data: JSON.parse(event.data)
            };
            eventCallbacks.forEach((cb)=>{
                cb(message);
            });
        }
        // let timer: NodeJS.Timeout
        function handleDisconnect() {
            source.close();
            setTimeout(init, timeout);
        }
        const { hostname, port } = location;
        const protocol = getSocketProtocol(options.assetPrefix || "");
        const assetPrefix = options.assetPrefix.replace(/^\/+/, "");
        let url = `${protocol}://${hostname}:${port}${assetPrefix ? `/${assetPrefix}` : ""}`;
        if (assetPrefix.startsWith("http")) {
            url = `${protocol}://${assetPrefix.split("://")[1]}`;
        }
        source = new window.WebSocket(`${url}${options.path}`);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}

})()),
"[turbopack]/dev/client/hmr-client.ts [client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

/// <reference path="../../shared/runtime-types.d.ts" />
/// <reference path="../runtime/base/globals.d.ts" />
/// <reference path="../runtime/base/protocol.d.ts" />
/// <reference path="../runtime/base/extensions.d.ts" />
__turbopack_esm__({
    "connect": ()=>connect,
    "setHooks": ()=>setHooks,
    "subscribeToUpdate": ()=>subscribeToUpdate
});
var __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[turbopack]/dev/client/websocket.ts [client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function connect({ // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
addMessageListener = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["addMessageListener"], // TODO(WEB-1465) Remove this backwards compat fallback once
// vercel/next.js#54586 is merged.
sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"] }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                if (Array.isArray(msg.data)) {
                    for(let i = 0; i < msg.data.length; i++){
                        handleSocketMessage(msg.data[i]);
                    }
                } else {
                    handleSocketMessage(msg.data);
                }
                applyAggregatedUpdates();
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(never, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    // TODO(WEB-1465) Remove this backwards compat fallback once
    // vercel/next.js#54586 is merged.
    if (callback === undefined) {
        callback = sendMessage;
        sendMessage = __TURBOPACK__imported__module__$5b$turbopack$5d2f$dev$2f$client$2f$websocket$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sendMessage"];
    }
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    try {
        for (const callback of callbackSet.callbacks){
            callback(msg);
        }
        if (msg.type === "notFound") {
            // This indicates that the resource which we subscribed to either does not exist or
            // has been deleted. In either case, we should clear all update callbacks, so if a
            // new subscription is created for the same resource, it will send a new "subscribe"
            // message to the server.
            // No need to send an "unsubscribe" message to the server, it will have already
            // dropped the update stream before sending the "notFound" message.
            updateCallbackSets.delete(key);
        }
    } catch (err) {
        console.error(`An error occurred during the update of resource \`${msg.resource.path}\``, err);
        location.reload();
    }
}

})()),
}]);

//# sourceMappingURL=[root of the server]__4d54a1._.js.map