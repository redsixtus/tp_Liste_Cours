import { Component} from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  constructor(private popover: PopoverController, private alertController: AlertController) {}


  openMenu(myevent: MouseEvent): void {
    this.popover.create(
      {
        component: MenuComponent,
        showBackdrop: true,
        cssClass: 'my-menu-class',
        event: myevent,
        componentProps: {
          myprop : 'Home Menu Popover '
        }
      }
    ).then(
      (popoverElement: HTMLIonPopoverElement) => {
        popoverElement.present();
        popoverElement.onDidDismiss().then(
          (res: OverlayEventDetail<any>) =>
          {
            console.log(res);
          }
        );
      }
    );
  }

  async openAlert(){
    const monMessage ='le message de l\'alerte';
    const alert= await this.alertController.create({
      header : 'SUPER ERREUR',
      message : monMessage,
      buttons : ['OK'],
    }

    );
    await alert.present();
    await alert.onDidDismiss();
  }
}
