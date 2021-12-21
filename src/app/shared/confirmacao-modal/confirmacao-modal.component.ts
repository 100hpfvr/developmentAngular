import { BsModalRef } from "ngx-bootstrap/modal";

import { Component, Input, OnInit } from "@angular/core";
@Component({
	selector: "app-confirmacao-modal",
	templateUrl: "./confirmacao-modal.component.html",
	styleUrls: ["./confirmacao-modal.component.css"],
})
export class ConfirmacaoModalComponent implements OnInit {
	@Input() bodyText = "default";
	@Input() confirmButtonText = "Sim";
	@Input() cancelarButtonText = "cancelar";
	constructor(public bsModalRef: BsModalRef) {}

	ngOnInit(): void {}
	confirmar() {}
	fechar() {
		this.bsModalRef.hide();
	}
}
