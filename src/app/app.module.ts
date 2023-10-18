import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule, provideHttpClient, withInterceptors } from "@angular/common/http";
import { SpinnerComponent } from "./shared";
import { tokenInterceptor } from "./core";
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        HttpClientModule,
        SpinnerComponent,
    ],
    providers: [provideHttpClient(withInterceptors([tokenInterceptor]))],
    bootstrap: [AppComponent],
})
export class AppModule {}