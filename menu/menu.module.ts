import { NgModule } from "@angular/core";
import { menuReducer } from "src/stores/menuStore/menu.reducers";
import { MenuEffect } from "src/stores/menuStore/menu.effect";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";


@NgModule({
    imports: [
        EffectsModule.forFeature([MenuEffect])
    ]
})

export class MenuModule {}