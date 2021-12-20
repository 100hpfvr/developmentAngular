import { ModalService } from "./../../../../shared/confirmacao-modal/modal.service";
import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";

@Component({
	selector: "app-card-ativo",
	templateUrl: "./card-ativo.component.html",
	styleUrls: [ "./card-ativo.component.css" ],
})
export class CardAtivoComponent implements OnInit {
	//!Class
	estado: string = "Ativo"; // estado nativo do cardButton
	changeModalRef?: BsModalRef; // Referência do modal de mudar estado
	@ViewChild("changeModal", { static: true }) changeModal: any;
	constructor(
		private modalService: BsModalService,
		public modal: ModalService
	) {}

	abrirModaldeConfirmacao(estado: string) {
		/* 
		this.changeModalRef = this.modalService.show(this.changeModal, {
			class: "modal-sm",
		} );*/

		this.modal.showConfirm(
			"Tem Certeza que quer trocar o estado?",
			"ok",
			"não"
		);
	}
	declinarTroca() {
		this.changeModalRef?.hide();
	}
	confirmarTroca(estado: string) {
		if (this.estado == "Ativo") {
			this.estado = "Inativo";
		} else {
			this.estado = "Ativo";
		}
		this.changeModalRef?.hide();
		return this.estado;
	}

	ngOnInit(): void {}
}
