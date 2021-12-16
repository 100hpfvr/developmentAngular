import { Component, OnInit } from "@angular/core";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalConfirmacaoComponent } from "./modal-confirmacao/modal-confirmacao.component";
@Component({
	selector: "app-card-ativo",
	templateUrl: "./card-ativo.component.html",
	styleUrls: ["./card-ativo.component.css"],
	
})
export class CardAtivoComponent implements OnInit {
	modalRef: any;
	estado: string = "Ativo";
	constructor(private modalService: MdbModalService)
	{
	

	}

	ngOnInit(): void {}

	confirmacaoModal(estado: String) {
		this.modalRef = this.modalService.open(
			ModalConfirmacaoComponent
		);
	}
}
