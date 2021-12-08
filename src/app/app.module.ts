import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";


import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { MaincontentComponent } from './views/home/maincontent/maincontent.component';
import { CardTileComponent } from './components/template/card-tile/card-tile.component';
import { CardHeaderComponent } from './components/template/card-header/card-header.component';
import { TitleSectionComponent } from './views/home/title-section/title-section.component';
import { MatSliderModule } from '@angular/material/slider';
import { AplicativosComponent } from './views/home/aplicativos/aplicativos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CardAtivoComponent } from './views/home/maincontent/card-ativo/card-ativo.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    MaincontentComponent,
    CardTileComponent,
    CardHeaderComponent,
    TitleSectionComponent,
    AplicativosComponent,
    CardAtivoComponent
  ],
  imports: [
    MdbModalModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatSliderModule,
    NgbModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
  ],
  providers: [MaincontentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
