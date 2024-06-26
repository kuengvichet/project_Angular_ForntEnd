import { createAction, props } from '@ngrx/store'
import { Menu } from '../utils/menu.interface'

export const getMenuData = createAction('[MenuData], Get Data'); 

// export const getMenuDataSuccess =createAction('[MenuData], Get Success',
//     props<{menu:Menu[]}>()
// );
export const getMenuDataSuccess = createAction('GetMenuDataSuccess',
    props<Menu>()
);

