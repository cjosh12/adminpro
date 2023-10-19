import { Component, computed, effect, inject } from "@angular/core";
import { AuthService } from "./features";
import { Router } from "@angular/router";
import { Token } from "@angular/compiler";
import { tokenInterceptor } from "./core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: [],
})
export class AppComponent {
    private authService = inject(AuthService);
    private router = inject(Router);

    public finishedAuthCheck = computed<boolean>(() => {
        if (this.authService.authStatus() === 'checking') return false;

        return true;
    });
    public authStatusChangeEffect = effect(() => {
        switch (this.authService.authStatus()){
            case 'checking':
                return;

            case 'authenticated':

                return;

            case 'noAuthenticated':
                this.router.navigateByUrl('/');
                return;    
        }
    });
}