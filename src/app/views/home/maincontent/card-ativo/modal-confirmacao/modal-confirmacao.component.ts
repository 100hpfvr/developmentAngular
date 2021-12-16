import { CardAtivoComponent } from "./../card-ativo.component";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MdbModalRef } from "mdb-angular-ui-kit/modal";

@Component({
	selector: "app-modal-confirmacao",
	templateUrl: "./modal-confirmacao.component.html",
	styleUrls: ["./modal-confirmacao.component.css"],
	providers: [CardAtivoComponent, EventEmitter],
})
export class ModalConfirmacaoComponent implements OnInit {
	@Output() message: string = "";
	listner = new EventEmitter();

	constructor(
		public modalRef: MdbModalRef<ModalConfirmacaoComponent>,
		public cardAtivo: CardAtivoComponent
	) {
		this.message = cardAtivo.estado;
	}
	mudaEstado(estado: string) {
		if (estado == "Ativo") {
			estado = "Inativo";
			this.cardAtivo.estado = estado
			this.modalRef.close()
		} else {
			estado = "Ativo";
			this.cardAtivo.estado = estado
		this.modalRef.close();
		}
		this.listner.emit({ novoEstado: this.message });
		
	}

	ngOnInit(): void {}
}
