import { CardAtivoComponent } from "./../card-ativo.component";
import { Component, OnInit } from "@angular/core";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
	selector: "app-modal-confirmacao",
	templateUrl: "./modal-confirmacao.component.html",
  styleUrls: ["./modal-confirmacao.component.css"],
  providers: [CardAtivoComponent ]
})
export class ModalConfirmacaoComponent implements OnInit {
	message: String = "";

	constructor(
		public modalRef: MdbModalRef<ModalConfirmacaoComponent>,
		public cardAtivo: CardAtivoComponent
  )
  {
    
    this.message = cardAtivo.estado

	}

	ngOnInit( ): void {}
}
