/**
 * @fileoverview added by tsickle
 * Generated from: fs-ng-alain-basic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { NgAlainBasicModule, LayoutDefaultComponent, LayoutFullScreenComponent, LayoutPassportComponent } from './index';
export { HeaderFullScreenComponent as ɵj } from './lib/layout/default/header/components/fullscreen.component';
export { HeaderI18nComponent as ɵk } from './lib/layout/default/header/components/i18n.component';
export { HeaderIconComponent as ɵi } from './lib/layout/default/header/components/icon.component';
export { HeaderNotifyComponent as ɵg } from './lib/layout/default/header/components/notify.component';
export { HeaderSearchComponent as ɵf } from './lib/layout/default/header/components/search.component';
export { HeaderStorageComponent as ɵl } from './lib/layout/default/header/components/storage.component';
export { HeaderTaskComponent as ɵh } from './lib/layout/default/header/components/task.component';
export { HeaderUserComponent as ɵm } from './lib/layout/default/header/components/user.component';
export { HeaderComponent as ɵd } from './lib/layout/default/header/header.component';
export { SettingDrawerItemComponent as ɵc } from './lib/layout/default/setting-drawer/setting-drawer-item.component';
export { SettingDrawerComponent as ɵb } from './lib/layout/default/setting-drawer/setting-drawer.component';
export { SidebarComponent as ɵe } from './lib/layout/default/sidebar/sidebar.component';
export { LayoutModule as ɵa } from './lib/layout/layout.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnMtbmctYWxhaW4tYmFzaWMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnMvbmctYWxhaW4vYmFzaWMvIiwic291cmNlcyI6WyJmcy1uZy1hbGFpbi1iYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLCtHQUFjLFNBQVMsQ0FBQztBQUV4QixPQUFPLEVBQUMseUJBQXlCLElBQUksRUFBRSxFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDNUcsT0FBTyxFQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxtQkFBbUIsSUFBSSxFQUFFLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUMscUJBQXFCLElBQUksRUFBRSxFQUFDLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFDLHFCQUFxQixJQUFJLEVBQUUsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxzQkFBc0IsSUFBSSxFQUFFLEVBQUMsTUFBTSwwREFBMEQsQ0FBQztBQUN0RyxPQUFPLEVBQUMsbUJBQW1CLElBQUksRUFBRSxFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFDLG1CQUFtQixJQUFJLEVBQUUsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBQyxlQUFlLElBQUksRUFBRSxFQUFDLE1BQU0sOENBQThDLENBQUM7QUFDbkYsT0FBTyxFQUFDLDBCQUEwQixJQUFJLEVBQUUsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBQ25ILE9BQU8sRUFBQyxzQkFBc0IsSUFBSSxFQUFFLEVBQUMsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFDdEYsT0FBTyxFQUFDLFlBQVksSUFBSSxFQUFFLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCB7SGVhZGVyRnVsbFNjcmVlbkNvbXBvbmVudCBhcyDJtWp9IGZyb20gJy4vbGliL2xheW91dC9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2Z1bGxzY3JlZW4uY29tcG9uZW50JztcbmV4cG9ydCB7SGVhZGVySTE4bkNvbXBvbmVudCBhcyDJtWt9IGZyb20gJy4vbGliL2xheW91dC9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2kxOG4uY29tcG9uZW50JztcbmV4cG9ydCB7SGVhZGVySWNvbkNvbXBvbmVudCBhcyDJtWl9IGZyb20gJy4vbGliL2xheW91dC9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL2ljb24uY29tcG9uZW50JztcbmV4cG9ydCB7SGVhZGVyTm90aWZ5Q29tcG9uZW50IGFzIMm1Z30gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvbm90aWZ5LmNvbXBvbmVudCc7XG5leHBvcnQge0hlYWRlclNlYXJjaENvbXBvbmVudCBhcyDJtWZ9IGZyb20gJy4vbGliL2xheW91dC9kZWZhdWx0L2hlYWRlci9jb21wb25lbnRzL3NlYXJjaC5jb21wb25lbnQnO1xuZXhwb3J0IHtIZWFkZXJTdG9yYWdlQ29tcG9uZW50IGFzIMm1bH0gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvc3RvcmFnZS5jb21wb25lbnQnO1xuZXhwb3J0IHtIZWFkZXJUYXNrQ29tcG9uZW50IGFzIMm1aH0gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvdGFzay5jb21wb25lbnQnO1xuZXhwb3J0IHtIZWFkZXJVc2VyQ29tcG9uZW50IGFzIMm1bX0gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvaGVhZGVyL2NvbXBvbmVudHMvdXNlci5jb21wb25lbnQnO1xuZXhwb3J0IHtIZWFkZXJDb21wb25lbnQgYXMgybVkfSBmcm9tICcuL2xpYi9sYXlvdXQvZGVmYXVsdC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudCc7XG5leHBvcnQge1NldHRpbmdEcmF3ZXJJdGVtQ29tcG9uZW50IGFzIMm1Y30gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXItaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IHtTZXR0aW5nRHJhd2VyQ29tcG9uZW50IGFzIMm1Yn0gZnJvbSAnLi9saWIvbGF5b3V0L2RlZmF1bHQvc2V0dGluZy1kcmF3ZXIvc2V0dGluZy1kcmF3ZXIuY29tcG9uZW50JztcbmV4cG9ydCB7U2lkZWJhckNvbXBvbmVudCBhcyDJtWV9IGZyb20gJy4vbGliL2xheW91dC9kZWZhdWx0L3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xuZXhwb3J0IHtMYXlvdXRNb2R1bGUgYXMgybVhfSBmcm9tICcuL2xpYi9sYXlvdXQvbGF5b3V0Lm1vZHVsZSc7Il19