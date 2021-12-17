import { HeaderTitlService } from "./components/template/header/header-titl.service";
import { HomeService } from "./views/home/home.service";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";

import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { MaincontentComponent } from "./views/home/maincontent/maincontent.component";
import { CardTileComponent } from "./components/template/card-tile/card-tile.component";
import { CardHeaderComponent } from "./components/template/card-header/card-header.component";
import { AplicativosComponent } from "./views/home/aplicativos/aplicativos.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CardAtivoComponent } from "./views/home/maincontent/card-ativo/card-ativo.component";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		MaincontentComponent,
		CardTileComponent,
		CardHeaderComponent,
		AplicativosComponent,
		CardAtivoComponent,
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		MatCardModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatListModule,
		NgbModule,
  ModalModule.forRoot(),
	],
	providers: [HomeService, HeaderTitlService],
	bootstrap: [AppComponent],
})
export class AppModule {}
