"use strict";
(self["webpackChunkmystore_6_3"] = self["webpackChunkmystore_6_3"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/storefront */ 4373);
var _class;


class AppComponent {
  constructor() {
    this.title = 'mystore-6.3';
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)();
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cx-storefront");
    }
  },
  dependencies: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_1__.StorefrontComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @spartacus/storefront */ 4373);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _spartacus_spartacus_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spartacus/spartacus.module */ 5955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;










class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreModule.forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsModule.forRoot([]), _spartacus_spartacus_module__WEBPACK_IMPORTED_MODULE_1__.SpartacusModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_6__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__.EffectsRootModule, _spartacus_spartacus_module__WEBPACK_IMPORTED_MODULE_1__.SpartacusModule]
  });
})();

/***/ }),

/***/ 9747:
/*!**************************************************************!*\
  !*** ./src/app/spartacus/features/asm/asm-feature.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsmFeatureModule": () => (/* binding */ AsmFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_asm_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/asm/assets */ 809);
/* harmony import */ var _spartacus_asm_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/asm/root */ 5224);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class AsmFeatureModule {}
_class = AsmFeatureModule;
_class.ɵfac = function AsmFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_asm_root__WEBPACK_IMPORTED_MODULE_2__.ASM_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_asm_fesm2020_spartacus-asm_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/asm */ 9933)).then(m => m.AsmModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_asm_assets__WEBPACK_IMPORTED_MODULE_3__.asmTranslations,
      chunks: _spartacus_asm_assets__WEBPACK_IMPORTED_MODULE_3__.asmTranslationChunksConfig
    }
  })],
  imports: [_spartacus_asm_root__WEBPACK_IMPORTED_MODULE_2__.AsmRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsmFeatureModule, {
    imports: [_spartacus_asm_root__WEBPACK_IMPORTED_MODULE_2__.AsmRootModule]
  });
})();

/***/ }),

/***/ 1371:
/*!*********************************************************************!*\
  !*** ./src/app/spartacus/features/cart/cart-base-feature.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartBaseFeatureModule": () => (/* binding */ CartBaseFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_cart_base_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/cart/base/assets */ 6349);
/* harmony import */ var _spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/cart/base/root */ 6061);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class CartBaseFeatureModule {}
_class = CartBaseFeatureModule;
_class.ɵfac = function CartBaseFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__.CART_BASE_FEATURE]: {
        module: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-core_mjs"), __webpack_require__.e("node_modules_spartacus_cart_fesm2020_spartacus-cart-base_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/base */ 8876)).then(m => m.CartBaseModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__.MINI_CART_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_cart_fesm2020_spartacus-cart-base-components-mini-cart_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/base/components/mini-cart */ 1991)).then(m => m.MiniCartModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_CART_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-components-add-to-cart_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/base/components/add-to-cart */ 4159)).then(m => m.AddToCartModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_cart_base_assets__WEBPACK_IMPORTED_MODULE_3__.cartBaseTranslations,
      chunks: _spartacus_cart_base_assets__WEBPACK_IMPORTED_MODULE_3__.cartBaseTranslationChunksConfig
    }
  })],
  imports: [_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__.CartBaseRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartBaseFeatureModule, {
    imports: [_spartacus_cart_base_root__WEBPACK_IMPORTED_MODULE_2__.CartBaseRootModule]
  });
})();

/***/ }),

/***/ 7279:
/*!******************************************************************************!*\
  !*** ./src/app/spartacus/features/cart/cart-import-export-feature.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartImportExportFeatureModule": () => (/* binding */ CartImportExportFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_cart_import_export_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/cart/import-export/assets */ 9566);
/* harmony import */ var _spartacus_cart_import_export_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/cart/import-export/root */ 1173);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class CartImportExportFeatureModule {}
_class = CartImportExportFeatureModule;
_class.ɵfac = function CartImportExportFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_import_export_root__WEBPACK_IMPORTED_MODULE_2__.CART_IMPORT_EXPORT_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_cart_fesm2020_spartacus-cart-import-export_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/import-export */ 6403)).then(m => m.ImportExportModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_cart_import_export_assets__WEBPACK_IMPORTED_MODULE_3__.importExportTranslations,
      chunks: _spartacus_cart_import_export_assets__WEBPACK_IMPORTED_MODULE_3__.importExportTranslationChunksConfig
    }
  })],
  imports: [_spartacus_cart_import_export_root__WEBPACK_IMPORTED_MODULE_2__.ImportExportRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartImportExportFeatureModule, {
    imports: [_spartacus_cart_import_export_root__WEBPACK_IMPORTED_MODULE_2__.ImportExportRootModule]
  });
})();

/***/ }),

/***/ 2580:
/*!****************************************************************************!*\
  !*** ./src/app/spartacus/features/cart/cart-quick-order-feature.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartQuickOrderFeatureModule": () => (/* binding */ CartQuickOrderFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_cart_quick_order_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/cart/quick-order/assets */ 1907);
/* harmony import */ var _spartacus_cart_quick_order_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/cart/quick-order/root */ 8199);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class CartQuickOrderFeatureModule {}
_class = CartQuickOrderFeatureModule;
_class.ɵfac = function CartQuickOrderFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_quick_order_root__WEBPACK_IMPORTED_MODULE_2__.CART_QUICK_ORDER_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_cart_fesm2020_spartacus-cart-quick-order_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/quick-order */ 4347)).then(m => m.QuickOrderModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_cart_quick_order_assets__WEBPACK_IMPORTED_MODULE_3__.quickOrderTranslations,
      chunks: _spartacus_cart_quick_order_assets__WEBPACK_IMPORTED_MODULE_3__.quickOrderTranslationChunksConfig
    }
  })],
  imports: [_spartacus_cart_quick_order_root__WEBPACK_IMPORTED_MODULE_2__.QuickOrderRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartQuickOrderFeatureModule, {
    imports: [_spartacus_cart_quick_order_root__WEBPACK_IMPORTED_MODULE_2__.QuickOrderRootModule]
  });
})();

/***/ }),

/***/ 148:
/*!***************************************************************************!*\
  !*** ./src/app/spartacus/features/cart/cart-saved-cart-feature.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartSavedCartFeatureModule": () => (/* binding */ CartSavedCartFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_cart_saved_cart_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/cart/saved-cart/assets */ 7350);
/* harmony import */ var _spartacus_cart_saved_cart_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/cart/saved-cart/root */ 509);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class CartSavedCartFeatureModule {}
_class = CartSavedCartFeatureModule;
_class.ɵfac = function CartSavedCartFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_saved_cart_root__WEBPACK_IMPORTED_MODULE_2__.CART_SAVED_CART_FEATURE]: {
        module: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-core_mjs"), __webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-components-add-to-cart_mjs"), __webpack_require__.e("node_modules_spartacus_cart_fesm2020_spartacus-cart-saved-cart_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/saved-cart */ 6027)).then(m => m.SavedCartModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_cart_saved_cart_assets__WEBPACK_IMPORTED_MODULE_3__.savedCartTranslations,
      chunks: _spartacus_cart_saved_cart_assets__WEBPACK_IMPORTED_MODULE_3__.savedCartTranslationChunksConfig
    }
  })],
  imports: [_spartacus_cart_saved_cart_root__WEBPACK_IMPORTED_MODULE_2__.SavedCartRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartSavedCartFeatureModule, {
    imports: [_spartacus_cart_saved_cart_root__WEBPACK_IMPORTED_MODULE_2__.SavedCartRootModule]
  });
})();

/***/ }),

/***/ 1640:
/*!*********************************************************************!*\
  !*** ./src/app/spartacus/features/cart/wish-list-feature.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WishListFeatureModule": () => (/* binding */ WishListFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_cart_wish_list_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/cart/wish-list/assets */ 3813);
/* harmony import */ var _spartacus_cart_wish_list_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/cart/wish-list/root */ 618);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class WishListFeatureModule {}
_class = WishListFeatureModule;
_class.ɵfac = function WishListFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_wish_list_root__WEBPACK_IMPORTED_MODULE_2__.CART_WISH_LIST_FEATURE]: {
        module: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-core_mjs"), __webpack_require__.e("node_modules_spartacus_cart_fesm2020_spartacus-cart-wish-list_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/wish-list */ 6199)).then(m => m.WishListModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_cart_wish_list_root__WEBPACK_IMPORTED_MODULE_2__.ADD_TO_WISHLIST_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_cart_fesm2020_spartacus-cart-wish-list-components-add-to-wishlist_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/cart/wish-list/components/add-to-wishlist */ 2490)).then(m => m.AddToWishListModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_cart_wish_list_assets__WEBPACK_IMPORTED_MODULE_3__.wishListTranslations,
      chunks: _spartacus_cart_wish_list_assets__WEBPACK_IMPORTED_MODULE_3__.wishListTranslationChunksConfig
    }
  })],
  imports: [_spartacus_cart_wish_list_root__WEBPACK_IMPORTED_MODULE_2__.WishListRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WishListFeatureModule, {
    imports: [_spartacus_cart_wish_list_root__WEBPACK_IMPORTED_MODULE_2__.WishListRootModule]
  });
})();

/***/ }),

/***/ 2349:
/*!************************************************************************!*\
  !*** ./src/app/spartacus/features/checkout/checkout-feature.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutFeatureModule": () => (/* binding */ CheckoutFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_checkout_base_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/checkout/base/assets */ 6309);
/* harmony import */ var _spartacus_checkout_base_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/checkout/base/root */ 7846);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class CheckoutFeatureModule {}
_class = CheckoutFeatureModule;
_class.ɵfac = function CheckoutFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_checkout_base_root__WEBPACK_IMPORTED_MODULE_2__.CHECKOUT_FEATURE]: {
        module: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-core_mjs"), __webpack_require__.e("node_modules_spartacus_checkout_fesm2020_spartacus-checkout-base_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/checkout/base */ 9134)).then(m => m.CheckoutModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_checkout_base_assets__WEBPACK_IMPORTED_MODULE_3__.checkoutTranslations,
      chunks: _spartacus_checkout_base_assets__WEBPACK_IMPORTED_MODULE_3__.checkoutTranslationChunksConfig
    }
  })],
  imports: [_spartacus_checkout_base_root__WEBPACK_IMPORTED_MODULE_2__.CheckoutRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CheckoutFeatureModule, {
    imports: [_spartacus_checkout_base_root__WEBPACK_IMPORTED_MODULE_2__.CheckoutRootModule]
  });
})();

/***/ }),

/***/ 9411:
/*!******************************************************************!*\
  !*** ./src/app/spartacus/features/order/order-feature.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderFeatureModule": () => (/* binding */ OrderFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_order_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/order/assets */ 3178);
/* harmony import */ var _spartacus_order_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/order/root */ 9132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class OrderFeatureModule {}
_class = OrderFeatureModule;
_class.ɵfac = function OrderFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_order_root__WEBPACK_IMPORTED_MODULE_2__.ORDER_FEATURE]: {
        module: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_spartacus_cart_fesm2020_spartacus-cart-base-components-add-to-cart_mjs"), __webpack_require__.e("node_modules_spartacus_order_fesm2020_spartacus-order_mjs")]).then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/order */ 783)).then(m => m.OrderModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_order_assets__WEBPACK_IMPORTED_MODULE_3__.orderTranslations,
      chunks: _spartacus_order_assets__WEBPACK_IMPORTED_MODULE_3__.orderTranslationChunksConfig
    }
  })],
  imports: [_spartacus_order_root__WEBPACK_IMPORTED_MODULE_2__.OrderRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OrderFeatureModule, {
    imports: [_spartacus_order_root__WEBPACK_IMPORTED_MODULE_2__.OrderRootModule]
  });
})();

/***/ }),

/***/ 9903:
/*!*********************************************************************************!*\
  !*** ./src/app/spartacus/features/product/product-image-zoom-feature.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductImageZoomFeatureModule": () => (/* binding */ ProductImageZoomFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_product_image_zoom_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/product/image-zoom/assets */ 4943);
/* harmony import */ var _spartacus_product_image_zoom_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/product/image-zoom/root */ 2279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class ProductImageZoomFeatureModule {}
_class = ProductImageZoomFeatureModule;
_class.ɵfac = function ProductImageZoomFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_product_image_zoom_root__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_IMAGE_ZOOM_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_product_fesm2020_spartacus-product-image-zoom_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/product/image-zoom */ 3561)).then(m => m.ProductImageZoomModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_product_image_zoom_assets__WEBPACK_IMPORTED_MODULE_3__.productImageZoomTranslations,
      chunks: _spartacus_product_image_zoom_assets__WEBPACK_IMPORTED_MODULE_3__.productImageZoomTranslationChunksConfig
    }
  })],
  imports: [_spartacus_product_image_zoom_root__WEBPACK_IMPORTED_MODULE_2__.ProductImageZoomRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductImageZoomFeatureModule, {
    imports: [_spartacus_product_image_zoom_root__WEBPACK_IMPORTED_MODULE_2__.ProductImageZoomRootModule]
  });
})();

/***/ }),

/***/ 1009:
/*!*******************************************************************************!*\
  !*** ./src/app/spartacus/features/product/product-variants-feature.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductVariantsFeatureModule": () => (/* binding */ ProductVariantsFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_product_variants_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/product/variants/assets */ 4362);
/* harmony import */ var _spartacus_product_variants_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/product/variants/root */ 3889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class ProductVariantsFeatureModule {}
_class = ProductVariantsFeatureModule;
_class.ɵfac = function ProductVariantsFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_product_variants_root__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_VARIANTS_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_product_fesm2020_spartacus-product-variants_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/product/variants */ 2488)).then(m => m.ProductVariantsModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_product_variants_assets__WEBPACK_IMPORTED_MODULE_3__.productVariantsTranslations,
      chunks: _spartacus_product_variants_assets__WEBPACK_IMPORTED_MODULE_3__.productVariantsTranslationChunksConfig
    }
  })],
  imports: [_spartacus_product_variants_root__WEBPACK_IMPORTED_MODULE_2__.ProductVariantsRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductVariantsFeatureModule, {
    imports: [_spartacus_product_variants_root__WEBPACK_IMPORTED_MODULE_2__.ProductVariantsRootModule]
  });
})();

/***/ }),

/***/ 4563:
/*!***************************************************************************!*\
  !*** ./src/app/spartacus/features/smartedit/smart-edit-feature.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SmartEditFeatureModule": () => (/* binding */ SmartEditFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_smartedit_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/smartedit/root */ 8014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _spartacus_smartedit_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/smartedit/core */ 5202);
var _class;




class SmartEditFeatureModule {
  constructor(smartEditService) {
    this.smartEditService = smartEditService;
    this.smartEditService.processCmsPage();
  }
}
_class = SmartEditFeatureModule;
_class.ɵfac = function SmartEditFeatureModule_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_spartacus_smartedit_core__WEBPACK_IMPORTED_MODULE_1__.SmartEditService));
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_2__.provideConfig)({
    featureModules: {
      [_spartacus_smartedit_root__WEBPACK_IMPORTED_MODULE_3__.SMART_EDIT_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_smartedit_fesm2020_spartacus-smartedit_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/smartedit */ 5731)).then(m => m.SmartEditModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_2__.provideConfig)({
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview',
      allowOrigin: 'localhost:9002'
    }
  })],
  imports: [_spartacus_smartedit_root__WEBPACK_IMPORTED_MODULE_3__.SmartEditRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SmartEditFeatureModule, {
    imports: [_spartacus_smartedit_root__WEBPACK_IMPORTED_MODULE_3__.SmartEditRootModule]
  });
})();

/***/ }),

/***/ 3367:
/*!*******************************************************************************!*\
  !*** ./src/app/spartacus/features/storefinder/store-finder-feature.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreFinderFeatureModule": () => (/* binding */ StoreFinderFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/storefinder/assets */ 3871);
/* harmony import */ var _spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/storefinder/root */ 9573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class StoreFinderFeatureModule {}
_class = StoreFinderFeatureModule;
_class.ɵfac = function StoreFinderFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_2__.STORE_FINDER_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_storefinder_fesm2020_spartacus-storefinder_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/storefinder */ 7466)).then(m => m.StoreFinderModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_3__.storeFinderTranslations,
      chunks: _spartacus_storefinder_assets__WEBPACK_IMPORTED_MODULE_3__.storeFinderTranslationChunksConfig
    }
  })],
  imports: [_spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_2__.StoreFinderRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StoreFinderFeatureModule, {
    imports: [_spartacus_storefinder_root__WEBPACK_IMPORTED_MODULE_2__.StoreFinderRootModule]
  });
})();

/***/ }),

/***/ 2389:
/*!*******************************************************************************!*\
  !*** ./src/app/spartacus/features/tracking/personalization-feature.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalizationFeatureModule": () => (/* binding */ PersonalizationFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_tracking_personalization_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/tracking/personalization/root */ 3000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;



class PersonalizationFeatureModule {}
_class = PersonalizationFeatureModule;
_class.ɵfac = function PersonalizationFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_tracking_personalization_root__WEBPACK_IMPORTED_MODULE_2__.PERSONALIZATION_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_tracking_fesm2020_spartacus-tracking-personalization_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/tracking/personalization */ 911)).then(m => m.PersonalizationModule)
      }
    }
  })],
  imports: [_spartacus_tracking_personalization_root__WEBPACK_IMPORTED_MODULE_2__.PersonalizationRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PersonalizationFeatureModule, {
    imports: [_spartacus_tracking_personalization_root__WEBPACK_IMPORTED_MODULE_2__.PersonalizationRootModule]
  });
})();

/***/ }),

/***/ 9890:
/*!****************************************************************!*\
  !*** ./src/app/spartacus/features/user/user-feature.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserFeatureModule": () => (/* binding */ UserFeatureModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_user_account_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/user/account/assets */ 5498);
/* harmony import */ var _spartacus_user_account_root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/user/account/root */ 1020);
/* harmony import */ var _spartacus_user_profile_assets__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @spartacus/user/profile/assets */ 3909);
/* harmony import */ var _spartacus_user_profile_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @spartacus/user/profile/root */ 8756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;






class UserFeatureModule {}
_class = UserFeatureModule;
_class.ɵfac = function UserFeatureModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_user_account_root__WEBPACK_IMPORTED_MODULE_2__.USER_ACCOUNT_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_user_fesm2020_spartacus-user-account_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/user/account */ 5229)).then(m => m.UserAccountModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_user_account_assets__WEBPACK_IMPORTED_MODULE_3__.userAccountTranslations,
      chunks: _spartacus_user_account_assets__WEBPACK_IMPORTED_MODULE_3__.userAccountTranslationChunksConfig
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    featureModules: {
      [_spartacus_user_profile_root__WEBPACK_IMPORTED_MODULE_4__.USER_PROFILE_FEATURE]: {
        module: () => __webpack_require__.e(/*! import() */ "node_modules_spartacus_user_fesm2020_spartacus-user-profile_mjs").then(__webpack_require__.bind(__webpack_require__, /*! @spartacus/user/profile */ 2092)).then(m => m.UserProfileModule)
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_user_profile_assets__WEBPACK_IMPORTED_MODULE_5__.userProfileTranslations,
      chunks: _spartacus_user_profile_assets__WEBPACK_IMPORTED_MODULE_5__.userProfileTranslationChunksConfig
    }
  })],
  imports: [_spartacus_user_account_root__WEBPACK_IMPORTED_MODULE_2__.UserAccountRootModule, _spartacus_user_profile_root__WEBPACK_IMPORTED_MODULE_4__.UserProfileRootModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserFeatureModule, {
    imports: [_spartacus_user_account_root__WEBPACK_IMPORTED_MODULE_2__.UserAccountRootModule, _spartacus_user_profile_root__WEBPACK_IMPORTED_MODULE_4__.UserProfileRootModule]
  });
})();

/***/ }),

/***/ 3568:
/*!*************************************************************!*\
  !*** ./src/app/spartacus/spartacus-configuration.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpartacusConfigurationModule": () => (/* binding */ SpartacusConfigurationModule)
/* harmony export */ });
/* harmony import */ var _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/assets */ 6978);
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @spartacus/storefront */ 4373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class SpartacusConfigurationModule {}
_class = SpartacusConfigurationModule;
_class.ɵfac = function SpartacusConfigurationModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [(0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)(_spartacus_storefront__WEBPACK_IMPORTED_MODULE_2__.layoutConfig), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)(_spartacus_storefront__WEBPACK_IMPORTED_MODULE_2__.mediaConfig), ..._spartacus_storefront__WEBPACK_IMPORTED_MODULE_2__.defaultCmsContentProviders, (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    backend: {
      occ: {
        baseUrl: 'https://api.clwfyft1x1-csamer2021-p4-public.model-t.cc.commerce.ondemand.com'
      }
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    context: {}
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    i18n: {
      resources: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__.translations,
      chunks: _spartacus_assets__WEBPACK_IMPORTED_MODULE_3__.translationChunksConfig,
      fallbackLang: 'en'
    }
  }), (0,_spartacus_core__WEBPACK_IMPORTED_MODULE_1__.provideConfig)({
    features: {
      level: '6.3'
    }
  })]
});

/***/ }),

/***/ 3237:
/*!********************************************************!*\
  !*** ./src/app/spartacus/spartacus-features.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpartacusFeaturesModule": () => (/* binding */ SpartacusFeaturesModule)
/* harmony export */ });
/* harmony import */ var _spartacus_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @spartacus/core */ 6458);
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @spartacus/storefront */ 4373);
/* harmony import */ var _features_user_user_feature_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/user/user-feature.module */ 9890);
/* harmony import */ var _features_cart_cart_base_feature_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/cart/cart-base-feature.module */ 1371);
/* harmony import */ var _features_cart_cart_saved_cart_feature_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/cart/cart-saved-cart-feature.module */ 148);
/* harmony import */ var _features_cart_wish_list_feature_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/cart/wish-list-feature.module */ 1640);
/* harmony import */ var _features_cart_cart_quick_order_feature_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/cart/cart-quick-order-feature.module */ 2580);
/* harmony import */ var _features_cart_cart_import_export_feature_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/cart/cart-import-export-feature.module */ 7279);
/* harmony import */ var _features_order_order_feature_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./features/order/order-feature.module */ 9411);
/* harmony import */ var _features_checkout_checkout_feature_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/checkout/checkout-feature.module */ 2349);
/* harmony import */ var _features_tracking_personalization_feature_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/tracking/personalization-feature.module */ 2389);
/* harmony import */ var _features_storefinder_store_finder_feature_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/storefinder/store-finder-feature.module */ 3367);
/* harmony import */ var _features_smartedit_smart_edit_feature_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/smartedit/smart-edit-feature.module */ 4563);
/* harmony import */ var _features_product_product_variants_feature_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./features/product/product-variants-feature.module */ 1009);
/* harmony import */ var _features_product_product_image_zoom_feature_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/product/product-image-zoom-feature.module */ 9903);
/* harmony import */ var _features_asm_asm_feature_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/asm/asm-feature.module */ 9747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;


















class SpartacusFeaturesModule {}
_class = SpartacusFeaturesModule;
_class.ɵfac = function SpartacusFeaturesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_spartacus_core__WEBPACK_IMPORTED_MODULE_15__.AuthModule.forRoot(), _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LogoutModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LoginRouteModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.HamburgerMenuModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.SiteContextSelectorModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LinkModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BannerModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.CmsParagraphModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.TabParagraphContainerModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BannerCarouselModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.CategoryNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.FooterNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ScrollToTopModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PageTitleModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.VideoModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PDFModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.UserModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.UserOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AddressBookModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PaymentMethodsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NotificationPreferenceModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.MyInterestsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.StockNotificationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ConsentManagementModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.MyCouponsModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.AnonymousConsentsModule.forRoot(), _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AnonymousConsentsDialogModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AnonymousConsentManagementBannerModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ProductModule.forRoot(), _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ProductOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductDetailsPageModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductListingPageModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductListModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.SearchBoxModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductFacetNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductTabsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductCarouselModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductReferencesModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductImagesModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductSummaryModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductIntroModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.CostCenterOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NavigationEventModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.HomePageEventModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductPageEventModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ExternalRoutesModule.forRoot(), _features_user_user_feature_module__WEBPACK_IMPORTED_MODULE_0__.UserFeatureModule, _features_cart_cart_base_feature_module__WEBPACK_IMPORTED_MODULE_1__.CartBaseFeatureModule, _features_cart_cart_saved_cart_feature_module__WEBPACK_IMPORTED_MODULE_2__.CartSavedCartFeatureModule, _features_cart_wish_list_feature_module__WEBPACK_IMPORTED_MODULE_3__.WishListFeatureModule, _features_cart_cart_quick_order_feature_module__WEBPACK_IMPORTED_MODULE_4__.CartQuickOrderFeatureModule, _features_cart_cart_import_export_feature_module__WEBPACK_IMPORTED_MODULE_5__.CartImportExportFeatureModule, _features_order_order_feature_module__WEBPACK_IMPORTED_MODULE_6__.OrderFeatureModule, _features_checkout_checkout_feature_module__WEBPACK_IMPORTED_MODULE_7__.CheckoutFeatureModule, _features_tracking_personalization_feature_module__WEBPACK_IMPORTED_MODULE_8__.PersonalizationFeatureModule, _features_storefinder_store_finder_feature_module__WEBPACK_IMPORTED_MODULE_9__.StoreFinderFeatureModule, _features_smartedit_smart_edit_feature_module__WEBPACK_IMPORTED_MODULE_10__.SmartEditFeatureModule, _features_product_product_variants_feature_module__WEBPACK_IMPORTED_MODULE_11__.ProductVariantsFeatureModule, _features_product_product_image_zoom_feature_module__WEBPACK_IMPORTED_MODULE_12__.ProductImageZoomFeatureModule, _features_asm_asm_feature_module__WEBPACK_IMPORTED_MODULE_13__.AsmFeatureModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](SpartacusFeaturesModule, {
    imports: [_spartacus_core__WEBPACK_IMPORTED_MODULE_15__.AuthModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LogoutModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LoginRouteModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.HamburgerMenuModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.SiteContextSelectorModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.LinkModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BannerModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.CmsParagraphModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.TabParagraphContainerModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BannerCarouselModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.CategoryNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.FooterNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.BreadcrumbModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ScrollToTopModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PageTitleModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.VideoModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PDFModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.UserModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.UserOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AddressBookModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.PaymentMethodsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NotificationPreferenceModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.MyInterestsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.StockNotificationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ConsentManagementModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.MyCouponsModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.AnonymousConsentsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AnonymousConsentsDialogModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.AnonymousConsentManagementBannerModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ProductModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ProductOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductDetailsPageModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductListingPageModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductListModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.SearchBoxModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductFacetNavigationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductTabsModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductCarouselModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductReferencesModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductImagesModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductSummaryModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductIntroModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.CostCenterOccModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.NavigationEventModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.HomePageEventModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_16__.ProductPageEventModule, _spartacus_core__WEBPACK_IMPORTED_MODULE_15__.ExternalRoutesModule, _features_user_user_feature_module__WEBPACK_IMPORTED_MODULE_0__.UserFeatureModule, _features_cart_cart_base_feature_module__WEBPACK_IMPORTED_MODULE_1__.CartBaseFeatureModule, _features_cart_cart_saved_cart_feature_module__WEBPACK_IMPORTED_MODULE_2__.CartSavedCartFeatureModule, _features_cart_wish_list_feature_module__WEBPACK_IMPORTED_MODULE_3__.WishListFeatureModule, _features_cart_cart_quick_order_feature_module__WEBPACK_IMPORTED_MODULE_4__.CartQuickOrderFeatureModule, _features_cart_cart_import_export_feature_module__WEBPACK_IMPORTED_MODULE_5__.CartImportExportFeatureModule, _features_order_order_feature_module__WEBPACK_IMPORTED_MODULE_6__.OrderFeatureModule, _features_checkout_checkout_feature_module__WEBPACK_IMPORTED_MODULE_7__.CheckoutFeatureModule, _features_tracking_personalization_feature_module__WEBPACK_IMPORTED_MODULE_8__.PersonalizationFeatureModule, _features_storefinder_store_finder_feature_module__WEBPACK_IMPORTED_MODULE_9__.StoreFinderFeatureModule, _features_smartedit_smart_edit_feature_module__WEBPACK_IMPORTED_MODULE_10__.SmartEditFeatureModule, _features_product_product_variants_feature_module__WEBPACK_IMPORTED_MODULE_11__.ProductVariantsFeatureModule, _features_product_product_image_zoom_feature_module__WEBPACK_IMPORTED_MODULE_12__.ProductImageZoomFeatureModule, _features_asm_asm_feature_module__WEBPACK_IMPORTED_MODULE_13__.AsmFeatureModule]
  });
})();

/***/ }),

/***/ 5955:
/*!***********************************************!*\
  !*** ./src/app/spartacus/spartacus.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpartacusModule": () => (/* binding */ SpartacusModule)
/* harmony export */ });
/* harmony import */ var _spartacus_storefront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @spartacus/storefront */ 4373);
/* harmony import */ var _spartacus_configuration_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spartacus-configuration.module */ 3568);
/* harmony import */ var _spartacus_features_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spartacus-features.module */ 3237);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
var _class;




class SpartacusModule {}
_class = SpartacusModule;
_class.ɵfac = function SpartacusModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_spartacus_features_module__WEBPACK_IMPORTED_MODULE_1__.SpartacusFeaturesModule, _spartacus_configuration_module__WEBPACK_IMPORTED_MODULE_0__.SpartacusConfigurationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_3__.BaseStorefrontModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_3__.BaseStorefrontModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SpartacusModule, {
    imports: [_spartacus_features_module__WEBPACK_IMPORTED_MODULE_1__.SpartacusFeaturesModule, _spartacus_configuration_module__WEBPACK_IMPORTED_MODULE_0__.SpartacusConfigurationModule, _spartacus_storefront__WEBPACK_IMPORTED_MODULE_3__.BaseStorefrontModule],
    exports: [_spartacus_storefront__WEBPACK_IMPORTED_MODULE_3__.BaseStorefrontModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map