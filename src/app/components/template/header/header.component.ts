import { HeaderTitlService } from "./header-titl.service";
import { Component, OnInit } from "@angular/core";
import { AplicativosComponent } from "src/app/views/home/aplicativos/aplicativos.component";
import { MaincontentComponent } from "src/app/views/home/maincontent/maincontent.component";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
	providers: [
		HeaderTitlService,
		AplicativosComponent,
		MaincontentComponent,
	],
})
  

export class HeaderComponent implements OnInit {
  tituloAtual: string = ""
  constructor(
		public headerTitle: HeaderTitlService,
		public aplicatvosComponent: AplicativosComponent,
		public mainContentComponent: MaincontentComponent
  )
  {
    
  }

	ngOnInit(): void {}
}
{
}
