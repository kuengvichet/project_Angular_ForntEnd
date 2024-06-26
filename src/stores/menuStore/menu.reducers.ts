import { createReducer, on } from "@ngrx/store"
import { menuItem } from "./menu.state"

// export const menuItem: Menu[] = [
//     { menuName: "Home", menuLevel: 1, parentMenuID:"M00000", screenID:"/home", menuID:"MA0000"},
//     { menuName: "User", menuLevel: 1, parentMenuID:"M00000", screenID:"/user", menuID:"MB0000"},
// ];
const _menuReducer = createReducer(menuItem)

export const menuReducer = (state:any, action:any) => {
    return _menuReducer(state, action)
}




















    