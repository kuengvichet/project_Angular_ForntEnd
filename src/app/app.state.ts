import { menuReducer } from "src/stores/menuStore/menu.reducers";
import { MenuState } from "src/stores/menuStore/menu.state";


export interface AppState {
    menu: MenuState;
}


export const appReducer = {
    menu: menuReducer
}











