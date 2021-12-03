import { Component, OnInit } from '@angular/core';
import { ModalComponent } from 'src/app/components/template/modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-title-section',
  templateUrl: './title-section.component.html',
  styleUrls: ['./title-section.component.css']
})
export class TitleSectionComponent implements OnInit {

  modalRef: MdbModalRef<ModalComponent> | undefined;
  constructor(private modalService: MdbModalService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent)
  }


}