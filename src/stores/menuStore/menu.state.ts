import { Menu } from '../utils/menu.interface'

export interface MenuState {
    menu: Menu[]
}

export const menuItem : MenuState = {
     menu: [
    { menuName: "Home", menuLevel: 1, parentMenuID:"M00000", screenID:"/home", menuID:"MA0000"},
    { menuName: "User", menuLevel: 1, parentMenuID:"M00000", screenID:"/user", menuID:"MB0000"},
    { menuName: "Contact", menuLevel: 1, parentMenuID:"M00000", screenID:"/contact", menuID:"MC0000"},
    { menuName: "Online", menuLevel: 2, parentMenuID:"MC0000", screenID:"/onlinecontact", menuID:"MF0000"},
    { menuName: "UserList", menuLevel: 2, parentMenuID:"MB0000", screenID:"/userlist", menuID:"ME0000"},
    { menuName: "User Creation", menuLevel: 2, parentMenuID:"MB0000", screenID:"/usercreation", menuID:"MD0000"},
    { menuName: "Offline", menuLevel: 2, parentMenuID:"MC0000", screenID:"/offlinecontact", menuID:"MG0000"},
  ]
}







