import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EyeBtnService {

  public showEye = signal<boolean>(false);

  public toggleEye() {
    this.showEye.set(!this.showEye())
  }
}
