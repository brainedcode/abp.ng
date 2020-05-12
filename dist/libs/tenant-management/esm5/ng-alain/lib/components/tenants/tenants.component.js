/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tenants/tenants.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TenantManagementService, TenantsComponent as AbpTenantsComponent } from '@abp/ng.tenant-management';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngxs/store';
var TenantsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TenantsComponent, _super);
    function TenantsComponent(_confirmationService, _tenantService, _fb, _store) {
        var _this = _super.call(this, _confirmationService, _tenantService, _fb, _store) || this;
        _this._confirmationService = _confirmationService;
        _this._tenantService = _tenantService;
        _this._fb = _fb;
        _this._store = _store;
        return _this;
    }
    TenantsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-alain-tenants',
                    template: "<page-header [title]=\"'AbpTenantManagement::Tenants' | abpLocalization\"></page-header>\r\n<nz-card [nzBordered]=\"false\">\r\n  <form nz-form [nzLayout]=\"'inline'\" class=\"search__form\">\r\n      <div nz-row [nzGutter]=\"{ xs: 8, sm: 8, md: 8, lg: 24, xl: 48, xxl: 48 }\">\r\n        <div nz-col nzMd=\"8\" nzSm=\"24\">\r\n          <nz-form-item>\r\n            <nz-form-label nzFor=\"no\">{{'AbpIdentity::PagerSearch' | abpLocalization }}</nz-form-label>\r\n            <nz-form-control>\r\n              <input nz-input type=\"search\" [placeholder]=\"'AbpUi::PagerSearch' | abpLocalization\"\r\n                (input.debounce)=\"onSearch($event.target.value)\" />\r\n            </nz-form-control>\r\n          </nz-form-item>\r\n        </div>\r\n      </div>\r\n    </form>\r\n<button nz-button [abpPermission]=\"'AbpTenantManagement.Tenants.Create'\" (click)=\"addTenant()\" [nzType]=\"'primary'\">\r\n  <i nz-icon nzType=\"plus\"></i>\r\n  <span>{{ 'AbpTenantManagement::NewTenant' | abpLocalization }}</span>\r\n</button>\r\n<div class=\"my-md\"></div>\r\n<nz-table #basicTable [nzData]=\"data$ | async\" [nzPageSize]=\"pageQuery.maxResultCount\" [nzTotal]=\"totalCount$ | async\"\r\n  [nzLoading]=\"loading\" [nzFrontPagination]=\"false\" (nzPageIndexChange)=\"onPageChange($event)\">\r\n  <thead>\r\n    <tr>\r\n      <th>{{ 'AbpTenantManagement::DisplayName:TenantName' | abpLocalization }}</th>\r\n      <th>{{ 'AbpTenantManagement::Actions' | abpLocalization }}</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let data of basicTable.data\">\r\n      <td>{{ data.name }}</td>\r\n      <td>\r\n          <a nz-dropdown [nzDropdownMenu]=\"opMenu\">\r\n            {{ 'AbpTenantManagement::Actions' | abpLocalization }}\r\n            <i nz-icon nzType=\"down\"></i>\r\n          </a>\r\n          <nz-dropdown-menu #opMenu=\"nzDropdownMenu\">\r\n            <ul nz-menu>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Update'\" (click)=\"editTenant(data.id)\">\r\n                {{ 'AbpTenantManagement::Edit' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageConnectionStrings'\"\r\n                (click)=\"onEditConnectionString(data.id)\">\r\n                {{ 'AbpTenantManagement::Permission:ManageConnectionStrings' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.ManageFeatures'\"\r\n                (click)=\"providerKey = data.id; visibleFeatures = true\">\r\n                {{ 'AbpTenantManagement::Permission:ManageFeatures' | abpLocalization }}</li>\r\n              <li nz-menu-item *abpPermission=\"'AbpTenantManagement.Tenants.Delete'\"\r\n                (click)=\"delete(data.id, data.name)\">{{ 'AbpTenantManagement::Delete' | abpLocalization }}</li>\r\n            </ul>\r\n          </nz-dropdown-menu>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</nz-table>\r\n</nz-card>\r\n\r\n<nz-modal [(nzVisible)]=\"isModalVisible\" [nzTitle]=\"modalTitle\" [nzContent]=\"modalContent\" [nzFooter]=\"modalFooter\"\r\n(nzOnCancel)=\"isModalVisible=false\">\r\n<ng-template #modalTitle>\r\n  {{ selectedModalContent.title | abpLocalization }}\r\n</ng-template>\r\n\r\n<ng-template #modalContent>\r\n  <ng-container *ngTemplateOutlet=\"selectedModalContent?.template\"></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #modalFooter>\r\n  <button nz-button nzType=\"default\" (click)=\"isModalVisible=false\">\r\n    {{ 'AbpTenantManagement::Cancel' | abpLocalization }}\r\n  </button>\r\n  <button nz-button nzType=\"primary\" (click)=\"save()\"  [nzLoading]=\"loading\">\r\n    {{\r\n    'AbpIdentity::Save' | abpLocalization\r\n    }}\r\n  </button>\r\n</ng-template>\r\n</nz-modal>\r\n\r\n\r\n\r\n<ng-template #tenantModalTemplate>\r\n<form nz-form [formGroup]=\"tenantForm\" (ngSubmit)=\"save()\" [nzLayout]=\"'vertical'\">\r\n  <nz-form-item>\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-name\">\r\n      {{ 'AbpTenantManagement::TenantName' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"name\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminEmailAddress\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminEmailAddress\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminEmailAddress' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminEmailAddress\" type=\"email\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n\r\n  <nz-form-item *ngIf=\"tenantForm.controls.adminPassword\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"role-adminPassword\">\r\n      {{ 'AbpTenantManagement::DisplayName:AdminPassword' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"adminPassword\" type=\"password\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-template #connectionStringModalTemplate>\r\n<form nz-form [nzLayout]=\"'vertical'\" [formGroup]=\"defaultConnectionStringForm\" (ngSubmit)=\"save()\">\r\n  <nz-form-item>\r\n    <nz-form-control [nzSpan]=\"14\" [nzOffset]=\"6\">\r\n      <label nz-checkbox formControlName=\"useSharedDatabase\">\r\n        <span>\r\n          {{\r\n                'AbpTenantManagement::DisplayName:UseSharedDatabase' | abpLocalization\r\n          }}\r\n        </span>\r\n      </label>\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n  <nz-form-item *ngIf=\"!useSharedDatabase\">\r\n    <nz-form-label [nzSm]=\"24\" [nzXs]=\"24\" nzRequired nzFor=\"defaultConnectionString\">\r\n      {{ 'AbpTenantManagement::DisplayName:DefaultConnectionString' | abpLocalization }}</nz-form-label>\r\n    <nz-form-control [nzSm]=\"24\" [nzXs]=\"24\">\r\n      <input nz-input formControlName=\"defaultConnectionString\" id=\"defaultConnectionString\" />\r\n    </nz-form-control>\r\n  </nz-form-item>\r\n</form>\r\n</ng-template>\r\n\r\n<ng-alain-feature-management [(visible)]=\"visibleFeatures\" providerName=\"T\" [providerKey]=\"providerKey\">\r\n</ng-alain-feature-management>"
                }] }
    ];
    /** @nocollapse */
    TenantsComponent.ctorParameters = function () { return [
        { type: ConfirmationService },
        { type: TenantManagementService },
        { type: FormBuilder },
        { type: Store }
    ]; };
    return TenantsComponent;
}(AbpTenantsComponent));
export { TenantsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._confirmationService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._tenantService;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._fb;
    /**
     * @type {?}
     * @private
     */
    TenantsComponent.prototype._store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVuYW50cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvdGVuYW50LW1hbmFnZW1lbnQvbmctYWxhaW4vIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy90ZW5hbnRzL3RlbmFudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxnQkFBZ0IsSUFBSSxtQkFBbUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDO0lBSXNDLDRDQUFtQjtJQUNyRCwwQkFDWSxvQkFBeUMsRUFDekMsY0FBdUMsRUFDdkMsR0FBZ0IsRUFDaEIsTUFBYTtRQUp6QixZQU1JLGtCQUFNLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQzNEO1FBTlcsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUN6QyxvQkFBYyxHQUFkLGNBQWMsQ0FBeUI7UUFDdkMsU0FBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixZQUFNLEdBQU4sTUFBTSxDQUFPOztJQUd6QixDQUFDOztnQkFaSixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsK3RNQUF1QztpQkFDeEM7Ozs7Z0JBUFEsbUJBQW1CO2dCQURuQix1QkFBdUI7Z0JBR3ZCLFdBQVc7Z0JBQ1gsS0FBSzs7SUFjZCx1QkFBQztDQUFBLEFBYkQsQ0FJc0MsbUJBQW1CLEdBU3hEO1NBVFksZ0JBQWdCOzs7Ozs7SUFFckIsZ0RBQWlEOzs7OztJQUNqRCwwQ0FBK0M7Ozs7O0lBQy9DLCtCQUF3Qjs7Ozs7SUFDeEIsa0NBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVuYW50TWFuYWdlbWVudFNlcnZpY2UsIFRlbmFudHNDb21wb25lbnQgYXMgQWJwVGVuYW50c0NvbXBvbmVudCB9IGZyb20gJ0BhYnAvbmcudGVuYW50LW1hbmFnZW1lbnQnO1xyXG5pbXBvcnQgeyBDb25maXJtYXRpb25TZXJ2aWNlIH0gZnJvbSAnQGFicC9uZy50aGVtZS5zaGFyZWQnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5neHMvc3RvcmUnO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25nLWFsYWluLXRlbmFudHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZW5hbnRzLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlbmFudHNDb21wb25lbnQgZXh0ZW5kcyBBYnBUZW5hbnRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2NvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfdGVuYW50U2VydmljZTogVGVuYW50TWFuYWdlbWVudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX3N0b3JlOiBTdG9yZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoX2NvbmZpcm1hdGlvblNlcnZpY2UsIF90ZW5hbnRTZXJ2aWNlLCBfZmIsIF9zdG9yZSk7XHJcbiAgICB9XHJcbn1cclxuIl19