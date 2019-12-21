import { NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Config } from '../models/config';
declare type ShouldReuseRoute = (future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot) => boolean;
export declare class LocalizationService {
    private store;
    private router;
    private ngZone;
    readonly currentLang: string;
    constructor(store: Store, router: Router, ngZone: NgZone, otherInstance: LocalizationService);
    setRouteReuse(reuse: ShouldReuseRoute): void;
    registerLocale(locale: string): Promise<void>;
    get(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): Observable<string>;
    instant(key: string | Config.LocalizationWithDefault, ...interpolateParams: string[]): string;
}
export {};
