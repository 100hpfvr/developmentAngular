
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Main } from "../../observable";

@Component({
	selector: "app-home",
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.css"],
	providers: [],
})

export class HomeComponent implements OnInit {
pageTitle = "Configurações do Aplicativo"

  constructor(private http: HttpClient,)
  {

  }

	ngOnInit(): void {
		new Main().main();
	}
}
