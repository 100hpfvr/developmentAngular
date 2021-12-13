import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MdbModalService } from "mdb-angular-ui-kit/modal";
import { ModalComponent } from "src/app/components/template/modal/modal.component";
import { HomeService } from "../home.service";

@Component({
  selector: "app-aplicativos",
  templateUrl: "./aplicativos.component.html",
  styleUrls: ["./aplicativos.component.css"],
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
    this.modalRef = this.modalService.open(ModalComponent);
  }
}
