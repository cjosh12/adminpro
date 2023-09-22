import { Injectable, signal } from '@angular/core';
import { IconDefinition} from '@fortawesome/free-solid-svg-icons';
import { faFontAwesome } from '@fortawesome/free-regular-svg-icons';

import { Toast } from '../models';
import { AlertColor } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private timeout = signal<number>(14000);
  public isActive$ = signal<boolean>(false);
  public toastConfig$ = signal<Toast>({
    color: 'alert',
    message: '',
    icon: faFontAwesome,
  });

  show(color: AlertColor, message: string, icon: IconDefinition):void {
    const toast: Toast = {color, message, icon};
    this.toastConfig$.set(toast);
    this.isActive$.set(true);
    setTimeout(()=>{
      this.hide();
    }, this.timeout());
  }

  hide(): void{
    this.isActive$.set(false);
  }

}
