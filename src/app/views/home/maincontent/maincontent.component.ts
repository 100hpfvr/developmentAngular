import { HomeService } from "./../home.service";

import { Component, Input, OnInit, Output } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "./modal/modal.component";
import { HeaderTitlService } from "src/app/components/template/header/header-titl.service";


@Component({
	templateUrl: "./maincontent.component.html",
	styleUrls: ["./maincontent.component.css"],
	
})
export class MaincontentComponent implements OnInit {
	modalRef: any;
	pageTitle: string = "Configurações de Aplicativos";
	constructor(
	
		private headerTitle: HeaderTitlService,
		private modalService: MdbModalService,
		public homeService: HomeService,
		private router: Router
	) {
		this.nomeDominios = this.homeService.getDominios();
		headerTitle.titlePage = this.pageTitle;
		
	}

	openModal() {
		this.modalRef = this.modalService.open(ModalComponent);
	}

	GotoAppByService(event: String) {
		this.homeService.setAplicativo(event);
		this.router.navigateByUrl("aplicativos");
	}

	ngOnInit(): void
	{
		
	}

	instanciaHomeService = new HomeService(); // Instanciando o home service

	nomeDominios: String[] = [];
}
