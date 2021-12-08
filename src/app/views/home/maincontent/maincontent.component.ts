import { Component, OnInit } from "@angular/core";
import { TitleSectionComponent } from "../title-section/title-section.component";
@Component({
  selector: "app-maincontent",
  templateUrl: "./maincontent.component.html",
  styleUrls: ["./maincontent.component.css"],
})
export class MaincontentComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}

  entraNoDominio() {
   
   

  }

  

  nomeDominios: String[] = [
    "Consultoria_DEMO",
    "Estagio",
    "simula_prd",
    "Sispro",
    "Sispro2",
    "Sispro3",
    "Videos",
  ];
}
