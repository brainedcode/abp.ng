/**
 * @fileoverview added by tsickle
 * Generated from: lib/handlers/error.handler.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RestOccurError } from '@abp/ng.core';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, RendererFactory2, } from '@angular/core';
import { Navigate, RouterDataResolved, RouterError, RouterState } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful, Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import snq from 'snq';
import { HttpErrorWrapperComponent } from '../components/http-error-wrapper/http-error-wrapper.component';
import { ConfirmationService } from '../services/confirmation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngxs/store";
import * as i2 from "../services/confirmation.service";
/** @type {?} */
export var DEFAULT_ERROR_MESSAGES = {
    defaultError: {
        title: 'An error has occurred!',
        details: 'Error detail not sent by server.',
    },
    defaultError401: {
        title: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.',
    },
    defaultError403: {
        title: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.',
    },
    defaultError404: {
        title: 'Resource not found!',
        details: 'The resource requested could not found on the server.',
    },
    defaultError500: {
        title: 'Internal server error',
        details: 'Error detail not sent by server.',
    },
};
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler(actions, store, confirmationService, appRef, cfRes, rendererFactory, injector, httpErrorConfig) {
        var _this = this;
        this.actions = actions;
        this.store = store;
        this.confirmationService = confirmationService;
        this.appRef = appRef;
        this.cfRes = cfRes;
        this.rendererFactory = rendererFactory;
        this.injector = injector;
        this.httpErrorConfig = httpErrorConfig;
        this.filterRestErrors = (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var status = _a.status;
            if (typeof status !== 'number')
                return false;
            return _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return code === status; })) < 0;
        });
        this.filterRouteErrors = (/**
         * @param {?} instance
         * @return {?}
         */
        function (instance) {
            return (snq((/**
             * @return {?}
             */
            function () { return instance.event.error.indexOf('Cannot match') > -1; })) &&
                _this.httpErrorConfig.skipHandledErrorCodes.findIndex((/**
                 * @param {?} code
                 * @return {?}
                 */
                function (code) { return code === 404; })) < 0);
        });
        this.listenToRestError();
        this.listenToRouterError();
        this.listenToRouterDataResolved();
    }
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterError), filter(this.filterRouteErrors))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.show404Page(); }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRouterDataResolved = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RouterDataResolved), filter((/**
         * @return {?}
         */
        function () { return !!_this.componentRef; })))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.listenToRestError = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.actions
            .pipe(ofActionSuccessful(RestOccurError), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), filter(this.filterRestErrors))
            .subscribe((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            /** @type {?} */
            var body = snq((/**
             * @return {?}
             */
            function () { return err.error.error; }), DEFAULT_ERROR_MESSAGES.defaultError.title);
            if (err instanceof HttpErrorResponse && err.headers.get('_AbpErrorFormat')) {
                /** @type {?} */
                var confirmation$ = _this.showError(null, null, body);
                if (err.status === 401) {
                    confirmation$.subscribe((/**
                     * @return {?}
                     */
                    function () {
                        _this.navigateToLogin();
                    }));
                }
            }
            else {
                switch (err.status) {
                    case 401:
                        _this.canCreateCustomError(401)
                            ? _this.show401Page()
                            : _this.showError({
                                key: 'AbpAccount::DefaultErrorMessage401',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
                            }, {
                                key: 'AbpAccount::DefaultErrorMessage401Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.details,
                            }).subscribe((/**
                             * @return {?}
                             */
                            function () { return _this.navigateToLogin(); }));
                        break;
                    case 403:
                        _this.createErrorComponent({
                            title: {
                                key: 'AbpAccount::DefaultErrorMessage403',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.title,
                            },
                            details: {
                                key: 'AbpAccount::DefaultErrorMessage403Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError403.details,
                            },
                            status: 403,
                        });
                        break;
                    case 404:
                        _this.canCreateCustomError(404)
                            ? _this.show404Page()
                            : _this.showError({
                                key: 'AbpAccount::DefaultErrorMessage404',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.details,
                            }, {
                                key: 'AbpAccount::DefaultErrorMessage404Detail',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
                            });
                        break;
                    case 500:
                        _this.createErrorComponent({
                            title: {
                                key: 'AbpAccount::500Message',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.title,
                            },
                            details: {
                                key: 'AbpAccount::InternalServerErrorMessage',
                                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError500.details,
                            },
                            status: 500,
                        });
                        break;
                    case 0:
                        if (err.statusText === 'Unknown Error') {
                            _this.createErrorComponent({
                                title: {
                                    key: 'AbpAccount::DefaultErrorMessage',
                                    defaultValue: DEFAULT_ERROR_MESSAGES.defaultError.title,
                                },
                                details: err.message,
                                isHomeShow: false,
                            });
                        }
                        break;
                    default:
                        _this.showError(DEFAULT_ERROR_MESSAGES.defaultError.details, DEFAULT_ERROR_MESSAGES.defaultError.title);
                        break;
                }
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show401Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::401Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError401.title,
            },
            status: 401,
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.show404Page = /**
     * @private
     * @return {?}
     */
    function () {
        this.createErrorComponent({
            title: {
                key: 'AbpAccount::404Message',
                defaultValue: DEFAULT_ERROR_MESSAGES.defaultError404.title,
            },
            status: 404,
        });
    };
    /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    ErrorHandler.prototype.showError = /**
     * @private
     * @param {?=} message
     * @param {?=} title
     * @param {?=} body
     * @return {?}
     */
    function (message, title, body) {
        if (body) {
            if (body.details) {
                message = body.details;
                title = body.message;
            }
            else if (body.message) {
                title = DEFAULT_ERROR_MESSAGES.defaultError.title;
                message = body.message;
            }
            else {
                message = body.message || DEFAULT_ERROR_MESSAGES.defaultError.title;
            }
        }
        return this.confirmationService.error(message, title, {
            hideCancelBtn: true,
            yesText: 'AbpAccount::Close',
        });
    };
    /**
     * @private
     * @return {?}
     */
    ErrorHandler.prototype.navigateToLogin = /**
     * @private
     * @return {?}
     */
    function () {
        this.store.dispatch(new Navigate(['/account/login'], null, {
            state: { redirectUrl: this.store.selectSnapshot(RouterState.url) },
        }));
    };
    /**
     * @param {?} instance
     * @return {?}
     */
    ErrorHandler.prototype.createErrorComponent = /**
     * @param {?} instance
     * @return {?}
     */
    function (instance) {
        var _this = this;
        /** @type {?} */
        var renderer = this.rendererFactory.createRenderer(null, null);
        /** @type {?} */
        var host = renderer.selectRootElement(document.body, true);
        this.componentRef = this.cfRes
            .resolveComponentFactory(HttpErrorWrapperComponent)
            .create(this.injector);
        for (var key in instance) {
            /* istanbul ignore else */
            if (this.componentRef.instance.hasOwnProperty(key)) {
                this.componentRef.instance[key] = instance[key];
            }
        }
        this.componentRef.instance.hideCloseIcon = this.httpErrorConfig.errorScreen.hideCloseIcon;
        if (this.canCreateCustomError((/** @type {?} */ (instance.status)))) {
            this.componentRef.instance.cfRes = this.cfRes;
            this.componentRef.instance.appRef = this.appRef;
            this.componentRef.instance.injector = this.injector;
            this.componentRef.instance.customComponent = this.httpErrorConfig.errorScreen.component;
        }
        this.appRef.attachView(this.componentRef.hostView);
        renderer.appendChild(host, ((/** @type {?} */ (this.componentRef.hostView))).rootNodes[0]);
        /** @type {?} */
        var destroy$ = new Subject();
        this.componentRef.instance.destroy$ = destroy$;
        destroy$.subscribe((/**
         * @return {?}
         */
        function () {
            _this.componentRef.destroy();
            _this.componentRef = null;
        }));
    };
    /**
     * @param {?} status
     * @return {?}
     */
    ErrorHandler.prototype.canCreateCustomError = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        var _this = this;
        return snq((/**
         * @return {?}
         */
        function () {
            return _this.httpErrorConfig.errorScreen.component &&
                _this.httpErrorConfig.errorScreen.forWhichErrors.indexOf(status) > -1;
        }));
    };
    ErrorHandler.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ErrorHandler.ctorParameters = function () { return [
        { type: Actions },
        { type: Store },
        { type: ConfirmationService },
        { type: ApplicationRef },
        { type: ComponentFactoryResolver },
        { type: RendererFactory2 },
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: ['HTTP_ERROR_CONFIG',] }] }
    ]; };
    /** @nocollapse */ ErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ErrorHandler_Factory() { return new ErrorHandler(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ConfirmationService), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject("HTTP_ERROR_CONFIG")); }, token: ErrorHandler, providedIn: "root" });
    return ErrorHandler;
}());
export { ErrorHandler };
if (false) {
    /** @type {?} */
    ErrorHandler.prototype.componentRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.filterRestErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.filterRouteErrors;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.actions;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.store;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.confirmationService;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.cfRes;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ErrorHandler.prototype.httpErrorConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BhYnAvbmcudGhlbWUuc2hhcmVkLyIsInNvdXJjZXMiOlsibGliL2hhbmRsZXJzL2Vycm9yLmhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQVUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBR3hCLE1BQU0sRUFDTixVQUFVLEVBQ1YsUUFBUSxFQUNSLGdCQUFnQixHQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM3RixPQUFPLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNqRSxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxHQUFHLE1BQU0sS0FBSyxDQUFDO0FBQ3RCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBRzFHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOzs7OztBQUV2RSxNQUFNLEtBQU8sc0JBQXNCLEdBQUc7SUFDcEMsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLHdCQUF3QjtRQUMvQixPQUFPLEVBQUUsa0NBQWtDO0tBQzVDO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsS0FBSyxFQUFFLDRCQUE0QjtRQUNuQyxPQUFPLEVBQUUsMkVBQTJFO0tBQ3JGO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsS0FBSyxFQUFFLHlCQUF5QjtRQUNoQyxPQUFP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LENBQUMsU0FBUzs7O1FBQUM7WUFDakIsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsMkNBQW9COzs7O0lBQXBCLFVBQXFCLE1BQTZCO1FBQWxELGlCQU1DO1FBTEMsT0FBTyxHQUFHOzs7UUFDUjtZQUNFLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUztnQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFEcEUsQ0FDb0UsRUFDdkUsQ0FBQztJQUNKLENBQUM7O2dCQWpPRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQWhDekIsT0FBTztnQkFBc0IsS0FBSztnQkFPbEMsbUJBQW1CO2dCQWpCMUIsY0FBYztnQkFDZCx3QkFBd0I7Z0JBTXhCLGdCQUFnQjtnQkFEaEIsUUFBUTtnREFnREwsTUFBTSxTQUFDLG1CQUFtQjs7O3VCQXpEL0I7Q0E0UkMsQUEvT0QsSUErT0M7U0E5T1ksWUFBWTs7O0lBQ3ZCLG9DQUFzRDs7Ozs7SUFpT3RELHdDQUlFOzs7OztJQUVGLHlDQUtFOzs7OztJQXpPQSwrQkFBd0I7Ozs7O0lBQ3hCLDZCQUFvQjs7Ozs7SUFDcEIsMkNBQWdEOzs7OztJQUNoRCw4QkFBOEI7Ozs7O0lBQzlCLDZCQUF1Qzs7Ozs7SUFDdkMsdUNBQXlDOzs7OztJQUN6QyxnQ0FBMEI7Ozs7O0lBQzFCLHVDQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZywgUmVzdE9jY3VyRXJyb3IgfSBmcm9tICdAYWJwL25nLmNvcmUnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHtcclxuICBBcHBsaWNhdGlvblJlZixcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbmplY3QsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbmplY3RvcixcclxuICBSZW5kZXJlckZhY3RvcnkyLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZSwgUm91dGVyRGF0YVJlc29sdmVkLCBSb3V0ZXJFcnJvciwgUm91dGVyU3RhdGUgfSBmcm9tICdAbmd4cy9yb3V0ZXItcGx1Z2luJztcclxuaW1wb3J0IHsgQWN0aW9ucywgb2ZBY3Rpb25TdWNjZXNzZnVsLCBTdG9yZSB9IGZyb20gJ0BuZ3hzL3N0b3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHNucSBmcm9tICdzbnEnO1xyXG5pbXBvcnQgeyBIdHRwRXJyb3JXcmFwcGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9odHRwLWVycm9yLXdyYXBwZXIvaHR0cC1lcnJvci13cmFwcGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEVycm9yU2NyZWVuRXJyb3JDb2RlcywgSHR0cEVycm9yQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbmZpcm1hdGlvbiB9IGZyb20gJy4uL21vZGVscy9jb25maXJtYXRpb24nO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29uZmlybWF0aW9uLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfRVJST1JfTUVTU0FHRVMgPSB7XHJcbiAgZGVmYXVsdEVycm9yOiB7XHJcbiAgICB0aXRsZTogJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCEnLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjQwMToge1xyXG4gICAgdGl0bGU6ICdZb3UgYXJlIG5vdCBhdXRoZW50aWNhdGVkIScsXHJcbiAgICBkZXRhaWxzOiAnWW91IHNob3VsZCBiZSBhdXRoZW50aWNhdGVkIChzaWduIGluKSBpbiBvcmRlciB0byBwZXJmb3JtIHRoaXMgb3BlcmF0aW9uLicsXHJcbiAgfSxcclxuICBkZWZhdWx0RXJyb3I0MDM6IHtcclxuICAgIHRpdGxlOiAnWW91IGFyZSBub3QgYXV0aG9yaXplZCEnLFxyXG4gICAgZGV0YWlsczogJ1lvdSBhcmUgbm90IGFsbG93ZWQgdG8gcGVyZm9ybSB0aGlzIG9wZXJhdGlvbi4nLFxyXG4gIH0sXHJcbiAgZGVmYXVsdEVycm9yNDA0OiB7XHJcbiAgICB0aXRsZTogJ1Jlc291cmNlIG5vdCBmb3VuZCEnLFxyXG4gICAgZGV0YWlsczogJ1RoZSByZXNvdXJjZSByZXF1ZXN0ZWQgY291bGQgbm90IGZvdW5kIG9uIHRoZSBzZXJ2ZXIuJyxcclxuICB9LFxyXG4gIGRlZmF1bHRFcnJvcjUwMDoge1xyXG4gICAgdGl0bGU6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLFxyXG4gICAgZGV0YWlsczogJ0Vycm9yIGRldGFpbCBub3Qgc2VudCBieSBzZXJ2ZXIuJyxcclxuICB9LFxyXG59O1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEVycm9ySGFuZGxlciB7XHJcbiAgY29tcG9uZW50UmVmOiBDb21wb25lbnRSZWY8SHR0cEVycm9yV3JhcHBlckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBhY3Rpb25zOiBBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmUsXHJcbiAgICBwcml2YXRlIGNvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXHJcbiAgICBwcml2YXRlIGNmUmVzOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgQEluamVjdCgnSFRUUF9FUlJPUl9DT05GSUcnKSBwcml2YXRlIGh0dHBFcnJvckNvbmZpZzogSHR0cEVycm9yQ29uZmlnLFxyXG4gICkge1xyXG4gICAgdGhpcy5saXN0ZW5Ub1Jlc3RFcnJvcigpO1xyXG4gICAgdGhpcy5saXN0ZW5Ub1JvdXRlckVycm9yKCk7XHJcbiAgICB0aGlzLmxpc3RlblRvUm91dGVyRGF0YVJlc29sdmVkKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvUm91dGVyRXJyb3IoKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUob2ZBY3Rpb25TdWNjZXNzZnVsKFJvdXRlckVycm9yKSwgZmlsdGVyKHRoaXMuZmlsdGVyUm91dGVFcnJvcnMpKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuc2hvdzQwNFBhZ2UoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxpc3RlblRvUm91dGVyRGF0YVJlc29sdmVkKCkge1xyXG4gICAgdGhpcy5hY3Rpb25zXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG9mQWN0aW9uU3VjY2Vzc2Z1bChSb3V0ZXJEYXRhUmVzb2x2ZWQpLFxyXG4gICAgICAgIGZpbHRlcigoKSA9PiAhIXRoaXMuY29tcG9uZW50UmVmKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudFJlZi5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRSZWYgPSBudWxsO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbGlzdGVuVG9SZXN0RXJyb3IoKSB7XHJcbiAgICB0aGlzLmFjdGlvbnNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgb2ZBY3Rpb25TdWNjZXNzZnVsKFJlc3RPY2N1ckVycm9yKSxcclxuICAgICAgICBtYXAoYWN0aW9uID0+IGFjdGlvbi5wYXlsb2FkKSxcclxuICAgICAgICBmaWx0ZXIodGhpcy5maWx0ZXJSZXN0RXJyb3JzKSxcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKGVyciA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHNucSgoKSA9PiBlcnIuZXJyb3IuZXJyb3IsIERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlICYmIGVyci5oZWFkZXJzLmdldCgnX0FicEVycm9yRm9ybWF0JykpIHtcclxuICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiQgPSB0aGlzLnNob3dFcnJvcihudWxsLCBudWxsLCBib2R5KTtcclxuXHJcbiAgICAgICAgICBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgIGNvbmZpcm1hdGlvbiQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm5hdmlnYXRlVG9Mb2dpbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgIHRoaXMuY2FuQ3JlYXRlQ3VzdG9tRXJyb3IoNDAxKVxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnNob3c0MDFQYWdlKClcclxuICAgICAgICAgICAgICAgIDogdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAxLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwMURldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDAxLmRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5uYXZpZ2F0ZVRvTG9naW4oKSk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwMycsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlNDAzRGV0YWlsJyxcclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwMy5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN0YXR1czogNDAzLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICB0aGlzLmNhbkNyZWF0ZUN1c3RvbUVycm9yKDQwNClcclxuICAgICAgICAgICAgICAgID8gdGhpcy5zaG93NDA0UGFnZSgpXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMuc2hvd0Vycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0FicEFjY291bnQ6OkRlZmF1bHRFcnJvck1lc3NhZ2U0MDQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6RGVmYXVsdEVycm9yTWVzc2FnZTQwNERldGFpbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yNDA0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NTAwTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I1MDAudGl0bGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczoge1xyXG4gICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpJbnRlcm5hbFNlcnZlckVycm9yTWVzc2FnZScsXHJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I1MDAuZGV0YWlscyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IDUwMCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgIGlmIChlcnIuc3RhdHVzVGV4dCA9PT0gJ1Vua25vd24gRXJyb3InKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVycm9yQ29tcG9uZW50KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdBYnBBY2NvdW50OjpEZWZhdWx0RXJyb3JNZXNzYWdlJyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU6IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBkZXRhaWxzOiBlcnIubWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgaXNIb21lU2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3IoXHJcbiAgICAgICAgICAgICAgICBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvci5kZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGUsXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93NDAxUGFnZSgpIHtcclxuICAgIHRoaXMuY3JlYXRlRXJyb3JDb21wb25lbnQoe1xyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIGtleTogJ0FicEFjY291bnQ6OjQwMU1lc3NhZ2UnLFxyXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3I0MDEudGl0bGUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXR1czogNDAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3c0MDRQYWdlKCkge1xyXG4gICAgdGhpcy5jcmVhdGVFcnJvckNvbXBvbmVudCh7XHJcbiAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAga2V5OiAnQWJwQWNjb3VudDo6NDA0TWVzc2FnZScsXHJcbiAgICAgICAgZGVmYXVsdFZhbHVlOiBERUZBVUxUX0VSUk9SX01FU1NBR0VTLmRlZmF1bHRFcnJvcjQwNC50aXRsZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdHVzOiA0MDQsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0Vycm9yKFxyXG4gICAgbWVzc2FnZT86IENvbmZpZy5Mb2NhbGl6YXRpb25QYXJhbSxcclxuICAgIHRpdGxlPzogQ29uZmlnLkxvY2FsaXphdGlvblBhcmFtLFxyXG4gICAgYm9keT86IGFueSxcclxuICApOiBPYnNlcnZhYmxlPENvbmZpcm1hdGlvbi5TdGF0dXM+IHtcclxuICAgIGlmIChib2R5KSB7XHJcbiAgICAgIGlmIChib2R5LmRldGFpbHMpIHtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5kZXRhaWxzO1xyXG4gICAgICAgIHRpdGxlID0gYm9keS5tZXNzYWdlO1xyXG4gICAgICB9IGVsc2UgaWYgKGJvZHkubWVzc2FnZSkge1xyXG4gICAgICAgIHRpdGxlID0gREVGQVVMVF9FUlJPUl9NRVNTQUdFUy5kZWZhdWx0RXJyb3IudGl0bGU7XHJcbiAgICAgICAgbWVzc2FnZSA9IGJvZHkubWVzc2FnZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXNzYWdlID0gYm9keS5tZXNzYWdlIHx8IERFRkFVTFRfRVJST1JfTUVTU0FHRVMuZGVmYXVsdEVycm9yLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlybWF0aW9uU2VydmljZS5lcnJvcihtZXNzYWdlLCB0aXRsZSwge1xyXG4gICAgICBoaWRlQ2FuY2VsQnRuOiB0cnVlLFxyXG4gICAgICB5ZXNUZXh0OiAnQWJwQWNjb3VudDo6Q2xvc2UnLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG5hdmlnYXRlVG9Mb2dpbigpIHtcclxuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIG5ldyBOYXZpZ2F0ZShbJy9hY2NvdW50L2xvZ2luJ10sIG51bGwsIHtcclxuICAgICAgICBzdGF0ZTogeyByZWRpcmVjdFVybDogdGhpcy5zdG9yZS5zZWxlY3RTbmFwc2hvdChSb3V0ZXJTdGF0ZS51cmwpIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVycm9yQ29tcG9uZW50KGluc3RhbmNlOiBQYXJ0aWFsPEh0dHBFcnJvcldyYXBwZXJDb21wb25lbnQ+KSB7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xyXG4gICAgY29uc3QgaG9zdCA9IHJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KGRvY3VtZW50LmJvZHksIHRydWUpO1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jZlJlc1xyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkoSHR0cEVycm9yV3JhcHBlckNvbXBvbmVudClcclxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbnN0YW5jZSkge1xyXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgICBpZiAodGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuaGlkZUNsb3NlSWNvbiA9IHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmhpZGVDbG9zZUljb247XHJcbiAgICBpZiAodGhpcy5jYW5DcmVhdGVDdXN0b21FcnJvcihpbnN0YW5jZS5zdGF0dXMgYXMgRXJyb3JTY3JlZW5FcnJvckNvZGVzKSkge1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5jZlJlcyA9IHRoaXMuY2ZSZXM7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmFwcFJlZiA9IHRoaXMuYXBwUmVmO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5pbmplY3RvciA9IHRoaXMuaW5qZWN0b3I7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmN1c3RvbUNvbXBvbmVudCA9IHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KHRoaXMuY29tcG9uZW50UmVmLmhvc3RWaWV3KTtcclxuICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKGhvc3QsICh0aGlzLmNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55Pikucm9vdE5vZGVzWzBdKTtcclxuXHJcbiAgICBjb25zdCBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5kZXN0cm95JCA9IGRlc3Ryb3kkO1xyXG4gICAgZGVzdHJveSQuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5jb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudFJlZiA9IG51bGw7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbkNyZWF0ZUN1c3RvbUVycm9yKHN0YXR1czogRXJyb3JTY3JlZW5FcnJvckNvZGVzKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gc25xKFxyXG4gICAgICAoKSA9PlxyXG4gICAgICAgIHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmNvbXBvbmVudCAmJlxyXG4gICAgICAgIHRoaXMuaHR0cEVycm9yQ29uZmlnLmVycm9yU2NyZWVuLmZvcldoaWNoRXJyb3JzLmluZGV4T2Yoc3RhdHVzKSA+IC0xLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZmlsdGVyUmVzdEVycm9ycyA9ICh7IHN0YXR1cyB9OiBIdHRwRXJyb3JSZXNwb25zZSk6IGJvb2xlYW4gPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0dXMgIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cEVycm9yQ29uZmlnLnNraXBIYW5kbGVkRXJyb3JDb2Rlcy5maW5kSW5kZXgoY29kZSA9PiBjb2RlID09PSBzdGF0dXMpIDwgMDtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGZpbHRlclJvdXRlRXJyb3JzID0gKGluc3RhbmNlOiBSb3V0ZXJFcnJvcjxhbnk+KTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBzbnEoKCkgPT4gaW5zdGFuY2UuZXZlbnQuZXJyb3IuaW5kZXhPZignQ2Fubm90IG1hdGNoJykgPiAtMSkgJiZcclxuICAgICAgdGhpcy5odHRwRXJyb3JDb25maWcuc2tpcEhhbmRsZWRFcnJvckNvZGVzLmZpbmRJbmRleChjb2RlID0+IGNvZGUgPT09IDQwNCkgPCAwXHJcbiAgICApO1xyXG4gIH07XHJcbn1cclxuIl19