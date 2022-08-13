"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var src_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/api.service */ 6194);
/* harmony import */ var src_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/shared.service */ 4255);









let HomePage = class HomePage {
  constructor(router, sharedService, api, storage) {
    this.router = router;
    this.sharedService = sharedService;
    this.api = api;
    this.storage = storage;
  }

  listProducts() {
    var _this = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.api.get('/produtos').toPromise().then(res => {
        _this.items = res;
      }, /*#__PURE__*/function () {
        var _ref = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          yield _this.sharedService.showToast('Erro ao listar produtos', 'danger');
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  getById() {
    var _this2 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.api.get(`/produtos/${_this2.idGet}`).toPromise().then( /*#__PURE__*/function () {
        var _ref2 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this2.productById = res[0];
          yield _this2.sharedService.showToast('Sucesso ao recuperar produto', 'success');
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref3 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          yield _this2.sharedService.showToast('Erro ao recuperar produto', 'danger');
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());
    })();
  }

  editProduct() {
    var _this3 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.api.get(`/produtos/${_this3.idEdit}`).toPromise().then( /*#__PURE__*/function () {
        var _ref4 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this3.productEdit = res[0];
          yield _this3.sharedService.showToast('Sucesso ao recuperar produto', 'success');
          yield _this3.listProducts();
        });

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref5 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          yield _this3.sharedService.showToast('Erro ao recuperar produto', 'danger');
        });

        return function (_x5) {
          return _ref5.apply(this, arguments);
        };
      }());
    })();
  }

  deleteProduct() {
    var _this4 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.api.delete(`/produtos/${_this4.id}`).toPromise().then( /*#__PURE__*/(0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        yield _this4.sharedService.showToast('Deletado com sucesso', 'success');
        yield _this4.listProducts();
      }), /*#__PURE__*/function () {
        var _ref7 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this4.sharedService.showToast('Falha ao deletar', 'danger');
        });

        return function (_x6) {
          return _ref7.apply(this, arguments);
        };
      }());
    })();
  }

  addProduct() {
    var _this5 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let product = {
        id: _this5.idPost,
        descricao: _this5.description,
        valor: _this5.value,
        marca: _this5.marca
      };
      yield _this5.api.post('/produtos', product).toPromise().then( /*#__PURE__*/function () {
        var _ref8 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          yield _this5.sharedService.showToast('Cadastrado com sucesso', 'success');
          yield _this5.listProducts();
        });

        return function (_x7) {
          return _ref8.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref9 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (error) {
          yield _this5.sharedService.showToast('Falha ao cadastrar', 'danger');
        });

        return function (_x8) {
          return _ref9.apply(this, arguments);
        };
      }());
    })();
  }

  editProductSave() {
    var _this6 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.api.put(`/produtos/${_this6.idEdit}`, _this6.productEdit).toPromise().then( /*#__PURE__*/function () {
        var _ref10 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
          _this6.productEdit = res[0];
          yield _this6.sharedService.showToast('Sucesso ao editar produto', 'success');
          yield _this6.listProducts();
        });

        return function (_x9) {
          return _ref10.apply(this, arguments);
        };
      }(), /*#__PURE__*/function () {
        var _ref11 = (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          yield _this6.sharedService.showToast('Erro ao editar produto', 'danger');
        });

        return function (_x10) {
          return _ref11.apply(this, arguments);
        };
      }());
    })();
  }

  sair() {
    var _this7 = this;

    return (0,D_P_s_NODE_JS_NODE_JS_AUTH_FRONT_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.storage.clear();

      _this7.router.navigateByUrl('/login');
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: src_services_shared_service__WEBPACK_IMPORTED_MODULE_5__.SharedService
}, {
  type: src_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".card {\n  height: 100px;\n  display: fkle;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFAlQzMlQjNzXFxOT0RFJTIwSlNcXE5PREUlMjBKUyUyMEFVVEglMjBGUk9OVFxcc3JjXFxhcHBcXHBhZ2VzXFxob21lXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgLy8gd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBma2xlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi5jYXJkIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgZGlzcGxheTogZmtsZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\">\n  <ion-button (click)=\"sair()\">SAIR</ion-button>\n\n  <ion-card (click)=\"listProducts()\">\n    <ion-card-header>\n      <ion-card-title>Listar produtos</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col *ngFor=\"let item of items\">\n          <ion-card>\n            <section>\n              <span>ID: {{ item.id }}</span>\n            </section>\n            <section>\n              <span>MARCA: {{ item.marca }}</span>\n            </section>\n            <section>\n              <span>VALOR: {{ item.valor }}</span>\n            </section>\n            <section>\n              <span>DESCRIÇÃO: {{ item.descricao }}</span>\n            </section>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Adicionar um produto</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Id</ion-label>\n            <ion-input [(ngModel)]=\"idPost\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Marca</ion-label>\n            <ion-input [(ngModel)]=\"marca\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Valor</ion-label>\n            <ion-input [(ngModel)]=\"value\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Descricao</ion-label>\n            <ion-input [(ngModel)]=\"description\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button\n        (click)=\"addProduct()\"\n        expand=\"block\"\n        fill=\"clear\"\n        shape=\"round\"\n      >\n        Adicionar produto\n      </ion-button>\n    </ion-card-content>\n\n    <ion-card *ngIf=\"product\">\n      <ion-label>{{ product.id }}</ion-label>\n      <ion-label>{{ product.marca }}</ion-label>\n      <ion-label>{{ product.valor }}</ion-label>\n      <ion-label>{{ product.descricao }}</ion-label>\n    </ion-card>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Get by id produto</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Digite o id do produto</ion-label>\n        <ion-input [(ngModel)]=\"idGet\"></ion-input>\n      </ion-item>\n      <ion-button (click)=\"getById()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Buscar produto\n      </ion-button>\n    </ion-card-content>\n\n    <ion-card *ngIf=\"productById\">\n      <section>\n        <ion-label>{{ productById.id }}</ion-label>\n      </section>\n      <section>\n        <ion-label>{{ productById.marca }}</ion-label>\n      </section>\n      <section>\n        <ion-label>{{ productById.valor }}</ion-label>\n      </section>\n      <section>\n        <ion-label>{{ productById.descricao }}</ion-label>\n      </section>\n    </ion-card>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Deletar um produto</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Digite o id do produto</ion-label>\n        <ion-input [(ngModel)]=\"id\"></ion-input>\n      </ion-item>\n      <ion-button\n        (click)=\"deleteProduct()\"\n        expand=\"block\"\n        fill=\"clear\"\n        shape=\"round\"\n      >\n        Deletar produto\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Alterar um produto</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Digite o id do produto</ion-label>\n        <ion-input [(ngModel)]=\"idEdit\"></ion-input>\n      </ion-item>\n      <ion-button\n        (click)=\"editProduct()\"\n        expand=\"block\"\n        fill=\"clear\"\n        shape=\"round\"\n      >\n        Buscar produto\n      </ion-button>\n    </ion-card-content>\n\n    <ion-card *ngIf=\"productEdit\">\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Id</ion-label>\n            <ion-input [(ngModel)]=\"productEdit.id\" disabled></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Marca</ion-label>\n            <ion-input [(ngModel)]=\"productEdit.marca\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Valor</ion-label>\n            <ion-input [(ngModel)]=\"productEdit.value\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"floating\">Descricao</ion-label>\n            <ion-input [(ngModel)]=\"productEdit.description\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-button\n        (click)=\"editProductSave()\"\n        expand=\"block\"\n        fill=\"clear\"\n        shape=\"round\"\n      >\n        Editar produto\n      </ion-button>\n    </ion-card>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map