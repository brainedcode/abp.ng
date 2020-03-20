import { ABP } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Identity } from '../../models/identity';
export declare class RolesComponent implements OnInit {
    private confirmationService;
    private fb;
    private store;
    data$: Observable<Identity.RoleItem[]>;
    totalCount$: Observable<number>;
    form: FormGroup;
    selected: Identity.RoleItem;
    isModalVisible: boolean;
    visiblePermissions: boolean;
    providerKey: string;
    pageQuery: ABP.PageQueryParams;
    loading: boolean;
    modalBusy: boolean;
    sortOrder: string;
    sortKey: string;
    formRef: ElementRef<HTMLFormElement>;
    onVisiblePermissionChange: (event: any) => void;
    constructor(confirmationService: ConfirmationService, fb: FormBuilder, store: Store);
    ngOnInit(): void;
    buildForm(): void;
    openModal(): void;
    add(): void;
    edit(id: string): void;
    save(): void;
    delete(id: string, name: string): void;
    onPageChange(page: number): void;
    get(): void;
    onClickSaveButton(): void;
    openPermissionsModal(providerKey: string): void;
}
