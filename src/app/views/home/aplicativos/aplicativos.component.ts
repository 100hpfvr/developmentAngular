import { CardAtivoComponent } from './../maincontent/card-ativo/card-ativo.component';
import { ModalConfirmacaoComponent } from "./../maincontent/card-ativo/modal-confirmacao/modal-confirmacao.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { HomeService } from "../home.service";

@Component({
	selector: "app-aplicativos",
	templateUrl: "./aplicativos.component.html",
  styleUrls: ["./aplicativos.component.css"],
  providers: []
})
export class AplicativosComponent implements OnInit {
	modalRef: any;
	nomeDominio: String = "";

	constructor(
		private modalService: MdbModalService,
		public homeService: HomeService,
		private router: Router
	) {
		this.nomeDominio = homeService.nomeDominio;
	}

	ngOnInit(): void {
		console.log(this.nomeDominio);
	}

	openModal() {
		this.modalRef = this.modalService.open(
			ModalConfirmacaoComponent
		);
	}
}
