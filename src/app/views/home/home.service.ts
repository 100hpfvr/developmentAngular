import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class HomeService {
	constructor() {}
	nomeDominio: String = "";

	setAplicativo(event: String) {
		this.nomeDominio = event;
	}

	getAplicativo() {
		return this.nomeDominio;
	}

	getDominios()
			{
				return [
					"Consultoria_DEMO",
					"Estagio",
					"simula_prd",
					"Sispro",
					"Sispro2",
					"Sispro3",
					"Videos",
					"tesjoadpsjnioafbheio",
				];
			}
}
