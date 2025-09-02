"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/schools/route";
exports.ids = ["app/api/schools/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/assign":
/*!********************************!*\
  !*** external "lodash/assign" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/assign");

/***/ }),

/***/ "lodash/at":
/*!****************************!*\
  !*** external "lodash/at" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("lodash/at");

/***/ }),

/***/ "lodash/clone":
/*!*******************************!*\
  !*** external "lodash/clone" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/clone");

/***/ }),

/***/ "lodash/cloneDeep":
/*!***********************************!*\
  !*** external "lodash/cloneDeep" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/cloneDeep");

/***/ }),

/***/ "lodash/compact":
/*!*********************************!*\
  !*** external "lodash/compact" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/compact");

/***/ }),

/***/ "lodash/difference":
/*!************************************!*\
  !*** external "lodash/difference" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/difference");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "lodash/filter":
/*!********************************!*\
  !*** external "lodash/filter" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/filter");

/***/ }),

/***/ "lodash/first":
/*!*******************************!*\
  !*** external "lodash/first" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/first");

/***/ }),

/***/ "lodash/functions":
/*!***********************************!*\
  !*** external "lodash/functions" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/functions");

/***/ }),

/***/ "lodash/identity":
/*!**********************************!*\
  !*** external "lodash/identity" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/identity");

/***/ }),

/***/ "lodash/includes":
/*!**********************************!*\
  !*** external "lodash/includes" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/includes");

/***/ }),

/***/ "lodash/isArray":
/*!*********************************!*\
  !*** external "lodash/isArray" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isArray");

/***/ }),

/***/ "lodash/isElement":
/*!***********************************!*\
  !*** external "lodash/isElement" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("lodash/isElement");

/***/ }),

/***/ "lodash/isEmpty":
/*!*********************************!*\
  !*** external "lodash/isEmpty" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/isUndefined":
/*!*************************************!*\
  !*** external "lodash/isUndefined" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("lodash/isUndefined");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/map":
/*!*****************************!*\
  !*** external "lodash/map" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("lodash/map");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("lodash/merge");

/***/ }),

/***/ "lodash/take":
/*!******************************!*\
  !*** external "lodash/take" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/take");

/***/ }),

/***/ "lodash/trim":
/*!******************************!*\
  !*** external "lodash/trim" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("lodash/trim");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fschools%2Froute&page=%2Fapi%2Fschools%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschools%2Froute.ts&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fschools%2Froute&page=%2Fapi%2Fschools%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschools%2Froute.ts&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var C_Users_Lenovo_Downloads_school_directory_src_app_api_schools_route_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/app/api/schools/route.ts */ \"(rsc)/./src/app/api/schools/route.ts\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/schools/route\",\n        pathname: \"/api/schools\",\n        filename: \"route\",\n        bundlePath: \"app/api/schools/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Lenovo\\\\Downloads\\\\school-directory\\\\src\\\\app\\\\api\\\\schools\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Lenovo_Downloads_school_directory_src_app_api_schools_route_ts__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/schools/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzY2hvb2xzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzY2hvb2xzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2Nob29scyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNMZW5vdm8lNUNEb3dubG9hZHMlNUNzY2hvb2wtZGlyZWN0b3J5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNMZW5vdm8lNUNEb3dubG9hZHMlNUNzY2hvb2wtZGlyZWN0b3J5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUM4QztBQUM3RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGlyZWN0b3J5Lz8xZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEb3dubG9hZHNcXFxcc2Nob29sLWRpcmVjdG9yeVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzY2hvb2xzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zY2hvb2xzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvc2Nob29sc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvc2Nob29scy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEb3dubG9hZHNcXFxcc2Nob29sLWRpcmVjdG9yeVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxzY2hvb2xzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NjaG9vbHMvcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fschools%2Froute&page=%2Fapi%2Fschools%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschools%2Froute.ts&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/schools/route.ts":
/*!**************************************!*\
  !*** ./src/app/api/schools/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"(rsc)/./src/lib/prisma.ts\");\n/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/cloudinary */ \"(rsc)/./src/lib/cloudinary.ts\");\n\n\n\nconst dynamic = \"force-dynamic\"; // For Vercel/Render\nasync function POST(req) {\n    try {\n        const formData = await req.formData();\n        const name = formData.get(\"name\");\n        const address = formData.get(\"address\");\n        const city = formData.get(\"city\");\n        const state = formData.get(\"state\");\n        const contact = formData.get(\"contact\");\n        const email_id = formData.get(\"email_id\");\n        const imageFile = formData.get(\"image\");\n        if (!name || !address || !city || !state || !contact || !email_id || !imageFile) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"All fields are required\"\n            }, {\n                status: 400\n            });\n        }\n        // ✅ check if env vars are missing\n        if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Cloudinary environment variables are not set\"\n            }, {\n                status: 500\n            });\n        }\n        // Convert image to buffer for upload\n        const arrayBuffer = await imageFile.arrayBuffer();\n        const buffer = Buffer.from(arrayBuffer);\n        // Upload to Cloudinary\n        let uploadedImage;\n        try {\n            uploadedImage = await new Promise((resolve, reject)=>{\n                const stream = _lib_cloudinary__WEBPACK_IMPORTED_MODULE_2__[\"default\"].uploader.upload_stream({\n                    folder: \"schoolImages\"\n                }, (error, result)=>{\n                    if (error) reject(error);\n                    else resolve(result);\n                });\n                stream.end(buffer);\n            });\n        } catch (uploadError) {\n            console.error(\"Cloudinary Upload Error:\", uploadError);\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: `Image upload failed: ${uploadError.message || \"Unknown error\"}`\n            }, {\n                status: 502\n            } // Bad Gateway – external service failed\n            );\n        }\n        // Save to DB\n        const school = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.school.create({\n            data: {\n                name,\n                address,\n                city,\n                state,\n                contact,\n                email_id,\n                image: uploadedImage.secure_url\n            }\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(school, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Server Error:\", error);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: error.message || \"Unexpected server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zY2hvb2xzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ0U7QUFDSTtBQUUxQyxNQUFNRyxVQUFVLGdCQUFnQixDQUFDLG9CQUFvQjtBQUVyRCxlQUFlQyxLQUFLQyxHQUFZO0lBQ3JDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1ELElBQUlDLFFBQVE7UUFFbkMsTUFBTUMsT0FBT0QsU0FBU0UsR0FBRyxDQUFDO1FBQzFCLE1BQU1DLFVBQVVILFNBQVNFLEdBQUcsQ0FBQztRQUM3QixNQUFNRSxPQUFPSixTQUFTRSxHQUFHLENBQUM7UUFDMUIsTUFBTUcsUUFBUUwsU0FBU0UsR0FBRyxDQUFDO1FBQzNCLE1BQU1JLFVBQVVOLFNBQVNFLEdBQUcsQ0FBQztRQUM3QixNQUFNSyxXQUFXUCxTQUFTRSxHQUFHLENBQUM7UUFDOUIsTUFBTU0sWUFBWVIsU0FBU0UsR0FBRyxDQUFDO1FBRS9CLElBQUksQ0FBQ0QsUUFBUSxDQUFDRSxXQUFXLENBQUNDLFFBQVEsQ0FBQ0MsU0FBUyxDQUFDQyxXQUFXLENBQUNDLFlBQVksQ0FBQ0MsV0FBVztZQUMvRSxPQUFPZCxrRkFBWUEsQ0FBQ2UsSUFBSSxDQUN0QjtnQkFBRUMsT0FBTztZQUEwQixHQUNuQztnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxxQkFBcUIsSUFDbEMsQ0FBQ0YsUUFBUUMsR0FBRyxDQUFDRSxrQkFBa0IsSUFDL0IsQ0FBQ0gsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUIsRUFBRTtZQUN0QyxPQUFPdEIsa0ZBQVlBLENBQUNlLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBK0MsR0FDeEQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHFDQUFxQztRQUNyQyxNQUFNTSxjQUFjLE1BQU1ULFVBQVVTLFdBQVc7UUFDL0MsTUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDSDtRQUUzQix1QkFBdUI7UUFDdkIsSUFBSUk7UUFDSixJQUFJO1lBQ0ZBLGdCQUFnQixNQUFNLElBQUlDLFFBQVEsQ0FBQ0MsU0FBU0M7Z0JBQzFDLE1BQU1DLFNBQVM3Qix1REFBVUEsQ0FBQzhCLFFBQVEsQ0FBQ0MsYUFBYSxDQUM5QztvQkFBRUMsUUFBUTtnQkFBZSxHQUN6QixDQUFDbEIsT0FBT21CO29CQUNOLElBQUluQixPQUFPYyxPQUFPZDt5QkFDYmEsUUFBUU07Z0JBQ2Y7Z0JBRUZKLE9BQU9LLEdBQUcsQ0FBQ1o7WUFDYjtRQUNGLEVBQUUsT0FBT2EsYUFBa0I7WUFDekJDLFFBQVF0QixLQUFLLENBQUMsNEJBQTRCcUI7WUFDMUMsT0FBT3JDLGtGQUFZQSxDQUFDZSxJQUFJLENBQ3RCO2dCQUFFQyxPQUFPLENBQUMscUJBQXFCLEVBQUVxQixZQUFZRSxPQUFPLElBQUksZ0JBQWdCLENBQUM7WUFBQyxHQUMxRTtnQkFBRXRCLFFBQVE7WUFBSSxFQUFFLHdDQUF3Qzs7UUFFNUQ7UUFFQSxhQUFhO1FBQ2IsTUFBTXVCLFNBQVMsTUFBTXZDLCtDQUFNQSxDQUFDdUMsTUFBTSxDQUFDQyxNQUFNLENBQUM7WUFDeENDLE1BQU07Z0JBQ0puQztnQkFDQUU7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO2dCQUNBOEIsT0FBTyxjQUF1QkMsVUFBVTtZQUMxQztRQUNGO1FBRUEsT0FBTzVDLGtGQUFZQSxDQUFDZSxJQUFJLENBQUN5QixRQUFRO1lBQUV2QixRQUFRO1FBQUk7SUFFakQsRUFBRSxPQUFPRCxPQUFZO1FBQ25Cc0IsUUFBUXRCLEtBQUssQ0FBQyxpQkFBaUJBO1FBQy9CLE9BQU9oQixrRkFBWUEsQ0FBQ2UsSUFBSSxDQUN0QjtZQUFFQyxPQUFPQSxNQUFNdUIsT0FBTyxJQUFJO1FBQTBCLEdBQ3BEO1lBQUV0QixRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC1kaXJlY3RvcnkvLi9zcmMvYXBwL2FwaS9zY2hvb2xzL3JvdXRlLnRzP2Y2MzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XHJcbmltcG9ydCBjbG91ZGluYXJ5IGZyb20gXCIuLi8uLi8uLi9saWIvY2xvdWRpbmFyeVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjsgLy8gRm9yIFZlcmNlbC9SZW5kZXJcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBmb3JtRGF0YS5nZXQoXCJhZGRyZXNzXCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IGNpdHkgPSBmb3JtRGF0YS5nZXQoXCJjaXR5XCIpIGFzIHN0cmluZztcclxuICAgIGNvbnN0IHN0YXRlID0gZm9ybURhdGEuZ2V0KFwic3RhdGVcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGZvcm1EYXRhLmdldChcImNvbnRhY3RcIikgYXMgc3RyaW5nO1xyXG4gICAgY29uc3QgZW1haWxfaWQgPSBmb3JtRGF0YS5nZXQoXCJlbWFpbF9pZFwiKSBhcyBzdHJpbmc7XHJcbiAgICBjb25zdCBpbWFnZUZpbGUgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKSBhcyBGaWxlO1xyXG5cclxuICAgIGlmICghbmFtZSB8fCAhYWRkcmVzcyB8fCAhY2l0eSB8fCAhc3RhdGUgfHwgIWNvbnRhY3QgfHwgIWVtYWlsX2lkIHx8ICFpbWFnZUZpbGUpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICAgIHsgZXJyb3I6IFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIiB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOKchSBjaGVjayBpZiBlbnYgdmFycyBhcmUgbWlzc2luZ1xyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUgfHxcclxuICAgICAgICAhcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfS0VZIHx8XHJcbiAgICAgICAgIXByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX1NFQ1JFVCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogXCJDbG91ZGluYXJ5IGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgbm90IHNldFwiIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDUwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udmVydCBpbWFnZSB0byBidWZmZXIgZm9yIHVwbG9hZFxyXG4gICAgY29uc3QgYXJyYXlCdWZmZXIgPSBhd2FpdCBpbWFnZUZpbGUuYXJyYXlCdWZmZXIoKTtcclxuICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyKTtcclxuXHJcbiAgICAvLyBVcGxvYWQgdG8gQ2xvdWRpbmFyeVxyXG4gICAgbGV0IHVwbG9hZGVkSW1hZ2U7XHJcbiAgICB0cnkge1xyXG4gICAgICB1cGxvYWRlZEltYWdlID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0cmVhbSA9IGNsb3VkaW5hcnkudXBsb2FkZXIudXBsb2FkX3N0cmVhbShcclxuICAgICAgICAgIHsgZm9sZGVyOiBcInNjaG9vbEltYWdlc1wiIH0sXHJcbiAgICAgICAgICAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IpIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc3RyZWFtLmVuZChidWZmZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKHVwbG9hZEVycm9yOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkNsb3VkaW5hcnkgVXBsb2FkIEVycm9yOlwiLCB1cGxvYWRFcnJvcik7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiBgSW1hZ2UgdXBsb2FkIGZhaWxlZDogJHt1cGxvYWRFcnJvci5tZXNzYWdlIHx8IFwiVW5rbm93biBlcnJvclwifWAgfSxcclxuICAgICAgICB7IHN0YXR1czogNTAyIH0gLy8gQmFkIEdhdGV3YXkg4oCTIGV4dGVybmFsIHNlcnZpY2UgZmFpbGVkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2F2ZSB0byBEQlxyXG4gICAgY29uc3Qgc2Nob29sID0gYXdhaXQgcHJpc21hLnNjaG9vbC5jcmVhdGUoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBhZGRyZXNzLFxyXG4gICAgICAgIGNpdHksXHJcbiAgICAgICAgc3RhdGUsXHJcbiAgICAgICAgY29udGFjdCxcclxuICAgICAgICBlbWFpbF9pZCxcclxuICAgICAgICBpbWFnZTogKHVwbG9hZGVkSW1hZ2UgYXMgYW55KS5zZWN1cmVfdXJsLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHNjaG9vbCwgeyBzdGF0dXM6IDIwMSB9KTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIlNlcnZlciBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IGVycm9yOiBlcnJvci5tZXNzYWdlIHx8IFwiVW5leHBlY3RlZCBzZXJ2ZXIgZXJyb3JcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJwcmlzbWEiLCJjbG91ZGluYXJ5IiwiZHluYW1pYyIsIlBPU1QiLCJyZXEiLCJmb3JtRGF0YSIsIm5hbWUiLCJnZXQiLCJhZGRyZXNzIiwiY2l0eSIsInN0YXRlIiwiY29udGFjdCIsImVtYWlsX2lkIiwiaW1hZ2VGaWxlIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfQ0xPVURfTkFNRSIsIkNMT1VESU5BUllfQVBJX0tFWSIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImFycmF5QnVmZmVyIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsInVwbG9hZGVkSW1hZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN0cmVhbSIsInVwbG9hZGVyIiwidXBsb2FkX3N0cmVhbSIsImZvbGRlciIsInJlc3VsdCIsImVuZCIsInVwbG9hZEVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJzY2hvb2wiLCJjcmVhdGUiLCJkYXRhIiwiaW1hZ2UiLCJzZWN1cmVfdXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/schools/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/cloudinary.ts":
/*!*******************************!*\
  !*** ./src/lib/cloudinary.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"(rsc)/./node_modules/cloudinary/cloudinary.js\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n// lib/cloudinary.js\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Nsb3VkaW5hcnkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0JBQW9CO0FBQzBCO0FBRTlDQywwQ0FBVUEsQ0FBQ0MsTUFBTSxDQUFDO0lBQ2hCQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtJQUM3Q0MsU0FBU0gsUUFBUUMsR0FBRyxDQUFDRyxrQkFBa0I7SUFDdkNDLFlBQVlMLFFBQVFDLEdBQUcsQ0FBQ0sscUJBQXFCO0FBQy9DO0FBRUEsaUVBQWVULDBDQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2Nob29sLWRpcmVjdG9yeS8uL3NyYy9saWIvY2xvdWRpbmFyeS50cz9lMWZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9jbG91ZGluYXJ5LmpzXHJcbmltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xyXG5cclxuY2xvdWRpbmFyeS5jb25maWcoe1xyXG4gIGNsb3VkX25hbWU6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQ0xPVURfTkFNRSxcclxuICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgYXBpX3NlY3JldDogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9BUElfU0VDUkVULFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsb3VkaW5hcnk7XHJcbiJdLCJuYW1lcyI6WyJ2MiIsImNsb3VkaW5hcnkiLCJjb25maWciLCJjbG91ZF9uYW1lIiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfQ0xPVURfTkFNRSIsImFwaV9rZXkiLCJDTE9VRElOQVJZX0FQSV9LRVkiLCJhcGlfc2VjcmV0IiwiQ0xPVURJTkFSWV9BUElfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/cloudinary.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = global;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3ByaXNtYS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsa0JBQWtCQztBQUVqQixNQUFNQyxTQUNYRixnQkFBZ0JFLE1BQU0sSUFDdEIsSUFBSUgsd0RBQVlBLENBQUM7SUFDZkksS0FBSztRQUFDO0tBQVE7QUFDaEIsR0FBRztBQUVMLElBQUlDLElBQXFDLEVBQUVKLGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaG9vbC1kaXJlY3RvcnkvLi9zcmMvbGliL3ByaXNtYS50cz8wMWQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5cclxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsIGFzIHVua25vd24gYXMgeyBwcmlzbWE6IFByaXNtYUNsaWVudCB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByaXNtYSA9XHJcbiAgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSB8fFxyXG4gIG5ldyBQcmlzbWFDbGllbnQoe1xyXG4gICAgbG9nOiBbXCJxdWVyeVwiXSwgLy8gb3B0aW9uYWw6IGxvZ3MgcXVlcmllc1xyXG4gIH0pO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA9IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbCIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/core-js","vendor-chunks/cloudinary","vendor-chunks/q","vendor-chunks/cloudinary-core"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fschools%2Froute&page=%2Fapi%2Fschools%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fschools%2Froute.ts&appDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CLenovo%5CDownloads%5Cschool-directory&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();