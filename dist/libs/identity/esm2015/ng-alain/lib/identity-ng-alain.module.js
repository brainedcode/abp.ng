var IdentityNgAlainModule_1;
import { __decorate } from "tslib";
import { IdentityWrapModule } from '@fs/identity/wrap';
import { NgModule } from '@angular/core';
import { NgAlainBasicModule } from '@fs/ng-alain/basic';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';
import { LazyModuleFactory, CoreModule } from '@abp/ng.core';
import { PermissionManagementNgAlainModule } from '@fs/permission-management/ng-alain';
//import { SettingManagementNgAlainModule } from '@fs/setting-management/ng-alain';
//import { InitialService} from './services/initial.service'
let IdentityNgAlainModule = IdentityNgAlainModule_1 = class IdentityNgAlainModule {
    static forChild() {
        return {
            ngModule: IdentityNgAlainModule_1,
            providers: [],
        };
    }
    static forLazy() {
        return new LazyModuleFactory(IdentityNgAlainModule_1.forChild());
    }
};
IdentityNgAlainModule = IdentityNgAlainModule_1 = __decorate([
    NgModule({
        declarations: [UsersComponent, RolesComponent],
        entryComponents: [UsersComponent, RolesComponent],
        imports: [
            CoreModule,
            NgAlainBasicModule,
            PermissionManagementNgAlainModule,
            IdentityWrapModule,
        ]
    })
], IdentityNgAlainModule);
export { IdentityNgAlainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdHktbmctYWxhaW4ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9pZGVudGl0eS9uZy1hbGFpbi9zcmMvbGliL2lkZW50aXR5LW5nLWFsYWluLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQXdDLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3RCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN2RixtRkFBbUY7QUFDbkYsNERBQTREO0FBYTVELElBQWEscUJBQXFCLDZCQUFsQyxNQUFhLHFCQUFxQjtJQUNoQyxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXFCO1lBQy9CLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyx1QkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FDRixDQUFBO0FBWFkscUJBQXFCO0lBWGpDLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7UUFDOUMsZUFBZSxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQztRQUNqRCxPQUFPLEVBQUU7WUFDUCxVQUFVO1lBQ1Ysa0JBQWtCO1lBQ2xCLGlDQUFpQztZQUNqQyxrQkFBa0I7U0FFbkI7S0FDRixDQUFDO0dBQ1cscUJBQXFCLENBV2pDO1NBWFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpdHlXcmFwTW9kdWxlIH0gZnJvbSAnQGZzL2lkZW50aXR5L3dyYXAnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGVGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQWxhaW5CYXNpY01vZHVsZSB9IGZyb20gJ0Bmcy9uZy1hbGFpbi9iYXNpYyc7XHJcbmltcG9ydCB7IFVzZXJzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFJvbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3JvbGVzL3JvbGVzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IExhenlNb2R1bGVGYWN0b3J5LCBDb3JlTW9kdWxlIH0gZnJvbSAnQGFicC9uZy5jb3JlJztcclxuaW1wb3J0IHsgUGVybWlzc2lvbk1hbmFnZW1lbnROZ0FsYWluTW9kdWxlIH0gZnJvbSAnQGZzL3Blcm1pc3Npb24tbWFuYWdlbWVudC9uZy1hbGFpbic7XHJcbi8vaW1wb3J0IHsgU2V0dGluZ01hbmFnZW1lbnROZ0FsYWluTW9kdWxlIH0gZnJvbSAnQGZzL3NldHRpbmctbWFuYWdlbWVudC9uZy1hbGFpbic7XHJcbi8vaW1wb3J0IHsgSW5pdGlhbFNlcnZpY2V9IGZyb20gJy4vc2VydmljZXMvaW5pdGlhbC5zZXJ2aWNlJ1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtVc2Vyc0NvbXBvbmVudCwgUm9sZXNDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1VzZXJzQ29tcG9uZW50LCBSb2xlc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29yZU1vZHVsZSxcclxuICAgIE5nQWxhaW5CYXNpY01vZHVsZSxcclxuICAgIFBlcm1pc3Npb25NYW5hZ2VtZW50TmdBbGFpbk1vZHVsZSxcclxuICAgIElkZW50aXR5V3JhcE1vZHVsZSxcclxuICAgIC8vU2V0dGluZ01hbmFnZW1lbnROZ0FsYWluTW9kdWxlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSWRlbnRpdHlOZ0FsYWluTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJZGVudGl0eU5nQWxhaW5Nb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBJZGVudGl0eU5nQWxhaW5Nb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW10sXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZvckxhenkoKTogTmdNb2R1bGVGYWN0b3J5PElkZW50aXR5TmdBbGFpbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIG5ldyBMYXp5TW9kdWxlRmFjdG9yeShJZGVudGl0eU5nQWxhaW5Nb2R1bGUuZm9yQ2hpbGQoKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==