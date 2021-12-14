import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { Component, OnInit } from "@angular/core";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
@Component({
  selector: "app-card-ativo",
  templateUrl: "./card-ativo.component.html",
  styleUrls: ["./card-ativo.component.css"],
})
export class CardAtivoComponent implements OnInit {
  modalRef: any;
  
  constructor(private modalService: MdbModalService) {
  }
  
 estado: String = "Ativo"  

  ngOnInit(): void {}

  /**
   * name
   */
  confirmacaoModal(estado: String){
  
  this.modalRef = this.modalService.open(ModalConfirmacaoComponent, )
  }
  mudaEstado(estado: string)
  {
     if (estado == "Ativo") {
      this.estado = "Inativo";
      return this.estado;
    } else {
      this.estado = "Ativo";
      return this.estado;
    }
  }
}
