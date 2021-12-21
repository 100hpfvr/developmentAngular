import { ANALYZE_FOR_ENTRY_COMPONENTS, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaModalComponent } from './alerta-modal/alerta-modal.component';
import { ConfirmacaoModalComponent } from './confirmacao-modal/confirmacao-modal.component';



@NgModule({
  declarations: [
    AlertaModalComponent,
    ConfirmacaoModalComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[ ConfirmacaoModalComponent]
})
export class SharedModule { }
