import { NgModule } from "@angular/core";
import { ProfileComponent } from "./profile.component";
import { CommonModule } from "@angular/common";
import { ProfileRoutingModule } from "./profile-routing.module";
import {  TitleCardComponent  } from "@shared/components"


@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        TitleCardComponent
    ]
})

export class ProfileModule {}