import { AppComponent } from './app.component';
import { AplicativosComponent } from "./views/home/aplicativos/aplicativos.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaincontentComponent } from "./views/home/maincontent/maincontent.component";
import { UsuariosTelaComponent } from "./views/home/usuarios-tela/usuarios-tela.component";

const routes: Routes = [
  {
    path: "",
    component: MaincontentComponent /*  */,
  },

  {
    path: "usuarios",
    component: UsuariosTelaComponent,
  },
  {
    path: "aplicativos",
    component: AplicativosComponent /*  */,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
