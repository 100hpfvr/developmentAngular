import { HomeService } from "./../home.service";

import { Component, Input, OnInit, Output } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "src/app/components/template/modal/modal.component";
@Component({
	selector: "app-maincontent",
	templateUrl: "./maincontent.component.html",
	styleUrls: ["./maincontent.component.css"],
})
export class MaincontentComponent implements OnInit {
	modalRef: any;
	constructor(
		private modalService: MdbModalService,
		public homeService: HomeService,
		private router: Router
	) {
		this.nomeDominios = this.homeService.getDominios();
	}

	openModal() {
		this.modalRef = this.modalService.open(ModalComponent);
	}

	GotoAppByService(event: String) {
		this.homeService.setAplicativo(event);
		this.router.navigateByUrl("aplicativos");
	}

	ngOnInit(): void {}

	instanciaHomeService = new HomeService(); // Instanciando o home service

	nomeDominios: String[] = [];
}
