import { Injectable, computed, signal } from '@angular/core';


import { Toast } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private _toastData = signal<Toast | null>(null);
  public toastData = computed (() => this._toastData());

  show(toast: Toast):void {
    this._toastData.set(toast);
  }

  hide(): void {
    this._toastData.set(null);
  }
}