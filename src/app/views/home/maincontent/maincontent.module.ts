import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../home.service';
import { ModalConfirmacaoComponent } from './card-ativo/modal-confirmacao/modal-confirmacao.component';



@NgModule({
  declarations: [
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [HomeService]
  
})
export class MaincontentModule { }
