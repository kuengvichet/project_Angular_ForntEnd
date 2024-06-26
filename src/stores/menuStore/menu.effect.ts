import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { EMPTY, map, mergeMap, withLatestFrom } from 'rxjs';
import { getMenuDataSuccess, getMenuData } from './menu.actions';


@Injectable()
export class MenuEffect {
    constructor(
        private actions$: Actions,
        private store: Store 
    ){}
}