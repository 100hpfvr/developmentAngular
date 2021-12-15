import { CardAtivoComponent } from "./../card-ativo.component";
import { Component, OnInit, Input } from "@angular/core";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";


@Component({
	selector: "app-modal-confirmacao",
	templateUrl: "./modal-confirmacao.component.html",
	styleUrls: ["./modal-confirmacao.component.css"],
	providers: [CardAtivoComponent],
})
export class ModalConfirmacaoComponent implements OnInit {
	message: string = "";
	
	constructor(
		public modalRef: MdbModalRef<ModalConfirmacaoComponent>,
		public cardAtivo: CardAtivoComponent
	) {
		this.message = cardAtivo.estado;
		
	}
	mudaEstado(estado: string)
	{
	   if (this.message == "Ativo") {
	    this.message = "Inativo";
	    return this.message;
	  } else {
	    this.message = "Ativo";
	    return this.message;
	  }
	}

	
	

	ngOnInit(): void {}
}
