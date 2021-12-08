import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-ativo",
  templateUrl: "./card-ativo.component.html",
  styleUrls: ["./card-ativo.component.css"],
})
export class CardAtivoComponent implements OnInit {
  
  constructor() {
  }
  
 estado: String = "Ativo"  

  ngOnInit(): void {}

  /**
   * name
   */
   mudaEstado(estado: string) {
    if (estado == "Ativo") {
      this.estado = "Inativo";
      return this.estado;
    } else {
      this.estado = "Ativo";
      return this.estado;
    }
  }
}
