import { ModalConfirmacaoComponent } from "./../maincontent/card-ativo/modal-confirmacao/modal-confirmacao.component";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { HomeService } from "../home.service";
import { HeaderTitlService } from "src/app/components/template/header/header-titl.service";

@Component({
	selector: "app-aplicativos",
	templateUrl: "./aplicativos.component.html",
	styleUrls: ["./aplicativos.component.css"],

})
export class AplicativosComponent implements OnInit {
	pageTitle: string = "Módulos";

	modalRef: any;
	nomeDominio: String = "";

	constructor(
		private modalService: MdbModalService,
		public homeService: HomeService,
		private router: Router,
		private headerTitle: HeaderTitlService,
		
	) {
		this.nomeDominio = homeService.nomeDominio;
		headerTitle.titlePage = this.pageTitle;
	
	}

	ngOnInit(): void {
		this.trocaNome()
	}
	trocaNome()
	{
	this.headerTitle.titlePage = this.pageTitle	

	 }

	openModal() {
		this.modalRef = this.modalService.open(
			ModalConfirmacaoComponent
		);
	}
}
