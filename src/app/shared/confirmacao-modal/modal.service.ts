import { ConfirmacaoModalComponent } from "./confirmacao-modal.component";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ModalService {
	modalService: any;

	constructor(modalService: BsModalService) {}


	showConfirm (
		bodyText: string,
		confirmButtonText?: string,
		cancelarButtonText?: string
	) {
		const bsModalRef: BsModalRef = this.modalService(ConfirmacaoModalComponent)
		bsModalRef.content.bodyText = bodyText;
		bsModalRef.content.confirmButtonText = confirmButtonText;

		if (confirmButtonText) {
			bsModalRef.content.confirmButtonText =
				confirmButtonText;
		}
		if (cancelarButtonText) {
			bsModalRef.content.cancelarButtonText =
				cancelarButtonText;
		}
		
	}
}
