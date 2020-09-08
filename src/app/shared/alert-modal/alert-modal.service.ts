import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCESS = 'primary',
  WARNING = 'warning'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {


  constructor(private modalService: BsModalService) {}

  private showAlert(message: String, type: AlertTypes){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message;
  }

  showAlertDanger(message: String){
    this.showAlert(message, AlertTypes.DANGER);
  }

  showAlertSucess(message: String){
    this.showAlert(message, AlertTypes.SUCESS);
  }

  showAlertWarning(message: String){
    this.showAlert(message, AlertTypes.WARNING);
  }


}
