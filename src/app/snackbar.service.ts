import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private toastController: ToastController) {}

  async presentSnackbar(message: string, duration: number = 2000, position: 'top' | 'bottom' | 'middle' = 'bottom', color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
      color,
    });
//danger,warning for color
    toast.present();
  }
}