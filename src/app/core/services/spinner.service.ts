import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private _isLoading = signal(false);
  public isLoading = computed(() => this._isLoading());

  public show(){
    this._isLoading.set(true);
  }

  public hide(){
    this._isLoading.set(false);
  }
}
