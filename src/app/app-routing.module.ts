import { AplicativosComponent } from "./views/home/aplicativos/aplicativos.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaincontentComponent } from "./views/home/maincontent/maincontent.component";

const routes: Routes = [
  {
    path: "",
    component: MaincontentComponent /*  */,
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
