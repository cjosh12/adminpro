import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EyeBtnService {

  private _showEye = signal<boolean>(false);

  public showEye = computed(()=>this._showEye());

  public toggleEye() {
    this._showEye.set(!this._showEye())
  }
}
