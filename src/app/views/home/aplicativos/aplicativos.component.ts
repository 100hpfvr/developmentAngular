import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeService } from "../home.service";
import { HeaderTitlService } from "src/app/components/template/header/header-titl.service";

@Component({
	selector: "app-aplicativos",
	templateUrl: "./aplicativos.component.html",
	styleUrls: ["./aplicativos.component.css"],
})
export class AplicativosComponent implements OnInit {
	pageTitle: string = "Módulos";


	nomeDominio: String = "";

	constructor(
		public homeService: HomeService,
		private router: Router,
		private headerTitle: HeaderTitlService
	) {
		this.nomeDominio = homeService.nomeDominio;
		headerTitle.titlePage = this.pageTitle;
	}

	ngOnInit(): void {
		this.trocaNome();
	}
	trocaNome() {
		this.headerTitle.titlePage = this.pageTitle;
	}

	
}
